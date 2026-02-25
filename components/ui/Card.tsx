interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`
        bg-white rounded-2xl overflow-hidden
        shadow-[0_2px_20px_rgba(0,0,0,0.06)]
        ${hover ? "transition-transform duration-300 hover:-translate-y-1" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;

