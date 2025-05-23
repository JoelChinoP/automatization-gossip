import IconButton from '@/components/atoms/IconButton';
import { MessageCircle } from 'lucide-react';


export const FloatingIcon: React.FC = () => (
  <div className="absolute bottom-6 right-6">
    <IconButton>
      <MessageCircle className="w-6 h-6 text-white" />
    </IconButton>
  </div>
);

export default FloatingIcon;