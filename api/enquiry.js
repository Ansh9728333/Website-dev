const WHATSHUB_URL = "https://whatshub-production.up.railway.app/api/messages/send";
const ADMIN_WHATSAPP_NUMBER = "919728414117";
const PUBLIC_PHONE = "7015066265";

// Required Vercel environment variable: WHATSHUB_API_KEY.
// Never expose this key in HTML, CSS, or browser-side JavaScript.

function valueFrom(body, keys) {
  for (const key of keys) {
    if (body[key] !== undefined && body[key] !== null) {
      return body[key];
    }
  }
  return "";
}

function sanitizeText(value, maxLength) {
  return String(value || "")
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function normalizeIndianPhone(value) {
  const digits = String(value || "").replace(/\D/g, "");
  if (!digits) return null;

  let phone = digits;
  if (phone.length === 11 && phone.startsWith("0")) {
    phone = phone.slice(1);
  }
  if (phone.length === 10) {
    phone = `91${phone}`;
  }

  return phone.length === 12 && phone.startsWith("91") ? phone : null;
}

function validEmail(value) {
  if (!value) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function fieldOrFallback(value) {
  return value || "Not provided";
}

async function sendWhatsAppMessage(to, message, apiKey) {
  const response = await fetch(WHATSHUB_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": apiKey,
      "Bypass-Tunnel-Reminder": "true"
    },
    body: JSON.stringify({ to, message })
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(`WhatsHub request failed with ${response.status}: ${detail}`);
  }

  return response.json().catch(() => ({}));
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const body = req.body || {};
  if (JSON.stringify(body).length > 10000) {
    return res.status(413).json({ success: false, message: "Request is too large" });
  }

  const honeypot = sanitizeText(valueFrom(body, ["company_website", "companyWebsite"]), 150);
  if (honeypot) {
    return res.status(200).json({ success: true, message: "Enquiry submitted successfully" });
  }

  const name = sanitizeText(valueFrom(body, ["name", "fullName"]), 100);
  const email = sanitizeText(valueFrom(body, ["email"]), 120);
  const phoneRaw = valueFrom(body, ["phone", "whatsapp", "mobile", "contact"]);
  const phone = normalizeIndianPhone(phoneRaw);
  const movingFrom = sanitizeText(valueFrom(body, ["movingFrom", "from", "moving_from"]), 150);
  const movingTo = sanitizeText(valueFrom(body, ["movingTo", "to", "moving_to"]), 150);
  const movingDate = sanitizeText(valueFrom(body, ["movingDate", "date", "moving_date"]), 40);
  const serviceType = sanitizeText(valueFrom(body, ["serviceType", "service", "service_type"]), 100);
  const message = sanitizeText(valueFrom(body, ["message", "notes"]), 1000);
  const city = sanitizeText(valueFrom(body, ["city"]), 80);
  const pageSource = sanitizeText(valueFrom(body, ["pageSource", "source"]), 250);
  const formName = sanitizeText(valueFrom(body, ["formName"]), 100);
  const cityOrPageSource = city || pageSource || formName || "Website enquiry";

  if (!phone) {
    return res.status(400).json({ success: false, message: "Please enter a valid 10 digit mobile number" });
  }

  if (!validEmail(email)) {
    return res.status(400).json({ success: false, message: "Please enter a valid email address" });
  }

  const apiKey = process.env.WHATSHUB_API_KEY;
  if (!apiKey) {
    console.error("WHATSHUB_API_KEY is missing in Vercel environment variables.");
    return res.status(500).json({
      success: false,
      message: "Unable to submit enquiry. Please call or WhatsApp 7015066265."
    });
  }

  const submittedAt = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  const customerMessage = [
    "Thank you for contacting Easy India Packers Movers.",
    "",
    "We have received your enquiry successfully. Our team will connect with you shortly for packing, moving, survey or quotation support.",
    "",
    `For urgent help, call or WhatsApp: ${PUBLIC_PHONE}`,
    "Website: shifteasyindia.com",
    "",
    "* Easy India Packers Movers"
  ].join("\n");

  const adminMessage = [
    "New website enquiry - Easy India Packers Movers",
    "",
    `Name: ${fieldOrFallback(name)}`,
    `Phone: +${phone}`,
    `Email: ${fieldOrFallback(email)}`,
    `Moving From: ${fieldOrFallback(movingFrom)}`,
    `Moving To: ${fieldOrFallback(movingTo)}`,
    `Moving Date: ${fieldOrFallback(movingDate)}`,
    `Service: ${fieldOrFallback(serviceType)}`,
    `City/Page Source: ${fieldOrFallback(cityOrPageSource)}`,
    `Message: ${fieldOrFallback(message)}`,
    "",
    "Website: shifteasyindia.com",
    `Submitted At: ${submittedAt}`,
    "",
    "Please contact the customer shortly."
  ].join("\n");

  const results = await Promise.allSettled([
    sendWhatsAppMessage(phone, customerMessage, apiKey),
    sendWhatsAppMessage(ADMIN_WHATSAPP_NUMBER, adminMessage, apiKey)
  ]);

  const failed = results.filter((result) => result.status === "rejected");
  failed.forEach((result) => console.error("WhatsHub send failed:", result.reason));

  if (failed.length === 2) {
    return res.status(502).json({
      success: false,
      message: "Unable to submit enquiry. Please call or WhatsApp 7015066265."
    });
  }

  return res.status(200).json({
    success: true,
    partial: failed.length === 1,
    message: failed.length === 1
      ? "Enquiry submitted. Our team will connect shortly."
      : "Enquiry submitted successfully"
  });
};
