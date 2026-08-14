import React, { Suspense, lazy, type ComponentType } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import ErrorBoundary from '@/components/ErrorBoundary';
import {
  MARKETING_PAGES,
  MARKETING_REDIRECTS,
} from '@/content/marketingPages';

// Immediate load for the homepage critical path.
import Index from '@/pages/Index';

// Lazy-load every non-home page to keep the initial bundle focused.
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
const BlogPostAICitationCrisis = lazy(() => import('./pages/BlogPostAICitationCrisis'));
const BlogPostProtectingFromAIMisinformation = lazy(() => import('./pages/BlogPostProtectingFromAIMisinformation'));
const BlogPostAIAccountabilityFuture = lazy(() => import('./pages/BlogPostAIAccountabilityFuture'));
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

const PageLoader = () => (
  <div className="min-h-screen bg-slate-950 flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
  </div>
);

const LP = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<PageLoader />}>{children}</Suspense>
);

const pageComponents: Record<string, ComponentType> = {
  Index,
  AdFunnelBlueprint,
  GenerativeEngineOptimization,
  AnswerEngineOptimization,
  SearchEngineOptimization,
  CryptoMarketing,
  AboutUs,
  Contact,
  Pricing,
  FAQ,
  Newsletter,
  SiteMap,
  AIPlansLanding,
  Blog,
  BlogPost,
  ContentCreationAgent,
  PredictiveAnalyticsAgent,
  AIImplementationConsulting,
  AIVoiceAssistants,
  DigitalMarketingStrategy,
  PsychologicalDigitalMarketingInsights,
  Technical,
  Evolution,
  Regulations,
  Sectors,
  Future,
  AIBias,
  AIAndDigitalMarketing,
  Docs,
  RecommenderSystemGeneralization,
  AIPromptTemplates,
  InformationArchitecturePrompts,
  UserExperiencePrompts,
  InsightsHub,
  SEOvsAEOvsGEO,
  BrowsePlaybooks,
  DigitalFrontierServices,
  IADashboard,
  TaxReductionGuide,
  InfluencerMarketing2025,
  BlogPostDigitalMarketingRevolution2025,
  BlogPostDigitalMarketingRevolution2025Privacy,
  BlogPostAEOCrypto,
  BlogPostAIRevolution2025,
  BlogPostAITruthGap,
  BlogPostAICitationCrisis,
  BlogPostProtectingFromAIMisinformation,
  BlogPostAIAccountabilityFuture,
  BlogPostMarketingAgencies2025,
  BlogPostDeathOfTraditionalAds,
  EmotionalMarketingPlaybook,
  KPIs,
  RecommenderSystem,
  GTMStrategyBlueprint,
  TermsOfService,
  PrivacyPolicy,
  SearchPage,
  MemphisDigitalMarketing,
  ColliervilleSEO,
  GermantownDigitalMarketing,
  TeamExpertise,
  CompleteAEOGuide,
  ModernContactForm,
  WebCreative,
  DigitalMarketing,
  ContactForDigitalMarketing,
  SaaSAIAgentPackages,
  DigitalFrontierCryptoAIMarketing,
  RealEstateDemo,
  BlogPostBlockchainAIRealEstate,
};

function renderMarketingPage(componentName: string) {
  const Component = pageComponents[componentName];

  if (!Component) {
    throw new Error(`Missing route component mapping for ${componentName}`);
  }

  const page = componentName === 'Index' ? <Component /> : <LP><Component /></LP>;

  if (componentName === 'BlogPostAIAccountabilityFuture') {
    return page;
  }

  const content = componentName === 'BrowsePlaybooks'
    ? <div className="pt-16">{page}</div>
    : page;

  return <MainLayout>{content}</MainLayout>;
}

const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary>
          <Toaster />
          <Router>
            <Routes>
              {MARKETING_PAGES.map((page) => (
                <Route
                  key={page.path}
                  path={page.path}
                  element={renderMarketingPage(page.component)}
                />
              ))}
              {MARKETING_REDIRECTS.map((redirect) => (
                <Route
                  key={redirect.from}
                  path={redirect.from}
                  element={<Navigate to={redirect.to} replace />}
                />
              ))}
              <Route path="*" element={<MainLayout><LP><NotFound /></LP></MainLayout>} />
            </Routes>
          </Router>
        </ErrorBoundary>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
