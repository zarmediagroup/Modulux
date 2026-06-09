"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";
import { aboutSectionImage } from "@/lib/images";

const checkpoints = [
  "Factory-built precision engineering",
  "Delivered fully finished — ready to move in",
  "NHBRC registered & certified",
  "15-year structural warranty",
];

export default function AboutSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel>WHO WE ARE</SectionLabel>
            <SectionHeading className="mb-6">
              Built Different.{" "}
              <span className="text-[#C8A97E]">Built to Last.</span>
            </SectionHeading>

            <div className="space-y-4 text-[#7A7A7A] leading-relaxed">
              <p>
                MODULUX was founded on a simple belief: that great homes shouldn't take years to build or cost a fortune to afford. We manufacture precision-engineered modular homes in our Cape Town factory, using the latest technology and the finest materials.
              </p>
              <p>
                Every MODULUX home is built under controlled factory conditions — away from weather delays, material shortages, and on-site variables. The result is a consistently higher quality finish than traditional construction, delivered in a fraction of the time.
              </p>
              <p>
                Once complete, your home is transported and installed on your stand, connected to services, and ready to move into — often within 90 days of order confirmation. That's the MODULUX difference.
              </p>
            </div>

            {/* Checklist */}
            <ul className="mt-8 space-y-3">
              {checkpoints.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3 text-[#2D2D2D] font-medium"
                >
                  <span className="w-6 h-6 rounded-full bg-[#4A6741]/15 flex items-center justify-center shrink-0">
                    <Check size={12} className="text-[#4A6741]" />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>

            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[#1C1C1C] hover:text-[#C8A97E] transition-colors group"
            >
              Our Story
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <Image
                src={aboutSectionImage}
                alt="MODULUX modular home"
                fill
                className="object-cover object-[75%_center]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-[#E5E0D8]"
            >
              <p className="text-4xl font-extrabold text-[#1C1C1C]">500+</p>
              <p className="text-sm text-[#7A7A7A] mt-1">Happy Families</p>
              <p className="text-xs text-[#C8A97E] font-medium mt-0.5">Across South Africa</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

