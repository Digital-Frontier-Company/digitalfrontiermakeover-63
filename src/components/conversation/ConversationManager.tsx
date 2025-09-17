import React, { useState } from 'react';
import ChatBot from './ChatBot';
import InteractiveHelp from './InteractiveHelp';

const ConversationManager: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

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

    </>
  );
};

export default ConversationManager;