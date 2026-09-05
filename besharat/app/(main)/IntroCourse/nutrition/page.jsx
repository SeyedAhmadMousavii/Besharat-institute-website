import {
    ClockIcon,
    PresentationChartLineIcon,
    AcademicCapIcon,
  } from "@heroicons/react/24/solid";
  
  const IntroNutrition = () => {
    return (
      <div className="p-6 bg-white text-[#1A1A2E]">
        <div className="p-4 md:flex md:justify-around md:align-middle container mb-12">
          <div className="flex-col justify-center p-2 w-full">
            <h1 className="font-bold text-3xl mb-12 flex justify-center text-[#000080]">
              تغذیه
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
              src="https://besharatacademy.com/media/videos/nutrition.mp4"
              controls
              className="w-full rounded-3xl"
            ></video>
          </div>
        </div>
       <p className="leading-relaxed mb-2">دوره های آموزشی تغذیه برای آموزش افراد در مورد اصول تغذیه و چگونگی تأثیر آن بر سلامت، تندرستی و عملکرد در آموزشگاه بشارت طراحی شده است. در اینجا یک مرور کلی از آنچه این دوره ها معمولاً پوشش می دهیم برای شما گرداوری  آورده شده است: </p>
       
       <h3 className="font-bold text-lg text-[#000080] mt-4">اصول تغذیه</h3>
       <p className="leading-relaxed mb-2">درشت مغذی ها: درک کربوهیدرات ها، پروتئین ها و چربی ها – عملکردها، منابع و توصیه های غذایی.  </p>
       <p className="leading-relaxed mb-2">ریز مغذی ها: اهمیت ویتامین ها و مواد معدنی، نقش آنها در بدن و منابع غذایی.  </p>
       <p className="leading-relaxed mb-2">آب و هیدراتاسیون: نقش آب در بدن و دستورالعمل هایی برای هیدراتاسیون کافی.</p>
       
       <h3 className="font-bold text-lg text-[#000080] mt-4">فیزیولوژی و بیوشیمی انسان</h3>
       <p className="leading-relaxed mb-2">درک اولیه آناتومی انسان و چگونگی تأثیر تغذیه بر عملکردهای بدن.     </p>
       <p className="leading-relaxed mb-2">متابولیسم: چگونه بدن مواد مغذی مختلف را پردازش می کند. </p>
       
       <h3 className="font-bold text-lg text-[#000080] mt-4">دستورالعمل ها و توصیه های غذایی</h3>
       <p className="leading-relaxed mb-2">مروری بر دستورالعمل های غذایی (به عنوان مثال، USDA MyPlate، توصیه های WHO). </p>
       <p className="leading-relaxed mb-2">درک برچسب مواد غذایی و اطلاعات تغذیه ای.</p>
       
       <h3 className="font-bold text-lg text-[#000080] mt-4">رژیم های غذایی ویژه و برنامه های تغذیه</h3>
       <p className="leading-relaxed mb-2">بررسی رژیم های غذایی مختلف (به عنوان مثال، کتوژنیک، وگان، پالئو) و فواید/خطرات آنها.</p>
       <p className="leading-relaxed mb-2">برنامه های تغذیه سفارشی برای جمعیت های خاص (ورزشکاران، کودکان، سالمندان).</p>
       
       <h3 className="font-bold text-lg text-[#000080] mt-4">تغذیه برای سلامتی و پیشگیری از بیماری ها</h3>
       <p className="leading-relaxed mb-2">نقش تغذیه در پیشگیری از بیماری های مزمن (دیابت، بیماری قلبی، چاقی).  </p>
       <p className="leading-relaxed mb-2">درک آلرژی و عدم تحمل غذایی.</p>
       
       <h3 className="font-bold text-lg text-[#000080] mt-4">تغذیه ورزشی</h3>
       <p className="leading-relaxed mb-2">استراتژی های تغذیه ای برای ورزشکاران، از جمله تغذیه قبل و بعد از ورزش.</p>
       <p className="leading-relaxed mb-2">مکمل ها: مروری بر مکمل های رایج و کارایی آنها.</p>
       
       <h3 className="font-bold text-lg text-[#000080] mt-4">تغییر رفتار و تکنیک های مشاوره</h3>
       <p className="leading-relaxed mb-2">استراتژی هایی برای ترویج رفتارهای غذایی سالم. </p>
       <p className="leading-relaxed mb-2">مهارت های مشاوره برای کار با مراجعان یا بیماران.</p>
       
       <h3 className="font-bold text-lg text-[#000080] mt-4">ایمنی و مدیریت مواد غذایی</h3>
       <p className="leading-relaxed mb-2">اصول شیوه های ایمنی مواد غذایی برای جلوگیری از بیماری های ناشی از غذا. </p>
       <p className="leading-relaxed mb-2">درک نگهداری، آماده سازی و بهداشت مواد غذایی.</p>
       
       <h3 className="font-bold text-lg text-[#000080] mt-4">تأثیرات فرهنگی و اجتماعی بر تغذیه</h3>
       <p className="leading-relaxed mb-2">تأثیر فرهنگ، جامعه و محیط بر انتخاب های غذایی</p>
       <p className="leading-relaxed mb-2">رسیدگی به صحراهای غذا و دسترسی به غذاهای سالم. </p>
       
       <h3 className="font-bold text-lg text-[#000080] mt-4">تحقیقات و روند در تغذیه</h3>
       <p className="leading-relaxed mb-2">مروری بر روش های تحقیق فعلی در علم تغذیه.</p>
       <p className="leading-relaxed mb-2">روندهای نوظهور در تغذیه (به عنوان مثال، رژیم های غذایی مبتنی بر گیاه، غذاهای کاربردی). </p>
       
       <h3 className="font-bold text-lg text-[#000080] mt-4">فرمت های دوره</h3>
       <p className="leading-relaxed mb-2">دوره های آنلاین: یادگیری انعطاف پذیر با ماژول هایی که می توانند با سرعت خود تکمیل شوند.</p>
       <p className="leading-relaxed mb-2">کارگاه های حضوری: تجربیات یادگیری عملی اغلب شامل کاربردهای عملی است.</p>
       <p className="leading-relaxed mb-2">برنامه های صدور گواهینامه: دوره هایی که پس از تکمیل مدارک را ارائه می دهند که اغلب برای تمرین حرفه ای مورد نیاز است.</p>
       <p className="leading-relaxed mb-2">وبینارها/سمینارها: جلسات کوتاه تر با تمرکز بر موضوعات خاص یا پیشرفت های اخیر در تغذیه.</p>
       
       <h3 className="font-bold text-lg text-[#000080] mt-4">مخاطبان هدف</h3>
       <p className="leading-relaxed mb-2">افرادی که به دنبال دانش شخصی در مورد تغذیه هستند.</p>
       <p className="leading-relaxed mb-2">متخصصان بهداشت (به عنوان مثال، متخصصان تغذیه، پرستاران) به دنبال گسترش تخصص خود هستند.</p>
       <p className="leading-relaxed mb-2">مربیان تناسب اندام که می خواهند توصیه های تغذیه ای را در تمرین خود بگنجانند.</p>
       <p className="leading-relaxed mb-2">هر کسی که علاقه مند به بهبود طرح های بهداشتی جامعه است.</p>
       
       <h3 className="font-bold text-lg text-[#000080] mt-4">فرصت های شغلی</h3>
       <p className="leading-relaxed mb-2">تکمیل یک دوره آموزشی تغذیه می تواند به مسیرهای شغلی مختلفی منجر شود، از جمله:</p>
       <p className="leading-relaxed mb-2">متخصص تغذیه تغذیه (RDN)</p>
       <p className="leading-relaxed mb-2">مربی یا مشاور تغذیه</p>
       <p className="leading-relaxed mb-2">مربی بهداشت</p>
       <p className="leading-relaxed mb-2">متخصص تغذیه ورزشی</p>
       <p className="leading-relaxed mb-2">هماهنگ کننده برنامه سلامتی</p>
       
       <p className="leading-relaxed mt-4">نتیجه دوره های آموزشی تغذیه می تواند از نظر محتوا بسیار متفاوت باشد. مدت و عمق ضروری است که برنامه ای را انتخاب کنید که با اهداف شما همسو باشد - چه علاقه شخصی و چه پیشرفت حرفه ای. اگر به دنبال شغلی در زمینه تغذیه یا رشته های مرتبط با سلامت هستید، همیشه اعتبار را در نظر بگیرید.</p>
      </div>
    );
  };
  
  export default IntroNutrition;