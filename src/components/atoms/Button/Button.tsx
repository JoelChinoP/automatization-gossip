import type { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  disabled = false, 
  variant = 'primary',
  className = '' 
}) => {
  const baseClasses = "w-full py-4 px-6 rounded-full font-semibold text-lg transition-all duration-200 focus:outline-none focus:ring-4";
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800 focus:ring-gray-400",
    secondary: "bg-white bg-opacity-20 text-white hover:bg-opacity-30 focus:ring-white"
  };
  
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;