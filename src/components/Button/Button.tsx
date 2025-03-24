"use client";

import "./Button.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "initial-black" | "initial-white";
}

const Button = ({ children, onClick, type = "initial-black" }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`button ${type}`}>
      <span className="button__text">{children}</span>
    </button>
  );
};

export default Button;
