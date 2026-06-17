/** Encode public folder paths (handles spaces and special characters in filenames). */
export function publicImage(path: string): string {
  return "/" + path.split("/").filter(Boolean).map(encodeURIComponent).join("/");
}

const ft10 = "10ft Double-wing folding house";
const ft20 = "20ft Double-wing folding house";
const ft30 = "30ft Double-wing folding house";
const ft40 = "40ft Double-wing folding house";

const r2 = "Round 2";
const container = `${r2}/Container series`;
const capsule = `${r2}/Capesule series`;

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

export const containerHouses = {
  flatPack: {
    render: publicImage(`${container}/Flat pack container/Flat pack container house.png`),
    structure: publicImage(`${container}/Flat pack container/Flat pack container house - Structure.png`),
    floorPlan: publicImage(`${container}/Flat pack container/Flat pack container house - Floor plan.png`),
  },
  xType: {
    render: publicImage(`${container}/x pack container 2/X type house.png`),
    install: publicImage(`${container}/x pack container 2/Xtype installation process.png`),
    floorPlan: publicImage(`${container}/x pack container 2/X-type house - floorplan.png`),
  },
  zType: {
    render: publicImage(`${container}/z pack container/Z-type container house.png`),
    install: publicImage(`${container}/z pack container/Z type installation.png`),
    floorPlan: publicImage(`${container}/z pack container/Z-type container house - Floor plan.png`),
  },
} as const;

export const spaceCapsules = {
  x3: {
    render: publicImage(`${capsule}/Capsule series 3x/x3/Capsule series x3.png`),
    layout: publicImage(`${capsule}/Capsule series 3x/x3/Capsule series x3 Layout.png`),
    construction: publicImage(`${capsule}/Capsule series 3x/x3/Capsule series x3 - construction.png`),
  },
  x3_2: {
    render: publicImage(`${capsule}/Capsule series 3x/x3-2/Capsule series x3-2.png`),
    layout: publicImage(`${capsule}/Capsule series 3x/x3-2/Capsule series x3-2 Layout.png`),
    construction: publicImage(`${capsule}/Capsule series 3x/x3-2/Capsule series x3-2 - construction.png`),
  },
  x7: {
    render: publicImage(`${capsule}/Capsule series 7x/Capsule series x7/Capsule series Image x7.png`),
    alt: publicImage(`${capsule}/Capsule series 7x/Capsule series x7/Capsule series 7x.png`),
    construction: publicImage(`${capsule}/Capsule series 7x/Capsule series x7/Capsule series  7x - construction.png`),
  },
  x7_2: {
    render: publicImage(`${capsule}/Capsule series 7x/Capsule series x7-2/Capsule series 7x-2 image.png`),
    layout: publicImage(`${capsule}/Capsule series 7x/Capsule series x7-2/Capsule series 7x-2 Layout.png`),
  },
  x7_gen2: {
    render: publicImage(`${capsule}/Capsule series 7x/Gen 2/Capsule series  7x - GEN2.png`),
    layout: publicImage(`${capsule}/Capsule series 7x/Gen 2/Capsule series  7x - GEN2 layout.png`),
  },
  d3: {
    render: publicImage(`${capsule}/Capsule series D3/Capsule D3 image.png`),
    layout: publicImage(`${capsule}/Capsule series D3/Capsule - D3 layout.png`),
    alt: publicImage(`${capsule}/Capsule series D3/Capsule - D3.png`),
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
  folding: foldingHouses.ft20.render,
  container: containerHouses.flatPack.render,
  spaceCapsule: spaceCapsules.x7.render,
} as const;

type DesignMedia = {
  cardImage: string;
  images: ImageEntry[];
  floorPlan: string;
};

const designMedia: Record<string, DesignMedia> = {
  "10ft-double-wing-folding-home": {
    cardImage: foldingHouses.ft10.render,
    images: [
      { src: foldingHouses.ft10.render, alt: "10ft Double-Wing Folding Home exterior", kind: "photo" },
      { src: siteImages.showcase, alt: "10ft folding home on site", kind: "photo" },
      { src: foldingHouses.ft10.floorPlan, alt: "10ft Double-Wing floor plan", kind: "floorplan" },
    ],
    floorPlan: foldingHouses.ft10.floorPlan,
  },
  "20ft-double-wing-folding-home": {
    cardImage: foldingHouses.ft20.render,
    images: [
      { src: foldingHouses.ft20.render, alt: "20ft Double-Wing Folding Home exterior", kind: "photo" },
      { src: siteImages.hero, alt: "20ft folding home lifestyle render", kind: "photo" },
      { src: foldingHouses.ft20.floorPlan, alt: "20ft Double-Wing floor plan", kind: "floorplan" },
    ],
    floorPlan: foldingHouses.ft20.floorPlan,
  },
  "30ft-double-wing-folding-home": {
    cardImage: foldingHouses.ft30.render,
    images: [
      { src: foldingHouses.ft30.render, alt: "30ft Double-Wing Folding Home exterior", kind: "photo" },
      { src: siteImages.showcase, alt: "30ft folding home on site", kind: "photo" },
      { src: foldingHouses.ft30.floorPlan, alt: "30ft Double-Wing floor plan", kind: "floorplan" },
    ],
    floorPlan: foldingHouses.ft30.floorPlan,
  },
  "40ft-double-wing-folding-home": {
    cardImage: foldingHouses.ft40.render,
    images: [
      { src: foldingHouses.ft40.render, alt: "40ft Double-Wing Folding Home exterior", kind: "photo" },
      { src: siteImages.showcase, alt: "40ft folding home on site", kind: "photo" },
      { src: foldingHouses.ft40.floorPlan, alt: "40ft Double-Wing floor plan", kind: "floorplan" },
    ],
    floorPlan: foldingHouses.ft40.floorPlan,
  },
  "flat-pack-container-house": {
    cardImage: containerHouses.flatPack.render,
    images: [
      { src: containerHouses.flatPack.render, alt: "Flat-pack container house exterior", kind: "photo" },
      { src: containerHouses.flatPack.structure, alt: "Flat-pack container structure", kind: "photo" },
      { src: containerHouses.flatPack.floorPlan, alt: "Flat-pack container floor plan", kind: "floorplan" },
    ],
    floorPlan: containerHouses.flatPack.floorPlan,
  },
  "x-type-container-house": {
    cardImage: containerHouses.xType.render,
    images: [
      { src: containerHouses.xType.render, alt: "X-type container house exterior", kind: "photo" },
      { src: containerHouses.xType.install, alt: "X-type container installation", kind: "photo" },
      { src: containerHouses.xType.floorPlan, alt: "X-type container floor plan", kind: "floorplan" },
    ],
    floorPlan: containerHouses.xType.floorPlan,
  },
  "z-type-container-house": {
    cardImage: containerHouses.zType.render,
    images: [
      { src: containerHouses.zType.render, alt: "Z-type container house exterior", kind: "photo" },
      { src: containerHouses.zType.install, alt: "Z-type container installation", kind: "photo" },
      { src: containerHouses.zType.floorPlan, alt: "Z-type container floor plan", kind: "floorplan" },
    ],
    floorPlan: containerHouses.zType.floorPlan,
  },
  "space-capsule-series-x3": {
    cardImage: spaceCapsules.x3.render,
    images: [
      { src: spaceCapsules.x3.render, alt: "Space Capsule Series x3 exterior", kind: "photo" },
      { src: spaceCapsules.x3.construction, alt: "Space Capsule x3 construction", kind: "photo" },
      { src: spaceCapsules.x3.layout, alt: "Space Capsule x3 layout", kind: "floorplan" },
    ],
    floorPlan: spaceCapsules.x3.layout,
  },
  "space-capsule-series-x3-2": {
    cardImage: spaceCapsules.x3_2.render,
    images: [
      { src: spaceCapsules.x3_2.render, alt: "Space Capsule Series x3-2 exterior", kind: "photo" },
      { src: spaceCapsules.x3_2.construction, alt: "Space Capsule x3-2 construction", kind: "photo" },
      { src: spaceCapsules.x3_2.layout, alt: "Space Capsule x3-2 layout", kind: "floorplan" },
    ],
    floorPlan: spaceCapsules.x3_2.layout,
  },
  "space-capsule-series-x7": {
    cardImage: spaceCapsules.x7.render,
    images: [
      { src: spaceCapsules.x7.render, alt: "Space Capsule Series x7 exterior", kind: "photo" },
      { src: spaceCapsules.x7.alt, alt: "Space Capsule x7 alternate view", kind: "photo" },
      { src: spaceCapsules.x7.construction, alt: "Space Capsule x7 construction", kind: "photo" },
    ],
    floorPlan: spaceCapsules.x7.render,
  },
  "space-capsule-series-x7-2": {
    cardImage: spaceCapsules.x7_2.render,
    images: [
      { src: spaceCapsules.x7_2.render, alt: "Space Capsule Series x7-2 exterior", kind: "photo" },
      { src: spaceCapsules.x7_2.layout, alt: "Space Capsule x7-2 layout", kind: "floorplan" },
    ],
    floorPlan: spaceCapsules.x7_2.layout,
  },
  "space-capsule-series-x7-2gen": {
    cardImage: spaceCapsules.x7_gen2.render,
    images: [
      { src: spaceCapsules.x7_gen2.render, alt: "Space Capsule Series x7 2nd Gen exterior", kind: "photo" },
      { src: spaceCapsules.x7_gen2.layout, alt: "Space Capsule x7 2nd Gen layout", kind: "floorplan" },
    ],
    floorPlan: spaceCapsules.x7_gen2.layout,
  },
  "space-capsule-series-d3": {
    cardImage: spaceCapsules.d3.render,
    images: [
      { src: spaceCapsules.d3.render, alt: "Space Capsule Series D3 exterior", kind: "photo" },
      { src: spaceCapsules.d3.alt, alt: "Space Capsule D3 alternate view", kind: "photo" },
      { src: spaceCapsules.d3.layout, alt: "Space Capsule D3 layout", kind: "floorplan" },
    ],
    floorPlan: spaceCapsules.d3.layout,
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

const floorPlanSrcs = new Set(
  Object.values(designMedia).map((m) => m.floorPlan).concat(
    Object.values(designMedia).flatMap((m) => m.images.filter((i) => i.kind === "floorplan").map((i) => i.src)),
  ),
);

export function isFloorPlanImage(src: string) {
  return floorPlanSrcs.has(src);
}

export const galleryImages = [
  { src: siteImages.hero, alt: "MODULUX modular home hero", span: "row-span-2", objectPosition: "75% center", kind: "photo" as const },
  { src: foldingHouses.ft40.render, alt: "40ft double-wing folding house", span: "row-span-1", objectPosition: "center", kind: "photo" as const },
  { src: containerHouses.flatPack.render, alt: "Flat-pack container house", span: "row-span-1", objectPosition: "center", kind: "photo" as const },
  { src: spaceCapsules.x7.render, alt: "Space Capsule Series x7", span: "row-span-2", objectPosition: "center", kind: "photo" as const },
  { src: foldingHouses.ft20.render, alt: "20ft double-wing folding house", span: "row-span-1", objectPosition: "center", kind: "photo" as const },
  { src: spaceCapsules.d3.render, alt: "Space Capsule Series D3", span: "row-span-1", objectPosition: "center", kind: "photo" as const },
] as const;

export const displayVillageImages = [
  { src: foldingHouses.ft10.render, alt: "10ft display unit" },
  { src: containerHouses.xType.render, alt: "Container display unit" },
  { src: spaceCapsules.x3.render, alt: "Space Capsule x3" },
  { src: foldingHouses.ft40.render, alt: "40ft display unit" },
] as const;

export const aboutFactoryGallery = [
  { src: foldingHouses.ft20.render, objectPosition: "center", kind: "photo" as const },
  { src: containerHouses.zType.render, objectPosition: "center", kind: "photo" as const },
  { src: spaceCapsules.x7_gen2.render, objectPosition: "center", kind: "photo" as const },
  { src: foldingHouses.ft40.render, objectPosition: "center", kind: "photo" as const },
] as const;

export const commercialGallery = [
  { src: siteImages.showcase, span: "col-span-2 row-span-2", objectPosition: "center", kind: "photo" as const },
  { src: spaceCapsules.x7.render, span: "", objectPosition: "center", kind: "photo" as const },
  { src: containerHouses.flatPack.render, span: "", objectPosition: "center", kind: "photo" as const },
  { src: foldingHouses.ft30.render, span: "", objectPosition: "center", kind: "photo" as const },
  { src: foldingHouses.ft20.render, span: "", objectPosition: "center", kind: "photo" as const },
  { src: spaceCapsules.d3.render, span: "", objectPosition: "center", kind: "photo" as const },
] as const;

export const commercialSolutionImages = [
  spaceCapsules.x7.render,
  containerHouses.flatPack.render,
  foldingHouses.ft40.render,
  foldingHouses.ft30.render,
  containerHouses.xType.render,
  spaceCapsules.x3.render,
] as const;

export const commercialHeroImage = siteImages.showcase;
export const commercialContactImage = spaceCapsules.x7.render;
export const aboutHeroImage = siteImages.hero;
export const aboutMissionImage = spaceCapsules.x7_gen2.render;
export const aboutSectionImage = containerHouses.flatPack.render;
export const displayVillageBannerImage = siteImages.showcase;

export const teamImages = [
  foldingHouses.ft10.render,
  containerHouses.xType.render,
  spaceCapsules.x3.render,
  spaceCapsules.x7.render,
] as const;
