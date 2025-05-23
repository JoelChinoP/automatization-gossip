'use client'

import { useState } from 'react';
import { Button } from '@/components/atoms/Button';
import type { MessageInputProps } from './MessageInput.types';

export const MessageInput: React.FC<MessageInputProps> = ({ onSend, className = '' }) => {
  const [message, setMessage] = useState('');
  
  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };
  
  return (
    <div className={`px-4 md:px-6 ${className}`}>
      <Button onClick={handleSend} disabled={!message.trim()}>
        ¡Enviar!
      </Button>
    </div>
  );
};

export default MessageInput;