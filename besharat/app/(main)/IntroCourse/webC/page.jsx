import {
  ClockIcon,
  PresentationChartLineIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

const IntroWebC = () => {
  return (
    <div className="text-[#1A1A2E] p-6 bg-white">
      <div className="p-4 md:flex md:justify-around md:align-middle container mb-12">
        <div className="flex-col justify-center p-2 w-full">
          <h1 className="font-bold text-3xl mb-12 flex justify-center text-[#000080]">
            دوره طراحی وب تکمیلی (JavaScript)
          </h1>
          <div className="flex justify-around w-full">
            <div className="flex-col justify-between align-middle m-auto">
              <ClockIcon className="text-[#D4AF37] w-12" />
              <p className="text-[#1A1A2E]">۲۴ ساعت</p>
            </div>
            <div className="flex-col justify-between align-middle m-auto">
              <PresentationChartLineIcon className="text-[#D4AF37] w-12" />
              <p className="text-[#1A1A2E]">۱۲ جلسه</p>
            </div>
            <div className="flex-col justify-between align-middle m-auto">
              <AcademicCapIcon className="text-[#D4AF37] w-12 flex justify-center m-auto" />
              <p className="ml-1 text-[#1A1A2E]">+۱۰۰۰ دانشجو</p>
            </div>
          </div>
        </div>
        <div className="md:w-[600px] rounded-3xl shadow-lg border-2 border-[#D4AF37]/30">
          <video
            src="https://besharatacademy.com/media/videos/webC.mp4"
            controls
            className="w-full rounded-3xl"
          ></video>
        </div>
      </div>

      <p className="leading-relaxed mb-4">
        پس از تسلط بر HTML و CSS، گام بعدی در مسیر حرفه‌ای طراحی وب، یادگیری زبان برنامه‌نویسی JavaScript است؛ زبانی که صفحات ایستا را به وب‌سایت‌های پویا و تعاملی تبدیل می‌کند. دوره طراحی وب تکمیلی در آموزشگاه بین‌المللی بشارت، برای افرادی طراحی شده که پیش‌زمینه‌ای در مبانی طراحی وب دارند و می‌خواهند توانایی‌های خود را در ساخت وب‌سایت‌های حرفه‌ای، تعاملی و مبتنی بر داده گسترش دهند. در این دوره، JavaScript از مبانی تا مفاهیم پیشرفته مانند کار با API، برنامه‌نویسی غیرهمزمان (Asynchronous) و بهینه‌سازی عملکرد وب‌سایت آموزش داده می‌شود.
      </p>

      <h2 className="text-2xl font-bold mb-4 mt-8 text-[#000080] border-r-4 border-[#D4AF37] pr-3">
        چرا یادگیری JavaScript ضروری است؟
      </h2>
      <p className="leading-relaxed mb-4">
        JavaScript امروز پرکاربردترین زبان برنامه‌نویسی وب در جهان است و در تمام مرورگرهای مدرن به‌صورت بومی پشتیبانی می‌شود. این زبان، تنها ابزار ساخت صفحات پویا در سمت کلاینت است و ستون فقرات تمام فریمورک‌های مدرن مانند React، Vue و Angular محسوب می‌شود. تسلط بر JavaScript، دروازه ورود به فرصت‌های شغلی گسترده‌ای در حوزه طراحی وب، توسعه فرانت‌اند و برنامه‌نویسی فول‌استک است.
      </p>
      <p className="leading-relaxed mb-4">
        در بازار کار امروز، کارفرمایان به‌دنبال طراحان وبی هستند که تنها صفحات ایستا نسازند، بلکه بتوانند تجربه کاربری پویا، واکنش‌گرا و تعاملی ایجاد کنند. این دوره با تمرکز بر پیاده‌سازی عملی و پروژه‌محور، هنرجو را برای پاسخ به همین نیاز بازار آماده می‌کند.
      </p>

      <h2 className="text-2xl font-bold mb-4 mt-8 text-[#000080] border-r-4 border-[#D4AF37] pr-3">
        سرفصل‌های دوره طراحی وب تکمیلی
      </h2>

      <h3 className="text-xl font-bold mb-2 mt-6 text-[#000080]">
        ۱. مقدمات و ساختار زبان JavaScript
      </h3>
      <p className="leading-relaxed mb-4">
        آشنایی با محیط اجرای JavaScript، نحوه اتصال آن به HTML، ساختار دستورات، کامنت‌گذاری و ابزارهای اشکال‌زدایی (Debugging) در مرورگر.
      </p>

      <h3 className="text-xl font-bold mb-2 mt-6 text-[#000080]">
        ۲. متغیرها، انواع داده و عملگرها
      </h3>
      <p className="leading-relaxed mb-4">
        آشنایی با متغیرها (let، const، var)، انواع داده اولیه، تبدیل نوع، عملگرهای ریاضی، منطقی و مقایسه‌ای، و درک مفهوم Scope در JavaScript.
      </p>

      <h3 className="text-xl font-bold mb-2 mt-6 text-[#000080]">
        ۳. ساختارهای کنترلی و حلقه‌ها
      </h3>
      <p className="leading-relaxed mb-4">
        پیاده‌سازی شرط‌ها (if/else، switch) و حلقه‌ها (for، while، do-while) همراه با تمرین‌های کاربردی برای تسلط بر منطق برنامه‌نویسی.
      </p>

      <h3 className="text-xl font-bold mb-2 mt-6 text-[#000080]">
        ۴. توابع و برنامه‌نویسی تابعی
      </h3>
      <p className="leading-relaxed mb-4">
        تعریف توابع، پارامترها، مقدار بازگشتی، توابع بی‌نام (Anonymous)، توابع پیکانی (Arrow Functions) و مفهوم Callback.
      </p>

      <h3 className="text-xl font-bold mb-2 mt-6 text-[#000080]">
        ۵. آرایه‌ها و اشیاء
      </h3>
      <p className="leading-relaxed mb-4">
        کار با آرایه‌ها (Arrays) و اشیاء (Objects)، متدهای پرکاربرد آرایه مانند map، filter و reduce، و درک ساختار داده‌های پیچیده.
      </p>

      <h3 className="text-xl font-bold mb-2 mt-6 text-[#000080]">
        ۶. دستکاری DOM و تعامل با صفحه
      </h3>
      <p className="leading-relaxed mb-4">
        آشنایی با Document Object Model، انتخاب عناصر HTML، تغییر محتوا، استایل و ویژگی‌ها، و ساخت عناصر جدید به‌صورت پویا با JavaScript.
      </p>

      <h3 className="text-xl font-bold mb-2 mt-6 text-[#000080]">
        ۷. مدیریت رویدادها (Events)
      </h3>
      <p className="leading-relaxed mb-4">
        آشنایی با انواع رویدادها (click، input، submit و ...)، نحوه اتصال رویدادها، Event Object و مفهوم Event Delegation برای مدیریت بهینه تعامل کاربر.
      </p>

      <h3 className="text-xl font-bold mb-2 mt-6 text-[#000080]">
        ۸. برنامه‌نویسی غیرهمزمان و کار با APIها
      </h3>
      <p className="leading-relaxed mb-4">
        آشنایی با مفهوم Asynchronous، Promises، Async/Await و Fetch API برای دریافت داده از سرورها و اتصال وب‌سایت به سرویس‌های خارجی و REST API.
      </p>

      <h3 className="text-xl font-bold mb-2 mt-6 text-[#000080]">
        ۹. ذخیره‌سازی داده در سمت کلاینت
      </h3>
      <p className="leading-relaxed mb-4">
        آشنایی با LocalStorage و SessionStorage برای ذخیره‌سازی داده‌ها در مرورگر و ساخت قابلیت‌هایی مانند سبد خرید، فرم‌های ماندگار و تنظیمات کاربر.
      </p>

      <h3 className="text-xl font-bold mb-2 mt-6 text-[#000080]">
        ۱۰. انیمیشن و افکت‌های تعاملی
      </h3>
      <p className="leading-relaxed mb-4">
        پیاده‌سازی انیمیشن‌های ساده با JavaScript، کار با CSS Transition و ساخت افکت‌های تعاملی برای بهبود تجربه کاربری.
      </p>

      <h3 className="text-xl font-bold mb-2 mt-6 text-[#000080]">
        ۱۱. اصول بهینه‌سازی و پاک‌نویسی کد
      </h3>
      <p className="leading-relaxed mb-4">
        رعایت اصول Clean Code، ماژولارنویسی، کاهش تکرار، مدیریت خطا (Error Handling) و بهینه‌سازی عملکرد صفحات وب.
      </p>

      <h3 className="text-xl font-bold mb-2 mt-6 text-[#000080]">
        ۱۲. پروژه پایانی؛ ساخت وب‌سایت پویا و تعاملی
      </h3>
      <p className="leading-relaxed mb-4">
        طراحی و پیاده‌سازی یک وب‌سایت کامل پویا با اتصال به API خارجی، مدیریت رویدادها و ذخیره‌سازی داده‌ها؛ به‌عنوان نمونه‌کار حرفه‌ای هنرجو در بازار کار.
      </p>

      <h2 className="text-2xl font-bold mb-4 mt-8 text-[#000080] border-r-4 border-[#D4AF37] pr-3">
        پیش‌نیازهای دوره
      </h2>
      <p className="leading-relaxed mb-4">
        این دوره برای افرادی طراحی شده که دوره طراحی وب مقدماتی را گذرانده‌اند یا با HTML و CSS آشنایی کافی دارند. آشنایی مقدماتی با کامپیوتر و مهارت‌های پایه ICDL نیز برای بهره‌مندی کامل از دوره توصیه می‌شود.
      </p>

      <h2 className="text-2xl font-bold mb-4 mt-8 text-[#000080] border-r-4 border-[#D4AF37] pr-3">
        مخاطبان دوره
      </h2>
      <ul className="list-disc mr-8 mb-4 text-[#D4AF37] font-medium space-y-2">
        <li><span className="text-[#1A1A2E]">فارغ‌التحصیلان دوره طراحی وب مقدماتی</span></li>
        <li><span className="text-[#1A1A2E]">طراحان وب که می‌خواهند صفحات پویا و تعاملی بسازند</span></li>
        <li><span className="text-[#1A1A2E]">دانشجویان رشته‌های کامپیوتر و فناوری اطلاعات</span></li>
        <li><span className="text-[#1A1A2E]">افرادی که به‌دنبال ورود به حوزه توسعه فرانت‌اند هستند</span></li>
        <li><span className="text-[#1A1A2E]">علاقه‌مندان به فریلنسری و پروژه‌های واقعی وب</span></li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 mt-8 text-[#000080] border-r-4 border-[#D4AF37] pr-3">
        دستاوردهای دوره
      </h2>
      <ul className="list-disc mr-8 mb-4 text-[#D4AF37] font-medium space-y-2">
        <li><span className="text-[#1A1A2E]">تسلط بر مبانی و مفاهیم پیشرفته زبان JavaScript</span></li>
        <li><span className="text-[#1A1A2E]">توانایی ساخت صفحات وب پویا و تعاملی</span></li>
        <li><span className="text-[#1A1A2E]">کار با DOM و مدیریت رویدادها به‌صورت حرفه‌ای</span></li>
        <li><span className="text-[#1A1A2E]">اتصال وب‌سایت به APIها و سرویس‌های خارجی</span></li>
        <li><span className="text-[#1A1A2E]">پیاده‌سازی برنامه‌نویسی غیرهمزمان با Promises و Async/Await</span></li>
        <li><span className="text-[#1A1A2E]">آمادگی برای ورود به یادگیری فریمورک‌های مدرن مانند React</span></li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 mt-8 text-[#000080] border-r-4 border-[#D4AF37] pr-3">
        ساختار و مدت برگزاری دوره
      </h2>
      <p className="leading-relaxed mb-4">
        این دوره در قالب ۱۲ جلسه و مجموعاً ۲۴ ساعت آموزشی برگزار می‌شود. هر جلسه شامل بخش تئوری و بخش عملی کدنویسی است تا هنرجو مفاهیم را به‌صورت هم‌زمان در محیط کدنویسی تمرین کند. پس از پایان دوره، هنرجویان موفق گواهی پایان دوره معتبر از آموزشگاه بین‌المللی بشارت دریافت می‌کنند.
      </p>

      <h2 className="text-2xl font-bold mb-4 mt-8 text-[#000080] border-r-4 border-[#D4AF37] pr-3">
        چرا آموزشگاه بین‌المللی بشارت؟
      </h2>
      <p className="leading-relaxed mb-4">
        آموزشگاه بین‌المللی بشارت با بیش از ۲۶ سال سابقه فعالیت آموزشی و بهره‌مندی از مجوزهای رسمی سازمان فنی و حرفه‌ای، وزارت آموزش‌وپرورش و وزارت تعاون، کار و رفاه اجتماعی، دوره‌های تخصصی برنامه‌نویسی و طراحی وب را با تمرکز بر مهارت‌های کاربردی و نیاز واقعی بازار کار برگزار می‌کند. اساتید دوره از متخصصان فعال در پروژه‌های صنعتی هستند و محتوای آموزشی مطابق آخرین استانداردهای جهانی به‌روزرسانی می‌شود.
      </p>

      <p className="leading-relaxed mb-8 font-bold text-[#000080]">
        برای مشاوره و ثبت‌نام در دوره طراحی وب تکمیلی، با کارشناسان آموزشگاه بین‌المللی بشارت در تماس باشید.
      </p>
    </div>
  );
};

export default IntroWebC;