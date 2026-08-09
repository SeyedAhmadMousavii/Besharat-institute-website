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
              انبارداری
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
      <p>دوره انبارداری فنی و حرفه‌ای با هدف آموزش مهارت‌های ضروری برای مدیریت مؤثر انبارها طراحی شده است. این دوره برای افرادی که می‌خواهند با اصول و فنون انبارداری آشنا شوند، بسیار مفید است و به آن‌ها کمک می‌کند تا به شکل کارآمدتری عملیات انبار را مدیریت کنند.</p>
      <p>شرکت‌کنندگان در این دوره ابتدا با مفاهیم پایه انبارداری، از جمله تعریف انبار، نقش آن در زنجیره تأمین و انواع مختلف انبارها آشنا می‌شوند. سپس روش‌های مدیریت موجودی مانند FIFO، LIFO و تعیین حداقل و حداکثر موجودی آموزش داده می‌شود. همچنین، نحوه ثبت ورود و خروج کالا از طریق رسیدها و حواله‌ها به تفصیل توضیح داده می‌شود تا افراد با فرآیندهای عملیاتی انبار آشنا شوند.</p>
      <p>در این دوره، مباحثی همچون استفاده از نرم‌افزارهای مدیریت انبار و تکنولوژی‌هایی نظیر بارکد و RFID نیز آموزش داده می‌شود. شرکت‌کنندگان یاد می‌گیرند که چگونه این ابزارها می‌توانند کارایی انبار را افزایش دهند. نکات ایمنی در جابجایی کالا و رعایت استانداردهای بهداشتی و ایمنی از دیگر موضوعات مهم دوره است که تضمین‌کننده سلامت کارکنان و حفظ کیفیت موجودی‌ها خواهد بود.</p>
      <p>یکی دیگر از بخش‌های کلیدی این دوره، گزارش‌گیری و تحلیل داده‌های انبار است. شرکت‌کنندگان با روش‌های تهیه گزارش‌های موجودی و تحلیل داده‌ها برای بهبود فرآیندهای انبارداری آشنا می‌شوند. همچنین، مدیریت هزینه‌های نگهداری موجودی و تأثیر آن بر هزینه‌های سازمان مورد بررسی قرار می‌گیرد. در نهایت، تکنیک‌هایی برای بهینه‌سازی فضای انبار و کاهش ضایعات نیز آموزش داده می‌شود.</p>
      <p>این دوره با ترکیب آموزش‌های نظری و عملی، برگزاری کارگاه‌های گروهی و حتی بازدید از انبارهای واقعی، شرکت‌کنندگان را برای مواجهه با شرایط کاری آماده می‌کند. پس از اتمام دوره، مدرک معتبر از فنی و حرفه‌ای به شرکت‌کنندگان اعطا می‌شود که می‌تواند در یافتن شغل و ورود به بازار کار بسیار مؤثر باشد. برای ثبت‌نام، می‌توانید به آموزشگاه بشارت مراجعه کنید.</p>
      </div>
    );
  };
  
  export default IntroCorel;
  