"use client";
import { Button } from "@material-tailwind/react";
import { BookOpenIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function BookPromo() {
  return (
    <div className="py-8 px-4 mx-6 my-10">
      <div className="container mx-auto">
        <div className="rounded-2xl shadow-xl overflow-hidden bg-white border border-[#E8E8F0]">
          <div className="flex flex-col-reverse md:flex-row justify-around items-center">
            
            {/* متن و دکمه */}
            <div className="flex-1 p-6 md:p-10 text-[#1A1A2E]">
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 px-3 py-1 rounded-full mb-4">
                <BookOpenIcon className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-[#000080] text-sm font-bold">کتاب تخصصی</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-[#000080]">
                تحلیلگر بازارهای مالی بین‌الملل
              </h3>
              
              <div className="w-20 h-1 bg-[#D4AF37] mb-4 rounded-full"></div>

              <p className="leading-relaxed text-[#1A1A2E] mb-2">
                کتاب جامع تحلیل بازارهای مالی بین‌الملل، حاصل سال‌ها تجربه عملی و دانش تخصصی در حوزه فارکس، ارزهای دیجیتال و بازارهای سرمایه است.
              </p>
              
              <p className="leading-relaxed text-[#1A1A2E] mb-6">
                این کتاب راهنمای کامل شما برای ورود حرفه‌ای به دنیای معاملات، تحلیل تکنیکال، مدیریت ریسک و استراتژی‌های موفق سرمایه‌گذاری است.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a 
                  href="https://t.me/+989302758881" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button 
                    size="md" 
                    className="w-full font-fa text-sm btn-flex bg-[#000080] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#000080] transition-all shadow-md hover:shadow-lg rounded-full px-8 py-3"
                  >
                    <PaperAirplaneIcon className="w-5 h-5" />
                    خرید و ارتباط با ادمین
                  </Button>
                </a>
              </div>
            </div>

            {/* عکس کتاب */}
            <div className="relative md:w-96 p-6 flex justify-center">
              <Image
                src="/assets/polish_save.webp"
                alt="کتاب تحلیلگر بازارهای مالی بین‌الملل"
                width={320}
                height={420}
                className="w-[220px] md:w-[300px] h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}