const fs = require("fs");

const BASE = "https://www.shifteasyindia.com";
const BRAND = "Easy India Packers Movers";
const PHONE = "7015066265";
const EMAIL = "info@shifteasyindia.com";
const ADDRESS = "Plot No 81 First Floor, Housing Board Colony, Sector 7, Gurgaon, Haryana 122001";
const LOGO = `${BASE}/assets/logo-easy-india-packers-movers.png`;

const meta = {
  "index.html": {
    title: "Reliable Packers and Movers in India | Easy India Packers Movers",
    description: "Easy India Packers Movers offers safe home shifting, office relocation, packing and domestic moving support across India.",
    canonical: `${BASE}/`,
    breadcrumb: ["Home"]
  },
  "about-us.html": {
    title: "About Us | Easy India Packers Movers",
    description: "Learn about Easy India Packers Movers, a trusted packing and moving service for home shifting, office relocation and domestic moving.",
    canonical: `${BASE}/about-us.html`,
    breadcrumb: ["Home", "About Us"]
  },
  "contact.html": {
    title: "Contact Easy India Packers Movers | Call 7015066265",
    description: "Contact Easy India Packers Movers for moving quote, survey booking, home shifting, office relocation and support. Call 7015066265.",
    canonical: `${BASE}/contact.html`,
    breadcrumb: ["Home", "Contact"]
  },
  "faq.html": {
    title: "FAQ | Packers and Movers Questions | Easy India Packers Movers",
    description: "Read FAQs about booking, charges, packing, safety, insurance, tracking, delivery, office shifting, vehicle transport and storage.",
    canonical: `${BASE}/faq.html`,
    breadcrumb: ["Home", "FAQ"]
  },
  "privacy-policy.html": {
    title: "Privacy Policy | Easy India Packers Movers",
    description: "Read the Easy India Packers Movers privacy policy to understand how customer information is collected, used and protected.",
    canonical: `${BASE}/privacy-policy.html`,
    breadcrumb: ["Home", "Privacy Policy"]
  },
  "shifting-process.html": {
    title: "Shifting Process | Easy India Packers Movers",
    description: "Know the Easy India Packers Movers process from call, survey and packing to safe loading, transport and delivery support.",
    canonical: `${BASE}/shifting-process.html`,
    breadcrumb: ["Home", "Shifting Process"]
  },
  "domestic-moving.html": {
    title: "Domestic Moving Services in India | Easy India Packers Movers",
    description: "Book domestic moving services in India for home shifting, office relocation, packing, loading and city-to-city transport.",
    canonical: `${BASE}/domestic-moving.html`,
    breadcrumb: ["Home", "Domestic Moving"]
  },
  "international-moving.html": {
    title: "International Moving Services | Easy India Packers Movers",
    description: "Easy India Packers Movers provides guidance for international moving, export packing, freight coordination and documentation support.",
    canonical: `${BASE}/international-moving.html`,
    breadcrumb: ["Home", "International Moving"]
  },
  "service.html": {
    title: "Packing and Moving Services | Easy India Packers Movers",
    description: "Explore packing, loading, home shifting, office relocation, storage support, vehicle transport and domestic moving services.",
    canonical: `${BASE}/service.html`,
    breadcrumb: ["Home", "Service"]
  },
  "packers-and-movers-in-delhi.html": {
    title: "Packers and Movers in Delhi | Home & Office Shifting",
    description: "Easy India Packers Movers provides home shifting in Delhi, office relocation, packing, loading and domestic moving support.",
    canonical: `${BASE}/packers-and-movers-in-delhi.html`,
    breadcrumb: ["Home", "Packers and Movers in Delhi"]
  },
  "packers-and-movers-in-gurgaon.html": {
    title: "Packers and Movers in Gurgaon | Easy India Packers Movers",
    description: "Book packers and movers in Gurgaon for apartment shifting, office relocation, packing, loading and domestic transport.",
    canonical: `${BASE}/packers-and-movers-in-gurgaon.html`,
    breadcrumb: ["Home", "Packers and Movers in Gurgaon"]
  },
  "packers-and-movers-in-hyderabad.html": {
    title: "Packers and Movers in Hyderabad | Packing & Moving Service",
    description: "Easy India Packers Movers provides packers and movers in Hyderabad for home shifting, office relocation and transport support.",
    canonical: `${BASE}/packers-and-movers-in-hyderabad.html`,
    breadcrumb: ["Home", "Packers and Movers in Hyderabad"]
  },
  "packers-and-movers-in-noida.html": {
    title: "Packers and Movers in Noida | Easy India Packers Movers",
    description: "Easy India Packers Movers offers home shifting, office relocation, packing and domestic moving support in Noida.",
    canonical: `${BASE}/packers-and-movers-in-noida.html`,
    breadcrumb: ["Home", "Packers and Movers in Noida"]
  },
  "packers-and-movers-in-faridabad.html": {
    title: "Packers and Movers in Faridabad | Easy India Packers Movers",
    description: "Easy India Packers Movers provides local and domestic moving, packing, loading and transport support in Faridabad.",
    canonical: `${BASE}/packers-and-movers-in-faridabad.html`,
    breadcrumb: ["Home", "Packers and Movers in Faridabad"]
  },
  "packers-and-movers-in-ghaziabad.html": {
    title: "Packers and Movers in Ghaziabad | Easy India Packers Movers",
    description: "Easy India Packers Movers offers home shifting, office relocation, packing and transportation support in Ghaziabad.",
    canonical: `${BASE}/packers-and-movers-in-ghaziabad.html`,
    breadcrumb: ["Home", "Packers and Movers in Ghaziabad"]
  }
};

function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: BRAND,
    url: `${BASE}/`,
    logo: LOGO,
    telephone: "+917015066265",
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No 81 First Floor, Housing Board Colony, Sector 7",
      addressLocality: "Gurgaon",
      addressRegion: "Haryana",
      postalCode: "122001",
      addressCountry: "IN"
    },
    areaServed: ["Delhi", "Gurgaon", "Hyderabad", "Noida", "Faridabad", "Ghaziabad"],
    serviceType: ["Packers and Movers", "Home Shifting", "Office Relocation", "Domestic Moving", "Packing Service", "Loading Service", "Storage Support", "Vehicle Transportation"]
  };
}

function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND,
    url: `${BASE}/`,
    logo: LOGO,
    email: EMAIL,
    address: localBusinessSchema().address,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+917015066265",
      contactType: "customer support",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"]
    }
  };
}

function breadcrumbSchema(info) {
  if (!info.breadcrumb || info.breadcrumb.length < 2) return "";
  const items = info.breadcrumb.map((name, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name,
    item: index === 0 ? `${BASE}/` : info.canonical
  }));
  return `  <script type="application/ld+json" data-schema="breadcrumb">\n${JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items }, null, 2)}\n  </script>\n`;
}

function schemaBlocks(info, existingFaq) {
  return `  <script type="application/ld+json" data-schema="local-business">\n${JSON.stringify(localBusinessSchema(), null, 2)}\n  </script>\n  <script type="application/ld+json" data-schema="organization">\n${JSON.stringify(organizationSchema(), null, 2)}\n  </script>\n${existingFaq || ""}${breadcrumbSchema(info)}`;
}

function ogTags(info) {
  return `  <meta property="og:title" content="${info.title}">\n  <meta property="og:description" content="${info.description}">\n  <meta property="og:url" content="${info.canonical}">\n  <meta property="og:type" content="website">\n  <meta property="og:image" content="${LOGO}">\n`;
}

for (const file of fs.readdirSync(".").filter((name) => name.endsWith(".html"))) {
  const info = meta[file];
  if (!info) continue;
  let html = fs.readFileSync(file, "utf8");

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${info.title}</title>`);
  html = html.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${info.description}">`);
  html = html.replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${info.canonical}">`);
  html = html.replace(/https:\/\/shifteasyindia\.com\//g, `${BASE}/`);
  html = html.replace(/http:\/\/shifteasyindia\.com\//g, `${BASE}/`);
  html = html.replace(/http:\/\/www\.shifteasyindia\.com\//g, `${BASE}/`);
  html = html.replace(/Website: shifteasyindia\.com/g, `Website: ${BASE}/`);
  html = html.replace(/Website: https:\/\/www\.shifteasyindia\.com\/?/g, `Website: ${BASE}/`);

  const faqMatch = html.match(/  <script type="application\/ld\+json" data-schema="faq">[\s\S]*?<\/script>\s*/);
  html = html.replace(/  <script type="application\/ld\+json" data-schema="local-business">[\s\S]*?<\/script>\s*/g, "");
  html = html.replace(/  <script type="application\/ld\+json" data-schema="organization">[\s\S]*?<\/script>\s*/g, "");
  html = html.replace(/  <script type="application\/ld\+json" data-schema="breadcrumb">[\s\S]*?<\/script>\s*/g, "");
  html = html.replace(/  <script type="application\/ld\+json" data-schema="faq">[\s\S]*?<\/script>\s*/g, "");
  html = html.replace(/  <meta property="og:[^>]+>\n/g, "");
  html = html.replace("</head>", `${ogTags(info)}${schemaBlocks(info, faqMatch ? faqMatch[0] : "")}</head>`);

  // Footer SEO links: make sure Home exists in the company column.
  html = html.replace(/(<h3>Company<\/h3>\s*)(?!<a href="index\.html">Home<\/a>)/, '$1<a href="index.html">Home</a>\n        ');

  // FAQ page natural links to services.
  if (file === "faq.html" && !html.includes('class="faq-service-links"')) {
    html = html.replace(
      /<\/nav>\s*<\/div>\s*<\/section>/,
      `</nav>\n        <div class="faq-service-links">\n          <a href="service.html">Packing and Moving Services</a>\n          <a href="domestic-moving.html">Domestic Moving</a>\n          <a href="shifting-process.html">Shifting Process</a>\n          <a href="contact.html">Contact Support</a>\n        </div>\n      </div>\n    </section>`
    );
  }

  fs.writeFileSync(file, html);
}

const sitemapUrls = [
  "/",
  "/about-us.html",
  "/contact.html",
  "/faq.html",
  "/privacy-policy.html",
  "/shifting-process.html",
  "/domestic-moving.html",
  "/international-moving.html",
  "/service.html",
  "/packers-and-movers-in-delhi.html",
  "/packers-and-movers-in-gurgaon.html",
  "/packers-and-movers-in-hyderabad.html"
];

const today = "2026-07-03";
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls.map((path) => `  <url>\n    <loc>${BASE}${path === "/" ? "/" : path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${path === "/" ? "weekly" : "monthly"}</changefreq>\n    <priority>${path === "/" ? "1.0" : path.includes("packers-and-movers") ? "0.9" : "0.8"}</priority>\n  </url>`).join("\n")}\n</urlset>\n`;
fs.writeFileSync("sitemap.xml", sitemap);
fs.writeFileSync("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${BASE}/sitemap.xml\n`);
