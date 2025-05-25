'use client'

import { useState, useCallback } from 'react';
import { saveMessage } from '@/firebase/messages';

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
      // Guardar el mensaje en Firebase y obtener el ID generado
      const messageId = await saveMessage(content);
      
      // Crear objeto de mensaje local con el ID de Firebase
      const newMessage: Message = {
        id: messageId,
        content,
        timestamp: new Date(),
        isAnonymous: true
      };
      
      setMessages(prev => [...prev, newMessage]);
      
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