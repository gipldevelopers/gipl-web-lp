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
      bgColor: "bg-[#F4F4F4]",
      accentColor: "from-[#27B0C4] to-[#73CCD7]"
    },
    {
      quote:
        "Most professional website development company in India. Among all website development companies in India, they stood out. Transparent, on-time, perfect quality.",
      name: "Priya Sharma",
      role: "Director, Sharma Consultancy",
      rating: 5,
      location: "Bangalore",
      project: "Corporate Website Development",
      bgColor: "bg-[#F4F4F4]",
      accentColor: "from-[#E67E22] to-[#D46A1A]"
    },
    {
      quote:
        "Exceptional website development with ongoing support. Their post-launch support is amazing. The website loads super fast and looks great on mobile!",
      name: "Vikram Patel",
      role: "CEO, TechVision Solutions",
      rating: 5,
      location: "Pune",
      project: "Web Application Development",
      bgColor: "bg-[#F4F4F4]",
      accentColor: "from-[#27B0C4] to-[#73CCD7]"
    },
    {
      quote:
        "Best for complex projects. Complex real estate portal handled beautifully. Definitely the best website development company in India for technical projects.",
      name: "Anjali Desai",
      role: "Managing Partner, Elite Properties",
      rating: 5,
      location: "Ahmedabad",
      project: "Real Estate Platform",
      bgColor: "bg-[#F4F4F4]",
      accentColor: "from-[#E67E22] to-[#D46A1A]"
    },
    {
      quote:
        "From startup to success. Built a robust platform that handles thousands of users daily. True expertise in web design & development services.",
      name: "Arjun Reddy",
      role: "Co-Founder, EduLearn India",
      rating: 5,
      location: "Hyderabad",
      project: "LMS Development",
      bgColor: "bg-[#F4F4F4]",
      accentColor: "from-[#27B0C4] to-[#73CCD7]"
    },
    {
      quote:
        "Amazing results, friendly team. Explained everything clearly. More inquiries than we imagined. Highly recommend this website development company!",
      name: "Neha Gupta",
      role: "Owner, Blissful Wellness Spa",
      rating: 5,
      location: "Delhi",
      project: "Business Website Development",
      bgColor: "bg-[#F4F4F4]",
      accentColor: "from-[#E67E22] to-[#D46A1A]"
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
    <div id="testimonials" className="bg-[#FFFFFF] py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-[#2C3E50]"
            style={{ fontFamily: 'var(--font-rubik)' }}
          >
            What Our Clients Say
          </h2>

          <p 
            className="text-sm sm:text-base text-[#7A7A7A] mb-4 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            Hear directly from businesses that have experienced our impact.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-[#F4F4F4] rounded-lg p-2 shadow-sm border border-[#F4F4F4]">
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center gap-1 mb-1">
                  <stat.icon className="w-3 h-3 text-[#E67E22]" />
                  <span 
                    className="text-sm font-bold text-[#2C3E50]"
                    style={{ fontFamily: 'var(--font-poppins)' }}
                  >
                    {stat.value}
                  </span>
                </div>
                <div 
                  className="text-[10px] text-[#7A7A7A]"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-[#27B0C4]" />
            <span 
              className="text-sm font-medium text-[#2C3E50]"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              Client Testimonials
            </span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              className="p-2 rounded-lg bg-white shadow hover:shadow-md transition-all hover:scale-105 border border-[#F4F4F4]"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4 text-[#2C3E50]" />
            </button>

            <button
              onClick={scrollRight}
              className="p-2 rounded-lg bg-white shadow hover:shadow-md transition-all hover:scale-105 border border-[#F4F4F4]"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 text-[#2C3E50]" />
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
                className="flex-shrink-0 w-[calc(100%-16px)] sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-10.666px)] snap-center"
              >
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="relative rounded-xl overflow-hidden group cursor-pointer h-full flex"
                >
                  <div className={`${t.bgColor} rounded-xl p-5 border border-[#F4F4F4] shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col`}>
                    {/* accent icon */}
                    <div className="mb-4 flex-shrink-0">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${t.accentColor} flex items-center justify-center shadow-md mb-2`}>
                        <Quote className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* quote */}
                    <div className="mb-4 flex-grow">
                      <p 
                        className="text-sm text-[#7A7A7A] leading-relaxed italic"
                        style={{ fontFamily: 'var(--font-poppins)' }}
                      >
                        "{t.quote}"
                      </p>
                    </div>

                    {/* rating */}
                    <div className="flex items-center gap-1 mb-4 flex-shrink-0">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#E67E22] fill-[#E67E22]" />
                      ))}
                      <span 
                        className="text-xs text-[#7A7A7A] ml-2"
                        style={{ fontFamily: 'var(--font-poppins)' }}
                      >
                        {t.rating}.0
                      </span>
                    </div>

                    {/* client info */}
                    <div className="pt-4 border-t border-[#F4F4F4] flex-shrink-0">
                      <div className="flex justify-between items-start">
                        <div className="min-w-0">
                          <h4 
                            className="font-semibold text-[#2C3E50] text-sm truncate mb-1"
                            style={{ fontFamily: 'var(--font-poppins)' }}
                          >
                            {t.name}
                          </h4>
                          <p 
                            className="text-xs text-[#7A7A7A] truncate"
                            style={{ fontFamily: 'var(--font-poppins)' }}
                          >
                            {t.role}
                          </p>
                          <p 
                            className="text-xs text-[#7A7A7A] mt-1"
                            style={{ fontFamily: 'var(--font-poppins)' }}
                          >
                            {t.project}
                          </p>
                        </div>
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
