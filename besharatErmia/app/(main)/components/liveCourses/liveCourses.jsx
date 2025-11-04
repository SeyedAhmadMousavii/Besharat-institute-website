import { Button } from "@material-tailwind/react";
import { ClockIcon } from "@heroicons/react/24/outline";
import { string } from "yup";
    export default function LiveCourses({ image, title, time, day }) {
        return (
            <div className="flex-col justify-around align-middle rounded-3xl md:mt-10 mt-20 mb-16 mx-6 w-72 shadow-2xl hover:scale-105 transition-all"
                key={title} >
                    <img
                    src={image}
                    alt="coursePic"
                    className="w-full overflow-hidden -mt-16 mb-4 mx-auto shadow-2xl rounded-3xl"
                  />
                <h1 className="font-bold mb-4 text-3xl flex justify-center text-[#ffd700]">{title}</h1>
                <div className="flex justify-between align-middle p-2">
                    <p className="mb-2 font-fa text-[#ffd700]">{day}</p>
                    
                   <div className="flex text-[#ffd700]">
                   <p className="mt-1 text-lg">{time}</p>
                   <ClockIcon className="text-[#ffd700] w-8 m-0 mr-1"/>
                   </div>
                </div> 
            </div>
     );
}