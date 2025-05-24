import { 
  GradientBackground, 
  MessageCard, 
  MessageInput 
} from '@/components/organisms';
import {  
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
    <div className="container mx-auto max-w-md px-4 min-h-screen flex flex-col justify-center items-center">
      <div className="w-full space-y-6">
        {/* Header Card */}
        <MessageCard>
          <div className="p-4 text-center">
            <Typography variant="body" className="text-center">
              ¡Envía y recibe mensajes completamente anónimos!
            </Typography>
          </div>
        </MessageCard>
        {/* Footer */}
        <div className="space-y-4"> 
          <MessageInput onSend={onSendMessage} />
          <PrivacyIndicator />
        </div>
      </div>
    </div>
  </GradientBackground>
);

export default AnonymousOnlyLayout;
