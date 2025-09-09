import { Link } from "react-router-dom";
import { useEffect, useRef, useState, Suspense, lazy } from "react";
import useFaqToggle from "@/hooks/useFaqToggle";
import SEOSchema from "@/components/SEOSchema";
import { LazyImage } from "@/components/LazyImage";
import { IMAGE_SIZES, getImageDimensions } from "@/utils/imageOptimization";
import Typed from 'typed.js';
import { ChevronDown, Zap, Target, Rocket, TrendingUp, Users, Award, Check, DollarSign, BarChart3, Sprout, RotateCcw, Gem, Settings, TrendingDown, Clock, Shield } from 'lucide-react';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import BlogPromoBlock from "@/components/BlogPromoBlock";

// TypewriterText component with line break support
const TypewriterText = ({
  text,
  delay = 50
}: {
  text: string;
  delay?: number;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  useEffect(() => {
    // Split text by | for line breaks
    const lines = text.split('|');
    const fullText = lines.join('\n');
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowCursor(false), 2000);
      }
    }, delay);
    return () => clearInterval(timer);
  }, [text, delay]);
  return <div className="text-center">
      {displayedText.split('\n').map((line, index) => <div key={index} className="block">
          {line}
        </div>)}
      {showCursor && <span className="typewriter-cursor">|</span>}
    </div>;
};

// Lazy load below-the-fold components for performance
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const CaseStudySlider = lazy(() => import("@/components/CaseStudySlider"));
const PricingToggle = lazy(() => import("@/components/PricingToggle"));
const FAQAccordion = lazy(() => import("@/components/FAQAccordion"));
const ModernContactForm = lazy(() => import("@/components/ModernContactForm"));
const GenerativeSearchProSection = lazy(() => import("@/components/GenerativeSearchProSection"));
const Index = () => {
  // Use the FAQ toggle hook
  useFaqToggle();

  // Reference for Typed.js element
  const typedElement = useRef(null);
  const typed = useRef(null);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showFullText, setShowFullText] = useState(false);
  const [bubbles, setBubbles] = useState(() => Array.from({
    length: 3
  }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 20 + Math.random() * 40,
    speed: 0.1 + Math.random() * 0.2,
    direction: Math.random() * 360,
    opacity: 0.3 + Math.random() * 0.4
  })));
  // Handle bubble pop
  const handleBubblePop = (id: number) => {
    setBubbles(prevBubbles => prevBubbles.map(bubble => bubble.id === id ? {
      ...bubble,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 20 + Math.random() * 40,
      speed: 0.1 + Math.random() * 0.2,
      direction: Math.random() * 360,
      opacity: 0.3 + Math.random() * 0.4
    } : bubble));
  };

  // Bubble movement animation
  useEffect(() => {
    const interval = setInterval(() => {
      setBubbles(prevBubbles => prevBubbles.map(bubble => ({
        ...bubble,
        x: (bubble.x + Math.cos(bubble.direction) * bubble.speed + 100) % 100,
        y: (bubble.y + Math.sin(bubble.direction) * bubble.speed + 100) % 100
      })));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Track mouse movement for interactive effects - Optimized for performance
  useEffect(() => {
    let rafId: number;
    let lastTime = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastTime < 16) return; // Throttle to ~60fps
      lastTime = now;
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(() => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY
        });
      });
    };
    window.addEventListener('mousemove', handleMouseMove, {
      passive: true
    });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  // Intersection observer for animations - Optimized
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });
    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach(section => observer.observe(section));
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  // Load HubSpot form script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/embed/48401342.js';
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      // Cleanup script on component unmount
      const existingScript = document.querySelector('script[src="https://js.hsforms.net/forms/embed/48401342.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  // Parallax scroll effects
  const {
    scrollY
  } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -150]);
  const logoScale = useTransform(scrollY, [0, 300], [1, 1.1]);
  const marqueeControls = useAnimation();
  const trustedLogos = ["/lovable-uploads/2486421b-6ca3-4c32-b686-a49ac0da182b.png", "/lovable-uploads/998924f0-2fc2-41d7-98d1-5b927c64c09e.png", "/lovable-uploads/914a27cb-e153-438e-8c3b-3937b1598283.png", "/lovable-uploads/dd9a50a2-11ff-45a3-bdef-97597bd967b7.png", "/lovable-uploads/006c1b20-0f5a-4e81-804c-dac4a28eb855.png", "/lovable-uploads/966b64a4-e3f7-488f-b15e-0d2d8e61d442.png", "/lovable-uploads/1ee99e39-aa6f-42eb-ad36-cd370652c1d7.png"];
  const extraTrustedImages = ["/lovable-uploads/3c96b100-6325-4881-925d-941fa1d28582.png", "/lovable-uploads/a8a47af6-c1fb-4ef5-9186-0149566a84ae.png", "/lovable-uploads/605b3988-ccd7-4c5d-9c40-fe5ea991729b.png", "/lovable-uploads/06143896-3705-4777-8c31-5f139371be88.png", "/lovable-uploads/eb7443f0-3f7a-4b83-9d12-c669af95a5d8.png", "/lovable-uploads/51cb98d5-156b-4bca-8c82-34d3ec317ca3.png"];
  const marqueeItems = [...trustedLogos, "/lovable-uploads/4883064e-c62b-46fc-88e4-ccb90130e07e.png", ...extraTrustedImages];
  useEffect(() => {
    marqueeControls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity
      }
    });
  }, [marqueeControls]);
  return <>
      <SEOSchema />
      
      
      {/* HERO SECTION - Original Style with New Copy */}
      <motion.section className="relative isolate overflow-hidden min-h-screen bg-deep-navy" style={{
      backgroundImage: `url('/lovable-uploads/437eedfa-5c80-4a7d-9af4-21878ea732d7.png'), linear-gradient(135deg, #0f1629 0%, #1a237e 25%, #8FB31D 45%, #2d3748 70%, #1a202c 100%)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundBlendMode: 'overlay',
      y: heroY
    }} data-lcp-element="true" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 1.2
    }}>
        {/* Subtle Floating Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({
          length: 2
        }, (_, i) => <div key={i} className="absolute rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/10" style={{
          width: `${60 + i * 20}px`,
          height: `${60 + i * 20}px`,
          left: `${20 + i * 30}%`,
          top: `${20 + i * 25}%`,
          animation: `float ${4 + i * 2}s ease-in-out infinite`,
          animationDelay: `${i * 1.5}s`,
          filter: 'blur(1px)'
        }} />)}
        </div>

        {/* Interactive Clickable Bubbles */}
        <div className="absolute inset-0 overflow-hidden">
          {bubbles.map(bubble => <div key={bubble.id} className="absolute rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-500/20 cursor-pointer hover:scale-110 transition-all duration-300" style={{
          width: `${bubble.size}px`,
          height: `${bubble.size}px`,
          left: `${bubble.x}%`,
          top: `${bubble.y}%`,
          opacity: bubble.opacity,
          filter: 'drop-shadow(0 0 8px rgba(0, 255, 255, 0.4))',
          animation: `float ${3 + bubble.id % 3}s ease-in-out infinite`,
          animationDelay: `${bubble.id * 0.5}s`
        }} onClick={() => handleBubblePop(bubble.id)} />)}
        </div>

        {/* Animated Grid Pattern Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
          backgroundImage: `
                linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
              `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite',
          filter: 'drop-shadow(0 0 2px cyan)'
        }} />
        </div>
        
        {/* Subtle gradient overlay for depth */}
        <motion.div animate={{
        background: ['linear-gradient(135deg, rgba(47,128,255,0.05) 0%, transparent 50%, rgba(143,179,29,0.05) 100%)', 'linear-gradient(135deg, rgba(143,179,29,0.05) 0%, transparent 50%, rgba(47,128,255,0.05) 100%)', 'linear-gradient(135deg, rgba(47,128,255,0.05) 0%, transparent 50%, rgba(143,179,29,0.05) 100%)']
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="absolute inset-0 bg-gradient-to-br from-electric-azure/5 via-transparent to-ultraviolet/5 mx-[10px] my-[10px] px-[3px] py-[3px]" />
        
        {/* Main Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 lg:px-8 text-center flex flex-col justify-center min-h-screen">
          
          {/* Logo with Scale Animation */}
          <motion.div className="relative flex justify-center mb-12" style={{
          scale: logoScale
        }} initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }}>
            {/* Simplified geometric frame around logo */}
            <div className="absolute inset-0 -top-6 -bottom-6 -left-6 -right-6">
              <div className="absolute inset-0 border border-cyan-400/50 animate-pulse rounded-full"></div>
            </div>
            
            {/* Main logo */}
            <LazyImage src="/lovable-uploads/0a290708-5a9c-4d58-8a79-88d6ed6a5e66.png" alt="Digital Frontier Company - Leading Memphis Digital Marketing Agency" className="h-80 w-auto relative z-10 object-cover logo-interactive animate-logo-strobe" displayWidth={480} displayHeight={320} optimization={{
            priority: true
          }} />
          </motion.div>

          {/* New Headlines */}
          <motion.h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight" style={{
          background: 'linear-gradient(135deg, #4EE2EC 0%, #8FB31D 50%, #4EE2EC 100%)',
          backgroundSize: '300% 300%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'gradientShift 4s ease-in-out infinite',
          lineHeight: '1.2',
          paddingBottom: '0.1em'
        }} initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }}>
            Feeling Lost in AI?
          </motion.h1>

          {/* Typewriter Animation */}
          <motion.div className="text-2xl md:text-3xl text-white mb-8 leading-relaxed font-semibold" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }}>
            <TypewriterText text="We spent $50K+ testing 100+ AI tools so you don't have to" delay={60} />
          </motion.div>

          {/* Subtitle */}
          <motion.p className="text-lg text-soft-white/80 mb-12 max-w-4xl mx-auto" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }}>
            Get only proven AI solutions that actually work for small businesses—not just hype.
          </motion.p>

          {/* Stats Containers */}
          <motion.div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.8
        }}>
            <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center group hover:border-[#4EE2EC]/50 transition-all duration-300">
              <div className="flex justify-center mb-3">
                <DollarSign className="w-8 h-8 text-[#4EE2EC]" />
              </div>
              <div className="text-3xl font-bold mb-2" style={{
              color: '#4EE2EC'
            }}>$50,000+</div>
              <div className="text-sm text-slate-300">Invested in AI testing</div>
            </div>
            <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center group hover:border-[#8FB31D]/50 transition-all duration-300">
              <div className="flex justify-center mb-3">
                <Zap className="w-8 h-8 text-[#8FB31D]" />
              </div>
              <div className="text-3xl font-bold mb-2" style={{
              color: '#8FB31D'
            }}>15+ Hours</div>
              <div className="text-sm text-slate-300">Saved weekly</div>
            </div>
            <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center group hover:border-purple-400/50 transition-all duration-300">
              <div className="flex justify-center mb-3">
                <TrendingUp className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold mb-2 text-purple-400">25%</div>
              <div className="text-sm text-slate-300">Average revenue boost</div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div className="mb-16" initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.6,
          delay: 1.0
        }}>
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <Link to="/modern-contact-form" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-full transition-all duration-300 hover:shadow-xl" style={{
              background: 'linear-gradient(135deg, #4EE2EC 0%, #8FB31D 100%)',
              boxShadow: '0 0 30px rgba(78, 226, 236, 0.5)'
            }}>
                Get Your AI Crew Chief →
              </Link>
            </motion.div>
            <div className="mt-4 text-sm text-slate-400">
              Free 30-minute strategy session • No sales pitch
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* NATURAL LAW METAPHORS SECTION */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-cyan-400/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-green-400/20 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <motion.div className="text-center mb-16" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }}>
            <h2 className="text-4xl mb-6 md:text-xl font-extrabold">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-green-400 bg-clip-text text-transparent text-3xl">
                AI Evolution Follows Nature's Laws
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Just as gravity shapes planets and seasons dictate growth, AI follows predictable patterns. 
              We've decoded the natural laws of digital transformation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Seed to Tree */}
            <motion.div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 group hover:border-green-400/50 transition-all duration-300" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.1
          }} viewport={{
            once: true
          }}>
              <div className="flex justify-center mb-4">
                <Sprout className="w-12 h-12 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-green-400 mb-4">From Seed to Giant Oak</h3>
              <p className="text-slate-300 leading-relaxed">
                Your business AI transformation starts as a small seed. With the right conditions—proper tools, 
                expert guidance, and consistent nurturing—it grows into a powerful revenue engine that towers above competition.
              </p>
            </motion.div>

            {/* Rocket Escaping Gravity */}
            <motion.div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 group hover:border-cyan-400/50 transition-all duration-300" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} viewport={{
            once: true
          }}>
              <div className="flex justify-center mb-4">
                <Rocket className="w-12 h-12 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Breaking Free from Gravity</h3>
              <p className="text-slate-300 leading-relaxed">
                Traditional marketing feels heavy, expensive, and limiting—like Earth's gravity holding you down. 
                AI gives you the escape velocity to reach new heights of efficiency and profitability.
              </p>
            </motion.div>

            {/* Seasons of Growth */}
            <motion.div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 group hover:border-blue-400/50 transition-all duration-300" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.3
          }} viewport={{
            once: true
          }}>
              <div className="flex justify-center mb-4">
                <RotateCcw className="w-12 h-12 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Natural Growth Cycles</h3>
              <p className="text-slate-300 leading-relaxed">
                Like seasons that bring renewal, AI creates cycles of optimization. Each iteration harvests better 
                results while planting seeds for the next level of growth and discovery.
              </p>
            </motion.div>
          </div>

          {/* Central Metaphor */}
          <motion.div className="bg-gradient-to-r from-slate-800/60 to-slate-700/60 backdrop-blur-sm border border-slate-600/50 rounded-3xl p-12 text-center mb-12" initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} viewport={{
          once: true
        }}>
            <div className="flex justify-center mb-6">
              <Gem className="w-16 h-16 text-yellow-400" />
            </div>
            <h3 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                From Coal to Diamond
              </span>
            </h3>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Your business data is like coal—valuable but unrealized potential. Under the right pressure and heat 
              (strategic AI implementation), it transforms into diamonds of insight that shine brilliantly and 
              create lasting value.
            </p>
            <div className="text-sm text-slate-400 italic">
              "The same carbon atoms, but completely transformed through natural forces."
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div className="text-center" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.5
        }} viewport={{
          once: true
        }}>
            <h3 className="text-2xl font-bold text-white mb-6">
              Ready to Harness These Natural Laws for Your Business?
            </h3>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Discover the proven AI strategies that follow nature's patterns for sustainable, organic growth.
            </p>
            <Link to="/ai-plans" className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105" style={{
            background: 'linear-gradient(135deg, #4EE2EC 0%, #8FB31D 100%)',
            boxShadow: '0 0 30px rgba(78, 226, 236, 0.3)'
          }}>
              Explore AI Evolution Plans →
            </Link>
          </motion.div>
        </div>
      </section>

          {/* TRUST BAR - Animated Particle Background */}
      <section className="relative -bottom-1 bg-[#040b29] mx-[32px] my-[32px] py-[32px] px-[32px] rounded-xl overflow-hidden">
        {/* Animated Particle Network Background */}
        <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url('/lovable-uploads/058e28c2-a5a3-4668-97f4-3e1867fb94df.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        animation: 'particleFloat 20s linear infinite'
      }} />
        
        {/* Animated connecting lines overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
          backgroundImage: `
                   linear-gradient(rgba(78, 226, 236, 0.4) 1px, transparent 1px),
                   linear-gradient(90deg, rgba(78, 226, 236, 0.4) 1px, transparent 1px)
                 `,
          backgroundSize: '60px 60px',
          animation: 'networkPulse 8s ease-in-out infinite'
        }} />
        </div>

        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <h2 className="text-center mb-12 text-cyan-300 font-extrabold text-base">Trusted by Industry Leaders</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
            <div className="opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-110 transform">
              <LazyImage src="/lovable-uploads/c9b27200-e1d4-4fa8-a9d1-6e929aba1499.png" alt="Beat AI Search - Advanced AI Search Optimization" displayWidth={240} displayHeight={128} className="h-32 w-auto object-fill font-bold" />
            </div>
            
            <div className="opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-110 transform">
              <LazyImage src="/lovable-uploads/8a3a4ac6-afc9-40fa-b252-4f574c36292e.png" alt="Lindy Certified Partner - AI Automation Excellence" displayWidth={240} displayHeight={128} className="h-32 w-auto object-fill font-bold" />
            </div>
            
            <div className="opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-110 transform">
              <LazyImage src="/lovable-uploads/66c33d12-771c-472a-8fd2-c769b506e627.png" alt="AI Creative Technology - Digital Innovation" displayWidth={240} displayHeight={128} className="h-32 w-auto object-fill font-bold" />
            </div>
            
            <div className="opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-110 transform">
              <LazyImage src="/lovable-uploads/f24efd7d-f980-480c-90cb-33a4edf18eee.png" alt="60% Zero Clicks Analytics - Search Performance Data" displayWidth={160} displayHeight={80} className="h-20 w-auto object-fill" />
            </div>
          </div>
        </div>
      </section>

      {/* BLOG PROMOTION BLOCK */}
      <BlogPromoBlock />

      {/* DIGITAL FRONTIER BLUEPRINT - Restructured with wireframe approach */}
      <section className="py-20 relative overflow-hidden" aria-labelledby="blueprint-heading">
        {/* Animated background with gradient waves */}
        <div className="absolute inset-0 bg-gradient-to-br from-deep-navy via-purple-900/20 to-electric-azure/10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-electric-azure/5 to-transparent animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-electric-azure/20 rounded-full blur-2xl"></div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 relative z-10">
          {/* Answer-First Boxes */}
          <motion.div className="text-center mb-16" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }}>
            <motion.h2 id="blueprint-heading" className="font-poppins font-bold text-soft-white mb-4 bg-gradient-to-r from-electric-azure via-soft-white to-ultraviolet bg-clip-text text-transparent" style={{
            fontSize: 'clamp(32px, 5vw, 48px)'
          }}>
              AI That Works Both Ways
            </motion.h2>
            <motion.p className="font-inter text-xl text-soft-white/80 max-w-2xl mx-auto mb-12">
              Get found online. Run smarter inside. Digital Frontier delivers visibility + efficiency with AI systems built for growth.
            </motion.p>
          </motion.div>

          {/* Answer-First Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[{
            title: "What is it?",
            answer: "A digital strategy firm helping businesses grow in the AI era.",
            icon: <Rocket className="w-8 h-8" />
          }, {
            title: "Who is it for?",
            answer: "Companies that want both more customers and better efficiency.",
            icon: <Target className="w-8 h-8" />
          }, {
            title: "How it works:",
            answer: "• AI visibility: dominate generative + search results\n• AI backend: streamline operations with automation\n• End-to-end: visibility + efficiency in one system",
            icon: <Settings className="w-8 h-8" />
          }, {
            title: "Cost:",
            answer: "Pilots start from $2,500–$7,500 depending on scope.",
            icon: <DollarSign className="w-8 h-8" />
          }].map((item, index) => <motion.div key={index} className="bg-card/80 backdrop-blur-sm border border-border/50 p-6 rounded-2xl hover:border-electric-azure/50 transition-all duration-300" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} viewport={{
            once: true
          }}>
                <div className="flex justify-center mb-3 text-electric-azure">{item.icon}</div>
                <h3 className="font-semibold text-electric-azure mb-2">{item.title}</h3>
                <p className="text-soft-white/80 text-sm whitespace-pre-line">{item.answer}</p>
              </motion.div>)}
          </div>

          {/* Pain → Agitate → Solution Section */}
          <motion.div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-800/30 p-8 rounded-2xl mb-20" initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }}>
            <h2 className="text-3xl font-bold text-soft-white mb-6 text-center">The Internet Changed. Most Businesses Didn't.</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-red-400 mb-3">The Pain</h3>
                <p className="text-soft-white/80">Customers now ask ChatGPT and Google AI for answers—not just search engines. If you're not showing up, you don't exist.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-orange-400 mb-3">The Reality</h3>
                <p className="text-soft-white/80">Meanwhile, competitors are using AI to automate their backend, cutting costs and scaling faster while you stay stuck.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-signal-lime mb-3">The Solution</h3>
                <p className="text-soft-white/80">Digital Frontier builds end-to-end AI systems so you win on both fronts—visible outside, efficient inside.</p>
              </div>
            </div>
          </motion.div>

          {/* Proof Section */}
          <motion.div className="mb-20" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }}>
            <h2 className="text-3xl font-bold text-soft-white mb-12 text-center">Proven Results</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[{
              metric: "32% lower",
              description: "ad costs with AI-optimized funnels",
              icon: <TrendingDown className="w-10 h-10" />
            }, {
              metric: "3x more",
              description: "leads from GEO visibility strategies",
              icon: <BarChart3 className="w-10 h-10" />
            }, {
              metric: "15 hours/week",
              description: "saved with backend AI automation",
              icon: <Clock className="w-10 h-10" />
            }].map((proof, index) => <motion.div key={index} className="text-center bg-card/60 p-6 rounded-2xl border border-electric-azure/30" whileHover={{
              scale: 1.05,
              y: -5
            }} transition={{
              duration: 0.3
            }}>
                  <div className="flex justify-center mb-3 text-signal-lime">{proof.icon}</div>
                  <div className="text-2xl font-bold text-signal-lime mb-2">{proof.metric}</div>
                  <p className="text-soft-white/80">{proof.description}</p>
                </motion.div>)}
            </div>
          </motion.div>

          {/* Mechanism Section (How It Works) */}
          <motion.div className="mb-20" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }}>
            <h2 className="text-3xl font-bold text-soft-white mb-12 text-center">Our Two-Sided AI Framework</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border border-cyan-800/30 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">Visibility (Front-End)</h3>
                <ul className="space-y-4 text-soft-white/80">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">•</span>
                    Generative Engine Optimization (GEO)
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">•</span>
                    Answer Engine Optimization (AEO)
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">•</span>
                    Conversion funnels + omnichannel campaigns
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-900/40 to-violet-900/40 border border-purple-800/30 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-purple-400 mb-6">Efficiency (Backend)</h3>
                <ul className="space-y-4 text-soft-white/80">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">•</span>
                    AI workflows & automation
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">•</span>
                    Data-driven ops intelligence
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">•</span>
                    Cost-cutting + scaling systems
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Offer Section */}
          <motion.div className="bg-gradient-to-r from-signal-lime/20 to-electric-azure/20 border border-signal-lime/50 p-8 rounded-2xl mb-20 text-center" initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }}>
            <h2 className="text-3xl font-bold text-soft-white mb-4">One Partner. Two Wins.</h2>
            <p className="text-xl text-soft-white/80 mb-8 max-w-2xl mx-auto">
              Most agencies give you ads or SEO. We build systems. Visibility + efficiency, wrapped into one growth engine.
            </p>
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <Link to="/modern-contact-form" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-deep-navy bg-gradient-to-r from-signal-lime to-electric-azure rounded-full transition-all duration-300 hover:shadow-xl">
                Launch AI Visibility + Efficiency Today →
              </Link>
            </motion.div>
          </motion.div>

          {/* Risk Reversal / Trust Section */}
          <motion.div className="bg-card/60 border border-border/50 p-8 rounded-2xl text-center" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }}>
            <div className="flex justify-center items-center gap-6 mb-4">
              <Shield className="w-10 h-10 text-blue-400" />
              <a href="https://digitalpioneers.io" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105">
                <LazyImage src="/lovable-uploads/1ee99e39-aa6f-42eb-ad36-cd370652c1d7.png" alt="Digital Pioneer Collective Partner" displayWidth={120} displayHeight={48} className="h-12 w-auto object-fill " />
              </a>
            </div>
            <p className="text-lg text-soft-white/90 italic">
              "No AI hype. Just measurable outcomes. If we don't deliver visible results in 90 days, we'll continue working at no extra cost until we do."
            </p>
          </motion.div>

          {/* Simplified floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({
            length: 3
          }).map((_, i) => <motion.div key={i} className="absolute w-2 h-2 bg-electric-azure/40 rounded-full" style={{
            left: `${20 + i * 30}%`,
            top: `${20 + i * 25}%`
          }} animate={{
            y: [-20, -100, -20],
            opacity: [0, 1, 0]
          }} transition={{
            duration: 6,
            repeat: Infinity,
            delay: i * 2
          }} />)}
          </div>
        </div>
      </section>

      {/* STICKY MOBILE FOOTER CTA */}
      <div className="sticky-cta fixed bottom-0 left-0 right-0 z-50 md:hidden bg-electric-azure text-deep-navy text-center py-4 font-semibold shadow-lg">
        <Link to="/modern-contact-form" className="block">
          Ready to Transform? Talk to an Expert
        </Link>
        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-signal-lime w-1/3 transition-all duration-300"></div>
      </div>

      {/* GENERATIVE SEARCH PRO SECTION */}
      <Suspense fallback={<div className="py-20 bg-slate-900/50 animate-pulse"></div>}>
        <GenerativeSearchProSection />
      </Suspense>

      {/* CASE STUDY SLIDER - KPI-driven showcase */}
      <Suspense fallback={<div className="py-20 bg-slate-900/50 animate-pulse"></div>}>
        <CaseStudySlider />
      </Suspense>

      {/* NEW SERVICE CARDS SECTION with Image Carousel */}
      <section className="py-20 relative overflow-hidden animate-on-scroll">
        {/* Image Carousel Background */}
        <div className="absolute inset-0">
          <div className="relative h-full w-full">
            {["/lovable-uploads/a2ac7ae8-1bc5-411f-9ef9-ff10d8fdd4a7.png", "/lovable-uploads/0d2360a9-25e2-44f5-be84-ff6da9ee399d.png", "/lovable-uploads/bc4175bf-e990-48ba-b6c6-bf010230dd00.png", "/lovable-uploads/4a58c6fe-4743-4bee-adf3-2753ea2a7a37.png", "/lovable-uploads/f0c22956-3fff-4d3e-9b62-c0f4058243d7.png"].map((image, index) => <div key={index} className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${index === currentSlide % 5 ? 'opacity-30' : 'opacity-0'}`} style={{
            backgroundImage: `url('${image}')`,
            filter: 'blur(1px)'
          }} />)}
          </div>
        </div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/80 to-slate-900/80 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-cyan-600/30 animate-gradient-x"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* AI-Powered Marketing Card */}
            <div className="group backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 bg-slate-950/80">
              <div className="mb-6">
                <LazyImage src="/lovable-uploads/e54d0fa9-0841-4307-be48-9729f84a20b3.png" alt="AI-Powered Marketing" className="w-full h-48 object-cover rounded-lg" displayWidth={307} displayHeight={192} />
              </div>
              <h3 className="mb-4 transition-colors font-extrabold text-xl text-cyan-300 text-center">
                AI-Powered Marketing
              </h3>
              <p className="mb-6 leading-relaxed text-slate-100 font-bold">
                Leverage cutting-edge artificial intelligence to automate and optimize your marketing campaigns for maximum impact.
              </p>
              <ul className="space-y-3 mb-8">
                {['Smart automation', 'Predictive analytics', 'Real-time optimization', 'ROI maximization'].map((feature, index) => <li key={index} className="flex items-center text-white rounded-tl-full rounded-full bg-[#074192]/0">
                    <Check className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                    {feature}
                  </li>)}
              </ul>
              <Link to="/modern-contact-form" className="block w-full text-center bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30">
                Explore AI Solutions
              </Link>
            </div>

            {/* Answer Engine Optimization Card - MIDDLE POSITION */}
            <div className="group backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 bg-slate-950/80">
              <div className="mb-6">
                <a href="https://generativesearch.pro" target="_blank" rel="dofollow" className="block">
                  <LazyImage src="/lovable-uploads/46440d18-7e50-459a-9423-09e65df49121.png" alt="Generative Engine Optimization" className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity" displayWidth={283} displayHeight={283} />
                </a>
              </div>
              <h3 className="mb-4 transition-colors font-extrabold text-cyan-300 text-xl text-center">
                Answer Engine Optimization
              </h3>
              <p className="mb-6 leading-relaxed font-bold text-slate-100">
                Dominate AI-powered search results and voice assistants to capture high-intent traffic before your competition.
              </p>
              <ul className="space-y-3 mb-8">
                {['AI search optimization', 'Voice search ready', 'Featured snippets', 'Future-proof SEO'].map((feature, index) => <li key={index} className="flex items-center text-white">
                    <Check className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                    {feature}
                  </li>)}
              </ul>
              <a href="https://generativesearch.pro" target="_blank" rel="dofollow" className="block w-full text-center bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30">
                Visit GenerativeSearch.pro →
              </a>
            </div>

            {/* Data-Driven Insights Card */}
            <div className="group backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 bg-slate-950/80">
              <div className="mb-6">
                <img alt="Data-Driven Insights" onError={e => {
                console.error('Failed to load image:', e.currentTarget.src);
                e.currentTarget.style.display = 'none';
              }} onLoad={() => console.log('Image loaded successfully')} className="w-full h-48 rounded-lg object-cover" src="/lovable-uploads/72dd30ec-d978-4ba9-baad-aba941aa15c4.png" />
              </div>
              <h3 className="mb-4 transition-colors font-extrabold text-cyan-300 text-xl text-center">
                Data-Driven Insights
              </h3>
              <p className="mb-6 leading-relaxed text-base font-semibold text-slate-100">
                Transform raw data into actionable strategies that drive measurable business growth and competitive advantage.
              </p>
              <ul className="space-y-3 mb-8">
                {['Advanced analytics', 'Performance tracking', 'Custom reporting', 'Strategic insights'].map((feature, index) => <li key={index} className="flex items-center text-white rounded-full bg-[#074192]/0">
                    <Check className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                    {feature}
                  </li>)}
              </ul>
              <Link to="/modern-contact-form" className="block w-full text-center bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30">
                See Our Analytics
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* REVENUE ENGINE SECTION */}
      <section className="df-revenue-engine animate-on-scroll">
        <div className="container">
          <div className="row" style={{
          alignItems: "center"
        }}>
            <div className="col-lg-6">
              <div className="df-neon-border mt-3 mb-5 mb-lg-3">
                <img alt="Digital Frontier Data Dashboard" className="img-fluid p-2 max-h-64 object-contain" style={{
                borderRadius: "10px"
              }} src="/lovable-uploads/8397f9b3-fc8b-4246-b8a6-166b26926970.png" />
              </div>
            </div>
            <div className="col-lg-6">
              <h2 style={{
              fontSize: "28px",
              fontWeight: 700,
              marginBottom: "20px"
            }}>Turn Your Brand into a Revenue Engine</h2>
              <div className="imagine-text">
                <p style={{
                fontSize: "16px",
                color: "#e0e0e0",
                marginBottom: "15px"
              }}>Imagine this: You wake up, check your dashboard, and sales are already climbing. Your ad spend? Low. Your return? Massive. And your brand? Getting noticed—on search, social, and beyond.</p>
              </div>
              <div className="content-text">
                <p style={{
                fontSize: "14px",
                color: "#cccccc",
                marginBottom: "15px"
              }}>This isn't a fantasy. It's what happens when businesses plug into Digital Frontier Marketing.</p>
                <p style={{
                fontSize: "14px",
                color: "#cccccc",
                marginBottom: 0
              }}>Most companies waste thousands on broken funnels, low-converting traffic, and "meh" strategies. We don't do mediocre. We engineer performance. <span className="highlight">Real clicks. Real conversions. Real cash.</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING TOGGLE - Project/Retainer choice */}
      <Suspense fallback={<div className="py-12 bg-slate-900/50 animate-pulse"></div>}>
        <PricingToggle />
      </Suspense>

      {/* FAQ ACCORDION - Radix UI powered */}
      <Suspense fallback={<div className="py-12 bg-slate-900/50 animate-pulse"></div>}>
        <FAQAccordion />
      </Suspense>

      {/* FINAL CTA */}
      <section className="df-final-cta animate-on-scroll">
        <div className="container">
          <div className="text-center mb-4">
            <img src="/lovable-uploads/a057b6bc-52ff-4437-92a0-6951b11267fe.png" alt="Digital Frontier Company Logo - Contact Us" width="80" height="80" className="mb-4" loading="lazy" />
          </div>
          <h2>Ready to Own Your Digital Space?</h2>
          <p>If you're ready to dominate your market and make your competitors irrelevant, let's talk. Click below, and let's build something legendary.</p>
          <div className="text-center">
            <Link to="/modern-contact-form" className="df-yellow-cta-button">Join Now</Link>
          </div>
          <p className="tagline mt-4">Digital Frontier—Marketing That Actually Works.</p>
        </div>
      </section>

      {/* AI CREW CHIEF PROMOTION SECTION */}
      <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 animate-on-scroll relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(78,226,236,0.1)_0%,rgba(143,179,29,0.1)_100%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/20 to-green-500/20 px-6 py-2 rounded-full border border-cyan-500/30 mb-6">
                <span className="text-cyan-300 font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                  <Rocket className="w-4 h-4" />
                  New Launch
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
                Feeling Lost in AI?
              </h2>
              <p className="text-xl text-slate-300 mb-4">
                We spent $50K+ testing 100+ AI tools so you don't have to
              </p>
              <p className="text-lg text-slate-400 mb-8">
                Get only proven AI solutions that actually work for small businesses—not just hype.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20">
                <div className="flex justify-center mb-3">
                  <DollarSign className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-2xl font-bold text-cyan-400">$50,000+</div>
                <p className="text-sm text-slate-300">Invested in AI testing</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-green-500/20">
                <div className="flex justify-center mb-3">
                  <Zap className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-green-400">15+ Hours</div>
                <p className="text-sm text-slate-300">Saved weekly</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20">
                <div className="flex justify-center mb-3">
                  <TrendingUp className="w-8 h-8 text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-purple-400">25%</div>
                <p className="text-sm text-slate-300">Average revenue boost</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/services/ai-implementation-consulting" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 text-white font-bold rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
                <span>Get Your AI Crew Chief</span>
                <span className="ml-2">→</span>
              </Link>
              <p className="text-sm text-slate-400">
                Free 30-minute strategy session • No sales pitch
              </p>
            </div>
          </div>
        </div>
        
        {/* Floating particles for visual appeal */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-pulse opacity-40"></div>
          <div className="absolute bottom-1/4 left-2/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-50"></div>
        </div>
      </section>

      {/* COMPANY LOGOS MARQUEE SECTION */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow rounded-lg">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center mb-12 font-medium uppercase tracking-wider text-lime-300 text-xl">Our Partners & Platforms</h2>
          
          {/* Scrolling Marquee */}
          <div className="relative">
            <motion.div animate={marqueeControls} style={{
            width: "200%"
          }} className="flex gap-x-16 gap-x-14 rounded-lg">
              {marqueeItems.map((logo, index) => <div key={index} className="flex-shrink-0 opacity-60 hover:opacity-100 transition-all duration-300">
                  <LazyImage src={logo} alt={`Partner company logo ${index + 1}`} displayWidth={120} displayHeight={48} className="max-h-20 w-auto object-fill grayscale hover:grayscale-0 transition-all duration-300" />
                </div>)}
            </motion.div>
          </div>
        </div>
      </section>

      {/* LEARN MORE SECTION */}
      <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800 animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-100 mb-8">Explore Digital Frontier</h2>
          
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Key Services - Enhanced with more internal links */}
            <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700">
              <h3 className="text-xl font-bold text-blue-400 mb-4">AI Marketing Solutions</h3>
              <div className="space-y-3 text-slate-300">
                <Link to="/ad-funnel-blueprint" className="block hover:text-blue-400 transition-colors">Ad Funnel Blueprint</Link>
                <Link to="/answer-engine-optimization" className="block hover:text-blue-400 transition-colors">Answer Engine Optimization</Link>
                <Link to="/generative-engine-optimization" className="block hover:text-blue-400 transition-colors">Generative Engine Optimization</Link>
                <Link to="/ai-and-digital-marketing" className="block hover:text-blue-400 transition-colors">AI Marketing Guide</Link>
                <Link to="/psychological-digital-marketing-insights" className="block hover:text-blue-400 transition-colors">Psychology Insights</Link>
              </div>
            </div>
            
            <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Local Services</h3>
              <div className="space-y-3 text-slate-300">
                <Link to="/memphis-digital-marketing" className="block hover:text-blue-400 transition-colors">Memphis Marketing</Link>
                <Link to="/collierville-seo-services" className="block hover:text-blue-400 transition-colors">Collierville SEO</Link>
                <Link to="/germantown-digital-marketing" className="block hover:text-blue-400 transition-colors">Germantown Marketing</Link>
                <Link to="/team-expertise" className="block hover:text-blue-400 transition-colors">Our Team</Link>
              </div>
            </div>
            
            <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Resources & Tools</h3>
              <div className="space-y-3 text-slate-300">
                <Link to="/ai-prompt-templates" className="block hover:text-blue-400 transition-colors">AI Prompt Templates</Link>
                <Link to="/user-experience-prompts" className="block hover:text-blue-400 transition-colors">UX Prompts</Link>
                <Link to="/emotional-marketing-playbook" className="block hover:text-blue-400 transition-colors">Emotional Marketing</Link>
                <Link to="/ai-bias-in-advertising" className="block hover:text-blue-400 transition-colors">AI Bias Guide</Link>
                <Link to="/blog" className="block hover:text-blue-400 transition-colors">Marketing Blog</Link>
              </div>
            </div>
          </div>
          
        </div>
      </section>


      {/* MODERN CONTACT FORM SECTION */}
      <section className="relative py-16 bg-deep-navy border-t border-border">
        <div className="mx-auto max-w-4xl px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-medium text-soft-white mb-4" style={{
            fontSize: 'clamp(28px, 4vw, 40px)'
          }}>
              Ready to Transform Your Marketing?
            </h2>
            <p className="font-inter text-lg text-soft-white/70 max-w-2xl mx-auto">
              Get your free AI marketing audit and strategy session. Let's discuss your growth goals.
            </p>
          </div>
          <Suspense fallback={<div className="py-8 bg-slate-900/30 animate-pulse rounded-lg"></div>}>
            <ModernContactForm />
          </Suspense>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-t from-electric-azure/5 via-transparent to-transparent pointer-events-none"></div>
      </section>
    </>;
};
export default Index;