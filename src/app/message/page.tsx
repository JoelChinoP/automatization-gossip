'use client'
import { useState, useEffect } from 'react';
import { useMessage } from '@/hooks/useMessage';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import AnonymousMessageLayout from '@/components/templates/AnonymousMessageLayout';

const SendMessageView = () => {
  const { sendMessage, isLoading } = useMessage();
  const [username, setUsername] = useLocalStorage<string>('username', '');
  const [isClient, setIsClient] = useState(false);

  // Evita errores de hidratación
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Si el usuario no tiene un nombre guardado, usamos uno predeterminado
  const displayName = isClient && username ? username : 'Usuario';

  const handleSendMessage = (message: string) => {
    sendMessage(message);
    console.log('Message sent:', message);
  };

  return (
    <AnonymousMessageLayout 
      username={displayName}
      onSendMessage={handleSendMessage}
    />
  );
};

export default SendMessageView;
