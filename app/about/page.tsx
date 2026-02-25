import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About MODULUX",
  description:
    "Learn about MODULUX — Cape Town's leading modular home manufacturer. Our story, our process, our values, and the team behind every home we build.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}

