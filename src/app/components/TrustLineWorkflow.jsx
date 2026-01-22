"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Zap,
  Shield,
  ArrowRight,
  ArrowDown,
  Users,
  Globe,
} from "lucide-react";

export default function TrustLineWorkflow() {
  const [activeStage, setActiveStage] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);

  const handleNodeInteraction = (nodeId) => {
    setActiveStage(activeStage === nodeId ? null : nodeId);
  };

  const stageInfo = {
    customers: {
      value: "Customers",
      description: "End users & clients",
      activeDescription: "Customer data flows into TrustLine AI for intelligent processing and insights.",
    },
    partners: {
      value: "Partners",
      description: "Strategic integrations",
      activeDescription: "Partner systems integrate seamlessly with TrustLine AI for enhanced capabilities.",
    },
    ai: {
      value: "TrustLine AI",
      description: "Intelligent Processing Hub",
      activeDescription: "The central AI engine processes data, learns patterns, and orchestrates workflows across all connected systems.",
    },
    mobile: {
      value: "Mobile",
      description: "Cross-platform mobile support",
      activeDescription: "Mobile applications receive real-time updates and intelligent features powered by TrustLine AI.",
    },
    api: {
      value: "API",
      description: "RESTful API integration",
      activeDescription: "RESTful APIs provide programmatic access to TrustLine AI capabilities and data.",
    },
    security: {
      value: "Security",
      description: "Enterprise-grade security",
      activeDescription: "Enterprise-grade security protocols protect all data and communications across the platform.",
    },
  };

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

  const outputFeatures = [
    {
      id: "mobile",
      icon: Smartphone,
      label: "Mobile",
      description: "Cross-platform mobile support",
      color: "bg-[#27B0C4]",
    },
    {
      id: "api",
      icon: Code,
      label: "API",
      description: "RESTful API integration",
      color: "bg-[#73CCD7]",
    },
    {
      id: "security",
      icon: Shield,
      label: "Security",
      description: "Enterprise-grade security",
      color: "bg-[#27B0C4]",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white via-[#F4F4F4]/20 to-white py-4 sm:py-5 md:py-6 lg:py-8 px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
      {/* Subtle radial grid background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle, #2C3E50 1px, transparent 1px)`,
        backgroundSize: '30px 30px',
      }} />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-2 sm:mb-3"
        >
          <h2 
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#2C3E50] mb-1 sm:mb-1.5 px-2"
            style={{ fontFamily: 'var(--font-rubik)' }}
          >
            TrustLine Workflow
          </h2>
          <p 
            className="text-[10px] sm:text-xs text-[#7A7A7A] max-w-2xl mx-auto px-2"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            Click or hover on any stage to explore how TrustLine works
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
          <div className="bg-white rounded-lg sm:rounded-xl border border-[#F4F4F4] shadow-lg sm:shadow-xl p-2 sm:p-2.5 md:p-3 lg:p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-2 sm:mb-2.5 pb-1.5 sm:pb-2 border-b border-[#F4F4F4]">
              <h3 
                className="text-sm sm:text-base font-semibold text-[#2C3E50]"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                 Workflow System
              </h3>
              <div className="flex items-center gap-1.5 px-2 py-0.5 bg-[#F4F4F4] rounded-lg">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-[#27B0C4] rounded-full"
                />
                <span className="text-[10px] sm:text-xs text-[#2C3E50] font-medium">Active</span>
              </div>
            </div>

            {/* Workflow Flow */}
            <div className="relative">
              {/* Mobile: Vertical Flow | Desktop: Horizontal Flow */}
              <div className="flex flex-col lg:grid lg:grid-cols-12 items-stretch justify-between gap-2 sm:gap-2.5 lg:gap-3 mb-2 sm:mb-2.5">
                {/* Customers Section */}
                <motion.button
                  onClick={() => handleNodeInteraction("customers")}
                  onMouseEnter={() => setHoveredNode("customers")}
                  onMouseLeave={() => setHoveredNode(null)}
                  variants={itemVariants}
                  className="lg:col-span-4 flex-1 w-full lg:w-auto flex flex-col group cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-[#F4F4F4] to-white rounded-lg p-2.5 sm:p-3 border border-[#F4F4F4] flex flex-col h-full min-h-[180px] sm:min-h-[200px] relative overflow-hidden transition-all duration-300 hover:shadow-md">
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-center gap-1.5 mb-1.5 sm:mb-2">
                        <motion.div
                          animate={activeStage === "customers" ? { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] } : {}}
                          transition={{ duration: 0.5, repeat: activeStage === "customers" ? Infinity : 0, repeatDelay: 1 }}
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-[#27B0C4] to-[#73CCD7] flex items-center justify-center shadow-sm flex-shrink-0"
                        >
                          <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <h4 
                            className={`${activeStage === "customers" ? "text-[10px] sm:text-xs" : "text-xs sm:text-sm"} font-semibold text-[#2C3E50] mb-0 leading-snug whitespace-normal break-words`}
                            style={{ fontFamily: 'var(--font-poppins)' }}
                          >
                            {activeStage === "customers" ? stageInfo.customers.activeDescription : stageInfo.customers.value}
                          </h4>
                          {activeStage !== "customers" && (
                            <p className="text-[10px] sm:text-xs text-[#7A7A7A]">{stageInfo.customers.description}</p>
                          )}
                        </div>
                      </div>
                      
                      {/* SVG Graphic */}
                      <div className="flex-1 flex items-center justify-center pt-4 border-t border-[#F4F4F4]">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          className="w-full max-w-[160px] sm:max-w-[180px] mx-auto"
                        >
                          <img 
                            src="/customer.svg" 
                            alt="Customer illustration" 
                            className="w-full max-w-full h-auto object-contain"
                            role="img"
                            aria-hidden="false"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.button>

                {/* Mobile: Arrow Down */}
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-center justify-center self-center lg:hidden my-1"
                >
                  <ArrowDown className="w-4 h-4 text-[#27B0C4]" />
                </motion.div>

                {/* TrustLine AI Center */}
                <motion.button
                  onClick={() => handleNodeInteraction("ai")}
                  onMouseEnter={() => setHoveredNode("ai")}
                  onMouseLeave={() => setHoveredNode(null)}
                  variants={itemVariants}
                  className="lg:col-span-4 flex-1 w-full lg:w-auto flex flex-col group cursor-pointer"
                >
                  <motion.div
                    animate={activeStage === "ai" || hoveredNode === "ai" ? {
                      boxShadow: "0 0 30px rgba(39, 176, 196, 0.4)"
                    } : {}}
                    className="bg-gradient-to-br from-[#27B0C4] via-[#2A9DB8] to-[#27B0C4] rounded-lg p-3 sm:p-3.5 lg:p-4 border border-[#27B0C4] shadow-lg relative overflow-hidden flex flex-col justify-center h-full min-h-[180px] sm:min-h-[200px]"
                  >
                    {/* Animated background orbs */}
                    <motion.div
                      animate={activeStage === "ai" || hoveredNode === "ai" ? {
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1]
                      } : {
                        scale: [1, 1.1, 1],
                        opacity: [0.05, 0.1, 0.05]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-0 opacity-10"
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-white rounded-full blur-3xl"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-3xl"></div>
                    </motion.div>
                    
                    {/* Technical grid overlay */}
                    <motion.div
                      animate={activeStage === "ai" || hoveredNode === "ai" ? { opacity: 0.15 } : { opacity: 0.05 }}
                      className="absolute inset-0 opacity-5"
                      style={{
                        backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                        backgroundSize: '20px 20px',
                      }}
                    />
                    
                    <div className="relative z-10 text-center">
                      <motion.div
                        animate={activeStage === "ai" || hoveredNode === "ai" ? {
                          rotate: [0, 360],
                          scale: [1, 1.1, 1]
                        } : {
                          rotate: [0, 360]
                        }}
                        transition={{
                          duration: activeStage === "ai" || hoveredNode === "ai" ? 3 : 6,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-1.5"
                      >
                        <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-white" />
                      </motion.div>
                      <motion.h4
                        animate={activeStage === "ai" ? { opacity: [1, 0.7, 1] } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-sm sm:text-base font-bold text-white mb-0.5"
                        style={{ fontFamily: 'var(--font-poppins)' }}
                      >
                        {activeStage === "ai" ? stageInfo.ai.activeDescription : stageInfo.ai.value}
                      </motion.h4>
                      {activeStage !== "ai" && (
                        <p className="text-[10px] sm:text-xs text-white/90">
                          {stageInfo.ai.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                </motion.button>

                {/* Mobile: Arrow Down */}
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex items-center justify-center self-center lg:hidden my-1"
                >
                  <ArrowDown className="w-4 h-4 text-[#27B0C4]" />
                </motion.div>

                {/* Partners Section */}
                <motion.button
                  onClick={() => handleNodeInteraction("partners")}
                  onMouseEnter={() => setHoveredNode("partners")}
                  onMouseLeave={() => setHoveredNode(null)}
                  variants={itemVariants}
                  className="lg:col-span-4 flex-1 w-full lg:w-auto flex flex-col group cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-[#F4F4F4] to-white rounded-lg p-2.5 sm:p-3 border border-[#F4F4F4] flex flex-col h-full min-h-[180px] sm:min-h-[200px] relative overflow-hidden transition-all duration-300 hover:shadow-md">
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-center gap-1.5 mb-1.5 sm:mb-2">
                        <motion.div
                          animate={activeStage === "partners" ? { scale: [1, 1.1, 1], rotate: [0, -5, 5, 0] } : {}}
                          transition={{ duration: 0.5, repeat: activeStage === "partners" ? Infinity : 0, repeatDelay: 1 }}
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-[#27B0C4] to-[#73CCD7] flex items-center justify-center shadow-sm flex-shrink-0"
                        >
                          <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <h4 
                            className={`${activeStage === "partners" ? "text-[10px] sm:text-xs" : "text-xs sm:text-sm"} font-semibold text-[#2C3E50] mb-0 leading-snug whitespace-normal break-words`}
                            style={{ fontFamily: 'var(--font-poppins)' }}
                          >
                            {activeStage === "partners" ? stageInfo.partners.activeDescription : stageInfo.partners.value}
                          </h4>
                          {activeStage !== "partners" && (
                            <p className="text-[10px] sm:text-xs text-[#7A7A7A]">{stageInfo.partners.description}</p>
                          )}
                        </div>
                      </div>
                      
                      {/* SVG Graphic */}
                      <div className="flex-1 flex items-center justify-center pt-4 border-t border-[#F4F4F4]">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          className="w-full max-w-[160px] sm:max-w-[180px] mx-auto"
                        >
                          <img 
                            src="/partners.svg" 
                            alt="Partners illustration" 
                            className="w-full max-w-full h-auto object-contain"
                            role="img"
                            aria-hidden="false"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.button>
              </div>

              {/* Output Features Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 sm:gap-2 mb-2 sm:mb-2.5">
                {outputFeatures.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNodeInteraction(item.id)}
                    onMouseEnter={() => setHoveredNode(item.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    variants={itemVariants}
                    whileHover={{ y: -2 }}
                    className="bg-gradient-to-br from-white to-[#F4F4F4] rounded-lg p-2 sm:p-2.5 border border-[#F4F4F4] text-center relative overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-md"
                  >
                    <div className="relative z-10">
                      <motion.div
                        animate={activeStage === item.id ? { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] } : {}}
                        transition={{ duration: 0.5, repeat: activeStage === item.id ? Infinity : 0, repeatDelay: 1 }}
                        className={`w-7 h-7 sm:w-8 sm:h-8 ${item.color} rounded-lg flex items-center justify-center mx-auto mb-1 sm:mb-1.5 shadow-sm`}
                      >
                        <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                      </motion.div>
                      <h5 
                        className="text-xs sm:text-sm font-semibold text-[#2C3E50] mb-0.5"
                        style={{ fontFamily: 'var(--font-poppins)' }}
                      >
                        {activeStage === item.id ? stageInfo[item.id]?.activeDescription : item.label}
                      </h5>
                      {activeStage !== item.id && (
                        <p className="text-[10px] sm:text-xs text-[#7A7A7A]">{item.description}</p>
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Platform Tags */}
              <div className="flex flex-wrap justify-center gap-1.5 pt-2 sm:pt-2.5 border-t border-[#F4F4F4]">
                {[
                  { bg: "bg-[#2C3E50]", text: "API" },
                  { bg: "bg-[#27B0C4]", text: "Web" },
                  { bg: "bg-[#73CCD7]", text: "AI" },
                ].map((badge, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className={`px-2 py-0.5 sm:px-2.5 sm:py-1 ${badge.bg} rounded-lg shadow-sm`}
                  >
                    <span className="text-[10px] sm:text-xs text-white font-semibold">
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
