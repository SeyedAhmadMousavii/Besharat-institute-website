import { Architects_Daughter } from "next/font/google";
import ProductItem from "./item";

const texts = {
    digital: {
        caption: `ارز دیجیتال (Cryptocurrency)، پول الکترونیک یا دیجیتالی است که با الگوریتم‌های رمزنگاری‌ ساخته شده و بین کاربران تحت عنوان رمز ارز برای انتقال سرمایه بدون مرز مبادله می‌شود. رمزنگاری باعث ایجاد تمایز بین ارز دیجیتال با پول فیات شده و از جعل پول جلوگیری می‌کند`
    },
    Computer: {
        caption: `در دنیای امروز، شاهد رشد چشم‌گیر فعالیت‌هایی در حوزه هوش مصنوعی، تکنولوژی و کامپیوتر هستیم؛ حوزه‌هایی که با هدف ساده‌سازی دسترسی به داده‌ها، قابل‌فهم کردن و به‌اشتراک‌گذاری انواع فایل‌ها و بهبود ارتباطات به وجود آمده‌اند.
کامپیوتر و گاهی هوش مصنوعی، با ماهیتی که دارند، باعث صرفه‌جویی در زمان و افزایش کارایی عملیات مختلف می‌شوند. همچنین حوزه‌هایی مانند گرافیک و برنامه‌نویسی، با جذابیت‌های خاص خود، علاقه‌مندان بسیاری را در سراسر جهان جذب کرده‌اند.
با ما همراه باشید.`
    },
    accounting: {
        caption: `حسابداری اندازه‌گیری،ثبت، پردازش و تجزیه تحلیل اطلاعات مالی نهادهای اقتصادی مانند بخش مالی دولت ها، مشاغل و شرکت‌ها است. حسابداری که به آن «زبان تجارت و اقتصاد» گفته می‌شود، نتایج فعالیت‌های اقتصادی یک سازمان را اندازه‌گیری و ارزیابی می‌کند و این اطلاعات را در قالب گزارش ها و تحلیل ها ، به کاربران مختلفی از جمله سرمایه گذاران، بستانکاران، مدیریت و تنظیم کنندگان منتقل می‌کند.`
    },
        Architect:{
            caption: 'نقشه‌کشی امری واجب در ساخت یک ساختمان است و امروزه حتی در بازسازی و نوسازی‌های کوچک، ساخت یک نما یا طراحی داخلی ساختمان نیز انجام می‌شود. امروزه با پیشرفت تکنولوژی، می توان ساختمان را به صورت سه بعدی در نرم افزارهای مرتبط شبیه سازی کرد که انجام این کار برای درک بهتر کافرما از اطلاعات سه بعدی ساختمان بسیار کارآمد است.'
    }
}


export default function ProductSection() {
    return (
        <div className="py-2 my-14">
            <div className="flex flex-col gap-8 container mx-auto px-2">
                <ProductItem link="/courses" scheme="blue" title="آموزش کامپیوتر" thumbnail="/assets/products/computer.png" caption={texts.Computer.caption} />
                <ProductItem rev link="/courses" scheme="green" title="آموزش حسابداری" thumbnail="/assets/products/accounting.png" caption={texts.accounting.caption} />
                <ProductItem link="/courses" scheme="rose" title="آموزش ارز دیجیتال" thumbnail="/assets/products/digital.png" caption={texts.digital.caption} />
                <ProductItem rev link="/courses" scheme="green" title="آموزش نقشه کشی" thumbnail="/assets/products/Architect.png" caption={texts.Architect.caption} />
            </div>
        </div>
    )
}
