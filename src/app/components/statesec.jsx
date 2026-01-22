"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { 
  FaCheckCircle
} from 'react-icons/fa';

const Counter = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = React.useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return (
    <span 
      ref={ref} 
      className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C3E50]"
      style={{ fontFamily: 'var(--font-rubik)' }}
    >
      {count}{suffix}
    </span>
  );
};

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // 🔥 Updated with your new numbers + titles
  const stats = [
    {
      iconPath: "/gipl icons_website.svg",
      value: 500,
      suffix: "+",
      title: "Website Launches",
      desc: "Successfully delivered website development projects across multiple industries",
      color: "from-[#27B0C4] to-[#73CCD7]",
      duration: 2,
      bgColor: "bg-[#F4F4F4]"
    },
    {
      iconPath: "/gipl icons_happy client.svg",
      value: 250,
      suffix: "+",
      title: "Happy Clients",
      desc: "Long term partnerships with businesses that trust our web development services",
      color: "from-[#E67E22] to-[#D46A1A]",
      duration: 2.5,
      bgColor: "bg-[#F4F4F4]"
    },
    {
      iconPath: "/gipl icons_client satisfaction.svg",
      value: 98,
      suffix: "%",
      title: "Client Satisfaction",
      desc: "Consistently exceeding expectations with quality website development",
      color: "from-[#27B0C4] to-[#73CCD7]",
      duration: 3,
      bgColor: "bg-[#F4F4F4]"
    },
    {
      iconPath: "/gipl icons_on time delivery.svg",
      value: 100,
      suffix: "%",
      title: "On Time Delivery",
      desc: "Never missed a deadline your website launches exactly when promised",
      color: "from-[#E67E22] to-[#D46A1A]",
      duration: 2,
      bgColor: "bg-[#F4F4F4]"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1, y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    },
    hover: {
      y: -8, scale: 1.02,
      transition: { type: "spring", stiffness: 300, damping: 15 }
    }
  };

  return (
    <div className="bg-[#FFFFFF] py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 
            className="text-3xl md:text-4xl font-bold mb-3 text-[#2C3E50]"
            style={{ fontFamily: 'var(--font-rubik)' }}
          >
            Our Proven Track Record
          </h2>
          <p 
            className="text-lg text-[#7A7A7A] max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            Numbers that speak louder than words. See the impact we've created.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {stats.map((stat, idx) => (
            <motion.div key={idx} variants={cardVariants} whileHover="hover">
              <div className={`rounded-xl p-2 shadow-sm hover:shadow-lg transition border border-[#F4F4F4] h-full ${stat.bgColor} flex flex-col items-center`}>
                
                {/* Icon */}
                <motion.div
                  initial={{ rotate: -180, scale: 0 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: idx * 0.1 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-6 shadow-md p-2`}
                >
                  <img
                    src={stat.iconPath}
                    alt={stat.title}
                    className={`${idx < 2 ? "w-7 h-7" : "w-8 h-8"} object-contain`}
                  />
                </motion.div>

                {/* Counter */}
                <div className="text-center mb-3">
                  {isInView ? (
                    <Counter end={stat.value} duration={stat.duration} suffix={stat.suffix} />
                  ) : (
                    <span 
                      className="text-4xl font-bold text-[#F4F4F4]"
                      style={{ fontFamily: 'var(--font-rubik)' }}
                    >
                      0{stat.suffix}
                    </span>
                  )}
                </div>

                {/* Small Progress Bar */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: stat.duration }}
                  className="h-1.5 bg-[#F4F4F4] rounded-full w-24 mx-auto overflow-hidden mb-4"
                >
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    viewport={{ once: true }}
                    transition={{ duration: stat.duration }}
                    className={`h-full bg-gradient-to-r ${stat.color}`}
                  />
                </motion.div>

                {/* Title */}
                <h3 
                  className="text-base font-semibold text-[#2C3E50] mb-1"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  {stat.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-xs text-[#7A7A7A] text-center leading-relaxed"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  {stat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
