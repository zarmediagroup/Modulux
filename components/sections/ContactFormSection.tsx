"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import { productInterests } from "@/lib/contactOptions";

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
const interests = productInterests;

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1000)); // Simulate API call
    console.log(data);
    setSubmitted(true);
    reset();
  };

  const inputClass = (hasError: boolean) => `
    w-full px-4 py-3 rounded-xl border text-sm text-[#2D2D2D] bg-white
    placeholder:text-[#AAAAAA] outline-none transition-colors duration-200
    ${hasError
      ? "border-red-300 focus:border-red-400"
      : "border-[#E5E0D8] focus:border-[#C8A97E]"
    }
  `;

  return (
    <section id="get-in-touch" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>GET IN TOUCH</SectionLabel>
            <SectionHeading className="mb-8">Start Your Journey</SectionHeading>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#4A6741]/10 border border-[#4A6741]/20 rounded-2xl p-10 text-center"
              >
                <CheckCircle size={48} className="text-[#4A6741] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#1C1C1C] mb-2">Enquiry Received!</h3>
                <p className="text-[#7A7A7A]">
                  Thank you for reaching out. One of our team members will be in touch within 24 hours.
                </p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-sm text-[#C8A97E] underline">
                  Send another enquiry
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

                <div>
                  <input {...register("standSize")} placeholder="Stand Size (optional)" className={inputClass(false)} />
                </div>

                <div>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Tell us about your project *"
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

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center gap-8"
          >
            <div>
              <h3 className="text-xl font-bold text-[#1C1C1C] mb-4">Prefer to talk?</h3>
              <div className="space-y-4">
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#F9F7F4] flex items-center justify-center">
                    <Phone size={18} className="text-[#C8A97E]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#7A7A7A] uppercase tracking-wider">Phone</p>
                    <p className="font-semibold text-[#1C1C1C] group-hover:text-[#C8A97E] transition-colors">{siteConfig.phoneDisplay}</p>
                  </div>
                </a>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#F9F7F4] flex items-center justify-center">
                    <Mail size={18} className="text-[#C8A97E]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#7A7A7A] uppercase tracking-wider">Email</p>
                    <p className="font-semibold text-[#1C1C1C] group-hover:text-[#C8A97E] transition-colors">{siteConfig.email}</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F9F7F4] flex items-center justify-center">
                    <MapPin size={18} className="text-[#C8A97E]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#7A7A7A] uppercase tracking-wider">Visit Us</p>
                    <p className="font-semibold text-[#1C1C1C]">12 Modular Way, Bellville</p>
                    <p className="text-sm text-[#7A7A7A]">Cape Town, 7530</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F9F7F4] rounded-2xl p-6 border border-[#E5E0D8]">
              <h4 className="font-bold text-[#1C1C1C] mb-3">Office Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-[#2D2D2D]">Mon – Fri</span><span className="text-[#7A7A7A]">8:00am – 5:00pm</span></div>
                <div className="flex justify-between"><span className="text-[#2D2D2D]">Saturday</span><span className="text-[#7A7A7A]">9:00am – 3:00pm</span></div>
                <div className="flex justify-between"><span className="text-[#2D2D2D]">Sunday</span><span className="text-red-400">Closed</span></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

