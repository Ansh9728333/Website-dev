const fs = require("fs");

const brand = "Easy India Packers Movers";
const phone = "7015066265";
const email = "info@shifteasyindia.com";
const domain = "shifteasyindia.com";

const cities = [
  {
    city: "Delhi",
    slug: "packers-and-movers-in-delhi",
    title: "Packers and Movers in Delhi | Easy India Packers Movers",
    description: "Easy India Packers Movers offers packers and movers in Delhi for home shifting, office relocation, packing, loading, vehicle transport and domestic moving. Call 7015066265.",
    intro: "Moving in Delhi needs careful planning because every lane, apartment tower and office complex has its own access rules. Easy India Packers Movers helps families and businesses shift with safe packing, planned loading and dependable transport support across the city.",
    services: ["Home shifting in Delhi", "Office relocation in Delhi", "Packing and loading support", "Vehicle transportation", "Short-term storage guidance", "Domestic moving from Delhi"],
    process: ["Share your Delhi pickup and delivery details on call or WhatsApp.", "Our team checks goods, packing needs, floor access and vehicle entry.", "Packing materials and vehicle size are planned before move day.", "Goods are loaded carefully, moved safely and delivered as per your guidance."],
    price: ["Total goods volume", "Packing material selection", "Floor, lift and parking access", "Moving distance", "Vehicle size", "Moving date and service scope"],
    areas: ["South Delhi", "West Delhi", "North Delhi", "East Delhi", "Dwarka", "Rohini", "Janakpuri", "Lajpat Nagar", "Saket", "Karol Bagh"],
    faq: [
      ["Do you provide home shifting in Delhi?", "Yes, Easy India Packers Movers supports local and domestic home shifting from Delhi with packing, loading and transport planning."],
      ["Can I book an office relocation in Delhi?", "Yes, our team can plan office goods, furniture and equipment shifting after understanding access, timing and packing needs."],
      ["How can I get a Delhi moving estimate?", "Call or WhatsApp 7015066265 and share pickup, delivery, goods list and preferred moving date for an estimate."],
      ["Do you move goods from Delhi to other cities?", "Yes, domestic moving support is available from Delhi to many Indian cities with suitable vehicles and packing options."]
    ]
  },
  {
    city: "Gurgaon",
    slug: "packers-and-movers-in-gurgaon",
    title: "Packers and Movers in Gurgaon | Office Relocation & Home Shifting",
    description: "Book packers and movers in Gurgaon for home shifting, office relocation, packing, loading and domestic transport with Easy India Packers Movers. Call 7015066265.",
    intro: "Gurgaon moves often involve high-rise societies, corporate offices and strict entry timings. Easy India Packers Movers coordinates packing, pickup and delivery so your home or office relocation remains organized and easy to manage.",
    services: ["Apartment shifting in Gurgaon", "Office relocation in Gurgaon", "IT and furniture moving support", "Packing and unpacking assistance", "Vehicle transportation", "Domestic moving from Gurgaon"],
    process: ["We collect your Gurgaon society, office or warehouse moving details.", "A survey helps us note goods, service lifts, packing needs and move timing.", "The quotation explains service scope, estimated cost and planned schedule.", "Packed goods are handled carefully and delivered with doorstep coordination."],
    price: ["Apartment or office size", "Packing quality required", "Society entry and lift timing", "Distance to destination", "Manpower requirement", "Optional unpacking or storage support"],
    areas: ["DLF Cyber City", "Sohna Road", "Golf Course Road", "MG Road", "Sector 56", "Sector 49", "Udyog Vihar", "Palam Vihar", "Manesar", "Sector 14"],
    faq: [
      ["Do you handle office relocation in Gurgaon?", "Yes, Easy India Packers Movers plans office relocation in Gurgaon with packing, loading and transport support."],
      ["Can you shift goods from Gurgaon to another city?", "Yes, we support domestic moving from Gurgaon to other Indian cities based on goods volume and destination."],
      ["Do you manage society move timing?", "We note lift availability, entry rules and loading points during the survey so the move can be planned smoothly."],
      ["How do I contact your Gurgaon moving team?", "Call or WhatsApp 7015066265 to discuss your Gurgaon moving requirement."]
    ]
  },
  {
    city: "Hyderabad",
    slug: "packers-and-movers-in-hyderabad",
    title: "Packers and Movers in Hyderabad | Home Shifting & Domestic Moving",
    description: "Easy India Packers Movers provides packers and movers in Hyderabad for home shifting, office moving, packing, loading and domestic relocation support. Call 7015066265.",
    intro: "Easy India Packers Movers supports Hyderabad customers with practical shifting plans for apartments, villas, offices and city-to-city moves. Our process focuses on safe packing, careful handling and clear communication before the move starts.",
    services: ["Home shifting in Hyderabad", "Office goods relocation", "Packing material support", "Loading and unloading", "Domestic moving service", "Vehicle shifting guidance"],
    process: ["Share your Hyderabad pickup location, destination and goods details.", "We understand packing needs, access conditions and expected move date.", "A clear estimate is shared with service details and required manpower.", "Goods are packed, moved and delivered with careful handling at destination."],
    price: ["Goods list and weight", "Packing type", "Local or domestic distance", "Building access", "Vehicle and labour requirement", "Special handling items"],
    areas: ["Hitech City", "Gachibowli", "Madhapur", "Kondapur", "Kukatpally", "Secunderabad", "Banjara Hills", "Jubilee Hills", "Begumpet", "Miyapur"],
    faq: [
      ["Do you provide packers and movers in Hyderabad?", "Yes, Easy India Packers Movers can assist with Hyderabad home shifting, office moving and domestic relocation planning."],
      ["Can fragile goods be packed separately?", "Yes, fragile and special handling items can be packed with suitable materials after the survey."],
      ["Is domestic moving available from Hyderabad?", "Yes, domestic moving support is available from Hyderabad to other cities based on your requirement."],
      ["How do I request a quote in Hyderabad?", "Call or WhatsApp 7015066265 with your moving details and preferred date."]
    ]
  },
  {
    city: "Noida",
    slug: "packers-and-movers-in-noida",
    title: "Packers and Movers in Noida | Home and Office Relocation",
    description: "Need packers and movers in Noida? Easy India Packers Movers offers home shifting, office relocation, packing, loading and domestic moving support. Call 7015066265.",
    intro: "Noida relocations can include apartments, office parks, warehouses and intercity moves. Easy India Packers Movers keeps the process simple with clear estimates, careful packing and planned transportation.",
    services: ["Home shifting in Noida", "Office relocation in Noida", "Packing and unpacking support", "Loading and unloading", "Domestic transport", "Storage guidance if required"],
    process: ["Tell us your Noida pickup, destination and moving date.", "Our team checks goods volume, packing needs and access rules.", "Your move plan and quotation are shared before confirmation.", "On move day, goods are packed, loaded and delivered carefully."],
    price: ["House or office size", "Packing material used", "Distance and route", "Lift and floor access", "Vehicle size", "Additional support requirements"],
    areas: ["Sector 62", "Sector 63", "Sector 18", "Sector 137", "Sector 76", "Sector 50", "Noida Extension", "Greater Noida", "Pari Chowk", "Sector 15"],
    faq: [
      ["Do you offer home shifting in Noida?", "Yes, Easy India Packers Movers supports home shifting in Noida with packing, loading and transport coordination."],
      ["Can offices be shifted after working hours?", "Move timing can be discussed during booking and planned according to access permission and team availability."],
      ["Do you provide Noida to other city moving?", "Yes, domestic moving from Noida can be planned based on goods and destination."],
      ["What is the fastest way to book?", "Call or WhatsApp 7015066265 for quick discussion and survey scheduling."]
    ]
  },
  {
    city: "Faridabad",
    slug: "packers-and-movers-in-faridabad",
    title: "Packers and Movers in Faridabad | Local and Domestic Moving",
    description: "Easy India Packers Movers offers packers and movers in Faridabad for home shifting, office relocation, packing, loading and domestic moving. Call 7015066265.",
    intro: "Easy India Packers Movers helps customers in Faridabad shift homes, offices and goods with a planned process. From packing material selection to doorstep delivery, our team keeps safety and communication at the center of every move.",
    services: ["Local shifting in Faridabad", "Home relocation", "Office goods moving", "Packing and loading", "Vehicle transportation support", "Domestic relocation"],
    process: ["Call or WhatsApp your Faridabad moving details.", "Goods, packing needs and loading access are reviewed carefully.", "A transparent estimate is shared before confirmation.", "Our team packs, loads, transports and unloads goods at destination."],
    price: ["Goods quantity", "Packing requirement", "Distance and destination city", "Floor and parking access", "Vehicle type", "Move day manpower"],
    areas: ["NIT", "Sector 15", "Sector 16", "Sector 21", "Sector 28", "Ballabgarh", "Neharpar", "Old Faridabad", "Greenfield Colony", "Surajkund"],
    faq: [
      ["Do you provide packers and movers in Faridabad?", "Yes, Easy India Packers Movers supports local and domestic moving from Faridabad."],
      ["Can you help with packing material?", "Yes, packing materials can be planned according to goods type and handling requirement."],
      ["Do you shift office goods in Faridabad?", "Yes, office furniture, files and equipment moving can be planned after understanding the site."],
      ["How can I contact you?", "Call or WhatsApp 7015066265 for moving support."]
    ]
  },
  {
    city: "Ghaziabad",
    slug: "packers-and-movers-in-ghaziabad",
    title: "Packers and Movers in Ghaziabad | Home Shifting & Transport",
    description: "Book packers and movers in Ghaziabad with Easy India Packers Movers for home shifting, office relocation, packing, loading and transportation. Call 7015066265.",
    intro: "For Ghaziabad moves, Easy India Packers Movers offers careful packing, planned loading and reliable transport coordination. Whether you are moving within the city or to another location, our team helps make the process easier.",
    services: ["Home shifting in Ghaziabad", "Office relocation", "Packing and loading", "Domestic goods transport", "Vehicle moving support", "Doorstep relocation assistance"],
    process: ["Share your Ghaziabad moving requirement with our support team.", "Survey details help us understand goods, route and packing level.", "A move plan is finalized with date, cost and service scope.", "Goods are packed, transported and delivered with careful handling."],
    price: ["Moving distance", "Goods volume", "Packing material", "Access at pickup and delivery", "Vehicle requirement", "Optional unpacking support"],
    areas: ["Indirapuram", "Vaishali", "Vasundhara", "Raj Nagar Extension", "Kavi Nagar", "Crossing Republik", "Mohan Nagar", "Loni", "Sahibabad", "Modinagar"],
    faq: [
      ["Do you offer packers and movers in Ghaziabad?", "Yes, Easy India Packers Movers provides Ghaziabad moving support for homes, offices and domestic relocation."],
      ["Can I get doorstep pickup and delivery?", "Yes, pickup and delivery support is planned according to the site access and customer requirement."],
      ["What details are needed for a quote?", "Share pickup, delivery, goods list, floor details and moving date for a better estimate."],
      ["Can I book on WhatsApp?", "Yes, you can WhatsApp 7015066265 for booking discussion."]
    ]
  }
];

function schemaBlocks(city) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: brand,
    url: `https://${domain}/${city.slug}.html`,
    telephone: "+917015066265",
    email,
    areaServed: [city.city, "India"],
    address: { "@type": "PostalAddress", addressCountry: "IN" }
  };
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brand,
    url: `https://${domain}/`,
    email,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+917015066265",
      contactType: "customer support",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"]
    }
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: city.faq.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer }
    }))
  };
  return `
  <script type="application/ld+json" data-schema="local-business">
${JSON.stringify(localBusiness, null, 2)}
  </script>
  <script type="application/ld+json" data-schema="organization">
${JSON.stringify(organization, null, 2)}
  </script>
  <script type="application/ld+json" data-schema="faq">
${JSON.stringify(faq, null, 2)}
  </script>`;
}

function nav() {
  return `
    <header class="site-header">
      <div class="container nav">
        <a class="logo" href="index.html" aria-label="Easy India Packers Movers home">
          <span class="logo__mark">EI</span>
          <span>Easy India Packers Movers</span>
        </a>
        <input class="nav__toggle" type="checkbox" id="nav-toggle" aria-label="Toggle navigation">
        <label class="nav__hamburger" for="nav-toggle" aria-label="Open navigation menu"><span></span><span></span><span></span></label>
        <nav class="nav__menu" aria-label="Primary navigation">
          <a href="index.html">Home</a>
          <a href="shifting-process.html">Shifting Process</a>
          <a href="domestic-moving.html">Domestic Moving</a>
          <a href="international-moving.html">International Moving</a>
          <a href="service.html">Service</a>
          <a href="contact.html">Contact</a>
        </nav>
        <a class="btn btn--small" href="contact.html#enquiry">Get Free Quote</a>
      </div>
    </header>`;
}

function topBar() {
  return `
    <div class="top-bar">
      <div class="container top-bar__inner">
        <p>Trusted Packers &amp; Movers Across India</p>
        <div class="top-bar__links">
          <a href="tel:7015066265">Phone: ${phone}</a>
          <a href="https://wa.me/917015066265">WhatsApp: ${phone}</a>
          <a href="mailto:${email}">Email: ${email}</a>
          <a href="https://${domain}/">Website: ${domain}</a>
        </div>
      </div>
    </div>`;
}

function footer() {
  return `
    <footer class="footer">
      <div class="container footer__grid">
        <div>
          <h3>Company</h3>
          <a href="index.html#intro">About Us</a>
          <a href="index.html#why-choose">Why Easy India Packers Movers</a>
          <a href="shifting-process.html">Shifting Process</a>
          <a href="contact.html">Customer Care</a>
          <a href="contact.html">Contact Us</a>
        </div>
        <div>
          <h3>Services</h3>
          <a href="domestic-moving.html">Domestic Moving</a>
          <a href="international-moving.html">International Moving</a>
          <a href="service.html">Office Relocation</a>
          <a href="service.html">Car Transportation</a>
          <a href="service.html">Storage Service</a>
          <a href="service.html">Packing Service</a>
        </div>
        <div>
          <h3>Locations</h3>
          ${cities.map((item) => `<a href="${item.slug}.html">Packers & Movers ${item.city}</a>`).join("\n          ")}
        </div>
        <div>
          <h3>Contact</h3>
          <p>Easy India Packers Movers</p>
          <p>Website: ${domain}</p>
          <p>Phone: <a href="tel:7015066265">${phone}</a></p>
          <p>WhatsApp: <a href="https://wa.me/917015066265">${phone}</a></p>
          <p>Email: <a href="mailto:${email}">${email}</a></p>
        </div>
      </div>
      <div class="footer-bottom">© 2026 Easy India Packers Movers. All Rights Reserved.</div>
    </footer>`;
}

function cityPage(city) {
  const images = Array.from({ length: 6 }, (_, index) => `assets/${city.slug}-${index + 1}.jpg`);
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${city.title}</title>
  <meta name="description" content="${city.description}">
  <link rel="canonical" href="https://${domain}/${city.slug}.html">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
${schemaBlocks(city)}
</head>
<body>
${topBar()}
${nav()}

  <!-- City Hero Section -->
  <section class="page-hero">
    <div class="container page-hero__grid">
      <div class="page-hero-content">
        <span class="eyebrow">Local relocation support</span>
        <h1>${city.title.replace(" | Easy India Packers Movers", "").replace(" | Office Relocation & Home Shifting", "").replace(" | Home Shifting & Domestic Moving", "").replace(" | Home and Office Relocation", "").replace(" | Local and Domestic Moving", "").replace(" | Home Shifting & Transport", "")}</h1>
        <p>${city.intro}</p>
        <div class="hero-actions">
          <a class="btn" href="tel:7015066265">Call ${phone}</a>
          <a class="btn btn--outline" href="https://wa.me/917015066265">WhatsApp Now</a>
        </div>
      </div>
      <div class="page-hero-image city-hero-image" role="img" aria-label="${brand} moving service in ${city.city}" style="background-image: url('${images[0]}');"></div>
    </div>
  </section>

  <!-- City Services Section -->
  <section class="section">
    <div class="container section-heading">
      <span class="eyebrow">Services in ${city.city}</span>
      <h2>Moving Support Designed for ${city.city}</h2>
      <p>Choose practical relocation support for homes, offices, vehicles and domestic goods movement.</p>
    </div>
    <div class="container info-grid">
      ${city.services.map((service, index) => `
      <article class="detail-card">
        <div class="detail-card__image" role="img" aria-label="${service} by ${brand}" style="background-image: url('${images[(index % 5) + 1]}');"></div>
        <h3>${service}</h3>
        <p>Our team plans ${service.toLowerCase()} with careful packing, clear coordination and safe handling from pickup to delivery.</p>
      </article>`).join("")}
    </div>
  </section>

  <!-- Local Process Section -->
  <section class="section section-soft">
    <div class="container section-heading">
      <span class="eyebrow">Local moving process</span>
      <h2>How We Plan Your ${city.city} Move</h2>
      <p>A simple process keeps your relocation organized, transparent and easier to track.</p>
    </div>
    <div class="container timeline-grid">
      ${city.process.map((step, index) => `
      <article class="process-card">
        <span class="step-number">${index + 1}</span>
        <h3>${["Share Details", "Survey & Estimate", "Packing Plan", "Safe Delivery"][index]}</h3>
        <p>${step}</p>
      </article>`).join("")}
    </div>
  </section>

  <!-- Pricing and Areas Section -->
  <section class="section">
    <div class="container split-section">
      <div>
        <span class="eyebrow">Clear estimate factors</span>
        <h2>Price Factors for ${city.city} Moving</h2>
        <p>Every move is different. We explain the main factors before confirming the service so customers can make a confident decision.</p>
        <ul class="checked-list">
          ${city.price.map((item) => `<li>${item}</li>`).join("\n          ")}
        </ul>
      </div>
      <div>
        <span class="eyebrow">Areas served</span>
        <h2>Popular ${city.city} Locations We Cover</h2>
        <div class="area-tags">
          ${city.areas.map((area) => `<span>${area}</span>`).join("\n          ")}
        </div>
      </div>
    </div>
  </section>

  <!-- City Gallery Section -->
  <section class="section section-soft">
    <div class="container section-heading">
      <span class="eyebrow">Moving image slots</span>
      <h2>Relocation Work Gallery</h2>
      <p>Replace these slots with original ${city.city} packing, loading and delivery images whenever available.</p>
    </div>
    <div class="container home-gallery">
      ${images.map((image, index) => `
      <figure class="gallery-card">
        <div class="gallery-card__image" role="img" aria-label="${brand} ${city.city} relocation image ${index + 1}" style="background-image: url('${image}');"></div>
        <figcaption>${["Packing Planning", "Careful Loading", "Suitable Vehicle", "Goods Handling", "Doorstep Delivery", "Moving Support"][index]}</figcaption>
      </figure>`).join("")}
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="section">
    <div class="container section-heading">
      <span class="eyebrow">Questions</span>
      <h2>${city.city} Moving FAQs</h2>
    </div>
    <div class="container faq-list">
      ${city.faq.map(([question, answer]) => `
      <article class="faq-item">
        <h3>${question}</h3>
        <p>${answer}</p>
      </article>`).join("")}
    </div>
  </section>

  <!-- CTA Section -->
  <section class="cta-section">
    <div class="container cta-box">
      <div>
        <h2>Need Packers and Movers in ${city.city}?</h2>
        <p>Call Easy India Packers Movers for survey booking, moving estimate and safe relocation support.</p>
      </div>
      <div class="cta-actions">
        <a class="btn" href="tel:7015066265">Call ${phone}</a>
        <a class="btn btn--white" href="https://wa.me/917015066265">WhatsApp Now</a>
      </div>
    </div>
  </section>

${footer()}

  <div class="floating-actions" aria-label="Quick contact">
    <a class="float-btn float-btn--call" href="tel:7015066265">Call</a>
    <a class="float-btn float-btn--whatsapp" href="https://wa.me/917015066265">WhatsApp</a>
  </div>
</body>
</html>
`;
}

for (const city of cities) {
  fs.writeFileSync(`${city.slug}.html`, cityPage(city));
}
