import {
  ClockIcon,
  PresentationChartLineIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

const Intro3Dmax = () => {
  return (
    <div className="text-[#1A1A2E] p-6 bg-white">
      <div className="p-4 md:flex md:justify-around md:align-middle container mb-12">
        <div className="flex-col justify-center p-2 w-full">
          <h1 className="font-bold text-3xl mb-12 flex justify-center text-[#000080]">
            3DMax
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
            src="https://besharatacademy.com/media/videos/3DMax.mp4"
            controls
            className="w-full rounded-3xl"
          ></video>
        </div>
      </div>
      <p className="leading-relaxed mb-2">
        دوره 3D Maxیک دوره آموزشی 12 جلسه‌ای با هر جلسه به مدت 2 ساعت است که به
        منظور آموزش تخصصی نرم‌افزار 3DMax طراحی شده است. این دوره برای افرادی که
        علاقه‌مند به یادگیری و تسلط بر تکنیک‌های پیشرفته مدل‌سازی سه‌بعدی،
        انیمیشن و رندرینگ هستند، مناسب است. 3DMax یکی از قدرتمندترین و
        محبوب‌ترین نرم‌افزارهای طراحی و انیمیشن سه‌بعدی است که در صنایع مختلفی
        مانند بازی‌سازی، فیلم‌سازی، معماری و تبلیغات کاربرد گسترده‌ای دارد.
      </p>
      <p className="leading-relaxed mb-2">
        در بخش اول این دوره، دانشجویان با محیط کاربری 3D Max و ابزارهای پایه‌ای
        آن آشنا می‌شوند. آن‌ها می‌آموزند که چگونه از ابزارهای مدل‌سازی سه‌بعدی
        برای ایجاد اشکال ساده و پیچیده استفاده کنند. مباحثی مانند ایجاد و ویرایش
        مش‌ها، استفاده از اصلاح‌کننده‌ها (Modifiers) و تنظیمات اولیه رندرینگ در
        این بخش تدریس می‌شود. همچنین، دانشجویان با اصول نورپردازی و مواد
        (Materials) آشنا می‌شوند که به آن‌ها کمک می‌کند تا مدل‌های
        واقع‌گرایانه‌تری ایجاد کنند.
      </p>
      <p className="leading-relaxed mb-2">بخش دوم دوره به مباحث پیشرفته‌تر 3D Max اختصاص دارد. این بخش شامل آموزش تکنیک‌های پیشرفته مدل‌سازی، ایجاد انیمیشن‌های پیچیده، و استفاده از ابزارهای حرفه‌ای برای شبیه‌سازی فیزیکی (Physics Simulation) است. دانشجویان یاد می‌گیرند که چگونه از ابزارهای انیمیشن برای ایجاد حرکات طبیعی و روان استفاده کنند و با استفاده از پلاگین‌ها و اسکریپت‌های مختلف، قابلیت‌های نرم‌افزار را افزایش دهند. همچنین، مباحثی نظیر رندرینگ پیشرفته با V-Ray یا سایر موتورهای رندرینگ نیز در این بخش پوشش داده می‌شود.</p>
      <p className="leading-relaxed">در نهایت، دانشجویان در پروژه‌های عملی و کاربردی شرکت می‌کنند که به آن‌ها کمک می‌کند تا دانش خود را به صورت عملی به کار گیرند. این پروژه‌ها شامل مدل‌سازی و انیمیشن‌سازی صحنه‌های پیچیده، طراحی داخلی و خارجی ساختمان‌ها، و ایجاد جلوه‌های ویژه (VFX) است. دوره تکمیلی 3D Max به دانشجویان این امکان را می‌دهد تا با تسلط بر ابزارها و تکنیک‌های پیشرفته، آماده ورود به بازار کار حرفه‌ای شوند و در زمینه‌های مختلفی از جمله معماری، بازی‌سازی، و تولید محتوای بصری به فعالیت بپردازند.</p>
    </div>
  );
};

export default Intro3Dmax;