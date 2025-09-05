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
      title: "The AI Truth Gap: What Happens When You Ask 5 Different AIs for Today's Narrative",
      excerpt: "Our 2025 investigation reveals a shocking truth gap in AI reliability. See how different AIs handle facts, citations, and misinformation, and learn how to protect yourself from dangerous fabrications.",
      category: "AI Investigation",
      readTime: "12 min read",
      date: "2025-09-04",
      slug: "ai-truth-gap",
      image: "/lovable-uploads/dfb97795-57a3-4a27-941a-302022ec095e.png",
      badge: "INVESTIGATION",
      featured: true
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
      title: "Answer Engine Optimization for Crypto Startups",
      excerpt: "Deep dive into AEO strategies specifically designed for cryptocurrency and blockchain startups to dominate AI-powered search results.",
      category: "AEO Strategy",
      readTime: "8 min read",
      date: "2025-01-10",
      slug: "aeo-crypto-marketing",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
      badge: "AEO"
    },
    {
      id: 7,
      title: "Mastering Digital Marketing in 2024",
      excerpt: "Discover the latest strategies and trends that are shaping the digital marketing landscape this year.",
      category: "Digital Marketing",
      readTime: "8 min read",
      date: "2024-12-15",
      slug: "mastering-digital-marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      badge: "MARKETING"
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

          {/* Featured Post */}
          <section className="px-4 md:px-12 pb-12">
            <div className="container mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--df-bright-blue)' }}>
                  Latest Investigation
                </h2>
              </div>
              
              <div className="glass-card rounded-xl p-8 transition-all duration-300 cursor-pointer mb-16">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-full mr-4" style={{ backgroundColor: 'rgba(239, 68, 68, 0.2)' }}>
                        <i className="fa-solid fa-exclamation-triangle text-xl text-red-400"></i>
                      </div>
                      <span 
                        className="text-xs px-4 py-2 rounded-full font-bold animate-pulse"
                        style={{ 
                          backgroundColor: 'rgba(239, 68, 68, 0.2)',
                          color: '#f87171'
                        }}
                      >
                        🚨 BREAKING INVESTIGATION
                      </span>
                    </div>
                    
                    <h3 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--df-bright-blue)' }}>
                      {blogPosts[0].title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">{blogPosts[0].excerpt}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                      <span className="flex items-center gap-2">
                        <i className="fa-solid fa-clock"></i>
                        {blogPosts[0].readTime}
                      </span>
                      <span className="flex items-center gap-2">
                        <i className="fa-solid fa-calendar"></i>
                        {new Date(blogPosts[0].date).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <Link 
                      to={`/blog/${blogPosts[0].slug}`}
                      className="py-3 px-8 rounded-lg transition-all border inline-flex items-center gap-2 text-lg font-semibold"
                      style={{ 
                        borderColor: 'var(--df-cyan)',
                        color: 'var(--df-cyan)'
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.backgroundColor = 'rgba(0, 238, 255, 0.1)';
                        (e.target as HTMLElement).style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.backgroundColor = 'transparent';
                        (e.target as HTMLElement).style.transform = 'translateY(0)';
                      }}
                    >
                      Read Full Investigation
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                  
                  <div className="order-1 lg:order-2">
                    <div className="relative group overflow-hidden rounded-xl">
                      <img 
                        src={blogPosts[0].image} 
                        alt={blogPosts[0].title} 
                        className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Other Posts Grid */}
          <section className="px-4 md:px-12 pb-24">
            <div className="container mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--df-bright-blue)' }}>
                  More Insights
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.slice(1).map((post) => (
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

      </div>
    </>
  );
};

export default Blog;
