const fs = require("fs");

const pages = {
  "index.html": [
    "Easy India Packers Movers | Packers and Movers in Delhi, Gurgaon & India",
    "Easy India Packers Movers offers safe home shifting, office relocation, domestic moving, packing, storage and vehicle transportation in Delhi, Gurgaon, Hyderabad and across India. Call 7015066265.",
    "https://shifteasyindia.com/"
  ],
  "shifting-process.html": [
    "Shifting Process | Easy India Packers Movers",
    "Know the transparent shifting process of Easy India Packers Movers from call, survey and packing to safe delivery. Call 7015066265 for moving support.",
    "https://shifteasyindia.com/shifting-process.html"
  ],
  "domestic-moving.html": [
    "Domestic Moving Service in India | Easy India Packers Movers",
    "Book domestic moving service in India with Easy India Packers Movers for home shifting, office relocation, packing, loading and safe city-to-city transport.",
    "https://shifteasyindia.com/domestic-moving.html"
  ],
  "international-moving.html": [
    "International Moving Coming Soon | Easy India Packers Movers",
    "Easy India Packers Movers is preparing overseas relocation support with export packing guidance, freight coordination and documentation assistance.",
    "https://shifteasyindia.com/international-moving.html"
  ],
  "service.html": [
    "Moving Services | Easy India Packers Movers",
    "Explore home shifting, office relocation, packing, loading, storage support, vehicle transportation and domestic moving services by Easy India Packers Movers.",
    "https://shifteasyindia.com/service.html"
  ],
  "contact.html": [
    "Contact Easy India Packers Movers | Call 7015066265",
    "Contact Easy India Packers Movers for survey booking, moving estimate, home shifting, office relocation and domestic moving support. Call or WhatsApp 7015066265.",
    "https://shifteasyindia.com/contact.html"
  ]
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  "name": "Easy India Packers Movers",
  "url": "https://shifteasyindia.com/",
  "telephone": "+917015066265",
  "email": "info@shifteasyindia.com",
  "areaServed": ["Delhi", "Gurgaon", "Hyderabad", "Noida", "Faridabad", "Ghaziabad", "India"],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN"
  },
  "sameAs": ["https://shifteasyindia.com/"]
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Easy India Packers Movers",
  "url": "https://shifteasyindia.com/",
  "email": "info@shifteasyindia.com",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+917015066265",
    "contactType": "customer support",
    "areaServed": "IN",
    "availableLanguage": ["English", "Hindi"]
  }
};

for (const [file, [title, description, canonical]] of Object.entries(pages)) {
  let html = fs.readFileSync(file, "utf8");
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
  html = html.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${description}">`);
  html = html.replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${canonical}">`);
  html = html.replace(/<script type="application\/ld\+json" data-schema="local-business">[\s\S]*?<\/script>\s*/g, "");
  html = html.replace(/<script type="application\/ld\+json" data-schema="organization">[\s\S]*?<\/script>\s*/g, "");
  const schema = `  <script type="application/ld+json" data-schema="local-business">\n${JSON.stringify(localBusiness, null, 2)}\n  </script>\n  <script type="application/ld+json" data-schema="organization">\n${JSON.stringify(organization, null, 2)}\n  </script>\n`;
  html = html.replace("</head>", `${schema}</head>`);
  html = html.replace(/<img(?![^>]*\bloading=)/g, "<img loading=\"lazy\" decoding=\"async\"");
  fs.writeFileSync(file, html);
}
