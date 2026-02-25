type Category = "Standard" | "Premium" | "Granny Flat";

interface BadgeProps {
  category: Category;
  className?: string;
}

const categoryStyles: Record<Category, string> = {
  Standard: "bg-slate-100 text-slate-700 border border-slate-200",
  Premium: "bg-[#C8A97E]/20 text-[#8B6914] border border-[#C8A97E]/40",
  "Granny Flat": "bg-[#4A6741]/15 text-[#2d4a28] border border-[#4A6741]/30",
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
      {category}
    </span>
  );
}

export default Badge;

