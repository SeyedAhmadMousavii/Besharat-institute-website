import { Button } from "@material-tailwind/react";
import { ClockIcon } from "@heroicons/react/24/solid";
import { string } from "yup";
import Link from "next/link";
import Image from "next/image";
export const metadata = {
  title: 'مقالات آموزشی | وبلاگ آموزشگاه بشارت',
  description: 'مطالعه مقالات تخصصی در حوزه کامپیوتر، ارز دیجیتال، حسابداری، توسعه فردی، مدیریت و روانشناسی بازارهای مالی',
  keywords: 'مقالات آموزشی, وبلاگ بشارت, آموزش کامپیوتر, آموزش ارز دیجیتال, توسعه فردی, مدیریت, روانشناسی بازار',
}

export default function Maghalat({ Key, title, image, teacher, href , time , color }) {
        return (
            <div className="flex-col justify-around align-middle rounded-3xl p-2 md:mt-10 mt-20 mb-16 mx-6 w-72 shadow-lg hover:scale-105 transition-all vertical-movement bg-white border border-[#E8E8F0]" id={color}
                key={title} >
                    <Image
                    src={image}
                    alt="coursePic"
                    width={300}
                    height={200}
                    className="w-[90%] h-auto overflow-hidden -mt-16 mb-4 mx-auto shadow-xl rounded-3xl"
                  />
                <h1 className="font-bold mb-4 text-lg text-white">{title}</h1>
                <div className="flex justify-center align-middle p-2">
                    <p className="mb-2 font-fa text-white">نویسنده : {teacher}</p>
                </div> 
                <div className="flex">
                    <Link href={href} className="w-full">
                    <Button
                        className="font-fa text-base rounded-full w-full bg-[#D4AF37] text-white hover:bg-[#B8960F] transition-all shadow-md hover:shadow-lg"
                    >
                        بخوانیم!!
                    </Button>
                    </Link>
                </div>
            </div>
     );
}