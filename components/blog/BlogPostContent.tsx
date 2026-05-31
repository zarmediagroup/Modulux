import Link from "next/link";
import type { BlogPost, BlogSection } from "@/lib/blog";

function renderSection(section: BlogSection, index: number) {
  switch (section.type) {
    case "h2":
      return (
        <h2 key={index} className="text-2xl font-bold text-[#1C1C1C] mt-10 mb-4">
          {section.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={index} className="text-xl font-semibold text-[#1C1C1C] mt-8 mb-3">
          {section.text}
        </h3>
      );
    case "ul":
      return (
        <ul key={index} className="list-disc pl-6 space-y-2 my-4 text-[#2D2D2D] leading-relaxed">
          {section.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    default:
      return (
        <p key={index} className="text-[#2D2D2D] leading-relaxed my-4">
          {section.text}
        </p>
      );
  }
}

export default function BlogPostContent({ post }: { post: BlogPost }) {
  return (
    <article>
      <header className="mb-10">
        <Link
          href="/blog"
          className="text-[#C8A97E] text-xs font-semibold tracking-[0.2em] uppercase hover:underline"
        >
          ← Back to Blog
        </Link>
        <p className="text-[#7A7A7A] text-sm mt-4">
          {new Date(post.publishedAt).toLocaleDateString("en-ZA", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          · {post.readTime}
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1C1C1C] tracking-tight mt-3">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-[#7A7A7A] leading-relaxed">{post.excerpt}</p>
      </header>

      <div className="prose-modulux">{post.sections.map(renderSection)}</div>

      <div className="mt-12 p-8 bg-[#1C1C1C] rounded-2xl text-center">
        <h2 className="text-2xl font-bold text-white mb-3">Ready to explore modular living?</h2>
        <p className="text-white/60 mb-6">
          Browse our designs or visit the Display Village in Bellville, Cape Town.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/designs"
            className="bg-[#C8A97E] text-[#1C1C1C] font-semibold px-6 py-3 rounded-full hover:bg-[#b89468] transition-colors"
          >
            View Designs
          </Link>
          <Link
            href="/contact"
            className="border border-white/30 text-white font-semibold px-6 py-3 rounded-full hover:border-[#C8A97E] hover:text-[#C8A97E] transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </article>
  );
}
