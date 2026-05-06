"use client";

import { motion } from "framer-motion";

const IMAGES = [
  "/cropped/image_0.png",
  "/cropped/image_1.png",
  "/cropped/image_2.png",
  "/cropped/image_3.png",
  "/cropped/image_4.png",
  "/cropped/image_5.png",
];

export function ClinicGallery() {
  return (
    <section className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-8 bg-gold"></span>
              <span className="text-[0.8rem] font-semibold tracking-widest uppercase text-gold">Holistic Approach</span>
              <span className="h-px w-8 bg-gold"></span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-forest">
              The Essence of Healing
            </h2>
            <p className="mt-4 text-charcoal-light max-w-2xl mx-auto">
              Experience the harmony of traditional Ayurveda and holistic wellness, dedicated to restoring your body's natural balance.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {IMAGES.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group"
            >
              <img
                src={src}
                alt={`Holistic healing ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
