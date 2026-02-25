interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}

export function SectionLabel({ children, light = false, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`
        text-xs font-semibold tracking-[0.18em] uppercase mb-3
        ${light ? "text-[#C8A97E]" : "text-[#4A6741]"}
        ${className}
      `}
    >
      {children}
    </p>
  );
}

export default SectionLabel;

