import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts, getBlogPost } from "@/lib/blog";
import { getArticleSchema } from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";
import BlogPostContent from "@/components/blog/BlogPostContent";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    keywords: [post.targetKeyword, "modular homes", "South Africa", "MODULUX"],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <div className="bg-[#F9F7F4] min-h-screen">
      <JsonLd data={getArticleSchema(post)} />
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-16">
        <BlogPostContent post={post} />
      </div>
    </div>
  );
}
