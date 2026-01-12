"use client";
import React, { useState, useRef, useEffect } from 'react';
import { RefreshCcw, Zap, TrendingUp, BarChart2, Star, CheckCircle, Briefcase, Code, Cpu, MessageSquare } from 'lucide-react';

// --- Reusable, Drag-Enabled Carousel Component ---

const Carousel = ({ children, title, subtitle, id }) => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Auto-slide logic refs and constants
  const autoSlideIntervalRef = useRef(null);
  const lastInteractionTimeRef = useRef(0);
  const AUTO_SLIDE_DURATION = 2000; // 2 seconds
  const MANUAL_PAUSE_DURATION = 5000; // 5 seconds

  const stopAutoSlide = () => {
    if (autoSlideIntervalRef.current) {
      // Clear both interval and timeout, as the ref is reused for both
      clearInterval(autoSlideIntervalRef.current);
      clearTimeout(autoSlideIntervalRef.current);
      autoSlideIntervalRef.current = null;
    }
  };
  
  const slideNext = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      
      // Calculate how many items are visible to determine the scroll step
      // The scroll step should be approximately the width of one card plus its spacing (space-x-6)
      
      // We calculate one card's width based on the current visible cards (e.g., on desktop, clientWidth/4)
      let cardsToShow = 1;
      if (clientWidth >= 1024) { // lg breakpoint
        cardsToShow = 4;
      } else if (clientWidth >= 768) { // md breakpoint (for 3 cards)
        cardsToShow = 3;
      } else if (clientWidth >= 640) { // sm breakpoint (for 2 cards)
        cardsToShow = 2;
      }
      
      const cardWidthWithMargin = (clientWidth / cardsToShow) + 6; // clientWidth / cards + spacing approximation (6px * 4 = 24px total)
      let nextScrollPosition = scrollLeft + cardWidthWithMargin;

      // Check if we are near the end (scroll position + client width > total scroll width)
      if (nextScrollPosition >= scrollWidth - clientWidth) {
        nextScrollPosition = 0; // Loop back to the start
      }
      
      // Use smooth scrolling for the auto-slide
      scrollRef.current.scrollTo({
        left: nextScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const startAutoSlideLoop = () => {
    // Start the repeating slide interval
    autoSlideIntervalRef.current = setInterval(slideNext, AUTO_SLIDE_DURATION);
  }

  const startAutoSlide = () => {
    stopAutoSlide();

    const now = Date.now();
    const timeSinceLastInteraction = now - lastInteractionTimeRef.current;

    if (lastInteractionTimeRef.current > 0 && timeSinceLastInteraction < MANUAL_PAUSE_DURATION) {
      // Pause, then restart auto-slide attempt after the remaining pause duration
      const remainingPause = MANUAL_PAUSE_DURATION - timeSinceLastInteraction;
      
      autoSlideIntervalRef.current = setTimeout(startAutoSlideLoop, remainingPause);
    } else {
      // No recent manual interaction, start the loop immediately
      startAutoSlideLoop();
    }
  };

  // Drag Start (Mouse & Touch)
  const dragStart = (e) => {
    stopAutoSlide(); // Stop auto slide when dragging starts
    setIsDragging(true);
    // Determine the x coordinate based on event type
    const clientX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    setStartX(clientX);
    setScrollLeft(scrollRef.current.scrollLeft);
    // Add a class to prevent text selection during drag on desktop
    scrollRef.current.classList.add('cursor-grabbing');
  };

  // Dragging (Mouse & Touch)
  const dragging = (e) => {
    if (!isDragging) return;
    // Prevent default touch scrolling/actions
    e.preventDefault(); 
    
    // Determine the x coordinate based on event type
    const clientX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;

    const walk = (clientX - startX); // distance mouse moved
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Drag End (Mouse & Touch)
  const dragEnd = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.classList.remove('cursor-grabbing');
    }
    
    // Record interaction time and restart auto-slide logic with pause
    lastInteractionTimeRef.current = Date.now();
    startAutoSlide();
  };

  // Add event listeners on component mount
  useEffect(() => {
    const element = scrollRef.current;
    
    // Initial start of the auto-slide
    startAutoSlide(); 

    if (element) {
      // Desktop Events
      element.addEventListener('mousedown', dragStart);
      element.addEventListener('mousemove', dragging);
      document.addEventListener('mouseup', dragEnd);
      
      // Mobile/Touch Events
      element.addEventListener('touchstart', dragStart);
      element.addEventListener('touchmove', dragging);
      element.addEventListener('touchend', dragEnd);

      return () => {
        // Clean up listeners and intervals
        element.removeEventListener('mousedown', dragStart);
        element.removeEventListener('mousemove', dragging);
        document.removeEventListener('mouseup', dragEnd);

        element.removeEventListener('touchstart', dragStart);
        element.removeEventListener('touchmove', dragging);
        element.removeEventListener('touchend', dragEnd);
        
        stopAutoSlide(); // Clear interval on component unmount
      };
    }
    
    return () => stopAutoSlide(); // Cleanup for non-element return path
  }, [isDragging, startX, scrollLeft, children.length]);

  return (
    <section id={id} className="py-16 md:py-24 bg-[#F4F4F4]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Responsive Heading */}
        <h2 
          className="text-3xl sm:text-4xl font-extrabold text-[#2C3E50] text-center mb-3"
          style={{ fontFamily: 'var(--font-rubik)' }}
        >
          {title}
        </h2>
        {/* Responsive Subtitle */}
        <p 
          className="text-lg sm:text-xl text-[#27B0C4] text-center mb-10 max-w-3xl mx-auto"
          style={{ fontFamily: 'var(--font-poppins)' }}
        >
          {subtitle}
        </p>
        
        {/* The Carousel Container */}
        <div 
          ref={scrollRef} 
          className="flex overflow-x-scroll snap-x snap-mandatory space-x-6 pb-4 md:pb-6 
                     cursor-grab active:cursor-grabbing scrollbar-hide"
          style={{ WebkitOverflowScrolling: 'touch' }} // Smooth scrolling on iOS
          onMouseDown={(e) => e.preventDefault()} // Prevents selection issues on desktop
        >
          {/* Children (Cards) are mapped here */}
          {children}
        </div>
      </div>
    </section>
  );
};


// --- Data Structures ---

const STATS = [
  { value: '65+', label: 'Websites Successfully Launched', icon: Briefcase, color: 'text-[#27B0C4]' },
  { value: '100+', label: 'Happy & Satisfied Clients', icon: Star, color: 'text-[#E67E22]' },
  { value: '180%', label: 'Average Conversion Increase', icon: TrendingUp, color: 'text-[#27B0C4]' },
  { value: '100%', label: 'Project Success Rate', icon: CheckCircle, color: 'text-[#E67E22]' },
];

const INDUSTRIES = [
  { name: 'E-Commerce & Retail', icon: '🛒', description: 'Custom Shopify/WooCommerce development and scalable marketplace solutions.' },
  { name: 'FinTech & Banking', icon: '💰', description: 'Secure, compliant, and intuitive financial web applications and portals.' },
  { name: 'Healthcare & Wellness', icon: '🩺', description: 'HIPAA-compliant platforms, patient portals, and telehealth solutions.' },
  { name: 'SaaS & B2B Software', icon: '⚙️', description: 'High-performance marketing sites for enterprise-level software products.' },
  { name: 'Real Estate & Property', icon: '🏘️', description: 'MLS integration, virtual tours, and hyper-local search experiences.' },
  { name: 'Education & EdTech', icon: '📚', description: 'LMS platforms, student portals, and engaging course websites.' },
];

const CASE_STUDIES = [
  { client: 'Acme Logistics', result: '30% Reduction in Bounce Rate', challenge: 'Outdated static site led to poor user experience and slow loading times.', solution: 'Migrated to Next.js with a performance-first design, implemented dynamic routing.', time: 'Q4 2023' },
  { client: 'Gourmet Kitchen', result: '150% E-commerce Sales Growth', challenge: 'Existing platform lacked robust payment integration and mobile responsiveness.', solution: 'Built a custom e-commerce PWA with integrated Stripe and optimized checkout flow.', time: 'Q2 2024' },
  { client: 'HealthConnect', result: 'Achieved HIPAA Compliance', challenge: 'Needed a secure portal for patient data exchange and appointment booking.', solution: 'Developed a secure serverless application with strict access control and encryption.', time: 'Q1 2024' },
  { client: 'FutureFit Gym', result: '4x Leads via Subscription Form', challenge: 'Low conversion on their old landing page due to poor form design.', solution: 'Implemented A/B tested forms, integrated CRM, and drastically improved page speed.', time: 'Q3 2023' },
];

const TECH_ECOSYSTEM = [
  { name: 'Next.js', category: 'Frontend/Fullstack', icon: '⚛️', description: 'The power of React for lightning-fast, server-rendered applications.' },
  { name: 'Tailwind CSS', category: 'Styling', icon: '🎨', description: 'Utility-first framework for rapid and consistent modern design.' },
  { name: 'Node.js/Express', category: 'Backend', icon: '🐘', description: 'Scalable, event-driven servers and robust API development.' },
  { name: 'Firebase/Supabase', category: 'Database/Auth', icon: '🔥', description: 'Real-time databases, authentication, and serverless functions.' },
  { name: 'TypeScript', category: 'Language', icon: '✅', description: 'Ensuring code quality, maintainability, and fewer runtime bugs.' },
  { name: 'Vercel/Netlify', category: 'Deployment', icon: '☁️', description: 'Optimized, global content delivery for peak performance.' },
];

const TESTIMONIALS = [
  { quote: 'Gohil Infotech transformed our sluggish website into a high-performance lead generation machine. The drag-and-drop feature on their slider is phenomenal!', name: 'Sarah Chen', title: 'Marketing Director, Alpha Corp' },
  { quote: 'The speed and attention to detail were unmatched. They delivered a complex SaaS portal on time and exceeded all our performance metrics.', name: 'David Lee', title: 'CTO, Innovate Solutions' },
  { quote: 'Highly professional team. They understood our FinTech compliance needs instantly and built a rock-solid, secure platform.', name: 'Maria Rodriguez', title: 'CEO, SecurePay' },
  { quote: 'From design to deployment, the process was seamless. Our new e-commerce site looks fantastic and converts better than ever.', name: 'James Kim', title: 'Owner, Global Retail' },
];

// --- Card Components ---

// Card component for use within the Carousel
const CarouselCard = ({ children, className = '' }) => (
  // Responsive sizing: w-full (1 card), sm:w-1/2 (2 cards), md:w-1/3 (3 cards), lg:w-1/4 (4 cards)
  <div className={`snap-start flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 ${className}`}>
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 h-full border border-[#F4F4F4]">
      {children}
    </div>
  </div>
);

const StatCard = ({ value, label, Icon, color }) => (
  <div className="p-6 bg-white rounded-xl shadow-md text-center border border-[#F4F4F4]">
    <Icon className={`w-7 h-7 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 ${color}`} />
    <p 
      className="text-4xl sm:text-5xl font-extrabold text-[#2C3E50]"
      style={{ fontFamily: 'var(--font-rubik)' }}
    >
      {value}
    </p>
    <p 
      className="mt-1 text-base sm:text-lg font-medium text-[#7A7A7A]"
      style={{ fontFamily: 'var(--font-poppins)' }}
    >
      {label}
    </p>
  </div>
);

// --- Main App Component ---

const GohilInfotechLandingPage = () => {
  return (
    <div className="min-h-screen font-sans antialiased bg-white">
      
      {/* 1. Hero Section: Are You Stuck in the Digital Past? */}
      <section className="relative overflow-hidden pt-20 pb-12 md:pt-32 md:pb-24 bg-[#2C3E50] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
              style={{ fontFamily: 'var(--font-rubik)' }}
            >
              Are You Stuck in the Digital Past?
            </h1>
            <p 
              className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-white/80 font-light"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              It's time to move beyond outdated websites. Gohil Infotech crafts future-proof, high-performance web experiences that drive real revenue.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact" 
                className="px-6 py-2 sm:px-8 sm:py-3 text-base sm:text-lg font-semibold rounded-full shadow-lg bg-[#E67E22] text-white hover:bg-[#D46A1A] transition duration-300 transform hover:scale-105"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                Start Your Project Today
              </a>
              <a 
                href="#track-record" 
                className="px-6 py-2 sm:px-8 sm:py-3 text-base sm:text-lg font-semibold rounded-full border-2 border-white/30 text-white hover:bg-white/10 transition duration-300"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                See Our Work
              </a>
            </div>
          </div>
        </div>
        {/* Background Gradient Effect */}
        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-[#2C3E50] to-[#7A7A7A]"></div>
      </section>

      {/* 2. Why Choose Gohil Infotech? */}
      <section className="py-16 md:py-24 bg-[#FFFFFF]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 
            className="text-3xl sm:text-4xl font-extrabold text-[#2C3E50] text-center mb-4"
            style={{ fontFamily: 'var(--font-rubik)' }}
          >
            Why Choose Gohil Infotech?
          </h2>
          <p 
            className="text-lg sm:text-xl text-[#27B0C4] text-center mb-10 max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            We don't just build websites; we engineer growth platforms powered by the Next.js and Tailwind CSS ecosystem.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 sm:p-8 rounded-xl shadow-lg bg-white border-t-4 border-[#27B0C4] border border-[#F4F4F4]">
              <RefreshCcw className="w-8 h-8 sm:w-10 sm:h-10 text-[#27B0C4] mb-3 sm:mb-4" />
              <h3 
                className="text-xl sm:text-2xl font-semibold text-[#2C3E50] mb-2 sm:mb-3"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                Unbeatable Speed
              </h3>
              <p 
                className="text-sm sm:text-base text-[#7A7A7A]"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                Leverage server-side rendering (SSR) and static site generation (SSG) with Next.js for sub-second load times that Google loves.
              </p>
            </div>
            <div className="p-6 sm:p-8 rounded-xl shadow-lg bg-white border-t-4 border-[#E67E22] border border-[#F4F4F4]">
              <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-[#E67E22] mb-3 sm:mb-4" />
              <h3 
                className="text-xl sm:text-2xl font-semibold text-[#2C3E50] mb-2 sm:mb-3"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                Pixel-Perfect Design
              </h3>
              <p 
                className="text-sm sm:text-base text-[#7A7A7A]"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                Tailwind CSS ensures every site is instantly responsive, looks flawless on every device, and is highly maintainable.
              </p>
            </div>
            <div className="p-6 sm:p-8 rounded-xl shadow-lg bg-white border-t-4 border-[#27B0C4] border border-[#F4F4F4]">
              <BarChart2 className="w-8 h-8 sm:w-10 sm:h-10 text-[#27B0C4] mb-3 sm:mb-4" />
              <h3 
                className="text-xl sm:text-2xl font-semibold text-[#2C3E50] mb-2 sm:mb-3"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                Conversion Focused
              </h3>
              <p 
                className="text-sm sm:text-base text-[#7A7A7A]"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                Our approach integrates UX best practices to maximize lead capture, sales, and overall business outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Proven Track Record: Numbers That Speak Volumes */}
      <section id="track-record" className="py-16 md:py-24 bg-[#2C3E50] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 
            className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-10"
            style={{ fontFamily: 'var(--font-rubik)' }}
          >
            Our Proven Track Record
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {STATS.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} Icon={stat.icon} color={stat.color} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. We Work For Multiple Industries (Uses Carousel) */}
      <Carousel 
        id="industries"
        title="We Work For Multiple Industries" 
        subtitle="Our versatile team has delivered high-impact solutions across diverse sectors, understanding the unique challenges of each."
      >
        {INDUSTRIES.map((industry, index) => (
          <CarouselCard key={index} className="px-3">
            <p className="text-4xl sm:text-5xl mb-3 sm:mb-4">{industry.icon}</p>
            <h3 
              className="text-lg sm:text-xl font-semibold text-[#2C3E50] mb-1 sm:mb-2"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              {industry.name}
            </h3>
            <p 
              className="text-xs sm:text-sm text-[#7A7A7A]"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              {industry.description}
            </p>
          </CarouselCard>
        ))}
      </Carousel>
      
      {/* 5. Real Results: Our Mini Case Studies (Uses Carousel) */}
      <Carousel 
        id="case-studies"
        title="Real Results: Our Mini Case Studies" 
        subtitle="See how our technology-first approach turned business challenges into measurable success stories."
      >
        {CASE_STUDIES.map((study, index) => (
          <CarouselCard key={index} className="px-3">
            <span 
              className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-[#F4F4F4] text-[#27B0C4] mb-2 sm:mb-3"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              {study.time}
            </span>
            <h3 
              className="text-xl sm:text-2xl font-bold text-[#27B0C4] mb-2 sm:mb-3"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              {study.result}
            </h3>
            <p 
              className="text-xs sm:text-sm font-medium text-[#7A7A7A] mb-1 sm:mb-2"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              Client: {study.client}
            </p>
            <div className="mt-3 pt-3 border-t border-[#F4F4F4]">
                <p 
                  className="text-sm sm:text-base font-semibold text-[#2C3E50]"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  Challenge:
                </p>
                <p 
                  className="text-xs sm:text-sm text-[#7A7A7A]"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  {study.challenge}
                </p>
                <p 
                  className="text-sm sm:text-base font-semibold text-[#2C3E50] mt-2 sm:mt-3"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  Solution:
                </p>
                <p 
                  className="text-xs sm:text-sm text-[#7A7A7A]"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  {study.solution}
                </p>
            </div>
          </CarouselCard>
        ))}
      </Carousel>

      {/* 6. Our Tech Ecosystem (Uses Carousel) */}
      <Carousel 
        id="tech-ecosystem"
        title="Our Tech Ecosystem" 
        subtitle="We build exclusively with modern, battle-tested technologies to guarantee scalability, security, and peak performance."
      >
        {TECH_ECOSYSTEM.map((tech, index) => (
          <CarouselCard key={index} className="px-3">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                <p className="text-2xl sm:text-3xl">{tech.icon}</p>
                <h3 
                  className="text-lg sm:text-xl font-bold text-[#2C3E50]"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  {tech.name}
                </h3>
            </div>
            <p 
              className="text-xs sm:text-sm font-medium text-[#27B0C4] mb-1 sm:mb-2"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              {tech.category}
            </p>
            <p 
              className="text-xs sm:text-sm text-[#7A7A7A]"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              {tech.description}
            </p>
          </CarouselCard>
        ))}
      </Carousel>

      {/* 7. Your Solution: CTA */}
      <section className="py-16 md:py-24 bg-[#27B0C4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 
            className="text-3xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4"
            style={{ fontFamily: 'var(--font-rubik)' }}
          >
            Your Solution: A Future-Proof Website
          </h2>
          <p 
            className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-8 sm:mb-10"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            Stop losing customers to slow, clunky websites. Partner with Gohil Infotech and invest in a digital asset built for tomorrow's internet.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 text-lg sm:text-xl font-bold rounded-full shadow-2xl bg-[#E67E22] text-white hover:bg-[#D46A1A] transition duration-300 transform hover:scale-105"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            Book a Free Strategy Call
          </a>
        </div>
      </section>

      {/* 8. Client Testimonials (Uses Carousel) */}
      <Carousel 
        id="testimonials"
        title="Client Testimonials" 
        subtitle="Don't just take our word for it. Hear directly from the leaders we've helped succeed."
      >
        {TESTIMONIALS.map((testimonial, index) => (
          // Testimonials use a slightly different, wider card size: 1 on mobile, 2 on tablet, 3 on desktop
          <div key={index} className="snap-start flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8 h-full flex flex-col justify-between border-t-4 border-[#27B0C4] border border-[#F4F4F4]">
                <div>
                    <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 text-[#27B0C4] mb-3 sm:mb-4" />
                    <p 
                      className="text-base sm:text-lg italic text-[#7A7A7A] mb-4 sm:mb-6 leading-relaxed"
                      style={{ fontFamily: 'var(--font-poppins)' }}
                    >
                      "{testimonial.quote}"
                    </p>
                </div>
                <div className="font-semibold pt-3 border-t border-[#F4F4F4]">
                    <p 
                      className="text-sm sm:text-base text-[#2C3E50]"
                      style={{ fontFamily: 'var(--font-poppins)' }}
                    >
                      {testimonial.name}
                    </p>
                    <p 
                      className="text-xs sm:text-sm text-[#27B0C4]"
                      style={{ fontFamily: 'var(--font-poppins)' }}
                    >
                      {testimonial.title}
                    </p>
                </div>
            </div>
          </div>
        ))}
      </Carousel>
      
      {/* 9. Contact/Footer Section */}
      <footer id="contact" className="py-8 sm:py-12 bg-[#2C3E50] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h3 
            className="text-xl sm:text-2xl font-semibold mb-2"
            style={{ fontFamily: 'var(--font-rubik)' }}
          >
            Gohil Infotech
          </h3>
          <p 
            className="text-sm sm:text-base text-white/70 mb-3 sm:mb-4"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            Crafting the digital future, one Next.js application at a time.
          </p>
          <p 
            className="text-xs sm:text-sm text-white/50"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            &copy; {new Date().getFullYear()} Gohil Infotech. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Utility to hide scrollbar (required for the Carousel) */}
      <style>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default GohilInfotechLandingPage;