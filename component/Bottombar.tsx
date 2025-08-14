"use client";

import React, { useState } from "react";
import { useSidebar } from "@/component/providers/SidebarProvider";

interface BottombarProps {
  onMenuClick?: () => void;
  onSportClick?: () => void;
  onReferralsClick?: () => void;
  onActivityClick?: () => void;
  onChatClick?: () => void;
}

const Bottombar: React.FC<BottombarProps> = ({
  onMenuClick,
  onSportClick,
  onReferralsClick,
  onActivityClick,
  onChatClick,
}) => {
  const [activeTab, setActiveTab] = useState<
    "menu" | "sport" | "referrals" | "activity" | "chat"
  >("menu");
  const { toggleSidebar } = useSidebar();
  const handleTabClick = (tab: typeof activeTab, callback?: () => void) => {
    setActiveTab(tab);
    if (callback) callback();
  };

  return (
    <div className="fixed lg:hidden bottom-0 left-0 rounded-t-[16px] overflow-hidden right-0 z-50 bg-gray-900 border-t border-gray-700">
      {/* Legal Disclaimer Text */}

      {/* Bottom Navigation Bar */}
      <div className="flex items-center justify-around px-4 py-3 bg-gray-800">
        {/* Menu Tab */}
        <button
          onClick={toggleSidebar}
          className={`flex flex-col items-center space-y-1 transition-all duration-200 ${
            activeTab === "menu"
              ? "text-red-500 bg-gray-700 rounded-lg px-3 py-2"
              : "text-gray-400 hover:text-gray-300"
          }`}
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="text-xs font-medium">Menu</span>
        </button>

        {/* Sport Tab */}
        <button
          onClick={() => handleTabClick("sport", onSportClick)}
          className={`flex flex-col items-center space-y-1 transition-all duration-200 ${
            activeTab === "sport"
              ? "text-red-500 bg-gray-700 rounded-lg px-3 py-2"
              : "text-gray-400 hover:text-gray-300"
          }`}
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="text-xs font-medium">Sport</span>
        </button>

        {/* Referrals Tab */}
        <button
          onClick={() => handleTabClick("referrals", onReferralsClick)}
          className={`flex flex-col items-center space-y-1 transition-all duration-200 ${
            activeTab === "referrals"
              ? "text-red-500 bg-gray-700 rounded-lg px-3 py-2"
              : "text-gray-400 hover:text-gray-300"
          }`}
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-xs font-medium">Referrals</span>
        </button>

        {/* Activity Tab */}
        <button
          onClick={() => handleTabClick("activity", onActivityClick)}
          className={`flex flex-col items-center space-y-1 transition-all duration-200 ${
            activeTab === "activity"
              ? "text-red-500 bg-gray-700 rounded-lg px-3 py-2"
              : "text-gray-400 hover:text-gray-300"
          }`}
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <span className="text-xs font-medium">Activity</span>
        </button>

        {/* Chat Tab */}
        <button
          onClick={() => handleTabClick("chat", onChatClick)}
          className={`flex flex-col items-center space-y-1 transition-all duration-200 ${
            activeTab === "chat"
              ? "text-red-500 bg-gray-700 rounded-lg px-3 py-2"
              : "text-gray-400 hover:text-gray-300"
          }`}
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="text-xs font-medium">Chat</span>
        </button>
      </div>
    </div>
  );
};

export default Bottombar;
