
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import ErrorBoundary from '@/components/ErrorBoundary';

// Immediate load for homepage (critical path)
import Index from '@/pages/Index';

// Lazy load all other pages for better bundle splitting
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
const AIAndDigitalMarketing = lazy(() => import('@/pages/AIAndDigitalMarketing'));
const Docs = lazy(() => import('@/pages/Docs'));
const RecommenderSystemGeneralization = lazy(() => import('@/pages/RecommenderSystemGeneralization'));
const AIPromptTemplates = lazy(() => import('@/pages/AIPromptTemplates'));
const InformationArchitecturePrompts = lazy(() => import('@/pages/InformationArchitecturePrompts'));
const UserExperiencePrompts = lazy(() => import('@/pages/UserExperiencePrompts'));
const InsightsHub = lazy(() => import('@/pages/InsightsHub'));
const SEOvsAEOvsGEO = lazy(() => import('@/pages/SEOvsAEOvsGEO'));
const BrowsePlaybooks = lazy(() => import('@/pages/BrowsePlaybooks'));
const DigitalFrontierServices = lazy(() => import('@/pages/DigitalFrontierServices'));
const IADashboard = lazy(() => import('@/pages/IADashboard'));
const TaxReductionGuide = lazy(() => import('./pages/TaxReductionGuide'));
const InfluencerMarketing2025 = lazy(() => import('./pages/InfluencerMarketing2025'));
const BlogPostDigitalMarketingRevolution2025 = lazy(() => import('./pages/BlogPostDigitalMarketingRevolution2025'));
const BlogPostDigitalMarketingRevolution2025Privacy = lazy(() => import('./pages/BlogPostDigitalMarketingRevolution2025Privacy'));
const BlogPostAEOCrypto = lazy(() => import('./pages/BlogPostAEOCrypto'));
const BlogPostAIRevolution2025 = lazy(() => import('./pages/BlogPostAIRevolution2025'));
const BlogPostAITruthGap = lazy(() => import('./pages/BlogPostAITruthGap'));
const BlogPostMarketingAgencies2025 = lazy(() => import('./pages/BlogPostMarketingAgencies2025'));
const BlogPostDeathOfTraditionalAds = lazy(() => import('./pages/BlogPostDeathOfTraditionalAds'));
const EmotionalMarketingPlaybook = lazy(() => import('./pages/EmotionalMarketingPlaybook'));
const KPIs = lazy(() => import('./pages/KPIs'));
const RecommenderSystem = lazy(() => import('./pages/RecommenderSystem'));
const GTMStrategyBlueprint = lazy(() => import('./pages/GTMStrategyBlueprint'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
const MemphisDigitalMarketing = lazy(() => import('./pages/MemphisDigitalMarketing'));
const ColliervilleSEO = lazy(() => import('./pages/ColliervilleSEO'));
const GermantownDigitalMarketing = lazy(() => import('./pages/GermantownDigitalMarketing'));
const TeamExpertise = lazy(() => import('./pages/TeamExpertise'));
const CompleteAEOGuide = lazy(() => import('./pages/CompleteAEOGuide'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const ModernContactForm = lazy(() => import('@/pages/ModernContactForm'));
const WebCreative = lazy(() => import('./pages/WebCreative'));
const DigitalMarketing = lazy(() => import('./pages/DigitalMarketing'));
const ContactForDigitalMarketing = lazy(() => import('./pages/ContactForDigitalMarketing'));
const SaaSAIAgentPackages = lazy(() => import('./pages/SaaSAIAgentPackages'));
const DigitalFrontierCryptoAIMarketing = lazy(() => import('./pages/DigitalFrontierCryptoAIMarketing'));
const RealEstateDemo = lazy(() => import('./pages/RealEstateDemo'));
const BlogPostBlockchainAIRealEstate = lazy(() => import('./pages/BlogPostBlockchainAIRealEstate'));

// Loading component for lazy routes
const PageLoader = () => (
  <div className="min-h-screen bg-slate-950 flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
  </div>
);

// Lazy page wrapper helper
const LP = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<PageLoader />}>{children}</Suspense>
);

// Create a query client instance
const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary>
          <Toaster />
          <Router>
          <Routes>
            <Route path="/" element={<MainLayout><Index /></MainLayout>} />
            <Route path="/ad-funnel-blueprint" element={<MainLayout><LP><AdFunnelBlueprint /></LP></MainLayout>} />
            <Route path="/generative-engine-optimization" element={<MainLayout><LP><GenerativeEngineOptimization /></LP></MainLayout>} />
            <Route path="/answer-engine-optimization" element={<MainLayout><LP><AnswerEngineOptimization /></LP></MainLayout>} />
            <Route path="/search-engine-optimization" element={<MainLayout><LP><SearchEngineOptimization /></LP></MainLayout>} />
            <Route path="/crypto-marketing" element={<MainLayout><LP><CryptoMarketing /></LP></MainLayout>} />
            <Route path="/about-us" element={<MainLayout><LP><AboutUs /></LP></MainLayout>} />
            <Route path="/contact" element={<MainLayout><LP><Contact /></LP></MainLayout>} />
            <Route path="/docs" element={<MainLayout><LP><Docs /></LP></MainLayout>} />
            <Route path="/digital-frontier-services" element={<MainLayout><LP><DigitalFrontierServices /></LP></MainLayout>} />
            <Route path="/pricing" element={<MainLayout><LP><Pricing /></LP></MainLayout>} />
            <Route path="/faq" element={<MainLayout><LP><FAQ /></LP></MainLayout>} />
            <Route path="/newsletter" element={<MainLayout><LP><Newsletter /></LP></MainLayout>} />
            <Route path="/site-map" element={<MainLayout><LP><SiteMap /></LP></MainLayout>} />
            <Route path="/sitemap" element={<MainLayout><LP><SiteMap /></LP></MainLayout>} />
            <Route path="/blog" element={<MainLayout><LP><Blog /></LP></MainLayout>} />
            <Route path="/blog/ai-driven-risk-management-business-resilience" element={<MainLayout><LP><BlogPost /></LP></MainLayout>} />
            <Route path="/blog/mastering-digital-marketing" element={<MainLayout><LP><BlogPost /></LP></MainLayout>} />
            <Route path="/blog/aeo-crypto-marketing" element={<MainLayout><LP><BlogPostAEOCrypto /></LP></MainLayout>} />
            <Route path="/resources/content-creation-agent" element={<MainLayout><LP><ContentCreationAgent /></LP></MainLayout>} />
            <Route path="/services/predictive-analytics-agent" element={<MainLayout><LP><PredictiveAnalyticsAgent /></LP></MainLayout>} />
            <Route path="/services/ai-implementation-consulting" element={<MainLayout><LP><AIImplementationConsulting /></LP></MainLayout>} />
            <Route path="/services/digital-marketing-strategy" element={<MainLayout><LP><DigitalMarketingStrategy /></LP></MainLayout>} />
            <Route path="/psychological-digital-marketing-insights" element={<MainLayout><LP><PsychologicalDigitalMarketingInsights /></LP></MainLayout>} />
            <Route path="/blog/tax-reduction-wealth-building-guide" element={<MainLayout><LP><TaxReductionGuide /></LP></MainLayout>} />
            <Route path="/technical" element={<MainLayout><LP><Technical /></LP></MainLayout>} />
            <Route path="/evolution" element={<MainLayout><LP><Evolution /></LP></MainLayout>} />
            <Route path="/regulations" element={<MainLayout><LP><Regulations /></LP></MainLayout>} />
            <Route path="/sectors" element={<MainLayout><LP><Sectors /></LP></MainLayout>} />
            <Route path="/future" element={<MainLayout><LP><Future /></LP></MainLayout>} />
            <Route path="/ai-bias-in-advertising" element={<MainLayout><LP><AIBias /></LP></MainLayout>} />
            <Route path="/ai-and-digital-marketing" element={<MainLayout><LP><AIAndDigitalMarketing /></LP></MainLayout>} />
            <Route path="/recommender-system-generalization" element={<MainLayout><LP><RecommenderSystemGeneralization /></LP></MainLayout>} />
            <Route path="/influencer-marketing-2025" element={<MainLayout><LP><InfluencerMarketing2025 /></LP></MainLayout>} />
            <Route path="/ai-prompt-templates" element={<MainLayout><LP><AIPromptTemplates /></LP></MainLayout>} />
            <Route path="/information-architecture-prompts" element={<MainLayout><LP><InformationArchitecturePrompts /></LP></MainLayout>} />
            <Route path="/user-experience-prompts" element={<MainLayout><LP><UserExperiencePrompts /></LP></MainLayout>} />
            <Route path="/seo-vs-aeo-vs-geo" element={<MainLayout><LP><SEOvsAEOvsGEO /></LP></MainLayout>} />
            <Route path="/insights" element={<MainLayout><LP><InsightsHub /></LP></MainLayout>} />
            <Route path="/browse-playbooks" element={<MainLayout><div className="pt-16"><LP><BrowsePlaybooks /></LP></div></MainLayout>} />
            <Route path="/blog/digital-marketing-revolution-july-2025" element={<MainLayout><LP><BlogPostDigitalMarketingRevolution2025 /></LP></MainLayout>} />
            <Route path="/blog/digital-marketing-revolution-2025-privacy" element={<MainLayout><LP><BlogPostDigitalMarketingRevolution2025Privacy /></LP></MainLayout>} />
            <Route path="/blog/ai-revolution-digital-marketing-2025" element={<MainLayout><LP><BlogPostAIRevolution2025 /></LP></MainLayout>} />
            <Route path="/blog/ai-truth-gap" element={<MainLayout><LP><BlogPostAITruthGap /></LP></MainLayout>} />
            <Route path="/blog/marketing-agencies-essential-business-growth-2025" element={<MainLayout><LP><BlogPostMarketingAgencies2025 /></LP></MainLayout>} />
            <Route path="/blog/death-of-traditional-ads" element={<MainLayout><LP><BlogPostDeathOfTraditionalAds /></LP></MainLayout>} />
            <Route path="/emotional-marketing-playbook" element={<MainLayout><LP><EmotionalMarketingPlaybook /></LP></MainLayout>} />
            <Route path="/kpis" element={<MainLayout><LP><KPIs /></LP></MainLayout>} />
            <Route path="/recommender-system" element={<MainLayout><LP><RecommenderSystem /></LP></MainLayout>} />
            <Route path="/gtm-strategy-blueprint" element={<MainLayout><LP><GTMStrategyBlueprint /></LP></MainLayout>} />
            <Route path="/terms-of-service" element={<MainLayout><LP><TermsOfService /></LP></MainLayout>} />
            <Route path="/privacy-policy" element={<MainLayout><LP><PrivacyPolicy /></LP></MainLayout>} />
            <Route path="/authors" element={<MainLayout><LP><AboutUs /></LP></MainLayout>} />
            <Route path="/ia-dashboard" element={<MainLayout><LP><IADashboard /></LP></MainLayout>} />
            <Route path="/search" element={<MainLayout><LP><SearchPage /></LP></MainLayout>} />
            <Route path="/memphis-digital-marketing-agency" element={<MainLayout><LP><MemphisDigitalMarketing /></LP></MainLayout>} />
            <Route path="/memphis-digital-marketing" element={<MainLayout><LP><MemphisDigitalMarketing /></LP></MainLayout>} />
            <Route path="/collierville-seo-services" element={<MainLayout><LP><ColliervilleSEO /></LP></MainLayout>} />
            <Route path="/germantown-digital-marketing" element={<MainLayout><LP><GermantownDigitalMarketing /></LP></MainLayout>} />
            <Route path="/team-expertise" element={<MainLayout><LP><TeamExpertise /></LP></MainLayout>} />
            <Route path="/complete-aeo-guide-2025" element={<MainLayout><LP><CompleteAEOGuide /></LP></MainLayout>} />
            <Route path="/ai-voice-assistants" element={<MainLayout><LP><AIVoiceAssistants /></LP></MainLayout>} />
            <Route path="/web-creative" element={<MainLayout><LP><WebCreative /></LP></MainLayout>} />
            <Route path="/digital-marketing" element={<MainLayout><LP><DigitalMarketing /></LP></MainLayout>} />
            <Route path="/contact-for-digital-marketing" element={<MainLayout><LP><ContactForDigitalMarketing /></LP></MainLayout>} />
            <Route path="/saas-ai-agent-packages" element={<MainLayout><LP><SaaSAIAgentPackages /></LP></MainLayout>} />
            <Route path="/digital-frontier-where-crypto-ai-and-marketing-collide" element={<MainLayout><LP><DigitalFrontierCryptoAIMarketing /></LP></MainLayout>} />
            <Route path="/real-estate-demo" element={<MainLayout><LP><RealEstateDemo /></LP></MainLayout>} />
            <Route path="/blog/blockchain-ai-real-estate-revolution" element={<MainLayout><LP><BlogPostBlockchainAIRealEstate /></LP></MainLayout>} />
            <Route path="/ai-plans" element={<MainLayout><LP><AIPlansLanding /></LP></MainLayout>} />
            <Route path="/modern-contact-form" element={<MainLayout><LP><ModernContactForm /></LP></MainLayout>} />
            <Route path="*" element={<MainLayout><LP><NotFound /></LP></MainLayout>} />
          </Routes>
        </Router>
        </ErrorBoundary>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
