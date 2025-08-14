"use client";

import React from "react";
import { Button } from "../../ui/atoms";

interface AuthButtonProps {
  type: "login" | "register";
  onClick?: () => void;
  className?: string;
}

const AuthButton: React.FC<AuthButtonProps> = ({
  type,
  onClick,
  className = "",
}) => {
  const buttonInfo = {
    login: "LOG IN",
    register: "REGISTER",
  };

  return (
    <Button variant="blue" onClick={onClick} className={className}>
      {buttonInfo[type]}
    </Button>
  );
};

export default AuthButton;
