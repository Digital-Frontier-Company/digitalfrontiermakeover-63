
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Zap, Target, Rocket, TrendingUp, Users, Award, Play, ArrowRight } from 'lucide-react';

const MorphingHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeOrb, setActiveOrb] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const dynamicTexts = [
    "deliver AI-Powered Growth",
    "provide Data-Driven Results", 
    "achieve Market Domination",
    "create Revenue Explosion"
  ];

  useEffect(() => {
    let rafId: number;
    let cachedRect: DOMRect | null = null;
    let lastTime = 0;
    
    const updateRect = () => {
      if (heroRef.current) {
        cachedRect = heroRef.current.getBoundingClientRect();
      }
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastTime < 16) return; // Throttle to ~60fps
      lastTime = now;
      
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
      rafId = requestAnimationFrame(() => {
        if (heroRef.current && cachedRect) {
          setMousePosition({ 
            x: (e.clientX - cachedRect.left) / cachedRect.width, 
            y: (e.clientY - cachedRect.top) / cachedRect.height 
          });
        }
      });
    };

    const handleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
      rafId = requestAnimationFrame(() => {
        if (typeof window === 'undefined') return;
        
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax-morph');
        parallaxElements.forEach((element, index) => {
          const speed = 0.5 + (index * 0.1);
          const yPos = -(scrolled * speed);
          (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
        });
      });
    };

    // Cache rect on mount and resize
    updateRect();
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateRect, { passive: true });
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    // Text cycling animation
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % dynamicTexts.length);
    }, 3000);

    // Orb cycling
    const orbInterval = setInterval(() => {
      setActiveOrb((prev) => (prev + 1) % 3);
    }, 2000);

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', updateRect);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('scroll', handleScroll);
      }
      clearInterval(textInterval);
      clearInterval(orbInterval);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [dynamicTexts.length]);

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-800">
      {/* Dynamic Background Morphing Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary Morphing Shape */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl parallax-morph transition-all duration-1000 ease-out"
          style={{
            left: `${20 + mousePosition.x * 30}%`,
            top: `${10 + mousePosition.y * 20}%`,
            transform: `scale(${1 + mousePosition.x * 0.5}) rotate(${mousePosition.x * 45}deg)`
          }}
        />
        
        {/* Secondary Morphing Shape */}
        <div 
          className="absolute w-72 h-72 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-2xl parallax-morph transition-all duration-700 ease-out"
          style={{
            right: `${10 + mousePosition.y * 25}%`,
            top: `${30 + mousePosition.x * 15}%`,
            transform: `scale(${1.2 - mousePosition.y * 0.3}) rotate(${-mousePosition.y * 60}deg)`
          }}
        />

        {/* Tertiary Morphing Shape */}
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl parallax-morph transition-all duration-900 ease-out"
          style={{
            left: `${50 + mousePosition.y * 20}%`,
            bottom: `${20 + mousePosition.x * 10}%`,
            transform: `scale(${0.8 + mousePosition.x * 0.4}) rotate(${mousePosition.y * 30}deg)`
          }}
        />
      </div>

      {/* Interactive Particle Field */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/40 rounded-full animate-pulse transition-all duration-500"
            style={{
              left: `${10 + (i * 7)}%`,
              top: `${15 + (i * 6)}%`,
              animationDelay: `${i * 0.3}s`,
              transform: `translate(${mousePosition.x * (20 + i * 5)}px, ${mousePosition.y * (15 + i * 3)}px)`
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Logo with Morphing Effect */}
          <div className="mb-8 group">
            <div 
              className="inline-block p-6 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * 10}deg) rotateY(${mousePosition.x * 10}deg)`
              }}
            >
              <img 
                alt="Digital Frontier Company - AI Marketing Technology Logo" 
                className="h-16 w-auto drop-shadow-2xl"
                src="/lovable-uploads/7776c86f-9ded-48de-8610-b283ef010a56.png" 
                width="64"
                height="64"
                loading="lazy"
              />
            </div>
          </div>

          {/* Dynamic Headline with Morphing Text */}
          <div className="mb-8">
            <h2 className="text-5xl md:text-7xl font-bold leading-tight text-white mb-6">
              <span className="block mb-2">We don't just</span>
              <span 
                className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent transition-all duration-1000"
                key={textIndex}
                style={{
                  animation: 'fadeInScale 1s ease-out'
                }}
              >
                {dynamicTexts[textIndex]}
              </span>
              <span className="block mt-2 text-4xl md:text-5xl text-gray-300">
                We <em className="text-yellow-400">Dominate</em>
              </span>
            </h2>
          </div>

          {/* Interactive Feature Orbs */}
          <div className="flex justify-center items-center gap-8 mb-12">
            {[
              { icon: Zap, label: "AI Power", color: "from-yellow-400 to-orange-500" },
              { icon: Target, label: "Precision", color: "from-red-400 to-pink-500" },
              { icon: TrendingUp, label: "Growth", color: "from-green-400 to-emerald-500" }
            ].map((item, index) => (
              <div
                key={index}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  activeOrb === index ? 'scale-125' : 'scale-100 hover:scale-110'
                }`}
                onMouseEnter={() => setActiveOrb(index)}
              >
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${item.color} p-0.5 shadow-2xl ${
                  activeOrb === index ? 'animate-pulse' : ''
                }`}>
                  <div className="w-full h-full rounded-full bg-slate-900/90 backdrop-blur-sm flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-medium text-white transition-opacity duration-300 ${
                  activeOrb === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Morphing CTA Section */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
            <Link 
              to="/modern-contact-form" 
              className="group relative px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 rounded-full overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-blue-500/50 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center justify-center">
                <Play className="mr-3 w-5 h-5 group-hover:animate-bounce" />
                Start Your Domination
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
            
            <a 
              href="#smart-marketing" 
              className="group px-8 py-4 text-lg font-semibold text-white border-2 border-blue-500/50 rounded-full hover:bg-blue-900/20 hover:border-blue-400/70 transition-all duration-300 backdrop-blur-sm hover:scale-105"
            >
              <span className="flex items-center justify-center">
                <Award className="mr-2 w-5 h-5 group-hover:animate-spin" />
                See Our Weapons
              </span>
            </a>
          </div>

          {/* Stats with Morphing Containers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            {[
              { number: "850+", label: "Brands Conquered" },
              { number: "4.9★", label: "Battle Rating" },
              { number: "300%", label: "Avg Growth" }
            ].map((stat, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${mousePosition.y * 5}deg)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <div className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl hover:border-blue-400/50 transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-blue-500/20">
                  <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:animate-pulse">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Scroll Indicator */}
          <div className="flex justify-center">
            <a 
              href="#smart-marketing" 
              className="group flex flex-col items-center justify-center text-blue-300 hover:text-blue-400 transition-all duration-300"
            >
              <div className="mb-3 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce">
                Unleash The Power
              </div>
              <div 
                className="w-12 h-12 rounded-full border-2 border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-900/20"
                style={{
                  transform: `rotateZ(${mousePosition.x * 10}deg)`
                }}
              >
                <ChevronDown className="w-6 h-6 group-hover:animate-bounce" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default MorphingHero;
