"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Palette, Server, Database } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollStorySection() {
  const sectionRef = useRef(null);

  const g1 = useRef(null);
  const g2 = useRef(null);
  const g3 = useRef(null);

  const glow = useRef(null);
  const t1 = useRef(null);
  const t2 = useRef(null);
  const t3 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to([g1.current, g2.current, g3.current], {
        y: -14,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=420%",
          scrub: 1,
          pin: true,
        },
      });

      // FRONTEND
      tl.fromTo(
        g1.current,
        { opacity: 0, scale: 0.7, rotate: -10 },
        { opacity: 1, scale: 1, rotate: 0, duration: 1 }
      ).fromTo(t1.current, { opacity: 0 }, { opacity: 1 }, "<");

      // BACKEND
      tl.to(g1.current, { opacity: 0, scale: 0.85, rotate: 10 })
        .to(t1.current, { opacity: 0 }, "<")
        .fromTo(
          g2.current,
          { opacity: 0, scale: 1.2, rotate: -14 },
          { opacity: 1, scale: 1, rotate: 0, duration: 1 },
          "<"
        )
        .fromTo(t2.current, { opacity: 0 }, { opacity: 1 }, "<");

      // DATABASE
      tl.to(g2.current, { opacity: 0, scale: 0.85, rotate: -10 })
        .to(t2.current, { opacity: 0 }, "<")
        .fromTo(
          g3.current,
          { opacity: 0, scale: 1.3, rotate: 16 },
          { opacity: 1, scale: 1, rotate: 0, duration: 1 },
          "<"
        )
        .fromTo(t3.current, { opacity: 0 }, { opacity: 1 }, "<");

      tl.to(glow.current, { scale: 1.4, opacity: 0.25, duration: 2 }, 0);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden
      bg-gradient-to-b from-white via-blue-50 to-purple-50"
    >
      <div className="h-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center px-10 gap-20">
        {/* ================= GRAPHICS ================= */}
        <div className="relative flex justify-center items-center mt-[140px]">
          {/* Soft Glow */}
          <div
            ref={glow}
            className="absolute w-[420px] h-[420px]
            bg-gradient-to-r from-blue-400/25 via-purple-400/25 to-cyan-400/25
            blur-[160px] rounded-full"
          />

          {/* FRONTEND */}
          <div
            ref={g1}
            className="absolute w-[220px] h-[220px] rounded-full
            bg-gradient-to-br from-blue-500 to-cyan-500
            shadow-[0_25px_60px_rgba(59,130,246,0.35)]
            flex items-center justify-center text-white"
          >
            <Palette size={90} strokeWidth={1.2} />
          </div>

          {/* BACKEND */}
          <div
            ref={g2}
            className="absolute w-[240px] h-[240px] rounded-3xl
            bg-gradient-to-br from-emerald-500 to-green-600
            shadow-[0_25px_60px_rgba(16,185,129,0.35)]
            flex items-center justify-center text-white opacity-0"
          >
            <Server size={90} strokeWidth={1.2} />
          </div>

          {/* DATABASE */}
          <div
            ref={g3}
            className="absolute w-[260px] h-[260px] rounded-[40px]
            bg-gradient-to-br from-purple-600 to-indigo-600
            shadow-[0_25px_60px_rgba(124,58,237,0.35)]
            flex items-center justify-center text-white opacity-0"
          >
            <Database size={90} strokeWidth={1.2} />
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="relative h-[320px] text-gray-900">
          {/* TITLE */}
          <div className="mb-10">
            <p className="tracking-widest text-blue-600 text-sm mb-2">
              OUR EXPERTIESE
            </p>
            <h2 className="text-5xl font-bold">Full-Stack Development</h2>
          </div>

          {/* FRONTEND */}
          <div ref={t1} className="absolute inset-0 top-[120px]">
            <p className="tracking-widest text-cyan-600 text-sm mt-4">
              FRONTEND
            </p>
            <h3 className="text-4xl font-semibold mb-4">
              UI & User Experience
            </h3>
            <p className="text-gray-600 max-w-md leading-relaxed">
              Modern, responsive, and conversion-focused interfaces that deliver
              smooth user journeys and strong brand impact.
            </p>
          </div>

          {/* BACKEND */}
          <div ref={t2} className="absolute inset-0 top-[120px] opacity-0">
            <p className="tracking-widest text-emerald-600 text-sm mt-4">
              BACKEND
            </p>
            <h3 className="text-4xl font-semibold mb-4">
              Business Logic & APIs
            </h3>
            <p className="text-gray-600 max-w-md leading-relaxed">
              Secure, scalable server-side systems with clean APIs,
              authentication, and third-party integrations.
            </p>
          </div>

          {/* DATABASE */}
          <div ref={t3} className="absolute inset-0 top-[120px] opacity-0">
            <p className="tracking-widest text-purple-600 text-sm mt-4">
              DATABASE
            </p>
            <h3 className="text-4xl font-semibold mb-4">Data & Performance</h3>
            <p className="text-gray-600 max-w-md leading-relaxed">
              High-performance databases designed for speed, security, backups,
              and long-term scalability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
