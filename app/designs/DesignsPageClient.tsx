"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { designs } from "@/lib/designs";
import DesignCard from "@/components/ui/DesignCard";
import SectionLabel from "@/components/ui/SectionLabel";

type SortOption = "price-asc" | "price-desc" | "area-asc" | "newest";

export default function DesignsPageClient() {
  const [bedroomFilters, setBedroomFilters] = useState<number[]>([]);
  const [categoryFilters, setCategoryFilters] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([500000, 3000000]);
  const [areaRange, setAreaRange] = useState<[number, number]>([40, 250]);
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleBed = (bed: number) =>
    setBedroomFilters((prev) =>
      prev.includes(bed) ? prev.filter((b) => b !== bed) : [...prev, bed]
    );

  const toggleCat = (cat: string) =>
    setCategoryFilters((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );

  const filtered = useMemo(() => {
    let result = designs.filter((d) => {
      const bedMatch = bedroomFilters.length === 0 || bedroomFilters.includes(d.bedrooms);
      const catMatch = categoryFilters.length === 0 || categoryFilters.includes(d.category);
      const priceMatch = d.priceValue >= priceRange[0] && d.priceValue <= priceRange[1];
      const areaMatch = d.area >= areaRange[0] && d.area <= areaRange[1];
      return bedMatch && catMatch && priceMatch && areaMatch;
    });

    switch (sortBy) {
      case "price-asc": result = [...result].sort((a, b) => a.priceValue - b.priceValue); break;
      case "price-desc": result = [...result].sort((a, b) => b.priceValue - a.priceValue); break;
      case "area-asc": result = [...result].sort((a, b) => a.area - b.area); break;
      default: break;
    }

    return result;
  }, [bedroomFilters, categoryFilters, priceRange, areaRange, sortBy]);

  const clearFilters = () => {
    setBedroomFilters([]);
    setCategoryFilters([]);
    setPriceRange([500000, 3000000]);
    setAreaRange([40, 250]);
  };

  const hasFilters = bedroomFilters.length > 0 || categoryFilters.length > 0;

  const FilterPanel = () => (
    <div className="space-y-8">
      {/* Bedrooms */}
      <div>
        <h3 className="text-sm font-semibold text-[#1C1C1C] mb-3 uppercase tracking-wider">Bedrooms</h3>
        <div className="space-y-2">
          {[1, 2, 3, 4].map((bed) => (
            <label key={bed} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={bedroomFilters.includes(bed)}
                onChange={() => toggleBed(bed)}
                className="w-4 h-4 rounded accent-[#C8A97E]"
              />
              <span className="text-sm text-[#2D2D2D] group-hover:text-[#C8A97E] transition-colors">
                {bed} Bedroom{bed > 1 ? "s" : ""}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Category */}
      <div>
        <h3 className="text-sm font-semibold text-[#1C1C1C] mb-3 uppercase tracking-wider">Category</h3>
        <div className="space-y-2">
          {["Standard", "Premium", "Granny Flat"].map((cat) => (
            <label key={cat} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={categoryFilters.includes(cat)}
                onChange={() => toggleCat(cat)}
                className="w-4 h-4 rounded accent-[#C8A97E]"
              />
              <span className="text-sm text-[#2D2D2D] group-hover:text-[#C8A97E] transition-colors">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-sm font-semibold text-[#1C1C1C] mb-3 uppercase tracking-wider">Price Range</h3>
        <div className="space-y-3">
          <input
            type="range"
            min={500000}
            max={3000000}
            step={50000}
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-full accent-[#C8A97E]"
          />
          <div className="flex justify-between text-xs text-[#7A7A7A]">
            <span>R500k</span>
            <span className="font-semibold text-[#C8A97E]">Up to R{(priceRange[1] / 1000000).toFixed(1)}M</span>
            <span>R3M</span>
          </div>
        </div>
      </div>

      {/* Area Range */}
      <div>
        <h3 className="text-sm font-semibold text-[#1C1C1C] mb-3 uppercase tracking-wider">Area</h3>
        <div className="space-y-3">
          <input
            type="range"
            min={40}
            max={250}
            step={5}
            value={areaRange[1]}
            onChange={(e) => setAreaRange([areaRange[0], parseInt(e.target.value)])}
            className="w-full accent-[#C8A97E]"
          />
          <div className="flex justify-between text-xs text-[#7A7A7A]">
            <span>40m²</span>
            <span className="font-semibold text-[#C8A97E]">Up to {areaRange[1]}m²</span>
            <span>250m²</span>
          </div>
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-sm text-[#C8A97E] hover:text-[#b89468] underline transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <div className="bg-[#F9F7F4] min-h-screen">
      {/* Hero Banner */}
      <div className="bg-[#1C1C1C] pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#C8A97E] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Home / Designs
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Our Home Designs
          </h1>
          <p className="mt-3 text-white/60 text-lg">
            Browse our full range of Standard, Premium, and Granny Flat designs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar (desktop) */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="bg-white rounded-2xl p-6 shadow-[0_2px_20px_rgba(0,0,0,0.06)] sticky top-28">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-bold text-[#1C1C1C]">Filters</h2>
                {hasFilters && (
                  <button onClick={clearFilters} className="text-xs text-[#C8A97E] hover:underline">
                    Clear
                  </button>
                )}
              </div>
              <FilterPanel />
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <SectionLabel className="!mb-0">
                  Showing {filtered.length} design{filtered.length !== 1 ? "s" : ""}
                </SectionLabel>
                {hasFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-xs bg-[#C8A97E]/20 text-[#8B6914] px-3 py-1 rounded-full flex items-center gap-1 hover:bg-[#C8A97E]/30 transition-colors"
                  >
                    Filters active <X size={10} />
                  </button>
                )}
              </div>

              <div className="flex items-center gap-3">
                {/* Mobile filter button */}
                <button
                  onClick={() => setDrawerOpen(true)}
                  className="lg:hidden flex items-center gap-2 bg-white border border-[#E5E0D8] text-sm text-[#1C1C1C] px-4 py-2.5 rounded-full hover:border-[#C8A97E] transition-colors"
                >
                  <SlidersHorizontal size={14} />
                  Filters
                  {hasFilters && <span className="bg-[#C8A97E] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">{bedroomFilters.length + categoryFilters.length}</span>}
                </button>

                {/* Sort */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="appearance-none bg-white border border-[#E5E0D8] text-sm text-[#2D2D2D] pl-4 pr-8 py-2.5 rounded-full focus:outline-none focus:border-[#C8A97E] cursor-pointer"
                  >
                    <option value="newest">Newest</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="area-asc">Area: Smallest First</option>
                  </select>
                  <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7A7A7A] pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Grid */}
            <AnimatePresence mode="wait">
              {filtered.length > 0 ? (
                <motion.div
                  key="grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                >
                  {filtered.map((design, i) => (
                    <DesignCard key={design.slug} design={design} index={i} />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-24"
                >
                  <p className="text-2xl font-bold text-[#1C1C1C] mb-3">No designs found</p>
                  <p className="text-[#7A7A7A] mb-6">Try adjusting your filters.</p>
                  <button
                    onClick={clearFilters}
                    className="bg-[#C8A97E] text-[#1C1C1C] font-semibold px-6 py-3 rounded-full hover:bg-[#b89468] transition-colors"
                  >
                    Clear Filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-white z-50 p-6 overflow-y-auto shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-bold text-xl text-[#1C1C1C]">Filters</h2>
                <button onClick={() => setDrawerOpen(false)} aria-label="Close filters">
                  <X size={20} className="text-[#1C1C1C]" />
                </button>
              </div>
              <FilterPanel />
              <button
                onClick={() => setDrawerOpen(false)}
                className="mt-8 w-full bg-[#1C1C1C] text-white font-semibold py-3 rounded-full"
              >
                Apply Filters ({filtered.length} results)
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

