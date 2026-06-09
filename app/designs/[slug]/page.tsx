import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { designs, getDesignBySlug, getRelatedDesigns } from "@/lib/designs";
import { getBreadcrumbSchema, getProductSchema } from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";
import DesignDetailClient from "./DesignDetailClient";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return designs.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const design = getDesignBySlug(slug);
  if (!design) return { title: "Design Not Found" };

  return pageMetadata({
    title: `${design.name} — ${design.price}`,
    description: `${design.tagline}. ${design.bedrooms} bed, ${design.bathrooms} bath, ${design.area}m². ${design.price}. NHBRC registered modular home.`,
    path: `/designs/${design.slug}`,
    keywords: [
      design.name,
      design.category,
      "modular home South Africa",
      "MODULUX",
    ],
    ogImage: design.cardImage,
  });
}

export default async function DesignDetailPage({ params }: Props) {
  const { slug } = await params;
  const design = getDesignBySlug(slug);
  if (!design) notFound();
  const related = getRelatedDesigns(design);

  return (
    <>
      <JsonLd
        data={[
          getProductSchema(design),
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Designs", path: "/designs" },
            { name: design.name, path: `/designs/${design.slug}` },
          ]),
        ]}
      />
      <DesignDetailClient design={design} related={related} />
    </>
  );
}
