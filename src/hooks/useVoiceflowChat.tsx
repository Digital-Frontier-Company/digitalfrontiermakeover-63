import { useState, useCallback, useRef, useEffect } from 'react';

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

interface VoiceflowChatState {
  messages: Message[];
  isLoading: boolean;
  quickActions: QuickAction[];
  isConnected: boolean;
}

declare global {
  interface Window {
    voiceflow: {
      chat: {
        load: (config: any) => void;
        interact: (request: any) => Promise<any>;
        open: () => void;
        close: () => void;
      };
    };
  }
}

export const useVoiceflowChat = () => {
  const [state, setState] = useState<VoiceflowChatState>({
    messages: [],
    isLoading: false,
    isConnected: false,
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

  const initPromise = useRef<Promise<void>>();

  const initializeVoiceflow = useCallback(async () => {
    if (initPromise.current) return initPromise.current;
    
    initPromise.current = new Promise((resolve, reject) => {
      if (window.voiceflow?.chat) {
        setState(prev => ({ ...prev, isConnected: true }));
        resolve();
        return;
      }

      // Load Voiceflow script
      const script = document.createElement('script');
      script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
      script.type = 'text/javascript';
      script.onload = () => {
        if (window.voiceflow?.chat) {
          try {
            window.voiceflow.chat.load({
              verify: { projectID: '6719217d6b47c6d69c6218a0' },
              url: 'https://general-runtime.voiceflow.com',
              versionID: 'production',
              voice: {
                url: "https://runtime-api.voiceflow.com"
              }
            });
            setState(prev => ({ ...prev, isConnected: true }));
            resolve();
          } catch (error) {
            console.error('Failed to initialize Voiceflow:', error);
            reject(error);
          }
        } else {
          reject(new Error('Voiceflow not available'));
        }
      };
      script.onerror = () => reject(new Error('Failed to load Voiceflow script'));
      document.head.appendChild(script);
    });

    return initPromise.current;
  }, []);

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
      await initializeVoiceflow();
      
      const response = await window.voiceflow.chat.interact({
        type: 'text',
        payload: content
      });

      let botContent = '';
      if (response && response.length > 0) {
        // Extract text content from Voiceflow response
        const textResponses = response.filter((item: any) => item.type === 'text');
        botContent = textResponses.map((item: any) => item.payload?.message || '').join(' ');
      }

      if (!botContent) {
        botContent = "I'm here to help! How can I assist you with your digital marketing needs?";
      }

      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        type: 'bot',
        content: botContent,
        timestamp: new Date()
      };

      setState(prev => ({
        ...prev,
        messages: [...prev.messages, botMessage],
        isLoading: false
      }));
    } catch (error) {
      console.error('Voiceflow interaction error:', error);
      
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
  }, [initializeVoiceflow]);

  // Initialize on mount
  useEffect(() => {
    initializeVoiceflow().catch(console.error);
  }, [initializeVoiceflow]);

  return {
    ...state,
    sendMessage
  };
};