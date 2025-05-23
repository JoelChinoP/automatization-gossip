import Avatar from '@/components/atoms/Avatar';
import type { UserProfileProps } from './UserProfile.types';
import Typography from '@/components/atoms/Typography';

export const UserProfile: React.FC<UserProfileProps> = ({ username, className = '' }) => (
  <div className={`flex items-center space-x-3 p-4 ${className}`}>
    <Avatar size="md" />
    <div>
      <Typography variant="h2">{username}</Typography>
      <Typography variant="h1">¡Mándame mensajes anónimos!</Typography>
    </div>
  </div>
);

export default UserProfile;