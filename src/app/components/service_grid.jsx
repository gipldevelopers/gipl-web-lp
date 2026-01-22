"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Target,
  Calendar as CalendarIcon,
  ChevronRight,
  ChevronLeft
} from "lucide-react";

export default function WebsiteTypesGrid({ calendarLink = "#contact", onCTA }) {
  const scrollRef = useRef(null);
  const [isAuto, setIsAuto] = useState(true);

  const websiteTypes = [
    { title: "Business Website", subtitle: "Professional online presence", iconPath: "/gipl icons_business website.svg", color: "from-[#27B0C4] to-[#73CCD7]" },
    { title: "E-Commerce Website", subtitle: "Online stores with secure payments", iconPath: "/gipl icons_e commerce website.svg", color: "from-[#E67E22] to-[#D46A1A]" },
    { title: "Real Estate Website", subtitle: "Property listings & lead gen", iconPath: "/gipl icons_real estate website.svg", color: "from-[#27B0C4] to-[#73CCD7]" },
    { title: "Custom Web Apps", subtitle: "CRMs, dashboards & booking systems", iconPath: "/gipl icons_custom web app.svg", color: "from-[#E67E22] to-[#D46A1A]" },
    { title: "Corporate Website", subtitle: "Enterprise digital presence", iconPath: "/gipl icons_corporate website.svg", color: "from-[#2C3E50] to-[#7A7A7A]" },
    { title: "Personal Branding", subtitle: "Individual professional sites", iconPath: "/gipl icons_personal branding.svg", color: "from-[#27B0C4] to-[#73CCD7]" },
    { title: "Educational / LMS", subtitle: "Online learning platforms", iconPath: "/gipl icons_education website.svg", color: "from-[#E67E22] to-[#D46A1A]" },
    { title: "Landing Page", subtitle: "High converting sales funnels", iconPath: "/gipl icons_landing page website.svg", color: "from-[#27B0C4] to-[#73CCD7]" },
    { title: "Portfolio Website", subtitle: "Showcase creative work", iconPath: "/gipl icons_portfolio website.svg", color: "from-[#E67E22] to-[#D46A1A]" },
    { title: "Blog / News", subtitle: "Content publishing platforms", iconPath: "/gipl icons_blog-news.svg", color: "from-[#27B0C4] to-[#73CCD7]" },


  ];

  useEffect(() => {
    if (!isAuto || !scrollRef.current) return;
    const container = scrollRef.current;
    const t = setInterval(() => {
      if (!container) return;
      const max = container.scrollWidth - container.clientWidth;
      const next = Math.min(container.scrollLeft + container.clientWidth * 0.8, max);
      container.scrollTo({ left: next === max ? 0 : next + 16, behavior: "smooth" });
    }, 3500);

    return () => clearInterval(t);
  }, [isAuto]);

  const handleManual = () => {
    setIsAuto(false);
    setTimeout(() => setIsAuto(true), 5000);
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 110, damping: 14 } }
  };

  const handleCTA = () => {
    if (onCTA) return onCTA();
    if (calendarLink && calendarLink.startsWith("#")) {
      const el = document.querySelector(calendarLink);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (calendarLink) {
      window.open(calendarLink, "_blank");
    }
  };

  return (
    <section  id="service" className="py-10 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Header - styled to match TechEcosystem exactly */}
        <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-6">
          <h2 
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-[#2C3E50]"
            style={{ fontFamily: 'var(--font-rubik)' }}
          >
            Types of Websites We Build
          </h2>
          <p 
            className="text-sm sm:text-base text-[#7A7A7A] max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            Many businesses don't know which website they need  pick a type below and we'll match the perfect solution.
          </p>
        </motion.div>

        {/* Top bar: Technology Stack label + swiper buttons (moved to top) */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-[#27B0C4]" />
            <span 
              className="text-sm font-medium text-[#2C3E50]"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              Website type
            </span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => { handleManual(); scrollRef.current?.scrollBy({ left: -scrollRef.current.clientWidth * 0.7, behavior: 'smooth' }); }}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white shadow hover:shadow-md transition-all hover:scale-105 border border-[#F4F4F4] flex items-center justify-center"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#2C3E50]" />
            </button>
            <button
              onClick={() => { handleManual(); scrollRef.current?.scrollBy({ left: scrollRef.current.clientWidth * 0.7, behavior: 'smooth' }); }}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white shadow hover:shadow-md transition-all hover:scale-105 border border-[#F4F4F4] flex items-center justify-center"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#2C3E50]" />
            </button>
          </div>
        </div>

        {/* Scroller */}
        <div className="relative">
          <div
            ref={scrollRef}
            onMouseDown={handleManual}
            onTouchStart={handleManual}
            onWheel={handleManual}
            className="flex gap-4 overflow-x-auto scrollbar-hide py-4 snap-x snap-mandatory items-stretch"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {websiteTypes.map((t, i) => {
              return (
                <motion.div 
                  key={t.title} 
                  variants={cardVariant} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true, margin: "-50px" }} 
                  className="flex-shrink-0 w-[calc(100%-16px)] sm:w-[calc(50%-12px)] md:w-[calc(33.333%-14px)] lg:w-[calc(25%-16px)] snap-center flex"
                >
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative rounded-xl overflow-hidden flex flex-col w-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#27B0C4] via-[#73CCD7] to-[#E67E22] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative bg-white rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#F4F4F4] h-full flex flex-col">
                      <div className="flex items-start gap-3 mb-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center shadow-md bg-gradient-to-br ${t.color} flex-shrink-0 p-2`}>
                          <img
                            src={t.iconPath}
                            alt={t.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <h3 
                              className="text-lg font-bold text-[#2C3E50] flex-1"
                              style={{ fontFamily: 'var(--font-poppins)' }}
                            >
                              {t.title}
                            </h3>
                            <motion.div 
                              animate={{ rotate: [0, 10, 0] }} 
                              transition={{ duration: 2, repeat: Infinity }} 
                              className="w-2 h-2 bg-[#27B0C4] rounded-full flex-shrink-0" 
                            />
                          </div>
                          <p 
                            className="text-sm text-[#7A7A7A] mt-1"
                            style={{ fontFamily: 'var(--font-poppins)' }}
                          >
                            {t.subtitle}
                          </p>
                        </div>
                      </div>

                      <p 
                        className="text-sm text-[#7A7A7A] flex-grow"
                        style={{ fontFamily: 'var(--font-poppins)' }}
                      >
                        We design and build {t.title.toLowerCase()} with attention to conversions, performance and brand alignment  optimized for the goals you care about.
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          
        </div>

        {/* CTA block - matches TechEcosystem button style */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-2 text-center">
          <div className="inline-flex gap-3">
           <motion.a
  href="https://gohilinfotech.com/contact"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-3 
             bg-[#E67E22]
             text-white px-6 py-3 rounded-lg font-semibold 
             hover:shadow-lg hover:bg-[#D46A1A] transition-all"
  style={{ fontFamily: 'var(--font-poppins)' }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
  aria-label="Schedule a Free Consultation"
>
  Schedule a Free Consultation
  <ChevronRight className="w-4 h-4" />
</motion.a>


          </div>
        </motion.div>

      </div>

      <style jsx>{`
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
