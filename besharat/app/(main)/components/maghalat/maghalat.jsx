import { Button } from "@material-tailwind/react";
import { ClockIcon } from "@heroicons/react/24/solid";
import { string } from "yup";
import Link from "next/link";
    export default function Maghalat({ Key, title, image, teacher, href , time , color }) {
        return (
            <div className="flex-col justify-around align-middle rounded-3xl p-2 md:mt-10 mt-20 mb-16 mx-6 w-72 shadow-2xl hover:scale-105 transition-all vertical-movement" id={color}
                key={title} >
                    <img
                    src={image}
                    alt="coursePic"
                    className="w-[90%] overflow-hidden -mt-16 mb-4 mx-auto shadow-2xl rounded-3xl"
                  />
                <h1 className="font-bold mb-4 text-lg text-white">{title}</h1>
                <div className="flex justify-center align-middle p-2">
                    <p className="mb-2 font-fa text-white">نویسنده : {teacher}</p>
                </div> 
                <div className="flex">
                    <Link href={href} className="w-full">
                    <Button
                        className="font-fa text-base rounded-full w-full font-fa bg-[#ffd700] text-bg-900"
                    >
                        بخوانیم!!
                    </Button>
                    </Link>
                </div>
            </div>
     );
}