import Link from 'next/link';
import Image from 'next/image';

export default function DiplomaPromoCard() {
  return (
    <div className="rounded-2xl shadow-xl overflow-hidden my-8 bg-white border border-[#E8E8F0]">
      <div className="flex flex-col-reverse md:flex-row-reverse justify-around">
        <div className="flex-1 p-6 md:p-8 mt-10 text-[#1A1A2E]">
          
          <h3 className="text-2xl md:text-4xl font-bold mb-4 text-[#D4AF37]">
            دیپلم بین‌المللی فنی و حرفه‌ای | دیپلم کار و دانش در آموزشگاه بشارت
          </h3>
          
          <p className="leading-relaxed text-[#1A1A2E]">
            اخذ مدرک دیپلم رسمی، همراه با کسب مهارت‌های تخصصی و کاربردی، از ضرورت‌های اساسی ورود موفق به بازار کار و ادامهٔ مسیر تحصیلی محسوب می‌شود. آموزشگاه بشارت با برگزاری دورهٔ دیپلم کار و دانش، بستری مناسب برای تحقق این هدف فراهم آورده است.
          </p>
          
          <p className="leading-relaxed mt-3 text-[#1A1A2E]">
            این دوره‌ها در دو شیوهٔ حضوری و آنلاین و در نوبت‌های روزانه و شبانه برگزار می‌گردد تا متقاضیان عزیز بتوانند متناسب با شرایط و برنامهٔ زمانی خویش، از خدمات آموزشی بهره‌مند گردند. تدریس توسط مدرسینی مجرب و آشنا به الزامات علمی و عملی این حوزه صورت می‌پذیرد و برنامه‌ریزی آموزشی بر پایهٔ اصولی مدون و هدفمند استوار است.
          </p>
          
          <p className="leading-relaxed mt-3 text-[#000080] font-semibold">
            آموزشگاه بشارت با تکیه بر تجربه و تعهد آموزشی خویش، همراهی مستمر متقاضیان را از آغاز ثبت‌نام تا اخذ مدرک و آمادگی برای ادامهٔ تحصیل یا ورود به بازار کار بر عهده دارد. کیفیت آموزشی، انعطاف در ارائهٔ خدمات و پشتیبانی بی‌وقفه، از جمله ویژگی‌های ممتاز این آموزشگاه به شمار می‌آید.
          </p>
          
          <Link
            href="/DiplomaPage"
            className="w-full text-center inline-block bg-[#000080] hover:bg-[#B8960F] text-[#D4AF37] hover:text-[#000080] font-bold px-6 py-2.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg mt-6"
          >
            مشاهده کامل پروپوزال دیپلم ←
          </Link>
        </div>
        <div className="md:flex w-96 items-center justify-center rounded-l-2xl">
          <Image 
            src="/assets/sanaz-farahani.webp" 
            alt="ساناز فراهانی - موسس و مدیر آموزشگاه بین‌المللی بشارت" 
            width={384}
            height={400}
            className="object-contain mr-10"
            priority
          />
        </div>
      </div>
    </div>
  );
}