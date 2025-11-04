"use client";

import UniInput from "@/components/core/form/input";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button, Card, Checkbox, Typography, Input } from "@material-tailwind/react";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

export default function EmploymentPage() {
    const [formData, setformData] = useState({
        name: "",
        phone: "",
        email: "",
        description: ""
    })

    const handleSubmit = async () => {
        console.log(formData)
        if (!formData.name || !formData.phone || !formData.description || !formData.email) {
            return
        }
        try {
            const res = await axios.post("/api/hire", formData);
            if (res.data.success) {
                toast("success")
            }
        } catch (e) {
            console.log(e)
            toast("fail")
        }

    }

    return (
        <div className="container mx-auto max-w-4xl px-4">
            <div className="flex flex-col items-center justify-center py-10">
                <div className="flex w-full pb-4">
                    <Link href="/">
                        <Button variant="text" className="font-fa text-base btn-flex text-white">
                            <ArrowRightIcon className="w-7 h-7 text-white" />
                            بازگشت
                        </Button>
                    </Link>
                </div>
                <Card className="max-w-2xl w-full text-white" color="transparent" shadow={false}>
                    <Typography className="font-fa text-[#ffd700]" variant="h4" >
                        ارسال رزومه
                    </Typography>
                    <Typography className="font-fa mt-1 font-normal text-white">
                        رزومه خود را به شکل کامل و اصولی وارد کنید
                    </Typography>
                    <form onSubmit={(e) => {e.preventDefault(); handleSubmit()}} className="mt-8 mb-2 w-full">
                        <div className="mb-4 flex flex-col gap-6">
                            <div>
                                <UniInput required={true} onChange={(e) => setformData({...formData, name: e.target.value})} placeholder="نام شما" />
                            </div>
                            <div>
                                <UniInput required={true} onChange={(e) => setformData({...formData, email: e.target.value})} placeholder="ایمیل" />
                            </div>
                            <div>
                                <UniInput required={true} onChange={(e) => setformData({...formData, phone: e.target.value})} placeholder="شماره تماس" />
                            </div>
                            <div>
                                <UniInput required={true} onChange={(e) => setformData({...formData, description: e.target.value})} type="textarea" placeholder="توضیحات پروژه" />
                            </div>
                        </div>
                        <Checkbox
                            required
                            color="indigo"
                            label={
                                <Typography
                                    variant="small"
                                    className="flex items-center font-normal font-fa text-white"
                                >
                                    <Link
                                        href="/rulesForEO/employment"
                                        className="font-medium transition-colors text-[#ffd700]"
                                    >
                                        &nbsp;شرایط و مقررات
                                    </Link>
                                    &nbsp;
                                    را قبول دارم
                                </Typography>
                            }
                            containerProps={{ className: "-mr-2.5" }}
                        />
                        <Button type="submit" className="mt-6 font-fa bg-[#ffd700] text-blue-900" fullWidth>
                            ثبت رزومه
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
    )
}
