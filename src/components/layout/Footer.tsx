
import React from "react";
import { Link } from "react-router-dom";
import { LazyImage } from "@/components/LazyImage";

const Footer = () => {
  return (
    <footer className="bg-slate-900/90 backdrop-blur-sm border-t border-slate-800/50 mt-16 animate-fade-in">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2 animate-slide-in-right">
            <div className="flex items-center space-x-3 mb-4 hover-scale">
              <LazyImage
                src="/lovable-uploads/6a6a7a60-bc25-4bd4-af32-b53f83a8c0a4.png"
                alt="Digital Frontier Company"
                className="h-10 w-auto transition-transform duration-300 hover:scale-110"
                displayWidth={40}
                displayHeight={40}
              />
              <span className="text-xl font-bold text-white">Digital Frontier</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              AI-driven digital marketing that helps businesses dominate their market through intelligent automation and cutting-edge strategies.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-3">
              <a 
                href="https://www.linkedin.com/company/digital-frontier-company/" 
                className="group relative p-2 rounded-lg bg-slate-800/50 hover:bg-blue-600/20 transition-all duration-300 hover:-translate-y-1" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg className="h-5 w-5 text-slate-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
              </a>
              
              <a 
                href="https://x.com/DigitalFro14616" 
                className="group relative p-2 rounded-lg bg-slate-800/50 hover:bg-blue-400/20 transition-all duration-300 hover:-translate-y-1" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg className="h-5 w-5 text-slate-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Twitter</span>
              </a>
              
              <a 
                href="https://www.youtube.com/@Digital_FrontierCO" 
                className="group relative p-2 rounded-lg bg-slate-800/50 hover:bg-red-600/20 transition-all duration-300 hover:-translate-y-1" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg className="h-5 w-5 text-slate-400 group-hover:text-red-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">YouTube</span>
              </a>
              
              <a 
                href="https://www.instagram.com/digital_frontier_company/" 
                className="group relative p-2 rounded-lg bg-slate-800/50 hover:bg-pink-600/20 transition-all duration-300 hover:-translate-y-1" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg className="h-5 w-5 text-slate-400 group-hover:text-pink-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Instagram</span>
              </a>
            </div>
          </div>
          
          {/* Core Services */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-white font-semibold mb-4 relative">
              Core Services
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/search-engine-optimization" 
                  className="story-link text-slate-400 hover:text-blue-400 transition-colors duration-300 block py-1"
                >
                  SEO Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/answer-engine-optimization" 
                  className="story-link text-slate-400 hover:text-blue-400 transition-colors duration-300 block py-1"
                >
                  Answer Engine Optimization
                </Link>
              </li>
              <li>
                <Link 
                  to="/ai-and-digital-marketing" 
                  className="story-link text-slate-400 hover:text-blue-400 transition-colors duration-300 block py-1"
                >
                  AI Marketing
                </Link>
              </li>
              <li>
                <Link 
                  to="/digital-marketing" 
                  className="story-link text-slate-400 hover:text-blue-400 transition-colors duration-300 block py-1"
                >
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Essential Pages */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-white font-semibold mb-4 relative">
              Company
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></div>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/about-us" 
                  className="story-link text-slate-400 hover:text-purple-400 transition-colors duration-300 block py-1"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="story-link text-slate-400 hover:text-purple-400 transition-colors duration-300 block py-1"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="story-link text-slate-400 hover:text-purple-400 transition-colors duration-300 block py-1"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/pricing" 
                  className="story-link text-slate-400 hover:text-purple-400 transition-colors duration-300 block py-1"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-slate-800/50 pt-6 flex flex-col sm:flex-row justify-between items-center animate-scale-in">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Digital Frontier Company. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link 
              to="/privacy-policy" 
              className="text-slate-400 hover:text-white text-sm transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms-of-service" 
              className="text-slate-400 hover:text-white text-sm transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link 
              to="/faq" 
              className="text-slate-400 hover:text-white text-sm transition-colors duration-300"
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
