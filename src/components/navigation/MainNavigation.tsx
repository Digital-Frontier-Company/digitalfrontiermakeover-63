import React from "react";
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { DigitalMarketingDropdown, ResourcesDropdown, CompanyDropdown, LocalSEODropdown } from "./NavigationDropdowns";
import { LazyImage } from "@/components/LazyImage";
import { Linkedin, Twitter, Facebook, Instagram, Youtube } from "lucide-react";
import { SiTiktok } from "react-icons/si";
const MainNavigation = () => {
  return <nav className="border-b border-slate-800/50 bg-slate-900/60 backdrop-blur-sm sticky top-0 z-50 px-6 py-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-24">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <LazyImage src="/lovable-uploads/7223877a-0a55-4ae4-9fbe-ad1c46acae0f.png" alt="Digital Frontier Company - Memphis Digital Marketing Agency Logo" displayWidth={300} displayHeight={300} optimization={{
            priority: true
          }} className="h-36 w-auto object-contain" />
          </Link>
          
          <div className="flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-2">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-slate-800/50 text-white transition-colors">Digital Marketing</NavigationMenuTrigger>
                  <DigitalMarketingDropdown />
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-slate-800/50 text-white transition-colors">Local SEO</NavigationMenuTrigger>
                  <LocalSEODropdown />
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-slate-800/50 text-white transition-colors">Resources</NavigationMenuTrigger>
                  <ResourcesDropdown />
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-slate-800/50 text-white transition-colors">Company</NavigationMenuTrigger>
                  <CompanyDropdown />
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <div className="flex items-center gap-6">
              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a href="https://www.linkedin.com/company/digital-frontier-company" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#4EE2EC] transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://twitter.com/digitalfrontier" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#4EE2EC] transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://www.facebook.com/digitalfrontiercompany" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#4EE2EC] transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/digitalfrontierco" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#4EE2EC] transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.youtube.com/@digitalfrontiercompany" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#4EE2EC] transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href="https://www.tiktok.com/@digitalfrontierco" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#4EE2EC] transition-colors">
                  <SiTiktok className="h-5 w-5" />
                </a>
              </div>
              
              <Link 
                to="/modern-contact-form" 
                className="px-4 py-2 bg-[#4EE2EC] text-slate-900 rounded-lg font-medium hover:bg-[#4EE2EC]/90 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>;
};
export default MainNavigation;