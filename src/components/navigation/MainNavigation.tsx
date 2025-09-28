import React from "react";
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { DigitalMarketingDropdown, ResourcesDropdown, CompanyDropdown, LocalSEODropdown } from "./NavigationDropdowns";
import { LazyImage } from "@/components/LazyImage";
const MainNavigation = () => {
  return <nav className="border-b border-slate-800/50 bg-slate-900/60 backdrop-blur-sm sticky top-0 z-50 px-6 py-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <LazyImage src="/lovable-uploads/7223877a-0a55-4ae4-9fbe-ad1c46acae0f.png" alt="Digital Frontier Company - Memphis Digital Marketing Agency Logo" displayWidth={100} displayHeight={100} optimization={{
            priority: true
          }} className="h-12 w-auto object-contain" />
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
            
            <Link 
              to="/modern-contact-form" 
              className="px-4 py-2 bg-[#4EE2EC] text-slate-900 rounded-lg font-medium hover:bg-[#4EE2EC]/90 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>;
};
export default MainNavigation;