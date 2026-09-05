import {
    Button,
  } from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
  
  export default function CourseCard({
  title,
  image,
  price,
  teacher,
  href,
  id,
  onButtonClick,
}) {
  return (
    <div className="flex-col justify-around align-middle rounded-3xl w-80 p-3 md:mt-10 mt-20 mb-16 mx-auto bg-white shadow-lg hover:scale-105 transition-all vertical-movement text-[#1A1A2E] border border-[#E8E8F0]">

      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        unoptimized
        className="w-full h-48 object-cover overflow-hidden -mt-16 mb-4 shadow-xl rounded-3xl"
      />
        <h1 className="font-bold mb-4 text-xl flex justify-center text-[#000080]">{title}</h1>
        <div className="flex justify-between align-middle p-2">
          <div>
            <p className="mb-2 font-fa font-bold text-[#1A1A2E]">مدرس :</p>
            <p className="mb-2 font-fa font-bold text-[#1A1A2E]">{teacher}</p>
          </div>
          <Link href={href} className="text-[#D4AF37] font-bold font-fa border-r-2 border-[#E8E8F0] pr-8 pt-8 hover:text-[#B8960F] transition-colors">مشاهده دوره</Link>
        </div>
        <div className="flex">
          <Button
            className="font-fa text-base my-3 rounded-full w-1/2 bg-[#000080] text-[#D4AF37] hover:bg-[#B8960F] hover:text-[#000080] transition-all shadow-md hover:shadow-lg"
            id={id}
            onClick={() => onButtonClick(id)}
          >
            ثبت نام
          </Button>
          <p className="m-auto font-extrabold text-[#000080]">{price}</p>
        </div>
      </div>
    );
  }