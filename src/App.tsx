
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';

// Immediate load for homepage (critical path)
import Index from '@/pages/Index';

// Lazy load all other pages for code splitting
const AdFunnelBlueprint = lazy(() => import('@/pages/AdFunnelBlueprint'));
const GenerativeEngineOptimization = lazy(() => import('@/pages/GenerativeEngineOptimization'));
const AnswerEngineOptimization = lazy(() => import('@/pages/AnswerEngineOptimization'));
const SearchEngineOptimization = lazy(() => import('@/pages/SearchEngineOptimization'));
const CryptoMarketing = lazy(() => import('@/pages/CryptoMarketing'));
const AboutUs = lazy(() => import('@/pages/AboutUs'));
const Contact = lazy(() => import('@/pages/Contact'));
const Pricing = lazy(() => import('@/pages/Pricing'));
const FAQ = lazy(() => import('@/pages/FAQ'));
const Newsletter = lazy(() => import('@/pages/Newsletter'));
const SiteMap = lazy(() => import('@/pages/SiteMap'));
const AIPlansLanding = lazy(() => import('@/pages/AIPlansLanding'));
const Blog = lazy(() => import('@/pages/Blog'));
const BlogPost = lazy(() => import('@/pages/BlogPost'));
const ContentCreationAgent = lazy(() => import('@/pages/ContentCreationAgent'));
const PredictiveAnalyticsAgent = lazy(() => import('@/pages/PredictiveAnalyticsAgent'));
const AIImplementationConsulting = lazy(() => import('@/pages/AIImplementationConsulting'));
const AIVoiceAssistants = lazy(() => import('@/pages/AIVoiceAssistants'));
const DigitalMarketingStrategy = lazy(() => import('@/pages/DigitalMarketingStrategy'));
const PsychologicalDigitalMarketingInsights = lazy(() => import('@/pages/PsychologicalDigitalMarketingInsights'));
const Technical = lazy(() => import('@/pages/Technical'));
const Evolution = lazy(() => import('@/pages/Evolution'));
const Regulations = lazy(() => import('@/pages/Regulations'));
const Sectors = lazy(() => import('@/pages/Sectors'));
const Future = lazy(() => import('@/pages/Future'));
const AIBias = lazy(() => import('@/pages/AIBias'));

// Keep critical pages as immediate imports
import AIAndDigitalMarketing from '@/pages/AIAndDigitalMarketing';
import Docs from '@/pages/Docs';
import RecommenderSystemGeneralization from '@/pages/RecommenderSystemGeneralization';
import AIPromptTemplates from '@/pages/AIPromptTemplates';
import InformationArchitecturePrompts from '@/pages/InformationArchitecturePrompts';
import UserExperiencePrompts from '@/pages/UserExperiencePrompts';
import InsightsHub from '@/pages/InsightsHub';
import SEOvsAEOvsGEO from '@/pages/SEOvsAEOvsGEO';
import BrowsePlaybooks from '@/pages/BrowsePlaybooks';
import DigitalFrontierServices from '@/pages/DigitalFrontierServices';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TaxReductionGuide from "./pages/TaxReductionGuide";
import InfluencerMarketing2025 from "./pages/InfluencerMarketing2025";
import BlogPostDigitalMarketingRevolution2025 from './pages/BlogPostDigitalMarketingRevolution2025';
import BlogPostAEOCrypto from './pages/BlogPostAEOCrypto';
import BlogPostAIRevolution2025 from './pages/BlogPostAIRevolution2025';
import BlogPostAITruthGap from './pages/BlogPostAITruthGap';
import BlogPostMarketingAgencies2025 from './pages/BlogPostMarketingAgencies2025';
import EmotionalMarketingPlaybook from './pages/EmotionalMarketingPlaybook';
import KPIs from './pages/KPIs';
import RecommenderSystem from './pages/RecommenderSystem';
import GTMStrategyBlueprint from './pages/GTMStrategyBlueprint';

import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AuthorPage from './pages/AuthorPage';
import SearchPage from './pages/SearchPage';
import MemphisDigitalMarketing from './pages/MemphisDigitalMarketing';
import ColliervilleSEO from './pages/ColliervilleSEO';
import GermantownDigitalMarketing from './pages/GermantownDigitalMarketing';
import TeamExpertise from './pages/TeamExpertise';
import CompleteAEOGuide from './pages/CompleteAEOGuide';
import { Toaster } from 'react-hot-toast';
import NotFound from '@/pages/NotFound';
import ModernContactForm from '@/pages/ModernContactForm';
import { Analytics } from '@vercel/analytics/react';
import WebCreative from './pages/WebCreative';
import DigitalMarketing from './pages/DigitalMarketing';
import ContactForDigitalMarketing from './pages/ContactForDigitalMarketing';
import SaaSAIAgentPackages from './pages/SaaSAIAgentPackages';
import DigitalFrontierCryptoAIMarketing from './pages/DigitalFrontierCryptoAIMarketing';
import RealEstateDemo from './pages/RealEstateDemo';

// Loading component for lazy routes
const PageLoader = () => (
  <div className="min-h-screen bg-slate-950 flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
  </div>
);

// Create a query client instance
const queryClient = new QueryClient();

function App() {
  console.log('📱 App component rendering');
  console.log('📍 Current location:', window.location.pathname);
  console.log('🌐 Window location object:', window.location);
  
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <Analytics />
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout><Index /></MainLayout>} />
            <Route path="/ad-funnel-blueprint" element={<MainLayout><Suspense fallback={<PageLoader />}><AdFunnelBlueprint /></Suspense></MainLayout>} />
            <Route path="/generative-engine-optimization" element={<MainLayout><Suspense fallback={<PageLoader />}><GenerativeEngineOptimization /></Suspense></MainLayout>} />
            <Route path="/answer-engine-optimization" element={<MainLayout><Suspense fallback={<PageLoader />}><AnswerEngineOptimization /></Suspense></MainLayout>} />
            <Route path="/search-engine-optimization" element={<MainLayout><Suspense fallback={<PageLoader />}><SearchEngineOptimization /></Suspense></MainLayout>} />
            <Route path="/crypto-marketing" element={<MainLayout><Suspense fallback={<PageLoader />}><CryptoMarketing /></Suspense></MainLayout>} />
            <Route path="/about-us" element={<MainLayout><Suspense fallback={<PageLoader />}><AboutUs /></Suspense></MainLayout>} />
            <Route path="/contact" element={<MainLayout><Suspense fallback={<PageLoader />}><Contact /></Suspense></MainLayout>} />
            <Route path="/docs" element={<MainLayout><Docs /></MainLayout>} />
            <Route path="/digital-frontier-services" element={<MainLayout><DigitalFrontierServices /></MainLayout>} />
            <Route path="/pricing" element={<MainLayout><Suspense fallback={<PageLoader />}><Pricing /></Suspense></MainLayout>} />
            <Route path="/faq" element={<MainLayout><Suspense fallback={<PageLoader />}><FAQ /></Suspense></MainLayout>} />
            <Route path="/newsletter" element={<MainLayout><Suspense fallback={<PageLoader />}><Newsletter /></Suspense></MainLayout>} />
            <Route path="/site-map" element={<MainLayout><Suspense fallback={<PageLoader />}><SiteMap /></Suspense></MainLayout>} />
            <Route path="/sitemap" element={<MainLayout><Suspense fallback={<PageLoader />}><SiteMap /></Suspense></MainLayout>} />
            <Route path="/blog" element={<MainLayout><Suspense fallback={<PageLoader />}><Blog /></Suspense></MainLayout>} />
            <Route path="/blog/ai-driven-risk-management-business-resilience" element={<MainLayout><Suspense fallback={<PageLoader />}><BlogPost /></Suspense></MainLayout>} />
            <Route path="/blog/mastering-digital-marketing" element={<MainLayout><Suspense fallback={<PageLoader />}><BlogPost /></Suspense></MainLayout>} />
            <Route path="/blog/aeo-crypto-marketing" element={<MainLayout><BlogPostAEOCrypto /></MainLayout>} />
            <Route path="/resources/content-creation-agent" element={<MainLayout><Suspense fallback={<PageLoader />}><ContentCreationAgent /></Suspense></MainLayout>} />
            <Route path="/services/predictive-analytics-agent" element={<MainLayout><Suspense fallback={<PageLoader />}><PredictiveAnalyticsAgent /></Suspense></MainLayout>} />
            <Route path="/services/ai-implementation-consulting" element={<MainLayout><Suspense fallback={<PageLoader />}><AIImplementationConsulting /></Suspense></MainLayout>} />
            <Route path="/services/digital-marketing-strategy" element={<MainLayout><Suspense fallback={<PageLoader />}><DigitalMarketingStrategy /></Suspense></MainLayout>} />
            <Route path="/psychological-digital-marketing-insights" element={<MainLayout><Suspense fallback={<PageLoader />}><PsychologicalDigitalMarketingInsights /></Suspense></MainLayout>} />
            <Route path="/blog/tax-reduction-wealth-building-guide" element={<MainLayout><TaxReductionGuide /></MainLayout>} />
            <Route path="/technical" element={<MainLayout><Suspense fallback={<PageLoader />}><Technical /></Suspense></MainLayout>} />
            <Route path="/evolution" element={<MainLayout><Suspense fallback={<PageLoader />}><Evolution /></Suspense></MainLayout>} />
            <Route path="/regulations" element={<MainLayout><Suspense fallback={<PageLoader />}><Regulations /></Suspense></MainLayout>} />
            <Route path="/sectors" element={<MainLayout><Suspense fallback={<PageLoader />}><Sectors /></Suspense></MainLayout>} />
            <Route path="/future" element={<MainLayout><Suspense fallback={<PageLoader />}><Future /></Suspense></MainLayout>} />
            <Route path="/ai-bias-in-advertising" element={<MainLayout><Suspense fallback={<PageLoader />}><AIBias /></Suspense></MainLayout>} />
            <Route path="/ai-and-digital-marketing" element={<MainLayout><AIAndDigitalMarketing /></MainLayout>} />
            <Route path="/recommender-system-generalization" element={<MainLayout><RecommenderSystemGeneralization /></MainLayout>} />
            <Route path="/influencer-marketing-2025" element={<MainLayout><InfluencerMarketing2025 /></MainLayout>} />
            <Route path="/ai-prompt-templates" element={<MainLayout><AIPromptTemplates /></MainLayout>} />
            <Route path="/information-architecture-prompts" element={<MainLayout><InformationArchitecturePrompts /></MainLayout>} />
            <Route path="/user-experience-prompts" element={<MainLayout><UserExperiencePrompts /></MainLayout>} />
            <Route path="/seo-vs-aeo-vs-geo" element={<MainLayout><SEOvsAEOvsGEO /></MainLayout>} />
            <Route path="/insights" element={<MainLayout><InsightsHub /></MainLayout>} />
            <Route path="/browse-playbooks" element={<MainLayout><div className="pt-16"><BrowsePlaybooks /></div></MainLayout>} />
            <Route path="/blog/digital-marketing-revolution-july-2025" element={<MainLayout><BlogPostDigitalMarketingRevolution2025 /></MainLayout>} />
            <Route path="/blog/ai-revolution-digital-marketing-2025" element={<MainLayout><BlogPostAIRevolution2025 /></MainLayout>} />
            <Route path="/blog/ai-truth-gap" element={<MainLayout><BlogPostAITruthGap /></MainLayout>} />
            <Route path="/blog/marketing-agencies-essential-business-growth-2025" element={<MainLayout><BlogPostMarketingAgencies2025 /></MainLayout>} />
            <Route path="/emotional-marketing-playbook" element={<MainLayout><EmotionalMarketingPlaybook /></MainLayout>} />
            <Route path="/kpis" element={<MainLayout><KPIs /></MainLayout>} />
            <Route path="/recommender-system" element={<MainLayout><RecommenderSystem /></MainLayout>} />
            <Route path="/gtm-strategy-blueprint" element={<MainLayout><GTMStrategyBlueprint /></MainLayout>} />
            
            <Route path="/terms-of-service" element={<MainLayout><TermsOfService /></MainLayout>} />
            <Route path="/privacy-policy" element={<MainLayout><PrivacyPolicy /></MainLayout>} />
            <Route path="/authors" element={<MainLayout><AuthorPage /></MainLayout>} />
            <Route path="/search" element={<MainLayout><SearchPage /></MainLayout>} />
            <Route path="/memphis-digital-marketing-agency" element={<MainLayout><MemphisDigitalMarketing /></MainLayout>} />
            <Route path="/memphis-digital-marketing" element={<MainLayout><MemphisDigitalMarketing /></MainLayout>} />
            <Route path="/collierville-seo-services" element={<MainLayout><ColliervilleSEO /></MainLayout>} />
            <Route path="/germantown-digital-marketing" element={<MainLayout><GermantownDigitalMarketing /></MainLayout>} />
            <Route path="/team-expertise" element={<MainLayout><TeamExpertise /></MainLayout>} />
            <Route path="/complete-aeo-guide-2025" element={<MainLayout><CompleteAEOGuide /></MainLayout>} />
            <Route path="/ai-voice-assistants" element={<MainLayout><Suspense fallback={<PageLoader />}><AIVoiceAssistants /></Suspense></MainLayout>} />
             <Route path="/web-creative" element={<MainLayout><WebCreative /></MainLayout>} />
             <Route path="/digital-marketing" element={<MainLayout><DigitalMarketing /></MainLayout>} />
             <Route path="/contact-for-digital-marketing" element={<MainLayout><ContactForDigitalMarketing /></MainLayout>} />
             <Route path="/saas-ai-agent-packages" element={<MainLayout><SaaSAIAgentPackages /></MainLayout>} />
             <Route path="/digital-frontier-where-crypto-ai-and-marketing-collide" element={<MainLayout><DigitalFrontierCryptoAIMarketing /></MainLayout>} />
             <Route path="/real-estate-demo" element={<MainLayout><RealEstateDemo /></MainLayout>} />
             <Route path="/ai-plans" element={<MainLayout><Suspense fallback={<PageLoader />}><AIPlansLanding /></Suspense></MainLayout>} />
             <Route path="/modern-contact-form" element={<MainLayout><ModernContactForm /></MainLayout>} />
            <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
