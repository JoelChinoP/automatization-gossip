import { 
    GradientBackground, 
    MessageCard, 
    MessageInput 
  } from '@/components/organisms';
  import { 
    UserProfile, 
    MessagePlaceholder, 
    FloatingIcon, 
    PrivacyIndicator 
  } from '@/components/molecules';
  import type { AnonymousMessageLayoutProps } from './AnonymousMessageLayout.types';
  
  export const AnonymousMessageLayout: React.FC<AnonymousMessageLayoutProps> = ({ 
    username, 
    onSendMessage 
  }) => (
    <GradientBackground>
      <div className="container mx-auto max-w-md py-8 px-4 min-h-screen flex flex-col">
        {/* Header Card */}
        <MessageCard>
          <UserProfile username={username} />
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
  
  export default AnonymousMessageLayout;