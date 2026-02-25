"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ZoomIn } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&q=80",
    alt: "Modern luxury home exterior",
    span: "row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&h=1000&fit=crop&q=80",
    alt: "Bright open-plan living area",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop&q=80",
    alt: "Master bedroom interior",
    span: "row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop&q=80",
    alt: "Covered outdoor patio",
    span: "row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop&q=80",
    alt: "Contemporary home facade",
    span: "row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=1000&fit=crop&q=80",
    alt: "Modern kitchen design",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop&q=80",
    alt: "Luxury bathroom",
    span: "row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop&q=80",
    alt: "White contemporary home",
    span: "row-span-1",
  },
];

export default function GallerySection() {
  return (
    <section className="bg-[#F9F7F4] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <SectionLabel>OUR WORK</SectionLabel>
            <SectionHeading>Homes We&apos;re Proud Of</SectionHeading>
          </div>
          <Link
            href="/designs"
            className="flex items-center gap-2 text-sm font-semibold text-[#C8A97E] hover:text-[#b89468] transition-colors group whitespace-nowrap"
          >
            View Full Gallery
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`group relative rounded-xl overflow-hidden ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn
                  size={24}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
