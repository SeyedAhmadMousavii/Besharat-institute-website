import {
  ClockIcon,
  PresentationChartLineIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

const IntroWebP = () => {
  return (
    <div className="text-[#1A1A2E] p-6 bg-white">
      <div className="p-4 md:flex md:justify-around md:align-middle container mb-12">
        <div className="flex-col justify-center p-2 w-full">
          <h1 className="font-bold text-3xl mb-12 flex justify-center text-[#000080]">
            طراحی وب مقدماتی
          </h1>
          <div className="flex justify-around w-full">
            <div className="flex-col justify-between align-middle m-auto">
              <ClockIcon className="text-[#D4AF37] w-12" />
              <p className="text-[#1A1A2E]">24 ساعت</p>
            </div>
            <div className="flex-col justify-between align-middle m-auto">
              <PresentationChartLineIcon className="text-[#D4AF37] w-12" />
              <p className="text-[#1A1A2E]">12 جلسه</p>
            </div>
            <div className="flex-col justify-between align-middle m-auto">
              <AcademicCapIcon className="text-[#D4AF37] w-12 flex justify-center m-auto" />
              <p className="ml-1 text-[#1A1A2E]">+1000 دانشجو</p>
            </div>
          </div>
        </div>
        <div className="md:w-[600px] rounded-3xl shadow-lg border-2 border-[#D4AF37]/30">
          <video
            src="https://besharatacademy.com/media/videos/webP.mp4"
            controls
            className="w-full rounded-3xl"
          ></video>
        </div>
      </div>
      <p className="leading-relaxed mb-2">
        دنیای وب سایت ها لحظه به لحظه درحال گسترش و پیشرفت هستش و نیاز داشتن یک
        شعبه مجازی برای هر کسب و کاری حس می شود. تمامی کسب و کارها، فروش آنلاین
        خود را شروع خواهند کرد. حال برخی زودتر اقدام می‌کنند و برخی دیرتر. با
        تبدیل شدن به یک طراح سایت حرفه ای خودتان را در این صنعت بزرگ پیشتاز
        کنید.
      </p>
      <p className="leading-relaxed mb-2">دوره طراحی وب مقدماتی یک دوره آموزشی 12 جلسه‌ای و هر جلسه به مدت 2 ساعت است که به هدف آموزش مبانی طراحی وب به علاقه‌مندان ارائه می‌شود. این دوره به گونه‌ای طراحی شده است که حتی افراد بدون پیش‌زمینه در برنامه‌نویسی وب نیز بتوانند به راحتی از آن بهره‌مند شوند. در طول این دوره، دانشجویان با اصول اولیه و مفاهیم کلیدی طراحی وب آشنا می‌شوند که شامل HTML، CSS و Bootstrap است.</p>
      <p className="leading-relaxed mb-2">در بخش ابتدایی این دوره، HTML به عنوان زبان ساختاری وب معرفی می‌شود. شرکت‌کنندگان می‌آموزند که چگونه عناصر مختلف یک صفحه وب را ایجاد و سازماندهی کنند. این شامل تگ‌های مختلف HTML، ایجاد جداول، فرم‌ها و لینک‌ها است. این بخش به دانشجویان کمک می‌کند تا با ساختار و اسکلت‌بندی صفحات وب آشنا شوند و بتوانند صفحات استاتیک وب را ایجاد کنند.</p>
      <p className="leading-relaxed mb-2">بخش دوم دوره به آموزش CSS اختصاص دارد که برای استایل‌دهی و زیباسازی صفحات وب استفاده می‌شود. شرکت‌کنندگان یاد می‌گیرند که چگونه از CSS برای تنظیم رنگ‌ها، فونت‌ها، چیدمان‌ها و سایر عناصر بصری صفحات وب استفاده کنند. در ادامه، با ابزار محبوب Bootstrap آشنا می‌شوند که به آن‌ها امکان می‌دهد تا به راحتی وب‌سایت‌های واکنش‌گرا و مدرن طراحی کنند. این دوره ترکیبی از تئوری و پروژه‌های عملی است که به دانشجویان کمک می‌کند مهارت‌های خود را در دنیای واقعی به کار ببرند.</p>
    </div>
    
  );
};

export default IntroWebP;