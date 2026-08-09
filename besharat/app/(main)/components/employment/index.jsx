"use client";
import 'animate.css';
import { Button } from "@material-tailwind/react";
import Link from 'next/link';

const Employment = () => {
    return ( 
        <div className="pt-10 px-4 mx-6 mb-16">
      <div className="flex flex-col-reverse md:flex-row-reverse gap-4 justify-between container mx-auto">
        <div className="flex-col justify-around mt-9">
          <h1 className="text-2xl md:text-3xl font-extrabold mb-4 text-center md:text-start text-white flex justify-center">
            استخـــــــدام شــــــــو!!
          </h1>
          <h1 className="text-white m-auto text-lg md:text-xl text-center md:text-start flex justify-center mb-1 mt-6">
          با مراجعه به لینک زیر استخدام شوید.
          </h1>
          <h1 className="text-white m-auto text-lg md:text-xl text-center md:text-start mb-10 flex justify-center">
             با مراجعه و پر کردن لینک زیر می توانید جزو همکاران ما باشید.
             </h1>
          
          <div className="flex flex-col md:flex-row items-stretch align-middle px-2 gap-4">
            <Link href="employmentPage" className='w-full'>
            <Button size="md" className="flex-grow font-fa text-base border-2 w-full rounded-3xl border-[#ffd700] text-[#ffd700] bg-[#020621] hover:bg-[#ffd700] hover:text-[#020621]">
              بزن بــــــــریم!
            </Button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <img
            src="/assets/employment.png"
            className="w-[450px] md:-mt-16"
            alt="main-banner"
          />
        </div>
      </div>
    </div>
     );
}
 
export default Employment;