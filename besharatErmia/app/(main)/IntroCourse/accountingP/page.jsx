import {
  ClockIcon,
  PresentationChartLineIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
const IntroAccountingP = () => {
  return (
    <div className="text-white p-2">
      <div className="p-4 md:flex md:justify-around md:align-middle text-white container mb-12">
        <div className="flex-col justify-center p-2 w-full">
          <h1 className="font-bold text-3xl mb-12 flex justify-center">
            حسابداری مقدماتی
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
            src="https://besharatacademy.com/media/videos/accountingP.mp4"
            controls
            className="w-full rounded-3xl"
          ></video>
        </div>
      </div>
      <p>
        سلام به همه علاقه‌مندان به دنیای مالی و حسابداری! امروز با خوشحالی دوره
        ویژه‌ای را به شما معرفی می‌کنیم که به شما این امکان را می‌دهد تا با اصول
        پایه‌ای حسابداری آشنا شوید و مهارت‌های لازم برای مدیریت مالی را یاد
        بگیرید. این دوره شامل 12 جلسه 2 ساعته است که به‌طور جامع به بررسی مباحث
        اساسی حسابداری، از جمله مفاهیم بدهکار و بستانکار، پرداخته و اصول پایه‌ای
        این علم را به شما آموزش می‌دهد.
      </p>
      <p>در این دوره، شما با مبانی و اصول ابتدایی حسابداری آشنا خواهید شد. از تعریف حسابداری و اهمیت آن در کسب‌وکارها گرفته تا مفاهیم کلیدی مانند بدهکار و بستانکار، دفتر روزنامه و دفتر کل. هر جلسه به‌طور تخصصی به یک موضوع خاص پرداخته و به شما کمک می‌کند تا اصول حسابداری را به‌صورت دقیق و کاربردی درک کنید. این دوره به‌گونه‌ای طراحی شده است که هم برای مبتدیان و هم برای کسانی که به دنبال تقویت دانش پایه‌ای خود هستند، مفید و قابل استفاده باشد.</p>
      <p>بخشی از دوره به بررسی مفاهیم پایه‌ای مانند ثبت تراکنش‌ها، تحلیل حساب‌های ترازنامه و صورت‌های مالی اختصاص دارد. شما یاد خواهید گرفت چگونه اطلاعات مالی را به‌درستی ثبت کرده و گزارش‌های مالی دقیق و شفاف تهیه کنید. همچنین، تکنیک‌های مرتبط با مدیریت و کنترل حساب‌ها را یاد خواهید گرفت تا بتوانید به‌طور مؤثر وضعیت مالی سازمان‌ها و کسب‌وکارها را مدیریت کنید.</p>
      <p>در پایان دوره، شما قادر خواهید بود تا اصول حسابداری را در عمل پیاده‌سازی کنید و توانایی‌های خود را در تهیه و تحلیل صورت‌های مالی به نمایش بگذارید. با بهره‌گیری از این دوره، قدم مهمی در مسیر حرفه‌ای خود در زمینه حسابداری برداشته و می‌توانید به فرصت‌های شغلی جدید و کاربردی در این حوزه دست یابید. منتظر شما در این دوره آموزشی پرمحتوا و عملیاتی هستیم!</p>
    

      <a
        href="../assets/file/کتاب_حسابداری_مقدماتی_شهرام_روزبهانی.pdf"
        className="w-full mt-6"
        download
      >
        <button className="bg-[#ffd700] text-black font-bold text-base w-full py-3 my-10">
          کتاب حسابداری مقدماتی
        </button>
      </a>
    </div>
  );
};

export default IntroAccountingP;
