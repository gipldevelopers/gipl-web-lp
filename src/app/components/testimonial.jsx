"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Target
} from "lucide-react";

export default function TestimonialsSlider() {
  const scrollContainerRef = useRef(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoPlayRef = useRef(null);
  const resumeTimeoutRef = useRef(null);

  const testimonials = [
    {
      quote:
        "Best website development company we've worked with. The new e-commerce site is fast, beautiful, and easy to manage. 60% increase in orders within 2 months!",
      name: "Rajesh Mehta",
      role: "Founder, Mehta Handicrafts",
      rating: 5,
      location: "Mumbai",
      project: "E-Commerce Website Development",
      bgColor: "bg-gradient-to-br from-blue-50 to-purple-50",
      accentColor: "from-blue-500 to-purple-500"
    },
    {
      quote:
        "Most professional website development company in India. Among all website development companies in India, they stood out. Transparent, on-time, perfect quality.",
      name: "Priya Sharma",
      role: "Director, Sharma Consultancy",
      rating: 5,
      location: "Bangalore",
      project: "Corporate Website Development",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      accentColor: "from-green-500 to-emerald-500"
    },
    {
      quote:
        "Exceptional website development with ongoing support. Their post-launch support is amazing. The website loads super fast and looks great on mobile!",
      name: "Vikram Patel",
      role: "CEO, TechVision Solutions",
      rating: 5,
      location: "Pune",
      project: "Web Application Development",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      accentColor: "from-purple-500 to-pink-500"
    },
    {
      quote:
        "Best for complex projects. Complex real estate portal handled beautifully. Definitely the best website development company in India for technical projects.",
      name: "Anjali Desai",
      role: "Managing Partner, Elite Properties",
      rating: 5,
      location: "Ahmedabad",
      project: "Real Estate Platform",
      bgColor: "bg-gradient-to-br from-orange-50 to-yellow-50",
      accentColor: "from-orange-500 to-yellow-500"
    },
    {
      quote:
        "From startup to success. Built a robust platform that handles thousands of users daily. True expertise in web design & development services.",
      name: "Arjun Reddy",
      role: "Co-Founder, EduLearn India",
      rating: 5,
      location: "Hyderabad",
      project: "LMS Development",
      bgColor: "bg-gradient-to-br from-cyan-50 to-blue-50",
      accentColor: "from-cyan-500 to-blue-500"
    },
    {
      quote:
        "Amazing results, friendly team. Explained everything clearly. More inquiries than we imagined. Highly recommend this website development company!",
      name: "Neha Gupta",
      role: "Owner, Blissful Wellness Spa",
      rating: 5,
      location: "Delhi",
      project: "Business Website Development",
      bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
      accentColor: "from-pink-500 to-rose-500"
    }
  ];

  const stats = [
    { value: "4.9/5", label: "Client Rating", icon: Star },
    { value: "98%", label: "Satisfaction", icon: Star },
    { value: "25+", label: "Projects", icon: Star },
    { value: "24/7", label: "Support", icon: Star }
  ];

  // Responsive visible cards count
  const getVisibleCards = () => {
    if (typeof window === "undefined") return 1;
    const width = window.innerWidth;
    if (width >= 1280) return 4; // xl and above
    if (width >= 1024) return 3; // lg
    if (width >= 640) return 2; // sm / tablet
    return 1; // mobile
  };

  // Resume auto-play after pause
  const resumeAutoPlay = () => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 4000); // resume after 4s of inactivity
  };

  const handleManualInteraction = () => {
    setIsAutoPlaying(false);
    resumeAutoPlay();
  };

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlaying || !scrollContainerRef.current) return;

    autoPlayRef.current = setInterval(() => {
      const visible = getVisibleCards();
      const maxSlide = Math.max(0, testimonials.length - visible);

      setCurrentSlide((prev) => {
        const next = prev >= maxSlide ? 0 : prev + 1;
        // scroll to next
        if (scrollContainerRef.current) {
          const card = scrollContainerRef.current.children[0];
          const cardWidth = card ? card.offsetWidth : 300;
          const gap = 16;
          scrollContainerRef.current.scrollTo({
            left: next * (cardWidth + gap),
            behavior: "smooth"
          });
        }
        return next;
      });
    }, 3000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAutoPlaying, testimonials.length]);

  // left and right scroll actions
  const scrollLeft = () => {
    handleManualInteraction();
    const visible = getVisibleCards();
    setCurrentSlide((prev) => {
      const newSlide = prev === 0 ? Math.max(0, testimonials.length - visible) : prev - 1;
      if (scrollContainerRef.current) {
        const card = scrollContainerRef.current.children[0];
        const cardWidth = card ? card.offsetWidth : 300;
        const gap = 16;
        scrollContainerRef.current.scrollTo({
          left: newSlide * (cardWidth + gap),
          behavior: "smooth"
        });
      }
      return newSlide;
    });
  };

  const scrollRight = () => {
    handleManualInteraction();
    const visible = getVisibleCards();
    const maxSlide = Math.max(0, testimonials.length - visible);
    setCurrentSlide((prev) => {
      const newSlide = prev >= maxSlide ? 0 : prev + 1;
      if (scrollContainerRef.current) {
        const card = scrollContainerRef.current.children[0];
        const cardWidth = card ? card.offsetWidth : 300;
        const gap = 16;
        scrollContainerRef.current.scrollTo({
          left: newSlide * (cardWidth + gap),
          behavior: "smooth"
        });
      }
      return newSlide;
    });
  };

  const handleDotClick = (index) => {
    handleManualInteraction();
    setCurrentSlide(index);
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.children[0];
      const cardWidth = card ? card.offsetWidth : 300;
      const gap = 16;
      scrollContainerRef.current.scrollTo({
        left: index * (cardWidth + gap),
        behavior: "smooth"
      });
    }
  };

  const handleScroll = () => {
    handleManualInteraction();
  };

  useEffect(() => {
    // If window resizes, ensure currentSlide is still visible by re-scrolling
    const onResize = () => {
      if (!scrollContainerRef.current) return;
      const card = scrollContainerRef.current.children[0];
      if (!card) return;
      const cardWidth = card.offsetWidth;
      const gap = 16;
      scrollContainerRef.current.scrollTo({
        left: currentSlide * (cardWidth + gap),
        behavior: "smooth"
      });
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [currentSlide]);

  const cardVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } }
  };

  return (
    <div id="testimonials" className="min-h-[40vh] bg-gradient-to-b from-white to-blue-50 py-6 md:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          

          <h2 className="text-xl sm:text-2xl font-bold mb-1 text-gray-900">
            Don't Just Take Our Word For It
          </h2>

          <p className="text-xs sm:text-sm text-gray-600 mb-4 max-w-xl mx-auto">
            Real clients. Real results.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-2 shadow-xs border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center gap-1 mb-1">
                  <stat.icon className="w-3 h-3 text-yellow-400" />
                  <span className="text-sm font-bold text-gray-900">{stat.value}</span>
                </div>
                <div className="text-[10px] text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-gray-700">Client Feedback</span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              className="p-2 rounded-lg bg-white shadow hover:shadow-md transition-transform hover:scale-105"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4 text-gray-700" />
            </button>

            <button
              onClick={scrollRight}
              className="p-2 rounded-lg bg-white shadow hover:shadow-md transition-transform hover:scale-105"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Scrollable container */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onScroll={handleScroll}
            onTouchStart={handleManualInteraction}
            onWheel={handleManualInteraction}
          >
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="flex-shrink-0 w-[calc(100%-16px)] sm:w-[calc(50%-12px)] md:w-[calc(33.333%-13.333px)] lg:w-[calc(25%-15px)] snap-center"
              >
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className={`relative rounded-xl overflow-hidden group cursor-pointer h-full ${t.bgColor}`}
                >
                  <div className="rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-200 h-full">
                    {/* accent icon */}
                    <div className="mb-3">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${t.accentColor} flex items-center justify-center shadow-md mb-2`}>
                        <Quote className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* quote */}
                    <div className="mb-3">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        "{t.quote}"
                      </p>
                    </div>

                    {/* rating */}
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400" />
                      ))}
                      <span className="text-xs text-gray-600 ml-2">{t.rating}.0</span>
                    </div>

                    {/* client info */}
                    <div className="pt-3 border-t border-white/50">
                      <div className="flex justify-between items-start">
                        <div className="min-w-0">
                          <h4 className="font-semibold text-gray-900 text-sm truncate">{t.name}</h4>
                          <p className="text-xs text-gray-600 truncate">{t.role}</p>
                        </div>

                        <span className="text-[10px] px-2 py-1 bg-white/80 rounded-full text-gray-700 whitespace-nowrap ml-2">
                          📍 {t.location} | {t.project}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

         
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
