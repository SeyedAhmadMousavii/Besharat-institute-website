import {
    ClockIcon,
    PresentationChartLineIcon,
    AcademicCapIcon,
  } from "@heroicons/react/24/solid";
  
  const IntroNegotiation = () => {
    return (
      <div className="p-6 bg-white text-[#1A1A2E]">
        <div className="p-4 md:flex md:justify-around md:align-middle container mb-12">
          <div className="flex-col justify-center p-2 w-full">
            <h1 className="font-bold text-3xl mb-12 flex justify-center text-[#000080]">
              مهارت نرم
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
              src="https://besharatacademy.com/media/videos/negotiation.mp4"
              controls
              className="w-full rounded-3xl"
            ></video>
          </div>
        </div>
        <p className="leading-relaxed mb-2">مهارت‌های مدیریت نرم، که اغلب به آن «مهارت‌های نرم» گفته می‌شود، مهارت‌های بین فردی و رفتاری هستند که توانایی فرد را برای کار مؤثر با دیگران افزایش می‌دهند. برخلاف مهارت‌های سخت، که فنی و مختص شغل هستند، مهارت‌های نرم بیشتر به نحوه تعامل، برقراری ارتباط و ارتباط شما با دیگران در محیط کار مربوط می‌شوند. در اینجا خلاصه ای از مهارت های کلیدی مدیریت نرم آمده است: </p>
        <div className="space-y-3">
          <h3 className="font-bold text-lg text-[#000080] mt-4">۱. ارتباطات</h3>
          <p className="leading-relaxed mb-2">ارتباط کلامی و غیرکلامی: انتقال موثر اطلاعات از طریق گفتار و زبان بدن. </p>
          <p className="leading-relaxed mb-2">گوش دادن فعال: توجه به دیگران، درک پیام های آنها و پاسخگویی متفکرانه.</p>
          
          <h3 className="font-bold text-lg text-[#000080] mt-4">۲. هوش هیجانی (EI)</h3>
          <p className="leading-relaxed mb-2">خودآگاهی: شناخت احساسات خود و تأثیر آن بر دیگران. </p>
          <p className="leading-relaxed mb-2">همدلی: درک و به اشتراک گذاشتن احساسات دیگران، که به ایجاد رابطه کمک می‌کند.  </p>
          
          <h3 className="font-bold text-lg text-[#000080] mt-4">۳. کار تیمی و همکاری</h3>
          <p className="leading-relaxed mb-2">توانایی کار خوب در یک تیم، تقویت همکاری و حل مشکلات جمعی.</p>
          <p className="leading-relaxed mb-2">تشویق دیدگاه های مختلف و ارزش گذاری برای مشارکت همه اعضای تیم.</p>
          
          <h3 className="font-bold text-lg text-[#000080] mt-4">۴. حل تعارض</h3>
          <p className="leading-relaxed mb-2">مهارت های میانجی گری در اختلافات و یافتن راه حل های سودمند متقابل.</p>
          <p className="leading-relaxed mb-2">حفظ آرامش تحت فشار و پرداختن سازنده به مسائل. </p>
          
          <h3 className="font-bold text-lg text-[#000080] mt-4">۵. سازگاری و انعطاف پذیری</h3>
          <p className="leading-relaxed mb-2">آماده بودن برای تغییر و تمایل به تنظیم استراتژی ها یا رویکردها در صورت نیاز.</p>
          <p className="leading-relaxed mb-2">تاب آوری در برابر چالش ها یا شکست ها.  </p>
          
          <h3 className="font-bold text-lg text-[#000080] mt-4">۶. حل مسئله</h3>
          <p className="leading-relaxed mb-2">تفکر انتقادی برای تجزیه و تحلیل موقعیت ها، شناسایی مشکلات و ایجاد راه حل های موثر. </p>
          <p className="leading-relaxed mb-2">خلاقیت در برخورد با چالش ها از زوایای مختلف.  </p>
          
          <h3 className="font-bold text-lg text-[#000080] mt-4">۷. رهبری</h3>
          <p className="leading-relaxed mb-2">الهام بخشیدن و برانگیختن دیگران به سوی یک هدف مشترک. </p>
          <p className="leading-relaxed mb-2">ارائه جهت و در عین حال قابل دسترس و حمایت کننده. </p>
          
          <h3 className="font-bold text-lg text-[#000080] mt-4">۸. مدیریت زمان</h3>
          <p className="leading-relaxed mb-2">اولویت بندی کارها به طور موثر و مدیریت زمان برای رعایت ضرب الاجل ها. </p>
          <p className="leading-relaxed mb-2">ایجاد تعادل بین مسئولیت های متعدد بدون به خطر انداختن کیفیت. </p>
          
          <h3 className="font-bold text-lg text-[#000080] mt-4">۹. شبکه سازی و ایجاد رابطه</h3>
          <p className="leading-relaxed mb-2">ایجاد و حفظ روابط حرفه ای که می تواند برای همکاری و پشتیبانی مفید باشد.   </p>
          <p className="leading-relaxed mb-2">تعامل با دیگران به گونه ای که اعتماد و احترام متقابل را تقویت کند.  </p>
          
          <h3 className="font-bold text-lg text-[#000080] mt-4">۱۰. آگاهی فرهنگی</h3>
          <p className="leading-relaxed mb-2">درک و احترام به تنوع در محیط کار. </p>
          <p className="leading-relaxed mb-2">حساس بودن به زمینه ها و دیدگاه های فرهنگی مختلف. </p>
          
          <p className="leading-relaxed mt-4">اهمیت در مدیریت مهارت های مدیریت نرم برای رهبری موثر و پویایی تیم بسیار مهم است. آنها به ایجاد یک محیط کاری مثبت، بهبود مشارکت کارکنان، افزایش ارتباطات و افزایش بهره وری کمک می کنند. مدیران با مهارت های نرم قوی بهتر می توانند موقعیت های پیچیده بین فردی را هدایت کنند، همکاری را تقویت کنند و تیم ها را به سمت دستیابی به اهداف سازمانی هدایت کنند. به طور خلاصه، در حالی که تخصص فنی مهم است، مهارت های مدیریت نرم برای ایجاد نیروی کار منسجم، با انگیزه و مولد ضروری است.</p>
        </div>
      </div>
    );
  };
  
  export default IntroNegotiation;