-- Create playbooks table to store all marketing playbooks
CREATE TABLE public.playbooks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  read_time TEXT NOT NULL,
  image_url TEXT,
  slug TEXT NOT NULL UNIQUE,
  content TEXT,
  featured BOOLEAN DEFAULT false,
  tags TEXT[] DEFAULT '{}',
  author TEXT DEFAULT 'Digital Frontier Team',
  published_date TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_date TIMESTAMP WITH TIME ZONE DEFAULT now(),
  view_count INTEGER DEFAULT 0,
  difficulty_level TEXT CHECK (difficulty_level IN ('Beginner', 'Intermediate', 'Advanced')) DEFAULT 'Intermediate',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create categories table for better organization
CREATE TABLE public.playbook_categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  icon_name TEXT,
  color TEXT DEFAULT '#3B82F6',
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.playbooks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.playbook_categories ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (since these are public playbooks)
CREATE POLICY "Playbooks are publicly readable" 
ON public.playbooks 
FOR SELECT 
USING (true);

CREATE POLICY "Categories are publicly readable" 
ON public.playbook_categories 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_playbooks_updated_at
BEFORE UPDATE ON public.playbooks
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert categories
INSERT INTO public.playbook_categories (name, description, icon_name, color, sort_order) VALUES
('Answer Engine Optimization', 'Master AEO strategies for AI-powered search engines', 'target', '#3B82F6', 1),
('AI Advertising', 'Advanced AI-powered advertising and funnel strategies', 'zap', '#8B5CF6', 2),
('Predictive Analytics', 'Data science and machine learning for marketing', 'trending-up', '#10B981', 3),
('Content Strategy', 'AI-enhanced content creation and optimization', 'book-open', '#F59E0B', 4),
('Marketing Automation', 'Intelligent automation and workflow optimization', 'brain', '#EF4444', 5),
('Lead Generation', 'AI-powered lead scoring and generation techniques', 'users', '#06B6D4', 6);

-- Insert existing playbooks
INSERT INTO public.playbooks (title, description, category, read_time, image_url, slug, featured, tags, difficulty_level) VALUES
('The Complete AEO Playbook: Dominating AI Search Results', 'Master Answer Engine Optimization with our 47-page comprehensive guide. Learn to rank #1 in ChatGPT, Claude, and voice search results.', 'Answer Engine Optimization', '12 min read', '/lovable-uploads/783ff8d4-b039-4c59-bf19-1ecdb0b9fb9a.png', 'complete-aeo-guide', true, '{"AEO", "AI Search", "Voice Search", "Featured Snippets"}', 'Intermediate'),

('Stop Losing Traffic to AI Search: Advanced GEO Strategies', 'The complete guide to Generative Engine Optimization. Capture traffic from ChatGPT, Claude, and other AI search platforms before your competitors do.', 'Answer Engine Optimization', '18 min read', '/lovable-uploads/fc7766a1-d8c1-4e01-b409-72d965448fd0.png', 'geo-advanced-strategies', true, '{"GEO", "AI Search", "Traffic Recovery", "Generative Search"}', 'Advanced'),

('Predictive Analytics for Marketing: The Executive Guide', 'Transform your marketing data into competitive advantage with machine learning models that predict customer behavior and campaign ROI.', 'Predictive Analytics', '15 min read', '/lovable-uploads/4b409906-2e02-4aea-b041-c9e725fdae78.png', 'predictive-analytics', true, '{"Predictive Analytics", "Machine Learning", "ROI", "Data Science"}', 'Advanced'),

('ChatGPT Marketing Prompts That Convert', '50+ tested prompts for content creation, ad copy, and customer research', 'AI Advertising', '8 min read', '/lovable-uploads/4ccc7a08-05c5-4500-9fba-149c0ec813cd.png', 'chatgpt-prompts', false, '{"ChatGPT", "AI Prompts", "Content Marketing"}', 'Beginner'),

('Voice Search Optimization for B2B', 'Position your brand for the next wave of search behavior', 'Answer Engine Optimization', '10 min read', '/lovable-uploads/183a006c-d7ab-43aa-b457-8d5284912ab6.png', 'voice-search-b2b', false, '{"Voice Search", "B2B SEO", "Future Marketing"}', 'Intermediate'),

('AI-Powered Lead Scoring Models', 'Build machine learning models that identify your best prospects', 'Lead Generation', '14 min read', '/lovable-uploads/ac9d962e-7efe-4768-9ec0-774cd30f2d5d.png', 'ai-lead-scoring', false, '{"Lead Scoring", "AI Models", "Sales Automation"}', 'Advanced'),

('Content Clusters for AI Search', 'Structure your content to dominate AI-powered search engines', 'Content Strategy', '11 min read', '/lovable-uploads/2486421b-6ca3-4c32-b686-a49ac0da182b.png', 'ai-content-clusters', false, '{"Content Clusters", "AI Search", "Topic Authority"}', 'Intermediate'),

('Automated Email Sequences with AI', 'Create hyper-personalized email campaigns that scale', 'Marketing Automation', '9 min read', '/lovable-uploads/998924f0-2fc2-41d7-98d1-5b927c64c09e.png', 'ai-email-automation', false, '{"Email Automation", "Personalization", "AI Writing"}', 'Intermediate'),

('ROI Measurement for AI Marketing', 'Track and prove the value of your AI marketing investments', 'Predictive Analytics', '13 min read', '/lovable-uploads/914a27cb-e153-438e-8c3b-3937b1598283.png', 'ai-marketing-roi', false, '{"ROI Measurement", "Marketing Analytics", "AI Attribution"}', 'Advanced');

-- Create indexes for better performance
CREATE INDEX idx_playbooks_category ON public.playbooks(category);
CREATE INDEX idx_playbooks_featured ON public.playbooks(featured);
CREATE INDEX idx_playbooks_slug ON public.playbooks(slug);
CREATE INDEX idx_playbooks_published_date ON public.playbooks(published_date DESC);