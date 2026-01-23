"use client";

import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function TrustLineWorkflow() {
  const [activeWorkflow, setActiveWorkflow] = useState("web");
  const [isAnimating, setIsAnimating] = useState(false);
  const [iconPoints, setIconPoints] = useState([]);
  const [enterPoints, setEnterPoints] = useState([]);
  const [exitPoints, setExitPoints] = useState([]);
  const [mobileIconPoints, setMobileIconPoints] = useState([]);
  const [mobileEnterPoints, setMobileEnterPoints] = useState([]);
  const [mobileExitPoints, setMobileExitPoints] = useState([]);
  const [mobileSvgPoints, setMobileSvgPoints] = useState([]);
  const [mobileSvgEnterPoints, setMobileSvgEnterPoints] = useState([]);
  const [mobileSvgExitPoints, setMobileSvgExitPoints] = useState([]);
  const [roadScale, setRoadScale] = useState(1);
  const roadRef = useRef(null);
  const containerRef = useRef(null);
  const mobileRoadRef = useRef(null);
  const mobileContainerRef = useRef(null);

  const workflowContent = {
    api: {
      label: "API",
      steps: [
        {
          title: "Requirements",
          text: "Define API purpose, users, and exposed data.",
          iconPath: "/gipl icons_Planning & Requirements.svg",
          color: "#F2994A",
        },
        {
          title: "API Design",
          text: "Design endpoints, auth, formats, and error handling.",
          iconPath: "/gipl icons_API Design.svg",
          color: "#F2C94C",
        },
        {
          title: "Integration",
          text: "Build the API, connect services, implement logic.",
          iconPath: "/gipl icons_Development & Integration.svg",
          color: "#27B0C4",
        },
        {
          title: "Testing",
          text: "Test, secure, and deploy to production.",
          iconPath: "/gipl icons_Testing & Deployment.svg",
          color: "#2F80ED",
        },
      ],
    },
    web: {
      label: "Web",
      steps: [
        {
          title: "Planning",
          text: "Create wireframes and user flows.",
          iconPath: "/gipl icons_UI-UX Planning.svg",
          color: "#F2994A",
        },
        {
          title: "Development",
          text: "Build UI and server/database logic.",
          iconPath: "/gipl icons_Frontend & Backend Development.svg",
          color: "#F2C94C",
        },
        {
          title: "Testing",
          text: "Test performance, responsiveness, fix bugs.",
          iconPath: "/gipl icons_Testing & Optimization.svg",
          color: "#27B0C4",
        },
        {
          title: "Deployment",
          text: "Launch, monitor, and continuously improve.",
          iconPath: "/gipl icons_ Deployment & Maintenance.svg",
          color: "#2F80ED",
        },
      ],
    },
    ai: {
      label: "AI",
      steps: [
        {
          title: "Data Collection",
          text: "Collect, clean, and prepare data.",
          iconPath: "/gipl icons_Data Collection & Preparation.svg",
          color: "#F2994A",
        },
        {
          title: "Model Building",
          text: "Select algorithms and train models.",
          iconPath: "/gipl icons_Model Building & Training.svg",
          color: "#F2C94C",
        },
        {
          title: "Evaluation",
          text: "Improve accuracy and performance.",
          iconPath: "/gipl icons_Evaluation & Tuning.svg",
          color: "#27B0C4",
        },
        {
          title: "Deployment",
          text: "Deploy model and track real-world results.",
          iconPath: "/gipl icons_Deployment & Monitoring.svg",
          color: "#2F80ED",
        },
      ],
    },
  };

  const progressStops = useMemo(() => [0.08, 0.33, 0.6, 0.86], []);
  const mobileProgressStops = useMemo(() => [0.12, 0.38, 0.64, 0.9], []);

  const contentOffsets = useMemo(
    () => [
      { x: -8, y: 70 },
      { x: -4, y: -90 },
      { x: -6, y: 70 },
      { x: -6, y: -90 },
    ],
    []
  );

  const compactOffsets = useMemo(
    () => [
      { x: -16, y: 56 },
      { x: -16, y: -72 },
      { x: -28, y: 56 },
      { x: -120, y: -72 },
    ],
    []
  );

  const mobileContentOffsets = useMemo(
    () => [
      { x: -140.3, y: -2 },
      { x: 92, y: -2 },
      { x: -140.3, y: -2 },
      { x: 92, y: -2 },
    ],
    []
  );

  useLayoutEffect(() => {
    const computePoints = () => {
      if (!roadRef.current || !containerRef.current) return;
      const path = roadRef.current;
      const svg = path.ownerSVGElement;
      if (!svg) return;
      const totalLength = path.getTotalLength();
      const containerRect = containerRef.current.getBoundingClientRect();
      const svgRect = svg.getBoundingClientRect();
      const clamp = (value) => Math.min(1, Math.max(0, value));
      const pointAt = (progress) => {
        const point = path.getPointAtLength(totalLength * clamp(progress));
        return {
          x: point.x + svgRect.left - containerRect.left,
          y: point.y + svgRect.top - containerRect.top,
        };
      };
      const points = progressStops.map((progress) => pointAt(progress));
      const enter = progressStops.map((progress) => pointAt(progress - 0.12));
      const exit = progressStops.map((progress) => pointAt(progress + 0.12));
      setIconPoints(points);
      setEnterPoints(enter);
      setExitPoints(exit);
      const scale = svgRect.width / 900;
      setRoadScale(Math.max(0.5, Math.min(1.1, scale)));
    };

    const computeMobilePoints = () => {
      if (!mobileRoadRef.current || !mobileContainerRef.current) return;
      const path = mobileRoadRef.current;
      const svg = path.ownerSVGElement;
      if (!svg) return;
      const totalLength = path.getTotalLength();
      const containerRect = mobileContainerRef.current.getBoundingClientRect();
      const svgRect = svg.getBoundingClientRect();
      const clamp = (value) => Math.min(1, Math.max(0, value));
      const pointAtSvg = (progress) => {
        const point = path.getPointAtLength(totalLength * clamp(progress));
        return {
          x: point.x + svgRect.left - containerRect.left,
          y: point.y + svgRect.top - containerRect.top,
        };
      };
      const pointAtSvgCoords = (progress) => {
        const point = path.getPointAtLength(totalLength * clamp(progress));
        return { x: point.x, y: point.y };
      };
      const points = mobileProgressStops.map((progress) => pointAtSvg(progress));
      const enter = mobileProgressStops.map((progress) => pointAtSvg(progress - 0.12));
      const exit = mobileProgressStops.map((progress) => pointAtSvg(progress + 0.12));
      const svgPoints = mobileProgressStops.map((progress) => pointAtSvgCoords(progress));
      const svgEnter = mobileProgressStops.map((progress) => pointAtSvgCoords(progress - 0.12));
      const svgExit = mobileProgressStops.map((progress) => pointAtSvgCoords(progress + 0.12));
      setMobileIconPoints(points);
      setMobileEnterPoints(enter);
      setMobileExitPoints(exit);
      setMobileSvgPoints(svgPoints);
      setMobileSvgEnterPoints(svgEnter);
      setMobileSvgExitPoints(svgExit);
    };

    computePoints();
    computeMobilePoints();
    window.addEventListener("resize", computePoints);
    window.addEventListener("resize", computeMobilePoints);
    return () => {
      window.removeEventListener("resize", computePoints);
      window.removeEventListener("resize", computeMobilePoints);
    };
  }, [progressStops, mobileProgressStops]);

  return (
    <section className="bg-gradient-to-b from-white via-[#F4F4F4]/20 to-white py-4 sm:py-5 md:py-6 lg:py-8 px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #2C3E50 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-2 sm:mb-3"
        >
          <h1
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#2C3E50] mb-1 sm:mb-1.5 px-2"
            style={{ fontFamily: "var(--font-rubik)" }}
          >
            Gohil Infotech Workflow
          </h1>
          <p
            className="text-[10px] sm:text-xs text-[#7A7A7A] max-w-2xl mx-auto px-2"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {["api", "web", "ai"].map((key) => {
            const isActive = activeWorkflow === key;
            return (
              <button
                key={key}
                onClick={() => {
                  if (isAnimating || activeWorkflow === key) return;
                  setIsAnimating(true);
                  setActiveWorkflow(key);
                }}
                className={`
                  px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-colors
                  ${isActive ? "bg-[#2C3E50] text-white" : "bg-white text-[#2C3E50] border border-[#E5E7EB] shadow-sm"}
                  ${isAnimating ? "opacity-60 cursor-not-allowed" : "hover:bg-[#F4F4F4]"}
                `}
                aria-pressed={isActive}
                type="button"
                disabled={isAnimating}
              >
                {workflowContent[key].label}
              </button>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative mx-auto max-w-5xl">
            <div className="relative rounded-[32px] bg-[#E67E22] p-4 sm:p-5 shadow-2xl">
              <div className="rounded-[26px] bg-[#F5F9FF] px-4 py-6 sm:px-6 sm:py-7 border border-white/60 shadow-inner">
                <div className="text-left pl-2 sm:pl-3">
                  <p className="text-xs sm:text-sm text-[#7A7A7A] mt-1">
                    {workflowContent[activeWorkflow].label} Workflow
                  </p>
                </div>

                <div
                  ref={containerRef}
                  className="relative mt-5 sm:mt-6 min-h-[240px] sm:min-h-[260px] md:min-h-[280px] hidden lg:block"
                >
                  <svg
                    viewBox="0 0 900 260"
                    preserveAspectRatio="xMidYMid meet"
                    className="absolute inset-0 w-full h-full"
                    aria-hidden="true"
                  >
                    <path
                      ref={roadRef}
                      d="M35 190 C 190 40, 360 250, 520 135 C 650 40, 760 70, 865 40"
                      stroke="#1E1E1E"
                      strokeWidth="22"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M35 190 C 190 40, 360 250, 520 135 C 650 40, 760 70, 865 40"
                      stroke="#FFFFFF"
                      strokeWidth="3.5"
                      fill="none"
                      strokeDasharray="6 8"
                      strokeLinecap="round"
                    />
                  </svg>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${activeWorkflow}-icons`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0"
                    >
                      {workflowContent[activeWorkflow].steps.map((step, index) => {
                        const iconSrc = encodeURI(step.iconPath);
                        const point = iconPoints[index];
                        const enterPoint = enterPoints[index] || point;
                        const exitPoint = exitPoints[index] || point;
                        if (!point) return null;
                        return (
                          <motion.div
                            key={step.title}
                            className="absolute"
                            style={{ left: point.x, top: point.y }}
                            initial={{ opacity: 0, x: enterPoint.x - point.x, y: enterPoint.y - point.y }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            exit={{ opacity: 0.6, x: exitPoint.x - point.x, y: exitPoint.y - point.y }}
                            transition={{
                              duration: 0.55,
                              ease: "easeInOut",
                              delay: index * 0.12,
                            }}
                          >
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              className="rounded-full flex items-center justify-center shadow-md"
                              style={{
                                width: `${52 * roadScale}px`,
                                height: `${52 * roadScale}px`,
                                backgroundColor: step.color,
                                transform: "translate(-50%, -50%)",
                              }}
                            >
                              <img
                                src={iconSrc}
                                alt={step.title}
                                className="object-contain"
                                style={{ width: `${22 * roadScale}px`, height: `${22 * roadScale}px` }}
                              />
                            </motion.div>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${activeWorkflow}-content`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      onAnimationComplete={() => setIsAnimating(false)}
                      className="absolute inset-0"
                    >
                      {workflowContent[activeWorkflow].steps.map((step, index) => {
                        const point = iconPoints[index];
                        const offset = roadScale < 0.8 ? compactOffsets[index] : contentOffsets[index];
                        if (!point || !offset) return null;
                        return (
                          <motion.div
                            key={step.title}
                            className="absolute max-w-[200px] sm:max-w-[240px]"
                            style={{
                              left: point.x + offset.x * roadScale,
                              top: point.y + offset.y * roadScale,
                            }}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{
                              duration: 0.35,
                              ease: "easeInOut",
                              delay: 0.55 + index * 0.12,
                            }}
                          >
                            <div className="text-xs sm:text-sm font-semibold text-[#2C3E50]">
                              {step.title}
                            </div>
                            <p className="text-[10px] sm:text-xs text-[#7A7A7A] leading-snug max-w-[200px] sm:max-w-[220px]">
                              {step.text}
                            </p>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div
                  ref={mobileContainerRef}
                  className="relative mt-4 min-h-[440px] sm:min-h-[480px] lg:hidden"
                >
                  <svg
                    viewBox="0 0 240 440"
                    preserveAspectRatio="xMidYMid meet"
                    className="absolute inset-0 w-full h-full"
                    aria-hidden="true"
                  >
                    <path
                      ref={mobileRoadRef}
                      d="M120 16 C 175 95, 65 150, 120 220 C 175 290, 65 345, 120 424"
                      stroke="#1E1E1E"
                      strokeWidth="16"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M120 16 C 175 95, 65 150, 120 220 C 175 290, 65 345, 120 424"
                      stroke="#FFFFFF"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="6 8"
                      strokeLinecap="round"
                    />

                    <AnimatePresence mode="wait">
                      <motion.g
                        key={`${activeWorkflow}-mobile-icons`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {workflowContent[activeWorkflow].steps.map((step, index) => {
                          const iconSrc = encodeURI(step.iconPath);
                          const point = mobileSvgPoints[index];
                          const enterPoint = mobileSvgEnterPoints[index] || point;
                          const exitPoint = mobileSvgExitPoints[index] || point;
                          if (!point) return null;
                          const iconSize = 36;
                          return (
                            <g key={step.title} transform={`translate(${point.x} ${point.y})`}>
                              <motion.g
                                initial={{ opacity: 0, x: enterPoint.x - point.x, y: enterPoint.y - point.y }}
                                animate={{ opacity: 1, x: 0, y: 0 }}
                                exit={{ opacity: 0.6, x: exitPoint.x - point.x, y: exitPoint.y - point.y }}
                                transition={{
                                  duration: 0.5,
                                  ease: "easeInOut",
                                  delay: index * 0.12,
                                }}
                              >
                                <foreignObject
                                  x={-iconSize / 2}
                                  y={-iconSize / 2}
                                  width={iconSize}
                                  height={iconSize}
                                  overflow="visible"
                                >
                                  <div
                                    xmlns="http://www.w3.org/1999/xhtml"
                                    style={{
                                      width: `${iconSize}px`,
                                      height: `${iconSize}px`,
                                      borderRadius: "999px",
                                      background: step.color,
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                                    }}
                                  >
                                    <img
                                      src={iconSrc}
                                      alt={step.title}
                                      style={{
                                        width: "18px",
                                        height: "18px",
                                        objectFit: "contain",
                                      }}
                                    />
                                  </div>
                                </foreignObject>
                              </motion.g>
                            </g>
                          );
                        })}
                      </motion.g>
                    </AnimatePresence>
                  </svg>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${activeWorkflow}-mobile-content`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      onAnimationComplete={() => setIsAnimating(false)}
                      className="absolute inset-0"
                    >
                      {workflowContent[activeWorkflow].steps.map((step, index) => {
                        const point = mobileIconPoints[index];
                        if (!point) return null;
                        const offset = mobileContentOffsets[index];
                        const side = index % 2 === 0 ? "left" : "right";
                        return (
                          <motion.div
                            key={step.title}
                            className="absolute max-w-[140px] sm:max-w-[170px]"
                            style={{ left: point.x + offset.x, top: point.y + offset.y }}
                            initial={{ opacity: 0, x: side === "left" ? -1 : 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: side === "left" ? -1 : 10 }}
                            transition={{
                              duration: 0.35,
                              ease: "easeInOut",
                              delay: 0.45 + index * 0.12,
                            }}
                          >
                            <div
                              className="text-[11px] font-semibold text-[#2C3E50]"
                              style={{ textAlign: side === "left" ? "right" : "left" }}
                            >
                              {step.title}
                            </div>
                            <p
                              className="text-[10px] text-[#7A7A7A] leading-snug"
                              style={{ textAlign: side === "left" ? "right" : "left" }}
                            >
                              {step.text}
                            </p>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
