"use client";
import React from "react";

export interface TypeFiveProps {
  name: string;
  icon: string;
  gameCount: string;
  sampleGames?: string[];
}

const GameCard: React.FC<TypeFiveProps> = ({
  name,
  icon,
  gameCount,
  sampleGames,
}) => {
  return (
    <div className="bg-gray-800 rounded-lg p-[8px_10px_12px_10px]">
      <div className="flex items-center pb-4">
        <img src={icon} alt="Manufacturer" className="h-6 W-9" />
        <div>
          <h3 className="text-[10px] font-[700] text-white">{name}</h3>
          <p className="text-[10px] font-[700] text-[#A7B5CA]">{gameCount}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {sampleGames?.map((game, gameIndex) => (
          <img
            key={gameIndex}
            src={"/images/brand/" + game}
            alt="Game"
            className="w-full h-12 object-cover rounded"
          />
        ))}
      </div>
    </div>
  );
};

export default GameCard;
