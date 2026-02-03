import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-to-r from-navy to-navy-900 text-white hover:shadow-lg hover:shadow-navy/30 border border-transparent dark:from-gold dark:to-gold-600 dark:text-navy-900",
    secondary: "bg-teal text-white hover:bg-teal-600 shadow-md hover:shadow-lg",
    outline: "border-2 border-navy text-navy hover:bg-navy hover:text-white dark:border-gold dark:text-gold dark:hover:bg-gold dark:hover:text-navy-900",
    ghost: "text-navy hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
