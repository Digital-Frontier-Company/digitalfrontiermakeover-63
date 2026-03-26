import React from "react";
import { Link } from "react-router-dom";
import { LazyImage } from "@/components/LazyImage";
import { Linkedin, Twitter, Facebook, Instagram, Youtube } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  DigitalMarketingDropdown,
  LocalSEODropdown,
  ResourcesDropdown,
  CompanyDropdown,
} from "./NavigationDropdowns";

const MainNavigation = () => {
  return (
    <nav className="border-b border-border/50 bg-background/60 backdrop-blur-sm sticky top-0 z-50 px-6 py-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-24">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <LazyImage
              src="/lovable-uploads/7223877a-0a55-4ae4-9fbe-ad1c46acae0f.png"
              alt="Digital Frontier Company - Memphis Digital Marketing Agency Logo"
              displayWidth={300}
              displayHeight={300}
              optimization={{ priority: true }}
              className="h-36 w-auto object-contain"
            />
          </Link>

          <div className="flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Digital Marketing</NavigationMenuTrigger>
                  <DigitalMarketingDropdown />
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Local SEO</NavigationMenuTrigger>
                  <LocalSEODropdown />
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <ResourcesDropdown />
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                  <CompanyDropdown />
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/newsletter"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                    >
                      Newsletter
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-6">
              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a href="https://www.linkedin.com/company/digital-frontier-company" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://x.com/DigitalFro14616" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61572896248731" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/digital_frontier_company/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.youtube.com/@Digital_FrontierCO" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href="https://www.tiktok.com/@digitalfrontierco" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <SiTiktok className="h-5 w-5" />
                </a>
              </div>

              <Link
                to="/modern-contact-form"
                className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm"
              >
                Book a Call →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;
