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
    <nav className="border-b border-border/50 bg-background/60 backdrop-blur-sm sticky top-0 z-50">
      <div className="w-full max-w-[1600px] mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo — fixed size, no shrink */}
          <Link to="/" className="flex-shrink-0 hover:opacity-80 transition-opacity">
            <LazyImage
              src="/lovable-uploads/7223877a-0a55-4ae4-9fbe-ad1c46acae0f.png"
              alt="Digital Frontier Company - Memphis Digital Marketing Agency Logo"
              displayWidth={300}
              displayHeight={300}
              optimization={{ priority: true }}
              className="h-20 w-auto object-contain"
            />
          </Link>

          {/* Nav links */}
          <div className="flex items-center gap-2 lg:gap-4">
            <NavigationMenu>
              <NavigationMenuList className="gap-0">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-xs lg:text-sm px-2 lg:px-3">Digital Marketing</NavigationMenuTrigger>
                  <DigitalMarketingDropdown />
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-xs lg:text-sm px-2 lg:px-3">Local SEO</NavigationMenuTrigger>
                  <LocalSEODropdown />
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-xs lg:text-sm px-2 lg:px-3">Resources</NavigationMenuTrigger>
                  <ResourcesDropdown />
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-xs lg:text-sm px-2 lg:px-3">Company</NavigationMenuTrigger>
                  <CompanyDropdown />
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/newsletter"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-2 lg:px-3 py-2 text-xs lg:text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                    >
                      Newsletter
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Social icons */}
            <div className="hidden xl:flex items-center gap-2 ml-2">
              <a href="https://www.linkedin.com/company/digital-frontier-company" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://x.com/DigitalFro14616" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61572896248731" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/digital_frontier_company/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.youtube.com/@Digital_FrontierCO" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="https://www.tiktok.com/@digitalfrontierco" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <SiTiktok className="h-4 w-4" />
              </a>
            </div>

            {/* CTA buttons */}
            <div className="flex items-center gap-2 ml-2">
              <Link
                to="/modern-contact-form"
                className="whitespace-nowrap px-4 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors text-xs lg:text-sm"
              >
                Book a Call →
              </Link>
              <Link
                to="/newsletter"
                className="whitespace-nowrap px-4 py-2 border border-primary/30 text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors text-xs lg:text-sm"
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;
