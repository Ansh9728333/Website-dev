// Supabase enquiry form integration for Easy India Packers Movers.
// Replace these two values with your Supabase project details before publishing.
const SUPABASE_URL = "PASTE_YOUR_SUPABASE_PROJECT_URL";
const SUPABASE_ANON_KEY = "PASTE_YOUR_SUPABASE_ANON_KEY";

const enquiryForm = document.querySelector("#enquiryForm");
const formStatus = document.querySelector("#formStatus");

function setFormStatus(message, type) {
  if (!formStatus) return;
  formStatus.textContent = message;
  formStatus.classList.remove("is-success", "is-error");
  if (type) {
    formStatus.classList.add(`is-${type}`);
  }
}

function isSupabaseConfigured() {
  return (
    SUPABASE_URL.startsWith("https://") &&
    SUPABASE_ANON_KEY.length > 30 &&
    !SUPABASE_URL.includes("PASTE_YOUR") &&
    !SUPABASE_ANON_KEY.includes("PASTE_YOUR")
  );
}

if (enquiryForm) {
  enquiryForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!isSupabaseConfigured()) {
      setFormStatus("Supabase is not connected yet. Add your project URL and anon key in app.js.", "error");
      return;
    }

    const submitButton = enquiryForm.querySelector("button[type='submit']");
    const formData = new FormData(enquiryForm);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      mobile: String(formData.get("mobile") || "").trim(),
      moving_from: String(formData.get("from") || "").trim(),
      moving_to: String(formData.get("to") || "").trim(),
      moving_date: formData.get("date") || null,
      service_type: String(formData.get("service") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      source: "shifteasyindia.com"
    };

    if (!payload.name || !payload.mobile || !payload.moving_from || !payload.moving_to) {
      setFormStatus("Please fill name, mobile number, moving from and moving to.", "error");
      return;
    }

    try {
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "Submitting...";
      }
      setFormStatus("Submitting your enquiry...", "");

      const response = await fetch(`${SUPABASE_URL}/rest/v1/enquiries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": SUPABASE_ANON_KEY,
          "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
          "Prefer": "return=minimal"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Supabase request failed");
      }

      enquiryForm.reset();
      setFormStatus("Thank you. Your enquiry has been submitted successfully.", "success");
    } catch (error) {
      setFormStatus("Sorry, enquiry could not be submitted. Please call 7015066265.", "error");
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = "Submit Enquiry";
      }
    }
  });
}
