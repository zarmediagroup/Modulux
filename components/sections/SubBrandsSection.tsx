"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";
import { getStartingPrice, designs } from "@/lib/designs";
import { productLineImages } from "@/lib/images";

const startingPrice = getStartingPrice();

const brands = [
  {
    title: "Double-Wing Folding",
    description:
      "Expandable 10ft to 40ft folding homes — bedroom, lounge, kitchen, and bathroom. Deploys in minutes.",
    price: `From ${designs.find((d) => d.slug === "10ft-double-wing-folding-home")?.price ?? "R35,000"}`,
    href: "/designs?series=Folding",
    image: productLineImages.folding,
    accent: "#C8A97E",
    tag: "Folding",
  },
  {
    title: "Container Series",
    description:
      "Flat-pack, X-type, and Z-type container houses — fast deployment, thermal insulation, all-weather protection.",
    price: `From ${designs.find((d) => d.slug === "flat-pack-container-house")?.price ?? "R25,000"}`,
    href: "/designs?series=Container",
    image: productLineImages.container,
    accent: "#9CA3AF",
    tag: "Container",
  },
  {
    title: "Space Capsule",
    description:
      "Iconic capsule accommodation from x3 to x7 — integrated kitchen and bathroom for hospitality and boutique stays.",
    price: `From ${designs.find((d) => d.slug === "space-capsule-series-d3")?.price ?? "R60,000"}`,
    href: "/designs?series=Space+Capsule",
    image: productLineImages.spaceCapsule,
    accent: "#1C1C1C",
    tag: "Space Capsule",
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
          <SectionLabel className="flex justify-center">PRODUCT LINES</SectionLabel>
          <SectionHeading centered>Three Ways to Build with MODULUX</SectionHeading>
          <p className="mt-3 text-[#7A7A7A]">Starting from R{startingPrice.toLocaleString("en-ZA")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <Link href={brand.href} className="group block h-full">
                <div className="relative rounded-2xl overflow-hidden h-full min-h-[420px] shadow-[0_4px_30px_rgba(0,0,0,0.12)]">
                  <Image
                    src={brand.image}
                    alt={brand.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <span
                      className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
                      style={{ color: brand.accent }}
                    >
                      {brand.tag}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3">{brand.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3">
                      {brand.description}
                    </p>
                    <p className="text-white/60 text-sm mb-4">{brand.price}</p>
                    <span
                      className="inline-flex items-center gap-2 text-sm font-semibold"
                      style={{ color: brand.accent }}
                    >
                      Explore Range <ArrowRight size={14} />
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
