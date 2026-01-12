"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Palette,
  TrendingUp,
  Cpu,
  Settings,
  ListChecks,
  ChevronLeft,
  ChevronRight,
  Rocket,
  ArrowRight,
} from "lucide-react";

export default function WhyChooseUs() {
  const scrollContainerRef = useRef(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoPlayRef = useRef(null);
  const resumeTimeoutRef = useRef(null);

  const benefits = [
    {
      icon: Settings,
      title: "Customized for Your Goals",
      description:
        "No generic templates. Every feature is tailored specifically to your audience and business needs.",
      color: "from-[#E67E22] to-[#D46A1A]",
      stats: "Fully customized",
    },
    {
      icon: ListChecks,
      title: "Smooth, Transparent Process",
      description:
        "From planning to launch clear timelines, updates, and zero confusion at any step of your development journey.",
      color: "from-[#27B0C4] to-[#73CCD7]",
      stats: "100% clarity",
    },
    {
      icon: Palette,
      title: "Pixel-Perfect Design",
      description:
        "Clean, modern, conversion-first UI that instantly builds trust and drives action.",
      color: "from-[#27B0C4] to-[#73CCD7]",
      stats: "Modern UI",
    },
    {
      icon: TrendingUp,
      title: "Conversion-Focused Architecture",
      description:
        "Every layout and interaction is designed to increase leads and sales — not just look good.",
      color: "from-[#2C3E50] to-[#7A7A7A]",
      stats: "Higher conversions",
    },
    {
      icon: Cpu,
      title: "Latest Technology Stack",
      description:
        "Built with modern frameworks like React & Next.js for speed, SEO, and scalability.",
      color: "from-[#27B0C4] to-[#73CCD7]",
      stats: "Modern stack",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Fast-loading websites that rank better and convert higher. Optimized from day one.",
      color: "from-[#E67E22] to-[#D46A1A]",
      stats: "Under 3 sec",
    },
  ];

  const getVisibleCards = () => {
    if (typeof window === "undefined") return 1;
    const w = window.innerWidth;
    if (w >= 1024) return 4;
    if (w >= 768) return 3;
    if (w >= 640) return 2;
    return 1;
  };

  const resumeAutoPlay = () => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 4000);
  };

  const handleManualInteraction = () => {
    setIsAutoPlaying(false);
    resumeAutoPlay();
  };

  useEffect(() => {
    if (!isAutoPlaying || !scrollContainerRef.current) return;

    autoPlayRef.current = setInterval(() => {
      const visible = getVisibleCards();
      const maxSlide = benefits.length - visible;

      setCurrentSlide((prev) => {
        const next = prev >= maxSlide ? 0 : prev + 1;
        const cardWidth =
          scrollContainerRef.current.children[0]?.offsetWidth || 300;
        const gap = 16;

        scrollContainerRef.current.scrollTo({
          left: next * (cardWidth + gap),
          behavior: "smooth",
        });

        return next;
      });
    }, 3000);

    return () => {
      clearInterval(autoPlayRef.current);
      clearTimeout(resumeTimeoutRef.current);
    };
  }, [isAutoPlaying, benefits.length]);

  const scrollLeft = () => handleManualInteraction();
  const scrollRight = () => handleManualInteraction();

  return (
    <section className="bg-[#F4F4F4] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 
            className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2C3E50] mb-2"
            style={{ fontFamily: 'var(--font-rubik)' }}
          >
            Why Choose Us as Your Website Development Company?
          </h2>
          <p 
            className="text-sm sm:text-base text-[#7A7A7A] max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            What makes us the best website development company in India?
          </p>
        </motion.div>

        {/* Controls */}
        <div className="flex justify-end gap-2 mb-4">
          <button
            onClick={scrollLeft}
            className="p-2 rounded-lg bg-white shadow hover:shadow-md hover:scale-105 transition border border-[#F4F4F4]"
          >
            <ChevronLeft className="w-4 h-4 text-[#2C3E50]" />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 rounded-lg bg-white shadow hover:shadow-md hover:scale-105 transition border border-[#F4F4F4]"
          >
            <ChevronRight className="w-4 h-4 text-[#2C3E50]" />
          </button>
        </div>

        {/* Slider */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-6 snap-x snap-mandatory"
          onScroll={handleManualInteraction}
        >
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-[calc(100%-16px)] sm:w-[calc(50%-8px)] md:w-[calc(33.33%-10px)] lg:w-[calc(25%-12px)] snap-center"
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-xl p-5 h-full shadow-sm hover:shadow-xl border border-[#F4F4F4] transition"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow mb-4`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>

                <h3 
                  className="text-lg font-bold text-[#2C3E50] mb-2"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  {item.title}
                </h3>
                <p 
                  className="text-sm text-[#7A7A7A] mb-4"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  {item.description}
                </p>

                <div className="flex justify-between items-center border-t border-[#F4F4F4] pt-4">
                  <div className="flex items-center gap-2">
                    <Rocket className="w-4 h-4 text-[#27B0C4]" />
                    <span 
                      className="text-xs text-[#7A7A7A]"
                      style={{ fontFamily: 'var(--font-poppins)' }}
                    >
                      Benefit
                    </span>
                  </div>
                  <span 
                    className="text-sm font-semibold text-[#2C3E50]"
                    style={{ fontFamily: 'var(--font-poppins)' }}
                  >
                    {item.stats}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* ✅ CTA (MATCHES TECH ECOSYSTEM) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-2 text-center"
        >
          <motion.a
            href="#tech"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2
            bg-[#E67E22]
            text-white px-6 py-3 rounded-lg font-semibold
            hover:shadow-lg hover:bg-[#D46A1A] transition-all"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            Explore Our Tech Ecosystem
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
