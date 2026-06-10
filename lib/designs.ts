import { getDesignMedia } from "@/lib/images";

function media(slug: string) {
  const { images, floorPlan, cardImage } = getDesignMedia(slug);
  return { images, floorPlanImage: floorPlan, cardImage };
}

export const designCategories = ["10ft", "20ft", "30ft", "40ft"] as const;
export type DesignCategory = (typeof designCategories)[number];

export type HomeDesign = {
  slug: string;
  name: string;
  tagline: string;
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

const sharedFeatures = [
  "Expandable double-wing folding design",
  "Open-plan lounge and kitchen",
  "Fully equipped bathroom",
  "Factory-built precision engineering",
  "Delivered ready to connect and use",
  "NHBRC registered & certified",
  "15-year structural warranty",
];

function formatPrice(value: number): string {
  return `R${value.toLocaleString("en-ZA")}`;
}

export const designs: HomeDesign[] = [
  {
    slug: "10ft-double-wing-folding-home",
    name: "10ft Double-Wing Folding Home",
    tagline: "Compact modern living that expands in minutes",
    bedrooms: 1,
    bathrooms: 1,
    garages: 0,
    area: 19.08,
    price: formatPrice(35000),
    priceValue: 35000,
    category: "10ft",
    description: `The 10ft Double-Wing Folding Home is a compact, modern living solution featuring a spacious bedroom, open-plan lounge and kitchen, and a fully equipped bathroom. ${foldingDescription}\n\nAt 19.08m², it is ideal for granny flats, rental units, home offices, or standalone compact living on smaller stands.`,
    features: sharedFeatures,
    ...media("10ft-double-wing-folding-home"),
    isFeatured: true,
    specifications: [
      { label: "Unit Size", value: "10ft Double-Wing" },
      { label: "Total Area", value: "19.08 m²" },
      { label: "Bedrooms", value: "1" },
      { label: "Bathrooms", value: "1" },
      { label: "Layout", value: "Bedroom, open-plan lounge & kitchen, bathroom" },
      { label: "Design Type", value: "Expandable folding double-wing" },
      { label: "Warranty", value: "15-Year Structural" },
    ],
  },
  {
    slug: "20ft-double-wing-folding-home",
    name: "20ft Double-Wing Folding Home",
    tagline: "Two-bedroom folding home for flexible family living",
    bedrooms: 2,
    bathrooms: 1,
    garages: 0,
    area: 37.52,
    price: formatPrice(55000),
    priceValue: 55000,
    category: "20ft",
    description: `The 20ft Double-Wing Folding Home is a compact, modern living solution featuring spacious bedrooms, open-plan lounge and kitchen, and a fully equipped bathroom. ${foldingDescription}\n\nWith 37.52m² of usable space, this model suits couples, small families, or secondary dwellings that need an extra bedroom without a large footprint.`,
    features: sharedFeatures,
    ...media("20ft-double-wing-folding-home"),
    isFeatured: true,
    specifications: [
      { label: "Unit Size", value: "20ft Double-Wing" },
      { label: "Total Area", value: "37.52 m²" },
      { label: "Bedrooms", value: "2" },
      { label: "Bathrooms", value: "1" },
      { label: "Layout", value: "2 bedrooms, open-plan lounge & kitchen, bathroom" },
      { label: "Design Type", value: "Expandable folding double-wing" },
      { label: "Warranty", value: "15-Year Structural" },
    ],
  },
  {
    slug: "30ft-double-wing-folding-home",
    name: "30ft Double-Wing Folding Home",
    tagline: "Three-bedroom folding home with room to grow",
    bedrooms: 3,
    bathrooms: 1,
    garages: 0,
    area: 57.24,
    price: formatPrice(80000),
    priceValue: 80000,
    category: "30ft",
    description: `The 30ft Double-Wing Folding Home is a compact, modern living solution featuring spacious bedrooms, open-plan lounge and kitchen, and a fully equipped bathroom. ${foldingDescription}\n\nAt 57.24m², this is a practical full-family layout — three bedrooms and shared living space in a unit that still deploys quickly on site.`,
    features: sharedFeatures,
    ...media("30ft-double-wing-folding-home"),
    isFeatured: true,
    specifications: [
      { label: "Unit Size", value: "30ft Double-Wing" },
      { label: "Total Area", value: "57.24 m²" },
      { label: "Bedrooms", value: "3" },
      { label: "Bathrooms", value: "1" },
      { label: "Layout", value: "3 bedrooms, open-plan lounge & kitchen, bathroom" },
      { label: "Design Type", value: "Expandable folding double-wing" },
      { label: "Warranty", value: "15-Year Structural" },
    ],
  },
  {
    slug: "40ft-double-wing-folding-home",
    name: "40ft Single Double-Wing Folding Home",
    tagline: "Our largest folding home — maximum space and comfort",
    bedrooms: 3,
    bathrooms: 1,
    garages: 0,
    area: 75.05,
    price: formatPrice(90000),
    priceValue: 90000,
    category: "40ft",
    description: `The 40ft Double-Wing Folding Home is a compact, modern living solution featuring spacious bedrooms, open-plan lounge and kitchen, and a fully equipped bathroom. ${foldingDescription}\n\nThe flagship 75.05m² layout delivers the most living space in the range — ideal when you want a full home footprint with the speed and efficiency of MODULUX folding construction.`,
    features: sharedFeatures,
    ...media("40ft-double-wing-folding-home"),
    isFeatured: true,
    specifications: [
      { label: "Unit Size", value: "40ft Double-Wing" },
      { label: "Total Area", value: "75.05 m²" },
      { label: "Bedrooms", value: "3" },
      { label: "Bathrooms", value: "1" },
      { label: "Layout", value: "3 bedrooms, open-plan lounge & kitchen, bathroom" },
      { label: "Design Type", value: "Expandable folding double-wing" },
      { label: "Warranty", value: "15-Year Structural" },
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
  return designs.filter((d) => d.slug !== current.slug).slice(0, count);
}

export function getStartingPrice(): number {
  return Math.min(...designs.map((d) => d.priceValue));
}
