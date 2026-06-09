/** Local images under /public/images — add files here and reference via this module. */
export const siteImages = {
  hero: "/images/hero.png",
  maintenance: "/images/hero.png",
} as const;

export const galleryImages = [
  { src: siteImages.hero, alt: "MODULUX modular home exterior", span: "row-span-1", objectPosition: "75% center" },
  { src: siteImages.hero, alt: "MODULUX modular home interior", span: "row-span-2", objectPosition: "60% 35%" },
  { src: siteImages.hero, alt: "MODULUX modular home at sunrise", span: "row-span-1", objectPosition: "50% 40%" },
  { src: siteImages.hero, alt: "MODULUX modular home landscape", span: "row-span-1", objectPosition: "40% center" },
  { src: siteImages.hero, alt: "MODULUX modular home facade", span: "row-span-1", objectPosition: "70% center" },
  { src: siteImages.hero, alt: "MODULUX modular home living space", span: "row-span-2", objectPosition: "55% 30%" },
  { src: siteImages.hero, alt: "MODULUX modular home detail", span: "row-span-1", objectPosition: "65% 50%" },
  { src: siteImages.hero, alt: "MODULUX modular home on site", span: "row-span-1", objectPosition: "80% 60%" },
] as const;

export const productLineImages = {
  standard: siteImages.hero,
  premium: siteImages.hero,
  grannyFlat: siteImages.hero,
} as const;

export const designImage = (alt: string) => ({ src: siteImages.hero, alt });

export const floorPlanImage = siteImages.hero;

export const aboutFactoryGallery = [
  { src: siteImages.hero, objectPosition: "75% center" },
  { src: siteImages.hero, objectPosition: "60% 40%" },
  { src: siteImages.hero, objectPosition: "50% center" },
  { src: siteImages.hero, objectPosition: "70% 50%" },
] as const;

export const commercialGallery = [
  { src: siteImages.hero, span: "col-span-2 row-span-2", objectPosition: "75% center" },
  { src: siteImages.hero, span: "", objectPosition: "60% 40%" },
  { src: siteImages.hero, span: "", objectPosition: "50% center" },
  { src: siteImages.hero, span: "", objectPosition: "70% 50%" },
  { src: siteImages.hero, span: "", objectPosition: "40% center" },
] as const;
