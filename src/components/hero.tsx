"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { SpineBackground } from "./spine-background";
import { HumanSpine } from "./human-spine";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <SpineBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-12 pt-32 pb-24 md:pt-48 md:pb-32 flex flex-col md:flex-row items-center md:items-start gap-12 lg:gap-24 relative">
        {/* Abstract watermark graphic */}
        <HumanSpine />

        <div className="md:w-1/2 lg:w-[55%] text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            {/* Minimal line trust styling instead of a pill badge */}
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-8 bg-sage/40"></span>
              <span className="text-[0.8rem] font-semibold tracking-widest uppercase text-sage">{t("badge")}</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[5rem] font-medium text-forest leading-[1.05] tracking-tight">
              {t("headline")}
            </h1>

            {/* Subtext */}
            <p className="mt-8 text-lg md:text-xl text-charcoal-light font-light leading-relaxed max-w-xl">
              {t("subtext")}
            </p>

            {/* CTAs */}
            <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start justify-start gap-5 w-full">
              <a
                href="#book"
                className="group flex items-center justify-center gap-2.5 px-8 py-4 text-sm tracking-wide font-medium text-white bg-forest hover:bg-forest/90 transition-colors duration-300 w-full sm:w-auto"
              >
                {t("cta")}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#process"
                className="flex items-center justify-center gap-2 px-8 py-4 text-sm tracking-wide font-medium text-forest border border-forest/20 hover:border-forest/50 transition-colors w-full sm:w-auto"
              >
                {t("ctaSecondary")}
              </a>
            </div>

            <p className="mt-5 text-sm text-charcoal-light/70 italic font-medium">
              {t("appointmentOnly")}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-alabaster to-transparent" />
    </section>
  );
}
