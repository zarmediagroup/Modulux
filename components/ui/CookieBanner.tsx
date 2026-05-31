"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookies-accepted", "true");
    window.dispatchEvent(new Event("cookies-accepted"));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#1C1C1C] text-white px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
      <p className="text-sm text-white/80 text-center sm:text-left">
        We use cookies to improve your experience on our site.{" "}
        <Link href="/privacy" className="underline text-[#C8A97E] hover:text-[#b89468]">
          Learn More
        </Link>
      </p>
      <div className="flex gap-3 shrink-0">
        <button
          onClick={accept}
          className="bg-[#C8A97E] text-[#1C1C1C] text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#b89468] transition-colors"
        >
          Accept
        </button>
        <button
          onClick={() => setVisible(false)}
          className="text-white/50 text-sm hover:text-white transition-colors"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}

export default CookieBanner;

