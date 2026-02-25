import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import SubBrandsSection from "@/components/sections/SubBrandsSection";
import FeaturedDesignsSection from "@/components/sections/FeaturedDesignsSection";
import AboutSection from "@/components/sections/AboutSection";
import ProcessSection from "@/components/sections/ProcessSection";
import GallerySection from "@/components/sections/GallerySection";
import DisplayVillageSection from "@/components/sections/DisplayVillageSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactFormSection from "@/components/sections/ContactFormSection";

export const metadata: Metadata = {
  title: "MODULUX — The Modern Way of Housing",
  description:
    "MODULUX builds precision-engineered modular homes in Cape Town, South Africa. Browse our Standard, Premium, and Granny Flat designs.",
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
