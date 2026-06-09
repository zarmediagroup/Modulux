"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2, GraduationCap, HeartPulse, Users, Truck,
  Check, ArrowRight, Phone, Mail, ChevronRight,
} from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { aboutFactoryGallery, commercialGallery, siteImages } from "@/lib/images";

// ─── Data ──────────────────────────────────────────────────────────────────

const solutions = [
  {
    icon: Building2,
    title: "Office Buildings",
    description:
      "Contemporary modular office spaces from single-room site offices to multi-storey commercial buildings. Fully fitted with electrical, data, HVAC, and ablutions.",
    image: siteImages.hero,
    features: ["Open-plan or cellular layouts", "Data & electrical reticulation", "Air conditioning ready", "Disabled access compliant"],
  },
  {
    icon: GraduationCap,
    title: "Schools & Education",
    description:
      "Rapidly deployable classrooms, administration blocks, and full school campuses. SABS-compliant, energy-efficient, and designed for the African climate.",
    image: siteImages.hero,
    features: ["Single classrooms or full campuses", "SABS & DBE compliant", "Natural ventilation design", "Vandal-resistant options"],
  },
  {
    icon: HeartPulse,
    title: "Clinics & Healthcare",
    description:
      "Purpose-built primary healthcare facilities, mobile clinics, and specialist treatment units. Designed to meet DoH specifications and infection control requirements.",
    image: siteImages.hero,
    features: ["DoH specification compliant", "Infection control design", "Pharmacy & consulting rooms", "Ablution blocks included"],
  },
  {
    icon: Users,
    title: "Workforce Accommodation",
    description:
      "Mining, construction, and agricultural workforce camps. Dormitory-style or en-suite single rooms, with full dining, ablution, and recreational facilities.",
    image: siteImages.hero,
    features: ["Dormitory & en-suite options", "Dining & kitchen facilities", "Ablution blocks", "Site offices & recreation"],
  },
  {
    icon: Truck,
    title: "Relocatable Structures",
    description:
      "Need flexibility? Our relocatable modular buildings can be installed, demounted, and redeployed to a new site — ideal for temporary or seasonal operations.",
    image: siteImages.hero,
    features: ["Fully relocatable", "Rapid 2–5 day installation", "Hire or purchase options", "Nationwide deployment"],
  },
  {
    icon: Building2,
    title: "Retail & Hospitality",
    description:
      "Pop-up retail spaces, restaurants, lodges, and hospitality units. We've built everything from farm stalls to luxury bush lodges using modular construction.",
    image: siteImages.hero,
    features: ["Retail kiosks to full restaurants", "Lodge & chalet units", "Commercial kitchen ready", "Custom exterior finishes"],
  },
];

const stats = [
  { value: "200+", label: "Commercial Projects" },
  { value: "14", label: "Provinces & Countries Served" },
  { value: "90", label: "Days Avg. Project Delivery" },
  { value: "R500M+", label: "Commercial Value Delivered" },
];

const clients = [
  "Department of Health",
  "Department of Basic Education",
  "Anglo American",
  "Sasol",
  "City of Cape Town",
  "Growthpoint Properties",
];

const whyItems = [
  "Up to 60% faster than traditional construction",
  "Controlled factory quality — no weather delays",
  "Fixed-price contracts — no cost overruns",
  "Fully compliant with SANS, SABS, and NHBRC standards",
  "Turnkey delivery — design, build, install, commission",
  "Nationwide project management & aftercare",
];

const schema = z.object({
  name: z.string().min(2, "Required"),
  company: z.string().min(2, "Required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Required"),
  projectType: z.string().min(1, "Required"),
  units: z.string().optional(),
  message: z.string().min(10, "Please describe your project"),
});
type FormData = z.infer<typeof schema>;

// ─── Component ─────────────────────────────────────────────────────────────

export default function CommercialPageClient() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } =
    useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log(data);
    setSubmitted(true);
    reset();
  };

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl border text-sm text-[#2D2D2D] bg-[#F9F7F4] placeholder:text-[#AAAAAA] outline-none transition-colors duration-200 ${hasError ? "border-red-300 focus:border-red-400" : "border-[#E5E0D8] focus:border-[#C8A97E]"}`;

  return (
    <div className="bg-[#F9F7F4]">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        <Image
          src={siteImages.hero}
          alt="MODULUX modular commercial building"
          fill
          priority
          className="object-cover object-[75%_center]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <p className="text-[#C8A97E] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              Commercial Solutions
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-6">
              Build Smarter.
              <br />
              <span className="text-[#C8A97E]">Build Faster.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed">
              Modular commercial buildings delivered turnkey across South Africa.
              Offices, schools, clinics, workforce camps, and more — in a fraction
              of the time of traditional construction.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#enquire">
                <Button variant="primary" size="lg">
                  Request a Quote
                </Button>
              </a>
              <a href="#solutions">
                <Button variant="outline" size="lg" className="!text-white !border-white hover:!bg-white hover:!text-[#1C1C1C]">
                  See Solutions
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────── */}
      <section className="bg-[#1C1C1C] py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-extrabold text-[#C8A97E]">{s.value}</p>
              <p className="text-white/60 text-sm mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Solutions ────────────────────────────────────── */}
      <section id="solutions" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <SectionLabel className="flex justify-center">WHAT WE BUILD</SectionLabel>
            <SectionHeading
              centered
              sub="From a single site office to a complete school campus — we engineer and deliver modular solutions for every commercial application."
            >
              Commercial Solutions
            </SectionHeading>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((sol, i) => (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-[#F9F7F4] rounded-2xl overflow-hidden border border-[#E5E0D8] hover:-translate-y-1 transition-transform duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={sol.image}
                    alt={sol.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-[#1C1C1C]/80 backdrop-blur-sm flex items-center justify-center">
                    <sol.icon size={18} className="text-[#C8A97E]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1C1C1C] mb-2">{sol.title}</h3>
                  <p className="text-sm text-[#7A7A7A] leading-relaxed mb-5">{sol.description}</p>
                  <ul className="space-y-2">
                    {sol.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-[#2D2D2D]">
                        <Check size={12} className="text-[#4A6741] shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why MODULUX Commercial ────────────────────────── */}
      <section className="bg-[#F9F7F4] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <SectionLabel>WHY CHOOSE US</SectionLabel>
              <SectionHeading className="mb-6">
                The Smarter Way to{" "}
                <span className="text-[#C8A97E]">Build Commercial</span>
              </SectionHeading>
              <p className="text-[#7A7A7A] leading-relaxed mb-8">
                Traditional construction is slow, expensive, and unpredictable. Modular construction
                with MODULUX gives you a fixed price, a reliable programme, and a consistently
                high-quality outcome — every time.
              </p>
              <ul className="space-y-3">
                {whyItems.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                    className="flex items-start gap-3 text-[#2D2D2D]"
                  >
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-[#4A6741]/15 flex items-center justify-center shrink-0">
                      <Check size={11} className="text-[#4A6741]" />
                    </span>
                    <span className="text-sm font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              {aboutFactoryGallery.map((img, i) => (
                <div key={i} className={`relative rounded-2xl overflow-hidden ${i === 1 ? "mt-6" : i === 3 ? "-mt-6" : ""}`} style={{ aspectRatio: "4/3" }}>
                  <Image
                    src={img.src}
                    alt={`Commercial project ${i + 1}`}
                    fill
                    className="object-cover"
                    style={{ objectPosition: img.objectPosition }}
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────── */}
      <section className="bg-[#1C1C1C] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <SectionLabel light>HOW IT WORKS</SectionLabel>
            <SectionHeading light centered>Our Commercial Process</SectionHeading>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Scope & Brief",      desc: "We understand your requirements, site constraints, and project timeline." },
              { step: "02", title: "Design & Proposal",  desc: "Our design team creates a tailored solution with full cost estimate." },
              { step: "03", title: "Sign-off & Factory", desc: "Once approved, fabrication begins in our Cape Town factory." },
              { step: "04", title: "Site Preparation",   desc: "Your site is prepared with foundations and service connections." },
              { step: "05", title: "Delivery & Install", desc: "Buildings are delivered and installed. Typically 2–5 days on-site." },
            ].map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-4">
                  <span className="text-[#C8A97E] font-extrabold text-sm">{step.step}</span>
                </div>
                {i < 4 && (
                  <ChevronRight size={16} className="text-white/20 absolute top-[22px] -right-3 hidden lg:block" />
                )}
                <h4 className="text-white font-bold mb-2">{step.title}</h4>
                <p className="text-white/50 text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trusted by ───────────────────────────────────── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#7A7A7A] uppercase mb-8">
            Trusted by leading organisations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {clients.map((client) => (
              <span
                key={client}
                className="bg-[#F9F7F4] border border-[#E5E0D8] text-[#2D2D2D] text-sm font-semibold px-6 py-3 rounded-full"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Project gallery ──────────────────────────────── */}
      <section className="bg-[#F9F7F4] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <SectionLabel>PROJECT GALLERY</SectionLabel>
            <SectionHeading>Commercial Work We&apos;re Proud Of</SectionHeading>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {commercialGallery.map(({ src, span, objectPosition }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className={`relative rounded-xl overflow-hidden group ${span}`}
                style={{ aspectRatio: span ? undefined : "4/3", minHeight: span ? "300px" : undefined }}
              >
                <Image
                  src={src}
                  alt={`Commercial project ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition }}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Enquiry form ─────────────────────────────────── */}
      <section id="enquire" className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel>REQUEST A QUOTE</SectionLabel>
              <SectionHeading className="mb-8">Let&apos;s Talk About Your Project</SectionHeading>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#4A6741]/10 border border-[#4A6741]/20 rounded-2xl p-12 text-center"
                >
                  <Check size={48} className="text-[#4A6741] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[#1C1C1C] mb-2">Enquiry Received</h3>
                  <p className="text-[#7A7A7A]">
                    A member of our commercial team will be in touch within one business day.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 text-sm text-[#C8A97E] underline">
                    Submit another enquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <input {...register("name")} placeholder="Contact Name *" className={inputClass(!!errors.name)} />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <input {...register("company")} placeholder="Company / Organisation *" className={inputClass(!!errors.company)} />
                      {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company.message}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <input {...register("email")} type="email" placeholder="Email Address *" className={inputClass(!!errors.email)} />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                      <input {...register("phone")} placeholder="Phone Number *" className={inputClass(!!errors.phone)} />
                      {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <select {...register("projectType")} defaultValue="" className={inputClass(!!errors.projectType)}>
                        <option value="" disabled>Project Type *</option>
                        {["Office Building", "School / Classroom", "Clinic / Healthcare", "Workforce Accommodation", "Retail / Hospitality", "Relocatable Structure", "Other"].map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                      {errors.projectType && <p className="text-red-400 text-xs mt-1">{errors.projectType.message}</p>}
                    </div>
                    <div>
                      <input {...register("units")} placeholder="No. of units / m² (optional)" className={inputClass(false)} />
                    </div>
                  </div>
                  <div>
                    <textarea
                      {...register("message")}
                      rows={4}
                      placeholder="Describe your project requirements *"
                      className={`${inputClass(!!errors.message)} resize-none`}
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                  </div>
                  <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} className="w-full justify-center">
                    {isSubmitting ? "Sending..." : "Send Commercial Enquiry"}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Info panel */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-col gap-8 justify-center"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src={siteImages.hero}
                  alt="MODULUX modular commercial building"
                  fill
                  className="object-cover object-[75%_center]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div>
                    <p className="text-[#C8A97E] text-xs font-semibold tracking-widest uppercase mb-1">Our Promise</p>
                    <p className="text-white font-bold text-xl">Fixed Price. Fixed Programme. No Surprises.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-[#1C1C1C] text-lg">Speak to Our Commercial Team</h3>
                <a href="tel:+27210000000" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-[#F9F7F4] flex items-center justify-center">
                    <Phone size={16} className="text-[#C8A97E]" />
                  </div>
                  <span className="font-semibold text-[#1C1C1C] group-hover:text-[#C8A97E] transition-colors">
                    +27 21 000 0000
                  </span>
                </a>
                <a href="mailto:commercial@modulux.co.za" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-[#F9F7F4] flex items-center justify-center">
                    <Mail size={16} className="text-[#C8A97E]" />
                  </div>
                  <span className="font-semibold text-[#1C1C1C] group-hover:text-[#C8A97E] transition-colors">
                    commercial@modulux.co.za
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────── */}
      <section className="bg-[#1C1C1C] py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#C8A97E] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Also looking for residential?
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Explore Our Home Designs
          </h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Browse our full range of Standard, Premium, and Granny Flat residential designs.
          </p>
          <Link href="/designs">
            <Button variant="primary" size="lg" iconRight={ArrowRight}>
              View Home Designs
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

