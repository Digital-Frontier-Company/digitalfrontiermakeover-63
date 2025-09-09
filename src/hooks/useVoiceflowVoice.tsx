import { useState, useCallback, useRef, useEffect } from 'react';

interface VoiceflowVoiceState {
  isConnected: boolean;
  isLoading: boolean;
  lastResponse: string;
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

export const useVoiceflowVoice = () => {
  const [state, setState] = useState<VoiceflowVoiceState>({
    isConnected: false,
    isLoading: false,
    lastResponse: ''
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

  const sendVoiceMessage = useCallback(async (transcript: string): Promise<string> => {
    setState(prev => ({ ...prev, isLoading: true }));

    try {
      await initializeVoiceflow();
      
      const response = await window.voiceflow.chat.interact({
        type: 'text',
        payload: transcript
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

      setState(prev => ({
        ...prev,
        lastResponse: botContent,
        isLoading: false
      }));

      return botContent;
    } catch (error) {
      console.error('Voiceflow voice interaction error:', error);
      
      const errorMessage = "I'm sorry, I'm having trouble responding right now. Please try again.";
      
      setState(prev => ({
        ...prev,
        lastResponse: errorMessage,
        isLoading: false
      }));

      return errorMessage;
    }
  }, [initializeVoiceflow]);

  // Initialize on mount
  useEffect(() => {
    initializeVoiceflow().catch(console.error);
  }, [initializeVoiceflow]);

  return {
    ...state,
    sendVoiceMessage
  };
};