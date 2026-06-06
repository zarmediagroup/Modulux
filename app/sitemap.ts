import type { MetadataRoute } from "next";
import { designs } from "@/lib/designs";
import { blogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/designs`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/commercial`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/display-village`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/brochure`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/financing`, changeFrequency: "monthly", priority: 0.5 },
  ];

  const designPages: MetadataRoute.Sitemap = designs.map((d) => ({
    url: `${base}/designs/${d.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...designPages, ...blogPages];
}
