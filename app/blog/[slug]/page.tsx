import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts, getBlogPost } from "@/lib/blog";
import { getArticleSchema, getBreadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";
import BlogPostContent from "@/components/blog/BlogPostContent";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Post Not Found" };

  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: [post.targetKeyword, "modular homes", "South Africa", "MODULUX"],
    ogType: "article",
    publishedTime: post.publishedAt,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <div className="bg-[#F9F7F4] min-h-screen">
      <JsonLd
        data={[
          getArticleSchema(post),
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-16">
        <BlogPostContent post={post} />
      </div>
    </div>
  );
}
