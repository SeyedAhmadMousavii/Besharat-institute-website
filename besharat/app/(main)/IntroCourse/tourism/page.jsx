import {
    ClockIcon,
    PresentationChartLineIcon,
    AcademicCapIcon,
  } from "@heroicons/react/24/solid";
  
  const IntroTourism = () => {
    return (
      <div className="p-6 bg-white text-[#1A1A2E]">
        <div className="p-4 md:flex md:justify-around md:align-middle container mb-12">
          <div className="flex-col justify-center p-2 w-full">
            <h1 className="font-bold text-3xl mb-12 flex justify-center text-[#000080]">
              گردشگری
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
              src="https://besharatacademy.com/media/videos/tourism.mp4"
              controls
              className="w-full rounded-3xl"
            ></video>
          </div>
        </div>
       <p className="leading-relaxed mb-2">گردشگری به عنوان سومین صنعت پول‌ساز دنیا، نقش حیاتی در اقتصاد جهانی ایفا می‌کند. با توجه به رشد سریع این صنعت و پیش‌بینی‌ها مبنی بر اینکه تا چند سال آینده از هر ۱۰ شاغل، یک نفر در حوزه گردشگری مشغول به کار خواهد بود، آموزش صحیح و اصولی در این زمینه از اهمیت ویژه‌ای برخوردار است.</p>
       
       <h3 className="font-bold text-lg text-[#000080] mt-4">اهداف دوره آموزشی</h3>
       <p className="leading-relaxed mb-2">دوره آموزشی گردشگری آموزشگاه بشارت طراحی شده است تا به علاقه‌مندان این حوزه، تمام مبانی و اصول لازم را آموزش دهد. این دوره شامل مراحل زیر است:</p>
       
       <h4 className="font-bold text-[#D4AF37] mt-3">مبانی گردشگری:</h4>
       <p className="leading-relaxed mb-2">آشنایی با تاریخچه و مفاهیم پایه‌ای گردشگری.</p>
       <p className="leading-relaxed mb-2">بررسی انواع گردشگری (طبیعت‌گردی، فرهنگی، پزشکی و غیره).</p>
       
       <h4 className="font-bold text-[#D4AF37] mt-3">مدیریت مقصد:</h4>
       <p className="leading-relaxed mb-2">اصول مدیریت مقاصد گردشگری.</p>
       <p className="leading-relaxed mb-2">تحلیل بازار و شناسایی نیازهای گردشگران.</p>
       
       <h4 className="font-bold text-[#D4AF37] mt-3">برنامه‌ریزی سفر:</h4>
       <p className="leading-relaxed mb-2">طراحی و برنامه‌ریزی سفرهای گروهی و انفرادی.</p>
       <p className="leading-relaxed mb-2">نکات کلیدی در انتخاب مقاصد و خدمات.</p>
       
       <h4 className="font-bold text-[#D4AF37] mt-3">بازاریابی گردشگری:</h4>
       <p className="leading-relaxed mb-2">استراتژی‌های بازاریابی و تبلیغات در صنعت گردشگری.</p>
       <p className="leading-relaxed mb-2">استفاده از رسانه‌های اجتماعی و دیجیتال مارکتینگ.</p>
       
       <h4 className="font-bold text-[#D4AF37] mt-3">خدمات مشتری:</h4>
       <p className="leading-relaxed mb-2">مهارت‌های ارتباطی و خدمات مشتری در صنعت گردشگری.</p>
       <p className="leading-relaxed mb-2">مدیریت تجربیات مشتری و ایجاد وفاداری.</p>
       
       <h4 className="font-bold text-[#D4AF37] mt-3">قوانین و مقررات:</h4>
       <p className="leading-relaxed mb-2">آشنایی با قوانین بین‌المللی و محلی مرتبط با گردشگری.</p>
       <p className="leading-relaxed mb-2">حقوق و مسئولیت‌های گردشگران و ارائه‌دهندگان خدمات.</p>
       
       <h4 className="font-bold text-[#D4AF37] mt-3">توسعه پایدار:</h4>
       <p className="leading-relaxed mb-2">مفهوم گردشگری پایدار و تأثیرات آن بر محیط زیست و جوامع محلی.</p>
       <p className="leading-relaxed mb-2">روش‌های اجرای پروژه‌های پایدار در گردشگری.</p>
       
       <h3 className="font-bold text-lg text-[#000080] mt-4">مزایای دوره</h3>
       <p className="leading-relaxed mb-2">آموزش جامع: از ابتدایی‌ترین مفاهیم تا سطوح پیشرفته، شما را به یک حرفه‌ای در صنعت گردشگری تبدیل می‌کند.</p>
       <p className="leading-relaxed mb-2">فرصت‌های شغلی: با توجه به رشد این صنعت، فارغ‌التحصیلان دوره می‌توانند به راحتی وارد بازار کار شوند.</p>
       <p className="leading-relaxed mb-2">مدرک معتبر: دریافت مدرک معتبر که قابلیت ارائه در سطح بین‌المللی را دارد.</p>
       
       <h3 className="font-bold text-lg text-[#000080] mt-4">نتیجه‌گیری</h3>
       <p className="leading-relaxed">با توجه به اهمیت روزافزون گردشگری در اقتصاد جهانی و نیاز به تخصص‌های مرتبط، دوره آموزشی موسسه بین‌المللی ترید ترین فرصتی بی‌نظیر برای علاقه‌مندان به این حوزه فراهم می‌آورد. با شرکت در این دوره، شما آماده خواهید بود تا به عنوان یک متخصص در صنعت گردشگری فعالیت کنید و سهم خود را در توسعه این صنعت پول‌ساز ایفا نمایید.</p>
       </div>
    );
  };
  
  export default IntroTourism;