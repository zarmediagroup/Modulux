import { moduluxFaqs, type FaqItem } from "@/lib/faqs";
import { moduluxProcessSteps } from "@/lib/process";
import { siteConfig } from "@/lib/site";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon`,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    sameAs: Object.values(siteConfig.social),
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-ZA",
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/designs?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    image: `${siteConfig.url}/images/hero.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Cape Town", containedInPlace: { "@type": "State", name: "Western Cape" } },
      { "@type": "State", name: "Western Cape" },
      { "@type": "Country", name: "South Africa" },
    ],
    priceRange: "R620000+",
    knowsAbout: [
      "Modular homes",
      "Prefab homes",
      "Granny flats",
      "NHBRC registered housing",
      "Factory-built homes",
    ],
  };
}

export function getDisplayVillagePlaceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MODULUX Display Village",
    description:
      "Visit the MODULUX Display Village in Bellville, Cape Town to walk through 10ft, 20ft, 30ft, and 40ft modular home units.",
    url: `${siteConfig.url}/display-village`,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    parentOrganization: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

export function getFAQPageSchema(faqs: FaqItem[] = moduluxFaqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function getHowToSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to order a MODULUX modular home",
    description:
      "Four steps from choosing a design to moving into your factory-built modular home in Cape Town or anywhere in South Africa.",
    totalTime: "P90D",
    step: moduluxProcessSteps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function getBreadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function getArticleSchema(post: {
  title: string;
  excerpt: string;
  slug: string;
  publishedAt: string;
  author: string;
}) {
  const pageUrl = `${siteConfig.url}/blog/${post.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    inLanguage: "en-ZA",
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/icon`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["article h1", "article .blog-excerpt"],
    },
  };
}

export function getProductSchema(design: {
  name: string;
  slug: string;
  description: string;
  price: string;
  priceValue: number;
  images: { src: string; alt: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: design.name,
    description: design.description,
    url: `${siteConfig.url}/designs/${design.slug}`,
    image: design.images.map((img) =>
      img.src.startsWith("http") ? img.src : `${siteConfig.url}${img.src}`,
    ),
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "ZAR",
      price: design.priceValue,
      availability: "https://schema.org/InStock",
      areaServed: {
        "@type": "Country",
        name: "South Africa",
      },
      priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0],
    },
  };
}

export function getServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Modular home design, manufacture and delivery",
    description:
      "MODULUX designs, factory-builds, and delivers NHBRC-registered modular homes across South Africa from Cape Town.",
    provider: {
      "@id": `${siteConfig.url}/#localbusiness`,
    },
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    serviceType: "Modular home construction",
  };
}
