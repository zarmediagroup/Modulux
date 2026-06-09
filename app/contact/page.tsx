import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";
import JsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { getFAQPageSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with the MODULUX team. Visit our Display Village in Bellville, Cape Town, or send us an enquiry online.",
  path: "/contact",
  keywords: [
    "MODULUX contact",
    "modular homes Cape Town showroom",
    "Display Village Bellville",
  ],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={getFAQPageSchema()} />
      <ContactPageClient />
    </>
  );
}

