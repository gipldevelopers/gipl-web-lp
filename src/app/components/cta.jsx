"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, Sparkles, Rocket, Zap, TrendingUp, Target } from "lucide-react";

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
      animation: `float ${3 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`,
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
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="text-center">
            {/* Animated badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">
                Don't Let Your Website Fail You
              </span>
            </div>

            {/* Main heading with animated gradient */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Is Your Website Development Costing You Customers?
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 blur-xl opacity-30"></div>
              </span>
            </h1>

            {/* Subheading skeleton */}
            <div className="relative max-w-3xl mx-auto mb-10">
              <p className="text-xl sm:text-2xl text-gray-600 mb-6">
                Is your website development outdated? Many businesses lose
                customers because their websites are{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 font-semibold text-blue-600">
                    slow, not mobile-friendly, or
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-200/40 -z-10"></span>
                </span>{" "}
                simply don't convert visitors into buyers.
              </p>
            </div>

            {/* Loading placeholder for stats bar */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-gray-100 animate-pulse px-6 py-3 rounded-lg w-32 sm:w-40 h-12"></div>
              ))}
            </div>

            {/* Loading placeholder for CTA button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse px-20 py-5 rounded-xl w-64 sm:w-72 h-16"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
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
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>

        {/* Floating particles - Now using client-generated styles */}
        {particleStyles.map((style, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
            style={style}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          

          {/* Main heading with animated gradient */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                Is Your Website Development Costing You Customers?
              </span>
              <div className="absolute inset-0 opacity-30 animate-pulse"></div>
            </span>
          </h1>

          {/* Animated subheading */}
          <div
            className={`relative max-w-3xl mx-auto mb-10 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-xl sm:text-2xl text-gray-600 mb-6">
              Is your website development outdated? Many businesses lose
              customers because their websites are{" "}
              <span className="relative inline-block">
                <span className="relative z-10 font-semibold text-blue-600">
                  slow, not mobile-friendly, or
                </span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-200/40 -z-10 animate-pulse"></span>
              </span>{" "}
              simply don't convert visitors into buyers.
            </p>

            {/* Animated stats bar */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                <TrendingUp className="w-5 h-5 text-green-500 animate-bounce" />
                <span className="font-semibold text-gray-700">65%</span>
                <span className="text-sm text-gray-500">
                  Visitors leave due to slow loading
                </span>
              </div>

              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                <Rocket className="w-5 h-5 text-orange-500 animate-pulse" />
                <span className="font-semibold text-gray-700">60%</span>
                <span className="text-sm text-gray-500">
                  Customers lost on poor mobile UX
                </span>
              </div>

              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                <Zap className="w-5 h-5 text-purple-500 animate-ping" />
                <span className="font-semibold text-gray-700">0%</span>
                <span className="text-sm text-gray-500">
                  Organic traffic if not ranking
                </span>
              </div>

              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                <Target className="w-5 h-5 text-red-500 animate-pulse" />
                <span className="font-semibold text-gray-700">Wasted</span>
                <span className="text-sm text-gray-500">
                  Ad spend if site doesn't convert
                </span>
              </div>
            </div>
          </div>

          {/* Animated CTA buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Primary CTA */}
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform overflow-hidden">
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

              {/* Button content */}
              <div className="relative flex items-center justify-center gap-3">
                <span className="text-lg">Start Your Project Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-white rounded-full animate-ping opacity-30"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-white rounded-full animate-ping opacity-30 delay-500"></div>
            </button>

            {/* Secondary CTA */}
          </div>

          {/* Trust indicators */}
        </div>
      </div>

      {/* Floating animated elements */}
      <div className="absolute top-10 left-10 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-float-slow"></div>
      <div className="absolute bottom-10 right-10 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-float-slow delay-1000"></div>
      <div className="absolute top-20 right-20 w-4 h-4 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full animate-float-slow delay-500"></div>
      <div className="absolute bottom-20 left-20 w-5 h-5 bg-gradient-to-r from-purple-300 to-blue-300 rounded-full animate-float-slow delay-700"></div>

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