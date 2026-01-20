"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Shield,
  Users,
  Zap,
  Target,
  CheckCircle,
  Rocket,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

export default function CaseStudiesSlider() {
  const scrollContainerRef = useRef(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoPlayRef = useRef(null);
  const resumeTimeoutRef = useRef(null);

  const caseStudies = [
    {
      quarter: "Case Study 1",
      title: "Housepire",
      url: "https://houspire.ai",
      challenge:
        "Needed modern website development for luxury property listings with virtual tours and advanced search.",
      solution:
        "Built custom platform with property filters, 360° tours, lead capture, and mobile-responsive design.",
      icon: Target,
      color: "from-[#27B0C4] to-[#73CCD7]",
      metrics: ["75%", "Increase in Inquiries", "45%", "More Lead Conversions"],
      tech: ["React.js", "Node.js", "MongoDB", "AWS"],
    },

    {
      quarter: "Case Study 2",
      title: "Novotion",
      url: "https://share.google/0BT6R4lglIjF2at9D",
      challenge:
        "Creative agency needed website development showcasing their work with fast performance.",
      solution:
        "Interactive portfolio with smooth animations, blog integration, and SEO optimization.",
      icon: Zap,
      color: "from-[#E67E22] to-[#D46A1A]",
      metrics: ["90%", "Increase in Inquiries", "120%", "Traffic Growth"],
      tech: ["Next.js", "Tailwind CSS", "node.js", "AWS"],
    },

    {
      quarter: "Case Study 3",
      title: "Ask Nani",
      url: "https://asknani-frontend-omega.vercel.app/",
      challenge:
        "Platform for sharing traditional recipes with modern UI and search functionality.",
      solution:
        "User accounts, recipe search with filters, step-by-step instructions, and regional categories.",
      icon: Users,
      color: "from-[#27B0C4] to-[#73CCD7]",
      metrics: ["15,000+", "Registered Users", "2,500+", "Recipes Uploaded"],
      tech: ["Laravel", "Razorpay", "MySQL","AWS"],
    },

    {
      quarter: "Case Study 4",
      title: "Divine Spiritual",
      url: "https://www.divinspiritualhealing.com/",
      challenge:
        "Dual-purpose platform needed: online store + event booking for meditation sessions.",
      solution:
        "WooCommerce store, booking calendar, multi-payment gateways, blog, and multi-language support.",
      icon: Rocket,
      color: "from-[#E67E22] to-[#D46A1A]",
      metrics: ["₹25L+", "Revenue in Year One", "500+", "Event Bookings"],
      tech: ["HTML","CSS","JS","PHP" ],
    },
  ];

  // Calculate visible cards based on screen size
  const getVisibleCards = () => {
    if (typeof window === "undefined") return 1;
    const width = window.innerWidth;
    if (width >= 1024) return 3; // Desktop
    if (width >= 640) return 2; // Tablet
    return 1; // Mobile
  };

  // Resume auto-play after 5 seconds
  const resumeAutoPlay = () => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }

    resumeTimeoutRef.current = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000); // Resume after 5 seconds
  };

  // Handle manual interaction
  const handleManualInteraction = () => {
    setIsAutoPlaying(false);
    resumeAutoPlay();
  };

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying || !scrollContainerRef.current) return;

    autoPlayRef.current = setInterval(() => {
      const visibleCards = getVisibleCards();
      const maxSlide = caseStudies.length - visibleCards;

      setCurrentSlide((prev) => {
        const nextSlide = prev >= maxSlide ? 0 : prev + 1;

        // Scroll to next slide
        if (scrollContainerRef.current) {
          const cardWidth =
            scrollContainerRef.current.children[0]?.offsetWidth || 300;
          const gap = 16; // gap-4 = 16px
          scrollContainerRef.current.scrollTo({
            left: nextSlide * (cardWidth + gap),
            behavior: "smooth",
          });
        }

        return nextSlide;
      });
    }, 3000); // 3 seconds

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, [isAutoPlaying, caseStudies.length]);

  const scrollLeft = () => {
    handleManualInteraction();
    const visibleCards = getVisibleCards();
    setCurrentSlide((prev) => {
      const newSlide =
        prev === 0 ? caseStudies.length - visibleCards : prev - 1;

      if (scrollContainerRef.current) {
        const cardWidth =
          scrollContainerRef.current.children[0]?.offsetWidth || 300;
        const gap = 16;
        scrollContainerRef.current.scrollTo({
          left: newSlide * (cardWidth + gap),
          behavior: "smooth",
        });
      }

      return newSlide;
    });
  };

  const scrollRight = () => {
    handleManualInteraction();
    const visibleCards = getVisibleCards();
    const maxSlide = caseStudies.length - visibleCards;

    setCurrentSlide((prev) => {
      const newSlide = prev >= maxSlide ? 0 : prev + 1;

      if (scrollContainerRef.current) {
        const cardWidth =
          scrollContainerRef.current.children[0]?.offsetWidth || 300;
        const gap = 16;
        scrollContainerRef.current.scrollTo({
          left: newSlide * (cardWidth + gap),
          behavior: "smooth",
        });
      }

      return newSlide;
    });
  };

  const handleDotClick = (index) => {
    handleManualInteraction();
    setCurrentSlide(index);

    if (scrollContainerRef.current) {
      const cardWidth =
        scrollContainerRef.current.children[0]?.offsetWidth || 300;
      const gap = 16;
      scrollContainerRef.current.scrollTo({
        left: index * (cardWidth + gap),
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    handleManualInteraction();
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div
      id="case"
      className="bg-[#E67E22]/10 py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-[#2C3E50]"
            style={{ fontFamily: 'var(--font-rubik)' }}
          >
            Real Results: Our Mini Case Studies
          </h2>

          <p 
            className="text-sm sm:text-base text-[#7A7A7A] max-w-3xl mx-auto mb-6"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            See how our technology-first approach turned business challenges
            into measurable success stories.
          </p>

          {/* Stats Summary */}
        </motion.div>

        {/* Scroll Controls */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-[#27B0C4]" />
            <span 
              className="text-sm font-medium text-[#2C3E50]"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              Recent Case Studies
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

        {/* Scrollable Case Studies Container */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-6 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onScroll={handleScroll}
            onTouchStart={handleManualInteraction}
            onWheel={handleManualInteraction}
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[380px] snap-center"
              >
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="relative rounded-xl overflow-hidden group cursor-pointer h-full flex"
                >
                  {/* Gradient Border on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#27B0C4] via-[#73CCD7] to-[#E67E22] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Main Card */}
                  <div
                    className="relative bg-white rounded-xl p-5 border border-[#F4F4F4] shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col min-h-[500px]"
                  >
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-10 h-10 rounded-lg bg-gradient-to-r ${study.color} flex items-center justify-center shadow-md flex-shrink-0`}
                          >
                            <study.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            {/* ✅ Make title clickable */}
                            {study.url ? (
                              <a
                                href={study.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-bold text-[#2C3E50] hover:text-[#27B0C4] flex items-center gap-1"
                                style={{ fontFamily: 'var(--font-poppins)' }}
                              >
                                {study.title}
                                {/* <ArrowUpRight className="w-3 h-3 opacity-60" /> */}
                              </a>
                            ) : (
                              <div 
                                className="text-sm font-bold text-[#2C3E50]"
                                style={{ fontFamily: 'var(--font-poppins)' }}
                              >
                                {study.title}
                              </div>
                            )}
                          </div>
                        </div>
                        <a
                          href={study.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-bold text-[#2C3E50] hover:text-[#27B0C4] flex items-center gap-1"
                        >
                          {/* Optional Arrow on right */}
                          <ArrowUpRight className="w-4 h-4 text-[#7A7A7A] group-hover:text-[#27B0C4] transition-colors" />
                        </a>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {[0, 2].map((startIdx) => (
                        <div
                          key={startIdx}
                          className="bg-[#F4F4F4] rounded-lg p-2 text-center border border-[#F4F4F4]"
                        >
                          <div 
                            className="text-lg font-bold text-[#2C3E50]"
                            style={{ fontFamily: 'var(--font-poppins)' }}
                          >
                            {study.metrics[startIdx]}
                          </div>
                          <div 
                            className="text-xs text-[#7A7A7A]"
                            style={{ fontFamily: 'var(--font-poppins)' }}
                          >
                            {study.metrics[startIdx + 1]}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Challenge & Solution */}
                    <div className="space-y-4 flex-grow">
                      <div>
                        <div className="flex items-center gap-1 mb-2">
                          <div className="w-2 h-2 bg-[#E67E22] rounded-full"></div>
                          <span 
                            className="text-sm font-medium text-[#2C3E50]"
                            style={{ fontFamily: 'var(--font-poppins)' }}
                          >
                            Challenge
                          </span>
                        </div>
                        <p 
                          className="text-sm text-[#7A7A7A] leading-relaxed"
                          style={{ fontFamily: 'var(--font-poppins)' }}
                        >
                          {study.challenge}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-1 mb-2">
                          <div className="w-2 h-2 bg-[#27B0C4] rounded-full"></div>
                          <span 
                            className="text-sm font-medium text-[#2C3E50]"
                            style={{ fontFamily: 'var(--font-poppins)' }}
                          >
                            Solution
                          </span>
                        </div>
                        <p 
                          className="text-sm text-[#7A7A7A] leading-relaxed"
                          style={{ fontFamily: 'var(--font-poppins)' }}
                        >
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1 mt-4 pt-4 border-t border-[#F4F4F4]">
                      {study.tech.map(
                        (tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-[#F4F4F4] rounded-md text-xs text-[#2C3E50] border border-[#F4F4F4]"
                            style={{ fontFamily: 'var(--font-poppins)' }}
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <div className="bg-[#27B0C4] rounded-xl p-6 max-w-3xl mx-auto border border-[#27B0C4]">
            <h3 
              className="text-xl font-bold text-white mb-2"
              style={{ fontFamily: 'var(--font-rubik)' }}
            >
              Ready to See These Results?
            </h3>

            <p 
              className="text-white/90 mb-4"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              Let's discuss how we can transform your digital presence.
            </p>

            <motion.a
              href="https://gohilinfotech.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 
                 bg-white text-[#2C3E50] 
                 px-6 py-2.5 rounded-lg font-semibold 
                 hover:shadow-lg hover:bg-white/90 transition-all border border-white/20"
              style={{ fontFamily: 'var(--font-poppins)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Schedule Free Consultation"
            >
              <CheckCircle className="w-4 h-4 text-[#2C3E50]" />
              <span className="text-[#2C3E50]">Schedule Free Consultation</span>
            </motion.a>
          </div>
        </motion.div>
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
