
import React from "react";
import { Link } from "react-router-dom";
import { LazyImage } from "@/components/LazyImage";
import { Linkedin, Twitter, Facebook, Instagram, Youtube } from "lucide-react";
import { SiTiktok } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="relative z-[1] bg-slate-950/95 backdrop-blur-md border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Top Row: Logo + Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="space-y-5 lg:col-span-1">
            <div className="flex items-center gap-3">
              <LazyImage
                src="/lovable-uploads/43aabc4a-e0b6-4c96-a4ff-115865e74fbb.png"
                alt="Digital Frontier Company"
                className="h-10 w-auto"
                displayWidth={40}
                displayHeight={40}
              />
              <span className="text-lg font-bold text-foreground tracking-tight">Digital Frontier</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              AI-native growth systems for local and service businesses. Memphis-based, globally minded.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-1">
              {[
                { href: "https://www.linkedin.com/company/digital-frontier-company/", icon: Linkedin, label: "LinkedIn" },
                { href: "https://x.com/DigitalFro14616", icon: Twitter, label: "X/Twitter" },
                { href: "https://www.facebook.com/profile.php?id=61572896248731", icon: Facebook, label: "Facebook" },
                { href: "https://www.instagram.com/digital_frontier_company/", icon: Instagram, label: "Instagram" },
                { href: "https://www.youtube.com/@Digital_FrontierCO", icon: Youtube, label: "YouTube" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
              <a
                href="https://www.tiktok.com/@digitalfrontierco"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200"
              >
                <SiTiktok className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5">
              {[
                { to: "/search-engine-optimization", label: "SEO Services" },
                { to: "/answer-engine-optimization", label: "Answer Engine Optimization" },
                { to: "/generative-engine-optimization", label: "Generative Engine Optimization" },
                { to: "/ai-and-digital-marketing", label: "AI Marketing" },
                { to: "/digital-marketing", label: "Digital Marketing" },
                { to: "/web-creative", label: "Web Design" },
                { to: "/pricing", label: "Pricing" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {[
                { to: "/blog", label: "Blog" },
                { to: "/newsletter", label: "Newsletter" },
                { to: "/ai-prompt-templates", label: "AI Prompt Templates" },
                { to: "/gtm-strategy-blueprint", label: "GTM Strategy" },
                { to: "/ad-funnel-blueprint", label: "Ad Funnel Blueprint" },
                { to: "/browse-playbooks", label: "Playbooks" },
                { to: "/faq", label: "FAQ" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5">
              {[
                { to: "/about-us", label: "About Us" },
                { to: "/team-expertise", label: "Our Team" },
                { to: "/contact", label: "Contact" },
                { to: "/memphis-digital-marketing", label: "Memphis Marketing" },
                { to: "/collierville-seo-services", label: "Collierville SEO" },
                { to: "/germantown-digital-marketing", label: "Germantown Marketing" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Digital Frontier Company. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground text-xs transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-muted-foreground hover:text-foreground text-xs transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="/site-map" className="text-muted-foreground hover:text-foreground text-xs transition-colors duration-200">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
