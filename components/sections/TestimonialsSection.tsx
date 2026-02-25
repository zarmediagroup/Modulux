"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    name: "Thandi M.",
    location: "Johannesburg",
    quote:
      "We never thought we could afford a home this beautiful. MODULUX made it possible. The quality is exceptional and the whole process was so much smoother than we expected.",
    rating: 5,
    initials: "TM",
  },
  {
    name: "Riaan V.",
    location: "Pretoria",
    quote:
      "The process was so smooth. From design to delivery in under 6 months. Our Stellenbosch is everything we dreamed of. The attention to detail is remarkable.",
    rating: 5,
    initials: "RV",
  },
  {
    name: "Kefilwe D.",
    location: "Cape Town",
    quote:
      "Our granny flat is absolutely perfect. Mum loves it — she has her independence but we're still close by. MODULUX turned what felt like a complicated project into something effortless.",
    rating: 5,
    initials: "KD",
  },
  {
    name: "David & Sarah K.",
    location: "Durban",
    quote:
      "Best investment we've ever made. The quality is exceptional and our home has increased in value significantly. We'd choose MODULUX again without hesitation.",
    rating: 5,
    initials: "DK",
  },
  {
    name: "Amina P.",
    location: "Stellenbosch",
    quote:
      "MODULUX transformed our plot into a home we're genuinely proud of. The team was professional throughout and the finished product exceeded our expectations completely.",
    rating: 5,
    initials: "AP",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [auto]);

  const prev = () => {
    setAuto(false);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };
  const next = () => {
    setAuto(false);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  return (
    <section className="bg-[#F9F7F4] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <SectionLabel className="flex justify-center">TESTIMONIALS</SectionLabel>
          <SectionHeading centered>What Our Homeowners Say</SectionHeading>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-white rounded-2xl p-10 md:p-14 shadow-[0_4px_30px_rgba(0,0,0,0.07)] text-center"
            >
              {/* Quote icon */}
              <Quote size={36} className="text-[#C8A97E] mx-auto mb-6 opacity-60" />

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} size={18} className="text-[#C8A97E] fill-[#C8A97E]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xl md:text-2xl text-[#2D2D2D] leading-relaxed font-light italic mb-8">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1C1C1C] flex items-center justify-center text-white font-bold text-sm">
                  {testimonials[current].initials}
                </div>
                <div className="text-left">
                  <p className="font-bold text-[#1C1C1C]">{testimonials[current].name}</p>
                  <p className="text-sm text-[#7A7A7A]">{testimonials[current].location}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 rounded-full bg-white border border-[#E5E0D8] shadow flex items-center justify-center hover:border-[#C8A97E] transition-colors"
          >
            <ChevronLeft size={18} className="text-[#1C1C1C]" />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 rounded-full bg-white border border-[#E5E0D8] shadow flex items-center justify-center hover:border-[#C8A97E] transition-colors"
          >
            <ChevronRight size={18} className="text-[#1C1C1C]" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setAuto(false); setCurrent(i); }}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                i === current ? "bg-[#C8A97E] w-6" : "bg-[#E5E0D8] hover:bg-[#C8A97E]/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

