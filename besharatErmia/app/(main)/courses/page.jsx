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

export default function Page() {
  const data = [
    {
      label: "کامپیوتر",
      value: "کامپیوتر",
      courses: [
        {
          id: 1,
          image: "/assets/coursesBanner/icdl.jpg",
          title: "ICDL",
          price: "12,887,833 تومان",
          href: "/IntroCourse/icdl",
          teacher: "سیداحمد موسوی",
        },
        {
          id: 2,
          image: "assets/coursesBanner/preliminarily-web.jpg",
          title: "طراحی وب مقدماتی",
          price: "23,734,276 تومان",
          href: "/IntroCourse/webP",
          teacher: "سیداحمد موسوی",
        },
        {
          id: 3,
          image: "assets/coursesBanner/complimentary-web.jpg",
          title: "طراحی وب تکمیلی",
          price: "28,251,529 تومان",
          href: "/IntroCourse/webC",
          teacher: "سیداحمد موسوی",
        },
        {
          id: 4,
          image: "assets/coursesBanner/AI.jpg",
          title: "هوش مصنوعی",
          price: "23,707,110 تومان",
          href: "/IntroCourse/AI",
          teacher: "ساناز فراهانی",
        },
        {
          id: 5,
          image: "assets/coursesBanner/photoshop.jpg",
          title: "Photoshop",
          price: "17,647,216 تومان",
          href: "/IntroCourse/photoshop",
          teacher: "ساناز فراهانی",
        },
        {
          id: 6,
          image: "assets/coursesBanner/premier.jpg",
          title: "Premiere",
          price: "12,658,280 تومان",
          href: "/IntroCourse/premiere",
          teacher: "ساناز فراهانی",
        },
        {
          id: 7,
          image: "assets/coursesBanner/corel.jpg",
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
          image: "assets/coursesBanner/preliminarily-accounting.jpg",
          title: "حسابدار",
          price: "18,144,000 تومان",
          href: "/IntroCourse/accountingP",
          teacher: "سیدحسین قزل ایاغ",
        },
        {
          id: 9,
          image: "assets/coursesBanner/assist-accounter.jpg",
          title: "کمک حسابدار",
          price: "18,480,000 تومان",
          href: "/IntroCourse/assistA",
          teacher: "سیدحسین قزل ایاغ",
        },
        {
          id: 10,
          image: "assets/coursesBanner/salary.jpg",
          title: "حسابداری حقوق و دستمزد",
          price: "9,676,800 تومان",
          href: "/IntroCourse/salary",
          teacher: "سیدحسین قزل ایاغ",
        },
        {
          id: 11,
          image: "assets/coursesBanner/bahaye-tamam.jpg",
          title: "حسابداری بهای تموم شده",
          price: "18,144,000 تومان",
          href: "/IntroCourse/bahayeTamam",
          teacher: "سیدحسین قزل ایاغ",
        },
        {
          id: 12,
          image: "assets/coursesBanner/assist-mali.jpg",
          title: "کمک متصدی تنظیم اسناد مالی",
          price: "19,008,138 تومان",
          href: "/IntroCourse/assistMali",
          teacher: "سیدحسین قزل ایاغ",
        },
        {
          id: 13,
          image: "assets/coursesBanner/Holoo.jpg",
          title: "کار با نرم افزار هلو",
          price: "18,000,000 تومان",
          href: "/IntroCourse/Holoo",
          teacher: "سیدحسین قزل ایاغ",
        },
        {
          id: 14,
          image: "assets/coursesBanner/Excel .jpg",
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
          image: "assets/coursesBanner/digitalCurrency.jpg",
          title: "تحلیلگر بازارهای مالی بین لملل",
          price: "37,800,000 تومان",
          href: "/IntroCourse/cryptocurrency",
          teacher: "ایلیا درخشان",
        },
        {
          id: 16,
          image: "assets/coursesBanner/تحلیلگر تکنیکال .jpg",
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
          image: "assets/coursesBanner/v-ray.jpg",
          title: "V-ray",
          price: "--- تومان",
          href: "/IntroCourse/Vray",
          teacher: "ساناز فراهانی",
        },
        {
          id: 18,
          image: "assets/coursesBanner/3dMax.jpg",
          title: "3D MAX",
          price: "19,051,200 تومان",
          href: "/IntroCourse/3dmax",
          teacher: "ساناز فراهانی",
        },
        {
          id: 19,
          image: "assets/coursesBanner/Autocad.jpg",
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
          image: "assets/coursesBanner/مدیر ارشد .jpg",
          title: "MBA",
          price: "43,092,000 تومان",
          href: "/IntroCourse/MBA",
          teacher: "ساناز فراهانی",
        },
        {
          id: 21,
          image: "assets/coursesBanner/goldsmithing.jpg",
          title: "طلاسازی",
          price: "--- تومان",
          href: "/IntroCourse/goldsmithing",
          teacher: "ساناز فراهانی",
        },
        {
          id: 22,
          image: "assets/coursesBanner/nutrition.jpg",
          title: "تغذیه",
          price: "--- تومان",
          href: "/IntroCourse/nutrition",
          teacher: "ساناز فراهانی",
        },
        {
          id: 23,
          image: "assets/coursesBanner/tourism.jpg",
          title: "گردشگری",
          price: "--- تومان",
          href: "/IntroCourse/tourism",
          teacher: "ساناز فراهانی",
        },
        {
          id: 24,
          image: "assets/coursesBanner/management.jpg",
          title: "مدیریت",
          price: "--- تومان",
          href: "/IntroCourse/management",
          teacher: "ساناز فراهانی",
        },
        {
          id: 25,
          image: "assets/coursesBanner/negotiation.jpg",
          title: "مهارت نرم",
          price: "--- تومان",
          href: "/IntroCourse/negotiation",
          teacher: "ساناز فراهانی",
        },
        {
          id: 26,
          image: "assets/coursesBanner/ttcICDL.jpg",
          title: " ICDL تربیت مدرس",
          price: "--- تومان",
          href: "/IntroCourse/ttcICDL",
          teacher: "ساناز فراهانی",
        },
        {
          id: 27,
          image: "assets/coursesBanner/storagePage.jpg",
          title: "انبارداری",
          price: "18,144,000 تومان",
          href: "/IntroCourse/storegePage",
          teacher: "ساناز فراهانی",
        },
        {
          id: 28,
          image: "assets/coursesBanner/OAU.jpg",
          title: "کاربر اتوماسیون اداری",
          price: "--- تومان",
          href: "/IntroCourse/OAU",
          teacher: "ساناز فراهانی",
        },
        {
          id: 29,
          image: "assets/coursesBanner/ttcCrypto.jpg",
          title: "تربیت مدرس ارز دیجیتال",
          price: "--- تومان",
          href: "/IntroCourse/ttcCrypto",
          teacher: "ساناز فراهانی",
        },
        {
          id: 30,
          image: "assets/coursesBanner/ttcAccounting.jpg",
          title: "تربیت مدرس حسابداری",
          price: "--- تومان",
          href: "/IntroCourse/ttcAccounting",
          teacher: "ساناز فراهانی",
        },
        {
          id: 31,
          image: "assets/coursesBanner/admin.jpg",
          title: "تولید محتوا",
          price: "--- تومان",
          href: "/IntroCourse/adminP",
          teacher: "ساناز فراهانی",
        },
        {
          id: 33,
          image: "assets/coursesBanner/توسعه فردی .jpg",
          title: "توسعه فردی",
          price: "43,092,000 تومان",
          href: "/IntroCourse/coaching",
          teacher: "فاطمه کریموند",
        },
        {
          id: 34,
          image: "assets/coursesBanner/پداگوژی .jpg",
          title: "پداگوژی",
          price: "10,886,400 تومان",
          href: "/IntroCourse/pedagogy",
          teacher: "ساناز فراهانی",
        },
      ],
    },
  ];

  const [buttonIds, setButtonIds] = useState([]);

  useEffect(() => {
    const storedIds = localStorage.getItem("buttonIds");
    if (storedIds) {
      setButtonIds(JSON.parse(storedIds));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("buttonIds", JSON.stringify(buttonIds));
    localStorage.setItem("buttonIdsLength", buttonIds.length);
  }, [buttonIds]);

  const handleButtonClick = (id) => {
    setButtonIds((prevIds) => [...prevIds, id]);
    window.location.reload();
  };

  return (
    <div className="mx-auto px-10 m-2 min-h-screen">
      <Tabs id="custom-animation" value="کامپیوتر">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value} className="font-fa bg-[#ffd700] font-bold h-auto">
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
                    onButtonClick={handleButtonClick}
                  />
                ))}
              </div>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
