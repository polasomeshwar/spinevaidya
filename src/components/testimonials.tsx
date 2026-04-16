"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Star, MapPin, Quote } from "lucide-react";

export function Testimonials() {
  const t = useTranslations("testimonials");
  const reviews = t.raw("reviews") as Array<{
    name: string;
    location: string;
    text: string;
    condition: string;
  }>;

  return (
    <section id="testimonials" className="py-24 md:py-32">
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

        {/* Masonry testimonials */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="break-inside-avoid mb-5"
            >
              <div className="group bg-white rounded-2xl border border-sage/8 p-6 hover:border-sage/15 hover:shadow-xl hover:shadow-sage/5 transition-all duration-300">
                <Quote size={28} className="text-sage/15 mb-2" />

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={13} className="text-gold fill-gold" />
                  ))}
                </div>

                <p className="text-charcoal leading-relaxed mb-5 text-[15px]">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center justify-between pt-4 border-t border-sage/8">
                  <div>
                    <p className="font-semibold text-forest text-sm">{review.name}</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <MapPin size={11} className="text-charcoal-light/60" />
                      <span className="text-xs text-charcoal-light/60">{review.location}</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-sage bg-sage/8 px-2.5 py-1 rounded-full">
                    {review.condition}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
