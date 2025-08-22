import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../styles/digitalFrontierServices.css";

const InsightsHub = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const articles = [
    {
      id: 1,
      title: "How AI Humanizers Are Changing Content Creation",
      description: "The rise of AI humanizer tools is transforming how businesses create content, making machine-generated text indistinguishable from human writing.",
      category: "AI TECHNOLOGY",
      author: "Sarah Johnson",
      date: "May 28, 2023",
      image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/9aa3e2b939-6c8a2503549f453ec183.png"
    },
    {
      id: 2,
      title: "Answer Engine Optimization: Beyond Traditional SEO",
      description: "As AI-powered search engines evolve, marketers need new strategies to ensure their content appears in answer boxes and voice search results.",
      category: "MARKETING",
      author: "James Wilson",
      date: "June 2, 2023",
      image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/29737a3a51-8f7460bbecd283c5c0cd.png"
    },
    {
      id: 3,
      title: "Implementing AI in Your Business: A Consultant's Guide",
      description: "A step-by-step approach to integrating artificial intelligence solutions into your business operations with minimal disruption and maximum ROI.",
      category: "CONSULTING",
      author: "Robert Chang",
      date: "June 10, 2023",
      image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/7cd85d26fc-338a3161ddfc23fe0c9e.png"
    },
    {
      id: 4,
      title: "Predictive Analytics: Forecasting Market Trends with AI",
      description: "How businesses are leveraging AI-powered predictive analytics to anticipate market shifts and gain competitive advantages in uncertain economic conditions.",
      category: "AI TECHNOLOGY",
      author: "Emma Rodriguez",
      date: "May 22, 2023",
      image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/b5541c8e85-b5789b701844d82cca37.png"
    },
    {
      id: 5,
      title: "Multi-Format Content Creation with AI Agents",
      description: "Discover how AI content creation tools can help you produce consistent, high-quality content across blogs, social media, email campaigns, and more.",
      category: "MARKETING",
      author: "David Park",
      date: "June 5, 2023",
      image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/d494d0df61-f19f008f4cf3e8f14c2b.png"
    },
    {
      id: 6,
      title: "Ethical Considerations in AI Marketing",
      description: "As AI marketing tools become more prevalent, businesses must navigate complex ethical issues around data privacy, transparency, and algorithmic bias.",
      category: "CONSULTING",
      author: "Alicia Martinez",
      date: "May 30, 2023",
      image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/b42795e28f-4a3287b29e2b9b6cf2be.png"
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
                      The Future of AI in Digital Marketing: 2024 Trends
                    </h2>
                    <p className="text-gray-300 mb-6">
                      Explore how artificial intelligence is revolutionizing digital marketing strategies, from personalized customer experiences to predictive analytics that drive conversion rates.
                    </p>
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 rounded-full mr-3 bg-cyan-500"></div>
                      <div>
                        <p className="font-medium" style={{ color: 'var(--df-bright-blue)' }}>Dr. Michael Chen</p>
                        <p className="text-gray-400 text-sm">AI Research Director • June 15, 2023</p>
                      </div>
                    </div>
                    <button 
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
                      Read Article
                    </button>
                  </div>
                  <div className="h-[400px] relative">
                    <img 
                      className="absolute inset-0 w-full h-full object-cover" 
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/97e0f85297-2bd79f50b758256d0594.png" 
                      alt="futuristic AI marketing visualization with glowing blue networks and data points on dark background"
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
                  <div key={article.id} className="glass-card rounded-xl p-6 transition-all duration-300">
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
                  </div>
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