import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Helmet } from "react-helmet-async";

const SiteMap = () => {
  const location = useLocation();
  
  // Organize site structure
  const mainPages = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
    { name: "Pricing", path: "/answer-engine-optimization-and-digital-marketing-services" },
    { name: "Newsletter", path: "/newsletter" },
    { name: "FAQ", path: "/faq" },
  ];
  
  const servicePages = [
    { name: "AI-Powered Ad Funnel Blueprint", path: "/ad-funnel-blueprint" },
    { name: "Generative Engine Optimization", path: "/generative-engine-optimization" },
    { name: "Answer Engine Optimization", path: "/answer-engine-optimization" },
    { name: "AI and Digital Marketing", path: "/ai-and-digital-marketing" },
    { name: "Search Engine Optimization", path: "/search-engine-optimization" },
    { name: "Crypto Marketing", path: "/crypto-marketing" },
  ];
  
  const resourcePages = [
    { name: "Content Creation Agent", path: "/resources/content-creation-agent" },
    { name: "AI Bias in Advertising", path: "/ai-bias-in-advertising" },
  ];
  
  const knowledgePages = [
    { name: "Technical Aspects", path: "/technical" },
    { name: "Evolution", path: "/evolution" },
    { name: "Regulations", path: "/regulations" },
    { name: "Industry Sectors", path: "/sectors" },
    { name: "Future Trends", path: "/future" },
    { name: "KPIs and Analytics", path: "/kpis" },
  ];
  
  const blogPosts = [
    { name: "Mastering Digital Marketing", path: "/blog/mastering-digital-marketing" },
  ];

  return (
    <PageLayout 
      title="Site Map" 
      subtitle="Navigate through all of our pages" 
      currentPath={location.pathname}
    >
      <Helmet>
        <title>Site Map | Digital Frontier</title>
        <link rel="canonical" href="https://digitalfrontier.app/site-map" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6 text-slate-100">Main Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mainPages.map((page) => (
              <Link 
                key={page.path}
                to={page.path}
                className="p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500 hover:bg-slate-800 transition-all"
              >
                {page.name}
              </Link>
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6 text-slate-100">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {servicePages.map((page) => (
              <Link 
                key={page.path}
                to={page.path}
                className="p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500 hover:bg-slate-800 transition-all"
              >
                {page.name}
              </Link>
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6 text-slate-100">Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resourcePages.map((page) => (
              <Link 
                key={page.path}
                to={page.path}
                className="p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500 hover:bg-slate-800 transition-all"
              >
                {page.name}
              </Link>
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6 text-slate-100">Knowledge Base</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {knowledgePages.map((page) => (
              <Link 
                key={page.path}
                to={page.path}
                className="p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500 hover:bg-slate-800 transition-all"
              >
                {page.name}
              </Link>
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6 text-slate-100">Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogPosts.map((page) => (
              <Link 
                key={page.path}
                to={page.path}
                className="p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500 hover:bg-slate-800 transition-all"
              >
                {page.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default SiteMap;
