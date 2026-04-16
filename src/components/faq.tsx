"use client";

import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQ() {
  const t = useTranslations("faq");
  const items = t.raw("items") as Array<{ question: string; answer: string }>;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-forest leading-tight">
            {t("title")}
          </h2>
          <p className="mt-5 text-lg text-charcoal-light leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Accordion list */}
        <div className="space-y-3">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div
                  className={cn(
                    "rounded-xl border bg-white overflow-hidden transition-all duration-300",
                    isOpen
                      ? "border-sage/20 shadow-lg shadow-sage/5"
                      : "border-sage/8 hover:border-sage/15"
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer group"
                  >
                    <span className="font-medium text-forest text-[15px] pr-6 group-hover:text-sage transition-colors">
                      {item.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={cn(
                        "text-sage/50 flex-shrink-0 transition-transform duration-300",
                        isOpen && "rotate-180 text-sage"
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 md:px-6 pb-5 md:pb-6 text-charcoal-light leading-relaxed text-[15px]">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
