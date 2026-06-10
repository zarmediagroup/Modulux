import type { DesignCategory } from "@/lib/designs";

interface BadgeProps {
  category: DesignCategory;
  className?: string;
}

const categoryStyles: Record<DesignCategory, string> = {
  "10ft": "bg-[#4A6741]/15 text-[#2d4a28] border border-[#4A6741]/30",
  "20ft": "bg-slate-100 text-slate-700 border border-slate-200",
  "30ft": "bg-[#C8A97E]/20 text-[#8B6914] border border-[#C8A97E]/40",
  "40ft": "bg-[#1C1C1C]/10 text-[#1C1C1C] border border-[#1C1C1C]/20",
};

export function Badge({ category, className = "" }: BadgeProps) {
  return (
    <span
      className={`
        inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase rounded-full
        ${categoryStyles[category]}
        ${className}
      `}
    >
      {category} Folding
    </span>
  );
}

export default Badge;
