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
    stages: publicImage(`${ft10}/1 bed and lounge - development stages.png`),
    floorPlan: publicImage(`${ft10}/1 Bed and loung - Floorplan.png`),
  },
  ft20: {
    render: publicImage(`${ft20}/ChatGPT Image Jun 8, 2026, 10_03_32 PM.png`),
    structure: publicImage(`${ft20}/20ft Double-wing structure details.png`),
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

export const productLineImages = {
  grannyFlat: foldingHouses.ft10.render,
  standard: foldingHouses.ft20.render,
  premium: foldingHouses.ft40.render,
} as const;

type ImageEntry = { src: string; alt: string };

const designMedia: Record<
  string,
  { images: ImageEntry[]; floorPlan: string }
> = {
  "the-constantia": {
    images: [
      { src: foldingHouses.ft10.render, alt: "The Constantia — 10ft double-wing exterior" },
      { src: foldingHouses.ft10.stages, alt: "The Constantia — build stages" },
      { src: foldingHouses.ft10.floorPlan, alt: "The Constantia — floor plan" },
    ],
    floorPlan: foldingHouses.ft10.floorPlan,
  },
  "the-paarl": {
    images: [
      { src: foldingHouses.ft10.render, alt: "The Paarl — 10ft double-wing exterior" },
      { src: foldingHouses.ft10.stages, alt: "The Paarl — development stages" },
      { src: foldingHouses.ft10.floorPlan, alt: "The Paarl — floor plan" },
    ],
    floorPlan: foldingHouses.ft10.floorPlan,
  },
  "the-karoo": {
    images: [
      { src: foldingHouses.ft20.render, alt: "The Karoo — 20ft double-wing exterior" },
      { src: foldingHouses.ft20.structure, alt: "The Karoo — structure details" },
      { src: foldingHouses.ft20.floorPlan, alt: "The Karoo — floor plan" },
    ],
    floorPlan: foldingHouses.ft20.floorPlan,
  },
  "the-swartland": {
    images: [
      { src: foldingHouses.ft20.render, alt: "The Swartland — 20ft double-wing exterior" },
      { src: foldingHouses.ft20.structure, alt: "The Swartland — structure details" },
      { src: foldingHouses.ft20.floorPlan, alt: "The Swartland — floor plan" },
    ],
    floorPlan: foldingHouses.ft20.floorPlan,
  },
  "the-stellenbosch": {
    images: [
      { src: foldingHouses.ft30.render, alt: "The Stellenbosch — 30ft double-wing exterior" },
      { src: foldingHouses.ft30.floorPlan, alt: "The Stellenbosch — floor plan" },
    ],
    floorPlan: foldingHouses.ft30.floorPlan,
  },
  "the-franschhoek": {
    images: [
      { src: foldingHouses.ft30.render, alt: "The Franschhoek — 30ft double-wing exterior" },
      { src: foldingHouses.ft30.floorPlan, alt: "The Franschhoek — floor plan" },
    ],
    floorPlan: foldingHouses.ft30.floorPlan,
  },
  "the-blouberg": {
    images: [
      { src: foldingHouses.ft40.render, alt: "The Blouberg — 40ft double-wing exterior" },
      { src: foldingHouses.ft40.floorPlan, alt: "The Blouberg — floor plan" },
    ],
    floorPlan: foldingHouses.ft40.floorPlan,
  },
};

const defaultMedia = {
  images: [{ src: siteImages.hero, alt: "MODULUX modular home" }],
  floorPlan: siteImages.hero,
};

export function getDesignMedia(slug: string) {
  return designMedia[slug] ?? defaultMedia;
}

export const galleryImages = [
  { src: siteImages.hero, alt: "MODULUX modular home exterior", span: "row-span-1", objectPosition: "75% center" },
  { src: foldingHouses.ft40.render, alt: "40ft double-wing folding house", span: "row-span-2", objectPosition: "center" },
  { src: foldingHouses.ft30.render, alt: "30ft double-wing folding house", span: "row-span-1", objectPosition: "center" },
  { src: foldingHouses.ft20.render, alt: "20ft double-wing folding house", span: "row-span-1", objectPosition: "center" },
  { src: foldingHouses.ft10.render, alt: "10ft granny flat unit", span: "row-span-1", objectPosition: "center" },
  { src: foldingHouses.ft40.floorPlan, alt: "40ft modular unit floor plan", span: "row-span-2", objectPosition: "center" },
  { src: foldingHouses.ft20.structure, alt: "MODULUX structure engineering", span: "row-span-1", objectPosition: "center" },
  { src: siteImages.showcase, alt: "MODULUX folding house on site", span: "row-span-1", objectPosition: "center" },
] as const;

export const aboutFactoryGallery = [
  { src: foldingHouses.ft20.structure, objectPosition: "center" },
  { src: foldingHouses.ft10.stages, objectPosition: "center" },
  { src: foldingHouses.ft30.render, objectPosition: "center" },
  { src: foldingHouses.ft40.render, objectPosition: "center" },
] as const;

export const commercialGallery = [
  { src: foldingHouses.ft40.render, span: "col-span-2 row-span-2", objectPosition: "center" },
  { src: foldingHouses.ft30.render, span: "", objectPosition: "center" },
  { src: foldingHouses.ft20.render, span: "", objectPosition: "center" },
  { src: foldingHouses.ft40.floorPlan, span: "", objectPosition: "center" },
  { src: siteImages.showcase, span: "", objectPosition: "center" },
] as const;

export const commercialSolutionImages = [
  foldingHouses.ft40.render,
  foldingHouses.ft30.render,
  foldingHouses.ft20.render,
  foldingHouses.ft40.floorPlan,
  foldingHouses.ft20.structure,
  foldingHouses.ft10.render,
] as const;

export const aboutMissionImage = foldingHouses.ft30.render;
export const aboutSectionImage = foldingHouses.ft20.structure;
