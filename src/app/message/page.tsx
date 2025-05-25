'use client'
import { useMessage } from '@/hooks/useMessage';
import { AnonymousOnlyLayout } from '@/components/templates';

const SendMessageView = () => {
  const { sendMessage } = useMessage();

  const handleSendMessage = async (message: string) => {
    await sendMessage(message);
    console.log('Message sent:', message);
  };

  return (
    <AnonymousOnlyLayout 
      onSendMessage={handleSendMessage}
    />
  );
};

export default SendMessageView;
