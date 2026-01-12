"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Zap,
  Globe,
  Users,
  Shield,
  ArrowRight,
} from "lucide-react";

export default function TrustLineWorkflow() {
  const [isDiagramVisible, setIsDiagramVisible] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="bg-[#F4F4F4] py-6 sm:py-8 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6 lg:px-8 relative z-10 min-h-[350px] sm:min-h-[400px]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-3 sm:mb-4 md:mb-5"
        >
          <h2 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#2C3E50] mb-1 sm:mb-2 px-2"
            style={{ fontFamily: 'var(--font-rubik)' }}
          >
            TrustLine Workflow
          </h2>
          <p 
            className="text-xs sm:text-sm text-[#7A7A7A] max-w-2xl mx-auto px-2"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            A streamlined workflow connecting customers, intelligent AI technology, and strategic partners
          </p>
        </motion.div>

        {/* Main Workflow Diagram */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          {/* Workflow Container */}
          <div className="bg-white rounded-xl sm:rounded-2xl border border-[#F4F4F4] shadow-sm p-3 sm:p-4 md:p-5 lg:p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-[#F4F4F4]">
              <h3 
                className="text-base sm:text-lg font-semibold text-[#2C3E50]"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                Workflow Overview
              </h3>
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#F4F4F4] rounded-lg">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-[#27B0C4] rounded-full"
                />
                <span className="text-xs text-[#2C3E50] font-medium">Live</span>
              </div>
            </div>

            {/* Workflow Flow */}
            <div className="relative">
              {/* Horizontal Flow Layout */}
              <div className="flex flex-col lg:flex-row items-stretch justify-between gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-5">
                {/* Customers Section */}
                <motion.div
                  variants={itemVariants}
                  className="flex-1 w-full lg:w-auto flex flex-col"
                >
                  <div className="bg-[#F4F4F4] rounded-xl p-3 sm:p-4 border border-[#F4F4F4] flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#27B0C4] flex items-center justify-center shadow-sm">
                        <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div>
                        <h4 
                          className="text-sm sm:text-base font-semibold text-[#2C3E50] mb-0"
                          style={{ fontFamily: 'var(--font-poppins)' }}
                        >
                          Customers
                        </h4>
                        <p className="text-xs text-[#7A7A7A]">End users & clients</p>
                      </div>
                    </div>
                    <div className="flex -space-x-2 justify-center lg:justify-start mt-auto">
                      {[
                        { color: "bg-blue-500" },
                        { color: "bg-green-500" },
                        { color: "bg-orange-500" },
                        { color: "bg-pink-500" },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.2 + i * 0.1 }}
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white ${item.color} shadow-sm`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Arrow Connector */}
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="hidden lg:flex items-center justify-center self-center"
                >
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#27B0C4]" />
                </motion.div>

                {/* TrustLine AI Center */}
                <motion.div
                  variants={itemVariants}
                  className="flex-1 w-full lg:w-auto flex flex-col"
                  onViewportEnter={() => setIsDiagramVisible(true)}
                >
                  <div className="bg-[#27B0C4] rounded-xl p-4 sm:p-5 lg:p-6 border border-[#27B0C4] shadow-lg relative overflow-hidden flex flex-col justify-center h-full">
                    {/* Subtle pattern overlay */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-white rounded-full blur-3xl"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-3xl"></div>
                    </div>
                    
                    <div className="relative z-10 text-center">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-1.5 sm:mb-2"
                      >
                        <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-white" />
                      </motion.div>
                      <h4 
                        className="text-lg sm:text-xl font-bold text-white mb-0.5"
                        style={{ fontFamily: 'var(--font-poppins)' }}
                      >
                        TrustLine AI
                      </h4>
                      <p className="text-xs text-white/90">
                        Intelligent Processing Hub
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Arrow Connector */}
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="hidden lg:flex items-center justify-center self-center"
                >
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#27B0C4]" />
                </motion.div>

                {/* Partners Section */}
                <motion.div
                  variants={itemVariants}
                  className="flex-1 w-full lg:w-auto flex flex-col"
                >
                  <div className="bg-[#F4F4F4] rounded-xl p-3 sm:p-4 border border-[#F4F4F4] flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#27B0C4] flex items-center justify-center shadow-sm">
                        <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div>
                        <h4 
                          className="text-sm sm:text-base font-semibold text-[#2C3E50] mb-0"
                          style={{ fontFamily: 'var(--font-poppins)' }}
                        >
                          Partners
                        </h4>
                        <p className="text-xs text-[#7A7A7A]">Strategic integrations</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 max-w-[100px] sm:max-w-[120px] mx-auto lg:mx-0 mt-auto">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.4 + i * 0.1, type: "spring" }}
                          className="aspect-square rounded-lg bg-[#2C3E50] border border-[#7A7A7A]/10"
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Features Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-4">
                {[
                  {
                    icon: Smartphone,
                    label: "Mobile",
                    description: "Cross-platform mobile support",
                    color: "bg-[#27B0C4]",
                  },
                  {
                    icon: Code,
                    label: "API",
                    description: "RESTful API integration",
                    color: "bg-[#73CCD7]",
                  },
                  {
                    icon: Shield,
                    label: "Security",
                    description: "Enterprise-grade security",
                    color: "bg-[#27B0C4]",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -2 }}
                    className="bg-[#F4F4F4] rounded-xl p-2.5 sm:p-3 border border-[#F4F4F4] text-center"
                  >
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 ${item.color} rounded-xl flex items-center justify-center mx-auto mb-1.5 sm:mb-2 shadow-sm`}>
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <h5 
                      className="text-xs sm:text-sm font-semibold text-[#2C3E50] mb-0.5"
                      style={{ fontFamily: 'var(--font-poppins)' }}
                    >
                      {item.label}
                    </h5>
                    <p className="text-xs text-[#7A7A7A]">{item.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Platform Tags */}
              <div className="flex flex-wrap justify-center gap-2 pt-3 sm:pt-4 border-t border-[#F4F4F4]">
                {[
                  { bg: "bg-[#2C3E50]", text: "API" },
                  { bg: "bg-[#27B0C4]", text: "Web" },
                  { bg: "bg-[#73CCD7]", text: "AI" },
                ].map((badge, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className={`px-2.5 py-1 sm:px-3 sm:py-1.5 ${badge.bg} rounded-lg shadow-sm`}
                  >
                    <span className="text-xs text-white font-semibold">
                      {badge.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
