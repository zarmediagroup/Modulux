"use client";

import { forwardRef } from "react";
import { LucideIcon } from "lucide-react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  iconLeft?: LucideIcon;
  iconRight?: LucideIcon;
  asChild?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[#C8A97E] text-[#1C1C1C] hover:bg-[#b89468] border border-[#C8A97E] hover:border-[#b89468]",
  secondary:
    "bg-[#1C1C1C] text-white hover:bg-[#2d2d2d] border border-[#1C1C1C]",
  outline:
    "bg-transparent text-[#1C1C1C] border border-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-white",
  ghost:
    "bg-transparent text-[#1C1C1C] border border-transparent hover:border-[#E5E0D8] hover:bg-[#F9F7F4]",
};

const outlineWhiteClass =
  "bg-transparent text-white border border-white hover:bg-white hover:text-[#1C1C1C]";

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      iconLeft: IconLeft,
      iconRight: IconRight,
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={`
          inline-flex items-center justify-center gap-2
          font-medium tracking-wide rounded-full
          transition-all duration-200 ease-out
          hover:scale-[1.02] active:scale-[0.98]
          cursor-pointer select-none
          ${variantClasses[variant]}
          ${sizeClasses[size]}
          ${className}
        `}
        {...props}
      >
        {IconLeft && <IconLeft size={size === "sm" ? 14 : size === "lg" ? 18 : 16} />}
        {children}
        {IconRight && <IconRight size={size === "sm" ? 14 : size === "lg" ? 18 : 16} />}
      </button>
    );
  }
);

Button.displayName = "Button";

// White outline variant for use on dark backgrounds
export const ButtonOutlineWhite = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size = "md", iconLeft: IconLeft, iconRight: IconRight, className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`
          inline-flex items-center justify-center gap-2
          font-medium tracking-wide rounded-full
          transition-all duration-200 ease-out
          hover:scale-[1.02] active:scale-[0.98]
          cursor-pointer select-none
          ${outlineWhiteClass}
          ${sizeClasses[size]}
          ${className}
        `}
        {...props}
      >
        {IconLeft && <IconLeft size={size === "sm" ? 14 : size === "lg" ? 18 : 16} />}
        {children}
        {IconRight && <IconRight size={size === "sm" ? 14 : size === "lg" ? 18 : 16} />}
      </button>
    );
  }
);

ButtonOutlineWhite.displayName = "ButtonOutlineWhite";

export default Button;

