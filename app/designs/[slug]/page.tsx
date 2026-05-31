import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { designs, getDesignBySlug, getRelatedDesigns } from "@/lib/designs";
import { getProductSchema } from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";
import DesignDetailClient from "./DesignDetailClient";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return designs.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const design = getDesignBySlug(slug);
  if (!design) return { title: "Design Not Found" };
  return {
    title: `${design.name} — ${design.price}`,
    description: `${design.tagline}. ${design.bedrooms} bed, ${design.bathrooms} bath, ${design.area}m². ${design.price}.`,
    openGraph: {
      title: design.name,
      description: design.tagline,
      images: [{ url: design.images[0].src }],
    },
  };
}

export default async function DesignDetailPage({ params }: Props) {
  const { slug } = await params;
  const design = getDesignBySlug(slug);
  if (!design) notFound();
  const related = getRelatedDesigns(design);
  return (
    <>
      <JsonLd data={getProductSchema(design)} />
      <DesignDetailClient design={design} related={related} />
    </>
  );
}

