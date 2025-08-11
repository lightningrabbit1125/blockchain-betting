'use client'

import React from 'react';

interface NormalButtonProps {
  children: React.ReactNode;
  color: string
}

const NormalButton: React.FC<NormalButtonProps> = ({
  children,
  color,
}) => {
  const bgColor = color === "red" ? "bg-[linear-gradient(1turn,#c4003b_0.8%,#fb1949)]" : color === "blue" ? "bg-[linear-gradient(1turn,#2C9FFA_0.8%,#0C60FF)]" : "bg-[linear-gradient(1turn,#31FF5E_0.8%,#1BB83D)]"
  const shadowColor = color === "red" ? "bg-[#61001d]" : color === "blue" ? "bg-[#2283F680]" : "bg-[#1BB83D80]"
  const width = color === "red" ? "w-[85px]" : color === "blue" ? "w-[146px]" : "w-[146px]"
  return (
    <button
      className={"pushable group relative border-none bg-transparent cursor-pointer outline-offset-1 transition-filter duration-250 focus:outline-none focus-visible:outline " + width}
    >

      <span className={"edge absolute translate-y-[3px] top-0 left-0 w-full h-full rounded-[8px] "+shadowColor}></span>
      <span
        className={`front relative w-full h-[33px] block rounded-[8px] text-xl text-white will-change-transform `+
                    `transform transition-transform duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] `+
                    `group-hover:-translate-y-[3px] group-hover:duration-[250ms] group-hover:ease-[cubic-bezier(0.3,0.7,0.4,1.5)] `+
                    `group-active:translate-y-[1px] group-active:duration-[34ms] font-bold flex items-center justify-center text-[12px] `+bgColor}
        style={{ boxShadow: "0 3px 16px transparent, inset 0 4px 3px #ffffff4d" }}
      >
        {children}
      </span>
    </button>
  );
};

export default NormalButton;


