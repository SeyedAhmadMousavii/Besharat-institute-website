import nodemailer from "nodemailer";

// الگوی محتوای ایمیل برای ارسال اطلاعات کاربر (بر اساس داده‌های موجود)
export const genMailTemplate = async (data) => {
  const lines = [];

  if (data.name) lines.push(`<p>نام: ${data.name}</p>`);
  if (data.email) lines.push(`<p>ایمیل: ${data.email}</p>`);
  if (data.phone) lines.push(`<p>شماره تماس: ${data.phone}</p>`);
  if (data.houseNumber) lines.push(`<p>شماره منزل: ${data.houseNumber}</p>`);
  if (data.natinalCode) lines.push(`<p>کد ملی: ${data.natinalCode}</p>`);
  if (data.description) lines.push(`<p>توضیحات: ${data.description}</p>`);
  if (data.prop) lines.push(`<p>حساب درخواستی: ${data.prop}</p>`);

  return lines.join("\n");
};

// تنظیمات اتصال به Gmail از طریق Nodemailer
export const genTransporter = async () => {
  const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
  const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: username,
      pass: password,
    },
  });

  return transporter;
};

// تابع عمومی برای ارسال ایمیل
export const sendEmail = async (fromMail, toMail, title, body) => {
  try {
    const transporter = await genTransporter();
    await transporter.sendMail({
      from: fromMail,
      to: toMail,
      subject: `${title}`,
      html: `${body}`,
    });

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

// ⬇️ گزارش‌های مدیریتی (به ادمین)
export const emailOrderReport = async (data) => {
  const title = "گزارش سفارش";
  const templ = await genMailTemplate(data);
  return await sendEmail(
    process.env.NEXT_PUBLIC_EMAIL_USERNAME,
    process.env.NEXT_PUBLIC_PERSONAL_EMAIL,
    title,
    templ
  );
};

export const emailHireReport = async (data) => {
  const title = "درخواست استخدام";
  const templ = await genMailTemplate(data);
  return await sendEmail(
    process.env.NEXT_PUBLIC_EMAIL_USERNAME,
    process.env.NEXT_PUBLIC_PERSONAL_EMAIL,
    title,
    templ
  );
};

export const emailLoanRequest = async (data) => {
  const title = "درخواست وام";
  const templ = await genMailTemplate(data);
  return await sendEmail(
    process.env.NEXT_PUBLIC_EMAIL_USERNAME,
    process.env.NEXT_PUBLIC_PERSONAL_EMAIL,
    title,
    templ
  );
};

export const emailPropAccountRequest = async (data) => {
  const title = "درخواست دریافت حساب پراپ";
  const templ = await genMailTemplate(data);
  return await sendEmail(
    process.env.NEXT_PUBLIC_EMAIL_USERNAME,
    process.env.NEXT_PUBLIC_PERSONAL_EMAIL,
    title,
    templ
  );
};

// ⬇️ ایمیل‌های اطلاع‌رسانی به کاربران
export const emailHireNotification = async (data) => {
  const title = "ثبت درخواست استخدام";
  const templ = `
    کاربر گرامی،
    <p>درخواست استخدام شما با موفقیت ثبت شد.</p>
  `;
  return await sendEmail(process.env.NEXT_PUBLIC_EMAIL_USERNAME, data.email, title, templ);
};

export const emailOrderNotification = async (data) => {
  const title = "ثبت سفارش";
  const templ = `
    کاربر گرامی،
    <p>سفارش شما با موفقیت ثبت شد.</p>
  `;
  return await sendEmail(process.env.NEXT_PUBLIC_EMAIL_USERNAME, data.email, title, templ);
};

export const emailLoanNotification = async (data) => {
  const title = "ثبت درخواست وام";
  const templ = `
    کاربر گرامی،
    <p>درخواست وام شما با موفقیت ثبت شد.</p>
  `;
  return await sendEmail(process.env.NEXT_PUBLIC_EMAIL_USERNAME, data.email, title, templ);
};

export const emailPropAccountNotification = async (data) => {
  const title = "ثبت درخواست حساب پراپ";
  const templ = `
    کاربر گرامی،
    <p>درخواست شما برای دریافت حساب پراپ با موفقیت ثبت شد.</p>
  `;
  return await sendEmail(process.env.NEXT_PUBLIC_EMAIL_USERNAME, data.email, title, templ);
};
