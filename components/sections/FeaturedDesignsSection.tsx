"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { designSeries, designs } from "@/lib/designs";
import DesignCard from "@/components/ui/DesignCard";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";

type SeriesFilter = "All" | (typeof designSeries)[number];

const seriesTabs: SeriesFilter[] = ["All", ...designSeries];

export default function FeaturedDesignsSection() {
  const [seriesFilter, setSeriesFilter] = useState<SeriesFilter>("All");

  const filtered = designs.filter((d) => {
    return seriesFilter === "All" || d.series === seriesFilter;
  });

  return (
    <section className="bg-[#F9F7F4] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <SectionLabel>OUR DESIGNS</SectionLabel>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <SectionHeading sub="Folding homes, container units, and space capsules — from R25,000.">
              Homes Built for Real Life
            </SectionHeading>
            <Link
              href="/designs"
              className="flex items-center gap-2 text-sm font-semibold text-[#C8A97E] hover:text-[#b89468] transition-colors whitespace-nowrap group"
            >
              View All Designs
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {seriesTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSeriesFilter(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                seriesFilter === tab
                  ? "bg-[#1C1C1C] text-white"
                  : "bg-white text-[#7A7A7A] border border-[#E5E0D8] hover:border-[#1C1C1C]"
              }`}
            >
              {tab === "All" ? "All Series" : tab}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key={seriesFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.slice(0, 6).map((design, i) => (
                <DesignCard key={design.slug} design={design} index={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 text-[#7A7A7A]"
            >
              <p className="text-lg">No designs match your filters.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
