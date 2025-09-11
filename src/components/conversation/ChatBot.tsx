import React, { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, X, Send, Mic, MicOff, Bot, User, Loader2 } from 'lucide-react';
import { useVoiceflowChat } from '@/hooks/useVoiceflowChat';
import { useVoiceInterface } from '@/hooks/useVoiceInterface';
interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  intent?: string;
}
interface ChatBotProps {
  isOpen: boolean;
  onToggle: () => void;
}
const ChatBot: React.FC<ChatBotProps> = ({
  isOpen,
  onToggle
}) => {
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    messages,
    isLoading,
    sendMessage,
    quickActions,
    isConnected
  } = useVoiceflowChat();
  const {
    isListening,
    isSupported,
    startListening,
    stopListening,
    transcript
  } = useVoiceInterface();
  useEffect(() => {
    if (transcript) {
      setMessage(transcript);
    }
  }, [transcript]);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  }, [messages]);
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);
  const handleSendMessage = async (text: string = message) => {
    if (!text.trim()) return;
    await sendMessage(text);
    setMessage('');
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  const handleVoiceToggle = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };
  if (!isOpen) {
    return;
  }
  return <Card className="fixed bottom-6 right-6 w-96 h-[600px] bg-card border-border shadow-2xl z-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="flex items-center gap-2">
          <Bot className="h-5 w-5 text-primary" />
          <span className="font-medium text-foreground">Digital Frontier Assistant</span>
        </div>
        <Button variant="ghost" size="icon" onClick={onToggle}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Quick Actions */}
      {messages.length === 0 && <div className="p-4 border-b border-border">
          <p className="text-sm text-muted-foreground mb-3">How can I help you today?</p>
          <div className="flex flex-wrap gap-2">
            {quickActions.map(action => <Badge key={action.id} variant="secondary" className="cursor-pointer hover:bg-primary/20 transition-colors" onClick={() => handleSendMessage(action.message)}>
                {action.label}
              </Badge>)}
          </div>
        </div>}

      {/* Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map(msg => <div key={msg.id} className={`flex gap-3 ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${msg.type === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
                {msg.type === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
              </div>
              <div className={`max-w-[80%] rounded-lg p-3 ${msg.type === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                <p className="text-sm leading-relaxed">{msg.content}</p>
                <span className="text-xs opacity-70 block mt-1">
                  {msg.timestamp.toLocaleTimeString()}
                </span>
              </div>
            </div>)}
          {isLoading && <div className="flex gap-3">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center">
                <Bot className="h-4 w-4" />
              </div>
              <div className="bg-muted rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span className="text-sm text-muted-foreground">Thinking...</span>
                </div>
              </div>
            </div>}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      {/* Input */}
      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Input ref={inputRef} value={message} onChange={e => setMessage(e.target.value)} onKeyPress={handleKeyPress} placeholder="Type your message..." className="pr-12" disabled={isLoading} />
            {isSupported && <Button variant="ghost" size="icon" className={`absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 ${isListening ? 'text-destructive' : 'text-muted-foreground'}`} onClick={handleVoiceToggle}>
                {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
              </Button>}
          </div>
          <Button onClick={() => handleSendMessage()} disabled={!message.trim() || isLoading} size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
        {isListening && <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
            <div className="h-2 w-2 bg-destructive rounded-full animate-pulse" />
            Listening...
          </p>}
      </div>
    </Card>;
};
export default ChatBot;