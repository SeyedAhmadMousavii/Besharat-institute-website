import {
    Button,
  } from "@material-tailwind/react";
import Link from "next/link";
  
  export default function CourseCard({ key, title, image, price, teacher, href, id, onButtonClick }) {
    return (
      <div className="flex-col justify-around align-middle rounded-3xl md:w-72 p-3 md:mt-10 mt-20 mb-16 bg-white shadow-2xl hover:scale-105 transition-all vertical-movement text-black"
        key={title} >
        <img
          src={image}
          alt="coursePic"
          className="w-full overflow-hidden -mt-16 mb-4 shadow-2xl rounded-3xl"
        />
        <h1 className="font-bold mb-4 text-xl flex justify-center">{title}</h1>
        <div className="flex justify-between align-middle p-2">
          <div>
            <p className="mb-2 font-fa font-bold">مدرس :</p>
            <p className="mb-2 font-fa font-bold">{teacher}</p>
          </div>
          <Link href={href} className="text-[#ffd700] font-bold font-fa border-r-2 border-slate-400 pr-8 pt-8">مشاهده دوره</Link>
        </div>
        <div className="flex">
          <Button
            className="font-fa text-base my-3 rounded-full w-1/2 font-fa bg-[#ffd700] text-[#020620]"
            id={id}
            onClick={() => onButtonClick(id)}
            disabled
          >
            ثبت نام
          </Button>
          <p className="m-auto font-extrabold">{price}</p>
        </div>
      </div>
    );
  }
  