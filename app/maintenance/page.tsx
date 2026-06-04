import type { Metadata } from "next";
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
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center">
      <div className="max-w-lg w-full">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-secondary mb-6">
          {siteConfig.name}
        </p>

        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/15 text-secondary mb-8">
          <Wrench className="w-7 h-7" aria-hidden="true" />
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary mb-4">
          We&apos;re currently working on maintenance
        </h1>

        <p className="text-muted text-lg leading-relaxed mb-10">
          Our website is temporarily unavailable while we make improvements.
          Thank you for your patience — we&apos;ll be back online shortly.
        </p>

        <div className="rounded-2xl border border-border bg-surface px-6 py-5 text-left">
          <p className="text-sm font-semibold text-primary mb-1">Need to reach us?</p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-secondary hover:underline text-sm"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </div>
  );
}
