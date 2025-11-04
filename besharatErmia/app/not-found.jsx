"use client";

import { Button } from "@material-tailwind/react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="text-center -mt-4">
            <div className="w-full flex justify-center">
                <img src="/assets/404.png" alt="404 page" className="w-full md:w-[400px] my-14 mx-12 md:mx-0" />
            </div>
            <Link href="/">
                <Button size="lg" className="mx-auto mb-6 font-fa bg-[#ffd700] text-blue-900">بازگشت به صفحه اصلی</Button>
            </Link>
        </div>
    )
}
