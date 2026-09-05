"use client";

import Link from "next/link";
import Image from "next/image";

const exams = [
  {
    id: 1,
    title: "IT",
    icon: "/assets/exams/exam1.png",
    color: "from-[#f9ca24] to-[#ffd700]",
    questions: "۴۰ سوال تصادفی",
    duration: "۴۰ دقیقه"
  },
  {
    id: 2,
    title: "WINDOWS",
    icon: "/assets/exams/exam2.png",
    color: "from-[#f9ca24] to-[#ffd700]",
    questions: "۴۰ سوال تصادفی",
    duration: "۴۰ دقیقه"
  },
  {
    id: 3,
    title: "WORD",
    icon: "/assets/exams/exam3.png",
    color: "from-[#f9ca24] to-[#ffd700]",
    questions: "۴۰ سوال تصادفی",
    duration: "۴۰ دقیقه"
  },
  {
    id: 4,
    title: "EXCEL",
    icon: "/assets/exams/exam4.png",
    color: "from-[#f9ca24] to-[#ffd700]",
    questions: "۴۰ سوال تصادفی",
    duration: "۴۰ دقیقه"
  },
  {
    id: 5,
    title: "ACCESS",
    icon: "/assets/exams/exam5.png",
    color: "from-[#f9ca24] to-[#ffd700]",
    questions: "۴۰ سوال تصادفی",
    duration: "۴۰ دقیقه"
  },
  {
    id: 6,
    title: "POWERPOINT",
    icon: "/assets/exams/exam6.png",
    color: "from-[#f9ca24] to-[#ffd700]",
    questions: "۴۰ سوال تصادفی",
    duration: "۴۰ دقیقه"
  },
  {
    id: 7,
    title: "اینترنت",
    icon: "/assets/exams/exam7.png",
    color: "from-[#f9ca24] to-[#ffd700]",
    questions: "۴۰ سوال تصادفی",
    duration: "۴۰ دقیقه"
  },
  {
    id: 8,
    title: "شبیه ساز آزمون فنی و حرفه ای",
    icon: "/assets/exams/exam8.png",
    color: "from-[#f9ca24] to-[#ffd700]",
    questions: "۴۰ سوال تصادفی",
    duration: "۴۰ دقیقه"
  },
  {
    id: 9,
    title: "ارز دیجیتال",
    icon: "/assets/exams/exam9.png",
    color: "from-[#f9ca24] to-[#ffd700]",
    questions: "۴۰ سوال تصادفی",
    duration: "۴۰ دقیقه"
  },
  {
    id: 10,
    title: "پداگوژی",
    icon: "/assets/exams/exam10.png",
    color: "from-[#f9ca24] to-[#ffd700]",
    questions: "۴۰ سوال تصادفی",
    duration: "۴۰ دقیقه"
  },
  {
    id: 11,
    title: "پایتون",
    icon: "/assets/exams/exam11.webp",
    color: "from-[#f9ca24] to-[#ffd700]",
    questions: "۴۰ سوال تصادفی",
    duration: "۴۰ دقیقه"
  },
  {
    id: 12,
    title: "طراحی سایت",
    icon: "/assets/exams/exam12.png",
    color: "from-[#f9ca24] to-[#ffd700]",
    questions: "۴۰ سوال تصادفی",
    duration: "۴۰ دقیقه"
  }
];

export default function ExamGrid() {
  return (
    <div className="w-full py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-[#D4AF37] blur-3xl opacity-20 rounded-full"></div>
            <h2 className="relative text-4xl md:text-5xl font-bold text-[#000080]">
              📚 آزمون‌های تخصصی
            </h2>
          </div>
          <p className="text-[#1A1A2E] mt-4 text-lg max-w-2xl mx-auto">
            مهارت خود را بسنجید | ۴۰ سوال تصادفی از بانک سوالات 
          </p>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exams.map((exam) => (
            <Link href={`/exam${exam.id}`} key={exam.id}>
              <div className="group relative bg-white rounded-2xl p-6 border-2 border-[#E8E8F0] hover:border-[#D4AF37] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] hover:-translate-y-2 cursor-pointer overflow-hidden">
                
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/5 to-[#D4AF37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                
                <div className="text-6xl mb-4 relative">
                  <span className="relative z-10">
                    <Image src={exam.icon} alt="exam icon" width={96} height={96} className="w-24 h-auto" />
                  </span>
                  <div className="absolute inset-0 bg-[#D4AF37]/20 blur-2xl rounded-full scale-150 opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-[#000080] mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
                  {exam.title}
                </h3>
                
                <p className="text-[#1A1A2E] text-sm mb-4 leading-relaxed">
                  {exam.description}
                </p>
                
                <div className="w-12 h-0.5 bg-[#D4AF37] mb-4 group-hover:w-full transition-all duration-500"></div>
                
                <div className="flex justify-between items-center text-xs text-[#000080]/60">
                  <div className="flex items-center gap-1">
                    <span>📋</span>
                    <span>{exam.questions}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>⏱️</span>
                    <span>{exam.duration}</span>
                  </div>
                </div>
                
                <div className="mt-5 flex justify-end">
                  <div className="text-[#D4AF37] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                    شروع آزمون
                    <span className="text-lg">←</span>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}