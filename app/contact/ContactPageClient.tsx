"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, Clock, CheckCircle, ChevronDown } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import { moduluxFaqs } from "@/lib/faqs";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  province: z.string().min(1, "Please select a province"),
  interest: z.string().min(1, "Please select a product"),
  standSize: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
type FormData = z.infer<typeof schema>;

const provinces = ["Western Cape", "Gauteng", "KwaZulu-Natal", "Eastern Cape", "Limpopo", "Mpumalanga", "Northern Cape", "North West", "Free State"];
const interests = ["Standard Range", "Premium Range", "Granny Flat", "Not Sure Yet"];

const faqs = moduluxFaqs;

export default function ContactPageClient() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log(data);
    setSubmitted(true);
    reset();
  };

  const inputClass = (hasError: boolean) => `
    w-full px-4 py-3 rounded-xl border text-sm text-[#2D2D2D] bg-white
    placeholder:text-[#AAAAAA] outline-none transition-colors duration-200
    ${hasError ? "border-red-300 focus:border-red-400" : "border-[#E5E0D8] focus:border-[#C8A97E]"}
  `;

  return (
    <div className="bg-[#F9F7F4]">
      {/* Hero */}
      <div className="bg-[#1C1C1C] pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#C8A97E] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Home / Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h1>
          <p className="mt-3 text-white/60 text-lg max-w-lg">
            Ready to start your modular home journey? We&apos;d love to hear from you.
          </p>
        </div>
      </div>

      {/* Contact cards */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Phone, label: "Call Us", value: siteConfig.phoneDisplay, href: `tel:${siteConfig.phone}` },
            { icon: Mail, label: "Email Us", value: "info@modulux.co.za", href: "mailto:info@modulux.co.za" },
            { icon: MapPin, label: "Visit Us", value: "12 Modular Way, Bellville", href: "#map" },
            { icon: Clock, label: "Open", value: "Mon–Fri 8am–5pm", href: null },
          ].map(({ icon: Icon, label, value, href }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-[0_2px_20px_rgba(0,0,0,0.08)] border border-[#E5E0D8]"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F9F7F4] flex items-center justify-center mb-3">
                <Icon size={18} className="text-[#C8A97E]" />
              </div>
              <p className="text-xs text-[#7A7A7A] uppercase tracking-wider mb-1">{label}</p>
              {href ? (
                <a href={href} className="font-semibold text-[#1C1C1C] hover:text-[#C8A97E] transition-colors text-sm">
                  {value}
                </a>
              ) : (
                <p className="font-semibold text-[#1C1C1C] text-sm">{value}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main form + map */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>SEND AN ENQUIRY</SectionLabel>
            <SectionHeading className="mb-8">Start Your Journey</SectionHeading>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#4A6741]/10 border border-[#4A6741]/20 rounded-2xl p-12 text-center"
              >
                <CheckCircle size={52} className="text-[#4A6741] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#1C1C1C] mb-2">Message Received!</h3>
                <p className="text-[#7A7A7A] max-w-sm mx-auto">
                  Thank you for reaching out. A member of the MODULUX team will be in touch within 24 hours.
                </p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-sm text-[#C8A97E] underline">
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <input {...register("name")} placeholder="Full Name *" className={inputClass(!!errors.name)} />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <input {...register("phone")} placeholder="Phone Number *" className={inputClass(!!errors.phone)} />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <div>
                  <input {...register("email")} type="email" placeholder="Email Address *" className={inputClass(!!errors.email)} />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <select {...register("province")} className={inputClass(!!errors.province)} defaultValue="">
                      <option value="" disabled>Select Province *</option>
                      {provinces.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                    {errors.province && <p className="text-red-400 text-xs mt-1">{errors.province.message}</p>}
                  </div>
                  <div>
                    <select {...register("interest")} className={inputClass(!!errors.interest)} defaultValue="">
                      <option value="" disabled>Product Interest *</option>
                      {interests.map((i) => <option key={i} value={i}>{i}</option>)}
                    </select>
                    {errors.interest && <p className="text-red-400 text-xs mt-1">{errors.interest.message}</p>}
                  </div>
                </div>

                <input {...register("standSize")} placeholder="Stand Size (optional, e.g. 500m²)" className={inputClass(false)} />

                <div>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Tell us about your project and any questions you have *"
                    className={`${inputClass(!!errors.message)} resize-none`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                </div>

                <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} className="w-full justify-center">
                  {isSubmitting ? "Sending..." : "Send Enquiry"}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            id="map"
          >
            <SectionLabel>FIND US</SectionLabel>
            <SectionHeading className="mb-8">Display Village</SectionHeading>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#F0EDE8] border border-[#E5E0D8] mb-6">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#F0EDE8]">
                <div className="w-16 h-16 rounded-full bg-[#1C1C1C] flex items-center justify-center">
                  <MapPin size={28} className="text-[#C8A97E]" />
                </div>
                <div className="text-center">
                  <p className="font-bold text-[#1C1C1C]">MODULUX Display Village</p>
                  <p className="text-sm text-[#7A7A7A]">12 Modular Way, Bellville</p>
                  <p className="text-sm text-[#7A7A7A]">Cape Town, 7530</p>
                </div>
                <a
                  href="https://maps.google.com/?q=Bellville,Cape+Town"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-sm font-semibold text-[#C8A97E] border border-[#C8A97E] px-4 py-2 rounded-full hover:bg-[#C8A97E] hover:text-[#1C1C1C] transition-colors"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E5E0D8]">
              <h4 className="font-bold text-[#1C1C1C] mb-4">Trading Hours</h4>
              <div className="space-y-2 text-sm">
                {[
                  { day: "Monday – Friday", time: "8:00am – 5:00pm" },
                  { day: "Saturday", time: "9:00am – 3:00pm" },
                  { day: "Sunday", time: "Closed" },
                ].map(({ day, time }) => (
                  <div key={day} className="flex justify-between">
                    <span className="text-[#2D2D2D]">{day}</span>
                    <span className={time === "Closed" ? "text-red-400 font-medium" : "text-[#7A7A7A]"}>{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FAQ */}
      <section id="faq" className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <SectionLabel className="flex justify-center">FAQ</SectionLabel>
            <SectionHeading centered>Frequently Asked Questions</SectionHeading>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-[#F9F7F4] rounded-2xl border border-[#E5E0D8] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-semibold text-[#1C1C1C] pr-4">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-[#C8A97E] shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 text-sm text-[#7A7A7A] leading-relaxed border-t border-[#E5E0D8] pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

