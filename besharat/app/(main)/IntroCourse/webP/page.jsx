import {
  ClockIcon,
  PresentationChartLineIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

const IntroWebP = () => {
  return (
    <div className="text-[#1A1A2E] p-6 bg-white">
      <div className="p-4 md:flex md:justify-around md:align-middle container mb-12">
        <div className="flex-col justify-center p-2 w-full">
          <h1 className="font-bold text-3xl mb-12 flex justify-center text-[#000080]">
            دوره طراحی وب مقدماتی
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
            src="https://besharatacademy.com/media/videos/webP.mp4"
            controls
            className="w-full rounded-3xl"
          ></video>
        </div>
      </div>

      <p className="leading-relaxed mb-4">
        حضور آنلاین کسب‌وکارها، امروز به یکی از ضروری‌ترین ارکان رشد و رقابت در بازار تبدیل شده است. طراحی وب‌سایت، نخستین گام رسمی هر کسب‌وکار برای ورود به فضای دیجیتال و ایجاد هویت آنلاین محسوب می‌شود. دوره طراحی وب مقدماتی در آموزشگاه بین‌المللی بشارت، برای افرادی طراحی شده که می‌خواهند از پایه، مهارت طراحی و پیاده‌سازی صفحات وب را به‌صورت اصولی و کاربردی فرا بگیرند و وارد بازار کار پرتقاضای طراحی وب شوند. این دوره بدون نیاز به پیش‌زمینه برنامه‌نویسی، تمام مفاهیم ضروری HTML، CSS و Bootstrap را از مقدماتی تا سطح ساخت پروژه واقعی پوشش می‌دهد.
      </p>

      <h2 className="text-2xl font-bold mb-4 mt-8 text-[#000080] border-r-4 border-[#D4AF37] pr-3">
        چرا طراحی وب را یاد بگیریم؟
      </h2>
      <p className="leading-relaxed mb-4">
        هر کسب‌وکار، سازمان یا پروژه‌ای که امروز به‌دنبال حضور مؤثر در فضای آنلاین است، به یک وب‌سایت حرفه‌ای نیاز دارد. طراحان وب با تسلط بر HTML، CSS و فریمورک‌های مدرن مانند Bootstrap، توانایی ساخت صفحات واکنش‌گرا، سریع و سازگار با موبایل را دارند. این مهارت، دروازه ورود به فرصت‌های شغلی متنوعی از جمله همکاری با آژانس‌های دیجیتال، شرکت‌های نرم‌افزاری، تیم‌های فریلنسری و پروژه‌های شخصی است.
      </p>
      <p className="leading-relaxed mb-4">
        دوره طراحی وب مقدماتی، نه‌تنها مهارت فنی ساخت صفحات وب را آموزش می‌دهد، بلکه هنرجو را با اصول تفکر طراحی، ساختاردهی محتوا و تجربه کاربری نیز آشنا می‌کند. این ترکیب، هنرجو را برای ورود به سطوح پیشرفته‌تر مانند JavaScript و فریمورک‌های مدرن آماده می‌سازد.
      </p>

      <h2 className="text-2xl font-bold mb-4 mt-8 text-[#000080] border-r-4 border-[#D4AF37] pr-3">
        سرفصل‌های دوره طراحی وب مقدماتی
      </h2>

      <h3 className="text-xl font-bold mb-2 mt-6 text-[#000080]">
        ۱. مقدمات و مفاهیم پایه وب
      </h3>
      <p className="leading-relaxed mb-4">
        آشنایی با ساختار وب، نحوه کار مرورگرها، مفهوم سرور و کلاینت، دامنه و هاست، و آشنایی با ابزارهای موردنیاز یک طراح وب. در این بخش، هنرجو با محیط کار و ابزارهای توسعه مانند Visual Studio Code و مرورگرهای مدرن آشنا می‌شود.
      </p>

      <h3 className="text-xl font-bold mb-2 mt-6 text-[#000080]">
        ۲. HTML؛ زبان ساختار صفحات وب
      </h3>
      <p className="leading-relaxed mb-4">
        آشنایی با تگ‌های پایه HTML، ساختار یک سند HTML، عناوین، پاراگراف‌ها، لیست‌ها، لینک‌ها و تصاویر. تمرکز این بخش بر درک ساختار صحیح صفحه و رعایت استانداردهای وب است.
      </p>

      <h3 className="text-xl font-bold mb-2 mt-6 text-[#000080]">
        ۳. HTML پیشرفته؛ فرم‌ها، جداول و عناصر معنایی
      </h3>
      <p className="leading-relaxed mb-4">
        طراحی فرم‌های تعاملی، ساخت جداول داده، استفاده از تگ‌های معنایی (Semantic) مانند header، nav، section و footer برای بهبود دسترس‌پذیری و سئو.
      </p>

      <h3 className="text-xl font-bold mb-2 mt-6 text-[#000080]">
        ۴. CSS؛ زبان استایل‌دهی صفحات وب
      </h3>
      <p className="leading-relaxed mb-4">
        آشنایی با ساختار CSS، انواع انتخابگرها، مدل جعبه‌ای (Box Model)، تنظیم رنگ، فونت، پس‌زمینه، حاشیه و فاصله‌گذاری. هنرجو در این بخش، صفحات HTML را به ظاهری حرفه‌ای و منظم تبدیل می‌کند.
      </p>

      <h3 className="text-xl font-bold mb-2 mt-6 text-[#000080]">
        ۵. چیدمان و طرح‌بندی با CSS
      </h3>
      <p className="leading-relaxed mb-4">
        آشنایی با روش‌های چیدمان مدرن مانند Flexbox و Grid برای طراحی ساختارهای پیچیده و واکنش‌گرا. این بخش، مهارت اصلی یک طراح وب حرفه‌ای محسوب می‌شود.
      </p>

      <h3 className="text-xl font-bold mb-2 mt-6 text-[#000080]">
        ۶. طراحی واکنش‌گرا (Responsive Design)
      </h3>
      <p className="leading-relaxed mb-4">
        آشنایی با Media Query‌ها و اصول طراحی واکنش‌گرا برای نمایش صحیح صفحات در دستگاه‌های مختلف (موبایل، تبلت و دسکتاپ).
      </p>

      <h3 className="text-xl font-bold mb-2 mt-6 text-[#000080]">
        ۷. Bootstrap؛ فریمورک طراحی سریع و مدرن
      </h3>
      <p className="leading-relaxed mb-4">
        آشنایی با فریمورک Bootstrap، سیستم شبکه‌ای (Grid System) آن، کامپوننت‌های آماده مانند دکمه‌ها، فرم‌ها، کارت‌ها و نوار ناوبری. هنرجو در این بخش، وب‌سایت‌های واکنش‌گرا و حرفه‌ای را با سرعت و استاندارد بالا پیاده‌سازی می‌کند.
      </p>

      <h3 className="text-xl font-bold mb-2 mt-6 text-[#000080]">
        ۸. اصول سئو و بهینه‌سازی صفحات
      </h3>
      <p className="leading-relaxed mb-4">
        آشنایی با اصول اولیه سئو (SEO) در طراحی وب، ساختار صحیح HTML برای موتورهای جستجو، بهینه‌سازی سرعت بارگذاری و رعایت اصول دسترس‌پذیری.
      </p>

      <h3 className="text-xl font-bold mb-2 mt-6 text-[#000080]">
        ۹. پروژه پایانی؛ ساخت یک وب‌سایت کامل
      </h3>
      <p className="leading-relaxed mb-4">
        طراحی و پیاده‌سازی یک وب‌سایت چندصفحه‌ای واکنش‌گرا با استفاده از HTML، CSS و Bootstrap، به‌عنوان نمونه‌کار حرفه‌ای هنرجو در بازار کار. این پروژه تمام مهارت‌های آموخته‌شده را در یک نمونه واقعی به کار می‌گیرد.
      </p>

      <h2 className="text-2xl font-bold mb-4 mt-8 text-[#000080] border-r-4 border-[#D4AF37] pr-3">
        پیش‌نیازهای دوره
      </h2>
      <p className="leading-relaxed mb-4">
        این دوره هیچ پیش‌نیاز تخصصی در برنامه‌نویسی ندارد و برای همه علاقه‌مندان قابل شرکت است. آشنایی مقدماتی با کامپیوتر و مهارت‌های پایه ICDL برای بهره‌مندی کامل از دوره کافی است.
      </p>

      <h2 className="text-2xl font-bold mb-4 mt-8 text-[#000080] border-r-4 border-[#D4AF37] pr-3">
        مخاطبان دوره
      </h2>
      <ul className="list-disc mr-8 mb-4 text-[#D4AF37] font-medium space-y-2">
        <li><span className="text-[#1A1A2E]">افراد علاقه‌مند به ورود به حوزه طراحی و توسعه وب</span></li>
        <li><span className="text-[#1A1A2E]">دانشجویان و فارغ‌التحصیلان رشته‌های کامپیوتر و فناوری اطلاعات</span></li>
        <li><span className="text-[#1A1A2E]">صاحبان کسب‌وکار که می‌خواهند سایت خود را مدیریت کنند</span></li>
        <li><span className="text-[#1A1A2E]">طراحان گرافیک که به‌دنبال توسعه مهارت‌های وب هستند</span></li>
        <li><span className="text-[#1A1A2E]">علاقه‌مندان به فریلنسری و کسب درآمد از طراحی وب</span></li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 mt-8 text-[#000080] border-r-4 border-[#D4AF37] pr-3">
        دستاوردهای دوره
      </h2>
      <ul className="list-disc mr-8 mb-4 text-[#D4AF37] font-medium space-y-2">
        <li><span className="text-[#1A1A2E]">تسلط بر HTML و ساختاردهی صفحات وب مطابق استاندارد</span></li>
        <li><span className="text-[#1A1A2E]">توانایی استایل‌دهی حرفه‌ای صفحات با CSS</span></li>
        <li><span className="text-[#1A1A2E]">طراحی چیدمان‌های مدرن با Flexbox و Grid</span></li>
        <li><span className="text-[#1A1A2E]">ساخت وب‌سایت‌های واکنش‌گرا با Bootstrap</span></li>
        <li><span className="text-[#1A1A2E]">آشنایی با اصول سئو و بهینه‌سازی صفحات وب</span></li>
        <li><span className="text-[#1A1A2E]">توانایی ارائه نمونه‌کار حرفه‌ای و ورود به بازار کار طراحی وب</span></li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 mt-8 text-[#000080] border-r-4 border-[#D4AF37] pr-3">
        ساختار و مدت برگزاری دوره
      </h2>
      <p className="leading-relaxed mb-4">
        این دوره در قالب ۱۲ جلسه و مجموعاً ۲۴ ساعت آموزشی برگزار می‌شود. هر جلسه شامل بخش تئوری و بخش عملی است تا هنرجو مفاهیم را به‌صورت هم‌زمان در محیط کدنویسی تمرین کند. پس از پایان دوره، هنرجویان موفق گواهی پایان دوره معتبر از آموزشگاه بین‌المللی بشارت دریافت می‌کنند.
      </p>

      <h2 className="text-2xl font-bold mb-4 mt-8 text-[#000080] border-r-4 border-[#D4AF37] pr-3">
        چرا آموزشگاه بین‌المللی بشارت؟
      </h2>
      <p className="leading-relaxed mb-4">
        آموزشگاه بین‌المللی بشارت با بیش از ۲۶ سال سابقه فعالیت آموزشی و بهره‌مندی از مجوزهای رسمی سازمان فنی و حرفه‌ای، وزارت آموزش‌وپرورش و وزارت تعاون، کار و رفاه اجتماعی، دوره‌های تخصصی طراحی وب را با تمرکز بر مهارت‌های کاربردی و نیاز واقعی بازار کار برگزار می‌کند. اساتید دوره از متخصصان فعال در پروژه‌های صنعتی هستند و محتوای آموزشی مطابق آخرین استانداردهای جهانی به‌روزرسانی می‌شود.
      </p>

      <p className="leading-relaxed mb-8 font-bold text-[#000080]">
        برای مشاوره و ثبت‌نام در دوره طراحی وب مقدماتی، با کارشناسان آموزشگاه بین‌المللی بشارت در تماس باشید.
      </p>
    </div>
  );
};

export default IntroWebP;