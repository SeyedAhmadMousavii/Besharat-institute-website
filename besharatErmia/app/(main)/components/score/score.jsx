"use client";
import 'animate.css';

import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";

export default function Score() {
  return (
    <div className="pt-10 px-4 mx-6 mb-6 -mt-16">
      <div className="flex flex-col md:flex-row gap-4 justify-between container mx-auto">
      <div className="relative flex justify-center">
          <img
            src="/assets/نمرات و مدارک.png"
            className="w-[300px] md:w-[450px] md:h-[350px] md:-mt-8"
            alt="main-banner"
          />
        </div>
        <div className="flex-col justify-around mt-9">
          <h1 className="text-2xl md:text-3xl font-extrabold mb-4 text-center md:text-start text-white flex justify-center">
          استعلام نمـــــــــرات و مــــــــدارک
          </h1>
          <h1 className="text-2xl md:text-3xl font-extrabold mb-4 text-center md:text-start text-white flex justify-center">
            ســــــــازمان فنی و حـــــــــرفه ای
          </h1>
          <h1 className="text-white m-auto text-base md:text-xl text-center md:text-start mb-1">
          از طریق دکمه ریز با مراجعه به سایت فنی و حرفه ای ضمن پیگیری</h1>
          <h1 className="text-white m-auto text-base md:text-xl text-center md:text-start mb-5">
          نمرات آزمون های شرکت کرده، مدرک مهارت خود را نیز دریافت کنید.
          </h1>
          <div className="flex flex-col md:flex-row items-stretch align-middle px-2 gap-4">
            <a href="https://azmoon.portaltvto.com/result/result/index/1/80" className='w-full'>
            <Button size="md" className="flex-grow font-fa text-base border-2 w-full rounded-3xl border-[#ffd700] text-[#ffd700] bg-[#020621] hover:bg-[#ffd700] hover:text-[#020621]">
              بزن بــــــــریم!
            </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
