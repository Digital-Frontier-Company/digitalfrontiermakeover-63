import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../styles/digitalFrontierServices.css";

const InsightsHub = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const articles = [
    {
      id: 1,
      title: "Answer Engine Optimization: Beyond Traditional SEO",
      description: "Master AEO strategies to ensure your content appears in AI-powered search engines, voice assistants, and answer boxes for maximum visibility.",
      category: "MARKETING",
      author: "SEO Specialists",
      date: "Dec 15, 2024",
      image: "/lovable-uploads/e224f597-8c00-4713-a1a6-82a84ad3bf9e.png",
      link: "/answer-engine-optimization"
    },
    {
      id: 2,
      title: "AI Implementation Consulting: Your AI Crew Chief",
      description: "Get proven AI solutions that actually work for small businesses. We've tested $50K+ worth of tools so you don't have to waste money on hype.",
      category: "CONSULTING",
      author: "AI Consultants",
      date: "Dec 10, 2024",
      image: "/lovable-uploads/82ac39f2-c264-42ef-bb92-fa6731db497e.png",
      link: "/services/ai-implementation-consulting"
    },
    {
      id: 3,
      title: "Predictive Analytics Agent: AI-Powered Business Forecasting",
      description: "Transform your decision-making with AI-powered predictive analytics that forecast market trends, customer behavior, and identify untapped opportunities.",
      category: "AI TECHNOLOGY",
      author: "Data Scientists",
      date: "Dec 8, 2024",
      image: "/lovable-uploads/b2bdb5c4-9f93-4494-bf40-989afa09d6a5.png",
      link: "/services/predictive-analytics-agent"
    },
    {
      id: 4,
      title: "Content Creation Agent: AI-Powered Writing Tools",
      description: "Master AI content creation with proven writing tools, expert SEO strategies, and techniques for generating high-converting marketing copy.",
      category: "MARKETING",
      author: "Content Specialists",
      date: "Dec 5, 2024",
      image: "/lovable-uploads/4de436ae-e779-4610-9ed3-7a0000c1890d.png",
      link: "/resources/content-creation-agent"
    },
    {
      id: 5,
      title: "AI Prompt Templates: 500+ ChatGPT Marketing Prompts",
      description: "Access our comprehensive library of AI prompts for marketing, content creation, SEO, and business optimization. Ready-to-use templates for instant results.",
      category: "AI TECHNOLOGY",
      author: "Prompt Engineers",
      date: "Dec 3, 2024",
      image: "/lovable-uploads/82b3b6d7-dc1f-457e-ac95-1926f6af656b.png",
      link: "/ai-prompt-templates"
    },
    {
      id: 6,
      title: "GTM Strategy Blueprint: Complete Go-to-Market Framework",
      description: "Launch your products successfully with our comprehensive GTM strategy framework, including market analysis, customer segmentation, and launch planning.",
      category: "CONSULTING",
      author: "Strategy Experts",
      date: "Dec 1, 2024",
      image: "/lovable-uploads/c735c494-8f65-49b4-89b6-d6a1040a6168.png",
      link: "/gtm-strategy-blueprint"
    },
    {
      id: 7,
      title: "AI Voice Assistants: Advanced Conversational AI Solutions",
      description: "Implement sophisticated AI voice assistants and conversational interfaces to enhance customer experience and automate support interactions.",
      category: "AI TECHNOLOGY",
      author: "Voice AI Team",
      date: "Nov 28, 2024",
      image: "/lovable-uploads/2fbf45e6-0519-43ce-acbd-c1e281d4e990.png",
      link: "/ai-voice-assistants"
    },
    {
      id: 8,
      title: "Generative Engine Optimization: AI Content Strategy",
      description: "Optimize your content for AI-powered generative engines and large language models to maximize visibility in the new AI-driven search landscape.",
      category: "MARKETING",
      author: "GEO Specialists",
      date: "Nov 25, 2024",
      image: "/lovable-uploads/acc93008-7a64-4d92-ab4d-2db95cec27a0.png",
      link: "/generative-engine-optimization"
    }
  ];

  const filteredArticles = activeFilter === 'all' 
    ? articles 
    : articles.filter(article => 
        article.category.toLowerCase().includes(activeFilter === 'ai' ? 'technology' : activeFilter)
      );

  // Create particles effect
  useEffect(() => {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    particlesContainer.innerHTML = '';
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const size = Math.random() * 4 + 1;
      const duration = Math.random() * 20 + 10;
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
        <header className="py-6 px-4 md:px-12 relative z-10">
          <div className="container mx-auto flex justify-center">
            <div className="w-48">
              <img 
                className="w-full" 
                src="/lovable-uploads/82ac39f2-c264-42ef-bb92-fa6731db497e.png" 
                alt="Digital Frontier Company logo with mountain peak design in cyan blue"
              />
            </div>
          </div>
          <nav className="container mx-auto mt-6">
            <ul className="flex flex-wrap justify-center gap-6 text-sm">
              <li><Link to="/" className="text-cyan hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about-us" className="text-gray-300 hover:text-cyan transition-colors">About Us</Link></li>
              <li><Link to="/digital-frontier-services" className="text-gray-300 hover:text-cyan transition-colors">Services</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-cyan transition-colors">Blog</Link></li>
              <li><Link to="/sectors" className="text-gray-300 hover:text-cyan transition-colors">Sectors</Link></li>
              <li><Link to="/evolution" className="text-gray-300 hover:text-cyan transition-colors">Evolution</Link></li>
              <li><Link to="/technical" className="text-gray-300 hover:text-cyan transition-colors">Technical Breakdown</Link></li>
              <li><Link to="/future" className="text-gray-300 hover:text-cyan transition-colors">Future Trends</Link></li>
              <li><Link to="/ai-bias-in-advertising" className="text-gray-300 hover:text-cyan transition-colors">AI-Bias</Link></li>
              <li><Link to="/regulations" className="text-gray-300 hover:text-cyan transition-colors">Regulations</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-cyan transition-colors">Contact</Link></li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main className="relative z-10">
          {/* Hero Section */}
          <section className="text-center px-4 md:px-12 py-16 h-[400px] flex items-center justify-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-4 typewriter" style={{ color: 'var(--df-bright-blue)' }}>
                Insights & Articles
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
                Stay ahead of the curve with our expert analysis on AI, marketing strategies, and industry consulting trends.
              </p>
              
              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-4">
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
                  All Topics
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
                  AI Technology
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
            </div>
          </section>

          {/* Featured Article */}
          <section className="px-4 md:px-12 pb-16">
            <div className="container mx-auto">
              <div className="glass-card rounded-xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <span 
                      className="text-xs px-3 py-1 rounded-full inline-block mb-4"
                      style={{ 
                        backgroundColor: 'rgba(0, 238, 255, 0.2)',
                        color: 'var(--df-cyan)'
                      }}
                    >
                      FEATURED
                    </span>
                    <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--df-bright-blue)' }}>
                      AI Crew Chief: We Tested $50K+ in AI Tools So You Don't Have To
                    </h2>
                    <p className="text-gray-300 mb-6">
                      Stop wasting money on hyped AI tools that don't work. Our AI Implementation Consulting provides only verified solutions that actually drive results for small businesses. Get proven AI strategies backed by real testing and implementation experience.
                    </p>
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 rounded-full mr-3 bg-cyan-500"></div>
                      <div>
                        <p className="font-medium" style={{ color: 'var(--df-bright-blue)' }}>Digital Frontier AI Team</p>
                        <p className="text-gray-400 text-sm">AI Implementation Experts • Dec 18, 2024</p>
                      </div>
                    </div>
                    <Link 
                      to="/services/ai-implementation-consulting"
                      className="py-2 px-6 rounded-lg transition-all inline-block w-max border"
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
                      Learn More About AI Crew Chief
                    </Link>
                  </div>
                  <div className="h-[400px] relative">
                    <img 
                      className="absolute inset-0 w-full h-full object-cover" 
                      src="/lovable-uploads/9dacc93a-c522-4265-915c-d671659c64a3.png" 
                      alt="AI optimization workflow diagram showing content creation, citation management, audit processes, and optimization strategies with colorful data visualization elements"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Latest Articles Grid */}
          <section className="px-4 md:px-12 pb-24">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--df-bright-blue)' }}>
                Latest Insights
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                  <Link key={article.id} to={article.link} className="glass-card rounded-xl p-6 transition-all duration-300 hover:transform hover:scale-105 block">
                    <div className="mb-4 h-48 rounded-lg overflow-hidden relative">
                      <img className="w-full h-full object-cover" src={article.image} alt={article.title} />
                      <span 
                        className="absolute top-3 left-3 text-xs px-3 py-1 rounded-full"
                        style={{ 
                          backgroundColor: 'rgba(0, 238, 255, 0.2)',
                          color: 'var(--df-cyan)'
                        }}
                      >
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--df-bright-blue)' }}>
                      {article.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm line-clamp-3">{article.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full mr-2 bg-cyan-500"></div>
                        <p className="text-gray-400 text-xs">{article.author}</p>
                      </div>
                      <p className="text-gray-400 text-xs">{article.date}</p>
                    </div>
                    <span 
                      className="text-gray-300 text-sm mt-4 inline-block cursor-pointer hover:text-cyan transition-colors"
                    >
                      Read More <i className="fa-solid fa-arrow-right ml-1"></i>
                    </span>
                  </Link>
                ))}
              </div>
              
              {/* Load More Button */}
              <div className="text-center mt-12">
                <button 
                  className="py-3 px-8 rounded-lg transition-all border"
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
                  Load More Articles
                </button>
              </div>
            </div>
          </section>

          {/* AI Marketing Trends Section */}
          <section className="px-4 md:px-12 py-16 mx-4 md:mx-12 rounded-xl mb-24 glass-card">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: 'var(--df-bright-blue)' }}>
                AI Marketing Adoption Trends
              </h2>
              <p className="text-gray-300 text-center mb-12 max-w-4xl mx-auto">
                See how different industries are adopting AI marketing technologies and the projected growth over the next five years.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: 'var(--df-cyan)' }}>78%</div>
                  <p className="text-gray-300">of marketers plan to increase AI budget</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: 'var(--df-cyan)' }}>3.5x</div>
                  <p className="text-gray-300">higher conversion rates with AI personalization</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: 'var(--df-cyan)' }}>$126B</div>
                  <p className="text-gray-300">projected AI marketing market by 2025</p>
                </div>
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="px-4 md:px-12 pb-24">
            <div className="container mx-auto">
              <div className="glass-card rounded-xl p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--df-bright-blue)' }}>
                  Stay Updated with Our Newsletter
                </h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Get the latest insights on AI marketing and consulting delivered directly to your inbox. No spam, just valuable content to keep you ahead of the curve.
                </p>
                
                <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 border"
                    style={{ 
                      backgroundColor: 'var(--df-glass-bg)',
                      borderColor: 'var(--df-cyan)',
                      color: 'white'
                    }}
                  />
                  <button 
                    type="submit" 
                    className="px-6 py-3 rounded-lg text-white font-medium transition-all hover:bg-opacity-80"
                    style={{ backgroundColor: 'var(--df-bright-blue)' }}
                  >
                    Subscribe Now
                  </button>
                </form>
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
                <Link to="/" className="text-gray-400 hover:text-cyan transition-colors">Home</Link>
                <Link to="/about-us" className="text-gray-400 hover:text-cyan transition-colors">About Us</Link>
                <Link to="/digital-frontier-services" className="text-gray-400 hover:text-cyan transition-colors">Services</Link>
                <Link to="/blog" className="text-gray-400 hover:text-cyan transition-colors">Blog</Link>
                <Link to="/contact" className="text-gray-400 hover:text-cyan transition-colors">Contact</Link>
              </div>
              <div className="mt-6 md:mt-0 flex gap-4">
                <span 
                  className="p-3 rounded-full hover:bg-opacity-20 transition-all cursor-pointer"
                  style={{ backgroundColor: 'var(--df-glass-bg)' }}
                >
                  <i className="fa-brands fa-linkedin-in" style={{ color: 'var(--df-cyan)' }}></i>
                </span>
                <span 
                  className="p-3 rounded-full hover:bg-opacity-20 transition-all cursor-pointer"
                  style={{ backgroundColor: 'var(--df-glass-bg)' }}
                >
                  <i className="fa-brands fa-twitter" style={{ color: 'var(--df-cyan)' }}></i>
                </span>
                <span 
                  className="p-3 rounded-full hover:bg-opacity-20 transition-all cursor-pointer"
                  style={{ backgroundColor: 'var(--df-glass-bg)' }}
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

export default InsightsHub;