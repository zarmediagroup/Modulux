"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { designs } from "@/lib/designs";
import DesignCard from "@/components/ui/DesignCard";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";

type BedFilter = "All" | "1" | "2" | "3" | "4+";
type CatFilter = "All" | "Standard" | "Premium" | "Granny Flat";

const bedTabs: BedFilter[] = ["All", "1", "2", "3", "4+"];
const catTabs: CatFilter[] = ["All", "Standard", "Premium", "Granny Flat"];

export default function FeaturedDesignsSection() {
  const [bedFilter, setBedFilter] = useState<BedFilter>("All");
  const [catFilter, setCatFilter] = useState<CatFilter>("All");

  const filtered = designs.filter((d) => {
    const bedMatch =
      bedFilter === "All" ||
      (bedFilter === "4+" ? d.bedrooms >= 4 : d.bedrooms === parseInt(bedFilter));
    const catMatch = catFilter === "All" || d.category === catFilter;
    return bedMatch && catMatch;
  });

  return (
    <section className="bg-[#F9F7F4] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <SectionLabel>OUR DESIGNS</SectionLabel>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <SectionHeading sub="Browse our full range of beautifully engineered modular homes.">
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

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 mb-10"
        >
          {/* Bedroom filters */}
          <div className="flex flex-wrap gap-2">
            {bedTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setBedFilter(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  bedFilter === tab
                    ? "bg-[#1C1C1C] text-white"
                    : "bg-white text-[#7A7A7A] border border-[#E5E0D8] hover:border-[#1C1C1C]"
                }`}
              >
                {tab === "All" ? "All Bedrooms" : `${tab} Bed`}
              </button>
            ))}
          </div>

          <div className="sm:ml-4 flex flex-wrap gap-2">
            {catTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setCatFilter(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  catFilter === tab
                    ? "bg-[#C8A97E] text-[#1C1C1C]"
                    : "bg-white text-[#7A7A7A] border border-[#E5E0D8] hover:border-[#C8A97E]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key={`${bedFilter}-${catFilter}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((design, i) => (
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
              <button
                onClick={() => { setBedFilter("All"); setCatFilter("All"); }}
                className="mt-4 text-sm text-[#C8A97E] underline"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

