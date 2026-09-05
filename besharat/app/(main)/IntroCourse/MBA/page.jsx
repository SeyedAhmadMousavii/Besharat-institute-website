import {
  ClockIcon,
  PresentationChartLineIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const articlesData = [
  {
    id: 1,
    title: "مهارت‌های توسعه فردی؛ چرا بعضی‌ها در مسیر حرفه‌ای سریع‌تر رشد می‌کنند؟",
    author: "موسوی",
    readTime: "00:10:00",
    image: "/assets/maghalat/-مقاله توسعه فردی .png",
    link: "MBA/MBAOne",
  },
  {
    id: 2,
    title: "زبان بدن مدیران؛ وقتی حرکات از کلمات مهم‌تر می‌شوند",
    author: "موسوی",
    readTime: "00:09:00",
    image: "/assets/maghalat/وقتی حرکات از کلمات مهم_تر می_شوند.png",
    link: "MBA/MBATwo",
  },
];

const IntroMBA = () => {
  return (
    <div className="text-[#1A1A2E] p-6 bg-white font-fa" dir="rtl">
      <div className="p-4 md:flex md:justify-around md:items-center container mx-auto mb-12">
        <div className="flex flex-col justify-center p-2 w-full">
          <h1 className="font-bold text-3xl mb-12 flex justify-center text-[#D4AF37]">
            دوره MBA
          </h1>
          <div className="flex justify-around w-full">
            <div className="flex flex-col justify-between items-center m-auto">
              <ClockIcon className="text-[#D4AF37] w-12 h-12" />
              <p className="mt-2 text-center text-[#1A1A2E]">۵۰۰ ساعت</p>
            </div>
            <div className="flex flex-col justify-between items-center m-auto">
              <PresentationChartLineIcon className="text-[#D4AF37] w-12 h-12" />
              <p className="mt-2 text-center text-[#1A1A2E]">۲۵۰ جلسه</p>
            </div>
            <div className="flex flex-col justify-between items-center m-auto">
              <AcademicCapIcon className="text-[#D4AF37] w-12 h-12" />
              <p className="mt-2 text-center text-[#1A1A2E]">۱۰۰۰+ دانشجو</p>
            </div>
          </div>
        </div>
        <div className="md:w-[600px] w-full rounded-3xl mt-6 md:mt-0 shadow-lg border-2 border-[#D4AF37]/30">
          <video
            src="https://besharatacademy.com/media/videos/.mp4"
            controls
            className="w-full rounded-3xl"
            poster="/api/placeholder/600/340"
          >
            <source src="https://besharatacademy.com/media/videos/.mp4" type="video/mp4" />
            مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
          </video>
        </div>
      </div>

 
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-xl md:text-2xl font-bold mt-8 text-[#D4AF37]">
          دوره MBA آموزشگاه بشارت: برنامه‌ای استراتژیک برای فرماندهی در دنیای پیچیده کسب‌وکار
        </h2>
        <p className="mt-4 leading-8 text-[#1A1A2E]">
          دوره MBA (Master of Business Administration) آموزشگاه بشارت، صرفاً یک برنامه آموزشی متداول نیست، بلکه یک «سیستم توسعه قابلیت‌های مدیریتی» است که برای افرادی طراحی شده که قصد دارند از نقش یک مدیر عملیاتی فراتر رفته و به یک رهبر استراتژیک و تصمیم‌ساز در سطح کلان سازمانی تبدیل شوند. این برنامه، دانش تئوریک را با نیازهای عینی بازار کار پیوند می‌زند.
        </p>

        <h3 className="text-lg md:text-xl font-bold mt-8 text-[#D4AF37]">
          مخاطبان هدف: چه کسانی باید این دوره را انتخاب کنند؟
        </h3>
        <p className="mt-4 leading-8 text-[#1A1A2E]">
          این برنامه به‌طور ویژه برای سه گروه اصلی طراحی شده است: کارآفرینانی که به دنبال ساختاری علمی برای مقیاس‌پذیر کردن کسب‌وکار خود هستند، مدیران میانی و ارشدی که می‌خواهند قدرت تحلیل و تصمیم‌گیری خود را افزایش دهند، و صاحبان کسب‌وکارهایی که در مواجهه با رقابت فشرده، نیازمند بازتعریف مدل ذهنی مدیریتی خود می‌باشند. همچنین این دوره برای متخصصانی که قصد تغییر مسیر شغلی به سمت نقش‌های مدیریتی را دارند، یک نقطه عطف حرفه‌ای محسوب می‌شود.
        </p>

        <h3 className="text-lg md:text-xl font-bold mt-8 text-[#D4AF37]">
          پیش‌نیازها: برای ورود به این دوره به چه چیزی نیاز دارید؟
        </h3>
        <p className="mt-4 leading-8 text-[#1A1A2E]">
          ورود به این دوره نیازمند پیش‌فرض‌های خاصی نیست، اما داشتن حداقل دو سال تجربه کاری در محیط‌های حرفه‌ای یا روحیه کارآفرینی و پشتکار بالا، به شما کمک می‌کند تا حداکثر بهره‌وری را از مطالب کاربردی آن داشته باشید. آنچه بیش از هر چیز نیاز دارید، عطش یادگیری و تمایل به تغییر نگرش از «مدیریت روزمره» به «رهبری آینده‌نگر» است.
        </p>

        <h2 className="text-xl md:text-2xl font-bold mt-8 text-[#D4AF37]">
          چهار رکن اصلی تمایز دوره MBA در آموزشگاه بشارت
        </h2>
        <p className="mt-4 leading-8 text-[#1A1A2E]">
          برخلاف بسیاری از دوره‌های تئوریک محور، ما در بشارت بر چهار رکن اساسی تأکید می‌کنیم که تضمین‌کننده بازگشت سرمایه آموزشی شما هستند: «مهارت‌محوری عملیاتی»، «شبکه‌سازی هدفمند»، «کوچینگ فردی» و «پروژه‌های واقعی کسب‌وکار». این ارکان، مرز بین یک کلاس درس سنتی و یک اردوی آماده‌سازی مدیریتی را مشخص می‌کنند.
        </p>

        <h3 className="text-lg md:text-xl font-bold mt-8 text-[#D4AF37]">
          محتوای دوره: فراتر از ۱۰ سرفصل کلیدی مدیریتی
        </h3>
        <p className="mt-4 leading-8 text-[#1A1A2E]">
          شما در این دوره تنها با مفاهیم کلی آشنا نمی‌شوید، بلکه هر سرفصل به صورت عمقی و با رویکرد حل مسئله تدریس می‌شود. از جمله این سرفصل‌ها می‌توان به «مدیریت استراتژیک پیشرفته»، «بازاریابی و فروش مبتنی بر داده»، «مدیریت منابع انسانی استراتژیک»، «اصول مالی و حسابداری برای مدیران غیرمالی»، «تحلیل بازار و هوشمندی رقابتی»، «رفتار سازمانی و مدیریت تغییر»، «کارآفرینی شرکتی» و «توسعه مدل‌های کسب‌وکار» اشاره کرد.
        </p>
        <p className="mt-4 leading-8 text-[#1A1A2E]">
          ساختار هر جلسه به گونه‌ای طراحی شده که ابتدا یک چارچوب نظری قدرتمند ارائه شود، سپس بلافاصله با یک مطالعه موردی واقعی (Case Study) از صنایع مختلف، آن نظریه به چالش کشیده می‌شود و در نهایت شرکت‌کنندگان در قالب یک کارگاه عملی، راه‌حل خود را برای یک مسئله مشابه طراحی می‌کنند. این فرآیند سه مرحله‌ای، یادگیری را ماندگار می‌کند.
        </p>

        <h3 className="text-lg md:text-xl font-bold mt-8 text-[#D4AF37]">
          رویکرد اساتید: تجربه عملی، نه فقط دانش آکادمیک
        </h3>
        <p className="mt-4 leading-8 text-[#1A1A2E]">
          یکی از نقاط قوت بی‌بدیل این دوره، بهره‌مندی از اساتید باتجربه‌ای است که سابقه زیسته در راه‌اندازی، مدیریت یا مشاوره به کسب‌وکارهای موفق را دارند. این اساتید، چالش‌های واقعی بازار مانند مدیریت بحران نقدینگی، مذاکرات سخت، یا راه‌اندازی یک محصول جدید را با شما در میان می‌گذارند. به این ترتیب، مباحث صرفاً یک انتقال اطلاعات نیست، بلکه روایت تجربه‌ای ارزشمند است.
        </p>
        <p className="mt-4 leading-8 text-[#1A1A2E]">
          علاوه بر اساتید اصلی، از مدیران عامل و کارآفرینان مهمان دعوت می‌شود تا در جلسات پرسش و پاسخ تخصصی شرکت کنند. این تعامل مستقیم، پنجره‌ای به سوی فرهنگ مدیریتی سازمان‌های موفق باز می‌کند و دیدگاهی واقع‌بینانه از چالش‌های رهبری ارائه می‌دهد.
        </p>

        <h2 className="text-xl md:text-2xl font-bold mt-8 text-[#D4AF37]">
          روش‌شناسی آموزشی: تلفیق تئوری و عمل در قالب پروژه‌های واقعی
        </h2>
        <p className="mt-4 leading-8 text-[#1A1A2E]">
          رویکرد آموزشی ما «تلفیقی» (Blended) است، به این معنا که از ترکیب کلاس‌های تعاملی، کارگاه‌های حل مسئله، تحلیل مطالعات موردی عمیق، پروژه‌های تیمی شبیه‌سازی‌شده و جلسات کوچینگ فردی استفاده می‌کنیم. این تنوع روش‌ها، پاسخگوی سبک‌های مختلف یادگیری بوده و خستگی ناشی از روش‌های یکنواخت را از بین می‌برد.
        </p>
        <p className="mt-4 leading-8 text-[#1A1A2E]">
          برجسته‌ترین بخش این روش‌شناسی، انجام یک «پروژه نهایی جامع» (Capstone Project) است. در این پروژه، شما باید یک طرح کسب‌وکار کامل یا یک راهبرد رشد برای یک سازمان واقعی (می‌تواند کسب‌وکار خودتان باشد) تدوین کنید و در پایان دوره از آن در مقابل اساتید و همکلاسی‌ها دفاع کنید. این فرآیند، شبیه‌سازی دقیقی از ارائه به هیئت مدیره است.
        </p>

        <h3 className="text-lg md:text-xl font-bold mt-8 text-[#D4AF37]">
          کوچینگ حرفه‌ای: راهنمای شخصی شما در مسیر توسعه
        </h3>
        <p className="mt-4 leading-8 text-[#1A1A2E]">
          ما معتقدیم یادگیری مؤثر بدون بازخورد شخصی‌سازی شده امکان‌پذیر نیست. به همین دلیل، در طول دوره، جلسات کوچینگ فردی با یکی از مربیان مجرب برنامه‌ریزی شده است. شما در این جلسات می‌توانید چالش‌های خاص کسب‌وکار خود را مطرح کنید، در مورد پروژه‌هایتان مشاوره بگیرید و یک نقشه راه شخصی‌سازی شده برای توسعه مهارت‌های مدیریتی خود ترسیم نمایید.
        </p>

        <h2 className="text-xl md:text-2xl font-bold mt-8 text-[#D4AF37]">
          دستاوردهای مشخص دوره: چه چیزی دریافت خواهید کرد؟
        </h2>
        <p className="mt-4 leading-8 text-[#1A1A2E]">
          در پایان این دوره، شما صرفاً یک گواهی دریافت نمی‌کنید، بلکه یک «جعبه ابزار مدیریتی» کامل همراه با توانایی به‌کارگیری آن را خواهید داشت. توانایی خواندن صورت‌های مالی و تشخیص نقاط ضعف و قوت، تسلط بر تکنیک‌های مذاکره برد-برد، قابلیت طراحی یک استراتژی بازاریابی داده‌محور، و مهارت رهبری و انگیزش تیم‌های عملکرد بالا، تنها بخشی از این دستاوردها هستند.
        </p>
        <p className="mt-4 leading-8 text-[#1A1A2E]">
          گواهینامه معتبر MBA که در پایان دوره از سوی آموزشگاه بشارت اعطا می‌شود، سندی است بر اثبات توانمندی‌های جدید شما. این گواهی می‌تواند در رزومه حرفه‌ای شما به عنوان یک مزیت رقابتی جدی در فرآیندهای ارتقای شغلی یا جذب در شرکت‌های معتبر تلقی شود.
        </p>

        <h3 className="text-lg md:text-xl font-bold mt-8 text-[#D4AF37]">
          شبکه‌سازی هدفمند: سرمایه اجتماعی خود را بسازید
        </h3>
        <p className="mt-4 leading-8 text-[#1A1A2E]">
          همکلاسی‌های شما در این دوره، از میان مدیران، کارآفرینان و متخصصان برتر صنایع مختلف انتخاب می‌شوند. این ترکیب، بستری ایده‌آل برای تبادل نظر، شکل‌گیری مشارکت‌های تجاری و ایجاد یک شبکه حرفه‌ای قدرتمند فراهم می‌کند. ارتباطاتی که در این دوره شکل می‌گیرد، اغلب تا سال‌ها پس از اتمام دوره نیز پایدار و ثمربخش خواهد بود.
        </p>

        <h2 className="text-xl md:text-2xl font-bold mt-8 text-[#D4AF37]">
          مزایای استراتژیک شرکت در دوره MBA بشارت
        </h2>
        <p className="mt-4 leading-8 text-[#1A1A2E]">
          شرکت در این دوره به شما دیدگاهی کلان‌نگر می‌دهد که قادر باشید بین بخش‌های مختلف سازمان (مالی، بازاریابی، منابع انسانی، عملیات) ارتباط برقرار کنید و تصمیماتی یکپارچه و هماهنگ با اهداف کلان شرکت بگیرید. این توانایی «سیستمی دیدن»، وجه تمایز اصلی یک مدیر ارشد از یک مدیر عملیاتی است.
        </p>
        <p className="mt-4 leading-8 text-[#1A1A2E]">
          علاوه بر این، شما می‌آموزید که چگونه در شرایط ابهام و پیچیدگی (شرایط VUCA)، تصمیمات حساب‌شده و مبتنی بر تحلیل ریسک بگیرید. مهارت‌هایی مانند تفکر نقاد، حل مسئله خلاقانه و تصمیم‌گیری اخلاقی، از جمله شایستگی‌های کلیدی هستند که در طول دوره در شما پرورش داده می‌شوند.
        </p>

        <h3 className="text-lg md:text-xl font-bold mt-8 text-[#D4AF37]">
          پشتیبانی و راهنمایی پس از دوره: پایان یادگیری، آغاز رشد
        </h3>
        <p className="mt-4 leading-8 text-[#1A1A2E]">
          ارتباط شما با آموزشگاه بشارت پس از اتمام دوره قطع نمی‌شود. شما به عضویت شبکه فارغ‌التحصیلان (Alumni) درمی‌آیید که از طریق آن به رویدادهای تخصصی، کارگاه‌های به‌روزرسانی و فرصت‌های همکاری دسترسی خواهید داشت. همچنین تیم پشتیبانی ما در صورت نیاز، شما را برای ورود به فرصت‌های شغلی مرتبط یا راه‌اندازی و توسعه کسب‌وکار شخصی‌تان راهنمایی می‌کند.
        </p>
        <p className="mt-4 leading-8 text-[#1A1A2E]">
          اگر در مسیر حرفه‌ای خود به نقطه‌ای رسیده‌اید که حس می‌کنید دانش تجربی پاسخگوی چالش‌های پیش‌رو نیست و به یک ارتقای پارادایمی در نگرش مدیریتی خود نیاز دارید، این دوره دقیقاً همان پلی است که به دنبالش بوده‌اید. این یک سرمایه‌گذاری روی ارزشمندترین دارایی شما یعنی «قدرت تصمیم‌گیری» است.
        </p>

        <h2 className="text-xl md:text-2xl font-bold mt-8 text-[#D4AF37]">
          جمع‌بندی: چرا همین حالا باید اقدام کنید؟
        </h2>
        <p className="mt-4 leading-8 text-[#1A1A2E]">
          بازار رقابتی امروز، مدیرانی را می‌طلبد که همزمان هم استراتژیست باشند، هم مجری، و هم رهبر. دوره جامع MBA آموزشگاه بشارت، با تکیه بر محتوای به‌روز، اساتید مجرب، روش‌شناسی عمل‌گرا و پشتیبانی مستمر، تمام ابزارهای لازم برای ایفای این نقش چندگانه را در اختیار شما قرار می‌دهد. برای ثبت‌نام و برداشتن گامی مؤثر در مسیر رشد و سلطه حرفه‌ای خود، امروز اقدام کنید.
        </p>
      </div>

      {/* بخش مقالات */}
      <div className="md:px-8 px-4 m-2 mt-16">
        <div className="flex items-center">
          <Image
            src="/assets/maghalatIcon.jpg"
            alt="مقالات"
            width={112}
            height={112}
            className="w-20 md:w-28 h-auto -mt-10"
          />
          <h2 className="text-[#000080] font-extrabold text-3xl md:text-4xl mr-2">
            مقـــــالات
          </h2>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
            {articlesData.map((article) => (
              <div
                key={article.id}
                className="flex flex-col justify-between items-center rounded-3xl p-4 mt-10 mb-6 w-full max-w-[280px] shadow-lg hover:scale-105 transition-all duration-300 bg-white border border-[#E8E8F0]"
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  width={280}
                  height={160}
                  className="w-full h-40 object-cover -mt-12 mb-4 shadow-xl rounded-3xl"
                />
                <h3 className="font-bold mb-4 text-lg text-[#000080] text-center line-clamp-2 h-[56px]">
                  {article.title}
                </h3>
                <div className="flex justify-between items-center w-full px-2">
                  <p className="text-[#1A1A2E] text-sm">نویسنده: {article.author}</p>
                  <div className="flex items-center text-[#1A1A2E]">
                    <p className="text-sm">{article.readTime}</p>
                    <ClockIcon className="text-[#D4AF37] w-5 h-5 mr-1" />
                  </div>
                </div>
                <Link href={article.link} className="w-full mt-4">
                  <button className="font-fa text-base rounded-full w-full bg-[#D4AF37] text-white py-2 px-4 hover:bg-[#B8960F] transition-all shadow-md hover:shadow-lg">
                    بخوانیم!!
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroMBA;