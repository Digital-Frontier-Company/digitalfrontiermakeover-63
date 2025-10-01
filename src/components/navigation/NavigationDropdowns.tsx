import React from "react";
import { Link } from "react-router-dom";
import { NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";

export const DigitalMarketingDropdown = () => (
  <NavigationMenuContent>
    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-slate-900 border border-slate-700">
      <li className="row-span-3">
        <NavigationMenuLink asChild>
          <Link className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500/20 to-blue-700/20 p-6 no-underline outline-none focus:shadow-md text-slate-100 hover:text-white" to="/search-engine-optimization">
            <div className="mb-2 mt-4 text-lg font-medium text-slate-100">
              SEO Services
            </div>
            <p className="text-sm leading-tight text-slate-300">
              Search Engine Optimization strategies to boost your visibility
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
      <li>
        <NavigationMenuLink asChild>
          <Link to="/generative-engine-optimization" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 text-slate-100 hover:text-white">
            <div className="text-sm font-medium leading-none text-slate-100">GEO</div>
            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
              Generative Engine Optimization
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
      <li>
        <NavigationMenuLink asChild>
          <Link to="/answer-engine-optimization" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 text-slate-100 hover:text-white">
            <div className="text-sm font-medium leading-none text-slate-100">AEO</div>
            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
              Answer Engine Optimization
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
      <li>
        <NavigationMenuLink asChild>
          <Link to="/crypto-marketing" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 text-slate-100 hover:text-white">
            <div className="text-sm font-medium leading-none text-slate-100">Crypto Marketing</div>
            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
              Web3 and cryptocurrency marketing
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
      <li>
        <NavigationMenuLink asChild>
          <Link to="/influencer-marketing-2025" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 text-slate-100 hover:text-white">
            <div className="text-sm font-medium leading-none text-slate-100">Influencer Marketing 2025</div>
            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
              Next-gen creator strategies
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
      <li>
        <NavigationMenuLink asChild>
          <Link to="/ad-funnel-blueprint" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 text-slate-100 hover:text-white">
            <div className="text-sm font-medium leading-none text-slate-100">Ad Funnel Blueprint</div>
            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
              High-converting ad strategies
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
      <li>
        <NavigationMenuLink asChild>
          <Link to="/seo-vs-aeo-vs-geo" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 text-slate-100 hover:text-white">
            <div className="text-sm font-medium leading-none text-slate-100">SEO vs AEO vs GEO</div>
            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
              Complete strategy comparison guide
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
      <li>
        <NavigationMenuLink asChild>
          <Link to="/ai-and-digital-marketing" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 text-slate-100 hover:text-white">
            <div className="text-sm font-medium leading-none text-slate-100">AI & Digital Marketing</div>
            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
              AI-powered marketing strategies
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
      <li>
        <NavigationMenuLink asChild>
          <Link to="/web-creative" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 text-slate-100 hover:text-white">
            <div className="text-sm font-medium leading-none text-slate-100">Web-Creative</div>
            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
              Web design & digital services pricing
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    </ul>
  </NavigationMenuContent>
);

export const ResourcesDropdown = () => (
  <NavigationMenuContent>
    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-slate-900 border border-slate-700">
      <li className="row-span-4">
        <NavigationMenuLink asChild>
          <Link
            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple-500/20 to-purple-600/20 p-6 no-underline outline-none focus:shadow-md border border-purple-500/20"
            to="/insights"
          >
            <div className="mb-2 mt-4 text-lg font-medium text-white">
              AI Marketing Insights Hub
            </div>
            <p className="text-sm leading-tight text-slate-300">
              Comprehensive playbooks for AEO, AI funnel ads, and advanced marketing strategies
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
      <li>
        <NavigationMenuLink asChild>
          <Link to="/blog" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 text-slate-100 hover:text-white">
            <div className="text-sm font-medium leading-none text-slate-100">Blog</div>
            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
              Latest insights and strategies
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
      <li>
        <NavigationMenuLink asChild>
          <Link to="/resources/content-creation-agent" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 text-slate-100 hover:text-white">
            <div className="text-sm font-medium leading-none text-slate-100">Content Creation Agent</div>
            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
              AI-powered content tools
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
      <li>
        <NavigationMenuLink asChild>
          <Link to="/gtm-strategy-blueprint" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 text-slate-100 hover:text-white">
            <div className="text-sm font-medium leading-none text-slate-100">GTM Strategy Blueprint</div>
            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
              Complete go-to-market framework
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
      <li>
        <NavigationMenuLink asChild>
          <Link to="/ai-prompt-templates" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 text-slate-100 hover:text-white">
            <div className="text-sm font-medium leading-none text-slate-100">AI Prompt Templates</div>
            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
              Memphis ChatGPT prompts
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
      <li>
        <NavigationMenuLink asChild>
          <Link to="/information-architecture-prompts" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 text-slate-100 hover:text-white">
            <div className="text-sm font-medium leading-none text-slate-100">Information Architecture Prompts</div>
            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
              Website structure optimization
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
      <li>
        <NavigationMenuLink asChild>
          <Link to="/user-experience-prompts" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 text-slate-100 hover:text-white">
            <div className="text-sm font-medium leading-none text-slate-100">User Experience Prompts</div>
            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
              300 UX optimization prompts
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
      <li>
        <NavigationMenuLink asChild>
          <Link to="/psychological-digital-marketing-insights" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 text-slate-100 hover:text-white">
            <div className="text-sm font-medium leading-none text-slate-100">Psychology Insights</div>
            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
              Consumer behavior analysis
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
      <li>
        <NavigationMenuLink asChild>
          <Link to="/ai-bias-in-advertising" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 text-slate-100 hover:text-white">
            <div className="text-sm font-medium leading-none text-slate-100">AI Bias in Advertising</div>
            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
              Understanding algorithmic bias
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
      <li>
        <NavigationMenuLink asChild>
          <Link to="/regulations" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 text-slate-100 hover:text-white">
            <div className="text-sm font-medium leading-none text-slate-100">Regulations</div>
            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
              AI and digital marketing compliance
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
      <li>
        <NavigationMenuLink asChild>
          <Link to="/faq" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 text-slate-100 hover:text-white">
            <div className="text-sm font-medium leading-none text-slate-100">FAQ</div>
            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
              Frequently asked questions
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
      <li>
        <NavigationMenuLink asChild>
          <Link to="/kpis" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 text-slate-100 hover:text-white">
            <div className="text-sm font-medium leading-none text-slate-100">KPIs & Analytics</div>
            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
              Key performance indicators
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
      <li>
        <NavigationMenuLink asChild>
          <Link to="/emotional-marketing-playbook" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 text-slate-100 hover:text-white">
            <div className="text-sm font-medium leading-none text-slate-100">Emotional Marketing</div>
            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
              Psychology-driven strategies
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    </ul>
  </NavigationMenuContent>
);

export const LocalSEODropdown = () => (
  <NavigationMenuContent>
    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-slate-900 border border-slate-700">
      <li className="row-span-3">
        <NavigationMenuLink asChild>
          <Link className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-green-500/20 to-green-600/20 p-6 no-underline outline-none focus:shadow-md text-slate-100 hover:text-white border border-green-500/20" to="/memphis-digital-marketing">
            <div className="mb-2 mt-4 text-lg font-medium text-slate-100">
              Memphis Digital Marketing
            </div>
            <p className="text-sm leading-tight text-slate-300">
              Premier AI marketing agency serving Memphis and surrounding areas
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
      <li>
        <NavigationMenuLink asChild>
          <Link to="/collierville-seo-services" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 text-slate-100 hover:text-white">
            <div className="text-sm font-medium leading-none text-slate-100">Collierville SEO</div>
            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
              Local SEO services for Collierville businesses
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
      <li>
        <NavigationMenuLink asChild>
          <Link to="/germantown-digital-marketing" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 text-slate-100 hover:text-white">
            <div className="text-sm font-medium leading-none text-slate-100">Germantown Digital Marketing</div>
            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
              Premium digital marketing for affluent markets
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
      <li>
        <NavigationMenuLink asChild>
          <Link to="/team-expertise" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 text-slate-100 hover:text-white">
            <div className="text-sm font-medium leading-none text-slate-100">Our Team</div>
            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
              Local SEO experts and certifications
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    </ul>
  </NavigationMenuContent>
);

export const CompanyDropdown = () => (
  <NavigationMenuContent>
    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-slate-900 border border-slate-700">
      <li className="row-span-4">
        <NavigationMenuLink asChild>
          <Link className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate-800/50 to-slate-900/50 p-6 no-underline outline-none focus:shadow-md text-slate-100 hover:text-white" to="/about-us">
            <div className="mb-2 mt-4 text-lg font-medium text-slate-100">
              About Digital Frontier
            </div>
            <p className="text-sm leading-tight text-slate-300">
              Learn about our mission and team
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
      <li>
        <NavigationMenuLink asChild>
          <Link to="/services/digital-frontier-services" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 text-slate-100 hover:text-white">
            <div className="text-sm font-medium leading-none text-slate-100">Services</div>
            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
              Our full service offerings
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
      <li>
        <NavigationMenuLink asChild>
          <Link to="/pricing" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 text-slate-100 hover:text-white">
            <div className="text-sm font-medium leading-none text-slate-100">Pricing</div>
            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
              Our service packages
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
      <li>
        <NavigationMenuLink asChild>
          <Link to="/docs" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 text-slate-100 hover:text-white">
            <div className="text-sm font-medium leading-none text-slate-100">Docs</div>
            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
              Comprehensive documentation
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
      <li>
        <NavigationMenuLink asChild>
          <Link to="/contact" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 focus:bg-slate-800 text-slate-100 hover:text-white">
            <div className="text-sm font-medium leading-none text-slate-100">Contact</div>
            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
              Get in touch with us
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    </ul>
  </NavigationMenuContent>
);
