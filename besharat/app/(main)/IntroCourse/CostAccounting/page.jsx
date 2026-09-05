import {
  ClockIcon,
  PresentationChartLineIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

const IntroCostAccounting = () => {
  return (
    <div className="text-[#1A1A2E] p-6 bg-white">
      <div className="p-4 md:flex md:justify-around md:align-middle container mb-12">
        <div className="flex-col justify-center p-2 w-full">
          <h1 className="font-bold text-3xl mb-12 flex justify-center text-[#000080]">
            حسابداری بهای تمام شده
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
            src="https://besharatacademy.com/media/videos/bahayeTamam.mp4"
            controls
            className="w-full rounded-3xl"
          ></video>
        </div>
      </div>
      <p className="leading-relaxed mb-2">
        سلام به همه علاقه‌مندان به دنیای حسابداری و مدیریت مالی! امروز با
        خوشحالی دوره‌ای تخصصی را به شما معرفی می‌کنیم که به شما این امکان را
        می‌دهد تا با اصول حسابداری بهای تمام شده آشنا شوید و مهارت‌های لازم برای
        تحلیل و مدیریت هزینه‌ها را یاد بگیرید. این دوره شامل 12 جلسه 2 ساعته است
        که به‌طور جامع به بررسی مفاهیم کلیدی حسابداری بهای تمام شده پرداخته و
        اصول و تکنیک‌های مربوط به آن را به شما آموزش می‌دهد.
      </p>
      <p className="leading-relaxed mb-2">در این دوره، شما با مبانی و اصول حسابداری بهای تمام شده آشنا خواهید شد. از شناسایی و طبقه‌بندی هزینه‌ها گرفته تا محاسبه بهای تمام شده محصولات و خدمات. هر جلسه به‌طور تخصصی به یک موضوع خاص پرداخته و به شما کمک می‌کند تا مفاهیم پیچیده مانند هزینه‌های مستقیم و غیرمستقیم، هزینه‌های ثابت و متغیر، و روش‌های محاسبه بهای تمام شده را به‌صورت دقیق و کاربردی درک کنید. این دوره به‌گونه‌ای طراحی شده است که هم برای مبتدیان و هم برای کسانی که به دنبال تقویت دانش خود در این زمینه هستند، مفید و قابل استفاده باشد.</p>
      <p className="leading-relaxed mb-2">بخشی از دوره به بررسی تکنیک‌های مختلف محاسبه بهای تمام شده، مانند روش‌های هزینه‌یابی بر مبنای فعالیت (ABC) و روش‌های سنتی هزینه‌یابی، اختصاص دارد. شما یاد خواهید گرفت چگونه اطلاعات مالی را به‌درستی جمع‌آوری، تحلیل و گزارش‌گیری کنید تا بتوانید تصمیمات مالی دقیق‌تری بگیرید و به بهینه‌سازی هزینه‌ها کمک کنید. همچنین، تکنیک‌های مربوط به بودجه‌بندی و کنترل هزینه‌ها را یاد خواهید گرفت.</p>
      <p className="leading-relaxed">در پایان دوره، شما قادر خواهید بود تا بهای تمام شده محصولات و خدمات را به‌طور مؤثر محاسبه کنید و توانایی‌های خود را در تحلیل و مدیریت هزینه‌ها به نمایش بگذارید. با بهره‌گیری از این دوره، قدم مهمی در مسیر حرفه‌ای خود در زمینه حسابداری بهای تمام شده برداشته و می‌توانید به فرصت‌های شغلی جدید و چالش‌برانگیز در این حوزه دست یابید. منتظر شما در این دوره آموزشی تخصصی و کاربردی هستیم!</p>
    </div>
  );
};

export default IntroCostAccounting;