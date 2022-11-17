import React, { HTMLAttributes } from 'react';

const Button: React.FC<HTMLAttributes<HTMLButtonElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      type="button"
      className={`px-[30px] py-[18px] rounded-lg bg-navy text-white text-xs ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
