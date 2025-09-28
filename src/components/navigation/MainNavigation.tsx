import React from "react";
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { DigitalMarketingDropdown, ResourcesDropdown, CompanyDropdown, LocalSEODropdown } from "./NavigationDropdowns";
import { LazyImage } from "@/components/LazyImage";
const MainNavigation = () => {
  return <nav className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50 rounded-none px-[6px] animate-fade-in my-[6px] py-[16px] mx-[6px]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 hover-scale">
            <LazyImage src="/lovable-uploads/7223877a-0a55-4ae4-9fbe-ad1c46acae0f.png" alt="Digital Frontier Company - Memphis Digital Marketing Agency Logo" displayWidth={96} displayHeight={96} optimization={{
            priority: true
          }} className="max-h-14-contain-transition-transform duration-300\\n" />
          </Link>
          
          <div className="flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-slate-950 hover:bg-slate-800 text-cyan-400 transition-all duration-300 hover:scale-110">Digital Marketing</NavigationMenuTrigger>
                  <DigitalMarketingDropdown />
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-slate-950 hover:bg-slate-800 text-cyan-400 transition-all duration-300 hover:scale-110">Local SEO</NavigationMenuTrigger>
                  <LocalSEODropdown />
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-slate-950 hover:bg-slate-800 text-cyan-400 transition-all duration-300 hover:scale-110">Resources</NavigationMenuTrigger>
                  <ResourcesDropdown />
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-slate-950 hover:bg-slate-800 text-cyan-400 transition-all duration-300 hover:scale-110">Company</NavigationMenuTrigger>
                  <CompanyDropdown />
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/digital-frontier-services" className="bg-slate-950 hover:bg-slate-800 text-cyan-400 transition-all duration-300 hover:scale-110 inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium">
                    Digital Frontier Services
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
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
    </nav>;
};
export default MainNavigation;