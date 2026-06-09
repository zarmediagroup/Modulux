import type { Metadata } from "next";
import InfoPage from "@/components/layout/InfoPage";
import { siteConfig } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "MODULUX privacy policy — how we collect, use, and protect your personal information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <InfoPage
      title="Privacy Policy"
      description="How MODULUX handles your personal information."
    >
      <p>
        MODULUX (&quot;we&quot;, &quot;us&quot;) is committed to protecting your privacy. This policy
        explains how we collect and use personal information when you visit{" "}
        {siteConfig.url} or contact us about our modular homes.
      </p>
      <h2 className="text-xl font-bold text-[#1C1C1C] pt-4">Information we collect</h2>
      <p>
        When you submit an enquiry form, we collect your name, email address, phone number,
        province, and project details. We may also collect analytics data via cookies if you
        accept our cookie banner.
      </p>
      <h2 className="text-xl font-bold text-[#1C1C1C] pt-4">How we use your information</h2>
      <p>
        We use your information to respond to enquiries, provide quotes, schedule Display Village
        visits, and improve our website. We do not sell your personal information to third parties.
      </p>
      <h2 className="text-xl font-bold text-[#1C1C1C] pt-4">Contact</h2>
      <p>
        For privacy-related questions, email us at{" "}
        <a href={`mailto:${siteConfig.email}`} className="text-[#C8A97E] hover:underline">
          {siteConfig.email}
        </a>
        .
      </p>
    </InfoPage>
  );
}
