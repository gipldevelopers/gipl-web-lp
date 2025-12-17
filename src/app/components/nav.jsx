"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Updated navLinks with your content
  const navLinks = [
    { label: "Our Services", href: "#service" },
    { label: "Technologies", href: "#tech" },
    { label: "Case Studies", href: "#case" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className={`
            relative
            transition-all duration-300 ease-out
            ${scrolled
              ? "mt-3 backdrop-blur-xl bg-white/95 shadow-xl border border-gray-100"
              : "mt-6 backdrop-blur-lg bg-white/90 shadow-lg border border-white/20"
            }
            rounded-2xl lg:rounded-3xl
            py-2 px-2 md:py-2 md:px-3
            flex items-center justify-between
            before:absolute before:inset-x-0 before:top-0 before:h-px 
            before:bg-linear-to-r before:from-transparent before:via-blue-500/20 before:to-transparent
            before:content-['']
          `}
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-2 md:gap-3"
          >
            <img
              src="/GIPL_Short-Logo-e1750248392231.png"
              alt="Gohil Infotech"
              className="h-8 md:h-10 w-auto"
            />
           
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.label}
                variants={itemVariants}
                custom={index}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={link.href}
                className="
                  relative px-4 py-2 text-sm font-medium
                  text-gray-600 hover:text-gray-900
                  transition-colors duration-200
                  group
                "
              >
                {link.label}
                <span className="
                  absolute left-4 right-4 -bottom-1
                  h-0.5 bg-linear-to-r from-blue-500 to-purple-500
                  transform scale-x-0 group-hover:scale-x-100
                  transition-transform duration-300 ease-out
                  origin-left
                " />
              </motion.a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                px-6 py-2.5
                bg-linear-to-r from-blue-600 to-purple-600
                text-white font-medium text-sm
                rounded-xl
                shadow-lg shadow-blue-500/25
                hover:shadow-xl hover:shadow-blue-500/30
                transition-all duration-300
                relative overflow-hidden
                group
              "
            >
              <span className="relative z-10">Contact Us</span>
              <div className="
                absolute inset-0
                bg-linear-to-r from-purple-600 to-blue-600
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
              " />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            variants={itemVariants}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="
              lg:hidden
              p-2
              rounded-xl
              bg-linear-to-br from-gray-50 to-white
              border border-gray-200
              shadow-sm
              hover:shadow-md
              transition-shadow duration-200
            "
          >
            <div className="w-6 h-6 relative">
              <span className={`
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                h-0.5 w-4 bg-gray-700 rounded-full
                transition-all duration-300
                ${isMobileMenuOpen ? "rotate-45 top-1/2" : "top-1/4"}
              `} />
              <span className={`
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                h-0.5 w-4 bg-gray-700 rounded-full
                transition-all duration-300
                ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}
              `} />
              <span className={`
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                h-0.5 w-4 bg-gray-700 rounded-full
                transition-all duration-300
                ${isMobileMenuOpen ? "-rotate-45 top-1/2" : "top-3/4"}
              `} />
            </div>
          </motion.button>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="
                  fixed inset-0
                  backdrop-blur-sm
                  lg:hidden z-40
                  mt-24
                "
              />

              {/* Menu Panel */}
              <motion.div
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="
                  fixed top-24 left-4 right-4
                  lg:hidden z-50
                "
              >
                <div className="
                  backdrop-blur-xl bg-white/95
                  border border-gray-200
                  rounded-2xl
                  shadow-2xl
                  overflow-hidden
                ">
                  <div className="flex flex-col p-2">
                    {navLinks.map((link) => (
                      <motion.a
                        key={link.label}
                        variants={linkVariants}
                        whileHover={{ x: 8 }}
                        whileTap={{ scale: 0.98 }}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="
                          px-4 py-3.5
                          text-gray-700 hover:text-gray-900
                          font-medium
                          rounded-xl
                          hover:bg-linear-to-r hover:from-blue-50 hover:to-purple-50
                          transition-all duration-200
                          border border-transparent hover:border-blue-100
                          flex items-center gap-3
                        "
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-blue-500 to-purple-500" />
                        {link.label}
                      </motion.a>
                    ))}
                    
                    {/* Mobile CTA */}
                    <motion.button
                      variants={linkVariants}
                      whileTap={{ scale: 0.95 }}
                      className="
                        mt-4 mx-2
                        px-4 py-3.5
                        bg-linear-to-r from-blue-600 to-purple-600
                        text-white font-medium
                        rounded-xl
                        shadow-lg
                        hover:shadow-xl
                        transition-all duration-300
                      "
                    >
                      Contact Us
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}