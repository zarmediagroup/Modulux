"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  BedDouble, Bath, Car, Square, Check, Download, Phone, X,
  ChevronLeft, ChevronRight, MessageCircle, ArrowRight,
} from "lucide-react";
import { HomeDesign } from "@/lib/designs";
import Badge from "@/components/ui/Badge";
import DesignCard from "@/components/ui/DesignCard";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { siteConfig } from "@/lib/site";

interface Props {
  design: HomeDesign;
  related: HomeDesign[];
}

const enquirySchema = z.object({
  name: z.string().min(2, "Required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Required"),
  message: z.string().optional(),
});
type EnquiryForm = z.infer<typeof enquirySchema>;

export default function DesignDetailClient({ design, related }: Props) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } =
    useForm<EnquiryForm>({ resolver: zodResolver(enquirySchema) });

  const onSubmit = async (data: EnquiryForm) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log(data);
    setEnquirySubmitted(true);
    reset();
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const inputClass = (hasError: boolean) => `
    w-full px-4 py-3 rounded-xl border text-sm text-[#2D2D2D] bg-[#F9F7F4]
    placeholder:text-[#AAAAAA] outline-none transition-colors duration-200
    ${hasError ? "border-red-300 focus:border-red-400" : "border-[#E5E0D8] focus:border-[#C8A97E]"}
  `;

  return (
    <div className="bg-[#F9F7F4] min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-[#1C1C1C] pt-28 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/designs" className="hover:text-white transition-colors">Designs</Link>
            <span>/</span>
            <span className="text-white">{design.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Block */}
      <div className="bg-white border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge category={design.category} className="mb-4" />
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#1C1C1C] tracking-tight mb-3">
                {design.name}
              </h1>
              <p className="text-lg text-[#7A7A7A] mb-6">{design.tagline}</p>

              {/* Specs */}
              <div className="flex flex-wrap gap-5 mb-8">
                <div className="flex items-center gap-2 text-[#2D2D2D]">
                  <BedDouble size={20} className="text-[#C8A97E]" />
                  <span className="font-semibold">{design.bedrooms}</span>
                  <span className="text-[#7A7A7A] text-sm">Bedrooms</span>
                </div>
                <div className="flex items-center gap-2 text-[#2D2D2D]">
                  <Bath size={20} className="text-[#C8A97E]" />
                  <span className="font-semibold">{design.bathrooms}</span>
                  <span className="text-[#7A7A7A] text-sm">Bathrooms</span>
                </div>
                {design.garages > 0 && (
                  <div className="flex items-center gap-2 text-[#2D2D2D]">
                    <Car size={20} className="text-[#C8A97E]" />
                    <span className="font-semibold">{design.garages}</span>
                    <span className="text-[#7A7A7A] text-sm">Garage{design.garages > 1 ? "s" : ""}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-[#2D2D2D]">
                  <Square size={20} className="text-[#C8A97E]" />
                  <span className="font-semibold">{design.area}m²</span>
                  <span className="text-[#7A7A7A] text-sm">Floor Area</span>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-[#E5E0D8]">
                <div>
                  <p className="text-xs text-[#7A7A7A] uppercase tracking-wider">Starting from</p>
                  <p className="text-3xl font-extrabold text-[#1C1C1C]">{design.price}</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Main image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
              onClick={() => openLightbox(0)}
            >
              <Image
                src={design.images[0].src}
                alt={design.images[0].alt}
                fill
                priority
                className={`hover:scale-105 transition-transform duration-500 ${
                  design.images[0].kind === "floorplan"
                    ? "object-contain bg-[#F9F7F4] p-4"
                    : "object-cover"
                }`}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>

          {/* Image gallery strip */}
          {design.images.length > 1 && (
            <div className="mt-6 flex gap-3 overflow-x-auto pb-2">
              {design.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => openLightbox(i)}
                  className={`relative shrink-0 w-24 h-16 rounded-xl overflow-hidden border-2 transition-colors ${
                    i === 0 ? "border-[#C8A97E]" : "border-transparent hover:border-[#C8A97E]"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className={img.kind === "floorplan" ? "object-contain bg-[#F9F7F4] p-1" : "object-cover"}
                    sizes="96px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Main content */}
          <div className="lg:col-span-2 space-y-14">
            {/* About this design */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel>ABOUT THIS DESIGN</SectionLabel>
              <SectionHeading className="mb-6">The Story Behind {design.name}</SectionHeading>
              <div className="space-y-4 text-[#7A7A7A] leading-relaxed">
                {design.description.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel>KEY FEATURES</SectionLabel>
              <SectionHeading className="mb-6">What&apos;s Included</SectionHeading>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {design.features.map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.4 }}
                    className="flex items-center gap-3 bg-white rounded-xl p-4 border border-[#E5E0D8]"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#4A6741]/15 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-[#4A6741]" />
                    </div>
                    <span className="text-sm text-[#2D2D2D] font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Floor Plan */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel>FLOOR PLAN</SectionLabel>
              <SectionHeading className="mb-6">Layout & Dimensions</SectionHeading>
              <div className="relative rounded-2xl overflow-hidden bg-white border border-[#E5E0D8]">
                <Image
                  src={design.floorPlanImage}
                  alt={`${design.name} floor plan`}
                  width={800}
                  height={600}
                  className="w-full object-contain"
                />
              </div>
              <div className="mt-4">
                <a
                  href={design.floorPlanImage}
                  download
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1C1C1C] bg-white border border-[#E5E0D8] px-6 py-3 rounded-full hover:border-[#C8A97E] hover:text-[#C8A97E] transition-colors"
                >
                  <Download size={14} />
                  Download PDF Brochure
                </a>
              </div>
            </motion.div>

            {/* Specifications */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel>SPECIFICATIONS</SectionLabel>
              <SectionHeading className="mb-6">Technical Details</SectionHeading>
              <div className="bg-white rounded-2xl border border-[#E5E0D8] overflow-hidden">
                {design.specifications.map((spec, i) => (
                  <div
                    key={spec.label}
                    className={`flex justify-between items-center px-6 py-4 ${
                      i % 2 === 0 ? "bg-white" : "bg-[#F9F7F4]"
                    }`}
                  >
                    <span className="text-sm text-[#7A7A7A]">{spec.label}</span>
                    <span className="text-sm font-semibold text-[#1C1C1C]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Sticky enquiry card */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <div className="bg-white rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] border border-[#E5E0D8] p-6">
                <p className="text-xs font-semibold tracking-widest uppercase text-[#7A7A7A] mb-2">
                  Enquire About
                </p>
                <h3 className="text-xl font-bold text-[#1C1C1C] mb-1">{design.name}</h3>
                <p className="text-[#C8A97E] font-semibold mb-6">{design.price}</p>

                {enquirySubmitted ? (
                  <div className="text-center py-6">
                    <Check size={36} className="text-[#4A6741] mx-auto mb-3" />
                    <p className="font-bold text-[#1C1C1C]">Enquiry Sent!</p>
                    <p className="text-sm text-[#7A7A7A] mt-1">We&apos;ll be in touch within 24 hours.</p>
                    <button onClick={() => setEnquirySubmitted(false)} className="mt-4 text-xs text-[#C8A97E] underline">
                      Send another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                    <div>
                      <input {...register("name")} placeholder="Your Name *" className={inputClass(!!errors.name)} />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <input {...register("email")} type="email" placeholder="Email Address *" className={inputClass(!!errors.email)} />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                      <input {...register("phone")} placeholder="Phone Number *" className={inputClass(!!errors.phone)} />
                      {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                    <div>
                      <textarea
                        {...register("message")}
                        rows={3}
                        placeholder="Message (optional)"
                        className={`${inputClass(false)} resize-none`}
                      />
                    </div>
                    <Button type="submit" variant="primary" size="md" disabled={isSubmitting} className="w-full justify-center">
                      {isSubmitting ? "Sending..." : "Enquire Now"}
                    </Button>
                  </form>
                )}

                <div className="mt-5 pt-5 border-t border-[#E5E0D8] space-y-2">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex items-center gap-2 text-sm text-[#2D2D2D] hover:text-[#C8A97E] transition-colors"
                  >
                    <Phone size={14} className="text-[#C8A97E]" /> {siteConfig.phoneDisplay}
                  </a>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20MODULUX%2C%20I%27m%20interested%20in%20${encodeURIComponent(design.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[#25D366] hover:text-[#1da850] transition-colors"
                  >
                    <MessageCircle size={14} /> Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Designs */}
        {related.length > 0 && (
          <div className="mt-24">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-end justify-between mb-10"
            >
              <div>
                <SectionLabel>SIMILAR DESIGNS</SectionLabel>
                <SectionHeading>You Might Also Like</SectionHeading>
              </div>
              <Link
                href="/designs"
                className="hidden sm:flex items-center gap-2 text-sm font-semibold text-[#C8A97E] hover:text-[#b89468] transition-colors group"
              >
                View All <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((d, i) => (
                <DesignCard key={d.slug} design={d} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom CTA Banner */}
      <div className="bg-[#1C1C1C] py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#C8A97E] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Ready to move forward?
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Make {design.name} Yours
          </h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Speak to our team today and let&apos;s start designing your dream home.
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Contact Our Team
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white z-10"
              aria-label="Close lightbox"
            >
              <X size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + design.images.length) % design.images.length); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={36} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % design.images.length); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10"
              aria-label="Next image"
            >
              <ChevronRight size={36} />
            </button>
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl aspect-[4/3] rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={design.images[lightboxIndex].src}
                alt={design.images[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

