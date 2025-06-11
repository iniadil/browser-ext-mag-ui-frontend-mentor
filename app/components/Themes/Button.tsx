import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  ...props
}) => {
  const baseStyles =
    "bg-white rounded-full border font-medium transition-colors cursor-pointer dark:bg-neutral-800";

  const variantStyles = {
    primary:
      "border-gray-300 text-neutral-900 hover:bg-primary-extrabold hover:text-white dark:border-neutral-700 dark:text-white dark:hover:bg-primary-extrabold",
    secondary: "border-indigo-600 text-primary hover:bg-indigo-50",
  };

  const sizeStyles = {
    sm: "py-1 px-3 text-sm",
    md: "py-2 px-4 text-base",
    lg: "py-3 px-6 text-lg",
  };

  const widthStyles = fullWidth ? "w-full" : "";

  const buttonStyles = twMerge(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    widthStyles,
    className,
  );

  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
