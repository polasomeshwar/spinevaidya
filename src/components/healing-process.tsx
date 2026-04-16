"use client";

import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Stethoscope, ClipboardList, Leaf, Heart, CheckCircle2 } from "lucide-react";

const stepIcons = [Stethoscope, ClipboardList, Leaf, Heart, CheckCircle2];

export function HealingProcess() {
  const t = useTranslations("process");
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.15, 0.85], ["0%", "100%"]);
  const steps = t.raw("steps") as Array<{ title: string; description: string }>;

  return (
    <section id="process" className="py-24 md:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-20"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-forest leading-tight">
            {t("title")}
          </h2>
          <p className="mt-5 text-lg text-charcoal-light leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative max-w-2xl mx-auto">
          {/* Track */}
          <div className="absolute left-[23px] md:left-[31px] top-4 bottom-4 w-[2px] bg-sage/10 rounded-full">
            <motion.div
              className="w-full bg-gradient-to-b from-sage to-gold rounded-full origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-10 md:space-y-14">
            {steps.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative pl-16 md:pl-20"
                >
                  {/* Circle */}
                  <div className="absolute left-0 top-1 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-2 border-sage/15 flex items-center justify-center shadow-lg shadow-sage/5 z-10">
                    <Icon size={20} className="text-sage" strokeWidth={1.8} />
                  </div>

                  {/* Card */}
                  <div className="bg-white rounded-2xl border border-sage/8 p-6 md:p-8 hover:border-sage/15 hover:shadow-xl hover:shadow-sage/5 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[11px] font-bold text-gold bg-gold/8 w-7 h-7 rounded-full flex items-center justify-center">
                        {i + 1}
                      </span>
                      <h3 className="font-serif text-lg md:text-xl font-bold text-forest">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-charcoal-light leading-relaxed text-[15px]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
