import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  HelpCircle, 
  X, 
  ChevronRight, 
  Search, 
  Book, 
  Calculator,
  Navigation,
  Phone,
  Lightbulb,
  ArrowRight
} from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface HelpItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  action: () => void;
  category: 'navigation' | 'information' | 'tools' | 'contact';
}

interface InteractiveHelpProps {
  isOpen: boolean;
  onToggle: () => void;
  onOpenChat?: () => void;
}

const InteractiveHelp: React.FC<InteractiveHelpProps> = ({ 
  isOpen, 
  onToggle, 
  onOpenChat 
}) => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [contextualHelp, setContextualHelp] = useState<HelpItem[]>([]);

  const categories = [
    { id: 'navigation', label: 'Navigation', icon: <Navigation className="h-4 w-4" /> },
    { id: 'information', label: 'Information', icon: <Book className="h-4 w-4" /> },
    { id: 'tools', label: 'Tools', icon: <Calculator className="h-4 w-4" /> },
    { id: 'contact', label: 'Contact', icon: <Phone className="h-4 w-4" /> },
  ];

  const allHelpItems: HelpItem[] = [
    {
      id: 'find-services',
      title: 'Find Our Services',
      description: 'Browse our digital marketing services',
      icon: <Search className="h-4 w-4" />,
      category: 'navigation',
      action: () => window.location.href = '/digital-frontier-services'
    },
    {
      id: 'pricing-info',
      title: 'View Pricing',
      description: 'See our transparent pricing structure',
      icon: <Calculator className="h-4 w-4" />,
      category: 'information',
      action: () => window.location.href = '/pricing'
    },
    {
      id: 'case-studies',
      title: 'Success Stories',
      description: 'Read our client case studies',
      icon: <Book className="h-4 w-4" />,
      category: 'information',
      action: () => window.location.href = '/blog'
    },
    {
      id: 'roi-calculator',
      title: 'ROI Calculator',
      description: 'Calculate your potential returns',
      icon: <Calculator className="h-4 w-4" />,
      category: 'tools',
      action: () => alert('ROI Calculator coming soon!')
    },
    {
      id: 'contact-sales',
      title: 'Contact Sales',
      description: 'Get in touch with our team',
      icon: <Phone className="h-4 w-4" />,
      category: 'contact',
      action: () => window.location.href = '/contact'
    },
    {
      id: 'ai-prompts',
      title: 'AI Prompt Library',
      description: 'Access our marketing prompts',
      icon: <Lightbulb className="h-4 w-4" />,
      category: 'tools',
      action: () => window.location.href = '/ai-prompt-templates'
    }
  ];

  useEffect(() => {
    // Generate contextual help based on current page
    const getContextualHelp = () => {
      const path = location.pathname;
      const suggestions: HelpItem[] = [];

      if (path === '/') {
        suggestions.push(
          allHelpItems.find(item => item.id === 'find-services')!,
          allHelpItems.find(item => item.id === 'pricing-info')!,
          allHelpItems.find(item => item.id === 'contact-sales')!
        );
      } else if (path.includes('pricing')) {
        suggestions.push(
          allHelpItems.find(item => item.id === 'roi-calculator')!,
          allHelpItems.find(item => item.id === 'contact-sales')!,
          allHelpItems.find(item => item.id === 'case-studies')!
        );
      } else if (path.includes('blog')) {
        suggestions.push(
          allHelpItems.find(item => item.id === 'ai-prompts')!,
          allHelpItems.find(item => item.id === 'find-services')!,
          allHelpItems.find(item => item.id === 'contact-sales')!
        );
      } else {
        suggestions.push(
          allHelpItems.find(item => item.id === 'contact-sales')!,
          allHelpItems.find(item => item.id === 'case-studies')!,
          allHelpItems.find(item => item.id === 'pricing-info')!
        );
      }

      setContextualHelp(suggestions.filter(Boolean));
    };

    getContextualHelp();
  }, [location.pathname]);

  const filteredItems = selectedCategory 
    ? allHelpItems.filter(item => item.category === selectedCategory)
    : allHelpItems;

  if (!isOpen) {
    return (
      <Button
        onClick={onToggle}
        variant="outline"
        size="icon"
        className="fixed bottom-6 left-6 h-12 w-12 rounded-full bg-card border-border shadow-lg z-40 hover:bg-primary/10"
      >
        <HelpCircle className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-6 left-6 w-80 max-h-[70vh] bg-card border-border shadow-2xl z-40 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <HelpCircle className="h-5 w-5 text-primary" />
          <span className="font-medium text-foreground">Interactive Help</span>
        </div>
        <Button variant="ghost" size="icon" onClick={onToggle}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Contextual Suggestions */}
      {contextualHelp.length > 0 && !selectedCategory && (
        <div className="p-4 border-b border-border">
          <h3 className="text-sm font-medium text-foreground mb-3">
            Suggested for this page:
          </h3>
          <div className="space-y-2">
            {contextualHelp.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className="w-full justify-start h-auto p-3 text-left"
                onClick={item.action}
              >
                <div className="flex items-center gap-3">
                  <div className="text-primary">{item.icon}</div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{item.title}</div>
                    <div className="text-xs text-muted-foreground">{item.description}</div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Categories */}
      <div className="p-4">
        {!selectedCategory ? (
          <>
            <h3 className="text-sm font-medium text-foreground mb-3">Browse by category:</h3>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant="outline"
                  className="h-auto p-3 flex flex-col items-center gap-2"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.icon}
                  <span className="text-xs">{category.label}</span>
                </Button>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center gap-2 mb-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedCategory(null)}
              >
                ← Back
              </Button>
              <h3 className="text-sm font-medium text-foreground">
                {categories.find(c => c.id === selectedCategory)?.label}
              </h3>
            </div>
            <div className="space-y-2 max-h-80 overflow-y-auto">
              {filteredItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  className="w-full justify-start h-auto p-3 text-left"
                  onClick={item.action}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-primary">{item.icon}</div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{item.title}</div>
                      <div className="text-xs text-muted-foreground">{item.description}</div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </Button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <Separator />
      <div className="p-4">
        <p className="text-xs text-muted-foreground mb-2">
          Need personalized help?
        </p>
        <Button
          onClick={onOpenChat}
          className="w-full"
          size="sm"
        >
          Chat with AI Assistant
        </Button>
      </div>
    </Card>
  );
};

export default InteractiveHelp;