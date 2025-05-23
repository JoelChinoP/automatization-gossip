
  import type { MessageCardProps } from './MessageCard.types';
  
  export const MessageCard: React.FC<MessageCardProps> = ({ children, className = '' }) => (
    <div className={`bg-white rounded-3xl shadow-lg overflow-hidden mb-6 mx-4 md:mx-0 ${className}`}>
      {children}
    </div>
  );
  
  export default MessageCard;