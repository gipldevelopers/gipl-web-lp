"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Linkedin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#2C3E50]" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #27B0C4 1px, transparent 1px),
                              linear-gradient(to bottom, #27B0C4 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#27B0C4]/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 lg:pb-12 text-center">
        {/* Logo */}
        <motion.a
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          href="https://gohilinfotech.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block mx-auto mb-4 sm:mb-6 lg:mb-8 flex justify-center"
        >
          <img
            src="/GIPL_Logo_footer.png"
            alt="Gohil Infotech"
            className="footer-logo h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
          />
        </motion.a>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl mx-auto leading-relaxed mb-6 sm:mb-8 lg:mb-10 px-2"
          style={{ fontFamily: 'var(--font-poppins)' }}
        >
          Leading website development company in India building fast, modern,
          high-converting websites that help businesses grow.
        </motion.p>

        {/* Contact CTA */}
        <motion.a
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          href="https://gohilinfotech.com/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-full bg-[#27B0C4] border border-[#27B0C4] text-white text-sm sm:text-base font-semibold hover:bg-[#73CCD7] hover:border-[#73CCD7] transition-all active:scale-95"
          style={{ fontFamily: 'var(--font-poppins)' }}
        >
          <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Contact Us</span>
        </motion.a>

        {/* Social Media Icons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          viewport={{ once: true }}
          className="flex justify-center gap-3 sm:gap-4 md:gap-5 mt-6 sm:mt-8"
        >
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQG9yNlz2RMu2wAAAZs2a9BQ9Wp0_RDCdho0Gh7ZUmzLpP1apv8ibKlGpxZ6Z3Ii33CW_BSLSJr454Pg09EV6j1LFmIp0g1vDZwxsCkks0FCOmY-aDCn5Y43Ne0wZ42y1AMc08E=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fgohil-infotech%2Fposts%2F%3FfeedView%3Dall"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-[#27B0C4] hover:border-[#27B0C4] hover:scale-110 active:scale-95 transition-all touch-manipulation"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/gohil.infotech/profilecard/?igsh=MXNyazllNGR3anh3ZQ%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-[#27B0C4] hover:border-[#27B0C4] hover:scale-110 active:scale-95 transition-all touch-manipulation"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/people/Gohil-Infotech/61578335311317/?rdid=S9lL1bxWibuMNywX&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CdY87RHCF%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-[#27B0C4] hover:border-[#27B0C4] hover:scale-110 active:scale-95 transition-all touch-manipulation"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </motion.div>

        {/* Bottom copyright */}
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          href="https://gohilinfotech.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm md:text-base text-[#7A7A7A] mt-8 sm:mt-10 lg:mt-12 hover:text-white transition-colors block px-2"
          style={{ fontFamily: 'var(--font-poppins)' }}
        >
          © {new Date().getFullYear()} Gohil Infotech. All rights reserved.
        </motion.a>
      </div>

      {/* Back to Top */}
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-[#27B0C4] to-[#73CCD7] shadow-lg flex items-center justify-center hover:shadow-xl transition-all z-40 touch-manipulation"
        aria-label="Back to top"
      >
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white -rotate-90" />
      </motion.button>
    </footer>
  );
}
