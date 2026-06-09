import type { Metadata } from "next";
import CommercialPageClient from "./CommercialPageClient";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Commercial Solutions",
  description:
    "MODULUX designs and delivers modular commercial buildings — offices, clinics, schools, and workforce accommodation — anywhere in South Africa. Fast, cost-effective, and built to last.",
  path: "/commercial",
  keywords: [
    "modular commercial buildings South Africa",
    "prefab office Cape Town",
    "modular clinic buildings",
    "workforce accommodation modular",
  ],
});

export default function CommercialPage() {
  return <CommercialPageClient />;
}
