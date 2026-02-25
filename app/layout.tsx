import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CookieBanner from "@/components/ui/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MODULUX — The Modern Way of Housing",
    template: "%s | MODULUX",
  },
  description:
    "MODULUX builds precision-engineered modular homes in Cape Town, South Africa. Beautifully designed, delivered fully finished, anywhere in South Africa.",
  keywords: [
    "modular homes",
    "ready-made homes",
    "South Africa",
    "Cape Town",
    "affordable housing",
    "MODULUX",
  ],
  openGraph: {
    title: "MODULUX — The Modern Way of Housing",
    description:
      "Beautifully engineered modular homes, delivered to your site and ready to live in.",
    url: "https://modulux.co.za",
    siteName: "MODULUX",
    locale: "en_ZA",
    type: "website",
  },
  metadataBase: new URL("https://modulux.co.za"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
