import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import '../styles/ai-plans-landing.css';

const AIPlansLanding = () => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Create floating particles
    const createParticles = () => {
      const particlesContainer = document.getElementById('particles');
      if (!particlesContainer) return;
      
      const particleCount = 50;
      particlesContainer.innerHTML = '';
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (6 + Math.random() * 4) + 's';
        particlesContainer.appendChild(particle);
      }
    };

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleElements(prev => new Set([...prev, entry.target.id]));
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    createParticles();

    // Add navbar background on scroll
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (nav) {
        if (window.scrollY > 50) {
          nav.style.background = 'rgba(10, 10, 15, 0.95)';
        } else {
          nav.style.background = 'rgba(10, 10, 15, 0.8)';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleFAQ = (element: HTMLElement) => {
    const answer = element.nextElementSibling as HTMLElement;
    const isActive = answer?.classList.contains('active');
    
    // Close all FAQs
    document.querySelectorAll('.faq-answer').forEach(faq => {
      faq.classList.remove('active');
    });
    document.querySelectorAll('.faq-question').forEach(question => {
      question.classList.remove('active');
    });
    
    // Open clicked FAQ if it wasn't active
    if (!isActive && answer) {
      answer.classList.add('active');
      element.classList.add('active');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Digital Frontier - AI That Works Both Ways | Visibility + Efficiency</title>
        <meta name="description" content="Get found online. Run smarter inside. Digital Frontier delivers visibility + efficiency with AI systems built for growth. Dominate generative search and automate operations." />
        <meta name="keywords" content="AI marketing, digital transformation, generative engine optimization, business automation, AI visibility, efficiency systems" />
        <link rel="canonical" href="/ai-plans" />
      </Helmet>

      <div className="ai-plans-landing">
        {/* Animated Background */}
        <div className="background-animation fixed top-0 left-0 w-full h-full bg-gradient-radial from-indigo-900/20 via-slate-950 to-slate-950 -z-20"></div>
        <div className="floating-particles fixed top-0 left-0 w-full h-full pointer-events-none -z-10" id="particles"></div>

        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-xl border-b border-violet-500/20 z-50 py-4 transition-all duration-300">
          <div className="container mx-auto px-5">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Digital Frontier
              </div>
              <ul className="hidden md:flex gap-8 text-slate-300">
                <li><button onClick={() => scrollToSection('services')} className="font-medium hover:text-violet-400 transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('features')} className="font-medium hover:text-violet-400 transition-colors">Features</button></li>
                <li><button onClick={() => scrollToSection('offer')} className="font-medium hover:text-violet-400 transition-colors">Pricing</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="font-medium hover:text-violet-400 transition-colors">About</button></li>
              </ul>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-violet-500 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300"
              >
                Get Started
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero min-h-screen flex items-center relative pt-24">
          <div className="container mx-auto px-5">
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <motion.div 
                className="hero-text"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Company Logo */}
                <motion.div 
                  className="mb-8 flex justify-center md:justify-start"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <img 
                    src="/lovable-uploads/6a6a7a60-bc25-4bd4-af32-b53f83a8c0a4.png" 
                    alt="Digital Frontier Company Logo" 
                    className="w-64 h-auto max-w-sm"
                  />
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 bg-gradient-to-r from-white via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  AI That Works Both Ways
                </h1>
                <p className="text-xl mb-10 text-slate-400 leading-relaxed font-light">
                  Get found online. Run smarter inside. Digital Frontier delivers visibility + efficiency with AI systems built for growth.
                </p>
                <button 
                  onClick={() => scrollToSection('offer')}
                  className="bg-gradient-to-r from-violet-500 to-cyan-500 text-white px-10 py-5 rounded-full text-lg font-semibold hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/40 transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
                  Start Building to Dominate
                </button>
              </motion.div>

              <div className="hero-visual relative h-[600px] md:h-[500px]">
                <motion.div 
                  className="floating-card absolute top-0 left-0 w-72 max-w-xs bg-white/5 backdrop-blur-xl border border-violet-500/30 rounded-2xl p-6 shadow-2xl hover:transform hover:-translate-y-3 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h3 className="text-lg font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    AI Visibility Engine
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Dominate generative search results and AI-powered discovery across all platforms
                  </p>
                </motion.div>

                <motion.div 
                  className="floating-card absolute top-20 right-0 w-72 max-w-xs bg-white/5 backdrop-blur-xl border border-violet-500/30 rounded-2xl p-6 shadow-2xl hover:transform hover:-translate-y-3 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <h3 className="text-lg font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    Smart Automation
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Streamline operations with intelligent workflows and data-driven insights
                  </p>
                </motion.div>

                <motion.div 
                  className="floating-card absolute bottom-20 left-1/2 transform -translate-x-1/2 w-72 max-w-xs bg-white/5 backdrop-blur-xl border border-violet-500/30 rounded-2xl p-6 shadow-2xl hover:transform hover:-translate-y-3 hover:-translate-x-1/2 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <h3 className="text-lg font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    Growth Analytics
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Real-time metrics and predictive analytics for continuous optimization
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Glowing orb effect */}
          <div className="absolute top-1/5 right-1/10 w-75 h-75 bg-violet-500/30 rounded-full filter blur-3xl animate-pulse"></div>
        </section>

        {/* Answer-First Boxes */}
        <section className="answer-boxes py-32 relative" id="services">
          <div className="container mx-auto px-5">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div 
                className="answer-box bg-white/3 backdrop-blur-xl border border-violet-500/20 rounded-2xl p-10 hover:transform hover:-translate-y-3 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/20 transition-all duration-300 relative overflow-hidden group"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                  What is it?
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  A digital strategy firm helping businesses grow in the AI era through advanced visibility and efficiency systems.
                </p>
              </motion.div>

              <motion.div 
                className="answer-box bg-white/3 backdrop-blur-xl border border-violet-500/20 rounded-2xl p-10 hover:transform hover:-translate-y-3 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/20 transition-all duration-300 relative overflow-hidden group"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                  Who is it for?
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Companies that want both more customers and better efficiency - from startups to enterprise organizations.
                </p>
              </motion.div>

              <motion.div 
                className="answer-box bg-white/3 backdrop-blur-xl border border-violet-500/20 rounded-2xl p-10 hover:transform hover:-translate-y-3 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/20 transition-all duration-300 relative overflow-hidden group"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                  How it works
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  • AI visibility: dominate generative + search results<br/>
                  • AI backend: streamline operations with automation<br/>
                  • End-to-end: visibility + efficiency in one system
                </p>
              </motion.div>

              <motion.div 
                className="answer-box bg-white/3 backdrop-blur-xl border border-violet-500/20 rounded-2xl p-10 hover:transform hover:-translate-y-3 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/20 transition-all duration-300 relative overflow-hidden group"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                  Investment
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Pilots start from $5,000–$15,000 depending on scope. Full implementations scale with your growth.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pain → Agitate → Solution Section */}
        <section className="pain-section py-32 relative">
          <div className="absolute top-0 left-1/2 w-150 h-150 bg-red-500/10 rounded-full filter blur-3xl transform -translate-x-1/2"></div>
          <div className="container mx-auto px-5">
            <div className="pain-content text-center max-w-4xl mx-auto relative z-10">
              <motion.h2 
                className="text-4xl md:text-6xl font-black mb-12 bg-gradient-to-r from-white via-red-400 to-violet-400 bg-clip-text text-transparent leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                The Internet Changed. Most Businesses Didn't.
              </motion.h2>
              
              <div className="grid md:grid-cols-3 gap-8 mt-16">
                <motion.div 
                  className="pain-point bg-white/3 backdrop-blur-xl border border-red-500/30 rounded-2xl p-10 relative hover:transform hover:-translate-y-3 hover:shadow-xl hover:shadow-red-500/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-violet-500 rounded-t-2xl"></div>
                  <h3 className="text-xl font-bold text-red-400 mb-4">The Invisible Problem</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Customers now ask ChatGPT and Google AI for answers—not just search engines. If you're not showing up in AI results, you don't exist to your future customers.
                  </p>
                </motion.div>

                <motion.div 
                  className="pain-point bg-white/3 backdrop-blur-xl border border-red-500/30 rounded-2xl p-10 relative hover:transform hover:-translate-y-3 hover:shadow-xl hover:shadow-red-500/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-violet-500 rounded-t-2xl"></div>
                  <h3 className="text-xl font-bold text-red-400 mb-4">The Efficiency Gap</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Meanwhile, competitors are using AI to automate their backend, cutting costs and scaling faster while you stay stuck with manual processes.
                  </p>
                </motion.div>

                <motion.div 
                  className="pain-point bg-white/3 backdrop-blur-xl border border-red-500/30 rounded-2xl p-10 relative hover:transform hover:-translate-y-3 hover:shadow-xl hover:shadow-red-500/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-violet-500 rounded-t-2xl"></div>
                  <h3 className="text-xl font-bold text-red-400 mb-4">The Complete Solution</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Digital Frontier builds end-to-end AI systems so you win on both fronts—visible outside, efficient inside. No more choosing between growth and optimization.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Proof Section */}
        <section className="proof-section py-32 relative" id="features">
          <div className="container mx-auto px-5">
            <motion.h2 
              className="text-center text-4xl md:text-5xl font-black mb-16 bg-gradient-to-r from-white to-violet-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Proven Results Across Industries
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-12">
              <motion.div 
                className="proof-card text-center bg-white/3 backdrop-blur-xl border border-violet-500/20 rounded-3xl p-12 relative hover:transform hover:-translate-y-4 hover:border-violet-500/50 hover:shadow-2xl hover:shadow-violet-500/30 transition-all duration-300 overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-6xl font-black mb-4 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent relative z-10">
                  32%
                </div>
                <p className="text-slate-300 text-lg font-medium relative z-10">
                  Lower acquisition costs with AI-optimized funnels and precision targeting
                </p>
              </motion.div>

              <motion.div 
                className="proof-card text-center bg-white/3 backdrop-blur-xl border border-violet-500/20 rounded-3xl p-12 relative hover:transform hover:-translate-y-4 hover:border-violet-500/50 hover:shadow-2xl hover:shadow-violet-500/30 transition-all duration-300 overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-6xl font-black mb-4 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent relative z-10">
                  3x
                </div>
                <p className="text-slate-300 text-lg font-medium relative z-10">
                  More qualified leads from GEO visibility strategies and AI discovery
                </p>
              </motion.div>

              <motion.div 
                className="proof-card text-center bg-white/3 backdrop-blur-xl border border-violet-500/20 rounded-3xl p-12 relative hover:transform hover:-translate-y-4 hover:border-violet-500/50 hover:shadow-2xl hover:shadow-violet-500/30 transition-all duration-300 overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-6xl font-black mb-4 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent relative z-10">
                  15h
                </div>
                <p className="text-slate-300 text-lg font-medium relative z-10">
                  Per week saved for operations teams through intelligent automation
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mechanism Section */}
        <section className="mechanism-section py-32 relative">
          <div className="container mx-auto px-5">
            <motion.h2 
              className="text-center text-4xl md:text-5xl font-black mb-16 bg-gradient-to-r from-white to-violet-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Our Two-Sided AI Framework
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-12 mt-16">
              <motion.div 
                className="framework-column bg-white/3 backdrop-blur-xl border border-violet-500/20 rounded-3xl p-12 hover:transform hover:-translate-y-3 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/20 transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-0 left-0 right-0 h-0.75 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-t-3xl"></div>
                <h3 className="text-3xl font-black mb-8 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  Visibility Engine
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start text-slate-300 font-medium pl-8 relative">
                    <span className="absolute left-0 text-green-400 font-bold text-lg">✓</span>
                    Generative Engine Optimization (GEO)
                  </li>
                  <li className="flex items-start text-slate-300 font-medium pl-8 relative border-b border-violet-500/10 pb-4">
                    <span className="absolute left-0 text-green-400 font-bold text-lg">✓</span>
                    Answer Engine Optimization (AEO)
                  </li>
                  <li className="flex items-start text-slate-300 font-medium pl-8 relative border-b border-violet-500/10 pb-4">
                    <span className="absolute left-0 text-green-400 font-bold text-lg">✓</span>
                    AI-powered content strategy
                  </li>
                  <li className="flex items-start text-slate-300 font-medium pl-8 relative border-b border-violet-500/10 pb-4">
                    <span className="absolute left-0 text-green-400 font-bold text-lg">✓</span>
                    Omnichannel conversion funnels
                  </li>
                  <li className="flex items-start text-slate-300 font-medium pl-8 relative border-b border-violet-500/10 pb-4">
                    <span className="absolute left-0 text-green-400 font-bold text-lg">✓</span>
                    Search dominance across all platforms
                  </li>
                  <li className="flex items-start text-slate-300 font-medium pl-8 relative">
                    <span className="absolute left-0 text-green-400 font-bold text-lg">✓</span>
                    Predictive visibility analytics
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                className="framework-column bg-white/3 backdrop-blur-xl border border-violet-500/20 rounded-3xl p-12 hover:transform hover:-translate-y-3 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/20 transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-0 left-0 right-0 h-0.75 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-t-3xl"></div>
                <h3 className="text-3xl font-black mb-8 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  Efficiency Engine
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start text-slate-300 font-medium pl-8 relative border-b border-violet-500/10 pb-4">
                    <span className="absolute left-0 text-green-400 font-bold text-lg">✓</span>
                    Intelligent workflow automation
                  </li>
                  <li className="flex items-start text-slate-300 font-medium pl-8 relative border-b border-violet-500/10 pb-4">
                    <span className="absolute left-0 text-green-400 font-bold text-lg">✓</span>
                    Data-driven operations intelligence
                  </li>
                  <li className="flex items-start text-slate-300 font-medium pl-8 relative border-b border-violet-500/10 pb-4">
                    <span className="absolute left-0 text-green-400 font-bold text-lg">✓</span>
                    Cost optimization & scaling systems
                  </li>
                  <li className="flex items-start text-slate-300 font-medium pl-8 relative border-b border-violet-500/10 pb-4">
                    <span className="absolute left-0 text-green-400 font-bold text-lg">✓</span>
                    Predictive analytics & insights
                  </li>
                  <li className="flex items-start text-slate-300 font-medium pl-8 relative border-b border-violet-500/10 pb-4">
                    <span className="absolute left-0 text-green-400 font-bold text-lg">✓</span>
                    Process optimization algorithms
                  </li>
                  <li className="flex items-start text-slate-300 font-medium pl-8 relative">
                    <span className="absolute left-0 text-green-400 font-bold text-lg">✓</span>
                    Performance monitoring & alerts
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Offer Section */}
        <section className="offer-section py-32 text-center relative" id="offer">
          <div className="absolute top-0 left-1/2 w-200 h-100 bg-violet-500/20 rounded-full filter blur-3xl transform -translate-x-1/2"></div>
          <div className="container mx-auto px-5">
            <motion.h2 
              className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-violet-400 to-cyan-400 bg-clip-text text-transparent relative z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              One Partner. Two Wins.
            </motion.h2>
            <motion.p 
              className="text-xl mb-12 text-slate-300 max-w-3xl mx-auto relative z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Most agencies give you ads or SEO. We build systems. Visibility + efficiency, wrapped into one growth engine that evolves with AI technology.
            </motion.p>
            <motion.button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-violet-500 to-cyan-500 text-white px-10 py-5 rounded-full text-lg font-semibold hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/40 transition-all duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
              Launch AI Visibility + Efficiency Today
            </motion.button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section py-32">
          <div className="container mx-auto px-5">
            <div className="max-w-4xl mx-auto">
              <motion.h2 
                className="text-center text-4xl md:text-5xl font-black mb-16 bg-gradient-to-r from-white to-violet-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Frequently Asked Questions
              </motion.h2>
              
              <div className="space-y-4">
                {[
                  {
                    question: "What makes Digital Frontier different from other agencies?",
                    answer: "We focus on both ends of AI—front-end visibility and back-end efficiency—so you grow smarter, not just bigger. Most agencies optimize one or the other; we optimize the entire system."
                  },
                  {
                    question: "How soon can I see measurable results?",
                    answer: "Clients usually see visibility improvements in 6–12 weeks and backend efficiency gains immediately after implementation. Full system optimization typically shows ROI within 90 days."
                  },
                  {
                    question: "Do I need a massive technology budget to get started?",
                    answer: "Not at all. Our pilot programs are designed for practical rollout, starting at $5,000. We scale investment with your results and growth trajectory."
                  },
                  {
                    question: "Will AI automation replace my existing team?",
                    answer: "Never. AI is a force multiplier—your team stays in control while AI handles repetitive tasks, freeing them for strategic, creative, and relationship-building work."
                  },
                  {
                    question: "What industries and company sizes do you work with?",
                    answer: "We work with construction, trucking, finance, retail, SaaS, and service businesses—anywhere visibility + efficiency drive growth. From startups to enterprise organizations."
                  }
                ].map((faq, index) => (
                  <motion.div 
                    key={index}
                    className="faq-item bg-white/3 backdrop-blur-xl border border-violet-500/20 rounded-2xl overflow-hidden hover:border-violet-500/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div 
                      className="faq-question p-8 cursor-pointer font-semibold text-lg text-white hover:bg-violet-500/10 transition-all duration-300 relative"
                      onClick={(e) => toggleFAQ(e.currentTarget)}
                    >
                      {faq.question}
                      <span className="absolute right-8 top-1/2 transform -translate-y-1/2 text-2xl text-violet-400 transition-transform duration-300">+</span>
                    </div>
                    <div className="faq-answer px-8 pb-8 text-slate-300 leading-relaxed hidden">
                      {faq.answer}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="final-cta py-32 text-center relative" id="contact">
          <div className="absolute top-0 left-1/2 w-250 h-125 bg-violet-500/30 rounded-full filter blur-3xl transform -translate-x-1/2"></div>
          <div className="container mx-auto px-5">
            <motion.h2 
              className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-violet-400 to-cyan-400 bg-clip-text text-transparent relative z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Stay Visible. Stay Efficient. Stay Ahead.
            </motion.h2>
            <motion.p 
              className="text-xl mb-12 text-slate-300 relative z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              AI is rewriting the rules of business. We make sure you win on both sides of the equation.
            </motion.p>
            <motion.button 
              className="bg-gradient-to-r from-violet-500 to-cyan-500 text-white px-10 py-5 rounded-full text-lg font-semibold hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/40 transition-all duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
              Book Your Free AI Strategy Session
            </motion.button>
          </div>
        </section>

      </div>
    </>
  );
};

export default AIPlansLanding;