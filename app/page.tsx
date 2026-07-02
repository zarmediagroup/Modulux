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
    "MODULUX builds folding homes, container units, and space capsules in Cape Town, South Africa. Three product lines from R25,000. NHBRC registered.",
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
      <div className="hidden md:block">
        <IntroSection />
      </div>
      <div className="hidden md:block">
        <SubBrandsSection />
      </div>
      <div className="hidden md:block">
        <FeaturedDesignsSection />
      </div>
      <div className="hidden md:block">
        <AboutSection />
      </div>
      <ProcessSection />
      <GallerySection />
      <DisplayVillageSection />
      <TestimonialsSection />
      <ContactFormSection />
    </>
  );
}
