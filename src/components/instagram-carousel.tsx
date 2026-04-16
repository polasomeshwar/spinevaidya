"use client";

import { motion } from "framer-motion";
import { InstagramEmbed } from 'react-social-media-embed';

const REELS = [
    "https://www.instagram.com/reel/DXFDT06EwgI/",
    "https://www.instagram.com/reel/DXCQK8EE2we/",
    "https://www.instagram.com/reel/DU2nyiWksuS/",
    "https://www.instagram.com/reel/DUitmfSEor5/",
    "https://www.instagram.com/reel/DUTF7zGEq6C/",
    "https://www.instagram.com/reel/DTDFHTAkjMr/",
    "https://www.instagram.com/reel/DSh9N82EsGT/",
    "https://www.instagram.com/reel/DRRTaqkEro4/",
];

export function InstagramCarousel() {
    return (
        <section className="py-24 md:py-32 bg-[#FBFAF7] overflow-hidden" id="instagram-reels">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <span className="h-px w-8 bg-sage/40"></span>
                        <span className="text-[0.8rem] font-semibold tracking-widest uppercase text-sage">Latest Reels</span>
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-forest font-medium tracking-tight mb-6">
                        Insights from the Clinic
                    </h2>
                    <p className="text-charcoal-light text-lg md:text-xl max-w-2xl font-light">
                        Watch our latest patient recoveries, expert tips, and holistic living advice directly from Instagram.
                    </p>
                </motion.div>
            </div>

            {/* Carousel Container */}
            <div className="w-full flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 sm:px-12 pb-10 hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {REELS.map((url, i) => (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        key={i}
                        className="flex-none snap-center w-[280px] sm:w-[320px] rounded-[1.5rem] overflow-hidden shadow-[0_15px_40px_-15px_rgba(74,103,65,0.15)] bg-white transform transition-transform hover:scale-[1.01] flex justify-center"
                    >
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <InstagramEmbed url={url} width="100%" />
                        </div>
                    </motion.div>
                ))}
                {/* Spacer for the exact scroll gap on the right edge */}
                <div className="flex-none w-4 sm:w-8" />
            </div>

            {/* Hide scrollbar styles locally if global isn't defined */}
            <style dangerouslySetInnerHTML={{
                __html: `
            .hide-scrollbar::-webkit-scrollbar {
                display: none;
            }
        `}} />
        </section>
    );
}
