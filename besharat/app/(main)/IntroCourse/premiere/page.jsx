import {
  ClockIcon,
  PresentationChartLineIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

const IntroPremier = () => {
  return (
    <div className="text-[#1A1A2E] p-6 bg-white">
      <div className="p-4 md:flex md:justify-around md:align-middle container mb-12">
        <div className="flex-col justify-center p-2 w-full">
          <h1 className="font-bold text-3xl mb-12 flex justify-center text-[#000080]">
            Premiere
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
            src="https://besharatacademy.com/media/videos/premiere.mp4"
            controls
            className="w-full rounded-3xl"
          ></video>
        </div>
      </div>
      <p className="leading-relaxed mb-2">
        دوره آموزش پریمیر یک فرصت بی‌نظیر برای علاقه‌مندان به ویرایش ویدئو و
        تولید محتواهای تصویری است. این دوره شامل 12 جلسه دو ساعته می‌باشد که به
        صورت جامع و کامل، از مبانی ابتدایی تا مفاهیم پیشرفته نرم‌افزار پریمیر را
        پوشش می‌دهد. هدف از برگزاری این دوره، آشنایی شرکت‌کنندگان با ابزارها و
        قابلیت‌های مختلف پریمیر و توانمندسازی آنها در زمینه ویرایش حرفه‌ای
        ویدئوها است.
      </p>
      <p className="leading-relaxed mb-2">در جلسات اولیه، مباحث پایه‌ای مانند آشنایی با محیط کاری پریمیر، وارد کردن و مدیریت فایل‌های ویدئویی، برش و چسباندن قطعات ویدئو، و اعمال افکت‌های ابتدایی آموزش داده می‌شود. این مباحث به گونه‌ای طراحی شده‌اند که شرکت‌کنندگان بدون داشتن پیش‌زمینه قبلی نیز بتوانند به راحتی با نرم‌افزار کار کنند و اصول اولیه ویرایش ویدئو را فرا بگیرند.</p>
      <p className="leading-relaxed mb-2">با پیشرفت دوره، مباحث پیشرفته‌تری مانند تصحیح رنگ، کار با صدا، استفاده از ماسک‌ها و افکت‌های پیشرفته، و تکنیک‌های حرفه‌ای تدوین ویدئو معرفی می‌شوند. شرکت‌کنندگان در این جلسات با روش‌های خلاقانه و نوآورانه برای ایجاد ویدئوهای جذاب و تاثیرگذار آشنا می‌شوند و می‌توانند پروژه‌های واقعی را با استفاده از پریمیر به صورت حرفه‌ای ویرایش کنند.</p>
      <p className="leading-relaxed">در پایان دوره، شرکت‌کنندگان قادر خواهند بود با اعتماد به نفس و تسلط کافی، پروژه‌های ویدئویی خود را از ابتدا تا انتها به طور کامل و حرفه‌ای مدیریت کنند. این دوره، فرصتی استثنایی برای کسانی است که به دنبال شغل در حوزه ویرایش ویدئو هستند یا قصد دارند محتوای تصویری خود را با کیفیت بالا تولید و منتشر کنند</p>
    </div>
  );
};

export default IntroPremier;