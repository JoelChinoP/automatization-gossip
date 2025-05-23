import Typography from '@/components/atoms/Typography';
import { Lock } from 'lucide-react';

export const PrivacyIndicator: React.FC = () => (
  <div className="flex items-center justify-center space-x-2 px-6 py-4">
    <Lock className="w-5 h-5 text-white" />
    <Typography variant="caption">
      preguntas y respuestas anónimas
    </Typography>
  </div>
);

export default PrivacyIndicator;