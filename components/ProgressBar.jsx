"use client";
import React, { useEffect } from "react";
import useTabStore from "@/components/Store";

const ProgressBar = () => {
  const { tabs, currentTab, setCurrentTab } = useTabStore();
  return (
    <div className="w-screen flex items-center justify-around h-auto px-10 p-2 mb-12 gap-20">
      {tabs.map((tab, index) => (
        <button
          onClick={() => setCurrentTab(tab)}
          key={index}
          className={`bg-white rounded-2xl py-4 text-[#5F6965] flex-grow text-[1rem] capitalize flex items-center justify-center border border-[#ECECEC] transition-colors hover:border-[#2F9B72] ${tab === currentTab ? "bg-[#128D5E05] border-[#128D5E] text-[#144F38]" : ""}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default ProgressBar;
