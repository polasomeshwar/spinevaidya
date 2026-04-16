"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Activity, Zap, Bone, Droplets } from "lucide-react";
import { cn } from "@/lib/utils";

const cards = [
  { key: "backPain" as const, icon: Activity, accent: "from-sage/8 to-forest/4" },
  { key: "sciatica" as const, icon: Zap, accent: "from-gold/8 to-sage/4" },
  { key: "orthopedics" as const, icon: Bone, accent: "from-forest/8 to-sage/4" },
  { key: "skin" as const, icon: Droplets, accent: "from-sage/8 to-gold/4" },
];

export function Specializations() {
  const t = useTranslations("specializations");

  return (
    <section id="specializations" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
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

        {/* Bento Grid — 2x2 on desktop, stack on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {cards.map(({ key, icon: Icon, accent }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className={cn(
                "group relative rounded-2xl bg-white border border-sage/10 p-7 md:p-9",
                "hover:border-sage/20 hover:shadow-2xl hover:shadow-sage/8 transition-all duration-300",
                // Make first card span full width on md for visual emphasis
                i === 0 && "md:col-span-2"
              )}
            >
              {/* Hover gradient overlay */}
              <div className={cn("absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500", accent)} />

              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-sage/8 flex items-center justify-center group-hover:bg-sage/12 transition-colors duration-300">
                    <Icon size={22} className="text-sage" strokeWidth={1.8} />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-gold bg-gold/8 px-3 py-1.5 rounded-full">
                    {t(`${key}.tag`)}
                  </span>
                </div>

                <h3 className="font-serif text-xl md:text-2xl font-bold text-forest mb-3">
                  {t(`${key}.title`)}
                </h3>
                <p className="text-charcoal-light leading-relaxed text-[15px]">
                  {t(`${key}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
