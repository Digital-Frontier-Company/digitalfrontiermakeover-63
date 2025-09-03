import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../styles/digitalFrontierServices.css";

const DigitalFrontierServices = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const services = [
    {
      id: 1,
      title: "AI Humanizer Agent",
      description: "Transform machine-generated content into natural human language. Perfect for content creators who need to humanize AI outputs.",
      features: ["Natural language patterns", "Emotional intelligence integration", "Contextual awareness"],
      icon: "fa-solid fa-robot",
      category: "ai",
      badge: "AI AGENT",
      link: "/services/ai-humanizer-agent"
    },
    {
      id: 2,
      title: "Content Creation Agent",
      description: "Automated content generation for blogs, social media, and marketing materials with your brand voice and style.",
      features: ["Brand voice consistency", "SEO optimization", "Multi-format outputs"],
      icon: "fa-solid fa-pen-fancy",
      category: "ai",
      badge: "AI AGENT",
      link: "/resources/content-creation-agent"
    },
    {
      id: 3,
      title: "Answer Engine Optimization",
      description: "Optimize for AI-powered search and answer engines to dominate where AI determines relevancy.",
      features: ["Future-proof SEO", "Voice search optimization", "AI visibility enhancement"],
      icon: "fa-solid fa-magnifying-glass",
      category: "marketing",
      badge: "MARKETING",
      link: "/answer-engine-optimization"
    },
    {
      id: 4,
      title: "Digital Marketing Strategy",
      description: "Comprehensive AI-enhanced marketing strategies for businesses seeking growth and market domination.",
      features: ["Data-driven strategies", "Competitive advantage", "Measurable ROI"],
      icon: "fa-solid fa-chart-line",
      category: "marketing",
      badge: "MARKETING",
      link: "/services/digital-marketing-strategy"
    },
    {
      id: 5,
      title: "Predictive Analytics Agent",
      description: "Harness the power of predictive AI to forecast market trends, customer behavior, and business opportunities.",
      features: ["Future-focused insights", "Risk mitigation", "Strategic advantage"],
      icon: "fa-solid fa-brain",
      category: "ai",
      badge: "AI AGENT",
      link: "/services/predictive-analytics-agent"
    },
    {
      id: 6,
      title: "AI Implementation Consulting",
      description: "Expert guidance on integrating AI solutions into your business operations for maximum efficiency and competitive edge.",
      features: ["Customized AI roadmap", "Technical expertise", "Change management support"],
      icon: "fa-solid fa-comments",
      category: "consulting",
      badge: "CONSULTING",
      link: "/services/ai-implementation-consulting"
    },
    {
      id: 7,
      title: "AI Voice Assistants",
      description: "Voice Assistant Capable of Making Calls. Transform customer experience with AI that talks like a human, learns continuously, and closes deals 24/7.",
      features: ["24/7 customer support", "Natural conversation flow", "Lead conversion optimization"],
      icon: "fa-solid fa-microphone",
      category: "ai",
      badge: "AI AGENT",
      link: "/ai-voice-assistants"
    }
  ];

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(service => service.category === activeFilter);

  // Create particles effect
  useEffect(() => {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    // Clear existing particles
    particlesContainer.innerHTML = '';
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random position
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      
      // Random size
      const size = Math.random() * 4 + 1;
      
      // Random animation duration
      const duration = Math.random() * 20 + 10;
      
      // Random delay
      const delay = Math.random() * 10;
      
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${delay}s`;
      
      particlesContainer.appendChild(particle);
    }
  }, []);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;500;600;700;800;900&display=swap" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
      
      <div className="text-white font-sans min-h-screen relative" style={{ fontFamily: 'Inter, sans-serif' }}>
        {/* Animated Mesh Gradient Background */}
        <div className="animated-mesh-bg"></div>
        
        {/* Particles Background */}
        <div id="particles" className="particles"></div>

        {/* Header */}
        <header className="bg-gradient-to-br from-slate-900 via-indigo-950 to-cyan-500 text-white font-inter relative z-50">
          <nav className="border-b border-slate-800 backdrop-blur-sm py-[15px] px-[6px] mx-[3px] my-[3px] animate-fade-in">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                <Link to="/" className="flex items-center space-x-2 hover-scale">
                  <img 
                    alt="Digital Frontier Company - Memphis Digital Marketing Agency Logo" 
                    className="max-h-24 transition-transform duration-300" 
                    src="/lovable-uploads/82ac39f2-c264-42ef-bb92-fa6731db497e.png" 
                    width="96" 
                    height="96" 
                    loading="eager" 
                  />
                </Link>
                
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-4">
                    <Link 
                      to="/answer-engine-optimization"
                      className="bg-slate-950 hover:bg-slate-800 text-cyan-400 transition-all duration-300 hover:scale-110 inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium"
                    >
                      AEO
                    </Link>
                    <Link 
                      to="/generative-engine-optimization"
                      className="bg-slate-950 hover:bg-slate-800 text-cyan-400 transition-all duration-300 hover:scale-110 inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium"
                    >
                      GEO
                    </Link>
                    <Link 
                      to="/search-engine-optimization"
                      className="bg-slate-950 hover:bg-slate-800 text-cyan-400 transition-all duration-300 hover:scale-110 inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium"
                    >
                      SEO
                    </Link>
                    <Link 
                      to="/ad-funnel-blueprint"
                      className="bg-slate-950 hover:bg-slate-800 text-cyan-400 transition-all duration-300 hover:scale-110 inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium"
                    >
                      AI Funnel Ads
                    </Link>
                    <Link 
                      to="/crypto-marketing"
                      className="bg-slate-950 hover:bg-slate-800 text-cyan-400 transition-all duration-300 hover:scale-110 inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium"
                    >
                      Crypto Marketing
                    </Link>
                    <Link 
                      to="/insights"
                      className="bg-slate-950 hover:bg-slate-800 text-cyan-400 transition-all duration-300 hover:scale-110 inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium"
                    >
                      Insights
                    </Link>
                    <Link 
                      to="/about-us"
                      className="bg-slate-950 hover:bg-slate-800 text-cyan-400 transition-all duration-300 hover:scale-110 inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium"
                    >
                      About
                    </Link>
                    <Link 
                      to="/contact"
                      className="bg-slate-950 hover:bg-slate-800 text-cyan-400 transition-all duration-300 hover:scale-110 inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium"
                    >
                      Contact
                    </Link>
                  </div>
                  
                  {/* Social Icons */}
                  <div className="flex items-center space-x-3 pl-6 border-l border-slate-700">
                    <a href="https://www.facebook.com/61572896248731" className="text-slate-400 hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:rotate-12" target="_blank" rel="noopener noreferrer">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/digital_frontier_company/" className="text-slate-400 hover:text-pink-400 transition-all duration-300 hover:scale-125 hover:rotate-12" target="_blank" rel="noopener noreferrer">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a href="https://www.tiktok.com/@digital_frontier_company" className="text-slate-400 hover:text-red-400 transition-all duration-300 hover:scale-125 hover:rotate-12" target="_blank" rel="noopener noreferrer">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                      </svg>
                    </a>
                    <a href="https://x.com/DigitalFro14616" className="text-slate-400 hover:text-blue-300 transition-all duration-300 hover:scale-125 hover:rotate-12" target="_blank" rel="noopener noreferrer">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/digital-frontier-company/" className="text-slate-400 hover:text-blue-500 transition-all duration-300 hover:scale-125 hover:rotate-12" target="_blank" rel="noopener noreferrer">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a href="https://www.youtube.com/@Digital_FrontierCO" className="text-slate-400 hover:text-red-500 transition-all duration-300 hover:scale-125 hover:rotate-12" target="_blank" rel="noopener noreferrer">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="relative z-10">
          {/* Hero Section */}
          <section className="text-center px-4 md:px-12 py-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 typewriter" style={{ color: 'var(--df-bright-blue)' }}>
              Digital Frontier Services
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
              AI-Powered Solutions for Market Domination. From custom AI agents to strategic marketing, we engineer your path to digital supremacy with cutting-edge technology and proven strategies.
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <button 
                onClick={() => setActiveFilter('all')}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeFilter === 'all' 
                    ? 'text-white' 
                    : 'border text-white hover:bg-opacity-80 hover:border-blue-400'
                }`}
                style={{
                  backgroundColor: activeFilter === 'all' ? 'var(--df-bright-blue)' : 'var(--df-glass-bg)',
                  borderColor: activeFilter === 'all' ? 'transparent' : 'var(--df-cyan)'
                }}
              >
                All Services
              </button>
              <button 
                onClick={() => setActiveFilter('ai')}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeFilter === 'ai' 
                    ? 'text-white' 
                    : 'border text-white hover:bg-opacity-80 hover:border-blue-400'
                }`}
                style={{
                  backgroundColor: activeFilter === 'ai' ? 'var(--df-bright-blue)' : 'var(--df-glass-bg)',
                  borderColor: activeFilter === 'ai' ? 'transparent' : 'var(--df-cyan)'
                }}
              >
                AI Agents
              </button>
              <button 
                onClick={() => setActiveFilter('marketing')}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeFilter === 'marketing' 
                    ? 'text-white' 
                    : 'border text-white hover:bg-opacity-80 hover:border-blue-400'
                }`}
                style={{
                  backgroundColor: activeFilter === 'marketing' ? 'var(--df-bright-blue)' : 'var(--df-glass-bg)',
                  borderColor: activeFilter === 'marketing' ? 'transparent' : 'var(--df-cyan)'
                }}
              >
                Marketing
              </button>
              <button 
                onClick={() => setActiveFilter('consulting')}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeFilter === 'consulting' 
                    ? 'text-white' 
                    : 'border text-white hover:bg-opacity-80 hover:border-blue-400'
                }`}
                style={{
                  backgroundColor: activeFilter === 'consulting' ? 'var(--df-bright-blue)' : 'var(--df-glass-bg)',
                  borderColor: activeFilter === 'consulting' ? 'transparent' : 'var(--df-cyan)'
                }}
              >
                Consulting
              </button>
            </div>
          </section>

          {/* Services Grid */}
          <section className="px-4 md:px-12 pb-24">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service) => (
                  <div key={service.id} className="glass-card rounded-xl p-6 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-full mr-4" style={{ backgroundColor: 'rgba(0, 238, 255, 0.2)' }}>
                        <i className={`${service.icon} text-xl`} style={{ color: 'var(--df-cyan)' }}></i>
                      </div>
                      <span 
                        className="text-xs px-3 py-1 rounded-full"
                        style={{ 
                          backgroundColor: 'rgba(0, 238, 255, 0.2)',
                          color: 'var(--df-cyan)'
                        }}
                      >
                        {service.badge}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--df-bright-blue)' }}>
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="mb-6">
                      <h4 className="text-sm mb-2" style={{ color: 'var(--df-cyan)' }}>KEY BENEFITS:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <i className="fa-solid fa-check mt-1 mr-2" style={{ color: 'var(--df-cyan)' }}></i>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link 
                      to={service.link}
                      className="py-2 px-6 rounded-lg transition-all w-full border inline-block text-center"
                      style={{ 
                        borderColor: 'var(--df-cyan)',
                        color: 'var(--df-cyan)'
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.backgroundColor = 'rgba(0, 238, 255, 0.1)';
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.backgroundColor = 'transparent';
                      }}
                    >
                      Learn More
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Section */}
          <section className="px-4 md:px-12 py-16 mx-4 md:mx-12 rounded-xl mb-24 glass-card">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: 'var(--df-bright-blue)' }}>
                Why Choose Digital Frontier?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6">
                  <div className="text-4xl font-bold mb-2" style={{ color: 'var(--df-cyan)' }}>850+</div>
                  <p className="text-gray-300">Successful Projects</p>
                </div>
                <div className="p-6">
                  <div className="text-4xl font-bold mb-2" style={{ color: 'var(--df-cyan)' }}>4.9/5</div>
                  <p className="text-gray-300">Client Satisfaction</p>
                </div>
                <div className="p-6">
                  <div className="text-4xl font-bold mb-2" style={{ color: 'var(--df-cyan)' }}>24/7</div>
                  <p className="text-gray-300">Support & Assistance</p>
                </div>
              </div>
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="py-12 px-4 md:px-12 border-t border-gray-800 relative z-10">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <div className="w-32 mx-auto md:mx-0">
                  <img 
                    className="w-full" 
                    src="/lovable-uploads/82ac39f2-c264-42ef-bb92-fa6731db497e.png" 
                    alt="Digital Frontier Company logo"
                  />
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-8">
                <span className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">Home</span>
                <span className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">About Us</span>
                <span className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">Services</span>
                <span className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">Blog</span>
                <span className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">Contact</span>
              </div>
              <div className="mt-6 md:mt-0 flex gap-4">
                <span 
                  className="p-3 rounded-full hover:bg-opacity-20 transition-all cursor-pointer"
                  style={{ backgroundColor: 'var(--df-glass-bg)' }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'rgba(0, 238, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'var(--df-glass-bg)';
                  }}
                >
                  <i className="fa-brands fa-linkedin-in" style={{ color: 'var(--df-cyan)' }}></i>
                </span>
                <span 
                  className="p-3 rounded-full hover:bg-opacity-20 transition-all cursor-pointer"
                  style={{ backgroundColor: 'var(--df-glass-bg)' }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'rgba(0, 238, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'var(--df-glass-bg)';
                  }}
                >
                  <i className="fa-brands fa-twitter" style={{ color: 'var(--df-cyan)' }}></i>
                </span>
                <span 
                  className="p-3 rounded-full hover:bg-opacity-20 transition-all cursor-pointer"
                  style={{ backgroundColor: 'var(--df-glass-bg)' }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'rgba(0, 238, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'var(--df-glass-bg)';
                  }}
                >
                  <i className="fa-brands fa-instagram" style={{ color: 'var(--df-cyan)' }}></i>
                </span>
              </div>
            </div>
            <div className="text-center mt-12 text-gray-500">
              <p>© 2023 Digital Frontier. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default DigitalFrontierServices;