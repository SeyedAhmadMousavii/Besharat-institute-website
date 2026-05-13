"use client";

import Link from "next/link";

const exams = [
  {
    id: 1,
    title: "IT",
    icon: "💻",
    color: "from-[#f9ca24] to-[#ffd700]",
    questions: "۴۰ سوال تصادفی",
    duration: "۴۰ دقیقه"
  },
  {
    id: 2,
    title: "WINDOWS",
    icon: "💻",
    color: "from-[#f9ca24] to-[#ffd700]",
    questions: "۴۰ سوال تصادفی",
    duration: "۴۰ دقیقه"
  },
  {
    id: 3,
    title: "WORD",
    icon: "💻",
    color: "from-[#f9ca24] to-[#ffd700]",
    questions: "۴۰ سوال تصادفی",
    duration: "۴۰ دقیقه"
  },
  {
    id: 4,
    title: "EXCEL",
    icon: "💻",
    color: "from-[#f9ca24] to-[#ffd700]",
    questions: "۴۰ سوال تصادفی",
    duration: "۴۰ دقیقه"
  },
  {
    id: 5,
    title: "ACCESS",
    icon: "💻",
    color: "from-[#f9ca24] to-[#ffd700]",
    questions: "۴۰ سوال تصادفی",
    duration: "۴۰ دقیقه"
  },
  {
    id: 6,
    title: "POWERPOINT",
    icon: "💻",
    color: "from-[#f9ca24] to-[#ffd700]",
    questions: "۴۰ سوال تصادفی",
    duration: "۴۰ دقیقه"
  },
  {
    id: 7,
    title: "اینترنت",
    icon: "💻",
    color: "from-[#f9ca24] to-[#ffd700]",
    questions: "۴۰ سوال تصادفی",
    duration: "۴۰ دقیقه"
  },
  {
    id: 8,
    title: "شبیه ساز آزمون فنی و حرفه ای",
    icon: "💻",
    color: "from-[#f9ca24] to-[#ffd700]",
    questions: "۴۰ سوال تصادفی",
    duration: "۴۰ دقیقه"
  },
  {
    id: 9,
    title: "ارز دیجیتال",
    icon: "💻",
    color: "from-[#f9ca24] to-[#ffd700]",
    questions: "۴۰ سوال تصادفی",
    duration: "۴۰ دقیقه"
  }
];

export default function ExamGrid() {
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* هدر بخش */}
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-[#f9ca24] blur-3xl opacity-20 rounded-full"></div>
            <h2 className="relative text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#f9ca24] to-[#ffd700] bg-clip-text text-transparent">
              📚 آزمون‌های تخصصی
            </h2>
          </div>
          <p className="text-[#f9ca24]/70 mt-4 text-lg max-w-2xl mx-auto">
            مهارت خود را بسنجید | ۴۰ سوال تصادفی از بانک سوالات 
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#f9ca24] to-[#ffd700] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* گرید ۹ تایی */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exams.map((exam) => (
            <Link href={`/exam${exam.id}`} key={exam.id}>
              <div className="group relative backdrop-blur-sm bg-[#0f1535]/40 rounded-2xl p-6 border border-[#f9ca24]/20 hover:border-[#f9ca24]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,202,36,0.15)] hover:-translate-y-2 cursor-pointer overflow-hidden">
                
                {/* افکت درخشش پشت کارت */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#f9ca24]/0 via-[#f9ca24]/5 to-[#f9ca24]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                
                {/* آیکون بزرگ */}
                <div className="text-6xl mb-4 relative">
                  <span className="relative z-10">{exam.icon}</span>
                  <div className="absolute inset-0 bg-[#f9ca24]/20 blur-2xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* عنوان */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#f9ca24] transition-colors duration-300">
                  {exam.title}
                </h3>
                
                {/* توضیحات */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {exam.description}
                </p>
                
                {/* خط جداکننده طلایی */}
                <div className="w-12 h-0.5 bg-gradient-to-r from-[#f9ca24] to-[#ffd700] mb-4 group-hover:w-full transition-all duration-500"></div>
                
                {/* اطلاعات آزمون */}
                <div className="flex justify-between items-center text-xs text-[#f9ca24]/60">
                  <div className="flex items-center gap-1">
                    <span>📋</span>
                    <span>{exam.questions}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>⏱️</span>
                    <span>{exam.duration}</span>
                  </div>
                </div>
                
                {/* دکمه شروع */}
                <div className="mt-5 flex justify-end">
                  <div className="text-[#f9ca24] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                    شروع آزمون
                    <span className="text-lg">←</span>
                  </div>
                </div>
                
                {/* حاشیه طلایی در هاور */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#f9ca24] to-[#ffd700] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}