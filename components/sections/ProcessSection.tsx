"use client";

import { motion } from "framer-motion";
import { Search, Pencil, Factory, Truck } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Choose Your Design",
    description:
      "Browse our 10ft, 20ft, 30ft, and 40ft double-wing folding homes. Choose the size and layout that fits your stand and budget.",
  },
  {
    number: "02",
    icon: Pencil,
    title: "Customise",
    description:
      "Work with our design team to personalise your home — finishes, colours, fixtures, and optional extras. Make it truly yours before we break ground.",
  },
  {
    number: "03",
    icon: Factory,
    title: "We Build",
    description:
      "Your home is precision-engineered in our Cape Town factory under controlled conditions. No weather delays, no on-site surprises. Just consistent quality.",
  },
  {
    number: "04",
    icon: Truck,
    title: "We Deliver",
    description:
      "Your completed home is transported to your stand and installed. Connect to services and move in. From order to keys, as fast as 90 days.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-[#1C1C1C] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel light>HOW IT WORKS</SectionLabel>
          <SectionHeading light centered>
            From Dream to Doorstep
          </SectionHeading>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-white/10 z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              {/* Step number + icon */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full border border-white/20 bg-white/5 flex items-center justify-center">
                  <step.icon size={28} className="text-[#C8A97E]" />
                </div>
                <span className="absolute -top-2 -right-2 bg-[#C8A97E] text-[#1C1C1C] text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                  {i + 1}
                </span>
              </div>

              <p className="text-xs font-semibold tracking-[0.15em] text-[#C8A97E] uppercase mb-2">
                Step {step.number}
              </p>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

