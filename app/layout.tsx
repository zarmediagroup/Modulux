import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CookieBanner from "@/components/ui/CookieBanner";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import JsonLd from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";
import { getLocalBusinessSchema, getOrganizationSchema } from "@/lib/schema";
import { isMaintenanceMode } from "@/lib/maintenance";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "MODULUX — Modular Homes Cape Town | The Modern Way of Housing",
    template: "%s | MODULUX",
  },
  description: siteConfig.description,
  keywords: [
    "modular homes South Africa",
    "modular homes Cape Town",
    "prefab homes South Africa",
    "granny flat Cape Town",
    "NHBRC modular homes",
    "affordable modular housing",
    "MODULUX",
  ],
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MODULUX — Modular Homes Cape Town",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MODULUX — Modular Homes Cape Town",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: siteConfig.googleSiteVerification,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const showSiteChrome =
    !isMaintenanceMode() || headersList.get("x-maintenance") !== "1";

  return (
    <html lang="en-ZA" className={inter.variable}>
      <body>
        {showSiteChrome && (
          <JsonLd data={[getOrganizationSchema(), getLocalBusinessSchema()]} />
        )}
        {showSiteChrome && <Header />}
        <main>{children}</main>
        {showSiteChrome && <Footer />}
        {showSiteChrome && <WhatsAppButton />}
        {showSiteChrome && <CookieBanner />}
        {showSiteChrome && <GoogleAnalytics />}
      </body>
    </html>
  );
}
