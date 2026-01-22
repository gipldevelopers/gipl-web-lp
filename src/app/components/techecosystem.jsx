"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Rocket,
  Cpu,
  Sparkles,
  Target,
} from "lucide-react";

export default function TechEcosystem() {
  const scrollContainerRef = useRef(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoPlayRef = useRef(null);
  const resumeTimeoutRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPosition, setScrollLeftPosition] = useState(0);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const animationFrameRef = useRef(null);

  const techStack = [
    {
      iconPath: "/gipl icons_react.svg",
      name: "React.js",
      category: "Frontend",
      description:
        "Build fast, interactive websites with reusable components and smooth user experience.",
      color: "from-[#27B0C4] to-[#73CCD7]",
      iconColor: "text-white",
      bgColor: "#DDF6FA",
      borderColor: "#27B0C4",
      features: [
        "Fast Loading",
        "Interactive UI",
        "Reusable Code",
        "SEO Ready",
      ],
      performance: "99.9%",
    },
    {
      iconPath: "/gipl icons_next js.svg",
      name: "Next.js",
      category: "Frontend",
      description:
        "Create SEO friendly websites that rank higher on Google with fast page loads.",
      color: "from-[#2C3E50] to-[#7A7A7A]",
      iconColor: "text-white",
      bgColor: "#E6EBF0",
      borderColor: "#2C3E50",
      features: [
        "SEO Optimized",
        "Fast Performance",
        "Easy Routing",
        "Built-in Optimization",
      ],
      performance: "99.95%",
    },
    {
      iconPath: "/gipl icons_node js.svg",
      name: "Node.js/Express",
      category: "Backend",
      description:
        "Power your website with reliable backend technology for APIs and server functions.",
      color: "from-[#27B0C4] to-[#73CCD7]",
      iconColor: "text-white",
      bgColor: "#DDF6FA",
      borderColor: "#27B0C4",
      features: [
        "Scalable",
        "Fast Processing",
        "API Development",
        "Real-time Support",
      ],
      performance: "99.9%",
    },
    {
      iconPath: "/gipl icons_tailwind css.svg",
      name: "Tailwind CSS",
      category: "Frontend",
      description:
        "Design beautiful, responsive websites faster with modern CSS framework.",
      color: "from-[#E67E22] to-[#D46A1A]",
      iconColor: "text-white",
      bgColor: "#FDE9D9",
      borderColor: "#E67E22",
      features: [
        "Mobile Friendly",
        "Quick Design",
        "Custom Styling",
        "Clean Code",
      ],
      performance: "100%",
    },
    {
      iconPath: "/gipl icons_firebase.svg",
      name: "Firebase/Supabase",
      category: "Database/Auth",
      description:
        "Store data securely with real time updates and user authentication features.",
      color: "from-[#E67E22] to-[#D46A1A]",
      iconColor: "text-white",
      bgColor: "#FDE9D9",
      borderColor: "#E67E22",
      features: ["Real-time Data", "User Login", "Cloud Storage", "Secure"],
      performance: "99.95%",
    },
    {
      iconPath: "/gipl icons_typescript.svg",
      name: "TypeScript",
      category: "Language",
      description:
        "Write cleaner, error free code that's easier to maintain and scale over time.",
      color: "from-[#27B0C4] to-[#73CCD7]",
      iconColor: "text-white",
      bgColor: "#DDF6FA",
      borderColor: "#27B0C4",
      features: [
        "Error Prevention",
        "Better Code Quality",
        "Easy Maintenance",
        "Industry Standard",
      ],
      performance: "100%",
    },
    {
      iconPath: "/gipl icons_vue.svg",
      name: "Vue.js",
      category: "Frontend",
      description:
        "Build lightweight, fast websites with simple yet powerful frontend framework.",
      color: "from-[#27B0C4] to-[#73CCD7]",
      iconColor: "text-white",
      bgColor: "#DDF6FA",
      borderColor: "#27B0C4",
      features: [
        "Easy to Learn",
        "Lightweight",
        "Fast Rendering",
        "Flexible Design",
      ],
      performance: "99.9%",
    },
    {
      iconPath: "/gipl icons_angular.svg",
      name: "Angular",
      category: "Frontend",
      description:
        "Develop large scale business applications with Google's trusted framework.",
      color: "from-[#2C3E50] to-[#7A7A7A]",
      iconColor: "text-white",
      bgColor: "#E6EBF0",
      borderColor: "#2C3E50",
      features: [
        "Enterprise Ready",
        "Full-featured",
        "Stable",
        "Long-term Support",
      ],
      performance: "99.8%",
    },
    {
      iconPath: "/gipl icons_php and laravel.svg",
      name: "PHP/Laravel",
      category: "Backend",
      description:
        "Build secure, database driven websites with popular PHP framework.",
      color: "from-[#E67E22] to-[#D46A1A]",
      iconColor: "text-white",
      bgColor: "#FDE9D9",
      borderColor: "#E67E22",
      features: [
        "Secure Coding",
        "Database Management",
        "Clean Structure",
        "Proven Technology",
      ],
      performance: "99.9%",
    },
    {
      iconPath: "/gipl icons_python adn django.svg",
      name: "Python/Django",
      category: "Backend",
      description:
        "Create complex web applications quickly with powerful Python framework.",
      color: "from-[#27B0C4] to-[#73CCD7]",
      iconColor: "text-white",
      bgColor: "#DDF6FA",
      borderColor: "#27B0C4",
      features: [
        "Fast Development",
        "Built-in Features",
        "Secure by Default",
        "Admin Dashboard",
      ],
      performance: "99.95%",
    },
    {
      iconPath: "/gipl icons_.net.svg",
      name: ".NET",
      category: "Backend",
      description:
        "Build enterprise level applications with Microsoft's reliable framework.",
      color: "from-[#2C3E50] to-[#7A7A7A]",
      iconColor: "text-white",
      bgColor: "#E6EBF0",
      borderColor: "#2C3E50",
      features: [
        "High Performance",
        "Cross-platform",
        "Cloud Integration",
        "Enterprise Grade",
      ],
      performance: "99.9%",
    },
    {
      iconPath: "/gipl icons_vercel.svg",
      name: "Vercel",
      category: "Hosting",
      description:
        "Host your website on fast global servers for best performance worldwide.",
      color: "from-[#2C3E50] to-[#7A7A7A]",
      iconColor: "text-white",
      bgColor: "#E6EBF0",
      borderColor: "#2C3E50",
      features: [
        "Global CDN",
        "Instant Updates",
        "Performance Analytics",
        "24/7 Uptime",
      ],
      performance: "99.99%",
    },
    {
      iconPath: "/gipl icons_html and css.svg",
      name: "HTML5 & CSS3",
      category: "Frontend",
      description:
        "Build modern, accessible websites with latest web standards and best practices.",
      color: "from-[#E67E22] to-[#D46A1A]",
      iconColor: "text-white",
      bgColor: "#FDE9D9",
      borderColor: "#E67E22",
      features: ["Web Standards", "All Browsers", "Accessible", "Mobile Ready"],
      performance: "100%",
    },
    {
      iconPath: "/gipl icons_java script.svg",
      name: "JavaScript",
      category: "Language",
      description:
        "Add interactive features and dynamic content to engage your website visitors.",
      color: "from-[#27B0C4] to-[#73CCD7]",
      iconColor: "text-white",
      bgColor: "#DDF6FA",
      borderColor: "#27B0C4",
      features: [
        "Interactive",
        "Dynamic Content",
        "Modern Features",
        "Universal Support",
      ],
      performance: "100%",
    },
  ];

  // Calculate visible cards based on screen size
  const getVisibleCards = () => {
    if (typeof window === "undefined") return 1;
    const width = window.innerWidth;
    if (width >= 1024) return 4;
    if (width >= 768) return 3;
    if (width >= 640) return 2;
    return 1;
  };

  // Resume auto-play after 5 seconds
  const resumeAutoPlay = () => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }

    resumeTimeoutRef.current = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000);
  };

  // Handle manual interaction
  const handleManualInteraction = () => {
    setIsAutoPlaying(false);
    resumeAutoPlay();
  };

  // Smooth momentum scrolling
  const applyMomentum = () => {
    if (!scrollContainerRef.current || velocityRef.current === 0) return;
    
    velocityRef.current *= 0.95; // Friction
    scrollContainerRef.current.scrollLeft -= velocityRef.current;
    
    if (Math.abs(velocityRef.current) > 0.5) {
      animationFrameRef.current = requestAnimationFrame(applyMomentum);
    } else {
      velocityRef.current = 0;
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    if (!scrollContainerRef.current) return;
    
    // Cancel any ongoing momentum
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    velocityRef.current = 0;
    
    setIsDragging(true);
    const rect = scrollContainerRef.current.getBoundingClientRect();
    setStartX(e.pageX - rect.left);
    setScrollLeftPosition(scrollContainerRef.current.scrollLeft);
    lastXRef.current = e.pageX;
    handleManualInteraction();
    scrollContainerRef.current.style.cursor = "grabbing";
    scrollContainerRef.current.style.userSelect = "none";
    scrollContainerRef.current.style.scrollBehavior = "auto";
  };

  const handleMouseLeave = () => {
    if (isDragging && scrollContainerRef.current) {
      const currentX = lastXRef.current;
      const deltaX = currentX - startX;
      velocityRef.current = deltaX * 0.3; // Momentum multiplier
      applyMomentum();
    }
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = "grab";
      scrollContainerRef.current.style.userSelect = "auto";
      scrollContainerRef.current.style.scrollBehavior = "smooth";
    }
  };

  const handleMouseUp = () => {
    if (isDragging && scrollContainerRef.current && Math.abs(velocityRef.current) > 1) {
      // Apply momentum based on last movement
      velocityRef.current *= 0.3; // Momentum multiplier
      applyMomentum();
    }
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = "grab";
      scrollContainerRef.current.style.userSelect = "auto";
      scrollContainerRef.current.style.scrollBehavior = "smooth";
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    
    const rect = scrollContainerRef.current.getBoundingClientRect();
    const x = e.pageX - rect.left;
    const walk = (x - startX) * 1.2; // Reduced multiplier for smoother control
    scrollContainerRef.current.scrollLeft = scrollLeftPosition - walk;
    
    // Calculate velocity for momentum
    const deltaX = e.pageX - lastXRef.current;
    velocityRef.current = deltaX;
    lastXRef.current = e.pageX;
  };

  // Touch handlers for mobile
  const touchStartXRef = useRef(0);
  const touchLastXRef = useRef(0);

  const handleTouchStart = (e) => {
    if (!scrollContainerRef.current) return;
    
    // Cancel any ongoing momentum
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    velocityRef.current = 0;
    
    setIsDragging(true);
    const rect = scrollContainerRef.current.getBoundingClientRect();
    touchStartXRef.current = e.touches[0].pageX - rect.left;
    touchLastXRef.current = e.touches[0].pageX;
    setStartX(touchStartXRef.current);
    setScrollLeftPosition(scrollContainerRef.current.scrollLeft);
    handleManualInteraction();
    scrollContainerRef.current.style.scrollBehavior = "auto";
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    
    const rect = scrollContainerRef.current.getBoundingClientRect();
    const x = e.touches[0].pageX - rect.left;
    const walk = (x - touchStartXRef.current) * 1.2; // Reduced multiplier for smoother control
    scrollContainerRef.current.scrollLeft = scrollLeftPosition - walk;
    
    // Calculate velocity for momentum
    const deltaX = e.touches[0].pageX - touchLastXRef.current;
    velocityRef.current = deltaX;
    touchLastXRef.current = e.touches[0].pageX;
  };

  const handleTouchEnd = () => {
    if (isDragging && scrollContainerRef.current && Math.abs(velocityRef.current) > 1) {
      // Apply momentum based on last movement
      velocityRef.current *= 0.3; // Momentum multiplier
      applyMomentum();
    }
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.scrollBehavior = "smooth";
    }
  };

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying || !scrollContainerRef.current) return;

    autoPlayRef.current = setInterval(() => {
      const visibleCards = getVisibleCards();
      const maxSlide = techStack.length - visibleCards;

      setCurrentSlide((prev) => {
        const nextSlide = prev >= maxSlide ? 0 : prev + 1;

        if (scrollContainerRef.current) {
          const cardWidth =
            scrollContainerRef.current.children[0]?.offsetWidth || 300;
          const gap = 16;
          scrollContainerRef.current.scrollTo({
            left: nextSlide * (cardWidth + gap),
            behavior: "smooth",
          });
        }

        return nextSlide;
      });
    }, 3000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isAutoPlaying, techStack.length]);

  const scrollLeft = () => {
    handleManualInteraction();
    const visibleCards = getVisibleCards();
    setCurrentSlide((prev) => {
      const newSlide = prev === 0 ? techStack.length - visibleCards : prev - 1;

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
    const maxSlide = techStack.length - visibleCards;

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
      id="tech"
      className="bg-[#F4F4F4] py-6 sm:py-8 md:py-10 px-3 sm:px-4 md:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4 sm:mb-6"
        >
          <h2 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1.5 sm:mb-2 text-[#2C3E50] px-2"
            style={{ fontFamily: 'var(--font-rubik)' }}
          >
            Our Tech Ecosystem
          </h2>

          <p 
            className="text-xs sm:text-sm md:text-base text-[#7A7A7A] max-w-2xl mx-auto px-2"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            We use proven, modern technologies that deliver fast, secure, and
            scalable websites for your business.
          </p>
        </motion.div>

        {/* Scroll Controls */}
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#27B0C4]" />
            <span 
              className="text-xs sm:text-sm font-medium text-[#2C3E50]"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              Technology Stack
            </span>
          </div>
          <div className="flex gap-1.5 sm:gap-2">
            <button
              onClick={scrollLeft}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white shadow hover:shadow-md transition-all hover:scale-105 border border-[#F4F4F4] touch-manipulation active:scale-95 flex items-center justify-center"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2C3E50]" />
            </button>
            <button
              onClick={scrollRight}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white shadow hover:shadow-md transition-all hover:scale-105 border border-[#F4F4F4] touch-manipulation active:scale-95 flex items-center justify-center"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2C3E50]" />
            </button>
          </div>
        </div>

        {/* Scrollable Cards Container */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide pb-4 sm:pb-6 snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none touch-pan-x"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", scrollBehavior: "smooth" }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onScroll={handleScroll}
            onWheel={handleManualInteraction}
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="flex-shrink-0 w-[calc(100%-12px)] sm:w-[calc(50%-6px)] md:w-[calc(33.333%-8px)] lg:w-[calc(25%-9px)] snap-center"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative rounded-xl overflow-hidden group cursor-pointer h-full"
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#27B0C4] via-[#73CCD7] to-[#E67E22] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Main Card */}
                  <div className="relative bg-white rounded-xl p-3 sm:p-4 md:p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#F4F4F4] h-full">
                    {/* Header with icon */}
                    <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center shadow-md flex-shrink-0 border p-2"
                        style={{ backgroundColor: tech.bgColor, borderColor: tech.borderColor }}
                      >
                        <img 
                          src={tech.iconPath} 
                          alt={tech.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h3 
                            className="text-base sm:text-lg font-bold text-[#2C3E50] truncate"
                            style={{ fontFamily: 'var(--font-poppins)' }}
                          >
                            {tech.name}
                          </h3>
                          <motion.div
                            animate={{ rotate: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#27B0C4] rounded-full flex-shrink-0"
                          />
                        </div>
                        <p 
                          className="text-xs sm:text-sm text-[#7A7A7A] mt-0.5 sm:mt-1"
                          style={{ fontFamily: 'var(--font-poppins)' }}
                        >
                          {tech.category}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p 
                      className="text-xs sm:text-sm text-[#7A7A7A] mb-3 sm:mb-4 leading-relaxed"
                      style={{ fontFamily: 'var(--font-poppins)' }}
                    >
                      {tech.description}
                    </p>

                    {/* Features */}
                    <div className="mb-3 sm:mb-4">
                      <div className="flex items-center gap-1 mb-1.5 sm:mb-2">
                        <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#27B0C4]" />
                        <span 
                          className="text-[10px] sm:text-xs font-semibold text-[#2C3E50]"
                          style={{ fontFamily: 'var(--font-poppins)' }}
                        >
                          Key Features
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {tech.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-[#F4F4F4] rounded-md text-[10px] sm:text-xs text-[#2C3E50] border border-[#F4F4F4]"
                            style={{ fontFamily: 'var(--font-poppins)' }}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Performance Indicator */}
                    <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-[#F4F4F4]">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <Rocket className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#27B0C4]" />
                        <span 
                          className="text-[10px] sm:text-xs text-[#7A7A7A]"
                          style={{ fontFamily: 'var(--font-poppins)' }}
                        >
                          Performance
                        </span>
                      </div>
                      <div className="flex items-center gap-0.5 sm:gap-1">
                        <span 
                          className="text-xs sm:text-sm font-bold text-[#2C3E50]"
                          style={{ fontFamily: 'var(--font-poppins)' }}
                        >
                          {tech.performance}
                        </span>
                        <span 
                          className="text-[10px] sm:text-xs text-[#7A7A7A]"
                          style={{ fontFamily: 'var(--font-poppins)' }}
                        >
                          uptime
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-2 text-center"
        >
          <motion.a
            href="#case"
            className="group inline-flex items-center gap-1.5 sm:gap-2 
               bg-[#E67E22]
               text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold 
               hover:shadow-lg hover:bg-[#D46A1A] transition-all hover:scale-105 touch-manipulation active:scale-95"
            style={{ fontFamily: 'var(--font-poppins)' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            aria-label="View Case Studies"
          >
            View Case Studies
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
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
