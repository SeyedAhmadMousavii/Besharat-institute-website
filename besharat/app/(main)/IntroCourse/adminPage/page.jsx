import {
    ClockIcon,
    PresentationChartLineIcon,
    AcademicCapIcon,
  } from "@heroicons/react/24/solid";
  
  const adminPage = () => {
    return (
      <div className="p-6 bg-white text-[#1A1A2E]">
        <div className="p-4 md:flex md:justify-around md:align-middle container mb-12">
          <div className="flex-col justify-center p-2 w-full">
            <h1 className="font-bold text-3xl mb-12 flex justify-center text-[#000080]">
              تولید محتوا
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
              src="https://besharatacademy.com/media/videos/adminP.mp4"
              controls
              className="w-full rounded-3xl"
            ></video>
          </div>
        </div>
       <p className="leading-relaxed mb-2">اینستاگرام یکی از محبوب‌ترین شبکه‌های اجتماعی در جهان است که به کاربران این امکان را می‌دهد تا تصاویر و ویدئوهای خود را به اشتراک بگذارند. با توجه به رشد روزافزون این پلتفرم، نیاز به ادمین‌های حرفه‌ای برای مدیریت حساب‌ها و افزایش تعامل با مخاطبان بیش از پیش احساس می‌شود. در این مقاله به بررسی وظایف، مهارت‌ها و نکات ضروری برای ادمینی اینستاگرام می‌پردازیم.</p>
       <p className="font-bold text-[#000080] text-lg mt-4">وظایف ادمین اینستاگرام</p>
       <p className="leading-relaxed mb-2">مدیریت محتوا: ادمین باید محتوای مناسب و جذاب تولید کند. این محتوا می‌تواند شامل عکس‌ها، ویدئوها، استوری‌ها و ریلز باشد.</p>
       <p className="leading-relaxed mb-2">برنامه‌ریزی و زمان‌بندی پست‌ها: ادمین باید زمان‌های مناسب برای انتشار پست‌ها را شناسایی کرده و برنامه‌ریزی دقیقی برای آن داشته باشد.</p>
       <p className="leading-relaxed mb-2">تعامل با مخاطبان: پاسخگویی به نظرات و پیام‌های دایرکت، ایجاد ارتباط با فالوورها و تشویق آنها به مشارکت در بحث‌ها از جمله وظایف ادمین است.</p>
       <p className="leading-relaxed mb-2"> تحلیل داده‌ها: بررسی آمار و تحلیل عملکرد پست‌ها، شناسایی نقاط قوت و ضعف و بهبود استراتژی‌های محتوا بر اساس داده‌های تحلیلی.</p>
       <p className="leading-relaxed mb-2">مدیریت تبلیغات: در صورت نیاز، ادمین باید بتواند کمپین‌های تبلیغاتی مؤثری را طراحی و اجرا کند.</p>
       <p className="font-bold text-[#000080] text-lg mt-4">مهارت‌های لازم برای ادمین اینستاگرام</p>
       <p className="leading-relaxed mb-2">خلاقیت: توانایی تولید محتوای خلاقانه و جذاب که توجه مخاطبان را جلب کند.</p>
       <p className="leading-relaxed mb-2">مهارت‌های نوشتاری: توانایی نوشتن متن‌های جذاب و متناسب با برند.</p>
       <p className="leading-relaxed mb-2"> آشنایی با ابزارهای طراحی: استفاده از نرم‌افزارهایی مانند فتوشاپ یا کانوا برای طراحی گرافیک‌های جذاب.</p>
       <p className="leading-relaxed mb-2">تحلیل داده‌ها: توانایی کار با ابزارهای تحلیلی اینستاگرام و دیگر ابزارهای تحلیل داده.</p>
       <p className="leading-relaxed mb-2">مدیریت زمان: توانایی برنامه‌ریزی و مدیریت زمان برای انجام وظایف مختلف.</p>
       <p className="font-bold text-[#000080] text-lg mt-4"> نکات کلیدی برای موفقیت در ادمینی اینستاگرام</p>
       <p className="leading-relaxed mb-2"> شناخت مخاطب: شناخت دقیق از مخاطبان هدف و نیازهای آن‌ها می‌تواند به تولید محتوای بهتر کمک کند.</p>
       <p className="leading-relaxed mb-2">استفاده از هشتگ‌ها: هشتگ‌های مرتبط می‌توانند به افزایش دسترسی پست‌ها کمک کنند.</p>
       <p className="leading-relaxed mb-2"> تنوع در محتوا: استفاده از انواع مختلف محتوا (عکس، ویدئو، استوری) برای جذب بیشتر مخاطب.</p>
       <p className="leading-relaxed mb-2">برقراری ارتباط انسانی: ایجاد ارتباط نزدیک‌تر با فالوورها از طریق پاسخگویی به نظرات و پیام‌ها.</p>
       <p className="leading-relaxed mb-2"> به‌روز بودن: پیگیری روندها و تغییرات الگوریتم اینستاگرام برای بهینه‌سازی استراتژی‌ها.</p>
       <p className="font-bold text-[#000080] text-lg mt-4">نتیجه‌گیری</p>
       <p className="leading-relaxed mb-2">ادمینی اینستاگرام یک شغل چالش‌برانگیز اما بسیار جذاب است که نیاز به خلاقیت، مهارت‌های ارتباطی و تحلیلی دارد. با رعایت نکات فوق و یادگیری مداوم، می‌توان در این زمینه موفق شد و به رشد برند یا کسب‌وکار کمک کرد.</p>
       <p className="leading-relaxed">شما با شرکت در دوره ادمینی اینستاگرام آموزشگاه بشارت سرفصل های زیر را آموزش خواهید دید.</p>
    
       </div>
    );
  };
  
  export default adminPage;