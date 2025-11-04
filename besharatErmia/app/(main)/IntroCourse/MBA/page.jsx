import {
  ClockIcon,
  PresentationChartLineIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
const IntroMBA = () => {
  return (
    <div className="text-white p-2">
      <div className="p-4 md:flex md:justify-around md:align-middle text-white container mb-12">
        <div className="flex-col justify-center p-2 w-full">
          <h1 className="font-bold text-3xl mb-12 flex justify-center">
            MBA
          </h1>
          <div className="flex justify-around w-full">
            <div className="flex-col justify-between align-middle m-auto">
              <ClockIcon className="text-[#ffd700] w-12" />
              <p>500 ساعت</p>
            </div>
            <div className="flex-col justify-between align-middle m-auto">
              <PresentationChartLineIcon className="text-[#ffd700] w-12" />
              <p>250 جلسه</p>
            </div>
            <div className="flex-col justify-between align-middle m-auto">
              <AcademicCapIcon className="text-[#ffd700] w-12 flex justify-center m-auto" />
              <p className="ml-1">+1000 دانشجو</p>
            </div>
          </div>
        </div>
        <div className="md:w-[600px] rounded-3xl">
          <video
            src="https://besharatacademy.com/media/videos/.mp4"
            controls
            className="w-full rounded-3xl"
          ></video>
        </div>
      </div>
   <p>دوره MBA (Master of Business Administration) آموزشگاه بشارت، یک برنامه جامع و کاربردی برای افرادی است که قصد دارند دانش مدیریتی خود را توسعه داده و با بینشی استراتژیک وارد دنیای حرفه‌ای کسب‌وکار شوند. این دوره به‌طور ویژه برای کارآفرینان، مدیران، صاحبان کسب‌وکار، و علاقه‌مندان به رشد فردی و حرفه‌ای طراحی شده است.</p>
   <p>در این دوره، شرکت‌کنندگان با مفاهیم کلیدی مدیریت مانند مدیریت استراتژیک، بازاریابی و فروش، مدیریت منابع انسانی، اصول مالی و حسابداری، تحلیل بازار، رفتار سازمانی، کارآفرینی و توسعه کسب‌وکار آشنا می‌شوند. محتوای دوره به‌گونه‌ای تنظیم شده که کاربرد مستقیم در محیط‌های واقعی کسب‌وکار داشته باشد و شرکت‌کنندگان بتوانند آن را بلافاصله در کار خود به‌کار بگیرند.</p>
   <p>یکی از ویژگی‌های متمایز این دوره در آموزشگاه بشارت، استفاده از اساتید باتجربه‌ای است که سابقه عملی در راه‌اندازی و مدیریت کسب‌وکارهای موفق دارند. این موضوع باعث می‌شود مباحث، صرفاً تئوریک نباشند و با مثال‌های واقعی از چالش‌ها و فرصت‌های بازار ترکیب شوند.</p>
   <p>فرمت آموزش شامل کلاس‌های تعاملی، کارگاه‌های عملی، تحلیل مطالعات موردی (Case Study)، پروژه‌های تیمی و جلسات مشاوره فردی است. این ترکیب آموزشی کمک می‌کند که یادگیری عمیق‌تر، عملی‌تر و ماندگارتر شود. هدف نهایی، تجهیز هنرجو به ابزارهایی است که برای تصمیم‌گیری مؤثر، حل مسئله و مدیریت اثربخش در محیط‌های پیچیده امروز ضروری هستند.</p>
   <p>در پایان دوره، گواهینامه معتبر MBA از آموزشگاه بشارت به شرکت‌کنندگان اعطا می‌شود. همچنین امکان معرفی به فرصت‌های کاری یا راهنمایی برای راه‌اندازی یا توسعه کسب‌وکار شخصی از دیگر مزایای این دوره است.</p>
   <p>اگر به دنبال ارتقای سطح دانش مدیریتی خود، توسعه دیدگاه حرفه‌ای، یا آماده‌سازی برای نقش‌های کلیدی در کسب‌وکار هستید، دوره MBA آموزشگاه بشارت انتخابی هوشمندانه برای شما خواهد بود. همین امروز برای ثبت‌نام اقدام کنید و قدمی مؤثر در مسیر رشد و موفقیت خود بردارید.</p>
    </div>
  );
};

export default IntroMBA;
