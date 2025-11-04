import {
  ClockIcon,
  PresentationChartLineIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
const IntroIcdl = () => {
  return (
    <div className="text-white p-2">
      <div className="p-4 md:flex md:justify-around md:align-middle text-white container mb-12">
        <div className="flex-col justify-center p-2 w-full">
          <h1 className="font-bold text-3xl mb-12 flex justify-center">ICDL</h1>
          <div className="flex justify-around w-full">
            <div className="flex-col justify-between align-middle m-auto">
              <ClockIcon className="text-[#ffd700] w-12" />
              <p>60 ساعت</p>
            </div>
            <div className="flex-col justify-between align-middle m-auto">
              <PresentationChartLineIcon className="text-[#ffd700] w-12" />
              <p>30 جلسه</p>
            </div>
            <div className="flex-col justify-between align-middle m-auto">
              <AcademicCapIcon className="text-[#ffd700] w-12 flex justify-center m-auto" />
              <p className="ml-1">+1000 دانشجو</p>
            </div>
          </div>
        </div>
        <div className="md:w-[600px] rounded-3xl">
          <video
            src="https://besharatacademy.com/media/videos/icdl.mp4"
            controls
            className="w-full rounded-3xl"
          ></video>
        </div>
      </div>
      <p>
        مهارت ICDL شامل ۳۰ جلسه ۲ ساعته هست و دارای سرفصل‌های مبانی، ویندوز،
        ورد، اکسل، اکسس، پاورپوینت و اینترنت می‌باشد. اگر بخواهیم در مورد اهمیت
        ICDL صحبت کنیم باید بگیم که ICDL پیش نیاز یادگیری کامپیوتر و گرایش‌های
        مختلف آن هست.
      </p>
      <p>
        در دنیای پر از فناوری امروزی، داشتن مهارت‌های کامپیوتری اساسی بسیار
        حیاتی است و یکی از راه‌هایی که می‌توانید آنها را به دست آورید گذراندن
        دوره ی ICDL است. ICDL به شما امکان می‌دهد تا مهارت‌های مورد نیاز برای
        استفاده از رایانه و برنامه‌های کاربردی مختلف را به دست آورید. ICDL یک
        استاندارد بین المللی است که در بیش از ۱۰۰ کشور دنیا به رسمیت شناخته شده
        است و افرادی که این مدرک را دریافت می‌کنند قادر به نشان دادن مهارت‌های
        خود در حوزه تکنولوژی اطلاعاتی هستند.{" "}
      </p>
      <p>
        همچنین از مزایای یادگیری ICDL جز افزایش مهارت‌های کامپیوتری می‌توانیم به
        بهبود فرصت‌های شغلی و افزایش اعتماد به نفس هم اشاره کنیم.{" "}
      </p>
      <p>در آخر اگر بخواهیم چند کاربرد مهم مدرک ICDL را نام ببریم باید بگیم که از جمله مهم‌ترین کاربردهای این مدرک این است که در تمامی سازمان‌ها و ادارات چه در داخل کشور و چه خارج از آن قابل ارائه هست، جهت استخدام و ارتقاء درجه شغلی به عنوان یک اهرم موفقیت، گسترده‌ترین و شناخته شده‌ترین مدرک در تمام جهان برای کاربری کامپیوتر محسوب می‌شود و همچنین مانند دروازه‌ای است که شما را به حوزه IT و کامپیوتر وارد می‌کند و می‌توانید اطلاعات و تحصیلات تکمیلی در این زمینه به دست آورید.</p>
    </div>
  );
};

export default IntroIcdl;
