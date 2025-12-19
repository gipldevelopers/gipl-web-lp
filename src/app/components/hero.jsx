"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Zap,
  Globe,
  Users,
  Shield,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function HeroSection() {
  const [isDiagramVisible, setIsDiagramVisible] = useState(false);

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

  const connectLineAnimation = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
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

  // If your site has a fixed nav, set NAV_OFFSET to the height (px) of that nav.
  // This value is used so smooth-scroll won't be hidden behind the nav.

  // Smooth scroll helper (compensates for fixed nav)
  const smoothScrollTo = (id) => {
    if (typeof window === "undefined") return;
    const el = document.getElementById(id);
    if (el) {
      const top =
        el.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET;
      window.scrollTo({ top, behavior: "smooth" });
    } else {
      // fallback - set hash so user can navigate or create target later
      window.location.hash = `#${id}`;
    }
  };

  return (
    <div className="min-h-screen md:min-h-[90vh] bg-gradient-to-br from-purple-50 via-white to-blue-50 relative p-2 md:p-2">
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
            className="absolute w-2 h-2 rounded-full opacity-10"
            style={{
              background: i % 2 === 0 ? "#9333ea" : "#3b82f6",
              left: `${5 + i * 12}%`,
              top: `${10 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        {/* Main content - Stack on mobile, side-by-side on desktop */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-2 lg:gap-2 mt-20 md:mt-14 ">
          {/* Left column - Text content (Mobile: full width, Desktop: half) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight"
            >
              {HEADLINE}
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              {SUBHEAD}
            </motion.p>

            {/* Key features */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 max-w-2xl mx-auto lg:mx-0"
            >
              {FEATURES.map((f, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-2 rounded-lg bg-white/70 border border-gray-100 shadow-sm"
                >
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-700">{f}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons - Stack on mobile, row on tablet+ */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 mb-6 sm:mb-8 justify-center lg:justify-start"
            >
              <motion.a
  href="https://gohilinfotech.com/contact"
  target="_blank"
  rel="noopener noreferrer"
  variants={pulseAnimation}
  animate="animate"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="group relative inline-block px-5 sm:px-6 py-3 
             bg-gradient-to-r from-blue-600 to-purple-600 
             text-white rounded-lg font-semibold shadow-md 
             hover:shadow-lg transition-all overflow-hidden"
  aria-label="Start Your Project Today - contact page"
  title="Start Your Project Today"
>
  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  
  <div className="relative flex items-center justify-center gap-2">
    <span className="text-sm sm:text-base">
      Start Your Project Today
    </span>
    <ArrowRight className="w-4 h-4" />
  </div>
</motion.a>


             
            </motion.div>

            {/* Small trust/assurance line */}
            <motion.div
              variants={itemVariants}
              className="text-xs text-gray-500 max-w-2xl mx-auto lg:mx-0"
            >
              <span className="mr-2">🔒</span>
              Bank level security, SSL, and lifetime support available.
            </motion.div>
          </motion.div>

          {/* Right column - Visual diagram (Hidden on very small screens, shown on sm+) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            onViewportEnter={() => setIsDiagramVisible(true)}
            className="w-full lg:w-1/2 relative mt-8 lg:mt-0"
          >
            {/* Main diagram container - Responsive sizing */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              className="relative bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 border border-gray-100"
            >
              {/* Diagram header */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-sm sm:text-base font-semibold text-gray-800">
                  TrustLine Workflow
                </h3>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-2 h-2 bg-green-500 rounded-full"
                  />
                  Live Demo
                </div>
              </div>

              {/* Diagram content - Responsive height */}
              <div className="relative h-48 sm:h-56 md:h-64">
                {/* Left side - Customers */}
                <motion.div
                  variants={floatAnimation}
                  animate="animate"
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 w-24 sm:w-28 md:w-32"
                >
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 border border-purple-100">
                    <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-purple-600" />
                      <span className="text-xs sm:text-sm font-medium text-gray-700">
                        Customers
                      </span>
                    </div>
                    <div className="flex -space-x-1 sm:-space-x-2">
                      {[
                        "bg-blue-400",
                        "bg-green-400",
                        "bg-orange-400",
                        "bg-pink-400",
                      ].map((color, i) => (
                        <motion.div
                          key={i}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className={`w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full border-2 border-white ${color}`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Center - TrustLine */}
                <motion.div
                  variants={floatAnimation}
                  animate="animate"
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full shadow-lg flex items-center gap-2 sm:gap-3">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <Zap className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-white" />
                    </motion.div>
                    <span className="text-sm sm:text-base font-bold">
                      TrustLine AI
                    </span>
                  </div>

                  {/* Connecting lines */}
                  {isDiagramVisible && (
                    <>
                      <motion.div
                        variants={connectLineAnimation}
                        initial="hidden"
                        animate="visible"
                        className="absolute -left-10 sm:-left-12 md:-left-16 top-1/2 w-10 sm:w-12 md:w-16 origin-left"
                      >
                        <div className="border-t-2 border-dashed border-gray-300" />
                      </motion.div>
                      <motion.div
                        variants={connectLineAnimation}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.2 }}
                        className="absolute -right-10 sm:-right-12 md:-right-16 top-1/2 w-10 sm:w-12 md:w-16 origin-right"
                      >
                        <div className="border-t-2 border-dashed border-gray-300" />
                      </motion.div>
                    </>
                  )}
                </motion.div>

                {/* Right side - Partners */}
                <motion.div
                  variants={floatAnimation}
                  animate="animate"
                  transition={{ delay: 0.2 }}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 w-24 sm:w-28 md:w-32"
                >
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 border border-blue-100">
                    <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                      <Globe className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-600" />
                      <span className="text-xs sm:text-sm font-medium text-gray-700">
                        Partners
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-0.5 sm:gap-1">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
                          className="aspect-square rounded-md sm:rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-300"
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Bottom - Features */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-xs"
                >
                  <div className="flex justify-around">
                    {[
                      {
                        icon: Smartphone,
                        label: "Mobile",
                        color: "text-blue-500",
                      },
                      { icon: Code, label: "API", color: "text-green-500" },
                      {
                        icon: Shield,
                        label: "Security",
                        color: "text-purple-500",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -4 }}
                        className="text-center"
                      >
                        <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white rounded-full shadow flex items-center justify-center mx-auto mb-1 sm:mb-2 border border-gray-100">
                          <item.icon
                            className={`w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ${item.color}`}
                          />
                        </div>
                        <span className="text-xs text-gray-600">
                          {item.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Platform badges - Responsive grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="grid grid-cols-3 gap-2 sm:gap-3 sm:flex sm:flex-wrap sm:justify-center mt-4 sm:mt-6"
            >
              {[
                { bg: "bg-gray-900", text: "API", label: "API" },
                { bg: "bg-blue-500", text: "Web", label: "Web" },
                { bg: "bg-green-500", text: "AI", label: "AI" },
              ].map((badge, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-white px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center gap-1 sm:gap-2"
                >
                  <div
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${badge.bg} rounded flex items-center justify-center`}
                  >
                    <span className="text-xs text-white font-bold">
                      {badge.text}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-700 hidden sm:inline">
                    {badge.label}
                  </span>
                  <span className="text-xs text-gray-700 sm:hidden">
                    {badge.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Trust indicators - Mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 border-t border-gray-100"
        >
          <p className="text-center text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
            Trusted By Leading Brands
          </p>
          {/* Logo list (replace company names with logos + placeholder fallback) */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8">
            {[
              { name: "Google Partner ", src: "/g-paerner-removebg-preview.png" },
              { name: "AWS", src: "/download__1_-removebg-preview.png" },
              { name: "Razorpay", src: "/download__2_-removebg-preview.png" },
              { name: "Meta", src: "/download-removebg-preview.png" },
              { name: "Shopify", src: "/download__3_-removebg-preview.png" },
            ].map((company, index) => {
              // lightweight SVG placeholder (data URI)
              const placeholderSvg = encodeURIComponent(
                `<svg xmlns='http://www.w3.org/2000/svg' width='240' height='60' viewBox='0 0 240 60'>
        <rect width='100%' height='100%' fill='${
          index % 2 === 0 ? "#f3f4f6" : "#ffffff"
        }'/>
        <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#9CA3AF' font-family='Arial, Helvetica, sans-serif' font-size='12'>
          ${company.name}
        </text>
      </svg>`
              );
              const placeholderDataUrl = `data:image/svg+xml;charset=UTF-8,${placeholderSvg}`;

              return (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2 + index * 0.08 }}
                  whileHover={{ opacity: 1, scale: 1.05 }}
                  className="flex items-center justify-center"
                  aria-label={`${company.name} logo`}
                  title={company.name}
                >
                  <img
                    src={company.src}
                    alt={`${company.name} logo`}
                    loading="lazy"
                    width={160}
                    height={40}
                    onError={(e) => {
                      // fallback to placeholder SVG if real image not found
                      if (e.currentTarget.src !== placeholderDataUrl) {
                        e.currentTarget.src = placeholderDataUrl;
                      }
                    }}
                    className="w-24 sm:w-28 md:w-32 lg:w-36 h-auto object-contain rounded-md border border-gray-100 shadow-sm bg-white"
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
