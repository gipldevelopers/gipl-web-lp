"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function HeroSection() {

  // --- Animation variants ---
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
        duration: 0.6,
      },
    },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 30 },
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

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const pulseAnimation = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const floatAnimation = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };


  // --- Content to add into hero (user provided) ---
  const HEADLINE = "Build A Website That Works Harder Than Your Competitors";
  const SUBHEAD =
    "Fast, Modern, High Converting Website Development That Brings Real Customers Not Just Visitors";
  const FEATURES = [
    "Performance Optimization",
    "Mobile first responsive design",
    "SEO ready structure from day one",
    "Bank level security & SSL included",
    "Conversion focused layouts",
    "Lifetime support & maintenance",
  ];


  return (
    <div className="min-h-screen bg-[#FFFFFF] relative pt-16 sm:pt-20 md:pt-24 pb-6 sm:pb-8 md:pb-10">
      {/* Subtle background pattern - Mobile optimized */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(i) * 15, 0],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.3,
            }}
            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full opacity-10"
            style={{
              background: i % 2 === 0 ? "#73CCD7" : "#27B0C4",
              left: `${5 + i * 12}%`,
              top: `${10 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        {/* Main content - Centered */}
        <div className="flex flex-col items-center justify-center">
          {/* Text content - Centered */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-4xl text-center"
          >
            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[#2C3E50] mb-2 sm:mb-3 md:mb-4 leading-tight px-2"
              style={{ fontFamily: 'var(--font-rubik)' }}
            >
              {HEADLINE}
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={itemVariants}
              className="text-xs sm:text-sm md:text-base lg:text-lg text-[#7A7A7A] mb-3 sm:mb-4 md:mb-5 max-w-3xl mx-auto leading-relaxed px-2"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              {SUBHEAD}
            </motion.p>

            {/* Key features */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 md:gap-3 mb-3 sm:mb-4 md:mb-5 max-w-3xl mx-auto px-2"
            >
              {FEATURES.map((f, i) => (
                <div
                  key={i}
                  className="flex items-start sm:items-center gap-2 sm:gap-2.5 p-2 sm:p-2.5 md:p-3 rounded-lg bg-[#F4F4F4] border border-[#F4F4F4]"
                >
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center bg-[#27B0C4] text-white flex-shrink-0 mt-0.5 sm:mt-0">
                    <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                  </div>
                  <div className="text-xs sm:text-sm text-[#2C3E50] font-medium leading-snug" style={{ fontFamily: 'var(--font-poppins)' }}>{f}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons - Centered */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 mb-3 sm:mb-4 justify-center px-2"
            >
              <motion.a
                href="https://gohilinfotech.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                variants={pulseAnimation}
                animate="animate"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-block px-4 sm:px-6 md:px-7 py-2.5 sm:py-3 md:py-3.5 
             bg-[#E67E22] 
             text-white rounded-lg font-semibold text-xs sm:text-sm md:text-base shadow-md 
             hover:shadow-lg hover:bg-[#D46A1A] transition-all overflow-hidden active:scale-95 touch-manipulation w-full sm:w-auto"
                aria-label="Start Your Project Today - contact page"
                title="Start Your Project Today"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                <div className="relative flex items-center justify-center gap-1.5 sm:gap-2">
                  <span>
                    Start Your Project Today
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                </div>
              </motion.a>
            </motion.div>

            {/* Small trust/assurance line */}
            <motion.div
              variants={itemVariants}
              className="text-xs sm:text-sm text-[#7A7A7A] max-w-2xl mx-auto text-center px-2"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              <span className="mr-1.5 sm:mr-2">🔒</span>
              Bank level security, SSL, and lifetime support available.
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
