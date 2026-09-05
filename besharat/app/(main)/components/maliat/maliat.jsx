"use client";
import 'animate.css';
import { Button } from "@material-tailwind/react";
import Link from 'next/link';
import Image from 'next/image';

export default function Maliat() {
  return (
    <div className="pt-10 px-4 mx-6 mb-32">
      <div className="flex flex-col-reverse md:flex-row gap-4 justify-between container mx-auto">
        <div className="flex-col justify-around mt-9">
          <h1 className="text-2xl md:text-3xl font-extrabold mb-4 text-center md:text-start text-[#000080] flex justify-center">
            اظهارنامه ات رو ثبت کن!!
          </h1>
          <h1 className="text-[#1A1A2E] m-auto text-lg md:text-xl text-center md:text-start flex justify-center mb-1">
        با مراجعه به لینک زیر اظهارنامه مالیاتی خود را ثبت کنید
          </h1>
          <h1 className="text-[#1A1A2E] m-auto text-lg md:text-xl text-center md:text-start mb-1">
          از طریق دکمه ریز با تماس با کارشناسان ما ضمن پیگیری و ثبت
          </h1>
          <h1 className="text-[#1A1A2E] m-auto text-lg md:text-xl text-center md:text-start mb-5">
            اظهارنامه مالیاتی خود، کلیه امور حسابداری خود را به ما بسپارید.
          </h1>
          <div className="flex flex-col md:flex-row items-stretch align-middle px-2 gap-4">
            <Link href="tel:+982165265563" className='w-full'>
            <Button size="md" className="flex-grow font-fa text-base border-2 w-full rounded-3xl border-[#D4AF37] text-[#D4AF37] bg-white hover:bg-[#D4AF37] hover:text-white transition-all shadow-md hover:shadow-lg">
              بزن بــــــــریم!
            </Button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/assets/maliat.png"
            width={500}
            height={400}
            className="w-[500px] h-auto -my-28"
            alt="main-banner"
          />
        </div>
      </div>
    </div>
  );
}