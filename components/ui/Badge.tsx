import type { DesignCategory, HomeDesign } from "@/lib/designs";

interface BadgeProps {
  category: DesignCategory;
  label: string;
  className?: string;
}

const categoryStyles: Record<DesignCategory, string> = {
  Folding: "bg-[#C8A97E]/20 text-[#8B6914] border border-[#C8A97E]/40",
  Container: "bg-slate-100 text-slate-700 border border-slate-200",
  "Space Capsule": "bg-[#1C1C1C]/10 text-[#1C1C1C] border border-[#1C1C1C]/20",
};

export function Badge({ category, label, className = "" }: BadgeProps) {
  return (
    <span
      className={`
        inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase rounded-full
        ${categoryStyles[category]}
        ${className}
      `}
    >
      {label}
    </span>
  );
}

export function DesignBadge({ design, className }: { design: HomeDesign; className?: string }) {
  const label =
    design.series === "Folding" ? `${design.badge} Folding` : design.badge;
  return <Badge category={design.category} label={label} className={className} />;
}

export default Badge;
