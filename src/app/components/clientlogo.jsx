"use client";

import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Rocket, Zap, TrendingUp } from 'lucide-react';

export default function clientlogo() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

   return (

    <div className="client-logo-section py-8 sm:py-10 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Esteemed Clients</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {/* Example client logos */}
          <img src="/clients/client1.png" alt="Client 1" className="mx-auto h-12 object-contain" />
          <img src="/clients/client2.png" alt="Client 2" className="mx-auto h-12 object-contain" />
          <img src="/clients/client3.png" alt="Client 3" className="mx-auto h-12 object-contain" />
          <img src="/clients/client4.png" alt="Client 4" className="mx-auto h-12 object-contain" />
          <img src="/clients/client5.png" alt="Client 5" className="mx-auto h-12 object-contain" />
          <img src="/clients/client6.png" alt="Client 6" className="mx-auto h-12 object-contain" />
        </div>
      </div>
    </div>
  );
}