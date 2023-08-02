import React from "react";
import { ButtonProps } from "../types";

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  hidden = false,
  disabled = false,
  onClick = () => {},
  children,
  id,
}) => {
  const baseClasses = "p-2 shadow-md text-white font-bold";
  let variantClasses;

  switch (variant) {
    case "primary":
      variantClasses = "bg-blue-600 hover:bg-blue-700 rounded-md";
      break;
    case "secondary":
      variantClasses = "bg-gray-600 hover:bg-gray-700 rounded-md";
      break;
    case "danger":
      variantClasses = "bg-red-600 hover:bg-red-700 rounded-md";
      break;
    case "circle":
      variantClasses = "bg-green-600 hover:bg-green-700 rounded-full";
      break;
    default:
      variantClasses = "bg-blue-600 hover:bg-blue-700";
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses}`}
      onClick={onClick}
      disabled={disabled}
      hidden={hidden}
      id={id}
    >
      {children}
    </button>
  );
};

export default Button;
