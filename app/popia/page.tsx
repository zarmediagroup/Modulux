import type { Metadata } from "next";
import InfoPage from "@/components/layout/InfoPage";
import { siteConfig } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "POPIA Compliance",
  description: "MODULUX compliance with the Protection of Personal Information Act (POPIA).",
  path: "/popia",
});

export default function PopiaPage() {
  return (
    <InfoPage
      title="POPIA Compliance"
      description="Our commitment to the Protection of Personal Information Act."
    >
      <p>
        MODULUX complies with the Protection of Personal Information Act 4 of 2013 (POPIA). We
        process personal information lawfully, for a specific purpose, and only to the extent
        necessary to respond to your enquiry or provide our services.
      </p>
      <h2 className="text-xl font-bold text-[#1C1C1C] pt-4">Your rights</h2>
      <p>
        You have the right to request access to, correction of, or deletion of your personal
        information. You may also withdraw consent for marketing communications at any time.
      </p>
      <h2 className="text-xl font-bold text-[#1C1C1C] pt-4">Information officer</h2>
      <p>
        For POPIA-related requests, contact our information officer at{" "}
        <a href={`mailto:${siteConfig.email}`} className="text-[#C8A97E] hover:underline">
          {siteConfig.email}
        </a>
        .
      </p>
    </InfoPage>
  );
}
