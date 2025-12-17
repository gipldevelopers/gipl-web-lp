"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

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
        <motion.img
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          src="/GIPL_Short-Logo-e1750248392231.png"
          alt="Gohil Infotech"
          className="h-14 mx-auto mb-6"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg max-w-xl mx-auto leading-relaxed mb-8"
        >
          Leading website development company in India — building fast, modern,
          high-converting websites that help businesses grow.
        </motion.p>

        {/* Contact Button */}
        <motion.a
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-semibold backdrop-blur-md hover:bg-white/20 transition"
        >
          <Mail className="w-4 h-4" />
          Contact Us
        </motion.a>

        {/* Bottom line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-sm text-gray-500 mt-10"
        >
          © {new Date().getFullYear()} Gohil Infotech. All rights reserved.
        </motion.p>
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
