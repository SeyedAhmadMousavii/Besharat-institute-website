// components/AccordionItem.js
"use client";

import React from "react";

export default function AccordionItem({ id, open, onClick, title, children }) {
  return (
    <div className="border border-gray-600 rounded-lg mb-4 overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center bg-gray-700 text-[#ffd700] py-3 px-4"
      >
        <span>{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="true"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`h-5 w-5 transform transition-transform ${
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
        <div className="px-4 py-2 bg-gray-800 text-white">
          {children}
        </div>
      )}
    </div>
  );
}
