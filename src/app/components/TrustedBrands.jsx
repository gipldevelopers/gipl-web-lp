"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function TrustedBrands() {
  const [isPaused, setIsPaused] = useState(false);
  const brands = [
    {
      name: "Adani",
      src: "/adani.png",
    },
    {
      name: "AMC",
      src: "/amuko.png",
    },
    {
      name: "Apollo Spectra Hospitals",
      src: "/apollo spectra hospitals.png",
    },
    {
      name: "AskNani",
      src: "/asknani.jpeg",
    },
    {
      name: "Delhi Public School",
      src: "/delhi-public-school.png",
    },
    {
      name: "Divin Spiritual Healing",
      src: "/divin spiritual healing.png",
    },
    {
      name: "DOMS",
      src: "/doms.png",
    },
    {
      name: "Kampo Mido Jewellers",
      src: "/kampomido.png",
    },
    {
      name: "Houspire",
      src: "/housphire.svg",
    },
    {
      name: "Novotion",
      src: "/novotion.png",
    },
    {
      name: "Vadodara Gas Limited",
      src: "/tree.jpg",
    },
    {
      name: "Vadilal",
      src: "/vadilal.svg",
    },
    {
      name: "Zstays",
      src: "/Zstays.png",
    },
  ];

  // Duplicate brands for seamless infinite loop
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="bg-[#FFFFFF] py-6 sm:py-8 md:py-10 px-3 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden z-10">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-[#27B0C4]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8 md:mb-12"
        >
          <h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#2C3E50] mb-2 px-2"
            style={{ fontFamily: 'var(--font-rubik)' }}
          >
            Trusted By Leading Brands
          </h2>
        </motion.div>

        {/* Brand Logos - Infinite Scroll Animation */}
        <div className="overflow-hidden relative">
          <motion.div
            animate={isPaused ? {} : {
              x: [0, -33.333 + "%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10"
            style={{ width: "max-content" }}
          >
            {duplicatedBrands.map((brand, index) => {
              // Placeholder SVG for fallback
              const placeholderSvg = encodeURIComponent(
                `<svg xmlns='http://www.w3.org/2000/svg' width='240' height='60' viewBox='0 0 240 60'>
                  <rect width='100%' height='100%' fill='#f3f4f6'/>
                  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#9CA3AF' font-family='Arial, Helvetica, sans-serif' font-size='12'>
                    ${brand.name}
                  </text>
                </svg>`
              );
              const placeholderDataUrl = `data:image/svg+xml;charset=UTF-8,${placeholderSvg}`;

              return (
                <motion.div
                  key={`${brand.name}-${index}`}
                  whileHover={{ scale: 1.05 }}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  className="flex-shrink-0 bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 border border-[#F4F4F4] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center gap-2 w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px]"
                >
                  <div className="w-full h-[60px] sm:h-[70px] md:h-[80px] lg:h-[90px] flex items-center justify-center overflow-hidden">
                    <img
                      src={brand.src}
                      alt={`${brand.name} logo`}
                      loading="lazy"
                      onError={(e) => {
                        // Fallback to placeholder SVG if image not found
                        if (e.currentTarget.src !== placeholderDataUrl) {
                          e.currentTarget.src = placeholderDataUrl;
                        }
                      }}
                      className="w-full h-full object-contain max-w-full max-h-full"
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <p
                    className="text-[10px] sm:text-xs text-[#2C3E50] font-medium text-center"
                    style={{ fontFamily: 'var(--font-poppins)' }}
                  >
                    {brand.name}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
