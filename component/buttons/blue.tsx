'use client'

import React from "react";

interface BlueButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const BlueButton: React.FC<BlueButtonProps> = ({
  children,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  return (
    <button
      className="pushable group relative border-none bg-transparent p-0 cursor-pointer outline-offset-1 hover:brightness-110 transition-filter duration-250 focus:outline-none focus-visible:outline"
    >

      <span className="edge absolute translate-y-[3px] top-0 left-0 w-full px-[25.2px] h-full rounded-[12.6px] bg-[#003a8a]"></span>
      <span
        className="front relative lg:h-[51.97px] h-[37.73px] block rounded-[12.6px] px-[25.2px] text-xl text-white bg-[linear-gradient(#0C60FF,#2C9FFA)] will-change-transform
         shadow-inner shadow-gray-400            
        transform transition-transform duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)]
                    group-hover:-translate-y-[3px] group-hover:duration-[250ms] group-hover:ease-[cubic-bezier(0.3,0.7,0.4,1.5)]
                    border-[1px] border-[#55657E]
                    group-active:translate-y-[1px] group-active:duration-[34ms] text-[12px] font-bold flex items-center justify-center text-[13.72px] lg:text-[18.9px]"
        // style={{ boxShadow:"0 3px 28px #2283f666, inset 0 3px 3px #ffffff21" }}
      >
        {children}
      </span>
    </button>
    
  );
};

export default BlueButton;