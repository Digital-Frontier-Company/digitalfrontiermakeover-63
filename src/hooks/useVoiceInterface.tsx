import { useState, useEffect, useCallback, useRef } from 'react';

interface VoiceInterfaceState {
  isListening: boolean;
  isSupported: boolean;
  transcript: string;
  confidence: number;
}

// Simple type assertion to avoid conflicts
const getSpeechRecognition = () => {
  return (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
};

export const useVoiceInterface = () => {
  const [state, setState] = useState<VoiceInterfaceState>({
    isListening: false,
    isSupported: false,
    transcript: '',
    confidence: 0
  });

  const recognitionRef = useRef<any>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // Check for speech recognition support
    const SpeechRecognition = getSpeechRecognition();
    
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = 'en-US';
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        setState(prev => ({ ...prev, isListening: true }));
      };

      recognition.onresult = (event: any) => {
        const results = event.results;
        const lastResult = results[results.length - 1];
        
        if (lastResult) {
          const transcript = lastResult[0].transcript;
          const confidence = lastResult[0].confidence;
          
          setState(prev => ({
            ...prev,
            transcript,
            confidence: confidence || 0
          }));
        }
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setState(prev => ({ 
          ...prev, 
          isListening: false,
          transcript: '',
          confidence: 0
        }));
      };

      recognition.onend = () => {
        setState(prev => ({ ...prev, isListening: false }));
      };

      recognitionRef.current = recognition;
      setState(prev => ({ ...prev, isSupported: true }));
    } else {
      setState(prev => ({ ...prev, isSupported: false }));
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const startListening = useCallback(() => {
    if (recognitionRef.current && !state.isListening) {
      try {
        setState(prev => ({ ...prev, transcript: '', confidence: 0 }));
        recognitionRef.current.start();
        
        timeoutRef.current = setTimeout(() => {
          if (recognitionRef.current && state.isListening) {
            recognitionRef.current.stop();
          }
        }, 10000);
      } catch (error) {
        console.error('Error starting speech recognition:', error);
      }
    }
  }, [state.isListening]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current && state.isListening) {
      recognitionRef.current.stop();
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  }, [state.isListening]);

  return {
    ...state,
    startListening,
    stopListening
  };
};