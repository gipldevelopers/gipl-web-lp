"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Server, Database } from "lucide-react";

export default function ScrollStorySection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  const slides = [
    {
      id: 0,
      label: "FRONTEND",
      title: "UI & User Experience",
      description:
        "Modern, responsive, and conversion-focused interfaces that deliver smooth user journeys and strong brand impact.",
      icon: Palette,
      iconColor: "from-[#27B0C4] to-[#73CCD7]",
      shadowColor: "rgba(39,176,196,0.35)",
      labelColor: "text-[#27B0C4]",
      shape: "rounded-full",
      size: "w-[180px] h-[180px] sm:w-[200px] sm:h-[200px]",
      glowColor: "from-[#27B0C4]/25 via-[#73CCD7]/25 to-[#27B0C4]/25",
    },
    {
      id: 1,
      label: "BACKEND",
      title: "Business Logic & APIs",
      description:
        "Secure, scalable server-side systems with clean APIs, authentication, and third-party integrations.",
      icon: Server,
      iconColor: "from-[#2C3E50] to-[#7A7A7A]",
      shadowColor: "rgba(44,62,80,0.35)",
      labelColor: "text-[#2C3E50]",
      shape: "rounded-3xl",
      size: "w-[200px] h-[200px] sm:w-[220px] sm:h-[220px]",
      glowColor: "from-[#2C3E50]/25 via-[#7A7A7A]/25 to-[#2C3E50]/25",
    },
    {
      id: 2,
      label: "DATABASE",
      title: "Data & Performance",
      description:
        "High-performance databases designed for speed, security, backups, and long-term scalability.",
      icon: Database,
      iconColor: "from-[#E67E22] to-[#D46A1A]",
      shadowColor: "rgba(230,126,34,0.35)",
      labelColor: "text-[#E67E22]",
      shape: "rounded-[40px]",
      size: "w-[220px] h-[220px] sm:w-[240px] sm:h-[240px]",
      glowColor: "from-[#E67E22]/25 via-[#D46A1A]/25 to-[#E67E22]/25",
    },
  ];

  // Auto-play slider - changes every 5 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [slides.length]);

  // Reset interval when manually changing slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const currentSlideData = slides[currentSlide];
  const IconComponent = currentSlideData.icon;

  return (
    <section className="relative w-full overflow-hidden bg-[#FFF5EB] py-8 sm:py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <p 
            className="tracking-widest text-[#27B0C4] text-sm sm:text-base mb-2 font-medium"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            OUR EXPERTISE
          </p>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C3E50]"
            style={{ fontFamily: 'var(--font-rubik)' }}
          >
            Full-Stack Development
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 sm:gap-8 lg:gap-12">
          {/* ================= GRAPHICS ================= */}
          <div className="relative flex justify-center items-center min-h-[280px] sm:min-h-[320px]">
            {/* Soft Glow */}
            <motion.div
              key={currentSlide}
              initial={{ scale: 1, opacity: 0.3 }}
              animate={{ scale: 1.4, opacity: 0.25 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              className={`absolute w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] bg-gradient-to-r ${currentSlideData.glowColor} blur-[140px] rounded-full`}
            />

            {/* Icon Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.85, rotate: 10 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className={`absolute ${currentSlideData.size} ${currentSlideData.shape} bg-gradient-to-br ${currentSlideData.iconColor} flex items-center justify-center text-white`}
                style={{
                  boxShadow: `0 25px 60px ${currentSlideData.shadowColor}`,
                }}
              >
                <motion.div
                  animate={{ y: [-12, 0, -12] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <IconComponent size={75} strokeWidth={1.2} />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ================= CONTENT ================= */}
          <div className="relative min-h-[280px] sm:min-h-[320px] text-[#2C3E50]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <p
                  className={`tracking-widest ${currentSlideData.labelColor} text-sm sm:text-base mt-2 mb-2 font-medium`}
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  {currentSlideData.label}
                </p>
                <h3
                  className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4 text-[#2C3E50]"
                  style={{ fontFamily: 'var(--font-rubik)' }}
                >
                  {currentSlideData.title}
                </h3>
                <p 
                  className="text-[#7A7A7A] max-w-md leading-relaxed text-sm sm:text-base"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  {currentSlideData.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ================= DOT NAVIGATION ================= */}
        <div className="flex justify-center items-center gap-3 mt-6 sm:mt-8">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className="focus:outline-none focus:ring-2 focus:ring-[#27B0C4] focus:ring-offset-2 rounded-full transition-all duration-300"
              aria-label={`Go to slide ${index + 1}`}
            >
              <motion.div
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-[#27B0C4] w-8"
                    : "bg-[#7A7A7A] hover:bg-[#27B0C4]/50"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
