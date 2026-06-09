import type { Metadata } from "next";
import DesignsPageClient from "./DesignsPageClient";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Modular Home Designs South Africa",
  description:
    "Browse MODULUX Standard, Premium, and Granny Flat modular home designs. Filter by bedrooms, price, and size. From R620k with nationwide delivery.",
  path: "/designs",
  keywords: [
    "modular home designs South Africa",
    "prefab house plans",
    "granny flat designs",
    "modular home prices",
  ],
});

export default function DesignsPage() {
  return <DesignsPageClient />;
}
