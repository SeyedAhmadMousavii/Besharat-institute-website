"use client";

import { Button, Card, CardBody } from "@material-tailwind/react";
import Link from "next/link";
import { useMemo } from "react"

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
            <CardBody className="p-4 bg-[#020621]">
                <div className={rowclass}>
                    <div className="w-full sm:w-[24rem] h-auto md:w-[600px] text-center relative flex justify-center">
                        <img
                            src={thumbnail}
                            alt={title}
                            className=""
                        />
                    </div>
                    <div className="w-full lg:flex-grow text-lg text-center lg:text-start">
                        <h1 className="text-2xl  sm:text-3xl mb-6 font-semibold text-zinc-700 text-[#ffd700]">{title}</h1>
                        <p className="text-white text-center md:text-justify text-lg px-4">
                            {caption}
                        </p>
                      <Link href={link}>
                      <Button className="font-fa text-base mt-6 rounded-full w-full bg-[#ffd700] text-blue-900">
                            ثبت سفارش
                        </Button>
                      </Link>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}
