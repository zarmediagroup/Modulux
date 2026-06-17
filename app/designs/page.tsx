import { Suspense } from "react";
import type { Metadata } from "next";
import DesignsPageClient from "./DesignsPageClient";
import JsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getDesignsItemListSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Modular & Folding Home Designs",
  description:
    "Browse MODULUX folding homes, container series, and space capsules. Filter by series, price, and size. From R25,000 with nationwide delivery.",
  path: "/designs",
  keywords: [
    "folding home designs South Africa",
    "double-wing folding house",
    "10ft folding home",
    "20ft folding home",
    "modular home prices Cape Town",
  ],
});

export default function DesignsPage() {
  return (
    <>
      <JsonLd
        data={[
          getDesignsItemListSchema(),
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Designs", path: "/designs" },
          ]),
        ]}
      />
      <Suspense>
        <DesignsPageClient />
      </Suspense>
    </>
  );
}
