"use client";
import 'animate.css';

import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";
import Image from "next/image";

export default function Score() {
  return (
    <div className="pt-10 px-4 mx-6 mb-20 -mt-10">
      <div className="flex flex-col md:flex-row-reverse gap-4 justify-between container mx-auto">
      <div className="relative flex justify-center">
          <Image
            src="/assets/نمرات و مدارک.png"
            width={400}
            height={350}
            className="w-[300px] md:w-[400px] md:h-[350px] h-auto md:-mt-8"
            alt="main-banner"
          />
        </div>
        <div className="flex-col justify-around mt-9">
          <h1 className="text-2xl md:text-3xl font-extrabold mb-4 text-center md:text-start text-[#000080] flex justify-center">
          استعلام نمـــــــــرات و مــــــــدارک
          </h1>
          <h1 className="text-2xl md:text-3xl font-extrabold mb-4 text-center md:text-start text-[#D4AF37] flex justify-center">
            ســــــــازمان فنی و حـــــــــرفه ای
          </h1>
          <h1 className="text-[#1A1A2E] m-auto text-base md:text-xl text-center md:text-start mb-1">
          از طریق دکمه ریز با مراجعه به سایت فنی و حرفه ای ضمن پیگیری</h1>
          <h1 className="text-[#1A1A2E] m-auto text-base md:text-xl text-center md:text-start mb-5">
          نمرات آزمون های شرکت کرده، مدرک مهارت خود را نیز دریافت کنید.
          </h1>
          <div className="flex flex-col md:flex-row items-stretch align-middle px-2 gap-4">
            <a href="https://azmoon.portaltvto.com/result/result/index/1/80" className='w-full'>
            <Button size="md" className="flex-grow font-fa text-base border-2 w-full rounded-3xl border-[#D4AF37] text-[#D4AF37] bg-[#000080] hover:bg-[#D4AF37] hover:text-white transition-all shadow-md hover:shadow-lg">
              بزن بــــــــریم!
            </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}