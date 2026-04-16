"use client";

import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";

// The user will insert their actual clipping image URLs into ‘imageSrc’
const CLIPPINGS = [
    {
        id: 1,
        publication: "Featured Press",
        date: "Holistic Healing",
        title: "A New Paradigm in Non-Surgical Healing",
        imageSrc: "/news-paper/1.jpg",
    },
    {
        id: 2,
        publication: "Wellness Spotlight",
        date: "Ayurvedic Science",
        title: "Ancient Ayurveda Meets Modern Biomechanics",
        imageSrc: "/news-paper/2.webp",
    },
    {
        id: 3,
        publication: "Spine Care Excellence",
        date: "Clinical Insights",
        title: "Changing the Approach to Spinal Health",
        imageSrc: "/news-paper/3.jpg",
    },
    {
        id: 4,
        publication: "Health Chronicles",
        date: "Patient Success",
        title: "Vaidya’s Clinic Named Top Spinal Center",
        imageSrc: "/news-paper/4.jpg",
    }
];

export function PressClippings() {
    return (
        <section className="py-24 md:py-32 bg-forest text-alabaster overflow-hidden relative">
            {/* Subtle vintage noise/grain texture */}
            <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>

            <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-px w-8 bg-gold/60"></span>
                            <span className="text-[0.8rem] font-semibold tracking-widest uppercase text-gold">In The Press</span>
                        </div>
                        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
                            Words from the Media
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-alabaster/70 text-lg max-w-sm md:text-right font-light"
                    >
                        Explore the news clippings and articles highlighting our journey and impact on holistic spine care.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {CLIPPINGS.map((clip, i) => (
                        <motion.div
                            key={clip.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: i * 0.15 }}
                            className="group flex flex-col cursor-pointer"
                        >
                            {/* Image Container (Newspaper Format) */}
                            <div className="relative w-full aspect-[3/4] bg-[#ebe7df] rounded-sm overflow-hidden mb-6 shadow-2xl transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(201,169,78,0.3)]">
                                {clip.imageSrc ? (
                                    <img
                                        src={clip.imageSrc}
                                        alt={clip.title}
                                        className="absolute inset-0 w-full h-full object-cover origin-center transition-transform duration-1000 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-forest/30 border-2 border-dashed border-forest/10 m-4 rounded transition-colors group-hover:bg-forest/[0.03]">
                                        <Newspaper size={48} className="mb-4 opacity-50" strokeWidth={1} />
                                        <p className="text-sm font-medium tracking-wide uppercase">Add Newspaper Scan</p>
                                        <p className="text-xs mt-2 opacity-60 text-center px-4 font-mono">src/components/press-clippings.tsx</p>
                                    </div>
                                )}

                                {/* A subtle vintage gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#cbac77]/20 to-transparent mix-blend-multiply opacity-60 pointer-events-none" />
                            </div>

                            {/* Caption container */}
                            <div className="flex flex-col flex-grow px-2">
                                <p className="text-xs uppercase tracking-widest font-semibold text-gold mb-3">{clip.publication}</p>
                                <h3 className="font-serif text-2xl leading-snug mb-4 text-alabaster/90 group-hover:text-gold transition-colors duration-300">{clip.title}</h3>
                                <div className="mt-auto pt-4 border-t border-alabaster/10 flex items-center justify-between text-sm text-alabaster/50 uppercase tracking-widest">
                                    <span>{clip.date}</span>
                                    <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">Read Full &rarr;</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
