"use client";
import { Button } from "@material-tailwind/react";
import { AcademicCapIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function TTCBanner() {
  return (
    <div className="py-8 px-4 my-10">
      <div className="container mx-auto">
        <div className="rounded-2xl shadow-xl overflow-hidden bg-white border border-[#E8E8F0]">
          <div className="flex flex-col-reverse md:flex-row justify-around items-center">

            <div className="flex-1 p-6 md:p-10 text-[#1A1A2E]">
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 px-3 py-1 rounded-full mb-4">
                <AcademicCapIcon className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-[#000080] text-sm font-bold">کارگاه تخصصی ۳ ماهه</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-[#000080]">
                دوره ابلاغ مربیگری | تربیت مدرس حرفه‌ای
              </h3>

              <div className="w-20 h-1 bg-[#D4AF37] mb-4 rounded-full"></div>

              <p className="leading-relaxed text-[#1A1A2E] mb-2">
                از تخصص تا تدریس رسمی؛ مسیر کامل دریافت ابلاغ مربیگری سازمان فنی و حرفه‌ای در آموزشگاه بین‌المللی بشارت.
              </p>

              <p className="leading-relaxed text-[#1A1A2E] mb-6">
                آموزش اصول یادگیری بزرگسالان، مدیریت کلاس، روش‌های نوین تدریس، ارزیابی هنرجو و مستندسازی — همراه با پشتوانه ۲۶ سال تجربه آموزشی.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href="TTCCoursePage"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="md"
                    className="w-full font-fa text-sm btn-flex bg-[#000080] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#000080] transition-all shadow-md hover:shadow-lg rounded-full px-8 py-3"
                  >
                    <PaperAirplaneIcon className="w-5 h-5" />
                    ثبت‌نام و مشاوره
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative md:w-96 p-6 flex justify-center">
              <Image
                src="/assets/TTCCourse.webp"
                alt="دوره ابلاغ مربیگری - تربیت مدرس"
                width={320}
                height={420}
                className="w-[400px] md:w-[600px] h-auto drop-shadow-2xl"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}