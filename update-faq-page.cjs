const fs = require("fs");

const brand = "Easy India Packers Movers";
const domain = "shifteasyindia.com";
const phone = "8860688698";
const email = "info@shifteasyindia.com";
const address = "Plot No 81 First Floor, Housing Board Colony, Sector 7, Gurgaon, Haryana 122001";
const logo = "assets/logo-easy-india-packers-movers.png";

const categories = [
  {
    title: "Booking & Charges",
    id: "booking-charges",
    faqs: [
      ["Packers and Movers ko kitne din pehle book karna chahiye?", "Agar aap local house shifting kar rahe hain, to 2-3 din pehle booking karna normally kaafi hota hai. Lekin weekend, month-end ya intercity shifting ke liye 7-15 din pehle booking karna better rahega, taaki truck, manpower aur packing team ka slot easily mil sake."],
      ["Kya same-day shifting possible hai?", "Haan, same-day shifting possible ho sakti hai, lekin ye availability par depend karta hai. Agar saman kam hai aur local move hai, to team short notice par arrange ho sakti hai, but heavy household shifting ke liye advance booking recommended hai."],
      ["Shifting ka quote kaise calculate hota hai?", "Quote distance, saman ki quantity, floor, lift availability, truck size, packing material, manpower aur shifting date ke basis par calculate hota hai. Agar narrow lane, extra stairs, waiting time ya special packing required ho, to cost thodi change ho sakti hai."],
      ["Kya phone ya WhatsApp par estimate mil sakta hai?", "Haan, basic estimate phone ya WhatsApp par mil sakta hai. Aapko inventory details, pickup-drop location, floor details aur shifting date share karni hoti hai. Final quote tabhi accurate hota hai jab saman ki proper details clear ho."],
      ["Kya shifting se pehle survey zaroori hota hai?", "Har move me physical survey zaroori nahi hota. Small shifting ke liye video survey ya WhatsApp inventory enough ho sakti hai. Lekin full house shifting, fragile items, office shifting ya intercity move ke liye survey better hota hai."],
      ["Kya quote ke baad hidden charges lag sakte hain?", "Hidden charges avoid karne ke liye booking se pehle written quotation lena zaroori hai. Quote me packing, loading, unloading, transport, GST, insurance, dismantling aur storage included hai ya nahi, ye clearly confirm kar lena chahiye."],
      ["Weekend shifting ke charges zyada hote hain kya?", "Weekend aur month-end par demand high hoti hai, isliye charges normal weekday se thode zyada ho sakte hain. Agar date flexible hai, to weekday shifting budget-friendly option ho sakta hai."],
      ["Local shifting aur intercity shifting me kya difference hota hai?", "Local shifting same city ke andar hoti hai, jisme packing, loading, transport aur unloading usually same day complete ho jata hai. Intercity shifting me goods ek city se dusri city bheje jaate hain, isme transit time, insurance aur tracking ka role zyada important hota hai."],
      ["Kya advance payment dena zaroori hota hai?", "Kai companies booking confirm karne ke liye small advance leti hain. Lekin sirf WhatsApp quote dekhkar full payment nahi deni chahiye. Proper company details, written quote aur payment receipt confirm karna safe rahega."],
      ["Kya GST charges alag se lagte hain?", "Haan, GST applicable ho sakta hai, depending on company billing. Booking se pehle ye confirm kar lein ki quoted amount GST inclusive hai ya GST extra add hoga."]
    ]
  },
  {
    title: "Packing & Safety",
    id: "packing-safety",
    faqs: [
      ["Packing material charges me included hota hai kya?", "Most packages me cartons, bubble wrap, tape, foam sheet aur normal packing material included hota hai. Lekin wooden crate, premium packing, special fragile packing ya waterproof packing ke charges alag ho sakte hain."],
      ["Packers fragile items ko kaise handle karte hain?", "Fragile items jaise glass, mirror, crockery, TV, electronics aur decor pieces ko bubble wrap, foam padding aur strong carton me pack kiya jata hai. Agar item very delicate hai, to special packing ya wooden crating ka option bhi diya ja sakta hai."],
      ["Kya TV, fridge aur washing machine safely shift ho jate hain?", "Haan, appliances ko proper padding aur protective packing ke saath shift kiya jata hai. Fridge, washing machine, LED TV aur microwave jaise items ke liye extra care aur correct handling zaroori hoti hai."],
      ["Kya bed, wardrobe aur furniture dismantle karke shift kiya jata hai?", "Haan, basic furniture jaise bed, wardrobe, dining table ya modular items ko dismantle karke pack kiya ja sakta hai. Reassembly service package me included hai ya alag se chargeable hai, ye booking ke time confirm karna chahiye."],
      ["Kya packing team saman ko label karti hai?", "Professional packing me boxes par marking ya label lagaya ja sakta hai, jaise kitchen, bedroom, fragile, electronics etc. Isse delivery ke time unpacking aur room-wise placement easy ho jata hai."],
      ["Kya movers unpacking bhi karte hain?", "Basic unpacking service kai packages me available hoti hai. Lekin complete home setting, cupboard arrangement, kitchen setup ya decor placement normally extra service ho sakti hai."],
      ["Move wale din se pehle mujhe kya prepare karna chahiye?", "Important documents, jewellery, cash, laptop aur personal valuables apne paas rakhein. Jo saman pack nahi karwana hai, usko alag corner me rakh dein. Fragile items aur high-value goods ke baare me team ko pehle inform kar dein."],
      ["Kya personal valuables movers ko dene chahiye?", "Cash, jewellery, documents, passport, laptop, medicines aur personal valuables apne paas rakhna better hota hai. Movers household goods shift karte hain, lekin personal important items customer ke paas safe rehte hain."],
      ["Kya plants ya pets movers shift karte hain?", "Usually plants, pets ya live items normal household shifting me include nahi hote. Agar aapko plants ya pets move karne hain, to company se pehle confirm karna chahiye."],
      ["Kaun se items movers normally shift nahi karte?", "Gas cylinder, petrol, kerosene, chemicals, fireworks, illegal items, leaking liquids, perishable food aur flammable items usually shift nahi kiye jaate. Safety ke liye aise items pehle se disclose karna zaroori hai."]
    ]
  },
  {
    title: "Insurance, Damage & Claim",
    id: "insurance-claim",
    faqs: [
      ["Kya shifting insurance lena zaroori hai?", "Insurance especially intercity shifting, expensive furniture, electronics, car/bike aur fragile items ke liye recommended hai. Professional packing ke baad bhi transit me accident, weather, road condition ya handling risk ho sakta hai."],
      ["Insurance charges kaise decide hote hain?", "Insurance usually declared value ke basis par calculate hota hai. Customer ko apne goods ki approximate value honestly declare karni chahiye, taaki claim ke time confusion na ho."],
      ["Agar saman damage ho jaye to kya karna chahiye?", "Delivery ke time saman check karein. Agar damage dikhe to turant photo/video lein, delivery team ko inform karein aur company support ko same day report karein. Delay karne se claim process difficult ho sakta hai."],
      ["Insurance claim ka process kya hota hai?", "Claim process company policy aur insurance terms ke basis par hota hai. Damage proof, photos, invoice/declared value aur delivery note helpful hote hain. Genuine movers claim coordination me customer ko guide karte hain."],
      ["Kya movers damage-free shifting guarantee karte hain?", "Professional movers safe packing aur careful handling provide karte hain, lekin 100% risk-free transit practical nahi hota. Isliye high-value goods ke liye insurance lena smart decision hota hai."]
    ]
  },
  {
    title: "Tracking & Delivery",
    id: "tracking-delivery",
    faqs: [
      ["Shifting ke dauran saman ki tracking kaise hogi?", "Tracking company ke process par depend karti hai. Kuch companies tracking link, SMS, WhatsApp update ya consignment number provide karti hain, aur kuch move coordinator ke through regular updates deti hain."],
      ["Kya mujhe ek dedicated move coordinator milega?", "Good relocation service me usually ek dedicated move coordinator assign hota hai. Ye person booking, packing, dispatch, transit aur delivery updates manage karta hai, taaki customer ko baar-baar alag logon ko details explain na karni pade."],
      ["Intercity shifting me delivery kitne din me hoti hai?", "Delivery time pickup city, destination city, distance, route aur vehicle availability par depend karta hai. Nearby cities me delivery fast ho sakti hai, long-distance moves me kuch din lag sakte hain."],
      ["Agar delivery delay ho jaye to kya hoga?", "Traffic, weather, route restriction, truck delay ya destination access issue ki wajah se delay ho sakta hai. Professional movers customer ko update dete hain aur expected delivery time revise karte hain."],
      ["Kya delivery date reschedule kar sakte hain?", "Haan, kai cases me delivery ya movement date reschedule ho sakti hai. Lekin last-minute change par waiting, storage ya rescheduling charges apply ho sakte hain, isliye policy pehle confirm kar leni chahiye."]
    ]
  },
  {
    title: "Vehicle, Office & Storage",
    id: "vehicle-office-storage",
    faqs: [
      ["Kya car ya bike shifting available hai?", "Haan, car aur bike shifting ke liye dedicated vehicle carrier ya container transport available ho sakta hai. Vehicle shifting ke liye RC copy, insurance copy aur ID proof jaise basic documents ready rakhne chahiye."],
      ["Kya office shifting bhi karte hain?", "Haan, office shifting me furniture, chairs, tables, computers, files, printers, workstations aur other equipment safely move kiye ja sakte hain. Office relocation ke liye proper inventory list aur timing planning important hoti hai, taaki business downtime kam rahe."],
      ["Kya warehouse ya storage facility milti hai?", "Haan, many packers and movers short-term aur long-term storage facility provide karte hain. Agar aapka new home ready nahi hai, renovation chal raha hai ya delivery hold karni hai, to storage option useful ho sakta hai."],
      ["Kya partial shifting bhi possible hai?", "Haan, agar aapko sirf few items, furniture, appliances ya small luggage shift karna hai, to partial shifting possible hoti hai. Is type ki shifting me cost full house shifting se kam ho sakti hai."],
      ["Genuine Packers and Movers company kaise choose karein?", "Company ki official website, office address, GST details, written quotation, reviews, support number aur payment receipt check karein. Sirf lowest price ya WhatsApp message par trust na karein. Reliable company transparent quote, proper communication aur clear service terms provide karti hai."]
    ]
  }
];

const allFaqs = categories.flatMap((category) => category.faqs.map(([question, answer]) => ({ category: category.title, question, answer })));

function topBar() {
  return `  <div class="top-bar">
    <div class="container top-bar__inner">
      <p>Trusted Packers &amp; Movers Across India</p>
      <div class="top-bar__links">
        <a href="tel:+918860688698">Phone: ${phone}</a>
        <a href="https://wa.me/918860688698">WhatsApp: ${phone}</a>
        <a href="mailto:${email}">Email: ${email}</a>
        <a href="https://${domain}/">Website: ${domain}</a>
      </div>
    </div>
  </div>`;
}

function header() {
  return `  <header class="site-header">
    <div class="container nav">
      <a class="logo" href="index.html" aria-label="${brand} home">
        <img class="logo__image" src="${logo}" width="56" height="56" alt="" aria-hidden="true" loading="eager" decoding="async">
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
        <a href="faq.html">FAQ</a>
        <a href="contact.html">Contact</a>
      </nav>
      <a class="btn btn--small" href="contact.html#enquiry">Get Free Quote</a>
    </div>
  </header>`;
}

function footer() {
  return `  <footer class="footer">
    <div class="container footer__grid">
      <div>
        <a class="footer-logo" href="index.html" aria-label="${brand} home">
          <img src="${logo}" width="76" height="76" alt="" aria-hidden="true" loading="lazy" decoding="async">
          <span>${brand}</span>
        </a>
        <p>${address}</p>
      </div>
      <div>
        <h3>Company</h3>
        <a href="about-us.html">About Us</a>
        <a href="faq.html">FAQ</a>
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
        <p>Phone: <a href="tel:+918860688698">${phone}</a></p>
        <p>WhatsApp: <a href="https://wa.me/918860688698">${phone}</a></p>
        <p>Email: <a href="mailto:${email}">${email}</a></p>
        <p>Website: ${domain}</p>
      </div>
    </div>
    <div class="footer__bottom"><p>&copy; 2026 ${brand}. All Rights Reserved.</p></div>
  </footer>`;
}

function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": brand,
    "url": `https://${domain}/`,
    "logo": `https://${domain}/${logo}`,
    "telephone": "+918860688698",
    "email": email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No 81 First Floor, Housing Board Colony, Sector 7",
      "addressLocality": "Gurgaon",
      "addressRegion": "Haryana",
      "postalCode": "122001",
      "addressCountry": "IN"
    }
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
      "telephone": "+918860688698",
      "contactType": "customer support",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    }
  };
}

function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
}

const faqHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FAQ | Packers and Movers Questions | Easy India Packers Movers</title>
  <meta name="description" content="Read frequently asked questions about packers and movers booking, charges, packing, safety, insurance, tracking, delivery, office shifting, vehicle transport and storage support.">
  <link rel="canonical" href="https://${domain}/faq.html">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
  <script type="application/ld+json" data-schema="local-business">
${JSON.stringify(localBusinessSchema(), null, 2)}
  </script>
  <script type="application/ld+json" data-schema="organization">
${JSON.stringify(organizationSchema(), null, 2)}
  </script>
  <script type="application/ld+json" data-schema="faq">
${JSON.stringify(faqSchema(), null, 2)}
  </script>
</head>
<body>
${topBar()}
${header()}
  <main>
    <section class="page-hero">
      <div class="container page-hero__grid">
        <div class="page-hero-content">
          <span class="eyebrow">Customer Questions</span>
          <h1>Frequently Asked Questions</h1>
          <p>Find answers about booking, shifting charges, packing safety, insurance, delivery, vehicle transport, office relocation and storage support.</p>
          <div class="page-hero-actions">
            <a class="btn" href="tel:+918860688698">Call ${phone}</a>
            <a class="btn btn--white" href="https://wa.me/918860688698">WhatsApp Now</a>
          </div>
        </div>
        <div class="about-logo-panel"><img src="${logo}" width="520" height="520" alt="${brand} logo" loading="lazy" decoding="async"></div>
      </div>
    </section>

    <section class="section faq-page-section">
      <div class="container">
        <div class="section-heading">
          <span class="eyebrow">FAQ Categories</span>
          <h2>Select a Topic</h2>
          <p class="section-lead">Common moving questions ko category-wise arrange kiya gaya hai, taaki aap jaldi answer find kar sakein.</p>
        </div>
        <nav class="faq-category-nav" aria-label="FAQ categories">
          ${categories.map((category) => `<a href="#${category.id}">${category.title}</a>`).join("\n          ")}
        </nav>
      </div>
    </section>

    ${categories.map((category, categoryIndex) => `
    <section class="section faq-group${categoryIndex % 2 === 1 ? " faq-group--soft" : ""}" id="${category.id}">
      <div class="container">
        <div class="section-heading">
          <span class="eyebrow">FAQ</span>
          <h2>${category.title} FAQ</h2>
        </div>
        <div class="faq-card-list">
          ${category.faqs.map(([question, answer], index) => `<article class="faq-page-card">
            <span class="faq-page-card__number">${categoryIndex === 0 ? index + 1 : categories.slice(0, categoryIndex).reduce((total, item) => total + item.faqs.length, 0) + index + 1}</span>
            <div>
              <h3>${question}</h3>
              <p>${answer}</p>
            </div>
          </article>`).join("\n          ")}
        </div>
      </div>
    </section>`).join("\n")}

    <section class="city-cta">
      <div class="container cta-box">
        <div>
          <h2>Still Have Questions About Your Move?</h2>
          <p>Call or WhatsApp ${brand} and share your shifting details. Our team will guide you with booking, estimate and moving support.</p>
        </div>
        <div class="cta__actions">
          <a class="btn" href="tel:+918860688698">Call ${phone}</a>
          <a class="btn btn--white" href="https://wa.me/918860688698">WhatsApp Now</a>
        </div>
      </div>
    </section>
  </main>
${footer()}
  <div class="floating-actions" aria-label="Quick contact"><a class="float-btn float-btn--call" href="tel:+918860688698">Call</a><a class="float-btn float-btn--whatsapp" href="https://wa.me/918860688698">WhatsApp</a></div>
</body>
</html>
`;

fs.writeFileSync("faq.html", faqHtml);

for (const file of fs.readdirSync(".").filter((name) => name.endsWith(".html") && name !== "faq.html")) {
  let html = fs.readFileSync(file, "utf8");
  html = html.replace(/<header class="site-header">[\s\S]*?<\/header>/, header());
  html = html.replace(/<footer class="footer">[\s\S]*?<\/footer>/, footer());
  fs.writeFileSync(file, html);
}
