import { 
  GradientBackground, 
  MessageCard, 
  MessageInput 
} from '@/components/organisms';
import { 
  MessagePlaceholder, 
  FloatingIcon, 
  PrivacyIndicator 
} from '@/components/molecules';
import { Typography } from '@/components/atoms/Typography';

export interface AnonymousOnlyLayoutProps {
  onSendMessage: (message: string) => void;
}

export const AnonymousOnlyLayout: React.FC<AnonymousOnlyLayoutProps> = ({ 
  onSendMessage 
}) => (
  <GradientBackground>
    <div className="container mx-auto max-w-md py-8 px-4 min-h-screen flex flex-col">
      {/* Header Card */}
      <MessageCard>
        <div className="p-4">
          <Typography variant="h1" className="text-center mb-2">
            Gossip Anónimo
          </Typography>
          <Typography variant="body" className="text-center">
            ¡Envía y recibe mensajes completamente anónimos!
          </Typography>
        </div>
      </MessageCard>
      
      {/* Main Content Area */}
      <div className="flex-1 relative">
        <MessagePlaceholder />
        <FloatingIcon />
      </div>
      
      {/* Footer */}
      <div className="space-y-4">
        <PrivacyIndicator />
        <MessageInput onSend={onSendMessage} />
      </div>
    </div>
  </GradientBackground>
);

export default AnonymousOnlyLayout;
