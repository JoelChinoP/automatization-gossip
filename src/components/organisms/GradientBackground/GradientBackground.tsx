interface GradientBackgroundProps {
    children: React.ReactNode;
    className?: string;
  }
  
  export const GradientBackground: React.FC<GradientBackgroundProps> = ({ 
    children, 
    className = '' 
  }) => (
    <div className={`min-h-screen bg-gradient-to-br from-pink-500 via-pink-400 to-orange-400 relative ${className}`}>
      {children}
    </div>
  );
  
  export default GradientBackground;