import React from "react";
import Maghalat from "./maghalat";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import Head from "next/head";

export default function ArticlePage() {
    const data = [
      {
        label: "Web",
        value: "Web",
        courses: [
          {
            id: 1, 
            image: "/assets/maghalat/maghale-icdl.jpg",
            title: "مهارت های هفتگانه",
            time: "00:06:00",
            href: "/articlePage/icdl",
            teacher: "ایلیا درخشان",
            color: "bg-green-class"
          },
          {
            id: 2,  
            image: "/assets/maghalat/maghale-windows.jpg",
            title: "ویندوز",
            time: "00:07:00",
            href: "/articlePage/windowsArticle",
            teacher: "علیرضا رضایی سعید",
            color: "bg-blue-class"
          },
          {
            id: 3,  
            image: "/assets/maghalat/maghale-arz.jpg",
            title: "ارزدیجیتال چیست؟",
            time: "00:08:00",
            href: "/articlePage/digitalCurrency",
            teacher: "سیداحمد موسوی",
            color: "bg-orange-class"
          },
          {
            id: 4,  
            image: "/assets/maghalat/Entrepreneurship.png",
            title: "روز کارآفرینی",
            time: "00:08:00",
            href: "/articlePage/Entrepreneurship",
            teacher: "ساناز فراهانی",
            color: "bg-red-class"
          },
          {
            id: 5,  
            image: "/assets/maghalat/کامپیوتر_فناوری_که_جهان_را_متحول_کرد.png",
            title: "کامپیوتر جهان را متحول کرد",
            time: "00:08:00",
            href: "/articlePage/transformTheWorld",
            teacher: "ساناز فراهانی",
            color: "bg-blue-class"
          },
        ],
      },
    ];
  
    return (
      <>
        <Head>
          <title>مقالات آموزشی | وبلاگ آموزشگاه بشارت</title>
          <meta name="description" content="مطالعه مقالات تخصصی در حوزه کامپیوتر، ارز دیجیتال، حسابداری، توسعه فردی، مدیریت و روانشناسی بازارهای مالی" />
          <meta name="keywords" content="مقالات آموزشی, وبلاگ بشارت, آموزش کامپیوتر, آموزش ارز دیجیتال, توسعه فردی, مدیریت, روانشناسی بازار" />
        </Head>
        <div className="md:px-8 px-auto m-2 mt-16 bg-white min-h-screen">
          <div className="flex align-middle">
            <Image src="/assets/maghalatIcon.jpg" alt="speaker" width={112} height={112} className="w-28 h-auto -mt-10" />
            <h2 className="text-[#000080] font-extrabold text-3xl md:text-4xl">مقـــــالات</h2>
          </div>
          <div id="custom-animation" value="Web">
            <div>
              {data.map(({ value, courses }) => (
                <div key={value} value={value} className="mt-14">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center font-fa">
                    {courses ?
                      courses.map(({ id, image, title, time, href, teacher, color }) => (
                        <Maghalat key={id} title={title} time={time} href={href} image={image} teacher={teacher} color={color} />
                      )) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
}