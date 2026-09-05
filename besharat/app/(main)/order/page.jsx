"use client";

import UniInput from "@/components/core/form/input";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button, Card, Checkbox, Typography, Input } from "@material-tailwind/react";
import Link from "next/link";
import axios from "axios"
import { useState } from "react";
import { toast } from "react-toastify";


export default function OrderPage() {
    const [formData, setformData] = useState({
        name: "",
        email: "",
        phone: "",
        description: ""
    })
    const handleSubmit = async () => {
        if (!formData.name || !formData.phone || !formData.description || !formData.email) {
            return
        }
        try {
            const res = await axios.post("/api/order", formData);
            if (res.data.success) {
                toast("success")
            }
        } catch (e) {
            console.log(e)
            toast("fail")
        }
    }

    return (
        <div className="container mx-auto max-w-4xl px-4 min-h-screen flex items-center justify-center bg-gradient-to-br from-[#000080]/5 via-white to-[#D4AF37]/5">
            <div className="flex flex-col items-center justify-center py-10 w-full">
                <div className="flex w-full pb-4">
                    <Link href="/">
                        <Button variant="text" className="font-fa text-base btn-flex text-[#000080] hover:text-[#D4AF37] transition-colors">
                            <ArrowRightIcon className="w-7 h-7 text-[#000080] hover:text-[#D4AF37] transition-colors" />
                            بازگشت
                        </Button>
                    </Link>
                </div>
                <Card className="max-w-2xl w-full bg-white shadow-2xl border-2 border-[#D4AF37]/30 rounded-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-[#000080] to-[#1A1A99] p-4">
                        <Typography className="font-fa text-[#D4AF37]" variant="h4">
                            ثبت سفارش
                        </Typography>
                        <Typography className="font-fa mt-1 font-normal text-white/80">
                            وب سایت یا وب اپلیکیشن مورد نظرتو توضیح بده
                        </Typography>
                    </div>
                    <div className="p-6 bg-white">
                        <form onSubmit={(e) => {e.preventDefault(); handleSubmit()}} className="mt-4 mb-2 w-full">
                            <div className="mb-4 flex flex-col gap-6">
                                <div>
                                    <label className="block text-[#000080] font-semibold text-sm mb-1">نام شما</label>
                                    <UniInput required={true} onChange={e => setformData({...formData, name: e.target.value})} placeholder="نام و نام خانوادگی" />
                                </div>
                                <div>
                                    <label className="block text-[#000080] font-semibold text-sm mb-1">ایمیل</label>
                                    <UniInput required={true} type="email" onChange={(e) => setformData({...formData, email: e.target.value})} placeholder="example@email.com" />
                                </div>
                                <div>
                                    <label className="block text-[#000080] font-semibold text-sm mb-1">شماره تماس</label>
                                    <UniInput required={true} onChange={e => setformData({...formData, phone: e.target.value})} placeholder="09xxxxxxxxx" />
                                </div>
                                <div>
                                    <label className="block text-[#000080] font-semibold text-sm mb-1">توضیحات</label>
                                    <UniInput required={true} onChange={e => setformData({...formData, description: e.target.value})} type="textarea" placeholder="توضیحات پروژه" />
                                </div>
                            </div>
                            <Checkbox
                                required
                                color="amber"
                                label={
                                    <Typography
                                        variant="small"
                                        className="flex items-center font-normal font-fa text-[#1A1A2E]"
                                    >
                                        <Link
                                            href="/rulesForEO/order"
                                            className="font-medium transition-colors text-[#D4AF37] hover:text-[#B8960F]"
                                        >
                                            &nbsp;شرایط و مقررات
                                        </Link>
                                        &nbsp;
                                        را قبول دارم
                                    </Typography>
                                }
                                containerProps={{ className: "-mr-2.5" }}
                            />
                            <Button type="submit" className="mt-6 font-fa bg-[#D4AF37] text-white hover:bg-[#B8960F] transition-all shadow-lg hover:shadow-[#D4AF37]/40 w-full py-3 text-lg font-bold rounded-xl" fullWidth>
                                ثبت سفارش
                            </Button>
                        </form>
                    </div>
                </Card>
            </div>
        </div>
    )
}