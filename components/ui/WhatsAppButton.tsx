"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20MODULUX%2C%20I%27m%20interested%20in%20your%20homes`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with MODULUX on WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        bg-[#25D366] text-white
        w-14 h-14 rounded-full
        flex items-center justify-center
        shadow-lg hover:shadow-xl
        hover:scale-110 transition-all duration-200
      "
    >
      <MessageCircle size={26} fill="white" />
    </a>
  );
}

export default WhatsAppButton;

