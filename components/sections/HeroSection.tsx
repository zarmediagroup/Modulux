"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button, ButtonOutlineWhite } from "@/components/ui/Button";
import { siteImages } from "@/lib/images";

const outlineWhiteLinkClass =
  "inline-flex items-center justify-center gap-2 font-medium tracking-wide rounded-full transition-all duration-200 ease-out hover:scale-[1.02] active:scale-[0.98] cursor-pointer select-none bg-transparent text-white border border-white hover:bg-white hover:text-[#1C1C1C] px-8 py-4 text-base";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src={siteImages.hero}
          alt="MODULUX modular home exterior"
          fill
          priority
          className="object-cover object-[75%_center]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/20" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        {/* Mobile */}
        <div className="md:hidden">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] mb-5"
          >
            Modern Modular Homes
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-lg font-medium text-white mb-4"
          >
            Starting from just <span className="font-extrabold">R39,000</span>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-base text-white/75 mb-10 leading-relaxed max-w-sm mx-auto"
          >
            Built for comfort. Designed to last. Delivered nationwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col items-center justify-center gap-4"
          >
            <Link href="/designs">
              <Button variant="primary" size="lg">
                Explore Designs
              </Button>
            </Link>
            <Link href="#get-in-touch" className={outlineWhiteLinkClass}>
              Get in Touch
            </Link>
          </motion.div>
        </div>

        {/* Desktop & tablet */}
        <div className="hidden md:block">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C8A97E] mb-6"
          >
            Cape Town, South Africa
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] mb-6"
          >
            The Modern Way
            <br />
            <span className="text-[#C8A97E]">of Housing</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-white/75 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Beautifully engineered modular homes, delivered to your site and ready to live in.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/designs">
              <Button variant="primary" size="lg">
                Explore Designs
              </Button>
            </Link>
            <ButtonOutlineWhite size="lg">Watch Our Story</ButtonOutlineWhite>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
