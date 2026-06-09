"use client";

import Image from "next/image";
import Link from "next/link";
import { BedDouble, Bath, Car, Square, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { HomeDesign } from "@/lib/designs";
import Badge from "./Badge";

interface DesignCardProps {
  design: HomeDesign;
  index?: number;
}

export function DesignCard({ design, index = 0 }: DesignCardProps) {
  const cardKind = design.images.find((img) => img.src === design.cardImage)?.kind;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      <Link href={`/designs/${design.slug}`} className="group block">
        <div className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-1">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={design.cardImage}
              alt={design.name}
              fill
              className={`transition-transform duration-500 group-hover:scale-105 ${
                cardKind === "floorplan" ? "object-contain bg-[#F9F7F4] p-2" : "object-cover"
              }`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-[#1C1C1C]/0 group-hover:bg-[#1C1C1C]/40 transition-colors duration-300 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#C8A97E] text-[#1C1C1C] font-semibold text-sm px-6 py-3 rounded-full flex items-center gap-2">
                View Design <ArrowRight size={14} />
              </span>
            </div>
            {/* Badge */}
            <div className="absolute top-3 left-3">
              <Badge category={design.category} />
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="text-xl font-bold text-[#1C1C1C] mb-1 group-hover:text-[#C8A97E] transition-colors duration-200">
              {design.name}
            </h3>
            <p className="text-sm text-[#7A7A7A] mb-4 line-clamp-1">{design.tagline}</p>

            {/* Specs */}
            <div className="flex items-center gap-4 text-sm text-[#2D2D2D] mb-4">
              <span className="flex items-center gap-1.5">
                <BedDouble size={15} className="text-[#C8A97E]" />
                {design.bedrooms} Bed
              </span>
              <span className="flex items-center gap-1.5">
                <Bath size={15} className="text-[#C8A97E]" />
                {design.bathrooms} Bath
              </span>
              {design.garages > 0 && (
                <span className="flex items-center gap-1.5">
                  <Car size={15} className="text-[#C8A97E]" />
                  {design.garages} Garage
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <Square size={15} className="text-[#C8A97E]" />
                {design.area}m²
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between pt-4 border-t border-[#E5E0D8]">
              <span className="font-bold text-[#1C1C1C] text-lg">{design.price}</span>
              <ArrowRight size={16} className="text-[#C8A97E] group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default DesignCard;

