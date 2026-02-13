"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Nav from '../components/nav';
import Confetti from 'react-confetti';

export default function ThankYou() {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };

        // Set initial size
        handleResize();
        setShowConfetti(true);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <Nav />
            {/* Confetti Celebration */}
            {showConfetti && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 50 }}>
                    <Confetti
                        width={windowSize.width}
                        height={windowSize.height}
                        recycle={false}
                        numberOfPieces={300}
                        gravity={0.15}
                        colors={['#27B0C4', '#E67E22', '#F1C40F', '#2C3E50', '#ECF0F1']}
                    />
                </div>
            )}

            {/* Container with modern gradient background */}
            <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4 pt-20 pb-12 relative overflow-hidden">

                {/* Decorative Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{
                            y: [0, -30, 0],
                            x: [0, 20, 0],
                            opacity: [0.3, 0.6, 0.3],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl mix-blend-multiply"
                    />
                    <motion.div
                        animate={{
                            y: [0, 40, 0],
                            x: [0, -30, 0],
                            opacity: [0.3, 0.5, 0.3],
                            scale: [1, 1.25, 1]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-cyan-100/50 rounded-full blur-3xl mix-blend-multiply"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-white/70 backdrop-blur-2xl rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-8 sm:p-14 max-w-lg w-full text-center border border-white/60 relative z-10"
                >
                    {/* Success Animation Circle */}
                    <div className="flex justify-center mb-8">
                        <div className="relative w-28 h-28 flex items-center justify-center">
                            {/* Pulsing rings */}
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: [1, 1.5, 1.8], opacity: [0.6, 0.2, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                                className="absolute inset-0 bg-[#27B0C4]/20 rounded-full"
                            />
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                                className="absolute inset-0 bg-[#E67E22]/20 rounded-full"
                            />

                            {/* Main Circle */}
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 15,
                                    delay: 0.2
                                }}
                                className="w-20 h-20 bg-gradient-to-tr from-[#27B0C4] to-[#4DD0E1] rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30 relative z-10"
                            >
                                <motion.svg
                                    viewBox="0 0 24 24"
                                    className="w-10 h-10 text-white stroke-current stroke-[3]"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <motion.path
                                        d="M20 6L9 17l-5-5"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 1 }}
                                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                                    />
                                </motion.svg>
                            </motion.div>
                        </div>
                    </div>

                    <motion.h1
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="text-4xl sm:text-5xl font-extrabold text-[#2C3E50] mb-4 tracking-tight"
                        style={{ fontFamily: 'var(--font-rubik)' }}
                    >
                        Thank You!
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="text-[#546E7A] text-base sm:text-lg mb-10 leading-relaxed font-medium"
                        style={{ fontFamily: 'var(--font-poppins)' }}
                    >
                        Your request has been received. <br className="hidden sm:block" />
                        We're excited to connect with you soon!
                    </motion.p>

                    <Link href="/" passHref>
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, type: "spring", stiffness: 100 }}
                            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px -5px rgba(39, 176, 196, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-[#27B0C4] to-[#2298A9] text-white rounded-xl font-bold text-sm sm:text-base shadow-xl transition-all duration-300 transform"
                            style={{ fontFamily: 'var(--font-rubik)' }}
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Return Home
                        </motion.button>
                    </Link>
                </motion.div>
            </main>
        </>
    );
}
