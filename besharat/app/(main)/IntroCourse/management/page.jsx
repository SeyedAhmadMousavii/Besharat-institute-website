import {
    ClockIcon,
    PresentationChartLineIcon,
    AcademicCapIcon,
  } from "@heroicons/react/24/solid";
  
  const IntroManagement = () => {
    return (
      <div className="p-6 bg-white text-[#1A1A2E]">
        <div className="p-4 md:flex md:justify-around md:align-middle container mb-12">
          <div className="flex-col justify-center p-2 w-full">
            <h1 className="font-bold text-3xl mb-12 flex justify-center text-[#000080]">
              مدیریت
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
              src="https://besharatacademy.com/media/videos/management.mp4"
              controls
              className="w-full rounded-3xl"
            ></video>
          </div>
        </div>
        <p className="leading-relaxed mb-2">دنیای مدیریت کماکان در حال توسعه و تغییر است.و در این دنیای پر از تغییر ما همواره نیازمند تلاش و به روزسانی علم خود هستیم.دوره های مدیریت همواره فرصتی بسیار خوب برای ارتقا موقعیت شغلی هستند و همچنین شامل شاخه ها و زیر مجموعه های بسیاری اعم از برنامه ریزی و رهبری،تصمیم گیری و حل مسائل می باشند.مدیریت درواقع یک توانایی و یک هنر است و در توسعه کسب و کار و سازمان ها نیز اهمیت بسیاری دارد.</p>
        <p className="leading-relaxed mb-2">یک دوره آموزشی مدیریت معمولاً موضوعات مختلفی را پوشش می دهد که برای تجهیز شرکت کنندگان به مهارت ها و دانش ضروری برای رهبری و مدیریت مؤثر طراحی شده است. در اینجا برخی از مؤلفه‌های مشترک وجود دارد</p>
        <p className="leading-relaxed mb-2">مهارت‌های رهبری: درک سبک‌های مختلف رهبری، ایجاد انگیزه در تیم‌ها و توسعه هوش هیجانی.  
        مهارت های ارتباطی: ارتباط موثر کلامی و نوشتاری، گوش دادن فعال و حل تعارض.  </p>
        <p className="leading-relaxed mb-2">تیم سازی: استراتژی هایی برای ایجاد تیم های منسجم، تقویت همکاری و مدیریت گروه های متنوع. </p>
        <p className="leading-relaxed mb-2">تصمیم گیری و حل مسئله: تکنیک هایی برای تصمیم گیری آگاهانه، تفکر انتقادی و برنامه ریزی استراتژیک.  
        </p>
        <p className="leading-relaxed mb-2">مدیریت زمان: اولویت‌بندی، تفویض اختیار و تکنیک‌های بهره‌وری برای مدیریت مؤثر حجم کار.  </p>
        <p className="leading-relaxed mb-2">مدیریت عملکرد: تعیین اهداف، ارائه بازخورد، انجام بررسی عملکرد و مدیریت عملکرد ضعیف.</p>
        <p className="leading-relaxed mb-2">مدیریت تغییر: درک پویایی تغییر، هدایت از طریق انتقال، و غلبه بر مقاومت.  </p>
        <p className="leading-relaxed mb-2">هوش مالی: مبانی بودجه ریزی، گزارشگری مالی و درک شاخص های کلیدی عملکرد (KPI).  </p>
        <p className="leading-relaxed mb-2">مدیریت پروژه: مبانی برنامه ریزی، اجرا، نظارت و بسته شدن پروژه.  
        شایستگی فرهنگی: مدیریت نیروی کار متنوع و درک شیوه های تجاری جهانی.  </p>
        <p className="leading-relaxed mb-2">اخلاق و مسئولیت شرکتی: درک تصمیم گیری اخلاقی و اهمیت مسئولیت اجتماعی شرکت.</p>
        <p className="leading-relaxed">مربیگری و راهنمایی: تکنیک هایی برای توسعه دیگران و پرورش فرهنگ یادگیری مستمر.  دوره ها ممکن است در طول و قالب متفاوت باشند، از جمله کارگاه ها، سمینارها، ماژول های آنلاین یا برنامه های فشرده. شرکت‌کنندگان همچنین ممکن است در مطالعات موردی، تمرین‌های ایفای نقش، و بحث‌های گروهی برای تقویت یادگیری شرکت کنند.</p>
    </div>
    );
  };
  
  export default IntroManagement;