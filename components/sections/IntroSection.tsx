"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "500+ Homes Built" },
  { label: "15 Year Structural Warranty" },
  { label: "Delivered Nationwide" },
];

export default function IntroSection() {
  return (
    <section className="bg-[#F9F7F4] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[#1C1C1C] rounded-xl flex items-center justify-center">
              <span className="text-white font-extrabold text-xs tracking-widest">MX</span>
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-[#1C1C1C]">MODULUX</span>
          </div>

          <p className="text-xl md:text-2xl text-[#2D2D2D] leading-relaxed font-light max-w-3xl mx-auto">
            We believe everyone deserves a beautifully designed home. MODULUX builds
            precision-engineered modular homes in our Cape Town factory and delivers them
            fully finished, anywhere in South Africa.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap"
        >
          {stats.map((stat, i) => (
            <motion.span
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
              className="bg-white border border-[#E5E0D8] text-[#1C1C1C] text-sm font-semibold px-6 py-3 rounded-full shadow-sm"
            >
              {stat.label}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 h-px bg-[#E5E0D8] origin-center"
        />
      </div>
    </section>
  );
}

