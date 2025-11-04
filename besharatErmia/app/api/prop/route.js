import { NextResponse } from "next/server";
import { emailPropAccountNotification, emailPropAccountRequest } from "@/helpers/email"; // مسیرت رو تنظیم کن

export async function POST(req) {
  try {
    const data = await req.json();

    await emailPropAccountRequest(data);         // ارسال به مدیر
    await emailPropAccountNotification(data);    // ارسال به کاربر

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Prop Account Request Error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
