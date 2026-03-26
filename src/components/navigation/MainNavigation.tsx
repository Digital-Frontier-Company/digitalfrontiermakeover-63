import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { LazyImage } from "@/components/LazyImage";
import { Linkedin, Twitter, Facebook, Instagram, Youtube } from "lucide-react";
import { SiTiktok } from "react-icons/si";

const navLinks = [
  { label: "Services", hash: "#services" },
  { label: "Our Edge", hash: "#our-edge" },
  { label: "Case Study", hash: "#case-study" },
  { label: "Newsletter", hash: "#newsletter" },
];

const MainNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (hash: string) => {
    if (location.pathname !== "/") {
      navigate("/" + hash);
    } else {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

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
            {/* Nav Links */}
            <ul className="flex items-center space-x-6 list-none">
              {navLinks.map((link) => (
                <li key={link.hash}>
                  <button
                    onClick={() => handleNavClick(link.hash)}
                    className="bg-transparent border-none text-foreground/80 hover:text-primary font-medium transition-colors cursor-pointer text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

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
