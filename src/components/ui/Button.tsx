// import React from "react";
import type { ReactNode } from "react";
// import type { ButtonVariant, ButtonSize } from "../../types";

type ButtonVariant = "primary" | "outline";

interface ButtonProps {
  variant?: ButtonVariant;
  // size?: ButtonSize;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

// const Button = ({
//   variant = "primary",
//   size = "md",
//   children,
//   onClick,
//   className = "",
//   disabled = false,
//   type = "button",
// }: ButtonProps) => {
//   // common base style
//   const baseStyles =
//     "font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

export default function Button({
  variant = "primary",
  children,
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyle = `
    flex items-center justify-center
    rounded-full
    font-semibold
    transition duration-300
  `;

  // Variant styles - subject to adjust according to figma!
  const variants = {
    primary: `
      bg-[#FF623E]
      text-white
      font-bold
      hover:scale-105
    `,

    outline: `
      border border-[#FF623E]
      text-[#FF623E]
      hover:bg-[#FF623E]
      hover:text-white
    `,
  };

  // Size styles
  // const sizeStyles = {
  //   sm: "px-4 py-2 text-sm",
  //   md: "px-6 py-3 text-base",
  //   lg: "px-8 py-4 text-lg",
  // };

  // // Disabled styles
  // const disabledStyles = "opacity-50 cursor-not-allowed";

  // // Combined all styles
  // const buttonClasses = `
  //   ${baseStyles}
  //   ${variantStyles[variant]}
  //   ${sizeStyles[size]}
  //   ${disabled ? disabledStyles : ""}
  //   ${className}

  //   `.trim();

  return (
    <button
      onClick={onClick}
      className={`
        ${baseStyle}
        ${variants[variant]}
        ${className}

      `}
    >
      {children}
    </button>
  );
}
