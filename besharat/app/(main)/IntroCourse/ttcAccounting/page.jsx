import {
    ClockIcon,
    PresentationChartLineIcon,
    AcademicCapIcon,
  } from "@heroicons/react/24/solid";
  
  const IntroTTCAccounting = () => {
    return (
      <div className="text-[#1A1A2E] p-6 bg-white">
        <div className="p-4 md:flex md:justify-around md:align-middle container mb-12">
          <div className="flex-col justify-center p-2 w-full">
            <h1 className="font-bold text-3xl mb-12 flex justify-center text-[#000080]">
              تربیت مدرس حسابداری
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
              src="https://besharatacademy.com/media/videos/others.mp4"
              controls
              className="w-full rounded-3xl"
            ></video>
          </div>
        </div>
        <p className="leading-relaxed mb-2">دوره تربیت مدرس حسابداری فنی و حرفه‌ای در آموزشگاه بشارت با هدف آماده‌سازی علاقه‌مندان به تدریس در حوزه حسابداری طراحی شده است. این دوره به شرکت‌کنندگان کمک می‌کند تا مهارت‌های تدریس اصول حسابداری، کار با نرم‌افزارهای مرتبط و آموزش مفاهیم مالی را به‌دست آورند و به یک مدرس حرفه‌ای در این زمینه تبدیل شوند.</p>
        <p className="leading-relaxed mb-2">شرکت‌کنندگان در ابتدا با مفاهیم پایه حسابداری آشنا می‌شوند که شامل تعریف حسابداری، اصول اولیه، چرخه حسابداری و صورت‌های مالی است. همچنین، روش‌های حسابداری مختلف نظیر حسابداری مالی، مدیریتی، هزینه و مالیاتی مورد بررسی قرار می‌گیرد تا شرکت‌کنندگان بتوانند این مفاهیم را در تدریس خود به‌کار گیرند. یکی از بخش‌های مهم این دوره، آموزش نرم‌افزارهای پرکاربرد حسابداری مانند هلو و سپیدار است که به شرکت‌کنندگان نحوه استفاده و تدریس این ابزارها را آموزش می‌دهد.</p>
        <p className="leading-relaxed mb-2">در کنار مهارت‌های فنی، تکنیک‌های تدریس مؤثر نیز در این دوره ارائه می‌شود. شرکت‌کنندگان یاد می‌گیرند چگونه دوره‌های آموزشی طراحی کنند، برنامه‌ریزی درسی انجام دهند و مفاهیم را به شکلی جذاب و کاربردی ارائه دهند. تحلیل صورت‌های مالی و استفاده از نسبت‌های مالی برای ارزیابی عملکرد شرکت‌ها نیز بخش دیگری از محتوای آموزشی این دوره است.</p>
        <p className="leading-relaxed mb-2">از دیگر سرفصل‌های این دوره می‌توان به آشنایی با قوانین و مقررات مالیاتی و حسابداری اشاره کرد که به شرکت‌کنندگان کمک می‌کند تا علاوه بر آموزش مباحث فنی، از مسائل حقوقی مرتبط نیز آگاه باشند. برای تقویت مهارت‌های عملی، کارگاه‌هایی برگزار می‌شود که در آن‌ها سناریوهای واقعی شبیه‌سازی شده و شرکت‌کنندگان مفاهیم را به‌صورت کاربردی تمرین می‌کنند.</p>
        <p className="leading-relaxed">پس از اتمام دوره، شرکت‌کنندگان توانایی لازم برای تدریس مفاهیم حسابداری را کسب می‌کنند و مدرک معتبر از آموزشگاه بشارت دریافت می‌کنند که می‌تواند در جذب دانشجویان و ایجاد فرصت‌های شغلی مؤثر باشد. این دوره همچنین فرصتی برای شبکه‌سازی و ارتباط با متخصصان حوزه حسابداری فراهم می‌کند. برای ثبت‌نام و کسب اطلاعات بیشتر، می‌توانید به وب‌سایت آموزشگاه بشارت مراجعه کرده یا با شماره‌های مربوطه تماس بگیرید.</p>
      </div>
    );
  };
  
  export default IntroTTCAccounting;