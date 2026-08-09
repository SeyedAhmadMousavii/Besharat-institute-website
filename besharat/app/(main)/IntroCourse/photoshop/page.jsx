import {
  ClockIcon,
  PresentationChartLineIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
const IntroPhotoshop = () => {
  return (
    <div className="text-white p-2">
      <div className="p-4 md:flex md:justify-around md:align-middle text-white container mb-12">
        <div className="flex-col justify-center p-2 w-full">
          <h1 className="font-bold text-3xl mb-12 flex justify-center">
            Photoshop
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
            src="https://besharatacademy.com/media/videos/photoshop.mp4"
            controls
            className="w-full rounded-3xl"
          ></video>
        </div>
      </div>
      <p>
        دوره 12 جلسه‌ای فتوشاپ یک برنامه آموزشی جامع و عملی است که به منظور
        آموزش مهارت‌های اساسی و پیشرفته فتوشاپ طراحی شده است. این دوره، شامل 12
        جلسه 2 ساعته است که به صورت متوالی برگزار می‌شود و هدف آن آشنایی
        شرکت‌کنندگان با قابلیت‌های گسترده این نرم‌افزار گرافیکی قدرتمند است. در
        این دوره، دانشجویان با ابزارها و تکنیک‌های کاربردی فتوشاپ آشنا می‌شوند و
        توانایی ویرایش و طراحی تصاویر حرفه‌ای را کسب می‌کنند.
      </p>
      <p>در جلسات ابتدایی، مباحث پایه‌ای فتوشاپ مانند شناخت محیط کاربری، آشنایی با ابزارهای انتخاب و برش، کار با لایه‌ها و ماسک‌ها و اصول تنظیم رنگ و نور آموزش داده می‌شود. این مباحث به گونه‌ای طراحی شده‌اند که حتی کسانی که هیچ آشنایی قبلی با فتوشاپ ندارند، بتوانند به راحتی مفاهیم را درک کرده و از آن‌ها استفاده کنند. هدف از این بخش، ایجاد یک پایه قوی و مفهومی برای دانشجویان است تا بتوانند به راحتی به مباحث پیشرفته‌تر وارد شوند.</p>
      <p>در جلسات میانی و پیشرفته‌تر، تمرکز بر روی تکنیک‌های حرفه‌ای و پیچیده‌تر فتوشاپ است. موضوعاتی مانند روتوش تصاویر، ایجاد افکت‌های ویژه، کار با فیلترها و اسمارت آبجکت‌ها، و ترکیب تصاویر به طور کامل پوشش داده می‌شوند. همچنین، آموزش طراحی پوسترها و بنرهای تبلیغاتی و استفاده از متن و شکل‌ها در طراحی‌ها از دیگر مواردی است که در این بخش به آن پرداخته می‌شود. این مباحث به دانشجویان کمک می‌کنند تا توانایی‌های خود را در طراحی و ویرایش تصاویر به سطحی بالاتر ارتقاء دهند.</p>
      <p>در انتهای دوره، دانشجویان با انجام پروژه‌های عملی و واقعی به ارزیابی مهارت‌های خود می‌پردازند. این پروژه‌ها شامل طراحی پوستر، ویرایش تصاویر پرتره و ایجاد کلاژهای خلاقانه می‌باشد. هدف از این بخش، تقویت اعتماد به نفس و افزایش تسلط دانشجویان بر ابزارها و تکنیک‌های فتوشاپ است. پس از اتمام دوره، شرکت‌کنندگان نه تنها قادر خواهند بود تا به عنوان یک طراح گرافیک حرفه‌ای فعالیت کنند، بلکه می‌توانند در حوزه‌های مختلف از جمله عکاسی، تبلیغات و تولید محتوا نیز نقش مؤثری ایفا کنند.</p>
    </div>
  );
};

export default IntroPhotoshop;
