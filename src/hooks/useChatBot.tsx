import { useState, useCallback } from 'react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  intent?: string;
}

interface QuickAction {
  id: string;
  label: string;
  message: string;
  intent: string;
}

interface ChatBotState {
  messages: Message[];
  isLoading: boolean;
  quickActions: QuickAction[];
}

export const useChatBot = () => {
  const [state, setState] = useState<ChatBotState>({
    messages: [],
    isLoading: false,
    quickActions: [
      {
        id: 'pricing',
        label: 'Pricing Info',
        message: 'Tell me about your pricing plans',
        intent: 'pricing_inquiry'
      },
      {
        id: 'services',
        label: 'Our Services',
        message: 'What services do you offer?',
        intent: 'service_inquiry'
      },
      {
        id: 'case-studies',
        label: 'Success Stories',
        message: 'Show me some case studies',
        intent: 'case_studies'
      },
      {
        id: 'contact',
        label: 'Get in Touch',
        message: 'I want to schedule a consultation',
        intent: 'contact_request'
      },
      {
        id: 'seo',
        label: 'About SEO',
        message: 'Tell me about your SEO services',
        intent: 'seo_inquiry'
      },
      {
        id: 'aeo',
        label: 'Answer Engine Optimization',
        message: 'What is Answer Engine Optimization?',
        intent: 'aeo_inquiry'
      }
    ]
  });

  const sendMessage = useCallback(async (content: string) => {
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      type: 'user',
      content,
      timestamp: new Date()
    };

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isLoading: true
    }));

    try {
      // Simulate AI response with intent detection
      const response = await generateResponse(content);
      
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        type: 'bot',
        content: response.content,
        timestamp: new Date(),
        intent: response.intent
      };

      setState(prev => ({
        ...prev,
        messages: [...prev.messages, botMessage],
        isLoading: false
      }));
    } catch (error) {
      const errorMessage: Message = {
        id: `bot-error-${Date.now()}`,
        type: 'bot',
        content: "I'm sorry, I'm having trouble responding right now. Please try again or contact our support team.",
        timestamp: new Date(),
        intent: 'error'
      };

      setState(prev => ({
        ...prev,
        messages: [...prev.messages, errorMessage],
        isLoading: false
      }));
    }
  }, []);

  return {
    ...state,
    sendMessage
  };
};

// Simulate AI response generation with intent detection
const generateResponse = async (userMessage: string): Promise<{ content: string; intent: string }> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  const message = userMessage.toLowerCase();
  
  // Intent detection
  if (message.includes('pricing') || message.includes('cost') || message.includes('price')) {
    return {
      intent: 'pricing_inquiry',
      content: `Our pricing is transparent and results-driven. We offer several packages:

• **SEO Starter**: $2,500/month - Perfect for small businesses
• **Growth Package**: $5,000/month - Comprehensive digital marketing
• **Enterprise**: Custom pricing - Full-scale solutions

All packages include strategy development, implementation, and monthly reporting. We've helped 500+ clients achieve 15-30% ROAS improvements.

Would you like to schedule a free consultation to discuss your specific needs?`
    };
  }
  
  if (message.includes('service') || message.includes('what do you do')) {
    return {
      intent: 'service_inquiry',
      content: `We're The Digital Frontier, specializing in AI-powered digital marketing:

🔍 **Search Engine Optimization (SEO)**
🎯 **Answer Engine Optimization (AEO)**
🤖 **AI Marketing Implementation**
📊 **Performance Analytics**
💰 **Conversion Optimization**
🎬 **Content Creation & Strategy**

Our unique approach combines traditional SEO with cutting-edge AEO techniques to dominate both search engines and AI-powered answer systems like ChatGPT and Perplexity.

Which service interests you most?`
    };
  }
  
  if (message.includes('case study') || message.includes('success') || message.includes('results')) {
    return {
      intent: 'case_studies',
      content: `Here are some recent client success stories:

**🏦 Memphis Credit Union**
• 40% increase in organic traffic
• 25% boost in loan applications
• ROI: 320% in 6 months

**💰 Cryptocurrency Platform**
• 25% increase in qualified leads
• 60% improvement in conversion rate
• Featured in top Google results for competitive keywords

**🏢 B2B Software Company**
• 200% growth in organic leads
• 15% reduction in customer acquisition cost
• Dominance in Answer Engine results

Want to see detailed case studies or discuss how we can achieve similar results for your business?`
    };
  }
  
  if (message.includes('contact') || message.includes('consultation') || message.includes('talk')) {
    return {
      intent: 'contact_request',
      content: `I'd love to connect you with our team! Here are the best ways to get started:

📅 **Free Strategy Session**
Book a 30-minute consultation where we'll:
• Analyze your current digital presence
• Identify growth opportunities
• Create a custom action plan

📞 **Contact Information**
• Website: thedigitalfrontier.ai/contact
• Phone: Available during consultation booking
• Email: Connect through our contact form

🚀 **What to Expect**
Our team will review your business goals and provide actionable insights immediately - no sales pressure, just value.

Would you like me to direct you to our calendar booking system?`
    };
  }
  
  if (message.includes('seo') || message.includes('search engine')) {
    return {
      intent: 'seo_inquiry',
      content: `Our SEO approach is data-driven and results-focused:

**🎯 Our SEO Strategy Includes:**
• Comprehensive keyword research & analysis
• Technical SEO optimization
• Content strategy & creation
• Link building & authority development
• Local SEO (for location-based businesses)
• Performance tracking & reporting

**📈 What Makes Us Different:**
• AI-powered optimization techniques
• Integration with Answer Engine Optimization (AEO)
• Real-time performance monitoring
• Transparent reporting & communication

**🏆 Recent Results:**
• Average 40% traffic increase in 6 months
• 85% of clients reach page 1 rankings
• 25% average improvement in conversion rates

Want to see how SEO can transform your business?`
    };
  }
  
  if (message.includes('aeo') || message.includes('answer engine')) {
    return {
      intent: 'aeo_inquiry',
      content: `Answer Engine Optimization (AEO) is the future of search marketing!

**🤖 What is AEO?**
AEO optimizes your content to appear in AI-powered answers from:
• ChatGPT & GPT-based tools
• Google's AI Overviews
• Perplexity AI
• Claude & other AI assistants

**🎯 Why It Matters:**
• 60% of searches now generate AI answers
• AI answers capture significant user attention
• Early adoption gives massive competitive advantage

**⚡ Our AEO Process:**
• Content optimization for AI consumption
• Structured data implementation
• Authority signal enhancement
• Answer snippet optimization

**📊 Results We've Achieved:**
• 3x increase in AI-generated traffic
• 40% more qualified leads
• Dominant presence in AI search results

Ready to dominate the AI-powered search landscape?`
    };
  }
  
  // Default response
  return {
    intent: 'general_inquiry',
    content: `Thanks for reaching out! I'm here to help you learn about The Digital Frontier's AI-powered digital marketing services.

I can help you with:
• Service information and pricing
• Success stories and case studies
• Scheduling consultations
• Technical questions about SEO/AEO
• General business inquiries

What would you like to know more about? Or feel free to ask me anything specific about digital marketing!`
  };
};