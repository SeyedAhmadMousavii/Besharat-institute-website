import React from "react";
import PodCasts from "./PodCasts";
import { Button } from "@material-tailwind/react";

export default function PodCastPage() {
    const data = [
      {
        label: "Web",
        value: "Web",
        courses: [
          {
            image: "assets/podCast/Pod1.jpg",
            title: "برنامه نویسی چیست؟",
            time: "00:04:30",
            href: "/podCastsPages/programming",
            teacher: "سودبخش",
            color: "bg-purple-class"
          },
          {
            image: "assets/podCast/Pod2.jpg",
            title: "ارزدیجیتال چیست؟",
            time: "00:04:00",
            href: "/podCastsPages/digital",
            teacher: "سودبخش",
            color: "bg-red-class"
          },
          {
            image: "assets/podCast/Pod3.jpg",
            title: "حسابداری پیست؟",
            time: "00:04:30",
            href: "/podCastsPages/accounting",
            teacher: "ابراهیمی",
            color: "bg-green-class"
          },
          {
            image: "assets/podCast/Pod4.jpg",
            title: "طراحی گرافیک چیست؟",
            time: "00:03:40",
            href: "/podCastsPages/graphic",
            teacher: "فریدی",
            color: "bg-blue-class"
          },
        ],
      },
    ];
  
    return (
      <div className="md:px-8 px-auto m-2">
        <div className="flex align-middle">
          <img src="assets/speaker.jpg" alt="speaker" className="w-36 -mt-8" />
          <h2 className="text-white font-extrabold text-3xl md:text-4xl">پــــــادکست ها</h2>
        </div>
        <div id="custom-animation" value="Web">
          <div>
            {data.map(({ value, courses }, pk) => (
              <div key={value} value={value} className="mt-14">
                <div className="md:flex md:justify-around md:align-middle font-fa flex-wrap">
                  {courses ?
                    courses.map(({ image, title, time, href, teacher, color }) => (
                      <PodCasts key={pk} title={title} time={time} href={href} image={image} teacher={teacher} color={color} />
                    )) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }