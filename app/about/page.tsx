import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About MODULUX",
  description:
    "Learn about MODULUX — Cape Town's leading modular home manufacturer. Our story, our process, our values, and the team behind every home we build.",
  path: "/about",
  keywords: [
    "MODULUX about",
    "modular home manufacturer Cape Town",
    "prefab homes Western Cape",
    "NHBRC modular homes",
  ],
});

export default function AboutPage() {
  return <AboutPageClient />;
}
