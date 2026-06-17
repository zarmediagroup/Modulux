import { getDesignMedia } from "@/lib/images";

function media(slug: string) {
  const { images, floorPlan, cardImage } = getDesignMedia(slug);
  return { images, floorPlanImage: floorPlan, cardImage };
}

export const designSeries = ["Folding", "Container", "Space Capsule"] as const;
export type DesignSeries = (typeof designSeries)[number];

export const designCategories = designSeries;
export type DesignCategory = DesignSeries;

export type HomeDesign = {
  slug: string;
  name: string;
  tagline: string;
  series: DesignSeries;
  badge: string;
  bedrooms: number;
  bathrooms: number;
  garages: number;
  area: number;
  price: string;
  priceValue: number;
  category: DesignCategory;
  description: string;
  features: string[];
  cardImage: string;
  images: { src: string; alt: string; kind?: "photo" | "floorplan" }[];
  floorPlanImage: string;
  isFeatured: boolean;
  specifications: { label: string; value: string }[];
};

const foldingDescription =
  "Its innovative expandable design transforms into a comfortable and functional living space within minutes.";

const foldingFeatures = [
  "Expandable double-wing folding design",
  "Open-plan lounge and kitchen",
  "Fully equipped bathroom",
  "Factory-built precision engineering",
  "Delivered ready to connect and use",
  "NHBRC registered & certified",
  "15-year structural warranty",
];

const containerFeatures = [
  "Efficient transportation and fast deployment",
  "Sturdy waterproof structure",
  "Superior thermal insulation",
  "All-weather protection",
  "Operational immediately after installation",
  "Suitable for accommodation and offices",
];

const capsuleFeatures = [
  "Distinctive space capsule architecture",
  "Fully self-contained living unit",
  "Integrated bathroom",
  "Fast on-site installation",
  "Ideal for hospitality and boutique stays",
  "Premium insulated construction",
];

const capsuleDefaultInfo =
  "A premium space capsule unit with integrated living space and bathroom — designed for distinctive short-stay, hospitality, and boutique living applications.";

const xTypeZTypeInfo =
  "Foldable, with minimized volume when folded, efficient transportation, fast deployment, ready for use immediately after installation; sturdy structure, waterproof and heat-insulated, suitable for temporary accommodation, offices and various other scenarios.";

function formatPrice(value: number): string {
  return `R${value.toLocaleString("en-ZA")}`;
}

function foldingDesign(
  slug: string,
  name: string,
  tagline: string,
  badge: string,
  bedrooms: number,
  area: number,
  priceValue: number,
  layout: string,
  extraDesc: string,
): HomeDesign {
  return {
    slug,
    name,
    tagline,
    series: "Folding",
    badge,
    bedrooms,
    bathrooms: 1,
    garages: 0,
    area,
    price: formatPrice(priceValue),
    priceValue,
    category: "Folding",
    description: `The ${name} is a compact, modern living solution featuring ${bedrooms === 1 ? "a spacious bedroom" : "spacious bedrooms"}, open-plan lounge and kitchen, and a fully equipped bathroom. ${foldingDescription}\n\n${extraDesc}`,
    features: foldingFeatures,
    ...media(slug),
    isFeatured: true,
    specifications: [
      { label: "Series", value: "Double-Wing Folding" },
      { label: "Unit Size", value: badge },
      { label: "Total Area", value: `${area} m²` },
      { label: "Bedrooms", value: String(bedrooms) },
      { label: "Bathrooms", value: "1" },
      { label: "Layout", value: layout },
      { label: "Warranty", value: "15-Year Structural" },
    ],
  };
}

export const designs: HomeDesign[] = [
  foldingDesign(
    "10ft-double-wing-folding-home",
    "10ft Double-Wing Folding Home",
    "Compact modern living that expands in minutes",
    "10ft",
    1,
    19.08,
    35000,
    "Bedroom, open-plan lounge & kitchen, bathroom",
    "At 19.08m², ideal for granny flats, rental units, home offices, or compact standalone living.",
  ),
  foldingDesign(
    "20ft-double-wing-folding-home",
    "20ft Double-Wing Folding Home",
    "Two-bedroom folding home for flexible family living",
    "20ft",
    2,
    37.52,
    55000,
    "2 bedrooms, open-plan lounge & kitchen, bathroom",
    "With 37.52m², suits couples, small families, or secondary dwellings needing an extra bedroom.",
  ),
  foldingDesign(
    "30ft-double-wing-folding-home",
    "30ft Double-Wing Folding Home",
    "Three-bedroom folding home with room to grow",
    "30ft",
    3,
    57.24,
    80000,
    "3 bedrooms, open-plan lounge & kitchen, bathroom",
    "At 57.24m², a practical full-family layout that still deploys quickly on site.",
  ),
  foldingDesign(
    "40ft-double-wing-folding-home",
    "40ft Single Double-Wing Folding Home",
    "Our largest folding home — maximum space and comfort",
    "40ft",
    3,
    75.05,
    90000,
    "3 bedrooms, open-plan lounge & kitchen, bathroom",
    "The flagship 75.05m² layout — maximum living space with MODULUX folding construction efficiency.",
  ),
  {
    slug: "flat-pack-container-house",
    name: "Flat-pack Container House",
    tagline: "Effortless assembly with all-weather protection",
    series: "Container",
    badge: "Flat-Pack",
    bedrooms: 1,
    bathrooms: 1,
    garages: 0,
    area: 14.7,
    price: formatPrice(25000),
    priceValue: 25000,
    category: "Container",
    description:
      "Flat-pack Container house: Effortless assembly and disassembly, highly efficient transportation, rugged construction, superior thermal insulation, and all weather protection. It is fully operational right after installation.\n\nAt 14.7m² with 2.8m ceiling height, this is MODULUX's most accessible container solution for site offices, worker accommodation, and compact living.",
    features: containerFeatures,
    ...media("flat-pack-container-house"),
    isFeatured: true,
    specifications: [
      { label: "Series", value: "Container" },
      { label: "Type", value: "Flat-pack" },
      { label: "Total Area", value: "14.7 m²" },
      { label: "Height", value: "2.8 m" },
      { label: "Bedrooms", value: "1" },
      { label: "Bathrooms", value: "1" },
    ],
  },
  {
    slug: "x-type-container-house",
    name: "X-type Container House",
    tagline: "Foldable container with fast deployment",
    series: "Container",
    badge: "X-Type",
    bedrooms: 1,
    bathrooms: 1,
    garages: 0,
    area: 14.7,
    price: formatPrice(25000),
    priceValue: 25000,
    category: "Container",
    description: `X-type container house: ${xTypeZTypeInfo}\n\n14.7m² footprint with 2.8m height — deploy quickly for temporary accommodation, site offices, or modular commercial use.`,
    features: containerFeatures,
    ...media("x-type-container-house"),
    isFeatured: true,
    specifications: [
      { label: "Series", value: "Container" },
      { label: "Type", value: "X-Type Foldable" },
      { label: "Total Area", value: "14.7 m²" },
      { label: "Height", value: "2.8 m" },
      { label: "Bedrooms", value: "1" },
      { label: "Bathrooms", value: "1" },
    ],
  },
  {
    slug: "z-type-container-house",
    name: "Z-type Container House",
    tagline: "Foldable container built for rapid site setup",
    series: "Container",
    badge: "Z-Type",
    bedrooms: 1,
    bathrooms: 1,
    garages: 0,
    area: 14.7,
    price: formatPrice(25000),
    priceValue: 25000,
    category: "Container",
    description: `Z-type container house: ${xTypeZTypeInfo}\n\n14.7m² with 2.8m height — the Z-type folding geometry minimises transport volume while delivering a ready-to-use unit on arrival.`,
    features: containerFeatures,
    ...media("z-type-container-house"),
    isFeatured: true,
    specifications: [
      { label: "Series", value: "Container" },
      { label: "Type", value: "Z-Type Foldable" },
      { label: "Total Area", value: "14.7 m²" },
      { label: "Height", value: "2.8 m" },
      { label: "Bedrooms", value: "1" },
      { label: "Bathrooms", value: "1" },
    ],
  },
  {
    slug: "space-capsule-series-x3",
    name: "Space Capsule Series x3",
    tagline: "Compact capsule living with integrated kitchen",
    series: "Space Capsule",
    badge: "x3",
    bedrooms: 1,
    bathrooms: 1,
    garages: 0,
    area: 16.7,
    price: formatPrice(80000),
    priceValue: 80000,
    category: "Space Capsule",
    description: `${capsuleDefaultInfo}\n\nThe x3 model offers 16.7m² with bedroom, bathroom, and integrated kitchen — perfect for glamping resorts, Airbnb units, and boutique accommodation.`,
    features: [...capsuleFeatures, "Integrated kitchen"],
    ...media("space-capsule-series-x3"),
    isFeatured: true,
    specifications: [
      { label: "Series", value: "Space Capsule" },
      { label: "Model", value: "x3" },
      { label: "Total Area", value: "16.7 m²" },
      { label: "Bedrooms", value: "1" },
      { label: "Bathrooms", value: "1" },
      { label: "Kitchen", value: "1" },
    ],
  },
  {
    slug: "space-capsule-series-x3-2",
    name: "Space Capsule Series x3-2",
    tagline: "Alternate x3 capsule configuration",
    series: "Space Capsule",
    badge: "x3-2",
    bedrooms: 1,
    bathrooms: 1,
    garages: 0,
    area: 16.7,
    price: formatPrice(80000),
    priceValue: 80000,
    category: "Space Capsule",
    description: `${capsuleDefaultInfo}\n\nThe x3-2 variant delivers the same 16.7m² footprint with an alternate interior layout — bedroom, bathroom, and integrated kitchen for hospitality and boutique stays.`,
    features: [...capsuleFeatures, "Integrated kitchen"],
    ...media("space-capsule-series-x3-2"),
    isFeatured: false,
    specifications: [
      { label: "Series", value: "Space Capsule" },
      { label: "Model", value: "x3-2" },
      { label: "Total Area", value: "16.7 m²" },
      { label: "Bedrooms", value: "1" },
      { label: "Bathrooms", value: "1" },
      { label: "Kitchen", value: "1" },
    ],
  },
  {
    slug: "space-capsule-series-x7",
    name: "Space Capsule Series x7",
    tagline: "Spacious capsule with panoramic living",
    series: "Space Capsule",
    badge: "x7",
    bedrooms: 1,
    bathrooms: 1,
    garages: 0,
    area: 34.5,
    price: formatPrice(100000),
    priceValue: 100000,
    category: "Space Capsule",
    description: `${capsuleDefaultInfo}\n\nThe x7 is the mid-range capsule at 34.5m² — generous living space with bedroom, bathroom, and kitchen for premium short-stay and eco-tourism applications.`,
    features: [...capsuleFeatures, "Integrated kitchen"],
    ...media("space-capsule-series-x7"),
    isFeatured: true,
    specifications: [
      { label: "Series", value: "Space Capsule" },
      { label: "Model", value: "x7" },
      { label: "Total Area", value: "34.5 m²" },
      { label: "Bedrooms", value: "1" },
      { label: "Bathrooms", value: "1" },
      { label: "Kitchen", value: "1" },
    ],
  },
  {
    slug: "space-capsule-series-x7-2",
    name: "Space Capsule Series x7-2",
    tagline: "Alternate x7 layout for premium stays",
    series: "Space Capsule",
    badge: "x7-2",
    bedrooms: 1,
    bathrooms: 1,
    garages: 0,
    area: 34.5,
    price: formatPrice(100000),
    priceValue: 100000,
    category: "Space Capsule",
    description: `${capsuleDefaultInfo}\n\nThe x7-2 offers 34.5m² with an alternate floor plan — ideal when you want the x7 footprint with a different interior configuration.`,
    features: [...capsuleFeatures, "Integrated kitchen"],
    ...media("space-capsule-series-x7-2"),
    isFeatured: false,
    specifications: [
      { label: "Series", value: "Space Capsule" },
      { label: "Model", value: "x7-2" },
      { label: "Total Area", value: "34.5 m²" },
      { label: "Bedrooms", value: "1" },
      { label: "Bathrooms", value: "1" },
      { label: "Kitchen", value: "1" },
    ],
  },
  {
    slug: "space-capsule-series-x7-2gen",
    name: "Space Capsule Series x7 — 2nd Gen",
    tagline: "Next-generation x7 capsule design",
    series: "Space Capsule",
    badge: "x7 Gen 2",
    bedrooms: 1,
    bathrooms: 1,
    garages: 0,
    area: 34.5,
    price: formatPrice(120000),
    priceValue: 120000,
    category: "Space Capsule",
    description: `${capsuleDefaultInfo}\n\nThe second-generation x7 builds on the 34.5m² platform with refined finishes and updated layout — MODULUX's flagship space capsule for high-end hospitality projects.`,
    features: [...capsuleFeatures, "Integrated kitchen", "2nd generation specification"],
    ...media("space-capsule-series-x7-2gen"),
    isFeatured: true,
    specifications: [
      { label: "Series", value: "Space Capsule" },
      { label: "Model", value: "x7 2nd Generation" },
      { label: "Total Area", value: "34.5 m²" },
      { label: "Bedrooms", value: "1" },
      { label: "Bathrooms", value: "1" },
      { label: "Kitchen", value: "1" },
    ],
  },
  {
    slug: "space-capsule-series-d3",
    name: "Space Capsule Series D3",
    tagline: "Entry-level capsule for boutique accommodation",
    series: "Space Capsule",
    badge: "D3",
    bedrooms: 1,
    bathrooms: 1,
    garages: 0,
    area: 18,
    price: formatPrice(60000),
    priceValue: 60000,
    category: "Space Capsule",
    description: `${capsuleDefaultInfo}\n\nThe D3 delivers 18m² of capsule living at an accessible price point — bedroom and bathroom in a striking architectural shell for resorts and private land.`,
    features: capsuleFeatures,
    ...media("space-capsule-series-d3"),
    isFeatured: true,
    specifications: [
      { label: "Series", value: "Space Capsule" },
      { label: "Model", value: "D3" },
      { label: "Total Area", value: "18 m²" },
      { label: "Bedrooms", value: "1" },
      { label: "Bathrooms", value: "1" },
    ],
  },
];

export function getDesignBySlug(slug: string): HomeDesign | undefined {
  return designs.find((d) => d.slug === slug);
}

export function getFeaturedDesigns(): HomeDesign[] {
  return designs.filter((d) => d.isFeatured);
}

export function getRelatedDesigns(current: HomeDesign, count = 3): HomeDesign[] {
  const sameSeries = designs.filter(
    (d) => d.slug !== current.slug && d.series === current.series,
  );
  const others = designs.filter(
    (d) => d.slug !== current.slug && d.series !== current.series,
  );
  return [...sameSeries, ...others].slice(0, count);
}

export function getStartingPrice(): number {
  return Math.min(...designs.map((d) => d.priceValue));
}
