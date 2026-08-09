import {
    ClockIcon,
    PresentationChartLineIcon,
    AcademicCapIcon,
  } from "@heroicons/react/24/solid";
  const IntroAccountingP = () => {
    return (
      <div className="p-2 text-white">
        <div className="p-4 md:flex md:justify-around md:align-middle container mb-12">
          <div className="flex-col justify-center p-2 w-full">
            <h1 className="font-bold text-3xl mb-12 flex justify-center">
              مدیریت
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
              src="https://besharatacademy.com/media/videos/management.mp4"
              controls
              className="w-full rounded-3xl"
            ></video>
          </div>
        </div>
        <p>دنیای مدیریت کماکان در حال توسعه و تغییر است.و در این دنیای پر از تغییر ما همواره نیازمند تلاش و به روزسانی علم خود هستیم.دوره های مدیریت همواره فرصتی بسیار خوب برای ارتقا موقعیت شغلی هستند و همچنین شامل شاخه ها و زیر مجموعه های بسیاری اعم از برنامه ریزی و رهبری،تصمیم گیری و حل مسائل می باشند.مدیریت درواقع یک توانایی و یک هنر است و در توسعه کسب و کار و سازمان ها نیز اهمیت بسیاری دارد.</p>
        <p>یک دوره آموزشی مدیریت معمولاً موضوعات مختلفی را پوشش می دهد که برای تجهیز شرکت کنندگان به مهارت ها و دانش ضروری برای رهبری و مدیریت مؤثر طراحی شده است. در اینجا برخی از مؤلفه‌های مشترک وجود دارد</p>
        <p>مهارت‌های رهبری: درک سبک‌های مختلف رهبری، ایجاد انگیزه در تیم‌ها و توسعه هوش هیجانی.  
        مهارت های ارتباطی: ارتباط موثر کلامی و نوشتاری، گوش دادن فعال و حل تعارض.  </p>
        <p>تیم سازی: استراتژی هایی برای ایجاد تیم های منسجم، تقویت همکاری و مدیریت گروه های متنوع. </p>
        <p>تصمیم گیری و حل مسئله: تکنیک هایی برای تصمیم گیری آگاهانه، تفکر انتقادی و برنامه ریزی استراتژیک.  
        </p>
        <p>مدیریت زمان: اولویت‌بندی، تفویض اختیار و تکنیک‌های بهره‌وری برای مدیریت مؤثر حجم کار.  </p>
        <p>مدیریت عملکرد: تعیین اهداف، ارائه بازخورد، انجام بررسی عملکرد و مدیریت عملکرد ضعیف.</p>
        <p>مدیریت تغییر: درک پویایی تغییر، هدایت از طریق انتقال، و غلبه بر مقاومت.  </p>
        <p>هوش مالی: مبانی بودجه ریزی، گزارشگری مالی و درک شاخص های کلیدی عملکرد (KPI).  </p>
        <p>مدیریت پروژه: مبانی برنامه ریزی، اجرا، نظارت و بسته شدن پروژه.  
        شایستگی فرهنگی: مدیریت نیروی کار متنوع و درک شیوه های تجاری جهانی.  </p>
        <p>اخلاق و مسئولیت شرکتی: درک تصمیم گیری اخلاقی و اهمیت مسئولیت اجتماعی شرکت.</p>
        <p>مربیگری و راهنمایی: تکنیک هایی برای توسعه دیگران و پرورش فرهنگ یادگیری مستمر.  دوره ها ممکن است در طول و قالب متفاوت باشند، از جمله کارگاه ها، سمینارها، ماژول های آنلاین یا برنامه های فشرده. شرکت‌کنندگان همچنین ممکن است در مطالعات موردی، تمرین‌های ایفای نقش، و بحث‌های گروهی برای تقویت یادگیری شرکت کنند.</p>
    </div>
    );
  };
  
  export default IntroAccountingP;
  