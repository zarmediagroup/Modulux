"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Lightbulb, Shield, Users } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { aboutFactoryGallery, aboutHeroImage, aboutMissionImage, teamImages } from "@/lib/images";

const timeline = [
  { year: "2015", title: "MODULUX Founded", description: "Started in a small Cape Town workshop with a vision to make quality housing accessible to all South Africans." },
  { year: "2017", title: "First 100 Homes", description: "Reached our first major milestone — 100 completed and delivered homes across the Western Cape." },
  { year: "2019", title: "Nationwide Delivery", description: "Expanded our logistics capabilities to deliver homes to all nine provinces of South Africa." },
  { year: "2021", title: "Premium Range Launch", description: "Launched the MODULUX Premium range, bringing architecturally refined modular homes to the market." },
  { year: "2023", title: "500 Happy Families", description: "Celebrated our 500th home delivery — a proud milestone for the entire MODULUX family." },
  { year: "2025", title: "Factory Expansion", description: "Opened our expanded Cape Town manufacturing facility, doubling our production capacity." },
];

const team = [
  { name: "Jacques van der Berg", title: "CEO & Founder",        image: teamImages[0] },
  { name: "Nandi Dlamini",        title: "Head of Design",       image: teamImages[1] },
  { name: "Marco Ferreira",       title: "Head of Construction", image: teamImages[2] },
  { name: "Sipho Molefe",         title: "Sales Director",       image: teamImages[3] },
];

const values = [
  { icon: Shield, title: "Quality", description: "We never compromise on materials, workmanship, or finish. Every home carries the MODULUX quality guarantee." },
  { icon: Heart, title: "Integrity", description: "Transparent pricing, honest timelines, and straightforward communication — always." },
  { icon: Lightbulb, title: "Innovation", description: "Continuous investment in new technologies, materials, and design solutions to build better homes." },
  { icon: Users, title: "Community", description: "We build more than homes — we build communities. Proudly South African, serving every province." },
];

const galleryImages = aboutFactoryGallery;

export default function AboutPageClient() {
  return (
    <div className="bg-[#F9F7F4]">
      {/* Hero */}
      <div className="relative min-h-[60vh] flex items-end bg-[#1C1C1C] overflow-hidden">
        <Image
          src={aboutHeroImage}
          alt="MODULUX modular home"
          fill
          priority
          className="object-cover object-[75%_center] opacity-40"
          sizes="100vw"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-40 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#C8A97E] text-xs font-semibold tracking-[0.2em] uppercase mb-4">About Us</p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-2xl">
              Building Better Homes for South Africa
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Mission */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel>OUR MISSION</SectionLabel>
              <SectionHeading className="mb-6">
                A Home for{" "}
                <span className="text-[#C8A97E]">Every South African</span>
              </SectionHeading>
              <div className="space-y-4 text-[#7A7A7A] leading-relaxed">
                <p>
                  MODULUX was founded on a simple but powerful belief: that every South African deserves access to a beautifully designed, structurally sound, and affordable home. We set out to challenge the way homes are built — and we haven&apos;t stopped since.
                </p>
                <p>
                  By manufacturing in a controlled factory environment, we eliminate the inefficiencies and uncertainties of traditional construction. Our homes are built to a consistent standard, regardless of site conditions, weather, or labour availability.
                </p>
                <p>
                  The result? A higher quality home, delivered faster, for less. That&apos;s the MODULUX promise.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <Image
                src={aboutMissionImage}
                alt="MODULUX home exterior"
                fill
                className="object-cover object-[75%_center]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="process" className="bg-[#F9F7F4] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <SectionLabel className="flex justify-center">OUR JOURNEY</SectionLabel>
            <SectionHeading centered>A Decade of Building Dreams</SectionHeading>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-[#E5E0D8]" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex gap-8 pl-8"
                >
                  <div className="absolute left-0 w-16 h-16 rounded-full bg-white border-2 border-[#C8A97E] flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-[#C8A97E]">{item.year}</span>
                  </div>
                  <div className="pl-10 pb-2">
                    <h3 className="text-lg font-bold text-[#1C1C1C] mb-1">{item.title}</h3>
                    <p className="text-[#7A7A7A] text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <SectionLabel className="flex justify-center">OUR VALUES</SectionLabel>
            <SectionHeading centered>What We Stand For</SectionHeading>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#F9F7F4] rounded-2xl p-8 text-center border border-[#E5E0D8]"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#1C1C1C] flex items-center justify-center mx-auto mb-5">
                  <value.icon size={24} className="text-[#C8A97E]" />
                </div>
                <h3 className="text-lg font-bold text-[#1C1C1C] mb-3">{value.title}</h3>
                <p className="text-sm text-[#7A7A7A] leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#F9F7F4] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <SectionLabel className="flex justify-center">THE TEAM</SectionLabel>
            <SectionHeading centered>The People Behind Every Home</SectionHeading>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.06)] text-center group"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#1C1C1C]">{member.name}</h3>
                  <p className="text-sm text-[#C8A97E] mt-1">{member.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel>OUR FACTORY</SectionLabel>
              <SectionHeading className="mb-6">Built in Cape Town</SectionHeading>
              <div className="space-y-4 text-[#7A7A7A] leading-relaxed">
                <p>
                  Our 8,000m² manufacturing facility in Bellville, Cape Town is where every MODULUX home comes to life. State-of-the-art machinery, skilled craftspeople, and rigorous quality control processes combine to produce homes of exceptional and consistent quality.
                </p>
                <p>
                  Every home is built, inspected, and signed off before it leaves our factory. By the time it arrives on your stand, it&apos;s ready to connect to services and move into.
                </p>
              </div>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden"
                >
                  <Image
                    src={img.src}
                    alt={`MODULUX factory image ${i + 1}`}
                    fill
                    className="object-cover"
                    style={{ objectPosition: img.objectPosition }}
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="border-t border-[#E5E0D8] pt-12">
            <p className="text-center text-sm text-[#7A7A7A] mb-8 uppercase tracking-wider font-semibold">
              Certified &amp; Registered
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {["NHBRC Registered", "ISO 9001:2015", "Green Star Rated", "SANS 10400 Compliant"].map((cert) => (
                <div key={cert} className="bg-[#F9F7F4] border border-[#E5E0D8] rounded-xl px-6 py-3 text-sm font-semibold text-[#2D2D2D]">
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-[#1C1C1C] py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#C8A97E] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Ready to start?</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Explore Our Home Designs
          </h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Browse our full range of Standard, Premium, and Granny Flat designs.
          </p>
          <Link href="/designs">
            <Button variant="primary" size="lg" iconRight={ArrowRight}>
              View All Designs
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

