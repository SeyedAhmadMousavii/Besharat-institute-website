"use client";
import 'animate.css';
import { Button } from "@material-tailwind/react";
import Link from 'next/link';
import Image from 'next/image';

export default function Library() {
  return (
    <div className="pt-10 px-4 mx-6 mb-16">
      <div className="flex flex-col md:flex-row gap-4 justify-between container mx-auto">
      <div className="relative">
          <Image
            src="/assets/library.png"
            width={400}
            height={350}
            className="w-[400px] h-auto"
            alt="main-banner"
          />
        </div>
        <div className="flex-col justify-around mt-9">
          <h1 className="text-3xl font-extrabold mb-4 text-center md:text-start text-[#000080] flex justify-center">
            نمـــــونه ســـــــوالات کـــــتبی و عمـــــلی
          </h1>
          <h1 className="text-3xl font-extrabold mb-4 text-center md:text-start text-[#D4AF37] flex justify-center">
            ســـــازمان فنــــــی و حــــــــــــــرفه ای
          </h1>
          <h1 className="text-[#1A1A2E] m-auto text-base md:text-xl text-center md:text-start mb-5">
          با مراجعه به لینک زیر می توانید نمونه سوالات فنی و حرفه ای را دریافت کنید.
          </h1>
          <div className="flex flex-col md:flex-row items-stretch align-middle px-2 gap-4">
            <Link href="libraryPage" className='w-full'>
            <Button size="md" className="flex-grow font-fa text-base border-2 w-full rounded-3xl border-[#D4AF37] text-[#D4AF37] bg-[#000080] hover:bg-[#D4AF37] hover:text-white transition-all shadow-md hover:shadow-lg">
              بزن بــــــــریم!
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}