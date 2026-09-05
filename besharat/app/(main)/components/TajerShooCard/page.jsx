import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function TajershooCard() {
  return (
    <>
      <Head>
        <title>دوره تاجر شو | تجارت بین‌الملل و صادرات</title>
        <meta name="description" content="دوره تخصصی تجارت بین‌الملل و استراتژی‌های صادرات و واردات با تدریس اساتید مجرب | آموزش مذاکره، بازاریابی جهانی و کاربرد هوش مصنوعی در صادرات" />
        <meta name="keywords" content="تاجر شو, تجارت بین الملل, صادرات, واردات, بازاریابی جهانی, مذاکره تجاری, هوش مصنوعی در تجارت, بشارت" />
      </Head>
      <div className="rounded-2xl shadow-xl overflow-hidden mx-4 my-8 bg-white border border-[#E8E8F0]">
        <div className="flex flex-col-reverse md:flex-row justify-around">
          <div className="flex-1 p-6 md:p-8 text-[#1A1A2E]">
            
            <h3 className="text-2xl md:text-4xl font-bold mb-2 text-[#D4AF37]">
              تاجر شو
            </h3>
            <p className="leading-relaxed">از بازارهای داخلی تا تجارت حرفه‌ای بین‌الملل</p>
              <p className="leading-relaxed mt-2">در دنیای امروز، تجارت بین‌الملل یکی از مهم‌ترین ابزارهای توسعه کسب‌وکار و دستیابی به بازارهای جهانی محسوب می‌شود. مؤسسه بین‌المللی بشارت با بهره‌گیری از اساتید مجرب، محتوای آموزشی کاربردی و رویکردی مبتنی بر استانداردهای روز دنیا، دوره تخصصی «تجارت بین‌الملل و استراتژی‌های صادرات و واردات» را برگزار می‌نماید</p>
              <p className="leading-relaxed mt-2">این دوره با هدف توانمندسازی فعالان اقتصادی، کارآفرینان و علاقه‌مندان به حوزه بازرگانی طراحی شده و مهارت‌های کلیدی از جمله تحلیل بازارهای هدف، مدیریت فرآیندهای صادرات و واردات، مذاکرات تجاری، توسعه بازار و تدوین استراتژی‌های بین‌المللی را پوشش می‌دهد.
  فرصت‌ها در بازارهای جهانی منتظر تصمیم‌های حرفه‌ای هستند؛ امروز برای ساختن آینده تجاری خود اقدام کنید.
  </p>
            <Link
              href="/TajershooPage"
              className="w-full text-center inline-block bg-[#000080] hover:bg-[#B8960F] text-[#D4AF37] hover:text-[#000080] font-bold px-6 py-2.5 rounded-lg transition shadow-md hover:shadow-lg mt-6"
            >
              مشاهده کامل ←
            </Link>
          </div>
          <div className="md:flex w-96 items-center justify-center rounded-l-2xl">
            <Image 
              src="/assets/تاجرشو.png" 
              alt="تاجر شو" 
              width={384}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}