'use client'

import { useState, useCallback } from 'react';

export interface Message {
  id: string;
  content: string;
  timestamp: Date;
  isAnonymous: boolean;
}

export const useMessage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = useCallback(async (content: string) => {
    setIsLoading(true);
    
    try {
      // Simulate API call
      const newMessage: Message = {
        id: Date.now().toString(),
        content,
        timestamp: new Date(),
        isAnonymous: true
      };
      
      setMessages(prev => [...prev, newMessage]);
      
      // Here you would make the actual API call
      // await fetch('/api/messages', { ... })
      
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    messages,
    sendMessage,
    isLoading
  };
};