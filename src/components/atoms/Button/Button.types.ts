export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    variant?: 'primary' | 'secondary';
    className?: string;
  }