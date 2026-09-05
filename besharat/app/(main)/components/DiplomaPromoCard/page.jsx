import Link from 'next/link';
import Image from 'next/image';

export default function DiplomaPromoCard() {
  return (
    <div className="rounded-2xl shadow-xl overflow-hidden mx-4 my-8 bg-white border border-[#E8E8F0]">
      <div className="flex flex-col-reverse md:flex-row-reverse justify-around">
        <div className="flex-1 p-6 md:p-8 mt-10 text-[#1A1A2E]">
          
          <h3 className="text-2xl md:text-4xl font-bold mb-2 text-[#D4AF37]">
            دیپلم بین المللی فنی و حرفه ای
          </h3>
          
          <p className="leading-relaxed">آموزشگاه بشارت با ارائه دوره‌های دیپلم کار و دانش، بستری مناسب برای اخذ مدرک دیپلم و ارتقای مهارت‌های تخصصی فراهم کرده است. این دوره‌ها در قالب حضوری و آنلاین و در نوبت‌های روزانه و شبانه برگزار می‌شوند تا تمامی متقاضیان بتوانند متناسب با شرایط و برنامه زمانی خود از خدمات آموزشی بهره‌مند شوند.</p>
          <p className="leading-relaxed mt-2">با بهره‌گیری از کادر آموزشی مجرب، برنامه‌ریزی اصولی و پشتیبانی مستمر، آموزشگاه بشارت مسیر دستیابی به دیپلم و آمادگی برای ادامه تحصیل یا ورود موفق به بازار کار را برای هنرجویان هموار می‌سازد. تعهد به کیفیت آموزشی، انعطاف‌پذیری در ارائه خدمات و همراهی تا کسب موفقیت، از مهم‌ترین ویژگی‌های آموزشگاه بشارت است.</p>
          <Link
            href="/DiplomaPage"
            className="w-full text-center inline-block bg-[#000080] hover:bg-[#B8960F] text-[#D4AF37] hover:text-[#000080] font-bold px-6 py-2.5 rounded-lg transition shadow-md hover:shadow-lg mt-6"
          >
            مشاهده کامل پروپوزال دیپلم ←
          </Link>
        </div>
        <div className="md:flex w-96 items-center justify-center rounded-l-2xl">
          <Image 
            src="/assets/sanaz-farahani.png" 
            alt="ساناز فراهانی" 
            width={384}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}