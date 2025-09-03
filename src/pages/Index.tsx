import { Link } from "react-router-dom";
import { useEffect, useRef, useState, Suspense, lazy } from "react";
import useFaqToggle from "@/hooks/useFaqToggle";
import SEOSchema from "@/components/SEOSchema";
import { LazyImage } from "@/components/LazyImage";
import { IMAGE_SIZES, getImageDimensions } from "@/utils/imageOptimization";
import Typed from 'typed.js';
import { ChevronDown, Zap, Target, Rocket, TrendingUp, Users, Award, Check } from 'lucide-react';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';

// Lazy load below-the-fold components for performance
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const CaseStudySlider = lazy(() => import("@/components/CaseStudySlider"));
const PricingToggle = lazy(() => import("@/components/PricingToggle"));
const FAQAccordion = lazy(() => import("@/components/FAQAccordion"));
const ModernContactForm = lazy(() => import("@/components/ModernContactForm"));
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
  const carouselSlides = ["The Secret Weapon you aren't using", "but Elite Companies are", "and will never share with you or your SMB", "Ready to get actual real results?", "Meet The Digital Frontier Company"];

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
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  // Carousel rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % carouselSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [carouselSlides.length]);

  // Intersection observer for animations - Optimized
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );
    
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
  const trustedLogos = [
    "/lovable-uploads/2486421b-6ca3-4c32-b686-a49ac0da182b.png",
    "/lovable-uploads/998924f0-2fc2-41d7-98d1-5b927c64c09e.png",
    "/lovable-uploads/914a27cb-e153-438e-8c3b-3937b1598283.png",
    "/lovable-uploads/dd9a50a2-11ff-45a3-bdef-97597bd967b7.png",
    "/lovable-uploads/006c1b20-0f5a-4e81-804c-dac4a28eb855.png",
    "/lovable-uploads/966b64a4-e3f7-488f-b15e-0d2d8e61d442.png"
  ];
  const extraTrustedImages = [
    "/lovable-uploads/3c96b100-6325-4881-925d-941fa1d28582.png",
    "/lovable-uploads/a8a47af6-c1fb-4ef5-9186-0149566a84ae.png",
    "/lovable-uploads/605b3988-ccd7-4c5d-9c40-fe5ea991729b.png",
    "/lovable-uploads/06143896-3705-4777-8c31-5f139371be88.png",
    "/lovable-uploads/eb7443f0-3f7a-4b83-9d12-c669af95a5d8.png",
    "/lovable-uploads/51cb98d5-156b-4bca-8c82-34d3ec317ca3.png"
  ];
  const marqueeItems = [
    ...trustedLogos,
    "/lovable-uploads/4883064e-c62b-46fc-88e4-ccb90130e07e.png",
    ...extraTrustedImages
  ];

  useEffect(() => {
    marqueeControls.start({
      x: ["0%", "-50%"],
      transition: { duration: 30, ease: "linear", repeat: Infinity }
    });
  }, [marqueeControls]);

  return <>
      <SEOSchema />
      
      
      {/* PRESIDENTIAL-LEVEL HERO SECTION with Parallax - LCP Optimized */}
      <motion.section 
        className="relative isolate overflow-hidden min-h-screen bg-deep-navy" 
        style={{
          backgroundImage: `url('/lovable-uploads/437eedfa-5c80-4a7d-9af4-21878ea732d7.png'), var(--gradient-hero)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          y: heroY
        }}
        data-lcp-element="true"
      >
        {/* Subtle Floating Orbs - Reduced count */}
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
        }}></div>
        </div>
        
        {/* Subtle gradient overlay for depth */}
        <motion.div animate={{
        background: ['linear-gradient(135deg, rgba(47,128,255,0.05) 0%, transparent 50%, rgba(151,80,255,0.05) 100%)', 'linear-gradient(135deg, rgba(151,80,255,0.05) 0%, transparent 50%, rgba(47,128,255,0.05) 100%)', 'linear-gradient(135deg, rgba(47,128,255,0.05) 0%, transparent 50%, rgba(151,80,255,0.05) 100%)']
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="absolute inset-0 bg-gradient-to-br from-electric-azure/5 via-transparent to-ultraviolet/5 mx-[10px] my-[10px] px-[3px] py-[3px]"></motion.div>
        
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
              {/* Single animated border */}
              <div className="absolute inset-0 border border-cyan-400/50 animate-pulse rounded-full"></div>
            </div>
            
            {/* Main logo - optimized with responsive sizing */}
            <LazyImage
              src="/lovable-uploads/0a290708-5a9c-4d58-8a79-88d6ed6a5e66.png"
              alt="Digital Frontier Company - Leading Memphis Digital Marketing Agency"
              className="h-80 w-auto relative z-10 object-cover logo-interactive animate-logo-strobe"
              displayWidth={480}
              displayHeight={320}
              optimization={{ priority: true }}
            />
          </motion.div>

          {/* Presidential Headline with Fade-in */}
          <motion.h1 className="font-poppins font-semibold text-soft-white mb-8" style={{
          fontSize: 'clamp(40px, 6vw, 64px)',
          lineHeight: '1.2',
          letterSpacing: '-0.01em',
          maxWidth: '70ch'
        }} initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 1,
          delay: 0.2
        }}>
            Stop guessing which <span className="bg-gradient-to-r from-electric-azure via-blue-400 to-cyan-400 bg-clip-text text-transparent font-extrabold text-6xl">AI tools</span> work. We invested <span className="bg-gradient-to-r from-electric-azure via-blue-400 to-cyan-400 bg-clip-text text-transparent font-extrabold text-6xl">$50K+</span> in testing to separate <span className="bg-gradient-to-r from-electric-azure via-blue-400 to-cyan-400 bg-clip-text text-transparent font-extrabold text-6xl">Gold</span> from garbage for you.
          </motion.h1>

          {/* Subheadline with Staggered Animation */}
          <motion.p style={{
          lineHeight: '1.55'
        }} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="font-inter text-lg md:text-xl text-soft-white/80 leading-relaxed max-w-3xl mx-auto mb-12 font-semibold text-[#fafcfd]">
            <div className="typewriter text-center">
              Overwhelmed by AI? The pace is accelerating daily. We've invested $50K+ over 2 years testing every tool and model to find what actually works for small businesses. No more guessing, no more wasted money. Get only proven AI solutions that save 15+ hours/week and boost revenue 25%.
            </div>
          </motion.p>

          {/* CTA with Hover Animation */}
          <motion.div className="mb-16" initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.6,
          delay: 0.6
        }}>
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <Link to="/modern-contact-form" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-soft-white bg-gradient-to-r from-electric-azure via-blue-400 to-cyan-400 rounded-lg transition-all duration-300 hover:shadow-xl" style={{
              boxShadow: '0 0 80px 10px hsl(var(--electric-azure) / 0.9), 0 0 160px 30px hsl(var(--electric-azure) / 0.65)',
              filter: 'drop-shadow(0 0 30px hsl(var(--electric-azure) / 0.9))',
              letterSpacing: '0.5px'
            }}>
                Book a Strategy Call →
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust indicators with Final Fade-in */}
          <motion.div className="text-soft-white/60 text-sm" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.8
        }}>
            <p className="text-white font-semibold">Trusted by 200+ B2B companies • Average 38% increase in SQLs • 84% client retention rate (verified by independent audit)</p>
          </motion.div>
        </div>
      </motion.section>

          {/* TRUST BAR - 6-logo auto-grid */}
      <section className="-bottom-1 bg-[#040b29] mx-[32px] my-[32px] py-[32px] px-[32px] rounded-xl">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center mb-12 text-cyan-300 font-extrabold text-base">Trusted by Industry Leaders</h2>
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => marqueeControls.stop()}
            onMouseLeave={() =>
              marqueeControls.start({
                x: ["0%", "-50%"],
                transition: { duration: 30, ease: "linear", repeat: Infinity },
              })
            }
          >
            <motion.div
              className="flex items-center gap-12 whitespace-nowrap will-change-transform"
              animate={marqueeControls}
            >
              {marqueeItems.slice(0, 6).map((src, index) => (
                <div key={index} className="opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
                  {src === "/lovable-uploads/4883064e-c62b-46fc-88e4-ccb90130e07e.png" ? (
                    <a href="https://makementors.com" target="_blank" rel="noopener noreferrer">
                      <LazyImage
                        src={src}
                        alt="MakeMentors logo"
                        className="h-24 w-auto"
                        displayWidth={96}
                        displayHeight={96}
                      />
                    </a>
                  ) : (
                    <LazyImage
                      src={src}
                      alt={`Trusted brand ${index + 1}`}
                      className="h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                      displayWidth={144}
                      displayHeight={96}
                    />
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* BLUEPRINT SECTION - Enhanced with flashy animations */}
      <section className="py-20 relative overflow-hidden" aria-labelledby="blueprint-heading">
        {/* Animated background with gradient waves */}
        <div className="absolute inset-0 bg-gradient-to-br from-deep-navy via-purple-900/20 to-electric-azure/10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-electric-azure/5 to-transparent animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-electric-azure/20 rounded-full blur-2xl"></div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 relative z-10">
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
          }} initial={{
            scale: 0.9
          }} whileInView={{
            scale: 1
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} viewport={{
            once: true
          }}>
              The Digital Frontier Blueprint
            </motion.h2>
            <motion.p className="font-inter text-xl text-soft-white/80 max-w-2xl mx-auto" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} viewport={{
            once: true
          }}>
              Three pillars that transform B2B marketing from guesswork to science. Based on analysis of 10,000+ campaigns and validated by McKinsey's 2024 Digital Marketing Research.
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[{
            title: "AI-Powered Lead Generation",
            description: "Your AI bloodhound sniffs out hot-money prospects before they even blink—then drags them straight into a funnel that rewrites itself on the fly. Studies show AI-powered lead scoring improves conversion rates by 59% (Salesforce Research, 2024).",
            icon: "/lovable-uploads/4ccc7a08-05c5-4500-9fba-149c0ec813cd.png",
            gradient: "from-cyan-400/20 to-blue-600/20",
            glowColor: "shadow-cyan-400/30"
          }, {
            title: "Data-Driven Insights",
            description: "What gets measured gets mastered—and monetized. Companies using data-driven marketing achieve 5-8x ROI compared to traditional methods (HubSpot, 2024).",
            icon: "/lovable-uploads/ac9d962e-7efe-4768-9ec0-774cd30f2d5d.png",
            gradient: "from-purple-400/20 to-pink-600/20",
            glowColor: "shadow-purple-400/30"
          }, {
            title: "Answer Engine Optimization (AEO)",
            description: "The old SEO is dying. The new game? Own the answers. AEO-optimized content gets cited 73% more often in AI responses (BrightEdge, 2024).",
            icon: "/lovable-uploads/183a006c-d7ab-43aa-b457-8d5284912ab6.png",
            gradient: "from-emerald-400/20 to-teal-600/20",
            glowColor: "shadow-emerald-400/30"
          }].map((card, index) => <motion.div key={index} className={`group relative bg-card/80 backdrop-blur-sm border border-border/50 p-8 rounded-2xl transition-all duration-500 hover:border-electric-azure/50 hover:bg-card/90 hover:scale-105 hover:shadow-2xl ${card.glowColor}`} initial={{
            opacity: 0,
            y: 50,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            y: 0,
            scale: 1
          }} transition={{
            duration: 0.6,
            delay: index * 0.2,
            type: "spring",
            stiffness: 100
          }} viewport={{
            once: true
          }} whileHover={{
            y: -10,
            transition: {
              duration: 0.3
            }
          }}>
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-electric-azure/50 via-transparent to-ultraviolet/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
              background: 'linear-gradient(45deg, transparent 30%, rgba(47,128,255,0.3) 50%, transparent 70%)'
            }}></div>
                
                <div className="relative z-10">
                  <motion.div className="mb-6 filter drop-shadow-lg flex justify-center items-center h-32" whileHover={{
                scale: 1.2,
                rotate: [0, -10, 10, 0],
                transition: {
                  duration: 0.5
                }
              }}>
                    {typeof card.icon === 'string' && card.icon.startsWith('/') ? <img src={card.icon} alt={card.title} className={`h-28 w-28 object-contain ${index === 1 ? 'brightness-0 saturate-100' : ''}`} style={index === 1 ? {
                  filter: 'brightness(0) saturate(100%) invert(32%) sepia(77%) saturate(4574%) hue-rotate(270deg) brightness(97%) contrast(91%)'
                } : {}} /> : <span className="text-7xl">{card.icon}</span>}
                  </motion.div>
                  
                  <motion.h3 className="font-poppins font-semibold text-xl text-soft-white mb-4 group-hover:text-electric-azure transition-colors duration-300" whileHover={{
                x: 5
              }}>
                    {index === 0 && <>
                        <span className="bg-gradient-to-r from-signal-lime to-electric-azure bg-clip-text text-transparent font-extrabold">Predict. Persuade. Profit.</span>
                      </>}
                    {index === 1 && <>
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold">Data-Driven Insights</span>
                      </>}
                    {index === 2 && <>
                        <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent font-extrabold">Answer Engine Optimization</span> <span className="text-soft-white">(AEO)</span>
                      </>}
                  </motion.h3>
                  
                   <motion.p className="font-inter text-soft-white/70 leading-relaxed group-hover:text-soft-white/90 transition-colors duration-300 mb-6" whileHover={{
                x: 5
              }}>
                     {card.description}
                   </motion.p>
                   
                   {/* Special content for first card */}
                   {index === 0 && <div className="space-y-4">
                       <ul className="space-y-3 text-soft-white/80">
                         <li className="flex items-start">
                           <span className="text-signal-lime mr-2">⚡</span>
                           <span className="text-sm">Live intent signals—no more finger-in-the-wind guessing</span>
                         </li>
                         <li className="flex items-start">
                           <span className="text-ultraviolet mr-2">🧠</span>
                           <span className="text-sm">Auto-personalized outreach that feels hand-typed (because it basically is)</span>
                         </li>
                         <li className="flex items-start">
                           <span className="text-electric-azure mr-2">📈</span>
                           <span className="text-sm">Real-time funnel tuning—watch those green arrows climb while you sip coffee</span>
                         </li>
                       </ul>
                       
                        <div className="mt-6 text-center">
                         <motion.button className="bg-gradient-to-r from-signal-lime to-electric-azure text-deep-navy px-5 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform duration-200" whileHover={{
                    scale: 1.05
                  }} whileTap={{
                    scale: 0.95
                  }}>
                           See It Hunt →
                         </motion.button>
                         <p className="text-xs text-soft-white/60 mt-3">
                           Beta seats vanish fast—grab yours before your competitors wake up.
                         </p>
                       </div>
                     </div>}
                    
                    {/* Special content for second card */}
                    {index === 1 && <div className="space-y-4">
                        <ul className="space-y-3 text-soft-white/80">
                          <li className="flex items-start">
                            <span className="text-electric-azure mr-3 text-lg">📊</span>
                            <span className="text-sm">Predictive analytics that show you who's buying next (before they even click)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-ultraviolet mr-3 text-lg">🛰️</span>
                            <span className="text-sm">Performance forecasting so sharp, it's practically time travel</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-signal-lime mr-3 text-lg">⚙️</span>
                            <span className="text-sm">Actionable intelligence from your raw chaos of spreadsheets and dashboards</span>
                          </li>
                        </ul>
                        
                         <div className="mt-6 text-center">
                          <motion.button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform duration-200" whileHover={{
                    scale: 1.05
                  }} whileTap={{
                    scale: 0.95
                  }}>
                            See The Future →
                          </motion.button>
                          <p className="text-xs text-soft-white/60 mt-3">
                            Your gut's good. This makes it lethal.
                          </p>
                        </div>
                      </div>}
                     
                     {/* Special content for third card (AEO) */}
                     {index === 2 && <div className="space-y-4">
                         <ul className="space-y-3 text-soft-white/80">
                           <li className="flex items-start">
                             <span className="text-electric-azure mr-3 text-lg">🎯</span>
                             <span className="text-sm">Voice search ready – show up when they ask, "Hey Siri…" or bark at Alexa</span>
                           </li>
                           <li className="flex items-start">
                             <span className="text-ultraviolet mr-3 text-lg">🤖</span>
                             <span className="text-sm">AI-powered ranking – trained to make bots love you, and humans trust you</span>
                           </li>
                           <li className="flex items-start">
                             <span className="text-signal-lime mr-3 text-lg">🛠️</span>
                             <span className="text-sm">Proprietary methodology – built in the trenches, not from some guru's course</span>
                           </li>
                         </ul>
                         
                         <div className="mt-6 text-center">
                           <motion.button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform duration-200" whileHover={{
                    scale: 1.05
                  }} whileTap={{
                    scale: 0.95
                  }}>
                             Own The Answer Box →
                           </motion.button>
                           <p className="text-xs text-soft-white/60 mt-3">
                             Because whoever answers first... wins.
                           </p>
                         </div>
                       </div>}
                   
                   {/* Pulse effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-electric-azure/10 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"></div>
                </div>
              </motion.div>)}
          </div>
          
          {/* Simplified floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({
            length: 2
          }).map((_, i) => <motion.div key={i} className="absolute w-2 h-2 bg-electric-azure/40 rounded-full" style={{
            left: `${30 + i * 40}%`,
            top: `${30 + i * 40}%`
          }} animate={{
            y: [-20, -100, -20],
            opacity: [0, 1, 0]
          }} transition={{
            duration: 6,
            repeat: Infinity,
            delay: i * 3
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
          <div className="text-center mb-16">
            <LazyImage
              src="/lovable-uploads/a057b6bc-52ff-4437-92a0-6951b11267fe.png"
              alt="Digital Frontier Company Icon - Generative Search Pro"
              displayWidth={60}
              displayHeight={60}
              className="mx-auto mb-6"
            />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Generative Search Pro
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Turn every prompt into a spotlight. Generative + Answer Engine Optimization unlocked in a single tap. Try it free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* AI-Powered Marketing Card */}
            <div className="group backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 bg-slate-950/80">
              <div className="mb-6">
                <LazyImage
                  src="/lovable-uploads/e54d0fa9-0841-4307-be48-9729f84a20b3.png"
                  alt="AI-Powered Marketing"
                  className="w-full h-48 object-cover rounded-lg"
                  displayWidth={307}
                  displayHeight={192}
                />
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
                  <LazyImage
                    src="/lovable-uploads/46440d18-7e50-459a-9423-09e65df49121.png"
                    alt="Generative Engine Optimization"
                    className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity"
                    displayWidth={283}
                    displayHeight={283}
                  />
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

      {/* WHAT YOU'LL GAIN SECTION */}
      <section className="df-what-youll-gain animate-on-scroll">
        <div className="container">
          <div className="text-center mb-5">
            <img src="/lovable-uploads/a057b6bc-52ff-4437-92a0-6951b11267fe.png" alt="Digital Frontier Company Logo - What You'll Gain" width="40" height="40" className="mb-4" loading="lazy" />
            <h2 className="section-title" style={{
            fontSize: "32px",
            fontWeight: 700,
            marginBottom: "15px"
          }}>What You'll <span>Gain</span></h2>
            <p className="section-subtitle" style={{
            fontSize: "16px",
            color: "#e0e0e0",
            maxWidth: "700px",
            margin: "0 auto"
          }}>Our comprehensive website analysis delivers actionable insights to help you outperform your competition.</p>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="df-gain-card text-center">
                <div className="text-3xl mb-3">🔍</div>
                <h3 className="text-lg font-semibold mb-2">SEO Analysis</h3>
                <p className="text-sm text-slate-300">Detailed optimization recommendations</p>
              </div>
              <div className="df-gain-card text-center">
                <div className="text-3xl mb-3">📈</div>
                <h3 className="text-lg font-semibold mb-2">Conversion Insights</h3>
                <p className="text-sm text-slate-300">Expert funnel optimization</p>
              </div>
              <div className="df-gain-card text-center">
                <div className="text-3xl mb-3">🔄</div>
                <h3 className="text-lg font-semibold mb-2">Competitor Analysis</h3>
                <p className="text-sm text-slate-300">Market positioning insights</p>
              </div>
              <div className="df-gain-card text-center">
                <div className="text-3xl mb-3">📋</div>
                <h3 className="text-lg font-semibold mb-2">Action Plan</h3>
                <p className="text-sm text-slate-300">Prioritized improvement steps</p>
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
                <span className="text-cyan-300 font-semibold text-sm uppercase tracking-wider">🚀 New Launch</span>
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
                <div className="text-3xl mb-3">💰</div>
                <div className="text-2xl font-bold text-cyan-400">$50,000+</div>
                <p className="text-sm text-slate-300">Invested in AI testing</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-green-500/20">
                <div className="text-3xl mb-3">⚡</div>
                <div className="text-2xl font-bold text-green-400">15+ Hours</div>
                <p className="text-sm text-slate-300">Saved weekly</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20">
                <div className="text-3xl mb-3">📈</div>
                <div className="text-2xl font-bold text-purple-400">25%</div>
                <p className="text-sm text-slate-300">Average revenue boost</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/services/ai-implementation-consulting" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 text-white font-bold rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
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