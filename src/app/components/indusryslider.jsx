"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { 
  Home,
  Factory,
  Rocket,
  GraduationCap,
  ShoppingCart,
  HeartPulse,
  Banknote,
  Plane,
  Palette,
  ChevronLeft,
  ChevronRight,
  Zap,
  Shield,
  CheckCircle,
  Target
} from 'lucide-react';

export default function IndustriesSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);

  const industries = [
    {
      icon: Home,
      title: "Real Estate",
      description: "Property listing platforms, builder websites, and advanced real estate search.",
      color: "from-orange-500 to-amber-500",
      features: ["Listings", "Search", "Showcase"],
      iconColor: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Industry websites, product catalogs, and smart factory digital solutions.",
      color: "from-purple-500 to-indigo-500",
      features: ["Catalogs", "Industry", "Corporate"],
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Rocket,
      title: "Startups",
      description: "MVP development, SaaS dashboards, landing pages, and scalable startup sites.",
      color: "from-blue-500 to-cyan-500",
      features: ["MVP", "Landing", "SaaS"],
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "LMS platforms, coaching websites, student portals, and course systems.",
      color: "from-cyan-500 to-blue-500",
      features: ["LMS", "Student", "Interactive"],
      iconColor: "text-cyan-600",
      bgColor: "bg-cyan-50"
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce",
      description: "Online stores, marketplace systems, product catalogs, and checkout flows.",
      color: "from-blue-500 to-purple-500",
      features: ["Shop", "Cart", "Payment"],
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: HeartPulse,
      title: "Health & Wellness",
      description: "Clinic websites, appointment systems, patient portals, and medical platforms.",
      color: "from-pink-500 to-rose-500",
      features: ["Booking", "Patient", "Portal"],
      iconColor: "text-pink-600",
      bgColor: "bg-pink-50"
    },
    {
      icon: Banknote,
      title: "Finance",
      description: "Secure finance platforms, investment portals, and lead-gen systems.",
      color: "from-green-500 to-emerald-500",
      features: ["Secure", "Lead-gen", "Portal"],
      iconColor: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Plane,
      title: "Travel & Hospitality",
      description: "Hotel websites, booking engines, travel platforms, and tourism solutions.",
      color: "from-blue-500 to-indigo-500",
      features: ["Hotels", "Booking", "Tours"],
      iconColor: "text-indigo-600",
      bgColor: "bg-indigo-50"
    },
    {
      icon: Palette,
      title: "Creative Agencies",
      description: "Portfolio sites, showcase pages, and premium brand experience websites.",
      color: "from-purple-500 to-pink-500",
      features: ["Portfolio", "Branding", "Showcase"],
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % industries.length);
    }, 3000);

    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying, industries.length]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + industries.length) % industries.length);
    setTimeout(() => setIsAutoPlaying(true), 2000);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % industries.length);
    setTimeout(() => setIsAutoPlaying(true), 2000);
  };

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 2000);
  };

  return (
    <div className="min-h-[50vh] bg-gradient-to-b from-white to-purple-50 py-8 md:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900">
            We Work For Multiple Industries
          </h2>
          
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Our versatile team has delivered high-impact solutions across diverse sectors.
          </p>
        </motion.div>

        <div className="relative">

          {/* Slider */}
          <div className="relative h-[320px] md:h-[280px] mb-6 overflow-hidden rounded-xl">
            <AnimatePresence mode="wait">
              {industries.map((industry, index) => 
                index === activeIndex && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className={`absolute inset-0 ${industry.bgColor} rounded-xl p-4 sm:p-6`}
                  >
                    <div className="grid md:grid-cols-2 gap-4 sm:gap-6 h-full items-center">
                      
                      {/* Content */}
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r ${industry.color} flex items-center justify-center shadow-md`}>
                            <industry.icon className={`w-7 h-7 ${industry.iconColor}`} />
                          </div>

                          <div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                              {industry.title}
                            </h3>
                            <div className="flex items-center gap-1 mt-1">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                              <span className="text-xs text-gray-600">Active Projects</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-sm text-gray-700 leading-relaxed">
                          {industry.description}
                        </p>

                        <div className="space-y-2">
                          <div className="flex items-center gap-1">
                            <Target className="w-4 h-4 text-blue-500" />
                            <span className="text-sm font-medium text-gray-800">Key Features:</span>
                          </div>

                          <div className="flex flex-wrap gap-1">
                            {industry.features.map((feature, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="inline-flex items-center gap-1 bg-white/70 backdrop-blur-sm px-2 py-1 rounded-md text-xs"
                              >
                                <CheckCircle className="w-3 h-3 text-green-500" />
                                <span className="text-gray-700">{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Visual Section */}
                      <div className="hidden md:flex flex-col items-center justify-center">
                        <div className="relative">
                          
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border-3 border-blue-300/20"
                          />

                          <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-3 rounded-full border-3 border-purple-300/20"
                          />

                          <div className="relative w-32 h-32 rounded-full bg-gradient-to-r from-white to-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
                            <industry.icon className={`w-16 h-16 ${industry.iconColor}`} />
                            
                            {[...Array(3)].map((_, i) => (
                              <motion.div
                                key={i}
                                animate={{
                                  rotate: [0, 360],
                                  x: Math.cos(i * 120 * (Math.PI / 180)) * 60,
                                  y: Math.sin(i * 120 * (Math.PI / 180)) * 60,
                                }}
                                transition={{
                                  duration: 8 + i * 2,
                                  repeat: Infinity,
                                  ease: "linear"
                                }}
                                className="absolute"
                              >
                                <div className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center">
                                  {i === 0 && <Zap className="w-4 h-4 text-yellow-500" />}
                                  {i === 1 && <Shield className="w-4 h-4 text-green-500" />}
                                  {i === 2 && <CheckCircle className="w-4 h-4 text-blue-500" />}
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={handlePrev}
              className="group p-2 rounded-full bg-white shadow hover:shadow-md transition-all hover:scale-105"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700 group-hover:text-blue-600" />
            </button>

            <div className="flex gap-1.5">
              {industries.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`relative w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                    index === activeIndex 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-110' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                >
                  {index === activeIndex && (
                    <motion.div
                      layoutId="activeDot"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="group p-2 rounded-full bg-white shadow hover:shadow-md transition-all hover:scale-105"
            >
              <ChevronRight className="w-5 h-5 text-gray-700 group-hover:text-blue-600" />
            </button>
          </div>

          {/* Badges */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {industries.map((industry, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                onClick={() => handleDotClick(index)}
                className={`group p-3 rounded-lg transition-all duration-200 ${
                  index === activeIndex 
                    ? `${industry.bgColor} shadow scale-[1.02]` 
                    : 'bg-white hover:bg-gray-50'
                } border border-gray-100 hover:shadow-sm`}
              >
                <div className="flex flex-col items-center text-center space-y-1">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-lg">
                    <industry.icon className="w-5 h-5 text-gray-700" />
                  </div>
                  <span className={`text-xs font-medium ${
                    index === activeIndex ? 'text-gray-900' : 'text-gray-700'
                  }`}>
                    {industry.title.split(" ")[0]}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
