import React from 'react';

interface TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'small';
  color?: 'primary' | 'secondary' | 'accent' | 'white';
  children: React.ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = ({
  variant = 'body',
  color = 'primary',
  children,
  className = '',
}) => {
  const baseStyles = 'font-sans';
  
  const variantStyles = {
    h1: 'text-4xl md:text-5xl font-display font-bold',
    h2: 'text-3xl md:text-4xl font-display font-semibold',
    h3: 'text-2xl md:text-3xl font-display font-medium',
    body: 'text-base',
    small: 'text-sm',
  };

  const colorStyles = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent',
    white: 'text-white',
  };

  const Component = variant.startsWith('h') ? variant : 'p';

  return (
    <Component className={`${baseStyles} ${variantStyles[variant]} ${colorStyles[color]} ${className}`}>
      {children}
    </Component>
  );
};

export default Text; 