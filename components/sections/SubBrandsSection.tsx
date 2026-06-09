"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";
import { productLineImages } from "@/lib/images";

const brands = [
  {
    title: "MODULUX Standard",
    description:
      "Quality homes that don't compromise on style. Thoughtfully designed, energy-efficient, and built to last. The perfect entry point into modular living.",
    price: "Starting from R950,000",
    href: "/designs?category=Standard",
    image: productLineImages.standard,
    accent: "#9CA3AF",
    tag: "Standard",
  },
  {
    title: "MODULUX Premium",
    description:
      "Architecturally refined homes with premium finishes, generous proportions, and an elevated aesthetic. For those who won't settle for less than exceptional.",
    price: "Starting from R1,850,000",
    href: "/designs?category=Premium",
    image: productLineImages.premium,
    accent: "#C8A97E",
    tag: "Premium",
  },
  {
    title: "MODULUX Granny Flat",
    description:
      "Compact, clever, and fully self-contained. Generate rental income, house family, or create the perfect home office — all on your existing stand.",
    price: "Starting from R620,000",
    href: "/designs?category=Granny+Flat",
    image: productLineImages.grannyFlat,
    accent: "#6EBD8A",
    tag: "Granny Flat",
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
          <SectionHeading centered>Find Your Perfect Home</SectionHeading>
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
                    className="object-cover object-[75%_center] transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <span
                      className="text-xs font-semibold tracking-[0.2em] uppercase mb-3 transition-transform duration-300 group-hover:-translate-y-1"
                      style={{ color: brand.accent }}
                    >
                      {brand.tag}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3 transition-transform duration-300 group-hover:-translate-y-1">
                      {brand.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-4 max-h-0 overflow-hidden group-hover:max-h-32 transition-all duration-500">
                      {brand.description}
                    </p>
                    <p className="text-white/60 text-sm mb-4">{brand.price}</p>
                    <span
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group-hover:gap-3"
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
