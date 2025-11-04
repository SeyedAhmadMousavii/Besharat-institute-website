import {
  ClockIcon,
  PresentationChartLineIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
const IntroSalary = () => {
  return (
    <div className="text-white p-2">
      <div className="p-4 md:flex md:justify-around md:align-middle text-white container mb-12">
        <div className="flex-col justify-center p-2 w-full">
          <h1 className="font-bold text-3xl mb-12 flex justify-center">
            حسابداری حقوق و دستمزد
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
            src="https://besharatacademy.com/media/videos/salary.mp4"
            controls
            className="w-full rounded-3xl"
          ></video>
        </div>
      </div>
      <p>
        سلام به همه علاقه‌مندان به دنیای حسابداری و مدیریت مالی! امروز با
        خوشحالی دوره‌ای تخصصی و عملی را به شما معرفی می‌کنیم که به شما این امکان
        را می‌دهد تا با اصول حسابداری حقوق و دستمزد آشنا شوید و مهارت‌های لازم
        برای مدیریت و محاسبه حقوق و مزایای کارکنان را یاد بگیرید. این دوره شامل
        12 جلسه 2 ساعته است که به‌طور جامع به بررسی مفاهیم کلیدی و عملی در زمینه
        حسابداری حقوق و دستمزد پرداخته و اصول و تکنیک‌های مربوطه را به شما آموزش
        می‌دهد.
      </p>
      <p>در این دوره، شما با مبانی و اصول حسابداری حقوق و دستمزد آشنا خواهید شد. از محاسبه حقوق و مزایا گرفته تا محاسبه مالیات و تأمین اجتماعی و تهیه گزارش‌های مربوط به آن‌ها. هر جلسه به‌طور تخصصی به یک موضوع خاص پرداخته و به شما کمک می‌کند تا با فرآیندها و قوانین مربوط به حقوق و دستمزد، از جمله محاسبه ساعات کاری، اضافه‌کاری، پاداش‌ها و، به‌خوبی آشنا شوید. این دوره به‌گونه‌ای طراحی شده است که هم برای مبتدیان و هم برای کسانی که قصد دارند دانش و مهارت‌های خود را در این حوزه تقویت کنند، مفید و کاربردی باشد.</p>
      <p>بخشی از دوره به یادگیری تکنیک‌های مربوط به پردازش و مدیریت حقوق و دستمزد اختصاص دارد. شما یاد خواهید گرفت چگونه اطلاعات مربوط به ساعات کاری، مرخصی‌ها، و بیمه‌های اجتماعی را به‌درستی جمع‌آوری و ثبت کنید و گزارش‌های مالی مربوط به حقوق و دستمزد را تهیه کنید. همچنین، نحوه استفاده از نرم‌افزارهای حسابداری مخصوص حقوق و دستمزد و ابزارهای مرتبط با آن‌ها را نیز خواهید آموخت تا بتوانید کارهای خود را به‌صورت مؤثرتر و دقیق‌تر انجام دهید.</p>
      <p>در پایان دوره، شما قادر خواهید بود تا به‌عنوان یک کارشناس حسابداری حقوق و دستمزد مؤثر و کارآمد عمل کنید و توانایی‌های خود را در محاسبه و مدیریت حقوق و مزایای کارکنان به نمایش بگذارید. با بهره‌گیری از این دوره، قدم مهمی در مسیر حرفه‌ای خود در زمینه حسابداری برداشته و می‌توانید به فرصت‌های شغلی جدید و پیشرفت‌های شغلی در این حوزه دست یابید. منتظر شما در این دوره آموزشی عملی و کاربردی هستیم!</p>
    </div>
  );
};

export default IntroSalary;
