import {
    ClockIcon,
    PresentationChartLineIcon,
    AcademicCapIcon,
  } from "@heroicons/react/24/solid";
  
  const ttc = () => {
    return (
      <div className="p-6 bg-white text-[#1A1A2E]">
        <div className="p-4 md:flex md:justify-around md:align-middle container mb-12">
          <div className="flex-col justify-center p-2 w-full">
            <h1 className="font-bold text-3xl mb-12 flex justify-center text-[#000080]">
              تربیت مدرس ICDL
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
              src="https://besharatacademy.com/media/videos/ttc.mp4"
              controls
              className="w-full rounded-3xl"
            ></video>
          </div>
        </div>
        <p className="leading-relaxed mb-2">دوره تربیت مدرس ICDL در آموزشگاه بشارت با هدف آماده‌سازی مدرسانی طراحی شده است که قصد دارند مهارت‌های کامپیوتری را به طور مؤثر تدریس کنند. این دوره به شرکت‌کنندگان کمک می‌کند تا استانداردهای بین‌المللی ICDL را به خوبی فراگیرند و توانایی انتقال آن به دانشجویان را پیدا کنند. در این دوره، ابتدا مفاهیم مرتبط با گواهینامه ICDL و اهمیت آن در دنیای فناوری اطلاعات توضیح داده می‌شود. سپس سرفصل‌های مربوط به مبانی کامپیوتر شامل شناخت سخت‌افزار، نرم‌افزار و سیستم‌عامل تدریس می‌شود.</p>
        <p className="leading-relaxed mb-2">بخش دیگری از دوره به آموزش نرم‌افزارهای اداری اختصاص دارد که شامل مهارت‌های لازم برای کار با Microsoft Word، Excel و PowerPoint است. شرکت‌کنندگان با قابلیت‌های مختلف این نرم‌افزارها مانند ویرایش متن، استفاده از فرمول‌ها، طراحی جداول و اسلایدها آشنا می‌شوند. همچنین در زمینه مدیریت اطلاعات و اینترنت، مباحث مربوط به جستجو در فضای آنلاین، استفاده از ایمیل و امنیت سایبری به تفصیل بررسی خواهد شد.</p>
        <p className="leading-relaxed mb-2">یکی از قسمت‌های کلیدی این دوره، آموزش تکنیک‌های تدریس است. روش‌های آموزشی مدرن، طراحی برنامه‌های درسی و نحوه برگزاری کلاس‌های کاربردی به شکلی جامع ارائه می‌شود. علاوه بر این، شرکت‌کنندگان در کارگاه‌های عملی شرکت می‌کنند تا مفاهیم آموزش‌داده‌شده را به صورت عملی تجربه کنند. در نهایت، پس از اتمام دوره، مدرسان توانایی تدریس حرفه‌ای و مهارت‌های لازم برای آموزش ICDL را خواهند داشت. آموزشگاه بشارت نیز گواهینامه‌ای معتبر به شرکت‌کنندگان اعطا می‌کند که می‌تواند مسیر حرفه‌ای آن‌ها را تسهیل کند. برای ثبت‌نام و دریافت اطلاعات بیشتر، می‌توانید به وب‌سایت این آموزشگاه مراجعه کنید.</p>
       </div>
    );
  };
  
  export default ttc;