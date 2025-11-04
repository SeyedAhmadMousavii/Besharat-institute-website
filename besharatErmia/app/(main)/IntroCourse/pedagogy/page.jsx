import {
  ClockIcon,
  PresentationChartLineIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
const IntroPedagogy = () => {
  return (
    <div className="text-white p-2">
      <div className="p-4 md:flex md:justify-around md:align-middle text-white container mb-12">
        <div className="flex-col justify-center p-2 w-full">
          <h1 className="font-bold text-3xl mb-12 flex justify-center">
            پداگوژی 
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
            src="https://besharatacademy.com/media/videos/#.mp4"
            controls
            className="w-full rounded-3xl"
          ></video>
        </div>
      </div>
    <p>آموزشگاه کامپیوتر و ارز دیجیتال بشارت، با مجوز رسمی از سازمان فنی و حرفه‌ای کل کشور، دوره تخصصی پداگوژی (روش‌های آموزش) را برای علاقه‌مندان به تدریس در حوزه‌های فناوری اطلاعات و ارزهای دیجیتال برگزار می‌کند. این دوره مناسب افرادی است که می‌خواهند با اصول علمی و عملی تدریس آشنا شوند و مهارت‌های آموزشی خود را ارتقا دهند.

</p>
    <p>در این دوره، شرکت‌کنندگان با مبانی روانشناسی آموزش، طراحی محتوای آموزشی، مدیریت کلاس‌درس و روش‌های نوین تدریس آشنا می‌شوند. همچنین، تکنیک‌های انتقال مؤثر مفاهیم پیچیده فنی به زبان ساده آموزش داده می‌شود تا مدرسان بتوانند در حوزه‌های تخصصی مانند برنامه‌نویسی، شبکه‌های کامپیوتری و بازار ارزهای دیجیتال به‌خوبی عمل کنند.</p>
    <p>یکی از مزیت‌های این دوره، تدریس توسط اساتید مجرب و دارای گواهینامه‌های بین‌المللی است که تجربه عملی در زمینه آموزش فناوری دارند. علاوه بر این، محتوای دوره مطابق با استانداردهای سازمان فنی و حرفه‌ای طراحی شده و پس از پایان دوره، به شرکت‌کنندگان مدرک معتبر اعطا می‌شود که قابل ترجمه و مورد تأیید بسیاری از مراکز آموزشی و صنعتی است.</p>
    <p>
شرکت در این دوره نه‌تنها برای مدرسان، بلکه برای مدیران آموزشگاه‌ها، مربیان و حتی فعالان حوزه ارز دیجیتال که قصد آموزش مفاهیم این بازار را دارند، بسیار مفید است. با یادگیری اصول پداگوژی، می‌توانید کلاس‌های جذاب‌تر و مؤثرتری برگزار کنید و بازدهی یادگیری دانش‌پذیران را به‌طور چشمگیری افزایش دهید.</p>
    <p>
آموزشگاه بشارت با فراهم کردن محیطی پویا و بهره‌گیری از ابزارهای آموزشی مدرن، این امکان را فراهم کرده است که شرکت‌کنندگان هم به‌صورت حضوری و هم آنلاین در دوره‌ها شرکت کنند. برای ثبت‌نام و دریافت اطلاعات بیشتر می‌توانید به وب‌سایت آموزشگاه مراجعه کنید یا با کارشناسان ما تماس بگیرید.</p>
    <p>
فرصت را از دست ندهید و با گذراندن این دوره، گامی مؤثر در مسیر تبدیل شدن به یک مدرس حرفه‌ای و کارآزموده در حوزه فناوری و ارزهای دیجیتال بردارید!</p>
   </div>
  );
};

export default IntroPedagogy;
