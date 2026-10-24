import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function TajershooCard() {
  return (
    <>
      <Head>
        <title>دوره تاجر شو | تجارت بین‌الملل و صادرات | آموزشگاه بشارت</title>
        <meta name="description" content="دوره تخصصی تاجر شو در آموزشگاه بین‌المللی بشارت؛ آموزش تحلیل بازارهای هدف، مدیریت صادرات و واردات، فنون مذاکره تجاری بین‌المللی و تدوین استراتژی‌های جهانی با اساتید مجرب." />
        <meta name="keywords" content="تاجر شو, تجارت بین الملل, صادرات, واردات, بازاریابی جهانی, مذاکره تجاری, هوش مصنوعی در تجارت, آموزشگاه بشارت" />
      </Head>
      <div className="rounded-2xl shadow-xl overflow-hidden mx-4 my-8 bg-white border border-[#E8E8F0]">
        <div className="flex flex-col-reverse md:flex-row justify-around">
          <div className="flex-1 p-6 md:p-8 text-[#1A1A2E]">

            <h3 className="text-2xl md:text-4xl font-bold mb-2 text-[#D4AF37]">
              تاجر شو | از بازار داخلی تا عرصهٔ تجارت بین‌الملل
            </h3>

            <p className="leading-relaxed mt-4 text-[#1A1A2E]">
              مرز میان یک فعال اقتصادی محلی و یک تاجر بین‌المللی، دانش است، نه سرمایه. بازارهای جهانی هر روز فرصت‌های تازه‌ای برای صادرات، واردات و توسعه کسب‌وکار خلق می‌کنند؛ اما تنها کسانی از این فرصت‌ها بهره می‌برند که قواعد بازی تجارت بین‌الملل را به‌درستی بشناسند.
            </p>

            <p className="leading-relaxed mt-3 text-[#1A1A2E]">
              آموزشگاه بین‌المللی بشارت، دوره تخصصی «تاجر شو» را با بهره‌گیری از اساتید مجرب و محتوایی کاملاً کاربردی، مطابق با استانداردهای روز تجارت جهانی طراحی کرده است. در این دوره، شرکت‌کنندگان یاد می‌گیرند چگونه بازارهای هدف را تحلیل کنند، فرآیندهای صادرات و واردات را به‌درستی مدیریت نمایند، در مذاکرات تجاری پیشرفته موفق عمل کنند و استراتژی‌های بین‌المللی متناسب با کسب‌وکار خود را تدوین نمایند.
            </p>

            <p className="leading-relaxed mt-3 text-[#000080] font-semibold">
              این دوره برای کارآفرینان، فعالان اقتصادی و علاقه‌مندانی طراحی شده که می‌خواهند دامنه فعالیت خود را از بازار داخلی فراتر ببرند و وارد عرصه رقابت جهانی شوند. فرصت‌های واقعی در بازارهای بین‌المللی، منتظر تصمیمی آگاهانه هستند؛ همین امروز با «تاجر شو»، اولین گام مسیر خود را به‌سوی تجارت حرفه‌ای بردارید.
            </p>

            <Link
              href="/TajershooPage"
              className="w-full text-center inline-block bg-[#000080] hover:bg-[#B8960F] text-[#D4AF37] hover:text-[#000080] font-bold px-6 py-2.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg mt-6"
            >
              مشاهده کامل دوره ←
            </Link>
          </div>
          <div className="md:flex w-96 items-center justify-center rounded-l-2xl">
            <Image
              src="/assets/tajershoo.webp"
              alt="تاجر شو - دوره تخصصی تجارت بین‌الملل و صادرات در آموزشگاه بشارت"
              width={384}
              height={300}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}