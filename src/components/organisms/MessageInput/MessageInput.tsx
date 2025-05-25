'use client'

import { useState } from 'react';
import { Button } from '@/components/atoms/Button';
import { Typography } from '@/components/atoms/Typography';
import type { MessageInputProps } from './MessageInput.types';

export const MessageInput: React.FC<MessageInputProps> = ({ onSend, className = '' }) => {
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleSend = async () => {
    if (message.trim()) {
      try {
        setError(null);
        await onSend(message);
        setMessage('');
        setIsSent(true);
        
        // Resetear el estado después de 3 segundos
        setTimeout(() => {
          setIsSent(false);
        }, 3000);
      } catch (err) {
        setError('Error al enviar el mensaje. Inténtalo de nuevo.');
        setTimeout(() => {
          setError(null);
        }, 3000);
      }
    }
  };  return (
    <div className={`${className}`}>
      {isSent ? (
        <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-4 text-center">
          <Typography variant="body">
            ¡Mensaje enviado correctamente!
          </Typography>
        </div>
      ) : error ? (
        <div className="bg-red-100 text-red-800 p-4 rounded-lg mb-4 text-center">
          <Typography variant="body">
            {error}
          </Typography>
        </div>
      ) : (
        <textarea 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-4 mb-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-pink-500"
          rows={4}
          placeholder="Escribe tu mensaje anónimo aquí..."
        />
      )}
      
      <Button 
        onClick={handleSend} 
        disabled={!message.trim() || isSent}
      >
        {isSent ? '¡Enviado!' : '¡Enviar!'}
      </Button>
    </div>
  );
};

export default MessageInput;