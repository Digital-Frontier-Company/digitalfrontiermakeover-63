import { useState, useEffect, useCallback, useRef } from 'react';

interface TextToSpeechState {
  isSpeaking: boolean;
  isSupported: boolean;
  voices: SpeechSynthesisVoice[];
  selectedVoice: SpeechSynthesisVoice | null;
}

export const useTextToSpeech = () => {
  const [state, setState] = useState<TextToSpeechState>({
    isSpeaking: false,
    isSupported: false,
    voices: [],
    selectedVoice: null
  });

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    // Check for speech synthesis support
    if ('speechSynthesis' in window) {
      setState(prev => ({ ...prev, isSupported: true }));

      // Load voices
      const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        const englishVoices = voices.filter(voice => 
          voice.lang.startsWith('en') && voice.localService
        );
        
        setState(prev => ({
          ...prev,
          voices: englishVoices.length > 0 ? englishVoices : voices,
          selectedVoice: prev.selectedVoice || englishVoices[0] || voices[0] || null
        }));
      };

      // Load voices immediately and on voiceschanged event
      loadVoices();
      window.speechSynthesis.onvoiceschanged = loadVoices;

      return () => {
        window.speechSynthesis.onvoiceschanged = null;
      };
    } else {
      setState(prev => ({ ...prev, isSupported: false }));
    }
  }, []);

  const speak = useCallback((text: string, options?: {
    rate?: number;
    pitch?: number;
    volume?: number;
  }) => {
    if (!state.isSupported || !text.trim()) return;

    // Stop any current speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Set voice
    if (state.selectedVoice) {
      utterance.voice = state.selectedVoice;
    }

    // Set options
    utterance.rate = options?.rate || 0.9;
    utterance.pitch = options?.pitch || 1;
    utterance.volume = options?.volume || 0.8;

    // Event handlers
    utterance.onstart = () => {
      setState(prev => ({ ...prev, isSpeaking: true }));
    };

    utterance.onend = () => {
      setState(prev => ({ ...prev, isSpeaking: false }));
    };

    utterance.onerror = (event) => {
      console.error('Speech synthesis error:', event.error);
      setState(prev => ({ ...prev, isSpeaking: false }));
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, [state.isSupported, state.selectedVoice]);

  const stop = useCallback(() => {
    if (state.isSupported) {
      window.speechSynthesis.cancel();
      setState(prev => ({ ...prev, isSpeaking: false }));
    }
  }, [state.isSupported]);

  const pause = useCallback(() => {
    if (state.isSupported) {
      window.speechSynthesis.pause();
    }
  }, [state.isSupported]);

  const resume = useCallback(() => {
    if (state.isSupported) {
      window.speechSynthesis.resume();
    }
  }, [state.isSupported]);

  const setSelectedVoice = useCallback((voice: SpeechSynthesisVoice) => {
    setState(prev => ({ ...prev, selectedVoice: voice }));
  }, []);

  return {
    ...state,
    speak,
    stop,
    pause,
    resume,
    setSelectedVoice
  };
};