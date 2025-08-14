"use client";

// this is card with badge and views

import React from "react";

export interface TypeThreeProps {
  badge: string;
  views: string;
  user: string;
  image: string;
}

const TypeThree: React.FC<TypeThreeProps> = ({ user, badge, image, views }) => {
  const badgeColor =
    badge === "HOT"
      ? "bg-[#ED1D49]"
      : badge === "NEW"
      ? "bg-[#1BB83D]"
      : "bg-[#FFAB00]";

  return (
    <div className="overflow-hidden embla__slide w-full">
      <div className="relative">
        <img
          src={image}
          alt="image"
          className="w-full object-cover rounded-[8px]"
          style={{ width: "200px !important" }}
        />
        <div className="flex items-center mt-2">
          <img src={`/icons/${user}.svg`} className="w-4 h-4" alt="user" />
          <span className="text-white text-[14px]">{views}</span>
        </div>
        <div
          className={`absolute top-2 left-2 text-white text-[10px] lg:text-[17.24px] font-bold lg:px-2 px-[4px] rounded-full border border-opacity-[13%] ${badgeColor}`}
        >
          {badge}
        </div>
      </div>
    </div>
  );
};

export default TypeThree;
