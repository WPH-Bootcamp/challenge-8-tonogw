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
