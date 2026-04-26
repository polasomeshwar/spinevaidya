"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer id="book" className="bg-forest text-white">
      {/* CTA Band */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 py-16 md:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              {nav("bookConsultation")}
            </h2>
            <p className="mt-5 text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
              {t("tagline")}
            </p>
            <a
              href={`tel:${t("phone")}`}
              className="mt-9 inline-flex items-center gap-2.5 px-8 py-4 bg-gold text-forest font-bold rounded-full hover:bg-gold-light transition-all duration-300 shadow-xl shadow-black/20 hover:scale-[1.02] active:scale-[0.98] text-base"
            >
              <Phone size={18} />
              {t("phone")}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer grid */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Clinic brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-gold" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M12 3c0 0-1.5 3-1.5 5s1.5 3 1.5 3" />
                  <path d="M12 11c0 0-2.5 3-2.5 5.5S12 21 12 21" />
                </svg>
              </div>
              <span className="font-serif text-lg font-bold">{t("clinicName")}</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">{t("tagline")}</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white/90 mb-4 text-sm uppercase tracking-wider">{t("quickLinks")}</h3>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${t("phone")}`} className="flex items-center gap-3 text-white/50 text-sm hover:text-gold transition-colors duration-200">
                  <Phone size={15} className="text-gold/70 flex-shrink-0" />
                  {t("phone")}
                </a>
              </li>
              <li>
                <a href={`mailto:${t("email")}`} className="flex items-center gap-3 text-white/50 text-sm hover:text-gold transition-colors duration-200">
                  <Mail size={15} className="text-gold/70 flex-shrink-0" />
                  {t("email")}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold text-white/90 mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
              <Clock size={14} className="text-gold/70" />
              {t("hours.title")}
            </h3>
            <ul className="space-y-2 text-white/50 text-sm">
              <li>{t("hours.weekdays")}</li>
              <li>{t("hours.sunday")}</li>
              <li className="mt-2.5 text-gold/80 italic text-xs tracking-wide">{t("hours.appointmentOnly")}</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-semibold text-white/90 mb-4 text-sm uppercase tracking-wider">{t("followUs")}</h3>
            <div className="flex items-center gap-4 mt-2">
              <a href="https://www.instagram.com/the_spine_vaidya/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 border border-white/8 flex items-center justify-center text-white/50 hover:bg-gold hover:text-forest hover:border-gold transition-all duration-300">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">{t("copyright")}</p>
          <p className="text-white/20 text-xs">{t("madeWith")}</p>
        </div>
      </div>
    </footer>
  );
}
