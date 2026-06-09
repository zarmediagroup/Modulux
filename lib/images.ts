/** Encode public folder paths (handles spaces and special characters in filenames). */
export function publicImage(path: string): string {
  return "/" + path.split("/").filter(Boolean).map(encodeURIComponent).join("/");
}

const ft10 = "10ft Double-wing folding house";
const ft20 = "20ft Double-wing folding house";
const ft30 = "30ft Double-wing folding house";
const ft40 = "40ft Double-wing folding house";

export const foldingHouses = {
  ft10: {
    render: publicImage(`${ft10}/ChatGPT Image Jun 7, 2026, 07_34_35 PM.png`),
    floorPlan: publicImage(`${ft10}/1 Bed and loung - Floorplan.png`),
  },
  ft20: {
    render: publicImage(`${ft20}/ChatGPT Image Jun 8, 2026, 10_03_32 PM.png`),
    floorPlan: publicImage(`${ft20}/20ft Double-wing floor plan.png`),
  },
  ft30: {
    render: publicImage(`${ft30}/ChatGPT Image Jun 8, 2026, 10_16_48 PM.png`),
    floorPlan: publicImage(`${ft30}/30ft Double-wing Floor plan.png`),
  },
  ft40: {
    render: publicImage(`${ft40}/ChatGPT Image Jun 9, 2026, 10_08_20 PM.png`),
    floorPlan: publicImage(`${ft40}/40ft - Double-wing Floor plan.png`),
  },
} as const;

export const siteImages = {
  hero: publicImage("images/hero.png"),
  maintenance: publicImage("images/hero.png"),
  showcase: publicImage("ChatGPT Image Jun 6, 2026, 07_47_20 PM.png"),
} as const;

export type ImageEntry = {
  src: string;
  alt: string;
  kind?: "photo" | "floorplan";
};

export const productLineImages = {
  grannyFlat: foldingHouses.ft10.render,
  standard: foldingHouses.ft20.render,
  premium: foldingHouses.ft40.render,
} as const;

type DesignMedia = {
  cardImage: string;
  images: ImageEntry[];
  floorPlan: string;
};

const designMedia: Record<string, DesignMedia> = {
  "the-constantia": {
    cardImage: foldingHouses.ft10.render,
    images: [
      { src: foldingHouses.ft10.render, alt: "The Constantia — 10ft double-wing exterior", kind: "photo" },
      { src: siteImages.showcase, alt: "The Constantia — modular home on site", kind: "photo" },
      { src: foldingHouses.ft10.floorPlan, alt: "The Constantia — floor plan", kind: "floorplan" },
    ],
    floorPlan: foldingHouses.ft10.floorPlan,
  },
  "the-paarl": {
    cardImage: foldingHouses.ft10.render,
    images: [
      { src: foldingHouses.ft10.render, alt: "The Paarl — 10ft double-wing exterior", kind: "photo" },
      { src: siteImages.hero, alt: "The Paarl — lifestyle exterior", kind: "photo" },
      { src: foldingHouses.ft10.floorPlan, alt: "The Paarl — floor plan", kind: "floorplan" },
    ],
    floorPlan: foldingHouses.ft10.floorPlan,
  },
  "the-karoo": {
    cardImage: foldingHouses.ft20.render,
    images: [
      { src: foldingHouses.ft20.render, alt: "The Karoo — 20ft double-wing exterior", kind: "photo" },
      { src: siteImages.showcase, alt: "The Karoo — modular home on site", kind: "photo" },
      { src: foldingHouses.ft20.floorPlan, alt: "The Karoo — floor plan", kind: "floorplan" },
    ],
    floorPlan: foldingHouses.ft20.floorPlan,
  },
  "the-swartland": {
    cardImage: foldingHouses.ft20.render,
    images: [
      { src: foldingHouses.ft20.render, alt: "The Swartland — 20ft double-wing exterior", kind: "photo" },
      { src: siteImages.hero, alt: "The Swartland — lifestyle exterior", kind: "photo" },
      { src: foldingHouses.ft20.floorPlan, alt: "The Swartland — floor plan", kind: "floorplan" },
    ],
    floorPlan: foldingHouses.ft20.floorPlan,
  },
  "the-stellenbosch": {
    cardImage: foldingHouses.ft30.render,
    images: [
      { src: foldingHouses.ft30.render, alt: "The Stellenbosch — 30ft double-wing exterior", kind: "photo" },
      { src: siteImages.showcase, alt: "The Stellenbosch — modular home on site", kind: "photo" },
      { src: foldingHouses.ft30.floorPlan, alt: "The Stellenbosch — floor plan", kind: "floorplan" },
    ],
    floorPlan: foldingHouses.ft30.floorPlan,
  },
  "the-franschhoek": {
    cardImage: foldingHouses.ft30.render,
    images: [
      { src: foldingHouses.ft30.render, alt: "The Franschhoek — 30ft double-wing exterior", kind: "photo" },
      { src: siteImages.hero, alt: "The Franschhoek — lifestyle exterior", kind: "photo" },
      { src: foldingHouses.ft30.floorPlan, alt: "The Franschhoek — floor plan", kind: "floorplan" },
    ],
    floorPlan: foldingHouses.ft30.floorPlan,
  },
  "the-blouberg": {
    cardImage: foldingHouses.ft40.render,
    images: [
      { src: foldingHouses.ft40.render, alt: "The Blouberg — 40ft double-wing exterior", kind: "photo" },
      { src: siteImages.showcase, alt: "The Blouberg — modular home on site", kind: "photo" },
      { src: foldingHouses.ft40.floorPlan, alt: "The Blouberg — floor plan", kind: "floorplan" },
    ],
    floorPlan: foldingHouses.ft40.floorPlan,
  },
};

const defaultMedia: DesignMedia = {
  cardImage: siteImages.hero,
  images: [{ src: siteImages.hero, alt: "MODULUX modular home", kind: "photo" }],
  floorPlan: siteImages.hero,
};

export function getDesignMedia(slug: string): DesignMedia {
  return designMedia[slug] ?? defaultMedia;
}

/** Scenic product photos only — no white-background technical or floor plan images. */
export const allProductImages = [
  { src: siteImages.hero, alt: "MODULUX modular home hero", span: "row-span-2", objectPosition: "75% center", kind: "photo" as const },
  { src: siteImages.showcase, alt: "MODULUX folding house on site", span: "row-span-1", objectPosition: "center", kind: "photo" as const },
  { src: foldingHouses.ft10.render, alt: "10ft double-wing folding house", span: "row-span-1", objectPosition: "center", kind: "photo" as const },
  { src: foldingHouses.ft20.render, alt: "20ft double-wing folding house", span: "row-span-1", objectPosition: "center", kind: "photo" as const },
  { src: foldingHouses.ft30.render, alt: "30ft double-wing folding house", span: "row-span-1", objectPosition: "center", kind: "photo" as const },
  { src: foldingHouses.ft40.render, alt: "40ft double-wing folding house", span: "row-span-2", objectPosition: "center", kind: "photo" as const },
] as const;

export const galleryImages = allProductImages;

export const displayVillageImages = [
  { src: foldingHouses.ft10.render, alt: "10ft display unit" },
  { src: foldingHouses.ft20.render, alt: "20ft display unit" },
  { src: foldingHouses.ft30.render, alt: "30ft display unit" },
  { src: foldingHouses.ft40.render, alt: "40ft display unit" },
] as const;

export const aboutFactoryGallery = [
  { src: foldingHouses.ft20.render, objectPosition: "center", kind: "photo" as const },
  { src: foldingHouses.ft10.render, objectPosition: "center", kind: "photo" as const },
  { src: foldingHouses.ft30.render, objectPosition: "center", kind: "photo" as const },
  { src: foldingHouses.ft40.render, objectPosition: "center", kind: "photo" as const },
] as const;

export const commercialGallery = [
  { src: siteImages.showcase, span: "col-span-2 row-span-2", objectPosition: "center", kind: "photo" as const },
  { src: foldingHouses.ft40.render, span: "", objectPosition: "center", kind: "photo" as const },
  { src: foldingHouses.ft30.render, span: "", objectPosition: "center", kind: "photo" as const },
  { src: foldingHouses.ft20.render, span: "", objectPosition: "center", kind: "photo" as const },
  { src: foldingHouses.ft10.render, span: "", objectPosition: "center", kind: "photo" as const },
  { src: siteImages.hero, span: "", objectPosition: "75% center", kind: "photo" as const },
] as const;

export const commercialSolutionImages = [
  foldingHouses.ft40.render,
  foldingHouses.ft30.render,
  foldingHouses.ft20.render,
  foldingHouses.ft10.render,
  siteImages.showcase,
  siteImages.hero,
] as const;

export const commercialHeroImage = siteImages.showcase;
export const commercialContactImage = foldingHouses.ft40.render;
export const aboutHeroImage = siteImages.hero;
export const aboutMissionImage = foldingHouses.ft30.render;
export const aboutSectionImage = foldingHouses.ft20.render;
export const displayVillageBannerImage = siteImages.showcase;

export const teamImages = [
  foldingHouses.ft10.render,
  foldingHouses.ft20.render,
  foldingHouses.ft30.render,
  foldingHouses.ft40.render,
] as const;

export function isFloorPlanImage(src: string) {
  return (
    src === foldingHouses.ft10.floorPlan ||
    src === foldingHouses.ft20.floorPlan ||
    src === foldingHouses.ft30.floorPlan ||
    src === foldingHouses.ft40.floorPlan
  );
}
