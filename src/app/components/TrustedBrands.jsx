"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TrustedBrands() {
  const brands = [
    {
      name: "Google Partner",
      src: "/g-paerner-removebg-preview.png",
    },
    {
      name: "AWS",
      src: "/download__1_-removebg-preview.png",
    },
    {
      name: "Razorpay",
      src: "/download__2_-removebg-preview.png",
    },
    {
      name: "Meta",
      src: "/download-removebg-preview.png",
    },
    {
      name: "Shopify",
      src: "/download__3_-removebg-preview.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="bg-[#FFFFFF] py-6 sm:py-8 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden z-10 min-h-[250px] sm:min-h-[300px]">
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

        {/* Brand Logos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6"
        >
          {brands.map((brand, index) => {
            // Placeholder SVG for fallback
            const placeholderSvg = encodeURIComponent(
              `<svg xmlns='http://www.w3.org/2000/svg' width='240' height='60' viewBox='0 0 240 60'>
                <rect width='100%' height='100%' fill='${
                  index % 2 === 0 ? "#f3f4f6" : "#ffffff"
                }'/>
                <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#9CA3AF' font-family='Arial, Helvetica, sans-serif' font-size='12'>
                  ${brand.name}
                </text>
              </svg>`
            );
            const placeholderDataUrl = `data:image/svg+xml;charset=UTF-8,${placeholderSvg}`;

            return (
              <motion.div
                key={brand.name}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 border border-[#F4F4F4] shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center min-h-[90px] sm:min-h-[110px] md:min-h-[120px] lg:min-h-[140px]"
              >
                <div className="w-full flex items-center justify-center">
                  <img
                    src={brand.src}
                    alt={`${brand.name} logo`}
                    loading="lazy"
                    width={160}
                    height={40}
                    onError={(e) => {
                      // Fallback to placeholder SVG if image not found
                      if (e.currentTarget.src !== placeholderDataUrl) {
                        e.currentTarget.src = placeholderDataUrl;
                      }
                    }}
                    className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-auto object-contain"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
