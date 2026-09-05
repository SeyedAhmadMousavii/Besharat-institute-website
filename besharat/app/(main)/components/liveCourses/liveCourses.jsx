import { Button } from "@material-tailwind/react";
import { ClockIcon } from "@heroicons/react/24/outline";
import { string } from "yup";
import Image from "next/image";

export default function LiveCourses({ image, title, time, day }) {
        return (
            <div className="flex-col justify-around align-middle rounded-3xl md:mt-10 mt-20 mb-16 mx-6 w-72 shadow-lg hover:scale-105 transition-all bg-white border border-[#E8E8F0]"
                key={title} >
                    <Image
                    src={image}
                    alt="coursePic"
                    width={288}
                    height={200}
                    className="w-full h-auto overflow-hidden -mt-16 mb-4 mx-auto shadow-xl rounded-3xl"
                  />
                <h1 className="font-bold mb-4 text-3xl flex justify-center text-[#D4AF37]">{title}</h1>
                <div className="flex justify-between align-middle p-2">
                    <p className="mb-2 font-fa text-[#000080]">{day}</p>
                    
                   <div className="flex text-[#D4AF37]">
                   <p className="mt-1 text-lg">{time}</p>
                   <ClockIcon className="text-[#D4AF37] w-8 m-0 mr-1"/>
                   </div>
                </div> 
            </div>
     );
}