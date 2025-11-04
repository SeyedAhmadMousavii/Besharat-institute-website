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
              Excel
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
        <p>دوره تخصصی Excel حسابداری که توسط فنی و حرفه‌ای برگزار می‌شود، برای آموزش مهارت‌های پیشرفته این نرم‌افزار در زمینه‌های مختلف مالی طراحی شده است. این دوره به افراد فعال در حوزه حسابداری و مالی کمک می‌کند تا بتوانند از ابزارها و امکانات پیشرفته Excel برای تحلیل داده‌ها، مدیریت امور مالی و تهیه گزارش‌ها استفاده کنند.</p>
        <p>در این دوره، شرکت‌کنندگان ابتدا با محیط Excel و تنظیمات پایه آشنا می‌شوند. سپس مفاهیم کلیدی نظیر استفاده از توابع و فرمول‌های اساسی و پیشرفته به آن‌ها آموزش داده می‌شود. توابعی مانند NPV، IRR، و IF به صورت کاربردی توضیح داده می‌شوند تا شرکت‌کنندگان بتوانند مسائل مختلف مالی را حل کنند. همچنین، روش‌های مدیریت داده‌ها مانند مرتب‌سازی، فیلتر کردن و تحلیل داده‌ها با جداول محوری از جمله مباحث مطرح‌شده در این دوره هستند.</p>
        <p>یکی از موضوعات کلیدی این دوره، طراحی گزارش‌های مالی حرفه‌ای و استفاده از نمودارها برای نمایش داده‌ها است. شرکت‌کنندگان با ابزارهای Excel برای تحلیل‌های مالی نظیر بودجه‌بندی، پیش‌بینی‌های مالی و حتی تحلیل هزینه-فایده آشنا می‌شوند. بخشی از آموزش‌ها نیز به اتوماسیون فرآیندهای تکراری با استفاده از VBA اختصاص دارد که می‌تواند سرعت و دقت کارها را به طور قابل توجهی افزایش دهد.</p>
        <p>این دوره با تمرکز بر آموزش عملی و انجام پروژه‌های واقعی، مهارت‌های شرکت‌کنندگان را تقویت می‌کند. آزمون نهایی دوره نیز می‌تواند دانش‌آموختگان را برای کار در محیط‌های حرفه‌ای آماده کند. شرکت در این دوره به تمامی افراد فعال در حوزه مالی از جمله حسابداران، مدیران و مشاوران مالی توصیه می‌شود. اگر علاقه‌مند به شرکت در این دوره هستید، می‌توانید به آموزشگاه بشارت مراجعه کنید.</p>
      </div>
    );
  };
  
  export default IntroCorel;
  