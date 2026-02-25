import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the MODULUX team. Visit our Display Village in Bellville, Cape Town, or send us an enquiry online.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}

