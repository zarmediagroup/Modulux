import type { Metadata } from "next";
import InfoPage from "@/components/layout/InfoPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the MODULUX team — careers in modular home manufacturing, sales, and design in Cape Town.",
};

export default function CareersPage() {
  return (
    <InfoPage
      title="Careers at MODULUX"
      description="Build the future of housing with us."
      cta={{ label: "Send Your CV", href: `mailto:${siteConfig.email}?subject=MODULUX Careers Enquiry` }}
    >
      <p>
        MODULUX is growing. We&apos;re always interested in hearing from talented people in
        manufacturing, design, sales, project management, and site installation across the
        Western Cape.
      </p>
      <h2 className="text-xl font-bold text-[#1C1C1C] pt-4">How to apply</h2>
      <p>
        Send your CV and a brief introduction to{" "}
        <a href={`mailto:${siteConfig.email}`} className="text-[#C8A97E] hover:underline">
          {siteConfig.email}
        </a>
        . We&apos;ll be in touch when a suitable role opens.
      </p>
    </InfoPage>
  );
}
