"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  ArrowUpRight
} from 'lucide-react';

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
  color: "from-blue-500 to-purple-500",
  bgColor: "bg-gradient-to-br from-blue-50 to-purple-50",
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
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
    metrics: ["90%", "Increase in Inquiries", "120%", "Traffic Growth"],
    tech: ["Next.js", "Tailwind CSS", "WordPress"],
  },

  {
    quarter: "Case Study 3",
    title: "Ask Nani",
    url : "https://asknani-frontend-omega.vercel.app/",
    challenge:
      "Platform for sharing traditional recipes with modern UI and search functionality.",
    solution:
      "User accounts, recipe search with filters, step-by-step instructions, and regional categories.",
    icon: Users,
    color: "from-orange-500 to-yellow-500",
    bgColor: "bg-gradient-to-br from-orange-50 to-yellow-50",
    metrics: ["15,000+", "Registered Users", "2,500+", "Recipes Uploaded"],
    tech: ["WordPress", "Custom PHP", "MySQL"],
  },

  {
    quarter: "Case Study 4",
    title: "Divine Spiritual",
    url : "https://www.divinspiritualhealing.com/",
    challenge:
      "Dual-purpose platform needed: online store + event booking for meditation sessions.",
    solution:
      "WooCommerce store, booking calendar, multi-payment gateways, blog, and multi-language support.",
    icon: Rocket,
    color: "from-red-500 to-pink-500",
    bgColor: "bg-gradient-to-br from-red-50 to-pink-50",
    metrics: ["₹25L+", "Revenue in Year One", "500+", "Event Bookings"],
    tech: ["WooCommerce", "Laravel", "Razorpay"],
  },
];


  // Calculate visible cards based on screen size
  const getVisibleCards = () => {
    if (typeof window === 'undefined') return 1;
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
      
      setCurrentSlide(prev => {
        const nextSlide = prev >= maxSlide ? 0 : prev + 1;
        
        // Scroll to next slide
        if (scrollContainerRef.current) {
          const cardWidth = scrollContainerRef.current.children[0]?.offsetWidth || 300;
          const gap = 16; // gap-4 = 16px
          scrollContainerRef.current.scrollTo({
            left: nextSlide * (cardWidth + gap),
            behavior: 'smooth'
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
    setCurrentSlide(prev => {
      const newSlide = prev === 0 ? caseStudies.length - visibleCards : prev - 1;
      
      if (scrollContainerRef.current) {
        const cardWidth = scrollContainerRef.current.children[0]?.offsetWidth || 300;
        const gap = 16;
        scrollContainerRef.current.scrollTo({
          left: newSlide * (cardWidth + gap),
          behavior: 'smooth'
        });
      }
      
      return newSlide;
    });
  };

  const scrollRight = () => {
    handleManualInteraction();
    const visibleCards = getVisibleCards();
    const maxSlide = caseStudies.length - visibleCards;
    
    setCurrentSlide(prev => {
      const newSlide = prev >= maxSlide ? 0 : prev + 1;
      
      if (scrollContainerRef.current) {
        const cardWidth = scrollContainerRef.current.children[0]?.offsetWidth || 300;
        const gap = 16;
        scrollContainerRef.current.scrollTo({
          left: newSlide * (cardWidth + gap),
          behavior: 'smooth'
        });
      }
      
      return newSlide;
    });
  };

  const handleDotClick = (index) => {
    handleManualInteraction();
    setCurrentSlide(index);
    
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0]?.offsetWidth || 300;
      const gap = 16;
      scrollContainerRef.current.scrollTo({
        left: index * (cardWidth + gap),
        behavior: 'smooth'
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
        damping: 12
      }
    }
  };

  return (
    <div id="case" className="min-h-[50vh] bg-gradient-to-b from-white to-blue-50 py-8 md:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-gray-900">
            Real Results: Our Mini Case Studies
          </h2>
          
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto mb-6">
            See how our technology-first approach turned business challenges into measurable success stories.
          </p>

          {/* Stats Summary */}
         
        </motion.div>

        {/* Scroll Controls */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-gray-700">Recent Case Studies</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              className="p-2 rounded-lg bg-white shadow hover:shadow-md transition-all hover:scale-105"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4 text-gray-700" />
            </button>
            <button
              onClick={scrollRight}
              className="p-2 rounded-lg bg-white shadow hover:shadow-md transition-all hover:scale-105"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Scrollable Case Studies Container */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-6 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
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
                className="flex-shrink-0 w-[calc(100%-16px)] sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-10.666px)] snap-center"
              >
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="relative rounded-xl overflow-hidden group cursor-pointer h-full"
                >
                  {/* Main Card */}
                  <div className={`${study.bgColor} rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-200 h-full`}>
                    
                    {/* Header */}
                  <div className="mb-4">
  <div className="flex items-center justify-between mb-3">
    <div className="flex items-center gap-2">
      <div
        className={`w-10 h-10 rounded-lg bg-gradient-to-r ${study.color} flex items-center justify-center shadow-md`}
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
            className="text-sm font-bold text-gray-900 hover:text-blue-600 flex items-center gap-1"
          >
            {study.title}
            {/* <ArrowUpRight className="w-3 h-3 opacity-60" /> */}
          </a>
        ) : (
          <div className="text-sm font-bold text-gray-900">{study.title}</div>
        )}
      </div>
    </div>
    {/* Optional Arrow on right */}
    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
  </div>

  
</div>


                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {[0, 2].map((startIdx) => (
                        <div key={startIdx} className="bg-white/80 rounded-lg p-2 text-center">
                          <div className="text-lg font-bold text-gray-900">{study.metrics[startIdx]}</div>
                          <div className="text-xs text-gray-600">{study.metrics[startIdx + 1]}</div>
                        </div>
                      ))}
                    </div>

                    {/* Challenge & Solution */}
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-1 mb-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-sm font-medium text-gray-800">Challenge</span>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-1 mb-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm font-medium text-gray-800">Solution</span>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1 mt-4 pt-4 border-t border-white/50">
                      {["Next.js", "Tailwind CSS", "TypeScript", "Vercel"].map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-white/70 rounded-md text-xs text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
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
  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 max-w-3xl mx-auto">
    <h3 className="text-xl font-bold text-white mb-2">
      Ready to See These Results?
    </h3>

    <p className="text-blue-100 mb-4">
      Let's discuss how we can transform your digital presence.
    </p>

    <motion.a
      href="https://gohilinfotech.com/contact"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 
                 bg-white text-blue-600 
                 px-6 py-2.5 rounded-lg font-semibold 
                 hover:shadow-lg transition-all"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      aria-label="Schedule Free Consultation"
    >
      <CheckCircle className="w-4 h-4" />
      Schedule Free Consultation
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