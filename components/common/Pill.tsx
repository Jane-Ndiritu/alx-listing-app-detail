import React from "react";
import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ label, isActive = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition 
        ${
          isActive
            ? "bg-black text-white border border-black"
            : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
        }`}
    >
      {label}
    </button>
  );
};

export default Pill;
