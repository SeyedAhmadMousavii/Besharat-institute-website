"use client";

import { Button, Card, CardBody } from "@material-tailwind/react";
import Link from "next/link";
import { useMemo } from "react";
import Image from "next/image";

export default function ProductItem({ thumbnail, title, caption, rev , link }) {
    const rowclass = useMemo(() => {
        const base = "flex flex-col lg:flex-row justify-center items-center gap-x-8 gap-y-6 py-2 px-4 "
        if (rev == true) {
            return base + "lg:flex-row-reverse"
        }

        return base + "lg:flex-row"
    }, [rev]);

    return (
        <Card>
            <CardBody className="bg-white border border-[#E8E8F0] shadow-md hover:shadow-lg transition-shadow">
                <div className={rowclass}>
                    <div className="w-full sm:w-[24rem] h-auto md:w-[600px] text-center relative flex justify-center">
                        <Image
                            src={thumbnail}
                            alt={title}
                            width={600}
                            height={400}
                            className="rounded-lg object-cover"
                        />
                    </div>
                    <div className="w-full lg:flex-grow text-lg text-center lg:text-start">
                        <h1 className="text-2xl sm:text-3xl mb-6 font-semibold text-[#D4AF37]">{title}</h1>
                        <p className="text-[#1A1A2E] text-center md:text-justify text-lg px-4 leading-relaxed">
                            {caption}
                        </p>
                      <Link href={link}>
                      <Button className="font-fa text-base mt-6 rounded-full w-full text-[#D4AF37] bg-[#000080] hover:bg-[#D4AF37] hover:text-[#000080] transition-all shadow-md hover:shadow-lg">
                            مشاهده سرفصل و ثبت نام
                        </Button>
                      </Link>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}