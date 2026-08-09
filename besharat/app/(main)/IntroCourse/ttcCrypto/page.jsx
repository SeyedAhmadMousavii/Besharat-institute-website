import {
  ClockIcon,
  PresentationChartLineIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
const IntroCorel = () => {
  return (
    <div className="text-white p-2">
      <div className="p-4 md:flex md:justify-around md:align-middle text-white container mb-12">
        <div className="flex-col justify-center p-2 w-full">
          <h1 className="font-bold text-3xl mb-12 flex justify-center">
            تربیت مدرس ارز دیجیتال
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
            src="https://besharatacademy.com/media/videos/others.mp4"
            controls
            className="w-full rounded-3xl"
          ></video>
        </div>
      </div>
      <p>
        دوره تربیت مدرس ارزهای دیجیتال در آموزشگاه بشارت با هدف آماده‌سازی
        مدرسان حرفه‌ای در زمینه آموزش ارزهای دیجیتال و فناوری بلاک‌چین طراحی شده
        است. این دوره مهارت‌های لازم برای تدریس مفاهیم پیچیده این حوزه به صورت
        کاربردی و جذاب را به شرکت‌کنندگان ارائه می‌دهد و آن‌ها را برای انتقال
        دانش به دیگران آماده می‌کند.
      </p>
      <p>
        شرکت‌کنندگان در ابتدا با تاریخچه، مفهوم ارزهای دیجیتال و تفاوت آن‌ها با
        ارزهای سنتی آشنا می‌شوند. سپس به بررسی فناوری بلاک‌چین و ساختار آن
        پرداخته می‌شود، از جمله انواع بلاک‌چین مانند عمومی، خصوصی و کنسرسیومی.
        مباحثی همچون کیف پول‌های دیجیتال، نحوه استفاده از آن‌ها و روش‌های خرید و
        فروش ارزهای دیجیتال نیز به طور دقیق آموزش داده می‌شود.
      </p>
      <p>
        یکی از بخش‌های مهم این دوره، تحلیل بازار و استراتژی‌های سرمایه‌گذاری است
        که در آن روش‌های تحلیل تکنیکال و بنیادی، مدیریت ریسک و ایجاد
        استراتژی‌های سرمایه‌گذاری آموزش داده می‌شود. همچنین، شرکت‌کنندگان با
        قوانین و مقررات مربوط به ارزهای دیجیتال در ایران و جهان آشنا می‌شوند تا
        بتوانند به درستی مسائل حقوقی و مالیاتی این حوزه را درک کرده و انتقال
        دهند.
      </p>
      <p>
        در کنار مباحث فنی، روش‌های تدریس مؤثر نیز مورد توجه قرار می‌گیرد. طراحی
        دوره‌های آموزشی، برنامه‌ریزی درسی و تکنیک‌های ارائه جذاب بخشی از محتوای
        این دوره است. برای افزایش مهارت عملی، کارگاه‌های عملی و شبیه‌سازی بازار
        واقعی برگزار می‌شود تا شرکت‌کنندگان بتوانند دانش خود را در شرایط عملی
        پیاده‌سازی کنند.
      </p>
      <p>
        پس از پایان دوره، شرکت‌کنندگان توانایی تدریس در حوزه ارزهای دیجیتال را
        خواهند داشت و مدرک معتبر از آموزشگاه بشارت دریافت می‌کنند که می‌تواند در
        توسعه حرفه‌ای آن‌ها بسیار مؤثر باشد. این دوره فرصتی مناسب برای برقراری
        ارتباط با دیگر متخصصان و علاقه‌مندان به این حوزه نیز فراهم می‌کند. برای
        ثبت‌نام و کسب اطلاعات بیشتر، می‌توانید به وب‌سایت آموزشگاه بشارت مراجعه
        کنید یا با شماره‌های ارائه‌شده تماس بگیرید.
      </p>
    </div>
  );
};

export default IntroCorel;
