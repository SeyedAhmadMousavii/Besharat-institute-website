"use client";

import { Button } from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
        <div className="text-center -mt-4">
            <div className="w-full flex justify-center">
                <Image 
                    src="/assets/404.png" 
                    alt="404 page" 
                    width={400}
                    height={400}
                    className="w-full md:w-[400px] my-14 mx-12 md:mx-0"
                    priority
                />
            </div>
            <Link href="/">
                <Button 
                    size="lg" 
                    className="mx-auto mb-6 font-fa bg-[#D4AF37] text-white hover:bg-[#B8960F] transition-all shadow-md hover:shadow-lg"
                >
                    بازگشت به صفحه اصلی
                </Button>
            </Link>
        </div>
    )
}