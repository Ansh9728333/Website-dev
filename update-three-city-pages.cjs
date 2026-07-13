const fs = require("fs");

const brand = "Easy India Packers Movers";
const phone = "7015066265";
const email = "info@shifteasyindia.com";
const domain = "shifteasyindia.com";

const pages = [
  {
    city: "Delhi",
    slug: "packers-and-movers-in-delhi",
    title: "Packers and Movers in Delhi | Easy India Packers Movers",
    description: "Easy India Packers Movers provides home shifting, office relocation, packing, loading, domestic moving and transport support in Delhi. Call 7015066265 for moving quote.",
    subtitle: "Safe home shifting, office relocation, packing, loading and transportation support across Delhi with planned handling and clear customer communication.",
    introTitle: "Reliable Packers and Movers Service in Delhi",
    intro: "Easy India Packers Movers supports Delhi customers with planned relocation service for homes, offices, vehicles and domestic goods movement. Our team understands building access, goods volume, packing needs and delivery timelines before confirming the move, so customers receive practical guidance and a transparent estimate.",
    servicesTitle: "Our Moving Services in Delhi",
    processTitle: "How Our Delhi Moving Process Works",
    priceTitle: "What Affects Packers and Movers Charges in Delhi?",
    images: [
      ["assets/delhi-packers-movers-hero.jpg", "Moving truck and packing team for Delhi relocation"],
      ["assets/delhi-home-shifting.jpg", "Home shifting service in Delhi by Easy India Packers Movers"],
      ["assets/delhi-office-relocation.jpg", "Office relocation support in Delhi"],
      ["assets/delhi-packing-service.jpg", "Packing service in Delhi for safe moving"],
      ["assets/delhi-loading-service.jpg", "Loading service in Delhi for household goods"],
      ["assets/delhi-transport-service.jpg", "Goods transportation service in Delhi"]
    ],
    services: [
      ["Home Shifting", "Household goods are packed and moved with careful item handling for flats, apartments and independent homes."],
      ["Office Relocation", "Office furniture, files, computers and workstations are moved with organized packing and loading support."],
      ["Packing Service", "Cartons, bubble wrap, foam sheets and tapes are selected according to fragile, daily-use and heavy goods."],
      ["Loading and Transport", "Suitable vehicles and manpower are planned for safe loading, route movement and delivery coordination."]
    ],
    process: ["Call or WhatsApp 7015066265 with your moving date and locations.", "Share goods details or request a survey for better estimate planning.", "Approve the quotation, packing scope and shifting schedule.", "Our team packs, loads, transports and delivers goods with doorstep coordination."],
    areas: ["Dwarka", "Rohini", "Pitampura", "Janakpuri", "Karol Bagh", "Lajpat Nagar", "Saket", "Malviya Nagar", "Vasant Kunj", "Rajouri Garden", "Punjabi Bagh", "Greater Kailash", "Connaught Place", "Preet Vihar", "Mayur Vihar", "South Delhi", "West Delhi", "North Delhi", "East Delhi"],
    prices: ["Goods quantity and item size", "Packing material quality", "Pickup and delivery floor access", "Distance and vehicle type", "Fragile or special handling items", "Unpacking, storage or extra manpower requirement"],
    faq: [
      ["Do you provide packers and movers in Delhi?", "Yes, Easy India Packers Movers provides home shifting, office relocation, packing, loading and domestic moving support in Delhi."],
      ["Can I get a moving quote on WhatsApp?", "Yes, you can WhatsApp 7015066265 with pickup, delivery, goods list and moving date for estimate support."],
      ["Do you handle office relocation in Delhi?", "Yes, office relocation can be planned for furniture, files, workstations, computers and other office goods."],
      ["Which Delhi areas do you serve?", "We support many Delhi areas including Dwarka, Rohini, Janakpuri, Lajpat Nagar, Saket, Vasant Kunj and nearby locations."]
    ]
  },
  {
    city: "Gurgaon",
    slug: "packers-and-movers-in-gurgaon",
    title: "Packers and Movers in Gurgaon | Home & Office Shifting",
    description: "Easy India Packers Movers offers home shifting, office relocation, packing, loading and domestic moving support in Gurgaon. Call 7015066265 for quote.",
    subtitle: "Professional moving support for apartments, villas, offices, commercial spaces and city-to-city relocation from Gurgaon.",
    introTitle: "Professional Moving Service in Gurgaon",
    intro: "Gurgaon relocations often involve high-rise societies, villas, corporate offices and fixed loading timings. Easy India Packers Movers plans every move after understanding goods, society rules, lift access and destination requirements, giving customers clear support from first call to delivery.",
    servicesTitle: "Our Moving Services in Gurgaon",
    processTitle: "How We Handle Gurgaon Shifting",
    priceTitle: "What Affects Moving Charges in Gurgaon?",
    images: [
      ["assets/gurgaon-packers-movers-hero.jpg", "Packers and movers team near a Gurgaon apartment society"],
      ["assets/gurgaon-apartment-shifting.jpg", "Apartment shifting support in Gurgaon"],
      ["assets/gurgaon-office-moving.jpg", "Office moving service in Gurgaon corporate office"],
      ["assets/gurgaon-packing-team.jpg", "Packing team wrapping goods in Gurgaon"],
      ["assets/gurgaon-loading-truck.jpg", "Movers loading truck near Gurgaon residential society"],
      ["assets/gurgaon-delivery-support.jpg", "Doorstep delivery support in Gurgaon"]
    ],
    services: [
      ["Apartment Shifting", "Goods from high-rise flats are packed, moved and delivered with attention to lift timing and society access."],
      ["Office Moving", "Commercial moves are planned for files, chairs, desks, computers and workstations with practical coordination."],
      ["Packing Team", "Furniture and fragile goods are wrapped with suitable packing material before loading."],
      ["Delivery Support", "Goods are unloaded and placed as per customer guidance at the destination."]
    ],
    process: ["Discuss your Gurgaon pickup, destination and building access details.", "Our team reviews goods, packing requirements and loading permissions.", "Quotation and move schedule are confirmed after customer approval.", "Packed goods are loaded, transported and delivered with careful placement support."],
    areas: ["DLF Phase 1", "DLF Phase 2", "DLF Phase 3", "DLF Phase 4", "DLF Phase 5", "MG Road", "Golf Course Road", "Golf Course Extension Road", "Sohna Road", "Sector 14", "Sector 29", "Sector 31", "Sector 45", "Sector 46", "Sector 47", "Sector 49", "Sector 56", "Sector 57", "Udyog Vihar", "Cyber City", "Palam Vihar", "Manesar"],
    prices: ["Apartment or office size", "Packing and wrapping material", "Society gate, lift and parking access", "Distance from Gurgaon to destination", "Vehicle size and manpower", "Weekend, urgent or special handling requirements"],
    faq: [
      ["Do you provide packers and movers in Gurgaon?", "Yes, Easy India Packers Movers supports home shifting, office relocation, packing and domestic moving in Gurgaon."],
      ["Can you handle office relocation in Gurgaon?", "Yes, office relocation in Gurgaon can be planned for workstations, computers, files, furniture and other business goods."],
      ["Do you move from Gurgaon to other cities?", "Yes, domestic moving from Gurgaon can be arranged based on goods volume, distance and delivery requirement."],
      ["How do I book a Gurgaon moving survey?", "Call or WhatsApp 7015066265 and share your pickup address, destination, goods type and moving date."]
    ]
  },
  {
    city: "Hyderabad",
    slug: "packers-and-movers-in-hyderabad",
    title: "Packers and Movers in Hyderabad | Easy India Packers Movers",
    description: "Easy India Packers Movers provides home shifting, office relocation, packing, loading and transport support in Hyderabad. Call 7015066265 for moving assistance.",
    subtitle: "Safe and planned moving support for homes, apartments, offices, vehicles and goods transportation in Hyderabad.",
    introTitle: "Safe and Planned Relocation Support in Hyderabad",
    intro: "Easy India Packers Movers helps Hyderabad customers shift homes, apartments, offices and goods with a clear process. We focus on safe packing, careful loading, suitable transport planning and direct communication so customers can understand each step before moving day.",
    servicesTitle: "Our Moving Services in Hyderabad",
    processTitle: "Our Hyderabad Moving Process",
    priceTitle: "What Affects Packers and Movers Charges in Hyderabad?",
    images: [
      ["assets/hyderabad-packers-movers-hero.jpg", "Moving truck and packers team near Hyderabad apartment building"],
      ["assets/hyderabad-home-shifting.jpg", "Home shifting service in Hyderabad"],
      ["assets/hyderabad-apartment-moving.jpg", "Apartment moving support in Hyderabad"],
      ["assets/hyderabad-office-relocation.jpg", "Office relocation service in Hyderabad"],
      ["assets/hyderabad-packing-service.jpg", "Packing service in Hyderabad for safe moving"],
      ["assets/hyderabad-transport-truck.jpg", "Transport truck for domestic moving in Hyderabad"]
    ],
    services: [
      ["Home Shifting", "Household goods are organized and packed for safe movement from pickup home to destination."],
      ["Apartment Moving", "Lift lobby, corridor and floor access are considered while planning manpower and loading."],
      ["Office Relocation", "Office goods, systems, furniture and files are packed and moved with structured coordination."],
      ["Transport Support", "Vehicle selection is planned according to goods volume, distance and delivery timeline."]
    ],
    process: ["Call or WhatsApp your Hyderabad moving requirement to 7015066265.", "Goods, packing needs, access details and destination are reviewed.", "A transparent estimate and shifting schedule are shared for approval.", "The moving team packs, loads and transports goods with safe delivery coordination."],
    areas: ["Banjara Hills", "Jubilee Hills", "Gachibowli", "Hitech City", "Madhapur", "Kondapur", "Kukatpally", "Miyapur", "Begumpet", "Ameerpet", "Secunderabad", "Manikonda", "Nallagandla", "Uppal", "LB Nagar", "Mehdipatnam", "Attapur", "Tolichowki", "Shamshabad", "Kompally"],
    prices: ["Goods volume and packing level", "Local or domestic moving distance", "Floor access and lift availability", "Vehicle and manpower requirement", "Fragile items or appliances", "Unpacking, placement or storage support"],
    faq: [
      ["Do you provide packers and movers in Hyderabad?", "Yes, Easy India Packers Movers provides home shifting, office relocation, packing, loading and transport support in Hyderabad."],
      ["Can you help with apartment shifting in Hyderabad?", "Yes, apartment shifting can be planned after understanding lift access, floor details, goods volume and packing requirement."],
      ["Is domestic moving available from Hyderabad?", "Yes, domestic moving from Hyderabad to other cities can be planned based on distance and goods details."],
      ["How can I contact your Hyderabad moving team?", "Call or WhatsApp 7015066265 for moving assistance and estimate support."]
    ]
  }
];

function topBar() {
  return `<div class="top-bar"><div class="container top-bar__inner"><p>Trusted Packers &amp; Movers Across India</p><div class="top-bar__links"><a href="tel:+917015066265">Phone: ${phone}</a><a href="https://wa.me/917015066265">WhatsApp: ${phone}</a><a href="mailto:${email}">Email: ${email}</a><a href="https://${domain}/">Website: ${domain}</a></div></div></div>`;
}

function header() {
  return `<header class="site-header"><div class="container nav"><a class="logo" href="index.html" aria-label="${brand} home"><span class="logo__mark">EI</span><span>${brand}</span></a><input class="nav__toggle" type="checkbox" id="nav-toggle" aria-label="Toggle navigation"><label class="nav__hamburger" for="nav-toggle" aria-label="Open navigation menu"><span></span><span></span><span></span></label><nav class="nav__menu" aria-label="Primary navigation"><a href="index.html">Home</a><a href="shifting-process.html">Shifting Process</a><a href="domestic-moving.html">Domestic Moving</a><a href="international-moving.html">International Moving</a><a href="service.html">Service</a><a href="contact.html">Contact</a></nav><a class="btn btn--small" href="contact.html#enquiry">Get Free Quote</a></div></header>`;
}

function schemas(page) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: brand,
    url: `https://${domain}/${page.slug}.html`,
    telephone: "+917015066265",
    email,
    areaServed: [page.city, "India"],
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
    mainEntity: page.faq.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a }
    }))
  };
  return `<script type="application/ld+json" data-schema="local-business">${JSON.stringify(localBusiness)}</script>
  <script type="application/ld+json" data-schema="organization">${JSON.stringify(organization)}</script>
  <script type="application/ld+json" data-schema="faq">${JSON.stringify(faq)}</script>`;
}

function footer() {
  return `<footer class="footer"><div class="container footer__grid"><div><h3>Company</h3><a href="index.html#intro">About Us</a><a href="shifting-process.html">Shifting Process</a><a href="contact.html">Contact Us</a></div><div><h3>Services</h3><a href="domestic-moving.html">Domestic Moving</a><a href="service.html">Office Relocation</a><a href="service.html">Packing Service</a><a href="service.html">Car Transportation</a></div><div><h3>Locations</h3><a href="packers-and-movers-in-delhi.html">Packers and Movers in Delhi</a><a href="packers-and-movers-in-gurgaon.html">Packers and Movers in Gurgaon</a><a href="packers-and-movers-in-hyderabad.html">Packers and Movers in Hyderabad</a></div><div><h3>Contact</h3><p>${brand}</p><p>Website: ${domain}</p><p>Phone: <a href="tel:+917015066265">${phone}</a></p><p>WhatsApp: <a href="https://wa.me/917015066265">${phone}</a></p><p>Email: <a href="mailto:${email}">${email}</a></p></div></div><div class="footer__bottom"><p>&copy; 2026 ${brand}. All Rights Reserved.</p></div></footer>`;
}

function pageHtml(page) {
  const otherLinks = pages.filter((item) => item.slug !== page.slug).map((item) => `<a class="city-link-card" href="${item.slug}.html"><strong>Packers and Movers in ${item.city}</strong><span>View ${item.city} moving services and local areas.</span></a>`).join("");
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${page.title}</title>
  <meta name="description" content="${page.description}">
  <link rel="canonical" href="https://${domain}/${page.slug}.html">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
  ${schemas(page)}
</head>
<body>
  ${topBar()}
  ${header()}
  <main>
    <section class="city-hero">
      <div class="container city-hero__grid">
        <div class="city-hero-content">
          <span class="eyebrow">Local relocation support</span>
          <h1>Packers and Movers in ${page.city}</h1>
          <p>${page.subtitle}</p>
          <div class="hero__actions">
            <a class="btn" href="tel:+917015066265">Call ${phone}</a>
            <a class="btn btn--outline" href="https://wa.me/917015066265">WhatsApp Now</a>
          </div>
        </div>
        <div class="city-hero-image"><img src="${page.images[0][0]}" width="900" height="620" alt="${page.images[0][1]}" loading="lazy" decoding="async"></div>
      </div>
    </section>

    <section class="city-section">
      <div class="container city-grid city-grid--intro">
        <div>
          <span class="eyebrow">Trusted moving help</span>
          <h2>${page.introTitle}</h2>
          <p>${page.intro}</p>
        </div>
        <div class="city-price-box">
          <h3>Quick Contact</h3>
          <p>For survey booking, quote support and moving guidance, call or WhatsApp ${phone}.</p>
          <a class="btn" href="contact.html#enquiry">Submit Enquiry</a>
        </div>
      </div>
    </section>

    <section class="city-section city-section--soft">
      <div class="container section-heading">
        <span class="eyebrow">City services</span>
        <h2>${page.servicesTitle}</h2>
      </div>
      <div class="container city-grid">
        ${page.services.map((service, index) => `<article class="city-service-card"><img src="${page.images[index + 1][0]}" width="640" height="430" alt="${page.images[index + 1][1]}" loading="lazy" decoding="async"><div><h3>${service[0]}</h3><p>${service[1]}</p></div></article>`).join("")}
      </div>
    </section>

    <section class="city-section">
      <div class="container section-heading">
        <span class="eyebrow">Moving process</span>
        <h2>${page.processTitle}</h2>
      </div>
      <div class="container city-process-grid">
        ${page.process.map((step, index) => `<article class="city-process-card"><span>${index + 1}</span><p>${step}</p></article>`).join("")}
      </div>
    </section>

    <section class="city-section city-section--soft">
      <div class="container city-grid city-grid--intro">
        <div>
          <span class="eyebrow">Areas served</span>
          <h2>Areas Served in ${page.city}</h2>
          <div class="city-area-list">${page.areas.map((area) => `<span>${area}</span>`).join("")}</div>
        </div>
        <div class="city-price-box">
          <h2>${page.priceTitle}</h2>
          <ul>${page.prices.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
      </div>
    </section>

    <section class="city-section">
      <div class="container section-heading">
        <span class="eyebrow">Service visual</span>
        <h2>${page.city} Transportation Support</h2>
        <p class="section-lead">This image is unique to the ${page.city} page and is not reused on other city pages.</p>
      </div>
      <div class="container city-image-grid">
        <figure><img src="${page.images[5][0]}" width="900" height="560" alt="${page.images[5][1]}" loading="lazy" decoding="async"><figcaption>Safe transport coordination in ${page.city}</figcaption></figure>
      </div>
    </section>

    <section class="city-section city-section--soft">
      <div class="container section-heading">
        <span class="eyebrow">Questions</span>
        <h2>${page.city} Moving FAQs</h2>
      </div>
      <div class="container city-faq">
        ${page.faq.map(([q, a]) => `<article><h3>${q}</h3><p>${a}</p></article>`).join("")}
      </div>
    </section>

    <section class="city-section">
      <div class="container">
        <div class="section-heading">
          <span class="eyebrow">Nearby city pages</span>
          <h2>Explore More Local Moving Pages</h2>
        </div>
        <div class="city-link-grid">${otherLinks}</div>
      </div>
    </section>

    <section class="city-cta">
      <div class="container cta-box">
        <div>
          <h2>Need Packers and Movers in ${page.city}?</h2>
          <p>Talk to ${brand} for safe packing, moving estimate and planned relocation support.</p>
        </div>
        <div class="cta__actions">
          <a class="btn" href="tel:+917015066265">Call ${phone}</a>
          <a class="btn btn--white" href="https://wa.me/917015066265">WhatsApp Now</a>
        </div>
      </div>
    </section>
  </main>
  ${footer()}
  <div class="floating-actions" aria-label="Quick contact"><a class="float-btn float-btn--call" href="tel:+917015066265">Call</a><a class="float-btn float-btn--whatsapp" href="https://wa.me/917015066265">WhatsApp</a></div>
</body>
</html>
`;
}

for (const page of pages) {
  fs.writeFileSync(`${page.slug}.html`, pageHtml(page));
}
