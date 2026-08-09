import {
  ClockIcon,
  PresentationChartLineIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
const IntroWebC = () => {
  return (
    <div className="text-white p-2">
      <div className="p-4 md:flex md:justify-around md:align-middle text-white container mb-12">
        <div className="flex-col justify-center p-2 w-full">
          <h1 className="font-bold text-3xl mb-12 flex justify-center">
            طراحی وب تکمیلی
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
            src="https://besharatacademy.com/media/videos/webC.mp4"
            controls
            className="w-full rounded-3xl"
          ></video>
        </div>
      </div>
      <p>
        دوره طراحی وب تکمیلی یک دوره 12 جلسه‌ای با مدت زمان هر جلسه 2 ساعت است
        که به منظور ارتقای مهارت‌های دانشجویان در زمینه طراحی وب و آشنایی با
        زبان برنامه‌نویسی JavaScript برگزار می‌شود. این دوره برای افرادی طراحی
        شده است که پیش‌زمینه‌ای در مبانی طراحی وب دارند و اکنون می‌خواهند
        توانایی‌های خود را در ایجاد وب‌سایت‌های پویا و تعاملی گسترش دهند. هدف
        این دوره، انتقال دانش عمیق‌تر و پیشرفته‌تر در زمینه برنامه‌نویسی وب است.
      </p>
      <p>
        در بخش اول این دوره، دانشجویان با اصول و مبانی JavaScript آشنا می‌شوند.
        آن‌ها می‌آموزند که چگونه از این زبان برای ایجاد تعامل و پویایی در صفحات
        وب استفاده کنند. مباحثی مانند متغیرها، توابع، حلقه‌ها و شرط‌ها در این
        بخش تدریس می‌شود. همچنین، دانشجویان با نحوه مدیریت رویدادها (events) و
        دستکاری عناصر HTML از طریق JavaScript آشنا می‌شوند.
      </p>
      <p>در بخش دوم دوره، تمرکز بر روی کاربردهای پیشرفته‌تر JavaScript است. این بخش شامل مباحثی نظیر کار با APIها، ایجاد انیمیشن‌ها، و استفاده از فناوری‌های جدیدی مانند Fetch API و Promises است. دانشجویان یاد می‌گیرند که چگونه با استفاده از JavaScript می‌توانند وب‌سایت‌هایی با قابلیت‌های پیشرفته‌تر و تجربه کاربری بهتر ایجاد کنند. همچنین، مباحث مربوط به بهینه‌سازی کد و بهبود عملکرد وب‌سایت نیز در این بخش مورد بررسی قرار می‌گیرد.</p>
      <p>در نهایت، دانشجویان در پروژه‌های عملی و کاربردی شرکت می‌کنند که به آن‌ها کمک می‌کند تا دانش خود را به صورت عملی به کار گیرند. این پروژه‌ها شامل ایجاد وب‌سایت‌های پویا و تعاملی، اتصال به سرویس‌های مختلف و پیاده‌سازی قابلیت‌های پیشرفته است. دوره تکمیلی طراحی وب به دانشجویان این امکان را می‌دهد تا با تسلط بر JavaScript، توانایی‌های خود را به سطح جدیدی ارتقا دهند و آماده ورود به بازار کار شوند.</p>
    </div>
  );
};

export default IntroWebC;
