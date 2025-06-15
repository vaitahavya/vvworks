import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'white';
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'primary',
}) => {
  const baseStyles = 'rounded-xl shadow-lg overflow-hidden';
  
  const variantStyles = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white',
    accent: 'bg-accent text-white',
    white: 'bg-neutral-white text-neutral-dark'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card; 