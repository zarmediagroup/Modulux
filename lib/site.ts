export const siteConfig = {
  name: "MODULUX",
  tagline: "The Modern Way of Housing",
  url: "https://www.modulux.co.za",
  locale: "en_ZA",
  description:
    "MODULUX builds precision-engineered modular homes in Cape Town, South Africa. Beautifully designed, delivered fully finished, anywhere in South Africa.",
  email: "info@modulux.co.za",
  phone: "+27210000000",
  whatsapp: "27210000000",
  address: {
    street: "12 Modular Way",
    city: "Bellville",
    region: "Cape Town",
    postalCode: "7530",
    country: "ZA",
  },
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
  "/designs/the-stellenbosch",
  "/designs/the-karoo",
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
