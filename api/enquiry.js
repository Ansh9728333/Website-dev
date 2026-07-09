const WHATSHUB_URL = "https://whatshub-production.up.railway.app/api/messages/send";
const ADMIN_WHATSAPP_NUMBER = "919728414117";
const PUBLIC_PHONE = "8860688698";

// Required Vercel environment variables:
// WHATSHUB_API_KEY for WhatsApp messages.
// SUPABASE_URL plus SUPABASE_SERVICE_ROLE_KEY or SUPABASE_ANON_KEY for enquiry storage.
// Never expose these keys in HTML, CSS, or browser-side JavaScript.

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

function normalizeDate(value) {
  if (!value) return null;
  return /^\d{4}-\d{2}-\d{2}$/.test(value) ? value : null;
}

async function saveEnquiryToSupabase(payload) {
  const supabaseUrl = String(process.env.SUPABASE_URL || "").replace(/\/$/, "");
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Supabase environment variables are missing.");
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/enquiries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apikey": supabaseKey,
      "Authorization": `Bearer ${supabaseKey}`,
      "Prefer": "return=minimal"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(`Supabase insert failed with ${response.status}: ${detail}`);
  }
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

  const enquiryRecord = {
    name: name || "Not provided",
    mobile: phone,
    moving_from: movingFrom || "Not provided",
    moving_to: movingTo || "Not provided",
    moving_date: normalizeDate(movingDate),
    service_type: serviceType || "Not provided",
    message: [
      message,
      email ? `Email: ${email}` : "",
      city ? `City/Page: ${city}` : "",
      formName ? `Form: ${formName}` : ""
    ].filter(Boolean).join("\n"),
    source: pageSource || "shifteasyindia.com"
  };

  const saveResult = await Promise.allSettled([
    saveEnquiryToSupabase(enquiryRecord)
  ]);

  const supabaseFailed = saveResult[0].status === "rejected";
  if (supabaseFailed) {
    console.error("Supabase enquiry save failed:", saveResult[0].reason);
  }

  const apiKey = process.env.WHATSHUB_API_KEY;
  if (!apiKey && supabaseFailed) {
    console.error("WHATSHUB_API_KEY is missing in Vercel environment variables.");
    return res.status(500).json({
      success: false,
      message: "Unable to submit enquiry. Please call or WhatsApp 8860688698."
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

  const results = apiKey
    ? await Promise.allSettled([
      sendWhatsAppMessage(phone, customerMessage, apiKey),
      sendWhatsAppMessage(ADMIN_WHATSAPP_NUMBER, adminMessage, apiKey)
    ])
    : [
      { status: "rejected", reason: new Error("WHATSHUB_API_KEY is missing.") },
      { status: "rejected", reason: new Error("WHATSHUB_API_KEY is missing.") }
    ];

  const failed = results.filter((result) => result.status === "rejected");
  failed.forEach((result) => console.error("WhatsHub send failed:", result.reason));

  if (supabaseFailed && failed.length === 2) {
    return res.status(502).json({
      success: false,
      message: "Unable to submit enquiry. Please call or WhatsApp 8860688698."
    });
  }

  return res.status(200).json({
    success: true,
    partial: supabaseFailed || failed.length > 0,
    message: supabaseFailed || failed.length > 0
      ? "Enquiry submitted. Our team will connect shortly."
      : "Enquiry submitted successfully"
  });
};
