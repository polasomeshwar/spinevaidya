"use client";

import { motion } from "framer-motion";

export function SpineBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-[#FBFAF7]" aria-hidden="true">
      {/* High-end ambient radial glow */}
      <div className="absolute top-0 right-0 w-[600px] md:w-[900px] h-[600px] md:h-[900px] rounded-full bg-sage opacity-[0.04] blur-[150px] -translate-y-1/4 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] md:w-[700px] h-[400px] md:h-[700px] rounded-full bg-forest opacity-[0.03] blur-[130px] translate-y-1/4 -translate-x-1/4" />

      {/* Subtle organic noise texture overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.6] mix-blend-overlay">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" opacity="0.3" />
      </svg>
    </div>
  );
}
