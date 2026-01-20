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
    <section className="relative overflow-hidden bg-[#F4F4F4] pt-12 sm:pt-14 md:pt-16">
      {/* Base Gradient Background - Adapts to content height */}
      <motion.div
        className="absolute inset-0 min-h-full"
        animate={{
          background: [
            'linear-gradient(135deg, #F4F4F4 0%, #FFFFFF 25%, #73CCD7 50%, #27B0C4 75%, #FFFFFF 100%)',
            'linear-gradient(140deg, #27B0C4 0%, #73CCD7 25%, #F4F4F4 50%, #FFFFFF 75%, #73CCD7 100%)',
            'linear-gradient(145deg, #73CCD7 0%, #F4F4F4 25%, #27B0C4 50%, #FFFFFF 75%, #F4F4F4 100%)',
            'linear-gradient(135deg, #F4F4F4 0%, #FFFFFF 25%, #73CCD7 50%, #27B0C4 75%, #FFFFFF 100%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: [0.4, 0, 0.2, 1],
        }}
      />
      
      {/* Animated gradient orbs for depth - Adapts to content height */}
      <div className="absolute inset-0 min-h-full overflow-hidden pointer-events-none">
        {/* Large floating orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full blur-3xl opacity-20"
            animate={{
              x: [0, 50 * (i + 1), 0],
              y: [0, -30 * (i + 1), 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 25 + i * 5,
              repeat: Infinity,
              ease: [0.4, 0, 0.2, 1],
              delay: i * 2,
            }}
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              background: i === 0 ? '#27B0C4' : i === 1 ? '#73CCD7' : '#E67E22',
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
            }}
          />
        ))}
      </div>
      
      {/* Animated mesh gradient overlay - Adapts to content height */}
      <motion.div
        className="absolute inset-0 min-h-full opacity-40"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, #27B0C4 0%, transparent 40%), radial-gradient(circle at 80% 70%, #73CCD7 0%, transparent 40%), radial-gradient(circle at 50% 50%, #E67E22 0%, transparent 50%)',
            'radial-gradient(circle at 25% 35%, #73CCD7 0%, transparent 40%), radial-gradient(circle at 75% 65%, #27B0C4 0%, transparent 40%), radial-gradient(circle at 50% 50%, #E67E22 0%, transparent 50%)',
            'radial-gradient(circle at 30% 40%, #27B0C4 0%, transparent 40%), radial-gradient(circle at 70% 60%, #73CCD7 0%, transparent 40%), radial-gradient(circle at 50% 50%, #E67E22 0%, transparent 50%)',
            'radial-gradient(circle at 20% 30%, #27B0C4 0%, transparent 40%), radial-gradient(circle at 80% 70%, #73CCD7 0%, transparent 40%), radial-gradient(circle at 50% 50%, #E67E22 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: [0.4, 0, 0.2, 1],
        }}
      />
      
      {/* Animated geometric shapes - Adapts to content height */}
      <div className="absolute inset-0 min-h-full overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute opacity-10"
            animate={{
              scale: [1, 1.15, 1],
              x: [0, Math.sin(i) * 30, 0],
              y: [0, Math.cos(i) * 30, 0],
            }}
            transition={{
              duration: 30 + i * 3,
              repeat: Infinity,
              ease: [0.4, 0, 0.2, 1],
              delay: i * 1.5,
            }}
            style={{
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              background: i % 3 === 0 ? '#27B0C4' : i % 3 === 1 ? '#73CCD7' : '#E67E22',
              borderRadius: i % 2 === 0 ? '50%' : '20%',
              left: `${15 + i * 15}%`,
              top: `${20 + i * 12}%`,
            }}
          />
        ))}
      </div>
      
      {/* Floating particles - Adapts to content height */}
      <div className="absolute inset-0 min-h-full overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            animate={{
              y: [0, -60, 0],
              x: [0, Math.sin(i) * 20, 0],
              opacity: [0.3, 0.5, 0.3],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 15 + i * 0.8,
              repeat: Infinity,
              ease: [0.4, 0, 0.2, 1],
              delay: i * 0.4,
            }}
            style={{
              width: `${4 + (i % 3) * 2}px`,
              height: `${4 + (i % 3) * 2}px`,
              background: i % 4 === 0 ? '#27B0C4' : i % 4 === 1 ? '#73CCD7' : i % 4 === 2 ? '#E67E22' : '#FFFFFF',
              left: `${5 + (i * 8)}%`,
              top: `${10 + (i * 7)}%`,
            }}
          />
        ))}
      </div>
      
      {/* Subtle grid pattern - Adapts to content height */}
      <motion.div
        className="absolute inset-0 min-h-full opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(#27B0C4 1px, transparent 1px),
            linear-gradient(90deg, #27B0C4 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
        animate={{
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content container - Content-based height with responsive padding */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10 w-full py-6 sm:py-8 md:py-10 lg:py-12">
        {/* Main content - Natural flow, no forced centering */}
        <div className="flex flex-col items-center">
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
              className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[#2C3E50] mb-2 sm:mb-3 md:mb-4 leading-tight"
              style={{ fontFamily: 'var(--font-rubik)' }}
            >
              {HEADLINE}
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={itemVariants}
              className="text-xs sm:text-sm md:text-base lg:text-lg text-[#7A7A7A] mb-3 sm:mb-4 md:mb-5 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              {SUBHEAD}
            </motion.p>

            {/* Key features - Single column on mobile, 2 columns on larger screens */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-5 max-w-3xl mx-auto w-full"
            >
              {FEATURES.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  className="flex items-center gap-2 sm:gap-2.5 p-2.5 sm:p-3 md:p-3.5 rounded-lg bg-white/80 backdrop-blur-sm border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 min-h-[44px]"
                >
                  <motion.div 
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-[#27B0C4] to-[#73CCD7] text-white flex-shrink-0 shadow-md"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5" />
                  </motion.div>
                  <div className="text-sm sm:text-base text-[#2C3E50] font-medium leading-snug" style={{ fontFamily: 'var(--font-poppins)' }}>{f}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons - Centered */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 mb-2 sm:mb-3 md:mb-4 justify-center w-full sm:w-auto"
            >
              <motion.a
                href="https://gohilinfotech.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(230, 126, 34, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-block px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 md:py-4 
             bg-gradient-to-r from-[#E67E22] to-[#D46A1A]
             text-white rounded-lg font-semibold text-sm sm:text-base md:text-lg shadow-lg 
             hover:shadow-xl transition-all overflow-hidden active:scale-95 touch-manipulation w-full sm:w-auto min-h-[44px] flex items-center justify-center"
                aria-label="Start Your Project Today - contact page"
                title="Start Your Project Today"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#D46A1A] to-[#E67E22] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="relative flex items-center justify-center gap-2 z-10">
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Start Your Project Today
                  </motion.span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  >
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.div>
                </div>
              </motion.a>
            </motion.div>

            {/* Small trust/assurance line */}
            <motion.div
              variants={itemVariants}
              className="text-xs sm:text-sm text-[#7A7A7A] max-w-2xl mx-auto text-center"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              <span className="mr-1.5 sm:mr-2">🔒</span>
              Bank level security, SSL, and lifetime support available.
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
