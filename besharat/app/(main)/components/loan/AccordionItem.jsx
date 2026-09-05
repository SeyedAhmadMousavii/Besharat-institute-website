// components/AccordionItem.js
"use client";

import React from "react";

export default function AccordionItem({ id, open, onClick, title, children }) {
  return (
    <div className="border border-[#E8E8F0] rounded-lg mb-4 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center bg-white text-[#000080] py-3 px-4 hover:bg-[#F8F9FA] transition-colors"
      >
        <span className="font-semibold">{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="true"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`h-5 w-5 transform transition-transform text-[#D4AF37] ${
            open === id ? "rotate-180" : ""
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      {open === id && (
        <div className="px-4 py-2 bg-[#F8F9FA] text-[#1A1A2E] border-t border-[#E8E8F0]">
          {children}
        </div>
      )}
    </div>
  );
}