import type { Metadata } from "next";
import DisplayVillageSection from "@/components/sections/DisplayVillageSection";

export const metadata: Metadata = {
  title: "Display Village",
  description:
    "Visit the MODULUX Display Village in Bellville, Cape Town. See our modular homes in person and speak to our expert team.",
};

export default function DisplayVillagePage() {
  return (
    <div className="bg-[#F9F7F4]">
      <div className="bg-[#1C1C1C] pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#C8A97E] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Home / Display Village
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Display Village
          </h1>
          <p className="mt-3 text-white/60 text-lg">
            See our homes in person at our Bellville, Cape Town showroom.
          </p>
        </div>
      </div>
      <DisplayVillageSection />
    </div>
  );
}

