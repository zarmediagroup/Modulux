"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Download } from "lucide-react";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

const navLinks = [
  {
    label: "Designs",
    href: "/designs",
    dropdown: [
      { label: "10ft Folding Home", href: "/designs/10ft-double-wing-folding-home" },
      { label: "20ft Folding Home", href: "/designs/20ft-double-wing-folding-home" },
      { label: "30ft Folding Home", href: "/designs/30ft-double-wing-folding-home" },
      { label: "40ft Folding Home", href: "/designs/40ft-double-wing-folding-home" },
      { label: "View All", href: "/designs" },
    ],
  },
  { label: "Displays", href: "/display-village" },
  {
    label: "Discover",
    href: "/about",
    dropdown: [
      { label: "About Us", href: "/about" },
      { label: "Our Process", href: "/about#process" },
    ],
  },
  { label: "Commercial", href: "/commercial" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const headerBg = isHome && !scrolled ? "bg-transparent" : "bg-white/95 backdrop-blur-sm shadow-sm";
  const textColor = isHome && !scrolled ? "text-white" : "text-[#1C1C1C]";
  const logoColor = isHome && !scrolled ? "text-white" : "text-[#1C1C1C]";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className={`text-2xl font-extrabold tracking-tight transition-colors duration-300 ${logoColor}`}>
              MODULUX
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`
                      flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full
                      transition-colors duration-200
                      ${textColor}
                      ${isHome && !scrolled ? "hover:bg-white/10" : "hover:bg-[#F9F7F4]"}
                    `}
                  >
                    {link.label}
                    {link.dropdown && <ChevronDown size={14} />}
                  </Link>

                  {/* Dropdown */}
                  {link.dropdown && (
                    <AnimatePresence>
                      {openDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-lg border border-[#E5E0D8] py-2 z-50"
                        >
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="block px-4 py-2.5 text-sm text-[#2D2D2D] hover:bg-[#F9F7F4] hover:text-[#C8A97E] transition-colors duration-150"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/brochure"
                className={`text-sm font-medium flex items-center gap-1.5 transition-colors duration-200 ${textColor} ${isHome && !scrolled ? "hover:text-white/70" : "hover:text-[#C8A97E]"}`}
              >
                <Download size={14} />
                Brochure
              </Link>
              <Link href="/contact">
                <Button variant="primary" size="sm">
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-full transition-colors ${textColor}`}
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#1C1C1C] flex flex-col lg:hidden"
          >
            <div className="flex items-center justify-between px-6 h-20 border-b border-white/10">
              <span className="text-2xl font-extrabold tracking-tight text-white">MODULUX</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-white p-2"
                aria-label="Close navigation"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-6 py-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                  className="border-b border-white/10"
                >
                  <Link
                    href={link.href}
                    className="block py-5 text-2xl font-bold text-white hover:text-[#C8A97E] transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <div className="pb-3 space-y-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block pl-4 py-1.5 text-white/60 hover:text-[#C8A97E] transition-colors text-base"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Mobile bottom CTA */}
            <div className="px-6 py-8 border-t border-white/10 space-y-4">
              <p className="text-white/50 text-sm">{siteConfig.phoneDisplay}</p>
              <p className="text-white/50 text-sm">{siteConfig.email}</p>
              <Link href="/contact" className="block">
                <Button variant="primary" size="lg" className="w-full justify-center">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

