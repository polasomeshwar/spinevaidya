"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Award, Users, BookOpen, Heart, Stethoscope } from "lucide-react";

const highlightIcons = [Award, Stethoscope, BookOpen, Users, Heart];

export function MeetVaidya() {
  const t = useTranslations("doctor");
  const highlights = t.raw("highlights") as string[];

  return (
    <section id="about" className="py-24 md:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14 md:mb-20"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-forest leading-tight">
            {t("title")}
          </h2>
          <p className="mt-5 text-lg text-charcoal-light leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Doctor photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-sage/10 to-forest/5 border border-sage/10 flex items-center justify-center overflow-hidden shadow-lg">
                <img
                  src="/news-paper/profile-pic.jpg"
                  alt="Vaidya Profile"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Accent corner */}
              <div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-xl bg-gold/8 border border-gold/15 -z-10" />
            </div>
          </motion.div>

          {/* Doctor details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8"
          >
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-forest">
              {t("name")}
            </h3>
            <p className="mt-1.5 text-gold font-semibold text-sm tracking-wide">
              {t("designation")}
            </p>

            <p className="mt-6 text-charcoal-light leading-relaxed text-[15px] md:text-base">
              {t("bio")}
            </p>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, i) => {
                const Icon = highlightIcons[i];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.15 + i * 0.06 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-9 h-9 rounded-lg bg-sage/8 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-sage" strokeWidth={1.8} />
                    </div>
                    <span className="text-sm text-charcoal">{item}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 pl-5 border-l-[3px] border-gold/30"
            >
              <p className="font-serif text-lg md:text-xl text-forest/70 italic leading-relaxed">
                {t("quote")}
              </p>
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
