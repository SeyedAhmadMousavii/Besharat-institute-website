import Link from 'next/link';

export default function DiplomaPromoCard() {
  return (
    <div className="rounded-2xl shadow-xl overflow-hidden mx-4 my-8">
      <div className="flex flex-col-reverse md:flex-row-reverse justify-around">
        <div className="flex-1 p-6 md:p-8 mt-10 text-white">
          
          <h3 className="text-2xl md:text-4xl font-bold mb-2 text-[#ffd700]">
            دیپلم بین المللی فنی و حرفه ای
          </h3>
          
          <p>آموزشگاه بشارت با ارائه دوره‌های دیپلم کار و دانش، بستری مناسب برای اخذ مدرک دیپلم و ارتقای مهارت‌های تخصصی فراهم کرده است. این دوره‌ها در قالب حضوری و آنلاین و در نوبت‌های روزانه و شبانه برگزار می‌شوند تا تمامی متقاضیان بتوانند متناسب با شرایط و برنامه زمانی خود از خدمات آموزشی بهره‌مند شوند.</p>
          <p>با بهره‌گیری از کادر آموزشی مجرب، برنامه‌ریزی اصولی و پشتیبانی مستمر، آموزشگاه بشارت مسیر دستیابی به دیپلم و آمادگی برای ادامه تحصیل یا ورود موفق به بازار کار را برای هنرجویان هموار می‌سازد. تعهد به کیفیت آموزشی، انعطاف‌پذیری در ارائه خدمات و همراهی تا کسب موفقیت، از مهم‌ترین ویژگی‌های آموزشگاه بشارت است.</p>
          <Link
            href="/DiplomaPage"
            className="inline-block bg-[#ffd700] hover:bg-yellow-600 text-blue-900 font-bold px-6 py-2.5 rounded-lg transition shadow-md mt-6"
          >
            مشاهده کامل پروپوزال دیپلم ←
          </Link>
        </div>
        <div className="md:flex w-96 items-center justify-center rounded-l-2xl">
          <img src="./assets/خانم فراهانی.png" alt="ساناز فراهانی" />
        </div>
      </div>
    </div>
  );
}