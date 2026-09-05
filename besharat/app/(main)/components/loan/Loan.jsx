// components/Loan.js
"use client";

import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

export function Loan() {
  const [open, setOpen] = useState(null);

  const handleToggle = (id) => {
    setOpen(open === id ? null : id);
  };

  return (
    <div className="flex flex-col items-center bg-white px-4 py-8 rounded-2xl shadow-md">
      <h1 className="text-[#000080] mb-10 text-2xl font-bold text-center">شرایط دریافت تسهیلات وام خود اشتغالی سازمان فنی و حرفه‌ای با استفاده از دیپلم مهارت</h1>
      <div className="flex flex-wrap justify-around w-full mb-16">
        {/* First Column */}
        <div className="w-[500px] px-2">
          <AccordionItem
            id={1}
            open={open}
            onClick={() => handleToggle(1)}
            title="معرفی تسهیلات وام خوداشتغالی سازمان فنی و حرفه‌ای"
          >
        سازمان آموزش فنی و حرفه‌ای کشور به منظور حمایت از مهارت‌آموختگان و فارغ‌التحصیلان دوره‌های تخصصی، تسهیلات وام خوداشتغالی با شرایط ویژه را اعطا می‌کند. این وام با هدف ایجاد کسب‌وکار پایدار برای هنرجویانی طراحی شده که دوره‌های مهارتی را با موفقیت گذرانده‌اند.
          </AccordionItem>
          <AccordionItem
            id={2}
            open={open}
            onClick={() => handleToggle(2)}
            title=" مبلغ وام و دوره بازپرداخت"
          >
          مبلغ این تسهیلات خوداشتغالی ۳۵۰ میلیون تومان است که نسبت به بسیاری از وام‌های مشابه، مبلغ قابل توجهی برای راه‌اندازی یا تجهیز کارگاه، دفکار، یا کسب‌وکار شخصی محسوب می‌شود. متقاضیان می‌توانند این وام را در دوره بازپرداخت ۷ ساله (۸۴ ماه) اقساطی برگردانند که این مدت زمان مناسب برای به نتیجه رسیدن کسب‌وکار است.
          </AccordionItem>
          <AccordionItem
            id={3}
            open={open}
            onClick={() => handleToggle(3)}
            title="نرخ کارمزد و مزیت آن"
          >
            نرخ کارمزد این تسهیلات فقط ۴ درصد در سال است که در مقایسه با تسهیلات بانکی معمولی (با سودهای ۱۸ تا ۲۳ درصد) بسیار پایین و کاملاً حمایتی محسوب می‌شود. کارمزد ۴ درصدی فشار اقساط را به حداقل رسانده و بازپرداخت را برای مهارت‌آموختگان آسان می‌کند.
          </AccordionItem>
        </div>

        {/* Second Column */}
        <div className="w-[500px] px-2">
          <AccordionItem
            id={4}
            open={open}
            onClick={() => handleToggle(4)}
            title=" شرایط دریافت و مراحل اقدام"
          >
            برای دریافت این وام، متقاضی باید دارای گواهینامه مهارت از سازمان فنی و حرفه‌ای بوده و طرح کسب‌وکار خود را به شعب بانک‌های عامل ارائه دهد. پس از تأیید طرح، تسهیلات ظرف مدت معینی پرداخت می‌شود و هنرجو می‌تواند بدون نیاز به ضامن سنگین، از این حمایت دولتی بهره‌مند شود.
          </AccordionItem>
         
        </div>
      </div>

      <a href="loanPage" className="w-full">
        <button className="bg-[#000080] hover:bg-[#B8960F] text-[#D4AF37] hover:text-[#000080] font-bold text-base w-full py-3 rounded-lg transition-all shadow-md hover:shadow-lg">
          ثبت درخواست وام
        </button>
      </a>
    </div>
  );
}