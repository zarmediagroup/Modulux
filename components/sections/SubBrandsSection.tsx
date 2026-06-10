"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";
import { designs } from "@/lib/designs";
import { foldingHouses } from "@/lib/images";

const brands = [
  {
    title: "10ft Double-Wing",
    description:
      "Compact 1-bed folding home — ideal for granny flats, rental units, or standalone compact living.",
    price: designs.find((d) => d.category === "10ft")?.price ?? "R35,000",
    href: "/designs/10ft-double-wing-folding-home",
    image: foldingHouses.ft10.render,
    accent: "#6EBD8A",
    tag: "10ft",
  },
  {
    title: "20ft Double-Wing",
    description:
      "Two-bedroom folding home with open-plan lounge and kitchen — perfect for small families.",
    price: designs.find((d) => d.category === "20ft")?.price ?? "R55,000",
    href: "/designs/20ft-double-wing-folding-home",
    image: foldingHouses.ft20.render,
    accent: "#9CA3AF",
    tag: "20ft",
  },
  {
    title: "30ft Double-Wing",
    description:
      "Three-bedroom layout with 57m² of usable space — a full-family folding home solution.",
    price: designs.find((d) => d.category === "30ft")?.price ?? "R80,000",
    href: "/designs/30ft-double-wing-folding-home",
    image: foldingHouses.ft30.render,
    accent: "#C8A97E",
    tag: "30ft",
  },
  {
    title: "40ft Double-Wing",
    description:
      "Our largest folding home at 75m² — maximum space with the same fast deploy-and-use design.",
    price: designs.find((d) => d.category === "40ft")?.price ?? "R90,000",
    href: "/designs/40ft-double-wing-folding-home",
    image: foldingHouses.ft40.render,
    accent: "#1C1C1C",
    tag: "40ft",
  },
];

export default function SubBrandsSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <SectionLabel className="flex justify-center">FOLDING HOME RANGE</SectionLabel>
          <SectionHeading centered>Choose Your Size</SectionHeading>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={brand.href} className="group block h-full">
                <div className="relative rounded-2xl overflow-hidden h-full min-h-[380px] shadow-[0_4px_30px_rgba(0,0,0,0.12)]">
                  <Image
                    src={brand.image}
                    alt={brand.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <span
                      className="text-xs font-semibold tracking-[0.2em] uppercase mb-2"
                      style={{ color: brand.accent }}
                    >
                      {brand.tag}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{brand.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-3 line-clamp-3">
                      {brand.description}
                    </p>
                    <p className="text-white font-semibold text-sm mb-3">{brand.price}</p>
                    <span
                      className="inline-flex items-center gap-2 text-sm font-semibold"
                      style={{ color: brand.accent }}
                    >
                      View Design <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
