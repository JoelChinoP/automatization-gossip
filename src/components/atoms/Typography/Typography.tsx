import type { TypographyProps } from './Typography.types';

export const Typography: React.FC<TypographyProps> = ({ 
  children, 
  variant = 'body', 
  className = '' 
}) => {
  const variants = {
    h1: 'text-xl md:text-2xl font-bold text-black',
    h2: 'text-lg md:text-xl font-semibold text-black',
    body: 'text-base text-gray-700',
    caption: 'text-sm text-white opacity-80',
    placeholder: 'text-4xl md:text-6xl text-white opacity-30 font-light'
  };
  
  return (
    <span className={`${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Typography;