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
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap justify-around w-full mb-16">
        {/* First Column */}
        <div className="w-[500px] mb-12">
          <AccordionItem
            id={1}
            open={open}
            onClick={() => handleToggle(1)}
            title="شرایط عمومی"
          >
            تابعیت جمهوری اسلامی ایران دارا بودن کارت پایان خدمت نظام وظیفه یا...
          </AccordionItem>
          <AccordionItem
            id={2}
            open={open}
            onClick={() => handleToggle(2)}
            title="شرایط اختصاصی"
          >
            تابعیت جمهوری اسلامی ایران دارا بودن کارت پایان خدمت نظام وظیفه یا...
          </AccordionItem>
          <AccordionItem
            id={3}
            open={open}
            onClick={() => handleToggle(3)}
            title="نحوه بررسی درخواست تسهیلات"
          >
            انواع درخواستهای متقاضیان به دوبخش درخواستهای مستقیم و غیرمستقیم...
          </AccordionItem>
        </div>

        {/* Second Column */}
        <div className="w-[500px]">
          <AccordionItem
            id={4}
            open={open}
            onClick={() => handleToggle(4)}
            title="سقف تسهیلات و نرخ کارمزد"
          >
            حداکثر تسهیلات پرداختی به مشاغل خانگی تا مبلغ ۵۰ میلیون ریال می...
          </AccordionItem>
          <AccordionItem
            id={5}
            open={open}
            onClick={() => handleToggle(5)}
            title="تضمینات"
          >
            تضمینات مورد قبول برای پرداخت تسهیلات صندوق به شرح زیر می باشد...
          </AccordionItem>
        </div>
      </div>

      <a href="loanPage" className="w-full">
        <button className="bg-[#ffd700] text-black font-bold text-base w-full py-3 mb-16">
          ثبت درخواست وام
        </button>
      </a>
    </div>
  );
}
