import React from "react";
import LiveCourses from "./liveCourses";
import { Button } from "@material-tailwind/react";
import Image from "next/image";

export default function Page() {
    const data = [
      {
        label: "courses",
        value: "courses",
        courses: [
          {
            id: 1,
            image: "assets/coursesBanner/icdl.jpg",
            title: "ICDL",
            time: "2-4",
            day: "روزهای زوج",
          },
          {
            id: 2,
            image: "assets/coursesBanner/icdl.jpg",
            title: "ICDL",
            time: "6-8",
            day: "روزهای زوج",
          },
          {
            id: 3,
            image: "assets/coursesBanner/digitalCurrency.jpg",
            title: "ارز  دیجیتال",
            time: "4-6",
            day: "روزهای زوج",
          },
          {
            id: 4,
            image: "assets/coursesBanner/digitalCurrency.jpg",
            title: "ارز  دیجیتال",
            time: "2-4",
            day: "روزهای فرد",
          },
          {
            id: 5,
            image: "assets/coursesBanner/icdl.jpg",
            title: "ICDL",
            time: "6-8",
            day: "روزهای فرد",
          },
          {
            id: 6,
            image: "assets/coursesBanner/complimentary-web.jpg",
            title: "طراحی وب مقدماتی",
            time: "4-6",
            day: "روزهای فرد",
          },
          {
            id: 7,
            image: "assets/coursesBanner/photoshop.jpg",
            title: "Photoshop",
            time: "2-4",
            day: "روزهای فرد",
          },
          {
            id: 8,
            image: "assets/coursesBanner/assist-accounter.jpg",
            title: "کمک حسابدار",
            time: "6-8",
            day: "روزهای فرد",
          },
      
        ],
      },
    ];
  
    return (
      <div className="md:px-8 px-auto m-2">
        <div className="flex">
          <Image src="assets/liveCoursesIcon.jpg" alt="speaker" width={112} height={112} className="w-28 h-auto -mt-8" />
          <h2 className="text-[#000080] font-extrabold text-2xl md:text-3xl mt-4">دوره های در حال برگزاری</h2>
        </div>
        <div id="custom-animation" value="courses">
          <div>
            {data.map(({ value, courses }, pk) => (
              <div key={value} value={value} className="mt-14">
                <div className="flex overflow-x-scroll mb-10 pt-7">
                <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
                  {courses ?
                    courses.map(({ image, title, time, day, id }) => (
                      <LiveCourses key={pk} title={title} time={time} day={day} image={image} id={id}/>
                    )) : null}
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    );
  }