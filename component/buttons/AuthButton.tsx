'use client'

import React from "react"

interface AuthButtonProps {
  type: 'login' | 'register';
}

const AuthButton: React.FC<AuthButtonProps> = ({ type }) => {
  const buttonInfo = {
    login: "LOG IN",
    register: "REGISTER",
  };

  return (
    <button className="auth-button">
      {buttonInfo[type]}
    </button>
  );
};

export default AuthButton;
