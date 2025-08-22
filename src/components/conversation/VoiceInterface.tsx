import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mic, MicOff, Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { useVoiceInterface } from '@/hooks/useVoiceInterface';
import { useTextToSpeech } from '@/hooks/useTextToSpeech';

interface VoiceInterfaceProps {
  onTranscript?: (text: string) => void;
  autoSpeak?: boolean;
  className?: string;
}

const VoiceInterface: React.FC<VoiceInterfaceProps> = ({ 
  onTranscript, 
  autoSpeak = false,
  className = ""
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const {
    isListening,
    isSupported: voiceSupported,
    startListening,
    stopListening,
    transcript,
    confidence
  } = useVoiceInterface();

  const {
    speak,
    stop: stopSpeaking,
    isSpeaking,
    isSupported: speechSupported,
    voices,
    selectedVoice,
    setSelectedVoice
  } = useTextToSpeech();

  useEffect(() => {
    if (transcript && onTranscript) {
      onTranscript(transcript);
    }
  }, [transcript, onTranscript]);

  const handleVoiceToggle = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const handleSpeechToggle = () => {
    if (isSpeaking) {
      stopSpeaking();
    } else {
      const welcomeMessage = "Welcome to The Digital Frontier. I'm your AI assistant. How can I help you today?";
      speak(welcomeMessage);
    }
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.8) return 'bg-accent';
    if (confidence >= 0.6) return 'bg-primary';
    return 'bg-secondary';
  };

  if (!voiceSupported && !speechSupported) {
    return null;
  }

  return (
    <Card className={`p-4 bg-card/50 backdrop-blur-sm border-border ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-foreground">Voice Interface</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Collapse' : 'Expand'}
        </Button>
      </div>

      <div className="flex flex-wrap gap-3">
        {/* Voice Input */}
        {voiceSupported && (
          <div className="flex items-center gap-2">
            <Button
              variant={isListening ? "destructive" : "secondary"}
              size="sm"
              onClick={handleVoiceToggle}
              className="relative"
            >
              {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
              {isListening && (
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-destructive rounded-full animate-pulse" />
              )}
            </Button>
            <span className="text-sm text-muted-foreground">
              {isListening ? 'Listening...' : 'Voice Input'}
            </span>
          </div>
        )}

        {/* Text to Speech */}
        {speechSupported && (
          <div className="flex items-center gap-2">
            <Button
              variant={isSpeaking ? "destructive" : "secondary"}
              size="sm"
              onClick={handleSpeechToggle}
            >
              {isSpeaking ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </Button>
            <span className="text-sm text-muted-foreground">
              {isSpeaking ? 'Speaking...' : 'Voice Output'}
            </span>
          </div>
        )}
      </div>

      {/* Voice Recognition Results */}
      {transcript && (
        <div className="mt-4 p-3 bg-muted/50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">Transcript:</span>
            {confidence && (
              <Badge 
                variant="secondary" 
                className={`${getConfidenceColor(confidence)} text-xs`}
              >
                {Math.round(confidence * 100)}% confident
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground">{transcript}</p>
        </div>
      )}

      {/* Expanded Controls */}
      {isExpanded && (
        <div className="mt-4 space-y-4 border-t border-border pt-4">
          {/* Voice Selection */}
          {speechSupported && voices.length > 0 && (
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Voice Selection:
              </label>
              <select
                value={selectedVoice?.name || ''}
                onChange={(e) => {
                  const voice = voices.find(v => v.name === e.target.value);
                  if (voice) setSelectedVoice(voice);
                }}
                className="w-full p-2 bg-input border border-border rounded-md text-foreground"
              >
                {voices.map((voice) => (
                  <option key={voice.name} value={voice.name}>
                    {voice.name} ({voice.lang})
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Voice Commands Help */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-2">Voice Commands:</h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
              <div>"Show me pricing"</div>
              <div>"Contact sales"</div>
              <div>"Tell me about SEO"</div>
              <div>"Read this page"</div>
              <div>"Find case studies"</div>
              <div>"Help me navigate"</div>
            </div>
          </div>

          {/* Status Indicators */}
          <div className="flex flex-wrap gap-2">
            <Badge variant={voiceSupported ? "default" : "secondary"}>
              Voice Input: {voiceSupported ? 'Enabled' : 'Not Available'}
            </Badge>
            <Badge variant={speechSupported ? "default" : "secondary"}>
              Voice Output: {speechSupported ? 'Enabled' : 'Not Available'}
            </Badge>
          </div>
        </div>
      )}
    </Card>
  );
};

export default VoiceInterface;