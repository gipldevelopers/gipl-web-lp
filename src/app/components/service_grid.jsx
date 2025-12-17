"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  ShoppingCart,
  Image as ImageIcon,
  Target,
  Building,
  BookOpen,
  Layout,
  User,
  GraduationCap,
  Home,
  Calendar as CalendarIcon,
  ChevronRight,
  ChevronLeft
} from "lucide-react";

export default function WebsiteTypesGrid({ calendarLink = "#contact", onCTA }) {
  const scrollRef = useRef(null);
  const [isAuto, setIsAuto] = useState(true);

  const websiteTypes = [
    { title: "Business Website", subtitle: "Professional online presence", icon: Briefcase, color: "from-blue-400 to-indigo-500" },
    { title: "E-Commerce Website", subtitle: "Online stores with secure payments", icon: ShoppingCart, color: "from-emerald-400 to-teal-500" },
    { title: "Portfolio Website", subtitle: "Showcase creative work", icon: ImageIcon, color: "from-pink-400 to-rose-500" },
    { title: "Landing Page", subtitle: "High-converting sales funnels", icon: Target, color: "from-orange-400 to-amber-500" },
    { title: "Corporate Website", subtitle: "Enterprise digital presence", icon: Building, color: "from-slate-600 to-gray-700" },
    { title: "Blog / News", subtitle: "Content publishing platforms", icon: BookOpen, color: "from-cyan-400 to-blue-500" },
    { title: "Custom Web Apps", subtitle: "CRMs, dashboards & booking systems", icon: Layout, color: "from-violet-400 to-fuchsia-500" },
    { title: "Personal Branding", subtitle: "Individual professional sites", icon: User, color: "from-yellow-400 to-amber-500" },
    { title: "Educational / LMS", subtitle: "Online learning platforms", icon: GraduationCap, color: "from-green-400 to-lime-500" },
    { title: "Real Estate Website", subtitle: "Property listings & lead gen", icon: Home, color: "from-rose-400 to-pink-500" }
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
    <section  id="service" className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header - styled to match TechEcosystem exactly */}
        <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-gray-900">Types of Websites We Build</h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">Many businesses don't know which website they need — pick a type below and we'll match the perfect solution.</p>
        </motion.div>

        {/* Top bar: Technology Stack label + swiper buttons (moved to top) */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-gray-700">Website type</span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => { handleManual(); scrollRef.current?.scrollBy({ left: -scrollRef.current.clientWidth * 0.7, behavior: 'smooth' }); }}
              className="p-2 rounded-lg bg-white shadow hover:shadow-md transition-all hover:scale-105"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4 text-gray-700" />
            </button>
            <button
              onClick={() => { handleManual(); scrollRef.current?.scrollBy({ left: scrollRef.current.clientWidth * 0.7, behavior: 'smooth' }); }}
              className="p-2 rounded-lg bg-white shadow hover:shadow-md transition-all hover:scale-105"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 text-gray-700" />
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
            className="flex gap-4 overflow-x-auto scrollbar-hide py-4 snap-x snap-mandatory"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {websiteTypes.map((t, i) => {
              const Icon = t.icon;
              return (
                <motion.div key={t.title} variants={cardVariant} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="flex-shrink-0 w-[calc(100%-16px)] sm:w-[calc(50%-12px)] md:w-[calc(33.333%-14px)] lg:w-[calc(25%-16px)] snap-center">
                  <div className="group relative rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative bg-white rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                      <div className="flex items-start gap-3 mb-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center shadow-md bg-gradient-to-br ${t.color}`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-gray-900">{t.title}</h3>
                            <motion.div animate={{ rotate: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 bg-green-500 rounded-full" />
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{t.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-sm text-gray-700 mb-4">We design and build {t.title.toLowerCase()} with attention to conversions, performance and brand alignment — optimized for the goals you care about.</p>

                      

                      
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          
        </div>

        {/* CTA block - matches TechEcosystem button style */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-2 text-center">
          <div className="inline-flex gap-3">
            <button onClick={handleCTA} className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105">
              Schedule a Free Consultation
              <ChevronRight className="w-4 h-4" />
            </button>

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
