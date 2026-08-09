import {
  ClockIcon,
  PresentationChartLineIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
const IntroAutocad = () => {
  return (
    <div className="text-white p-2">
      <div className="p-4 md:flex md:justify-around md:align-middle text-white container mb-12">
        <div className="flex-col justify-center p-2 w-full">
          <h1 className="font-bold text-3xl mb-12 flex justify-center">
            Autocad
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
            src="https://besharatacademy.com/media/videos/autocad.mp4"
            controls
            className="w-full rounded-3xl"
          ></video>
        </div>
      </div>
      <p>
        دوره تکمیلی AutoCAD یک دوره آموزشی 12 جلسه‌ای است که هر جلسه به مدت 2
        ساعت برگزار می‌شود. این دوره به منظور آموزش تخصصی نرم‌افزار AutoCAD
        طراحی شده است و برای افرادی مناسب است که می‌خواهند مهارت‌های خود را در
        زمینه طراحی دو بعدی و سه بعدی به سطح پیشرفته‌ای ارتقا دهند. AutoCAD یکی
        از پرکاربردترین نرم‌افزارهای طراحی و نقشه‌کشی در صنایع مختلف از جمله
        معماری، مهندسی عمران، مکانیک و الکترونیک است.
      </p>
      <p>در بخش اول این دوره، دانشجویان با محیط کاربری AutoCAD و ابزارهای پایه‌ای آن آشنا می‌شوند. آن‌ها می‌آموزند که چگونه از ابزارهای ترسیم و ویرایش برای ایجاد نقشه‌های دقیق دو بعدی استفاده کنند. مباحثی مانند ایجاد و ویرایش خطوط، اشکال هندسی، متن و جداول در این بخش تدریس می‌شود. همچنین، دانشجویان با اصول لایه‌بندی و مدیریت لایه‌ها، اندازه‌گذاری و استفاده از بلوک‌ها آشنا می‌شوند که به آن‌ها کمک می‌کند تا نقشه‌های حرفه‌ای‌تری را تهیه کنند.</p>
      <p>بخش دوم دوره به آموزش مباحث پیشرفته‌تر AutoCAD می‌پردازد. در این بخش، دانشجویان با تکنیک‌های پیشرفته‌تر ترسیم و ویرایش، ایجاد و استفاده از الگوها و کار با ابزارهای سه بعدی آشنا می‌شوند. مباحثی نظیر مدل‌سازی سه بعدی، ایجاد و ویرایش احجام، استفاده از دستورات پیچیده و رندرینگ در این بخش پوشش داده می‌شود. همچنین، آموزش استفاده از ابزارهای تحلیل و بررسی مانند اندازه‌گیری مساحت و حجم و ایجاد نماهای مختلف از مدل‌های سه بعدی نیز در این بخش قرار دارد.</p>
      <p>در نهایت، دانشجویان در پروژه‌های عملی و کاربردی شرکت می‌کنند که به آن‌ها کمک می‌کند تا دانش خود را به صورت عملی به کار گیرند. این پروژه‌ها شامل طراحی نقشه‌های معماری، مهندسی و مکانیکی، مدل‌سازی سه بعدی ساختمان‌ها و قطعات صنعتی، و تهیه مستندات فنی است. دوره تکمیلی AutoCAD به دانشجویان این امکان را می‌دهد تا با تسلط بر ابزارها و تکنیک‌های پیشرفته، آماده ورود به بازار کار حرفه‌ای شوند و در زمینه‌های مختلف طراحی و نقشه‌کشی به فعالیت بپردازند.</p>
    </div>
  );
};

export default IntroAutocad;
