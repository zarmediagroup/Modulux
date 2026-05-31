import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import FeaturedDesignsSection from "@/components/sections/FeaturedDesignsSection";

const SubBrandsSection = dynamic(() => import("@/components/sections/SubBrandsSection"));
const AboutSection = dynamic(() => import("@/components/sections/AboutSection"));
const ProcessSection = dynamic(() => import("@/components/sections/ProcessSection"));
const GallerySection = dynamic(() => import("@/components/sections/GallerySection"));
const DisplayVillageSection = dynamic(() => import("@/components/sections/DisplayVillageSection"));
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"));
const ContactFormSection = dynamic(() => import("@/components/sections/ContactFormSection"));

export const metadata: Metadata = {
  title: "Modular Homes Cape Town | MODULUX — The Modern Way of Housing",
  description:
    "MODULUX builds precision-engineered modular homes in Cape Town, South Africa. Browse Standard, Premium, and Granny Flat designs from R620k. NHBRC registered.",
  keywords: [
    "modular homes South Africa",
    "modular homes Cape Town",
    "prefab homes South Africa",
    "granny flat Cape Town",
    "NHBRC modular homes",
  ],
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <SubBrandsSection />
      <FeaturedDesignsSection />
      <AboutSection />
      <ProcessSection />
      <GallerySection />
      <DisplayVillageSection />
      <TestimonialsSection />
      <ContactFormSection />
    </>
  );
}
