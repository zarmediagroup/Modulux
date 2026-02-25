import type { Metadata } from "next";
import CommercialPageClient from "./CommercialPageClient";

export const metadata: Metadata = {
  title: "Commercial Solutions",
  description:
    "MODULUX designs and delivers modular commercial buildings — offices, clinics, schools, and workforce accommodation — anywhere in South Africa. Fast, cost-effective, and built to last.",
};

export default function CommercialPage() {
  return <CommercialPageClient />;
}

