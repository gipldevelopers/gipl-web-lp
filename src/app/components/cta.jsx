"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Sparkles,
  Rocket,
  Zap,
  TrendingUp,
  Target,
} from "lucide-react";

export default function AnimatedCTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particleStyles, setParticleStyles] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsVisible(true);

    // Generate random particle styles ONLY on client
    const styles = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animation: `float ${3 + Math.random() * 4}s ease-in-out infinite ${
        Math.random() * 2
      }s`,
    }));
    setParticleStyles(styles);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Don't render particles until client-side
  if (!isClient) {
    return (
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#FFFFFF]">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="text-center">
            {/* Animated badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F4F4F4] rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#27B0C4]" />
              <span className="text-sm font-medium text-[#2C3E50]" style={{ fontFamily: 'var(--font-poppins)' }}>
                Don't Let Your Website Fail You
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: 'var(--font-rubik)' }}>
              <span className="bg-gradient-to-r from-[#27B0C4] via-[#73CCD7] to-[#27B0C4] bg-clip-text text-transparent">
                Is Your Website Development Costing You Customers?
              </span>
            </h1>

            {/* Subheading skeleton */}
            <div className="relative max-w-3xl mx-auto mb-10">
              <p className="text-xl sm:text-2xl text-[#7A7A7A] mb-6" style={{ fontFamily: 'var(--font-poppins)' }}>
                Is your website development outdated? Many businesses lose
                customers because their websites are{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 font-semibold text-[#27B0C4]">
                    slow, not mobile-friendly, or
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-[#27B0C4]/20 -z-10"></span>
                </span>{" "}
                simply don't convert visitors into buyers.
              </p>
            </div>

            {/* Loading placeholder for stats bar */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="bg-[#F4F4F4] animate-pulse px-6 py-3 rounded-lg w-32 sm:w-40 h-12"
                ></div>
              ))}
            </div>

            {/* Loading placeholder for CTA button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
              <div className="bg-[#E67E22] animate-pulse px-20 py-5 rounded-xl w-64 sm:w-72 h-16"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#FFFFFF]">
      {/* Animated background elements */}
      <div
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          backgroundPosition: `${mousePosition.x * 100}% ${
            mousePosition.y * 100
          }%`,
        }}
      >
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#27B0C4]/20 to-[#73CCD7]/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#73CCD7]/15 to-[#27B0C4]/15 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>

        {/* Floating particles - Now using client-generated styles */}
        {particleStyles.map((style, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#27B0C4] rounded-full opacity-20"
            style={style}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Main heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight px-2" style={{ fontFamily: 'var(--font-rubik)' }}>
            <span className="bg-gradient-to-r from-[#27B0C4] via-[#73CCD7] to-[#27B0C4] bg-clip-text text-transparent">
              Is Your Website Development Costing You Customers?
            </span>
          </h1>

          {/* Animated subheading */}
          <div
            className={`relative max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#7A7A7A] mb-4 sm:mb-5 md:mb-6 px-2" style={{ fontFamily: 'var(--font-poppins)' }}>
              Is your website development outdated? Many businesses lose
              customers because their websites are{" "}
              <span className="relative inline-block">
                <span className="relative z-10 font-semibold text-[#27B0C4]">
                  slow, not mobile-friendly, or
                </span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-[#27B0C4]/20 -z-10 animate-pulse"></span>
              </span>{" "}
              simply don't convert visitors into buyers.
            </p>

            {/* Animated stats bar */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 px-2">
              <div className="flex items-center gap-1.5 sm:gap-2 bg-[#F4F4F4] px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-sm border border-[#F4F4F4]">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#27B0C4] animate-pulse flex-shrink-0" />
                <span className="font-semibold text-[#2C3E50] text-xs sm:text-sm" style={{ fontFamily: 'var(--font-poppins)' }}>65%</span>
                <span className="text-xs sm:text-sm text-[#7A7A7A] hidden sm:inline" style={{ fontFamily: 'var(--font-poppins)' }}>
                  Visitors leave due to slow loading
                </span>
                <span className="text-xs text-[#7A7A7A] sm:hidden" style={{ fontFamily: 'var(--font-poppins)' }}>
                  Slow loading
                </span>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 bg-[#F4F4F4] px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-sm border border-[#F4F4F4]">
                <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-[#E67E22] animate-pulse flex-shrink-0" />
                <span className="font-semibold text-[#2C3E50] text-xs sm:text-sm" style={{ fontFamily: 'var(--font-poppins)' }}>60%</span>
                <span className="text-xs sm:text-sm text-[#7A7A7A] hidden sm:inline" style={{ fontFamily: 'var(--font-poppins)' }}>
                  Customers lost on poor mobile UX
                </span>
                <span className="text-xs text-[#7A7A7A] sm:hidden" style={{ fontFamily: 'var(--font-poppins)' }}>
                  Poor mobile UX
                </span>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 bg-[#F4F4F4] px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-sm border border-[#F4F4F4]">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#27B0C4] animate-pulse flex-shrink-0" />
                <span className="font-semibold text-[#2C3E50] text-xs sm:text-sm" style={{ fontFamily: 'var(--font-poppins)' }}>0%</span>
                <span className="text-xs sm:text-sm text-[#7A7A7A] hidden sm:inline" style={{ fontFamily: 'var(--font-poppins)' }}>
                  Organic traffic if not ranking
                </span>
                <span className="text-xs text-[#7A7A7A] sm:hidden" style={{ fontFamily: 'var(--font-poppins)' }}>
                  No ranking
                </span>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 bg-[#F4F4F4] px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-sm border border-[#F4F4F4]">
                <Target className="w-4 h-4 sm:w-5 sm:h-5 text-[#E67E22] animate-pulse flex-shrink-0" />
                <span className="font-semibold text-[#2C3E50] text-xs sm:text-sm" style={{ fontFamily: 'var(--font-poppins)' }}>Wasted</span>
                <span className="text-xs sm:text-sm text-[#7A7A7A] hidden sm:inline" style={{ fontFamily: 'var(--font-poppins)' }}>
                  Ad spend if site doesn't convert
                </span>
                <span className="text-xs text-[#7A7A7A] sm:hidden" style={{ fontFamily: 'var(--font-poppins)' }}>
                  Wasted ad spend
                </span>
              </div>
            </div>
          </div>

          {/* Animated CTA buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center transition-all duration-1000 delay-500 px-2 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Primary CTA */}
            <a href="https://gohilinfotech.com/contact" className="inline-block w-full sm:w-auto">
              <button className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#E67E22] text-white font-bold text-sm sm:text-base rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 transform overflow-hidden hover:bg-[#D46A1A] touch-manipulation">
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-[#D46A1A] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                {/* Button content */}
                <div className="relative flex items-center justify-center gap-3">
                  <span className="text-lg" style={{ fontFamily: 'var(--font-poppins)' }}>Start Your Project Today</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </div>

                {/* Floating elements */}
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-white rounded-full animate-ping opacity-30"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-white rounded-full animate-ping opacity-30 delay-500"></div>
              </button>
            </a>
            {/* Secondary CTA */}
          </div>

          {/* Trust indicators */}
        </div>
      </div>

      {/* Floating animated elements */}
      <div className="absolute top-10 left-10 w-8 h-8 bg-[#27B0C4] rounded-full animate-float-slow opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-6 h-6 bg-[#E67E22] rounded-full animate-float-slow delay-1000 opacity-20"></div>
      <div className="absolute top-20 right-20 w-4 h-4 bg-[#73CCD7] rounded-full animate-float-slow delay-500 opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-5 h-5 bg-[#27B0C4] rounded-full animate-float-slow delay-700 opacity-20"></div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(-30px) translateX(10px);
          }
          66% {
            transform: translateY(10px) translateX(-10px);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }

        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-fade-in {
          animation: fadeInUp 1s ease-out;
        }
      `}</style>
    </div>
  );
}
