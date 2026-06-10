import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import FeaturedDesignsSection from "@/components/sections/FeaturedDesignsSection";
import JsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { getHowToSchema } from "@/lib/schema";

const SubBrandsSection = dynamic(() => import("@/components/sections/SubBrandsSection"));
const AboutSection = dynamic(() => import("@/components/sections/AboutSection"));
const ProcessSection = dynamic(() => import("@/components/sections/ProcessSection"));
const GallerySection = dynamic(() => import("@/components/sections/GallerySection"));
const DisplayVillageSection = dynamic(() => import("@/components/sections/DisplayVillageSection"));
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"));
const ContactFormSection = dynamic(() => import("@/components/sections/ContactFormSection"));

export const metadata = pageMetadata({
  title: "Modular Homes Cape Town | MODULUX — The Modern Way of Housing",
  description:
    "MODULUX builds precision-engineered double-wing folding homes in Cape Town, South Africa. Browse 10ft, 20ft, 30ft, and 40ft designs from R35,000. NHBRC registered.",
  path: "/",
  keywords: [
    "folding homes South Africa",
    "double-wing folding house Cape Town",
    "modular homes Cape Town",
    "10ft folding home",
    "prefab homes South Africa",
    "NHBRC modular homes",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={getHowToSchema()} />
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
