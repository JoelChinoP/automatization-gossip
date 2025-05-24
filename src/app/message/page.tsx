'use client'
import { useMessage } from '@/hooks/useMessage';
import { AnonymousOnlyLayout } from '@/components/templates';

const SendMessageView = () => {
  const { sendMessage } = useMessage();

  const handleSendMessage = (message: string) => {
    sendMessage(message);
    console.log('Message sent:', message);
  };

  return (
    <AnonymousOnlyLayout 
      onSendMessage={handleSendMessage}
    />
  );
};

export default SendMessageView;
