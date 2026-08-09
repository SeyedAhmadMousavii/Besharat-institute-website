import {
    ClockIcon,
    PresentationChartLineIcon,
    AcademicCapIcon,
  } from "@heroicons/react/24/solid";
  const IntroCorel = () => {
    return (
      <div className="text-white p-2">
        <div className="p-4 md:flex md:justify-around md:align-middle text-white container mb-12">
          <div className="flex-col justify-center p-2 w-full">
            <h1 className="font-bold text-3xl mb-12 flex justify-center">
              کاربر اتوماسیون اداری
            </h1>
            <div className="flex justify-around w-full">
              <div className="flex-col justify-between align-middle m-auto">
                <ClockIcon className="text-[#ffd700] w-12" />
                <p>24 ساعت</p>
              </div>
              <div className="flex-col justify-between align-middle m-auto">
                <PresentationChartLineIcon className="text-[#ffd700] w-12" />
                <p>12 جلسه</p>
              </div>
              <div className="flex-col justify-between align-middle m-auto">
                <AcademicCapIcon className="text-[#ffd700] w-12 flex justify-center m-auto" />
                <p className="ml-1">+1000 دانشجو</p>
              </div>
            </div>
          </div>
          <div className="md:w-[600px] rounded-3xl">
            <video
              src="https://besharatacademy.com/media/videos/others.mp4"
              controls
              className="w-full rounded-3xl"
            ></video>
          </div>
        </div>
        <p>دوره کاربر اتوماسیون اداری در فنی و حرفه‌ای به‌منظور آموزش مهارت‌های ضروری برای استفاده مؤثر از نرم‌افزارها و ابزارهای اداری طراحی شده است. این دوره برای افرادی که در محیط‌های کاری نیاز به کار با ابزارهای دیجیتال دارند، مناسب است و توانایی‌های شرکت‌کنندگان را در زمینه‌های مختلف تقویت می‌کند.</p>
        <p>در این دوره، شرکت‌کنندگان با نرم‌افزارهای پرکاربرد اداری مانند Microsoft Word، Excel و PowerPoint آشنا می‌شوند. مهارت‌هایی نظیر ایجاد و ویرایش اسناد، فرمت‌بندی متن، طراحی جداول، انجام محاسبات، و ایجاد ارائه‌های حرفه‌ای از جمله مواردی هستند که به‌صورت عملی آموزش داده می‌شوند. همچنین، مدیریت اطلاعات و سازماندهی داده‌ها از طریق بانک‌های اطلاعاتی نیز به‌عنوان بخشی از آموزش‌ها ارائه می‌شود.</p>
        <p>از دیگر مهارت‌های مورد بحث در این دوره، ارتباطات اداری است. شرکت‌کنندگان نحوه نگارش ایمیل‌های رسمی و حرفه‌ای را یاد می‌گیرند و با نرم‌افزارهای همکاری آنلاین مانند Microsoft Teams یا Zoom آشنا می‌شوند. در کنار این موارد، استفاده از ابزارهای تقویم و برنامه‌ریزی برای مدیریت زمان و افزایش بهره‌وری به آن‌ها آموزش داده می‌شود.</p>
        <p>یکی از بخش‌های مهم دوره، آشنایی با اصول امنیت اطلاعات است. شرکت‌کنندگان یاد می‌گیرند چگونه از داده‌های خود در برابر تهدیدات محافظت کنند و به شکل امن با نرم‌افزارها کار کنند. همچنین، کار با سیستم‌های خاص اتوماسیون اداری که در سازمان‌ها استفاده می‌شود، از دیگر موضوعات این دوره است. در کنار این مهارت‌ها، شرکت‌کنندگان می‌توانند مهارت‌های عمومی نظیر کار تیمی، ارتباطات مؤثر و حل مسئله را نیز تقویت کنند.</p>
        <p>این دوره شامل آموزش عملی، انجام پروژه‌های گروهی و ارزیابی نهایی است که باعث می‌شود شرکت‌کنندگان آماده ورود به بازار کار شوند. اگر تمایل به شرکت در این دوره دارید، می‌توانید به آموزشگاه بشارت مراجعه کنید.</p>
      </div>
    );
  };
  
  export default IntroCorel;
  