"use client";

import UniInput from "@/components/core/form/input";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button, Card, Typography } from "@material-tailwind/react";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

export default function PropRegister() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    prop: "",
  });

  const handleSubmit = async () => {
    if (!formData.name || !formData.phone || !formData.prop || !formData.email) {
      toast.error("لطفاً همه فیلدها را پر کنید");
      return;
    }

    try {
      const res = await axios.post("/api/prop", formData);
      if (res.data.success) {
        toast.success("درخواست با موفقیت ثبت شد");
        setFormData({ name: "", phone: "", email: "", prop: "" });
      } else {
        toast.error("ارسال ناموفق بود");
      }
    } catch (e) {
      console.log(e);
      toast.error("خطا در ارسال فرم");
    }
  };

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
          <Typography className="font-fa text-[#ffd700]" variant="h4">
            دریافت حساب پراپ
          </Typography>
          <Typography className="font-fa mt-1 font-normal text-white">
            اطلاعات خود و حساب مدنظرتان را به شکل کامل پر کنید
          </Typography>
          <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="mt-8 mb-2 w-full">
            <div className="mb-4 flex flex-col gap-6">
              <UniInput
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="نام و نام خانوادگی شما"
              />
              <UniInput
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="ایمیل"
              />
              <UniInput
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="شماره تماس"
              />
              <UniInput
                required
                value={formData.prop}
                onChange={(e) => setFormData({ ...formData, prop: e.target.value })}
                type="textarea"
                placeholder="حساب مدنظرتان"
              />
            </div>
            <Button type="submit" className="mt-6 font-fa bg-[#ffd700] text-blue-900" fullWidth>
              ثبت
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
