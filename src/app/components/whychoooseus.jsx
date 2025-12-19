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
  Cpu as CpuIcon,
  Sparkles,
  Target,
  Rocket,
} from "lucide-react";

export default function WhyChooseUs() {
  const scrollContainerRef = useRef(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoPlayRef = useRef(null);
  const resumeTimeoutRef = useRef(null);

  // BENEFITS DATA
  const benefits = [
     {
      icon: Settings,
      title: "Customized for Your Goals",
      description:
        "No generic templates. Every feature is tailored specifically to your audience and business needs.",
      color: "from-orange-500 to-yellow-500",
      stats: "Fully customized",
    },
    {
      icon: ListChecks,
      title: "Smooth, Transparent Process",
      description:
        "From planning to launch clear timelines, updates, and zero confusion at any step of your development journey.",
      color: "from-pink-500 to-red-500",
      stats: "100% clarity",
    },
    {
      icon: Palette,
      title: "Pixel-Perfect Design",
      description:
        "Clean, modern, conversion first UI. We ensure your website impresses instantly and turns visitors into real customers.",
      color: "from-purple-500 to-pink-500",
      stats: "100% modern design",
    },
    {
      icon: TrendingUp,
      title: "Conversion-Focused Architecture",
      description:
        "Every layout, color, and button placement is strategically crafted to increase leads and sales  not just look pretty.",
      color: "from-green-500 to-cyan-500",
      stats: "↑ Higher conversions",
    },
    {
      icon: Cpu,
      title: "Latest Technology Stack",
      description:
        "Speed, security, SEO  everything optimized from day one. React, Next.js, Node.js keep your site ahead of competitors.",
      color: "from-blue-500 to-indigo-500",
      stats: "Next.js + React",
    },
    
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Your website loads in under 3 seconds. Fast websites rank better and convert higher. We optimize every line of code for peak performance.",
      color: "from-blue-500 to-purple-500",
      stats: "Under 3 sec load",
    },
  ];

  // Visible Cards Logic
  const getVisibleCards = () => {
    if (typeof window === "undefined") return 1;
    const width = window.innerWidth;
    if (width >= 1024) return 4;
    if (width >= 768) return 3;
    if (width >= 640) return 2;
    return 1;
  };

  // Resume Auto Play
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

  // Auto Play Slider
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

  // Manual Scroll
  const scrollLeft = () => {
    handleManualInteraction();
    const visible = getVisibleCards();
    setCurrentSlide((prev) => {
      const newSlide = prev === 0 ? benefits.length - visible : prev - 1;

      const cardWidth =
        scrollContainerRef.current.children[0]?.offsetWidth || 300;
      const gap = 16;

      scrollContainerRef.current.scrollTo({
        left: newSlide * (cardWidth + gap),
        behavior: "smooth",
      });

      return newSlide;
    });
  };

  const scrollRight = () => {
    handleManualInteraction();
    const visible = getVisibleCards();
    const maxSlide = benefits.length - visible;

    setCurrentSlide((prev) => {
      const newSlide = prev >= maxSlide ? 0 : prev + 1;

      const cardWidth =
        scrollContainerRef.current.children[0]?.offsetWidth || 300;
      const gap = 16;

      scrollContainerRef.current.scrollTo({
        left: newSlide * (cardWidth + gap),
        behavior: "smooth",
      });

      return newSlide;
    });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  return (
    <div className="min-h-[50vh] bg-gradient-to-b from-white to-blue-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-gray-900">
            Why Choose Us as Your Website Development Company?
          </h2>

          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            What makes us the best website development company in India?
          </p>
        </motion.div>

        {/* Controls */}
        <div className="flex items-center justify-between mb-4">
       

          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              className="p-2 rounded-lg bg-white shadow hover:shadow-md hover:scale-105 transition-all"
            >
              <ChevronLeft className="w-4 h-4 text-gray-700" />
            </button>

            <button
              onClick={scrollRight}
              className="p-2 rounded-lg bg-white shadow hover:shadow-md hover:scale-105 transition-all"
            >
              <ChevronRight className="w-4 h-4 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-6 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none" }}
            onScroll={handleManualInteraction}
          >
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex-shrink-0 w-[calc(100%-16px)] sm:w-[calc(50%-8px)] md:w-[calc(33.33%-10px)] lg:w-[calc(25%-12px)] snap-center"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative rounded-xl overflow-hidden group cursor-pointer h-full"
                >
                  {/* Border Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-all rounded-xl"></div>

                  {/* Card */}
                  <div className="relative bg-white rounded-xl p-5 h-full shadow-sm hover:shadow-xl border border-gray-100 transition-all">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md mb-4`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-700 mb-4">
                      {item.description}
                    </p>

                    {/* Stats */}
                    <div className="flex justify-between items-center border-t pt-4">
                      <div className="flex items-center gap-2">
                        <Rocket className="w-4 h-4 text-blue-500" />
                        <span className="text-xs text-gray-600">Benefit</span>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">
                        {item.stats}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
