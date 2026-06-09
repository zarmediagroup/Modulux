import type { Metadata } from "next";
import Image from "next/image";
import DisplayVillageSection from "@/components/sections/DisplayVillageSection";
import JsonLd from "@/components/seo/JsonLd";
import { displayVillageBannerImage } from "@/lib/images";
import { pageMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getDisplayVillagePlaceSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Display Village — Bellville, Cape Town",
  description:
    "Visit the MODULUX Display Village in Bellville, Cape Town. Walk through 10ft, 20ft, 30ft, and 40ft modular home units and speak to our expert team.",
  path: "/display-village",
  keywords: [
    "MODULUX Display Village",
    "modular homes showroom Cape Town",
    "Bellville modular homes",
    "prefab homes Western Cape",
  ],
});

export default function DisplayVillagePage() {
  return (
    <>
      <JsonLd
        data={[
          getDisplayVillagePlaceSchema(),
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Display Village", path: "/display-village" },
          ]),
        ]}
      />
      <div className="bg-[#F9F7F4]">
        <div className="relative bg-[#1C1C1C] pt-32 pb-16 px-6 overflow-hidden">
          <Image
            src={displayVillageBannerImage}
            alt="MODULUX Display Village in Bellville, Cape Town"
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="relative max-w-7xl mx-auto">
            <p className="text-[#C8A97E] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Home / Display Village
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Display Village
            </h1>
            <p className="mt-3 text-white/60 text-lg max-w-2xl">
              Walk through our 10ft, 20ft, 30ft, and 40ft double-wing units at our Bellville showroom.
            </p>
          </div>
        </div>
        <DisplayVillageSection />
      </div>
    </>
  );
}
