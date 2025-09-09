import React, { useState } from 'react';
import ChatBot from './ChatBot';
import InteractiveHelp from './InteractiveHelp';
import VoiceInterface from './VoiceInterface';

const ConversationManager: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [showVoiceInterface, setShowVoiceInterface] = useState(false);

  const handleVoiceTranscript = (transcript: string) => {
    // Process voice commands
    const command = transcript.toLowerCase();
    
    if (command.includes('help') || command.includes('assistance')) {
      setIsHelpOpen(true);
    } else if (command.includes('chat') || command.includes('talk')) {
      setIsChatOpen(true);
    } else if (command.includes('pricing') || command.includes('services')) {
      setIsChatOpen(true);
      // The chatbot will handle the actual query
    }
  };

  const handleOpenChat = () => {
    setIsHelpOpen(false);
    setIsChatOpen(true);
  };

  return (
    <>
      {/* Chat Bot */}
      <ChatBot 
        isOpen={isChatOpen} 
        onToggle={() => setIsChatOpen(!isChatOpen)} 
      />

      {/* Interactive Help */}
      <InteractiveHelp 
        isOpen={isHelpOpen} 
        onToggle={() => setIsHelpOpen(!isHelpOpen)}
        onOpenChat={handleOpenChat}
      />

      {/* Voice Interface - Only show on desktop for better UX */}
      {window.innerWidth >= 768 && (
        <VoiceInterface
          onTranscript={handleVoiceTranscript}
          autoSpeak={true}
          className="fixed top-20 right-6 w-72 z-30"
        />
      )}
    </>
  );
};

export default ConversationManager;