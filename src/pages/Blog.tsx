import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { generateOrganizationSchema, generateBreadcrumbSchema } from "@/lib/utils";
import "../styles/digitalFrontierServices.css";

const Blog = () => {
  const location = useLocation();
  const canonicalUrl = `https://digitalfrontier.app${location.pathname}`;
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Generate schemas
  const organizationSchema = generateOrganizationSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://digitalfrontier.app" },
    { name: "Blog", url: canonicalUrl }
  ]);

  const blogPosts = [
    {
      id: 1,
      title: "The AI Revolution in Digital Marketing: 5 Game-Changing Trends Reshaping 2025",
      excerpt: "Discover the 5 game-changing AI trends revolutionizing digital marketing in 2025. From hyper-personalization to voice search optimization and quantum computing applications.",
      category: "AI Trends",
      readTime: "12 min read",
      date: "2025-01-16",
      slug: "ai-revolution-digital-marketing-2025",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      badge: "AI TRENDS"
    },
    {
      id: 2,
      title: "The Digital Marketing Revolution of July 2025: AI Overviews, Algorithm Upheavals & the Future of Search",
      excerpt: "July 2025 recap: Google's huge core update, AI Overviews, social-media algorithm shifts, privacy rules & winning tactics for marketers.",
      category: "Digital Marketing Trends",
      readTime: "10 min read",
      date: "2025-07-22",
      slug: "digital-marketing-revolution-july-2025",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      badge: "MARKETING"
    },
    {
      id: 3,
      title: "Building Resilience in Businesses with AI-Driven Risk Management",
      excerpt: "Discover how AI-driven risk management strategies can transform reactive approaches into proactive defenses, helping businesses build resilience in an uncertain world.",
      category: "AI & Risk Management",
      readTime: "12 min read",
      date: "2025-01-18",
      slug: "ai-driven-risk-management-business-resilience",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      badge: "RISK MANAGEMENT"
    },
    {
      id: 4,
      title: "Mastering Digital Marketing in 2024",
      excerpt: "Discover the latest strategies and trends that are shaping the digital marketing landscape this year.",
      category: "Digital Marketing",
      readTime: "8 min read",
      date: "2024-12-15",
      slug: "mastering-digital-marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      badge: "MARKETING"
    },
    {
      id: 5,
      title: "Ultimate Guide to Tax Reduction & All-Weather Wealth-Building",
      excerpt: "Master advanced tax reduction tactics and build resilient wealth with proven strategies from financial experts.",
      category: "Financial Strategy",
      readTime: "15 min read",
      date: "2025-01-13",
      slug: "tax-reduction-wealth-building-guide",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
      badge: "FINANCE"
    },
    {
      id: 6,
      title: "The AI Truth Gap: What Happens When You Ask 5 Different AIs for Today's Narrative",
      excerpt: "Our 2025 investigation reveals a shocking truth gap in AI reliability. See how different AIs handle facts, citations, and misinformation, and learn how to protect yourself from dangerous fabrications.",
      category: "AI Investigation",
      readTime: "12 min read",
      date: "2025-09-04",
      slug: "ai-truth-gap",
      image: "/lovable-uploads/dfb97795-57a3-4a27-941a-302022ec095e.png",
      badge: "INVESTIGATION"
    },
    {
      id: 7,
      title: "Answer Engine Optimization for Crypto Startups",
      excerpt: "Deep dive into AEO strategies specifically designed for cryptocurrency and blockchain startups to dominate AI-powered search results.",
      category: "AEO Strategy",
      readTime: "8 min read",
      date: "2025-01-10",
      slug: "aeo-crypto-marketing",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
      badge: "AEO"
    }
  ];

  // Filter blog posts based on category
  const filteredPosts = activeFilter === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => {
        switch(activeFilter) {
          case 'ai': return post.category.includes('AI') || post.badge === 'AI TRENDS';
          case 'marketing': return post.category.includes('Marketing') || post.badge === 'MARKETING';
          case 'strategy': return post.category.includes('Strategy') || post.badge === 'AEO' || post.badge === 'INVESTIGATION';
          default: return true;
        }
      });

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

  // Blog listing page schema
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Digital Frontier Blog",
    "description": "Latest insights on digital marketing, AI, and business transformation",
    "url": canonicalUrl,
    "author": {
      "@type": "Organization",
      "name": "Digital Frontier Company"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Digital Frontier Company",
      "logo": {
        "@type": "ImageObject",
        "url": "https://digitalfrontier.app/lovable-uploads/2486421b-6ca3-4c32-b686-a49ac0da182b.png"
      }
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "url": `https://digitalfrontier.app/blog/${post.slug}`,
      "datePublished": post.date,
      "author": {
        "@type": "Organization",
        "name": "Digital Frontier Company"
      },
      "image": `https://digitalfrontier.app${post.image}`
    }))
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;500;600;700;800;900&display=swap" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
      
      <Helmet>
        <title>Blog | The Digital Frontier</title>
        <meta name="description" content="Latest insights on digital marketing, AI, and business transformation from Digital Frontier experts." />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="keywords" content="digital marketing blog, AI marketing insights, business transformation, Digital Frontier" />
        
        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        
        {/* Blog Schema */}
        <script type="application/ld+json">
          {JSON.stringify(blogSchema)}
        </script>
      </Helmet>

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
              Digital Frontier Blog
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
              Latest insights on digital marketing, AI, and business transformation. Expert analysis, case studies, and actionable strategies to help you dominate your market.
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
                All Posts
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
                AI & Technology
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
                onClick={() => setActiveFilter('strategy')}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeFilter === 'strategy' 
                    ? 'text-white' 
                    : 'border text-white hover:bg-opacity-80 hover:border-blue-400'
                }`}
                style={{
                  backgroundColor: activeFilter === 'strategy' ? 'var(--df-bright-blue)' : 'var(--df-glass-bg)',
                  borderColor: activeFilter === 'strategy' ? 'transparent' : 'var(--df-cyan)'
                }}
              >
                Strategy & Insights
              </button>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="px-4 md:px-12 pb-24">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="glass-card rounded-xl p-6 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-full mr-4" style={{ backgroundColor: 'rgba(0, 238, 255, 0.2)' }}>
                        <i className="fa-solid fa-newspaper text-xl" style={{ color: 'var(--df-cyan)' }}></i>
                      </div>
                      <span 
                        className="text-xs px-3 py-1 rounded-full"
                        style={{ 
                          backgroundColor: 'rgba(0, 238, 255, 0.2)',
                          color: 'var(--df-cyan)'
                        }}
                      >
                        {post.badge}
                      </span>
                    </div>
                    
                    <div className="mb-4 rounded-lg overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" 
                      />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--df-bright-blue)' }}>
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="mb-6">
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <span>{post.readTime}</span>
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <Link 
                      to={`/blog/${post.slug}`}
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
                      Read Article
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="px-4 md:px-12 py-16 mx-4 md:mx-12 rounded-xl mb-24 glass-card">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: 'var(--df-bright-blue)' }}>
                Why Read Our Blog?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6">
                  <div className="text-4xl font-bold mb-2" style={{ color: 'var(--df-cyan)' }}>50K+</div>
                  <p className="text-gray-300">Monthly Readers</p>
                </div>
                <div className="p-6">
                  <div className="text-4xl font-bold mb-2" style={{ color: 'var(--df-cyan)' }}>100+</div>
                  <p className="text-gray-300">Expert Articles</p>
                </div>
                <div className="p-6">
                  <div className="text-4xl font-bold mb-2" style={{ color: 'var(--df-cyan)' }}>Weekly</div>
                  <p className="text-gray-300">Fresh Insights</p>
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
              
              <div className="text-center md:text-right">
                <p className="text-gray-300 mb-2">Stay ahead of the digital frontier</p>
                <div className="flex justify-center md:justify-end space-x-4">
                  <Link 
                    to="/contact" 
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Contact Us
                  </Link>
                  <Link 
                    to="/newsletter" 
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Newsletter
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400">&copy; 2025 Digital Frontier Company. All rights reserved.</p>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
};

export default Blog;
