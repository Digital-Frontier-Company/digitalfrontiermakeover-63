-- Add more comprehensive playbooks to make the browse section richer
INSERT INTO public.playbooks (title, description, category, read_time, image_url, slug, featured, tags, difficulty_level) VALUES

-- Marketing Automation playbooks
('Complete Marketing Automation Setup Guide', 'Step-by-step guide to building intelligent marketing funnels that convert prospects automatically while you sleep.', 'Marketing Automation', '16 min read', '/lovable-uploads/dd9a50a2-11ff-45a3-bdef-97597bd967b7.png', 'complete-marketing-automation', false, '{"Marketing Automation", "Funnels", "Lead Nurturing", "Conversion"}', 'Advanced'),

('AI-Powered Customer Journey Mapping', 'Use machine learning to understand and optimize every touchpoint in your customer journey for maximum impact.', 'Marketing Automation', '12 min read', '/lovable-uploads/006c1b20-0f5a-4e81-804c-dac4a28eb855.png', 'ai-customer-journey-mapping', false, '{"Customer Journey", "AI Analytics", "Touchpoint Optimization"}', 'Intermediate'),

-- Content Strategy playbooks
('Content Personalization at Scale', 'Master dynamic content that adapts to each visitor using AI-driven personalization engines.', 'Content Strategy', '14 min read', '/lovable-uploads/966b64a4-e3f7-488f-b15e-0d2d8e61d442.png', 'content-personalization-scale', false, '{"Personalization", "Dynamic Content", "AI Content"}', 'Advanced'),

('The Future of SEO: Entity-Based Optimization', 'How to optimize for entities rather than keywords to dominate search in the AI era.', 'Content Strategy', '10 min read', '/lovable-uploads/340d9d60-dac0-453f-84c9-a89c31fd99bb.png', 'entity-based-optimization', false, '{"Entity SEO", "Knowledge Graph", "Semantic Search"}', 'Intermediate'),

-- AI Advertising playbooks
('Meta Ads AI Optimization Mastery', 'Advanced strategies for leveraging Meta''s AI advertising tools to dramatically improve ROAS.', 'AI Advertising', '13 min read', '/lovable-uploads/26332eef-720e-4530-b495-da611117dff2.png', 'meta-ads-ai-optimization', false, '{"Meta Ads", "Facebook Advertising", "ROAS Optimization"}', 'Advanced'),

('Google Ads Performance Max Deep Dive', 'Complete guide to dominating with Google''s AI-powered Performance Max campaigns.', 'AI Advertising', '15 min read', '/lovable-uploads/2f2b5241-ae39-428b-a2cb-cc6b0a71a4e9.png', 'google-ads-performance-max', false, '{"Google Ads", "Performance Max", "Campaign Optimization"}', 'Intermediate'),

('Cross-Platform Attribution Modeling', 'Build sophisticated attribution models that track customer journeys across all digital touchpoints.', 'AI Advertising', '18 min read', '/lovable-uploads/34b9c76a-de0d-438b-aa2c-82b92aac2a9f.png', 'cross-platform-attribution', false, '{"Attribution", "Multi-Channel", "Analytics"}', 'Advanced'),

-- Lead Generation playbooks
('LinkedIn Lead Generation Automation', 'Systematically generate high-quality B2B leads using LinkedIn''s professional network and automation tools.', 'Lead Generation', '11 min read', '/lovable-uploads/36f6d997-5da6-4119-aaba-d7390e04fde2.png', 'linkedin-lead-generation', false, '{"LinkedIn", "B2B Leads", "Social Selling"}', 'Intermediate'),

('Webinar Funnel Optimization Blueprint', 'Convert prospects at scale using high-converting webinar funnels backed by behavioral psychology.', 'Lead Generation', '17 min read', '/lovable-uploads/3b21fa11-2a1d-4153-98dd-07178e0da505.png', 'webinar-funnel-optimization', false, '{"Webinars", "Funnel Optimization", "Conversion Psychology"}', 'Advanced'),

-- Answer Engine Optimization
('Local AEO for Multi-Location Businesses', 'Dominate local AI search results across multiple locations with advanced AEO strategies.', 'Answer Engine Optimization', '9 min read', '/lovable-uploads/3b45382c-8b9c-4724-b6ed-845a2bf3de3a.png', 'local-aeo-multi-location', false, '{"Local AEO", "Multi-Location", "Local Search"}', 'Intermediate'),

('AEO for E-commerce: Product Visibility', 'Get your products featured in AI shopping recommendations and voice commerce results.', 'Answer Engine Optimization', '12 min read', '/lovable-uploads/3d7bf124-081a-4959-9a39-759c1e0dc150.png', 'aeo-ecommerce-products', false, '{"E-commerce AEO", "Product SEO", "Voice Commerce"}', 'Intermediate'),

-- Predictive Analytics
('Customer Lifetime Value Prediction Models', 'Build ML models that accurately predict CLV to optimize acquisition and retention strategies.', 'Predictive Analytics', '20 min read', '/lovable-uploads/3da330dd-37a1-4390-8477-67fa19da39c3.png', 'customer-lifetime-value-models', false, '{"CLV Prediction", "Customer Analytics", "ML Models"}', 'Advanced'),

('Churn Prevention with AI', 'Identify at-risk customers before they leave and automatically trigger retention campaigns.', 'Predictive Analytics', '14 min read', '/lovable-uploads/43aabc4a-e0b6-4c96-a4ff-115865e74fbb.png', 'churn-prevention-ai', false, '{"Churn Prevention", "Customer Retention", "Predictive Models"}', 'Advanced');

-- Update view counts for some existing playbooks to show variety
UPDATE public.playbooks SET view_count = 1247 WHERE slug = 'complete-aeo-guide';
UPDATE public.playbooks SET view_count = 892 WHERE slug = 'geo-advanced-strategies';
UPDATE public.playbooks SET view_count = 1034 WHERE slug = 'predictive-analytics';
UPDATE public.playbooks SET view_count = 756 WHERE slug = 'chatgpt-prompts';
UPDATE public.playbooks SET view_count = 623 WHERE slug = 'ai-lead-scoring';
UPDATE public.playbooks SET view_count = 445 WHERE slug = 'voice-search-b2b';