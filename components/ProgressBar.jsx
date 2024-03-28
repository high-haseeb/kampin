"use client";
import React, { useEffect } from "react";

const ProgressBar = () => {
  const tabs = ["products", "tower", "window", "applicators", "summary"];
  return (
    <div className="w-screen flex items-center justify-around h-auto p-2 mb-12">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl py-4 w-[16vw] text-black text-xl capitalize flex items-center justify-center border-gray-200 border-2 hover:bg-[#FAFDFC] hover:border-[#2F9B72] hover:text-[#2F9B72]"
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
