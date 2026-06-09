"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, ExternalLink } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

const hours = [
  { day: "Monday – Friday", time: "8:00am – 5:00pm" },
  { day: "Saturday", time: "9:00am – 3:00pm" },
  { day: "Sunday", time: "Closed" },
];

export default function DisplayVillageSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel>VISIT US</SectionLabel>
            <SectionHeading className="mb-6">
              See the Homes in Person
            </SectionHeading>
            <p className="text-[#7A7A7A] leading-relaxed mb-8">
              Nothing beats walking through a real MODULUX home. Visit our Display Village in Bellville to see the quality, finishes, and spatial proportions for yourself. Our team will be on hand to answer every question.
            </p>

            {/* Details */}
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F9F7F4] flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-[#C8A97E]" />
                </div>
                <div>
                  <p className="font-semibold text-[#1C1C1C]">Display Village Address</p>
                  <p className="text-[#7A7A7A] text-sm mt-0.5">12 Modular Way, Bellville, Cape Town, 7530</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F9F7F4] flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-[#C8A97E]" />
                </div>
                <div>
                  <p className="font-semibold text-[#1C1C1C] mb-2">Trading Hours</p>
                  <div className="space-y-1">
                    {hours.map((h) => (
                      <div key={h.day} className="flex justify-between gap-8 text-sm">
                        <span className="text-[#2D2D2D]">{h.day}</span>
                        <span className={h.time === "Closed" ? "text-red-400" : "text-[#7A7A7A]"}>
                          {h.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F9F7F4] flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-[#C8A97E]" />
                </div>
                <div>
                  <p className="font-semibold text-[#1C1C1C]">Phone</p>
                  <a href={`tel:${siteConfig.phone}`} className="text-[#7A7A7A] text-sm hover:text-[#C8A97E] transition-colors mt-0.5 block">
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F9F7F4] flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-[#C8A97E]" />
                </div>
                <div>
                  <p className="font-semibold text-[#1C1C1C]">Email</p>
                  <a href="mailto:info@modulux.co.za" className="text-[#7A7A7A] text-sm hover:text-[#C8A97E] transition-colors mt-0.5 block">
                    info@modulux.co.za
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="https://maps.google.com/?q=Bellville,Cape+Town"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" iconRight={ExternalLink}>
                  Get Directions
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-square bg-[#F0EDE8] flex items-center justify-center border border-[#E5E0D8]">
              {/* Map placeholder — replace with actual iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.2!2d18.6299!3d-33.9258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5bb78b8b0001%3A0x1234!2sBellville%2C+Cape+Town!5e0!3m2!1sen!2sza!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", inset: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MODULUX Display Village Location"
              />
              <div className="absolute inset-0 bg-[#F0EDE8] flex flex-col items-center justify-center gap-4 z-10 pointer-events-none">
                <div className="w-14 h-14 rounded-full bg-[#1C1C1C] flex items-center justify-center">
                  <MapPin size={24} className="text-[#C8A97E]" />
                </div>
                <div className="text-center">
                  <p className="font-bold text-[#1C1C1C]">Display Village</p>
                  <p className="text-sm text-[#7A7A7A]">Bellville, Cape Town</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

