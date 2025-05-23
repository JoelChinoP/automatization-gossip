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
      <textarea 
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full p-4 mb-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-pink-500"
        rows={4}
        placeholder="Escribe tu mensaje anónimo aquí..."
      />
      <Button onClick={handleSend} disabled={!message.trim()}>
        ¡Enviar!
      </Button>
    </div>
  );
};

export default MessageInput;