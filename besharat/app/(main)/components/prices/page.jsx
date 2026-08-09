"use client";

import Link from "next/link";

export default function PriceListLink() {
  return (
    <div className="w-full mx-auto rounded-2xl shadow-md text-center p-6 bg-[#ffd700]">
      <h2 className="text-lg font-extrabold mb-4 pb-2 border-b-2 border-blue-gray-900">
        لیست قیمت دوره‌ها
      </h2>
      <a href="/assets/file/شهریه 1405.pdf" download>
        <button
          className="mt-2 px-6 py-3 rounded-full bg-[#020620] text-white font-semibold transition-colors duration-200 w-full"
        >
          مشاهده / دانلود PDF
        </button>
      </a>
    </div>
  );
}
