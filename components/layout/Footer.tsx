"use client";

import Link from "next/link";
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site";

const footerLinks = {
  Designs: [
    { label: "Folding Homes", href: "/designs?series=Folding" },
    { label: "Container Series", href: "/designs?series=Container" },
    { label: "Space Capsule", href: "/designs?series=Space+Capsule" },
    { label: "View All", href: "/designs" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Process", href: "/about#process" },
    { label: "Display Village", href: "/display-village" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
  ],
  Support: [
    { label: "Contact Us", href: "/contact" },
    { label: "FAQs", href: "/contact#faq" },
    { label: "Download Brochure", href: "/brochure" },
    { label: "Financing Options", href: "/financing" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "POPIA Compliance", href: "/popia" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-3xl font-extrabold tracking-tight text-white">
              MODULUX
            </Link>
            <p className="mt-3 text-white/60 text-sm leading-relaxed max-w-xs">
              The Modern Way of Housing. Precision-engineered modular homes built in Cape Town and delivered anywhere in South Africa.
            </p>
            <div className="mt-6 space-y-2">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 text-white/60 hover:text-[#C8A97E] text-sm transition-colors">
                <Phone size={14} /> {siteConfig.phoneDisplay}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-white/60 hover:text-[#C8A97E] text-sm transition-colors">
                <Mail size={14} /> {siteConfig.email}
              </a>
              <span className="flex items-center gap-2 text-white/60 text-sm">
                <MapPin size={14} /> 12 Modular Way, Bellville, Cape Town, 7530
              </span>
            </div>
            {/* Newsletter */}
            <div className="mt-8">
              <p className="text-sm font-semibold text-white mb-3">Stay updated on new designs</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#C8A97E] transition-colors"
                />
                <button
                  type="submit"
                  className="bg-[#C8A97E] text-[#1C1C1C] font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-[#b89468] transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-sm font-semibold tracking-widest uppercase text-white mb-4">{title}</h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/60 hover:text-[#C8A97E] transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white/40 text-xs text-center sm:text-left">
            <p>© 2025 MODULUX (Pty) Ltd. All rights reserved.</p>
            <p className="mt-0.5">NHBRC Registration No: 123456/2015</p>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white/40 hover:text-[#C8A97E] transition-colors duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

