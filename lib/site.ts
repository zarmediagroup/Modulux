export const siteConfig = {
  name: "MODULUX",
  tagline: "The Modern Way of Housing",
  url: "https://www.modulux.co.za",
  locale: "en_ZA",
  description:
    "MODULUX builds double-wing folding homes, container units, and space capsules in Cape Town, South Africa. From R25,000. NHBRC registered, delivered nationwide.",
  email: "info@modulux.co.za",
  phone: "+27729095837",
  phoneDisplay: "072 909 5837",
  whatsapp: "27729095837",
  address: {
    street: "12 Modular Way",
    city: "Bellville",
    region: "Western Cape",
    postalCode: "7530",
    country: "ZA",
  },
  geo: {
    latitude: -33.8803,
    longitude: 18.6292,
  },
  openingHours: [
    "Mo-Fr 08:00-17:00",
    "Sa 09:00-13:00",
  ],
  serviceAreas: [
    "Cape Town",
    "Western Cape",
    "Bellville",
    "Stellenbosch",
    "Paarl",
    "South Africa",
  ],
  social: {
    instagram: "https://instagram.com/modulux",
    facebook: "https://facebook.com/modulux",
    linkedin: "https://linkedin.com/company/modulux",
  },
  googleSiteVerification: "IRnnvVzaUGsyvJibUyezOQajTMixkIaQFgAYlPvm4_M",
} as const;

export const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

export const keyIndexPages = [
  "/",
  "/designs",
  "/designs/10ft-double-wing-folding-home",
  "/designs/20ft-double-wing-folding-home",
  "/designs/30ft-double-wing-folding-home",
  "/designs/40ft-double-wing-folding-home",
  "/designs/flat-pack-container-house",
  "/designs/space-capsule-series-x7",
  "/commercial",
  "/display-village",
  "/about",
  "/contact",
  "/blog",
  "/blog/modular-vs-traditional-build-cost-south-africa",
  "/blog/granny-flat-regulations-western-cape",
  "/blog/nhbrc-modular-homes-explained",
  "/blog/90-day-modular-home-timeline",
] as const;
