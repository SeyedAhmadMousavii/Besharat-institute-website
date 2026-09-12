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
          <h1 className="text-2xl md:text-3xl font-extrabold mb-3 text-center md:text-start text-[#000080]">
            آموزشگاه بین‌المللی کامپیوتر، حسابداری و ارز دیجیتال بشارت
          </h1>
          
          <div className="space-y-3 mb-4">
            <p className="text-[#1A1A2E] text-base md:text-xl text-center md:text-start font-semibold border-r-4 border-[#D4AF37] pr-3">
              از سال ۱۳۷۹ تا امروز، مرجع تخصصی آموزش مهارت در غرب تهران
            </p>
            <p className="text-[#1A1A2E] text-sm md:text-lg text-center md:text-start leading-relaxed">
              آموزشگاه بین‌المللی بشارت به مدیریت <span className="text-[#D4AF37] font-bold">ساناز فراهانی</span>، از پایه نهم تا دکترا.
            </p>
            <p className="text-[#1A1A2E] text-sm md:text-lg text-center md:text-start leading-relaxed">
              مسیر یادگیری شما را با اساتید متخصص و مدرک معتبر فنی و حرفه‌ای هموار می‌کند.
            </p>
            <p className="text-[#1A1A2E] text-sm md:text-lg text-center md:text-start leading-relaxed">
              همراه شما تا رسیدن به هدف؛ با پشتیبانی مستمر و آموزش‌های کاربردی.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-stretch align-middle px-2 gap-4">
            <a href="https://t.me/+989302758881" className='w-full'>
              <Button size="md" className="flex-grow font-fa text-base btn-flex bg-[#D4AF37] text-[#000080] hover:bg-[#B8960F] transition-all shadow-md hover:shadow-lg w-full">
                <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6" />
                مشاوره رایگان
              </Button>
            </a>
            <a href="courses" className='w-full'>
              <Button size="md" variant="outlined" className="flex-grow font-fa text-base border-2 text-[#D4AF37] bg-[#000080] hover:bg-[#D4AF37] border-none hover:text-white transition-all w-full">
                مشاهده دوره‌ها
              </Button>
            </a>
          </div>
        </div>
        <div className="relative -mt-24">
          <Image
            src="/assets/main_section_banner.webp"
            width={500}
            height={500}
            className="w-[480px] h-auto"
            alt="آموزشگاه بین‌المللی بشارت - مرجع تخصصی آموزش کامپیوتر، حسابداری و ارز دیجیتال"
            priority
          />
        </div>
      </div>
    </div>
  );
}