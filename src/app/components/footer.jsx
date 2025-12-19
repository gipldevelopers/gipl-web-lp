"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Linkedin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-gray-900 to-black" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #4f46e5 1px, transparent 1px),
                              linear-gradient(to bottom, #4f46e5 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 text-center">
        {/* Logo */}
        <motion.a
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          href="https://gohilinfotech.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block mx-auto mb-6 flex justify-center"
        >
          <img
            src="/GIPL_Short-Logo-e1750248392231.png"
            alt="Gohil Infotech"
            className="h-14"
          />
        </motion.a>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg max-w-xl mx-auto leading-relaxed mb-8"
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
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-semibold backdrop-blur-md hover:bg-white/20 transition"
        >
          <Mail className="w-4 h-4" />
          Contact Us
        </motion.a>

        {/* Social Media Icons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mt-6"
        >
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQG9yNlz2RMu2wAAAZs2a9BQ9Wp0_RDCdho0Gh7ZUmzLpP1apv8ibKlGpxZ6Z3Ii33CW_BSLSJr454Pg09EV6j1LFmIp0g1vDZwxsCkks0FCOmY-aDCn5Y43Ne0wZ42y1AMc08E=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fgohil-infotech%2Fposts%2F%3FfeedView%3Dall"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/gohil.infotech/profilecard/?igsh=MXNyazllNGR3anh3ZQ%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition"
          >
            <Instagram className="w-5 h-5" />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/people/Gohil-Infotech/61578335311317/?rdid=S9lL1bxWibuMNywX&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CdY87RHCF%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition"
          >
            <Facebook className="w-5 h-5" />
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
          className="text-sm text-gray-500 mt-10 hover:text-gray-300 transition-colors"
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
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-linear-to-r from-purple-600 to-indigo-600 shadow-lg flex items-center justify-center hover:shadow-xl transition-all z-40"
      >
        <ArrowRight className="w-5 h-5 text-white -rotate-90" />
      </motion.button>
    </footer>
  );
}
