// /courses/Page.jsx
"use client";
import React, { useState, useEffect } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import CourseCard from "./courseCard.jsx";
import Head from "next/head";

export default function Page() {
  const data = [
    {
      label: "کامپیوتر",
      value: "کامپیوتر",
      courses: [
        {
          id: 1,
          image: "/assets/coursesBanner/icdl.png",
          title: "ICDL",
          price: "12,887,833 تومان",
          href: "/IntroCourse/icdl",
          teacher: "سیداحمد موسوی",
        },
        {
          id: 2,
          image: "/assets/coursesBanner/preliminarily-web.png",
          title: "طراحی وب مقدماتی",
          price: "23,734,276 تومان",
          href: "/IntroCourse/webP",
          teacher: "سیداحمد موسوی",
        },
        {
          id: 3,
          image: "/assets/coursesBanner/complimentary-web.png",
          title: "طراحی وب تکمیلی",
          price: "28,251,529 تومان",
          href: "/IntroCourse/webC",
          teacher: "سیداحمد موسوی",
        },
        {
          id: 4,
          image: "/assets/coursesBanner/AI.png",
          title: "هوش مصنوعی",
          price: "23,707,110 تومان",
          href: "/IntroCourse/AI",
          teacher: "ساناز فراهانی",
        },
        {
          id: 5,
          image: "/assets/coursesBanner/photoshop.png",
          title: "Photoshop",
          price: "17,647,216 تومان",
          href: "/IntroCourse/photoshop",
          teacher: "ساناز فراهانی",
        },
        {
          id: 6,
          image: "/assets/coursesBanner/premier.png",
          title: "Premiere",
          price: "12,658,280 تومان",
          href: "/IntroCourse/premiere",
          teacher: "ساناز فراهانی",
        },
        {
          id: 7,
          image: "/assets/coursesBanner/corel.png",
          title: "Corel",
          price: "11,830,636 تومان",
          href: "/IntroCourse/corel",
          teacher: "ساناز فراهانی",
        },
      ],
    },
    {
      label: "حسابداری",
      value: "حسابداری",
      courses: [
        {
          id: 8,
          image: "/assets/coursesBanner/preliminarily-accounting.png",
          title: "حسابدار",
          price: "18,144,000 تومان",
          href: "/IntroCourse/accountingPage",
          teacher: "سیدحسین قزل ایاغ",
        },
        {
          id: 9,
          image: "/assets/coursesBanner/assist-accounter.png",
          title: "کمک حسابدار",
          price: "18,480,000 تومان",
          href: "/IntroCourse/assistAccounting",
          teacher: "سیدحسین قزل ایاغ",
        },
        {
          id: 10,
          image: "/assets/coursesBanner/salary.png",
          title: "حسابداری حقوق و دستمزد",
          price: "9,676,800 تومان",
          href: "/IntroCourse/salary",
          teacher: "سیدحسین قزل ایاغ",
        },
        {
          id: 11,
          image: "/assets/coursesBanner/bahaye-tamam.png",
          title: "حسابداری بهای تموم شده",
          price: "18,144,000 تومان",
          href: "/IntroCourse/CostAccounting",
          teacher: "سیدحسین قزل ایاغ",
        },
        {
          id: 12,
          image: "/assets/coursesBanner/assist-mali.png",
          title: "کمک متصدی تنظیم اسناد مالی",
          price: "19,008,138 تومان",
          href: "/IntroCourse/assistFinancial",
          teacher: "سیدحسین قزل ایاغ",
        },
        {
          id: 13,
          image: "/assets/coursesBanner/Holoo.png",
          title: "کار با نرم افزار هلو",
          price: "18,000,000 تومان",
          href: "/IntroCourse/Holoo",
          teacher: "سیدحسین قزل ایاغ",
        },
        {
          id: 14,
          image: "/assets/coursesBanner/Excel .png",
          title: "Excel تخصصی",
          price: "9,600,000 تومان",
          href: "/IntroCourse/Excel",
          teacher: "سیدحسین قزل ایاغ",
        },
      ],
    },
    {
      label: "ارز دیجیتال",
      value: "ارز دیجیتال",
      courses: [
        {
          id: 15,
          image: "/assets/coursesBanner/digitalCurrency.png",
          title: "تحلیلگر بازارهای مالی بین لملل",
          price: "37,800,000 تومان",
          href: "/IntroCourse/cryptocurrency",
          teacher: "ایلیا درخشان",
        },
        {
          id: 16,
          image: "/assets/coursesBanner/تحلیلگر تکنیکال .png",
          title: "تحلیلگر تکنیکال",
          price: "41,763,617 تومان",
          href: "/IntroCourse/cryptocurrency2",
          teacher: "ایلیا درخشان",
        },
      ],
    },
    {
      label: "نقشه کشی",
      value: "نقشه کشی",
      courses: [
        {
          id: 17,
          image: "/assets/coursesBanner/v-ray.png",
          title: "V-ray",
          price: "--- تومان",
          href: "/IntroCourse/Vray",
          teacher: "ساناز فراهانی",
        },
        {
          id: 18,
          image: "/assets/coursesBanner/3dMax.png",
          title: "3D MAX",
          price: "19,051,200 تومان",
          href: "/IntroCourse/3dmax",
          teacher: "ساناز فراهانی",
        },
        {
          id: 19,
          image: "/assets/coursesBanner/Autocad.png",
          title: "Autocad",
          price: "17,102,647 تومان",
          href: "/IntroCourse/Autocad",
          teacher: "ساناز فراهانی",
        },
      ],
    },
    {
      label: "سایر",
      value: "سایر",
      courses: [
        {
          id: 20,
          image: "/assets/coursesBanner/مدیر ارشد .png",
          title: "MBA",
          price: "43,092,000 تومان",
          href: "/IntroCourse/MBA",
          teacher: "ساناز فراهانی",
        },
        {
          id: 21,
          image: "/assets/coursesBanner/goldsmithing.png",
          title: "طلاسازی",
          price: "--- تومان",
          href: "/IntroCourse/goldsmithing",
          teacher: "ساناز فراهانی",
        },
        {
          id: 22,
          image: "/assets/coursesBanner/nutrition.png",
          title: "تغذیه",
          price: "--- تومان",
          href: "/IntroCourse/nutrition",
          teacher: "ساناز فراهانی",
        },
        {
          id: 23,
          image: "/assets/coursesBanner/tourism.png",
          title: "گردشگری",
          price: "--- تومان",
          href: "/IntroCourse/tourism",
          teacher: "ساناز فراهانی",
        },
        {
          id: 24,
          image: "/assets/coursesBanner/management.png",
          title: "مدیریت",
          price: "--- تومان",
          href: "/IntroCourse/management",
          teacher: "ساناز فراهانی",
        },
        {
          id: 25,
          image: "/assets/coursesBanner/negotiation.png",
          title: "مهارت نرم",
          price: "--- تومان",
          href: "/IntroCourse/negotiation",
          teacher: "ساناز فراهانی",
        },
        {
          id: 26,
          image: "/assets/coursesBanner/ttcICDL.png",
          title: " ICDL تربیت مدرس",
          price: "--- تومان",
          href: "/IntroCourse/ttcICDL",
          teacher: "ساناز فراهانی",
        },
        {
          id: 27,
          image: "/assets/coursesBanner/storagePage.png",
          title: "انبارداری",
          price: "18,144,000 تومان",
          href: "/IntroCourse/storegePage",
          teacher: "ساناز فراهانی",
        },
        {
          id: 28,
          image: "/assets/coursesBanner/OAU.png",
          title: "کاربر اتوماسیون اداری",
          price: "--- تومان",
          href: "/IntroCourse/OAU",
          teacher: "ساناز فراهانی",
        },
        {
          id: 29,
          image: "/assets/coursesBanner/ttcCrypto.png",
          title: "تربیت مدرس ارز دیجیتال",
          price: "--- تومان",
          href: "/IntroCourse/ttcCrypto",
          teacher: "ساناز فراهانی",
        },
        {
          id: 30,
          image: "/assets/coursesBanner/ttcAccounting.png",
          title: "تربیت مدرس حسابداری",
          price: "--- تومان",
          href: "/IntroCourse/ttcAccounting",
          teacher: "ساناز فراهانی",
        },
        {
          id: 31,
          image: "/assets/coursesBanner/admin.png",
          title: "تولید محتوا",
          price: "--- تومان",
          href: "/IntroCourse/adminPage",
          teacher: "ساناز فراهانی",
        },
        {
          id: 33,
          image: "/assets/coursesBanner/توسعه فردی .png",
          title: "توسعه فردی",
          price: "43,092,000 تومان",
          href: "/IntroCourse/coaching",
          teacher: "فاطمه کریموند",
        },
        {
          id: 34,
          image: "/assets/coursesBanner/پداگوژی .png",
          title: "پداگوژی",
          price: "10,886,400 تومان",
          href: "/IntroCourse/pedagogy",
          teacher: "ساناز فراهانی",
        },
      ],
    },
  ];

  const [buttonIds, setButtonIds] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleButtonClick = (id, title) => {
    setSelectedCourse(title);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCourse("");
  };

  return (
    <>
      <Head>
        <title>دوره‌های آموزشی کامپیوتر، حسابداری و ارز دیجیتال | آموزشگاه بشارت</title>
        <meta name="description" content="مشاهده و ثبت‌نام در دوره‌های تخصصی کامپیوتر، حسابداری، ارز دیجیتال، طراحی وب، فتوشاپ، ICDL، MBA و بیش از ۳۰ دوره مهارتی دیگر با مدرک معتبر از سازمان فنی و حرفه‌ای" />
        <meta name="keywords" content="دوره آموزشی, کامپیوتر, حسابداری, ارز دیجیتال, طراحی وب, فتوشاپ, ICDL, MBA, بشارت, ثبت نام دوره" />
      </Head>
      <div className="mx-auto m-2 min-h-screen bg-white">
        <Tabs id="custom-animation" value="کامپیوتر">
          <TabsHeader className="bg-[#000080] rounded-xl p-1">
            {data.map(({ label, value }) => (
              <Tab 
                key={value} 
                value={value} 
                className="font-fa font-bold h-auto text-[#1A1A2E] data-[selected=true]:bg-[#D4AF37] data-[selected=true]:text-white transition-all rounded-lg"
                activeClassName="bg-[#D4AF37] text-white shadow-lg shadow-[#D4AF37]/30"
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, courses }) => (
              <TabPanel key={value} value={value} className="mt-6">
                <div className="w-full md:flex md:justify-around md:align-middle font-fa flex-wrap">
                  {courses.map(({ image, title, price, href, teacher, id }) => (
                    <CourseCard
                      key={id}
                      title={title}
                      href={href}
                      price={price}
                      image={image}
                      teacher={teacher}
                      id={id}
                      onButtonClick={() => handleButtonClick(id, title)}
                    />
                  ))}
                </div>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>

        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={closeModal}
            ></div>
            
            <div className="relative bg-white rounded-2xl max-w-md w-full shadow-2xl border border-[#D4AF37]/30 animate-[fadeIn_0.3s_ease-out] overflow-hidden">
              <div className="bg-gradient-to-r from-[#D4AF37] to-[#B8960F] p-4 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-xl">ثبت نام غیرفعال</h3>
              </div>
              
              <div className="p-6 text-center">
                <p className="text-[#1A1A2E] text-lg font-semibold mb-2">
                  دوره {selectedCourse}
                </p>
                <p className="text-[#1A1A2E] text-base leading-relaxed">
                  در حال حاضر امکان ثبت‌نام به صورت آنلاین وجود ندارد.
                </p>
                <div className="mt-4 p-3 bg-[#F8F9FA] rounded-xl border border-[#E8E8F0]">
                  <p className="text-[#000080] text-sm font-medium">
                    📞 برای ثبت‌نام با شماره‌های زیر تماس بگیرید:
                  </p>
                  <p className="text-[#D4AF37] font-bold text-base mt-1">
                    ۰۹۳۰۲۷۵۸۸۸۱
                  </p>
                </div>
              </div>
              
              <div className="p-4 bg-[#F8F9FA] border-t border-[#E8E8F0]">
                <button
                  onClick={closeModal}
                  className="w-full bg-[#D4AF37] hover:bg-[#B8960F] text-white font-bold py-3 rounded-xl transition-all shadow-md hover:shadow-lg"
                >
                  متوجه شدم
                </button>
              </div>
            </div>
          </div>
        )}

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.95) translateY(20px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
        `}</style>
      </div>
    </>
  );
}