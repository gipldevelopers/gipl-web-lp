"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-[100] w-full"
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        width: '100%'
      }}
    >
      <header 
        className="w-full" 
        role="banner"
      >
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className={`
            transition-all duration-300 ease-out
            ${scrolled 
              ? 'bg-[#F4F4F4]/95 backdrop-blur-md shadow-md border-b border-[#27B0C4]/20' 
              : 'bg-[#F4F4F4]/90 backdrop-blur-sm'
            }
          `}
          role="navigation"
          aria-label="Main navigation"
        >
        {/* Slim navbar: Content-driven height with minimal padding */}
        <div className="max-w-7xl mx-auto px-2.5 sm:px-4 md:px-6 lg:px-8 py-1 sm:py-1.5 md:py-2">
          <motion.div
            variants={itemVariants}
            className="
              relative
              transition-all duration-300 ease-out
              flex items-center justify-between
              py-0 sm:py-0.5 md:py-1 px-2 sm:px-4 md:px-6
              gap-2 sm:gap-4
            "
            style={{ fontFamily: 'var(--font-open-sans)' }}
          >
          {/* Logo - Compact sizing across all breakpoints */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-1 sm:gap-2 md:gap-3 flex-shrink-0"
          >
            <img
              src="/GIPL_Short-Logo-e1750248392231.png"
              alt="Gohil Infotech"
              className="company-logo-mobile h-4 sm:h-5 md:h-6 lg:h-7 w-auto max-w-[100px] sm:max-w-[120px] md:max-w-none"
              style={{ maxWidth: 'clamp(90px, 22vw, 160px)' }}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
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
                  relative px-3 xl:px-4 py-1 xl:py-1.5 text-xs xl:text-sm font-medium
                  text-[#7A7A7A] hover:text-[#2C3E50]
                  transition-colors duration-200
                  group
                  flex items-center
                  leading-none
                "
                style={{ fontFamily: 'var(--font-open-sans)' }}
              >
                {link.label}
                <span
                  className="
                  absolute left-3 xl:left-4 right-3 xl:right-4 bottom-1.5
                  h-0.5 bg-[#27B0C4]
                  transform scale-x-0 group-hover:scale-x-100
                  transition-transform duration-300 ease-out
                  origin-left
                "
                />
              </motion.a>
            ))}
          </div>

          {/* CTA Button + Startup India Logo - Desktop */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            <a
              href="https://www.gohilinfotech.com/STARTUP-INDIA-CERTIFICATE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Startup India certificate (PDF)"
              className="flex items-center self-center"
            >
              <img
                src="/startupindialogo.png"
                alt="Startup India"
                className="h-5 sm:h-6 md:h-7 w-auto object-contain flex-shrink-0 block translate-y-[2px]"
                style={{ maxWidth: "120px", display: "block" }}
              />
            </a>
            <motion.a
              href="https://gohilinfotech.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              variants={linkVariants}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="
                px-3 xl:px-4 py-1 xl:py-1.5
                bg-[#E67E22]
                text-white font-medium text-xs xl:text-sm
                rounded-lg
                shadow-md
                hover:shadow-lg
                hover:bg-[#D46A1A]
                transition-all duration-300
                inline-flex justify-center items-center
                leading-none
              "
              style={{ fontFamily: 'var(--font-open-sans)' }}
            >
              Contact Us
            </motion.a>
          </div>

          {/* Mobile Menu Button - Compact sizing */}
          <motion.button
            variants={itemVariants}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="
              lg:hidden
              p-1.5 sm:p-2 md:p-2
              rounded-lg
              bg-[#F4F4F4]
              border border-[#F4F4F4]
              hover:bg-[#F4F4F4]/80
              active:bg-[#F4F4F4]/60
              transition-all duration-200
              touch-manipulation
              min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px]
              flex items-center justify-center
              flex-shrink-0
            "
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 relative">
              <span
                className={`
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                h-0.5 w-4 bg-[#2C3E50] rounded-full
                transition-all duration-300
                ${isMobileMenuOpen ? "rotate-45 top-1/2" : "top-1/4"}
              `}
              />
              <span
                className={`
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                h-0.5 w-4 bg-[#2C3E50] rounded-full
                transition-all duration-300
                ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}
              `}
              />
              <span
                className={`
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                h-0.5 w-4 bg-[#2C3E50] rounded-full
                transition-all duration-300
                ${isMobileMenuOpen ? "-rotate-45 top-1/2" : "top-3/4"}
              `}
              />
            </div>
          </motion.button>
        </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop - Adjusted for slim navbar height */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="
                  fixed inset-0
                  backdrop-blur-sm bg-black/20
                  lg:hidden z-40
                  mt-10 sm:mt-12 md:mt-14
                "
              />

              {/* Menu Panel - Positioned for slim navbar */}
              <motion.div
                id="mobile-menu"
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="
                  fixed top-10 sm:top-12 md:top-14 left-2.5 right-2.5 sm:left-4 sm:right-4
                  lg:hidden z-50
                  max-h-[calc(100vh-3.5rem)] sm:max-h-[calc(100vh-4rem)] overflow-y-auto
                "
                role="menu"
                aria-label="Mobile navigation menu"
              >
                <div
                  className="
                  bg-[#F4F4F4]/95
                  backdrop-blur-xl
                  rounded-2xl
                  overflow-hidden
                  border border-[#27B0C4]/10
                "
                >
                  <div className="flex flex-col p-3">
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
                          text-[#2C3E50] hover:text-[#2C3E50]
                          font-medium text-sm
                          rounded-xl
                          hover:bg-white/80
                          transition-all duration-200
                          border border-transparent hover:border-[#27B0C4]/20
                          flex items-center gap-3
                          min-h-[44px]
                          touch-manipulation
                        "
                        style={{ fontFamily: 'var(--font-open-sans)' }}
                        role="menuitem"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#27B0C4]" />
                        {link.label}
                      </motion.a>
                    ))}

                    {/* Mobile Startup India Logo */}
                    <div className="mt-3 px-4">
                      <a
                        href="https://www.gohilinfotech.com/STARTUP-INDIA-CERTIFICATE.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open Startup India certificate (PDF)"
                        className="flex items-center justify-start"
                      >
                        <img
                          src="/startupindialogo.png"
                          alt="Startup India"
                          className="h-5 w-auto object-contain block"
                          style={{ maxWidth: "140px" }}
                        />
                      </a>
                    </div>

                    {/* Mobile CTA */}
                    <Link href="https://gohilinfotech.com/contact">
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="
                          mt-2
                          px-4 py-3.5
                          bg-[#E67E22]
                          text-white font-medium text-sm
                          rounded-xl
                          shadow-lg
                          hover:shadow-xl
                          hover:bg-[#D46A1A]
                          transition-all duration-300
                          w-full
                        "
                        style={{ fontFamily: 'var(--font-open-sans)' }}
                      >
                        Contact Us
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
    </div>
  );
}
