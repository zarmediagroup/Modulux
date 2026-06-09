import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type PageMetaOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogType?: "website" | "article";
  ogImage?: string;
  publishedTime?: string;
};

export function pageMetadata({
  title,
  description,
  path,
  keywords,
  ogType = "website",
  ogImage = "/images/hero.png",
  publishedTime,
}: PageMetaOptions): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}${canonicalPath}`,
      type: ogType,
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      images: [{ url: ogImage, alt: `${siteConfig.name} — ${title}` }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
