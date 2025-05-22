import { User } from 'lucide-react';
import type { AvatarProps } from './Avatar.types';

export const Avatar: React.FC<AvatarProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };
  
  return (
    <div className={`${sizeClasses[size]} bg-gray-400 rounded-full flex items-center justify-center ${className}`}>
      <User className="text-gray-600 w-6 h-6" />
    </div>
  );
};

export default Avatar;