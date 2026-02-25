import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return inputs.filter(Boolean).join(" ");
}

export function formatPrice(value: number): string {
  return `R${(value / 1000000).toFixed(1)}M`;
}

