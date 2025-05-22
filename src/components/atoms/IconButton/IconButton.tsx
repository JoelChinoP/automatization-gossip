import type { IconButtonProps } from './IconButton.types';

export const IconButton: React.FC<IconButtonProps> = ({ children, onClick, className = '' }) => (
  <button 
    onClick={onClick}
    className={`w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-opacity-30 ${className}`}
  >
    {children}
  </button>
);

export default IconButton;