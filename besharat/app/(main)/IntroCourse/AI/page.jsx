import {
  ClockIcon,
  PresentationChartLineIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

const IntroAI = () => {
  return (
    <div className="text-[#1A1A2E] p-6 bg-white">
    <div className="p-4 md:flex md:justify-around md:align-middle container mb-12">
      <div className="flex-col justify-center p-2 w-full">
        <h1 className="font-bold text-3xl mb-12 flex justify-center text-[#000080]">هوش مصنوعی (پایتون)</h1>
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
        <video src="https://besharatacademy.com/media/videos/AI.mp4" controls className="w-full rounded-3xl"></video>
      </div>
    </div>
          <p className="leading-relaxed mb-2">
          سلام به همه علاقه‌مندان به دنیای تکنولوژی! امروز با خوشحالی دوره ویژه‌ای
          را به شما معرفی می‌کنیم که به شما این امکان را می‌دهد تا در عمق دنیای
          هوش مصنوعی غوطه‌ور شوید و با ابزار قدرتمند پایتون آشنا شوید. این دوره
          شامل 15 جلسه 2 ساعته است که به‌طور جامع و کاربردی به بررسی مفاهیم و
          تکنیک‌های هوش مصنوعی پرداخته و در کنار آن به تدریس زبان برنامه‌نویسی
          پایتون نیز می‌پردازد.
        </p>
        <p className="leading-relaxed mb-2">در این دوره، شما با مبانی و اصول هوش مصنوعی آشنا خواهید شد، از یادگیری ماشین و شبکه‌های عصبی گرفته تا الگوریتم‌های پیشرفته و کاربردهای عملی این فناوری‌ها. هر جلسه به‌طور تخصصی به یک موضوع خاص پرداخته و به شما ابزارها و مهارت‌های لازم برای تحلیل داده‌ها و ساخت مدل‌های هوش مصنوعی را آموزش می‌دهد. تدریس این دوره به‌گونه‌ای طراحی شده است که هم برای مبتدیان و هم برای کسانی که تجربه اولیه در این زمینه دارند، مفید و کاربردی باشد.</p>
        <p className="leading-relaxed mb-2">پایتون به‌عنوان یکی از محبوب‌ترین زبان‌های برنامه‌نویسی در دنیای هوش مصنوعی، بخش عمده‌ای از این دوره را تشکیل می‌دهد. شما با کتابخانه‌ها و ابزارهای کلیدی پایتون مانند NumPy، Pandas،  و …آشنا خواهید شد و توانایی نوشتن و پیاده‌سازی الگوریتم‌های هوش مصنوعی را خواهید داشت. این زبان با ویژگی‌های ساده و قدرتمندش، به شما کمک می‌کند تا پروژه‌های پیچیده را به‌راحتی مدیریت و اجرا کنید.</p>
        <p className="leading-relaxed">در پایان دوره، شما قادر خواهید بود تا مدل‌های هوش مصنوعی را از ابتدا تا انتها طراحی و پیاده‌سازی کنید و توانایی‌های خود را در پروژه‌های عملی به نمایش بگذارید. با بهره‌گیری از این دوره، قدم مهمی در مسیر حرفه‌ای خود در حوزه هوش مصنوعی و یادگیری ماشین برداشته و می‌توانید به فرصت‌های شغلی جدید و هیجان‌انگیز در این زمینه دست یابید. منتظر شما در این دوره پرمحتوا و کاربردی هستیم!</p>
        </div>
  );
};

export default IntroAI;