import type { Metadata } from "next";
import Image from "next/image";
import { Wrench } from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Under Maintenance",
  description: "MODULUX is currently undergoing scheduled maintenance. We'll be back shortly.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MaintenancePage() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/maintenance-hero.jpg"
          alt="MODULUX modular home at sunrise"
          fill
          priority
          className="object-cover object-right"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/15" />
      </div>

      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 py-20">
        <div className="max-w-xl text-left text-white">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C8A97E] mb-6">
            {siteConfig.name}
          </p>

          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm text-[#C8A97E] mb-8">
            <Wrench className="w-6 h-6" aria-hidden="true" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] mb-5">
            We&apos;re currently working on maintenance
          </h1>

          <p className="text-lg text-white/75 leading-relaxed mb-10 max-w-md">
            Our website is temporarily unavailable while we make improvements.
            Thank you for your patience — we&apos;ll be back online shortly.
          </p>

          <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm px-6 py-5 max-w-sm">
            <p className="text-sm font-semibold text-white mb-1">Need to reach us?</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-[#C8A97E] hover:underline text-sm"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
