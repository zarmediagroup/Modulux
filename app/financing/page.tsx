import type { Metadata } from "next";
import InfoPage from "@/components/layout/InfoPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Financing Options",
  description: "Finance your MODULUX modular home — bond, personal loan, and granny flat investment options.",
  path: "/financing",
  keywords: [
    "modular home finance South Africa",
    "bond for prefab home",
    "granny flat investment finance",
  ],
});

export default function FinancingPage() {
  return (
    <InfoPage
      title="Financing Options"
      description="Flexible ways to finance your modular home."
      cta={{ label: "Get a Quote", href: "/contact" }}
    >
      <p>
        MODULUX modular homes may qualify for home loan finance through major South African
        banks, subject to approval. Granny flat investments may also qualify for rental income
        financing.
      </p>
      <h2 className="text-xl font-bold text-[#1C1C1C] pt-4">What you&apos;ll need</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Proof of income and bank statements</li>
        <li>MODULUX quotation or signed contract</li>
        <li>Approved building plans and NHBRC enrolment</li>
        <li>Proof of land ownership or long-term lease</li>
      </ul>
      <p className="pt-2">
        Our team can provide the documentation your bank requires. Contact us to discuss your
        project and we&apos;ll guide you through the process.
      </p>
    </InfoPage>
  );
}
