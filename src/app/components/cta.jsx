"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Rocket,
  Zap,
  TrendingUp,
  Target,
} from "lucide-react";

export default function AnimatedCTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
      
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 py-16 text-center">
        
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
          Is Your Website Development Costing You Customers?
        </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
          Many businesses lose customers because their websites are slow,
          not mobile-friendly, or don’t convert visitors into buyers.
        </p>

        {/* FIXED ICON STATS */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">

          <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg shadow-sm w-[280px]">
            <TrendingUp className="w-5 h-5 text-green-500 flex-shrink-0" />
            <div className="text-left">
              <p className="font-semibold text-gray-800">65%</p>
              <p className="text-sm text-gray-500">
                Visitors leave due to slow loading
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg shadow-sm w-[280px]">
            <Rocket className="w-5 h-5 text-orange-500 flex-shrink-0" />
            <div className="text-left">
              <p className="font-semibold text-gray-800">60%</p>
              <p className="text-sm text-gray-500">
                Customers lost on poor mobile UX
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg shadow-sm w-[280px]">
            <Zap className="w-5 h-5 text-purple-500 flex-shrink-0" />
            <div className="text-left">
              <p className="font-semibold text-gray-800">0%</p>
              <p className="text-sm text-gray-500">
                Organic traffic if not ranking
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg shadow-sm w-[280px]">
            <Target className="w-5 h-5 text-red-500 flex-shrink-0" />
            <div className="text-left">
              <p className="font-semibold text-gray-800">Wasted</p>
              <p className="text-sm text-gray-500">
                Ad spend if site doesn’t convert
              </p>
            </div>
          </div>

        </div>

        {/* CTA BUTTON */}
        <a
          href="https://gohilinfotech.com/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:scale-105 transition"
        >
          Start Your Project Today
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
