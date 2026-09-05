"use client";
import 'animate.css';

import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";
import Image from "next/image";

export default function MainBanner() {
  return (
    <div className="pt-10 px-4 mt-4">
      <div className="flex flex-col-reverse md:flex-row gap-4 justify-between container mx-auto align-middle">
        <div className="flex-col justify-around mt-9 align-middle">
          <h1 className="text-2xl md:text-2xl font-extrabold mb-4 text-center md:text-start text-[#000080]">
          آموزشگاه بین المللی کامپیوتر و ارزدیجیتال
          </h1>
          <h2 className="text-2xl md:text-5xl font-extrabold mb-4 text-center md:text-start text-[#D4AF37]">
          بشـــــــــــــــــــــارت
          </h2>
          <h2 className="text-[#1A1A2E] m-auto text-lg md:text-xl text-center md:text-start">
          کارآفرین برتر در غرب استان تـــــــــــهران
          </h2>
          <h2 className="text-[#1A1A2E] m-auto text-lg md:text-xl text-center md:text-start">
          ما از سال ۱۳۷۹ همراه با تجربه و تخصص از پایه نهم تا دکتری در کنار شما هستیم</h2>
          <h2 className="text-[#1A1A2E] m-auto text-lg md:text-xl text-center md:text-start mb-4">
           با ما همراه باشـــــــــــــید.
          </h2>
          <div className="flex flex-col md:flex-row items-stretch align-middle px-2 gap-4">
            <a href="https://t.me/+989302758881" className='w-full'>
            <Button size="md" className="flex-grow font-fa text-base btn-flex bg-[#D4AF37] text-[#000080] hover:bg-[#B8960F] transition-all shadow-md hover:shadow-lg w-full">
              <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6" />
              مشاوره رایگان بگیرید
            </Button>
            </a>
            <a href="courses" className='w-full'>
            <Button size="md" variant="outlined" className="flex-grow font-fa text-base border-2 text-[#D4AF37] bg-[#000080] hover:bg-[#D4AF37] border-none hover:text-white transition-all w-full">
              مشاهده دوره ها
            </Button>
            </a>
          </div>
        </div>
        <div className="relative -mt-24">
          <Image
            src="/assets/main_section_banner.png"
            width={500}
            height={500}
            className="w-[480px] h-auto"
            alt="main-banner"
            priority
          />
        </div>
      </div>
    </div>
  );
}