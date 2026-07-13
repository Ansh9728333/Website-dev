const fs = require("fs");

const brand = "Easy India Packers Movers";
const domain = "shifteasyindia.com";
const phone = "7015066265";
const email = "info@shifteasyindia.com";
const address = "Plot No 81 First Floor, Housing Board Colony, Sector 7, Gurgaon, Haryana 122001";
const logo = "assets/logo-easy-india-packers-movers.png";

const pageMeta = {
  "about-us.html": {
    title: "About Us | Easy India Packers Movers",
    description: "Learn about Easy India Packers Movers, a trusted packing and moving service provider offering home shifting, office relocation, domestic moving, packing and transport support.",
    canonical: "https://shifteasyindia.com/about-us.html"
  },
  "privacy-policy.html": {
    title: "Privacy Policy | Easy India Packers Movers",
    description: "Read the privacy policy of Easy India Packers Movers to understand how customer information is collected, used and protected.",
    canonical: "https://shifteasyindia.com/privacy-policy.html"
  }
};

function localBusinessSchema(pageUrl = `https://${domain}/`) {
  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": brand,
    "url": pageUrl,
    "logo": `https://${domain}/${logo}`,
    "telephone": "+917015066265",
    "email": email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No 81 First Floor, Housing Board Colony, Sector 7",
      "addressLocality": "Gurgaon",
      "addressRegion": "Haryana",
      "postalCode": "122001",
      "addressCountry": "IN"
    },
    "areaServed": ["Delhi", "Gurgaon", "Hyderabad", "Noida", "Faridabad", "Ghaziabad"],
    "serviceType": ["Packers and Movers", "Home Shifting", "Office Relocation", "Domestic Moving", "Packing Service", "Loading Service", "Storage Support", "Vehicle Transportation"]
  };
}

function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": brand,
    "url": `https://${domain}/`,
    "logo": `https://${domain}/${logo}`,
    "email": email,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+917015066265",
      "contactType": "customer support",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    }
  };
}

function schemaBlocks(canonical, keepFaq = "") {
  return `  <script type="application/ld+json" data-schema="local-business">\n${JSON.stringify(localBusinessSchema(canonical), null, 2)}\n  </script>\n  <script type="application/ld+json" data-schema="organization">\n${JSON.stringify(organizationSchema(), null, 2)}\n  </script>\n${keepFaq}`;
}

function topBar() {
  return `  <div class="top-bar">
    <div class="container top-bar__inner">
      <p>Trusted Packers &amp; Movers Across India</p>
      <div class="top-bar__links">
        <a href="tel:+917015066265">Phone: ${phone}</a>
        <a href="https://wa.me/917015066265">WhatsApp: ${phone}</a>
        <a href="mailto:${email}">Email: ${email}</a>
        <a href="https://${domain}/">Website: ${domain}</a>
      </div>
    </div>
  </div>`;
}

function header(ctaHref = "contact.html#enquiry") {
  return `  <header class="site-header">
    <div class="container nav">
      <a class="logo" href="index.html" aria-label="${brand} home">
        <img class="logo__image" src="${logo}" width="56" height="56" alt="${brand} logo" loading="eager" decoding="async">
        <span>${brand}</span>
      </a>
      <input class="nav__toggle" type="checkbox" id="nav-toggle" aria-label="Toggle navigation">
      <label class="nav__hamburger" for="nav-toggle" aria-label="Open navigation menu"><span></span><span></span><span></span></label>
      <nav class="nav__menu" aria-label="Primary navigation">
        <a href="index.html">Home</a>
        <a href="shifting-process.html">Shifting Process</a>
        <a href="domestic-moving.html">Domestic Moving</a>
        <a href="international-moving.html">International Moving</a>
        <a href="service.html">Service</a>
        <a href="about-us.html">About Us</a>
        <a href="contact.html">Contact</a>
      </nav>
      <a class="btn btn--small" href="${ctaHref}">Get Free Quote</a>
    </div>
  </header>`;
}

function footer() {
  return `  <footer class="footer">
    <div class="container footer__grid">
      <div>
        <a class="footer-logo" href="index.html" aria-label="${brand} home">
          <img src="${logo}" width="76" height="76" alt="${brand} logo" loading="lazy" decoding="async">
          <span>${brand}</span>
        </a>
        <p>${address}</p>
      </div>
      <div>
        <h3>Company</h3>
        <a href="about-us.html">About Us</a>
        <a href="privacy-policy.html">Privacy Policy</a>
        <a href="shifting-process.html">Shifting Process</a>
        <a href="contact.html">Contact Us</a>
      </div>
      <div>
        <h3>Services</h3>
        <a href="domestic-moving.html">Domestic Moving</a>
        <a href="international-moving.html">International Moving</a>
        <a href="service.html">Office Relocation</a>
        <a href="service.html">Packing Service</a>
        <a href="service.html">Vehicle Transportation</a>
      </div>
      <div>
        <h3>Locations</h3>
        <a href="packers-and-movers-in-delhi.html">Packers and Movers in Delhi</a>
        <a href="packers-and-movers-in-gurgaon.html">Packers and Movers in Gurgaon</a>
        <a href="packers-and-movers-in-hyderabad.html">Packers and Movers in Hyderabad</a>
      </div>
      <div>
        <h3>Contact</h3>
        <p>${brand}</p>
        <p>Phone: <a href="tel:+917015066265">${phone}</a></p>
        <p>WhatsApp: <a href="https://wa.me/917015066265">${phone}</a></p>
        <p>Email: <a href="mailto:${email}">${email}</a></p>
        <p>Website: ${domain}</p>
      </div>
    </div>
    <div class="footer__bottom"><p>&copy; 2026 ${brand}. All Rights Reserved.</p></div>
  </footer>`;
}

function htmlShell({ title, description, canonical, main, ctaHref = "contact.html#enquiry" }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="canonical" href="${canonical}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
${schemaBlocks(canonical)}</head>
<body>
${topBar()}
${header(ctaHref)}
  <main>
${main}
  </main>
${footer()}
  <div class="floating-actions" aria-label="Quick contact"><a class="float-btn float-btn--call" href="tel:+917015066265">Call</a><a class="float-btn float-btn--whatsapp" href="https://wa.me/917015066265">WhatsApp</a></div>
</body>
</html>
`;
}

const aboutMain = `    <section class="page-hero">
      <div class="container page-hero__grid">
        <div class="page-hero-content">
          <span class="eyebrow">About Company</span>
          <h1>About Easy India Packers Movers</h1>
          <p>Customer-focused packing and moving support for homes, offices, vehicles and domestic goods transportation.</p>
          <div class="page-hero-actions"><a class="btn" href="tel:+917015066265">Call ${phone}</a><a class="btn btn--white" href="https://wa.me/917015066265">WhatsApp Now</a></div>
        </div>
        <div class="about-logo-panel"><img src="${logo}" width="520" height="520" alt="${brand} logo" loading="lazy" decoding="async"></div>
      </div>
    </section>
    <section class="section info-section"><div class="container"><div class="section-heading"><span class="eyebrow">Who We Are</span><h2>Reliable Packing and Moving Support</h2><p class="section-lead">${brand} is a customer-focused packing and moving service provider helping people shift homes, offices, vehicles and goods with planned packing, careful handling and reliable transportation support.</p></div></div></section>
    <section class="section"><div class="container intro__grid"><div><span class="eyebrow">Our Mission</span><h2>Simple, Safe and Stress-Free Relocation</h2></div><div class="intro__copy"><p>Our mission is to make relocation simple, safe and stress-free by offering clear communication, transparent estimates, quality packing and customer-friendly support.</p><p>Every move is planned around customer requirements, item type, pickup condition, delivery location and practical timing.</p></div></div></section>
    <section class="section section-soft"><div class="container"><div class="section-heading"><span class="eyebrow">What We Do</span><h2>Moving Services We Provide</h2></div><div class="service-grid">${["Home Shifting","Office Relocation","Domestic Moving","Packing Service","Loading and Unloading","Storage Support","Vehicle Transportation Support"].map((item) => `<article class="service-card"><h3>${item}</h3><p>Planned support for ${item.toLowerCase()} with careful handling and clear customer communication.</p></article>`).join("")}</div></div></section>
    <section class="section"><div class="container"><div class="section-heading"><span class="eyebrow">Trust</span><h2>Why Customers Trust Us</h2></div><div class="trust-detail-grid">${["Transparent communication","Safe packing process","Trained moving support","Doorstep pickup and delivery","Call and WhatsApp support","Planned transport handling"].map((item) => `<article class="trust-detail-card"><h3>${item}</h3><p>Our team keeps the moving process practical, organized and customer-friendly.</p></article>`).join("")}</div></div></section>
    <section class="section section-soft"><div class="container"><div class="cta-box"><h2>Our Address</h2><p>${address}</p><div class="cta__actions"><a class="btn" href="tel:+917015066265">Call ${phone}</a><a class="btn btn--white" href="https://wa.me/917015066265">WhatsApp Now</a></div></div></div></section>
    <section class="city-cta"><div class="container cta-box"><div><h2>Planning to Move?</h2><p>Talk to ${brand} for packing, survey booking and moving estimate support.</p></div><div class="cta__actions"><a class="btn" href="tel:+917015066265">Call ${phone}</a><a class="btn btn--white" href="https://wa.me/917015066265">WhatsApp Now</a></div></div></section>`;

const privacyMain = `    <section class="page-hero"><div class="container page-hero__grid"><div class="page-hero-content"><span class="eyebrow">Policy</span><h1>Privacy Policy</h1><p>This page explains how ${brand} collects, uses and protects customer information.</p></div><div class="about-logo-panel"><img src="${logo}" width="520" height="520" alt="${brand} logo" loading="lazy" decoding="async"></div></div></section>
    <section class="section policy-section"><div class="container policy-content">
      <h2>Introduction</h2><p>This Privacy Policy explains how ${brand} collects, uses and protects customer information submitted through our website, phone calls, WhatsApp, enquiry forms and service communication.</p>
      <h2>Information We Collect</h2><ul><li>Name</li><li>Mobile number</li><li>Email address</li><li>Pickup location</li><li>Delivery location</li><li>Moving date</li><li>Service requirement</li><li>Message or enquiry details</li></ul>
      <h2>How We Use Information</h2><ul><li>Respond to enquiries</li><li>Share moving estimates</li><li>Schedule surveys</li><li>Coordinate packing and moving services</li><li>Provide customer support</li><li>Improve our services</li></ul>
      <h2>Information Sharing</h2><p>We do not sell customer information. Information may be shared only with internal team members or service partners when needed to complete packing, moving, transport or delivery support.</p>
      <h2>Data Security</h2><p>We try to keep customer information safe and use it only for service-related communication.</p>
      <h2>Cookies</h2><p>The website may use basic cookies or analytics tools to understand website performance and improve customer experience.</p>
      <h2>Customer Rights</h2><p>Customers can contact us to request correction or removal of their information from our enquiry records.</p>
      <h2>Contact for Privacy</h2><p><strong>${brand}</strong><br>Address: ${address}<br>Phone: <a href="tel:+917015066265">${phone}</a><br>Email: <a href="mailto:${email}">${email}</a><br>Website: ${domain}</p>
      <h2>Last Updated</h2><p>2026</p>
    </div></section>`;

const contactMain = `    <section class="page-hero"><div class="container page-hero__grid"><div class="page-hero-content"><span class="eyebrow">Contact Team</span><h1>Contact Easy India Packers Movers</h1><p>We are available to help you with booking, moving estimate, survey, packing guidance and delivery support.</p><div class="page-hero-actions"><a class="btn" href="tel:+917015066265">Call ${phone}</a><a class="btn btn--white" href="https://wa.me/917015066265">WhatsApp Now</a></div></div><div class="about-logo-panel"><img src="${logo}" width="520" height="520" alt="${brand} logo" loading="lazy" decoding="async"></div></div></section>
    <section class="section info-section"><div class="container"><div class="section-heading"><span class="eyebrow">Contact Details</span><h2>Speak With Our Moving Support Team</h2><p class="section-lead">For faster response, keep your pickup city, destination city, moving date and goods details ready before calling.</p></div><div class="contact-card-grid"><article class="detail-card"><h3>${brand}</h3><p>${address}</p></article><article class="detail-card"><h3>Phone</h3><p><a href="tel:+917015066265">${phone}</a></p></article><article class="detail-card"><h3>WhatsApp</h3><p><a href="https://wa.me/917015066265">${phone}</a></p></article><article class="detail-card"><h3>Email</h3><p><a href="mailto:${email}">${email}</a></p></article><article class="detail-card"><h3>Website</h3><p>${domain}</p></article></div></div></section>
    <section class="section"><div class="container"><div class="section-heading"><span class="eyebrow">Support Available For</span><h2>We Are Available For</h2></div><div class="contact-card-grid">${["Home Shifting Enquiry","Office Relocation Enquiry","Packing Service Support","Domestic Moving Quote","Vehicle Transportation Support","Storage Support","Survey Booking","Moving Date Confirmation","Pickup & Delivery Coordination","General Customer Support"].map((item) => `<article class="detail-card"><h3>${item}</h3></article>`).join("")}</div></div></section>
    <section class="section enquiry" id="enquiry"><div class="container enquiry__grid"><div class="enquiry__media enquiry__media--info"><span class="eyebrow">Quick Support</span><h2>For quick support, call or WhatsApp ${phone}.</h2><p>Share your moving details and our team will guide you with quote, survey and booking support.</p><a class="btn" href="tel:+917015066265">Call ${phone}</a></div><form class="enquiry-form quick-form" id="enquiryForm" action="#" method="post"><span class="eyebrow">Quick Enquiry Form</span><h2>Submit Enquiry</h2><div class="form-grid"><label>Name<input type="text" name="name" placeholder="Your name" required></label><label>Mobile Number<input type="tel" name="mobile" placeholder="${phone}" required></label><label>Moving From<input type="text" name="from" placeholder="Pickup city" required></label><label>Moving To<input type="text" name="to" placeholder="Destination city" required></label><label>Moving Date<input type="date" name="date"></label><label>Service Type<select name="service"><option>Home Shifting</option><option>Office Relocation</option><option>International Moving</option><option>Vehicle Transportation</option><option>Storage Support</option></select></label></div><label>Message<textarea name="message" rows="5" placeholder="Tell us about your moving requirement"></textarea></label><button class="btn" type="submit">Submit Enquiry</button><p class="form-status" id="formStatus" aria-live="polite"></p></form></div></section>`;

fs.writeFileSync("about-us.html", htmlShell({ ...pageMeta["about-us.html"], main: aboutMain }));
fs.writeFileSync("privacy-policy.html", htmlShell({ ...pageMeta["privacy-policy.html"], main: privacyMain }));
fs.writeFileSync("contact.html", htmlShell({
  title: "Contact Easy India Packers Movers | Call 7015066265",
  description: "Contact Easy India Packers Movers for survey booking, moving estimate, home shifting, office relocation and domestic moving support. Call or WhatsApp 7015066265.",
  canonical: "https://shifteasyindia.com/contact.html",
  main: contactMain,
  ctaHref: "#enquiry"
}).replace("</body>", '  <script src="app.js"></script>\n</body>'));

function canonicalOf(html, file) {
  const match = html.match(/<link rel="canonical" href="([^"]+)">/);
  return match ? match[1] : `https://${domain}/${file === "index.html" ? "" : file}`;
}

for (const file of fs.readdirSync(".").filter((name) => name.endsWith(".html") && !["about-us.html", "privacy-policy.html", "contact.html"].includes(name))) {
  let html = fs.readFileSync(file, "utf8");
  const canonical = canonicalOf(html, file);
  const faqMatch = html.match(/  <script type="application\/ld\+json" data-schema="faq">[\s\S]*?<\/script>\s*/);
  html = html.replace(/  <script type="application\/ld\+json" data-schema="local-business">[\s\S]*?<\/script>\s*/g, "");
  html = html.replace(/  <script type="application\/ld\+json" data-schema="organization">[\s\S]*?<\/script>\s*/g, "");
  html = html.replace(/  <script type="application\/ld\+json" data-schema="faq">[\s\S]*?<\/script>\s*/g, "");
  html = html.replace("</head>", `${schemaBlocks(canonical, faqMatch ? faqMatch[0] : "")}</head>`);
  html = html.replace(/<div class="top-bar">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, topBar());
  html = html.replace(/<header class="site-header">[\s\S]*?<\/header>/, header());
  html = html.replace(/<footer class="footer">[\s\S]*?<\/footer>/, footer());
  html = html.replace(/href="tel:7015066265"/g, 'href="tel:+917015066265"');
  fs.writeFileSync(file, html);
}
