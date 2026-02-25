interface SectionHeadingProps {
  children: React.ReactNode;
  sub?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  children,
  sub,
  centered = false,
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      <h2
        className={`
          text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight
          ${light ? "text-white" : "text-[#1C1C1C]"}
        `}
      >
        {children}
      </h2>
      {sub && (
        <p
          className={`
            mt-4 text-lg leading-relaxed max-w-2xl
            ${centered ? "mx-auto" : ""}
            ${light ? "text-white/70" : "text-[#7A7A7A]"}
          `}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;

