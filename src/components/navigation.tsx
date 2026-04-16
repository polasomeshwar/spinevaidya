"use client";

import { useTranslations } from "next-intl";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LanguageToggle } from "./language-toggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { key: "specializations", href: "#specializations" },
  { key: "process", href: "#process" },
  { key: "testimonials", href: "#testimonials" },
  { key: "about", href: "#about" },
  { key: "faq", href: "#faq" },
] as const;

export function Navigation() {
  const t = useTranslations("nav");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 50));

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/80 backdrop-blur-2xl shadow-sm border-b border-sage/10"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex h-[68px] items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-sage to-forest flex items-center justify-center shadow-md shadow-sage/20">
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M12 3c0 0-1.5 3-1.5 5s1.5 3 1.5 3" />
                  <path d="M12 3c0 0 1.5 3 1.5 5s-1.5 3-1.5 3" />
                  <path d="M12 11c0 0-2.5 3-2.5 5.5S12 21 12 21" />
                  <path d="M12 11c0 0 2.5 3 2.5 5.5S12 21 12 21" />
                </svg>
              </div>
              <span className="font-serif text-[22px] font-bold text-forest tracking-tight group-hover:text-sage transition-colors duration-300">
                {t("logo")}
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map(({ key, href }) => (
                <a
                  key={key}
                  href={href}
                  className="text-[13px] font-medium tracking-wide uppercase text-charcoal-light/80 hover:text-sage transition-colors duration-200"
                >
                  {t(key)}
                </a>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <LanguageToggle />
              <a
                href="#book"
                className="hidden sm:inline-flex items-center px-5 py-2 text-sm font-semibold text-white bg-sage rounded-full hover:bg-sage-dark transition-all duration-300 shadow-lg shadow-sage/25 hover:shadow-sage/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                {t("bookConsultation")}
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg text-charcoal hover:bg-sage/10 transition-colors cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-charcoal/20 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed top-[68px] inset-x-4 z-50 lg:hidden bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl shadow-charcoal/10 border border-sage/10 overflow-hidden">
            <div className="p-5 flex flex-col gap-1">
              {navLinks.map(({ key, href }) => (
                <a
                  key={key}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-xl text-[15px] font-medium text-charcoal hover:bg-sage/5 hover:text-sage transition-colors"
                >
                  {t(key)}
                </a>
              ))}
              <div className="mt-3 pt-3 border-t border-sage/10">
                <a
                  href="#book"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center px-5 py-3 text-sm font-semibold text-white bg-sage rounded-xl hover:bg-sage-dark transition-all"
                >
                  {t("bookConsultation")}
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
