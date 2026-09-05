import {
  ClockIcon,
  PresentationChartLineIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

const IntroAssistAccounting = () => {
  return (
    <div className="text-[#1A1A2E] p-6 bg-white">
      <div className="p-4 md:flex md:justify-around md:align-middle container mb-12">
        <div className="flex-col justify-center p-2 w-full">
          <h1 className="font-bold text-3xl mb-12 flex justify-center text-[#000080]">
            کمک حسابدار
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
            src="https://besharatacademy.com/media/videos/assistA.mp4"
            controls
            className="w-full rounded-3xl"
          ></video>
        </div>
      </div>
      <p className="leading-relaxed mb-2">
        سلام به همه علاقه‌مندان به دنیای حسابداری و مالی! امروز با خوشحالی
        دوره‌ای کاربردی و مفید را به شما معرفی می‌کنیم که به شما این امکان را
        می‌دهد تا مهارت‌های لازم برای ایفای نقش کمک حسابدار را به‌دست آورید. این
        دوره شامل 12 جلسه 2 ساعته است که به‌طور جامع به بررسی اصول و وظایف کلیدی
        کمک حسابدار پرداخته و مهارت‌های عملی مورد نیاز برای این شغل را به شما
        آموزش می‌دهد.
      </p>
      <p className="leading-relaxed mb-2">در این دوره، شما با مبانی و اصول پایه‌ای حسابداری آشنا خواهید شد. از ثبت و طبقه‌بندی تراکنش‌های مالی گرفته تا تهیه گزارش‌های مالی و مدیریت مستندات حسابداری. هر جلسه به‌طور تخصصی به یک موضوع خاص پرداخته و به شما کمک می‌کند تا با وظایف روزمره کمک حسابدار، از جمله استفاده از نرم‌افزارهای حسابداری، آماده‌سازی سندها و گزارش‌های مالی، و کنترل حساب‌ها به‌خوبی آشنا شوید. این دوره به‌گونه‌ای طراحی شده است که هم برای مبتدیان و هم برای کسانی که قصد دارند دانش و مهارت‌های خود را در این حوزه تقویت کنند، مفید و کاربردی باشد.</p>
      <p className="leading-relaxed mb-2">بخشی از دوره به یادگیری تکنیک‌های مربوط به حسابداری عملیاتی، شامل مدیریت بدهکار و بستانکار، تهیه و تنظیم فاکتورها و رسیدها، و انجام پرداخت‌ها و دریافت‌ها اختصاص دارد. شما یاد خواهید گرفت چگونه مستندات مالی را به‌طور دقیق و منظم نگهداری کنید و اطلاعات مالی را به‌درستی ثبت و گزارش‌گیری کنید. همچنین، نحوه استفاده از نرم‌افزارهای حسابداری متداول و ابزارهای مربوطه را نیز خواهید آموخت.</p>
      <p className="leading-relaxed">در پایان دوره، شما قادر خواهید بود تا به‌عنوان یک کمک حسابدار مؤثر و کارآمد عمل کنید و توانایی‌های خود را در مدیریت امور مالی و حسابداری به نمایش بگذارید. با بهره‌گیری از این دوره، قدم مهمی در مسیر حرفه‌ای خود در زمینه حسابداری برداشته و می‌توانید به فرصت‌های شغلی جدید و پیشرفت‌های شغلی در این حوزه دست یابید. منتظر شما در این دوره آموزشی عملی و کاربردی هستیم!</p>
    </div>
  );
};

export default IntroAssistAccounting;