import React from "react";
import Maghalat from "./maghalat";
import { Button } from "@material-tailwind/react";

export default function MaghalatPage() {
    const data = [
      {
        label: "Web",
        value: "Web",
        courses: [
          {
            image: "assets/maghalat/maghale-icdl.jpg",
            title: "مهارت های هفتگانه",
            time: "00:06:00",
            href: "/maghalePage/icdl",
            teacher: "سوری",
            color: "bg-green-class"
          },
          {
            image: "assets/maghalat/maghale-windows.jpg",
            title: "ویندوز",
            time: "00:07:00",
            href: "/maghalePage/window",
            teacher: "سوری",
            color: "bg-blue-class"
          },
          {
            image: "assets/maghalat/maghale-arz.jpg",
            title: "ارزدیجیتال چیست؟",
            time: "00:08:00",
            href: "/maghalePage/digitalCurrency",
            teacher: "موسوی",
            color: "bg-orange-class"
          },
          
        ],
      },
    ];
  
    return (
      <div className="md:px-8 px-auto m-2">
        <div className="flex align-middle">
          <img src="assets/maghalatIcon.jpg" alt="speaker" className="w-28 -mt-10" />
          <h2 className="text-white font-extrabold text-3xl md:text-4xl">مقـــــالات</h2>
        </div>
        <div id="custom-animation" value="Web">
          <div>
            {data.map(({ value, courses }, pk) => (
              <div key={value} value={value} className="mt-14">
                <div className="md:flex md:justify-around md:align-middle font-fa flex-wrap">
                  {courses ?
                    courses.map(({ image, title, time, href, teacher, color }) => (
                      <Maghalat key={pk} title={title} time={time} href={href} image={image} teacher={teacher} color={color} />
                    )) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }