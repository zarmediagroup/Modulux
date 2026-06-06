import type { Metadata } from "next";
import InfoPage from "@/components/layout/InfoPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Download Brochure",
  description: "Request the MODULUX modular homes brochure — Standard, Premium, and Granny Flat ranges.",
};

export default function BrochurePage() {
  return (
    <InfoPage
      title="MODULUX Brochure"
      description="Explore our full range of modular home designs."
      cta={{ label: "Request Brochure", href: "/contact" }}
    >
      <p>
        Our brochure includes floor plans, pricing guides, and finish options for every MODULUX
        design — Standard, Premium, and Granny Flat ranges.
      </p>
      <p>
        To receive a copy, contact our team at{" "}
        <a href={`mailto:${siteConfig.email}`} className="text-[#C8A97E] hover:underline">
          {siteConfig.email}
        </a>{" "}
        or visit our Display Village at {siteConfig.address.street}, {siteConfig.address.city}.
      </p>
    </InfoPage>
  );
}
