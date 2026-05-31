import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Modular Homes Blog — Guides & Insights",
  description:
    "Expert guides on modular home costs, granny flat regulations, NHBRC compliance, and build timelines in South Africa.",
};

export default function BlogPage() {
  return (
    <div className="bg-[#F9F7F4] min-h-screen">
      <div className="bg-[#1C1C1C] pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#C8A97E] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Insights & Guides
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            MODULUX Blog
          </h1>
          <p className="mt-3 text-white/60 text-lg">
            Practical guides for modular home buyers in South Africa.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-shadow group"
            >
              <p className="text-xs text-[#7A7A7A] mb-2">
                {new Date(post.publishedAt).toLocaleDateString("en-ZA", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                · {post.readTime}
              </p>
              <h2 className="text-2xl font-bold text-[#1C1C1C] group-hover:text-[#C8A97E] transition-colors">
                {post.title}
              </h2>
              <p className="mt-2 text-[#7A7A7A] leading-relaxed">{post.excerpt}</p>
              <span className="inline-block mt-4 text-sm font-semibold text-[#C8A97E]">
                Read article →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
