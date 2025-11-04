"use client";
import 'animate.css';

import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";

export default function MainBanner() {
  return (
    <div className="pt-10 px-4 mt-6 md:-mb-20">
      <div className="flex flex-col-reverse md:flex-row gap-4 justify-between container mx-auto">
        <div className="flex-col justify-around mt-9">
          <h1 className="text-2xl md:text-3xl font-extrabold mb-4 text-center md:text-start text-white">
          آموزشگاه کامپیوتر و ارزدیجیتال بشــــــــــــــارت
          </h1>
          <h1 className="text-white m-auto text-lg md:text-xl text-center md:text-start">
          کارآفرین برتر در غرب استان تـــــــــــهران
          </h1>
          <h1 className="text-white m-auto text-lg md:text-xl text-center md:text-start">
          ما با بیش از دو دهه تجربه و تخصص از پایه نهم تا دکترا در کنار شما هستیم</h1>
          <h1 className="text-white m-auto text-lg md:text-xl text-center md:text-start mb-4">
           با ما همراه باشـــــــــــــید.
          </h1>
          <div className="flex flex-col md:flex-row items-stretch align-middle px-2 gap-4">
            <a href="https://t.me/+989302758881" className='w-full'>
            <Button size="md" className="flex-grow font-fa text-base btn-flex bg-[#ffd700] text-bg-900 w-full">
              <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6" />
              مشاوره!
            </Button>
            </a>
            <a href="courses" className='w-full'>
            <Button size="md" variant="outlined" className="flex-grow font-fa text-base border-2 border-[#ffd700] text-[#ffd700] w-full">
              بزن بــــــــریم!
            </Button>
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            src="/assets/main_section_banner.png"
            className="w-[500px] -mt-28 -mb-16 md:mb-0"
            alt="main-banner"
          />
        </div>
      </div>
    </div>
  );
}
