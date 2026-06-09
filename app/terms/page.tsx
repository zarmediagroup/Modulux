import type { Metadata } from "next";
import InfoPage from "@/components/layout/InfoPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use",
  description: "Terms and conditions for using the MODULUX website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <InfoPage
      title="Terms of Use"
      description="Terms and conditions for using this website."
    >
      <p>
        By accessing the MODULUX website, you agree to these terms. All content on this site —
        including designs, pricing, images, and specifications — is for general information only
        and may change without notice.
      </p>
      <h2 className="text-xl font-bold text-[#1C1C1C] pt-4">Pricing and designs</h2>
      <p>
        Prices shown are indicative starting prices and exclude site works, transport beyond
        standard delivery zones, and municipal fees. Final pricing is confirmed in a written
        quotation.
      </p>
      <h2 className="text-xl font-bold text-[#1C1C1C] pt-4">Intellectual property</h2>
      <p>
        All design names, images, and content on this website are the property of MODULUX and
        may not be reproduced without written permission.
      </p>
    </InfoPage>
  );
}
