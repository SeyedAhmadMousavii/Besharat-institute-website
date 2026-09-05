import {
  ClockIcon,
  PresentationChartLineIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

const IntroVRay = () => {
  return (
    <div className="text-[#1A1A2E] p-6 bg-white">
      <div className="p-4 md:flex md:justify-around md:align-middle container mb-12">
        <div className="flex-col justify-center p-2 w-full">
          <h1 className="font-bold text-3xl mb-12 flex justify-center text-[#000080]">
            V-Ray
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
            src="https://besharatacademy.com/media/videos/VRay.mp4"
            controls
            className="w-full rounded-3xl"
          ></video>
        </div>
      </div>
      <p className="leading-relaxed mb-2">
        دوره تکمیلی V-Ray یک دوره آموزشی 12 جلسه‌ای است که هر جلسه به مدت 2 ساعت
        برگزار می‌شود. این دوره به منظور آموزش تخصصی رندرینگ و نورپردازی با
        استفاده از موتور رندر قدرتمند V-Ray طراحی شده است و برای افرادی مناسب
        است که می‌خواهند مهارت‌های خود را در زمینه ایجاد تصاویر واقع‌گرایانه در
        پروژه‌های سه‌بعدی ارتقا دهند. V-Ray یکی از محبوب‌ترین و پرکاربردترین
        موتورهای رندر در صنایع مختلف از جمله معماری، طراحی داخلی، انیمیشن و
        جلوه‌های ویژه است.
      </p>
      <p className="leading-relaxed mb-2">در بخش اول این دوره، دانشجویان با مبانی و اصول رندرینگ در V-Ray آشنا می‌شوند. آن‌ها می‌آموزند که چگونه از تنظیمات اولیه رندر برای بهبود کیفیت تصاویر استفاده کنند. مباحثی مانند تنظیمات نورپردازی پایه، استفاده از نورهای طبیعی و مصنوعی، و تنظیمات دوربین برای ایجاد کادرهای حرفه‌ای در این بخش تدریس می‌شود. همچنین، دانشجویان با انواع مختلف نورها و کاربردهای آن‌ها در صحنه‌های مختلف آشنا می‌شوند که به آن‌ها کمک می‌کند تا تصاویر با نورپردازی دقیق و واقع‌گرایانه ایجاد کنند.</p>
      <p className="leading-relaxed mb-2">بخش دوم دوره به آموزش پیشرفته‌تر V-Ray اختصاص دارد. در این بخش، دانشجویان با تکنیک‌های پیشرفته نورپردازی و رندرینگ، استفاده از مواد و تکسچرهای واقع‌گرایانه، و ایجاد افکت‌های ویژه آشنا می‌شوند. مباحثی نظیر تنظیمات پیشرفته رندر، استفاده از GI (Global Illumination) و HDRI (High Dynamic Range Imaging)، و بهینه‌سازی صحنه‌ها برای کاهش زمان رندر و افزایش کیفیت تصاویر در این بخش پوشش داده می‌شود. همچنین، آموزش استفاده از پلاگین‌ها و ابزارهای کمکی برای ارتقای قابلیت‌های V-Ray نیز در این بخش قرار دارد.</p>
      <p className="leading-relaxed">در نهایت، دانشجویان در پروژه‌های عملی و کاربردی شرکت می‌کنند که به آن‌ها کمک می‌کند تا دانش خود را به صورت عملی به کار گیرند. این پروژه‌ها شامل رندرینگ صحنه‌های داخلی و خارجی، ایجاد تصاویر محصول با کیفیت بالا، و شبیه‌سازی نورپردازی پیچیده در پروژه‌های معماری و طراحی است. دوره تکمیلی V-Ray به دانشجویان این امکان را می‌دهد تا با تسلط بر ابزارها و تکنیک‌های پیشرفته رندرینگ، آماده ورود به بازار کار حرفه‌ای شوند و در زمینه‌های مختلف طراحی و رندرینگ به فعالیت بپردازند.</p>
    </div>
  );
};

export default IntroVRay;