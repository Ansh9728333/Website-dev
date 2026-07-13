const enquiryForms = document.querySelectorAll(".enquiry-form, .quick-form");

function formValue(formData, names) {
  for (const name of names) {
    const value = formData.get(name);
    if (value !== null && String(value).trim()) {
      return String(value).trim();
    }
  }
  return "";
}

function setFormStatus(form, message, type) {
  const formStatus = form.querySelector(".form-status") || document.querySelector("#formStatus");
  if (!formStatus) return;
  formStatus.textContent = message;
  formStatus.classList.remove("is-success", "is-error");
  if (type) {
    formStatus.classList.add(`is-${type}`);
  }
}

function ensureHoneypot(form) {
  if (form.querySelector('[name="company_website"]')) return;

  const label = document.createElement("label");
  label.className = "form-honeypot";
  label.setAttribute("aria-hidden", "true");
  label.tabIndex = -1;
  label.innerHTML = 'Company website <input type="text" name="company_website" autocomplete="off" tabindex="-1">';
  form.appendChild(label);
}

function buildPayload(form) {
  const formData = new FormData(form);
  return {
    name: formValue(formData, ["name", "fullName"]),
    phone: formValue(formData, ["phone", "mobile", "whatsapp", "contact"]),
    email: formValue(formData, ["email"]),
    movingFrom: formValue(formData, ["movingFrom", "from", "moving_from"]),
    movingTo: formValue(formData, ["movingTo", "to", "moving_to"]),
    movingDate: formValue(formData, ["movingDate", "date", "moving_date"]),
    serviceType: formValue(formData, ["serviceType", "service", "service_type"]),
    message: formValue(formData, ["message", "notes"]),
    company_website: formValue(formData, ["company_website", "companyWebsite"]),
    pageSource: window.location.href,
    formName: form.dataset.formName || form.id || "Website enquiry form",
    city: document.querySelector("h1")?.textContent?.trim() || ""
  };
}

enquiryForms.forEach((form) => {
  ensureHoneypot(form);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (form.dataset.submitting === "true") return;

    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton ? submitButton.textContent : "";
    const payload = buildPayload(form);

    if (!payload.phone) {
      setFormStatus(form, "Please enter your mobile number.", "error");
      return;
    }

    try {
      form.dataset.submitting = "true";
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "Submitting...";
      }
      setFormStatus(form, "Submitting your enquiry...", "");

      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Enquiry request failed");
      }

      form.reset();
      setFormStatus(form, "Thank you! Your enquiry has been submitted. Our team will connect shortly.", "success");
    } catch (error) {
      setFormStatus(form, "Something went wrong. Please call or WhatsApp 8860688698.", "error");
    } finally {
      form.dataset.submitting = "false";
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
      }
    }
  });
});

