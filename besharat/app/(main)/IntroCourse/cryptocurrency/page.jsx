import {
  ClockIcon,
  PresentationChartLineIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const IntroDigitalCurrency = () => {
  return (
    <div className="text-[#1A1A2E] p-6 bg-white">
      <div className="p-4 md:flex md:justify-around md:align-middle container mb-12">
        <div className="flex-col justify-center p-2 w-full">
          <h1 className="font-bold text-3xl mb-12 flex justify-center text-[#000080]">
            ارز دیجیتال
          </h1>
          <div className="flex justify-around w-full">
            <div className="flex-col justify-between align-middle m-auto">
              <ClockIcon className="text-[#D4AF37] w-12" />
              <p className="text-[#1A1A2E]">40 ساعت</p>
            </div>
            <div className="flex-col justify-between align-middle m-auto">
              <PresentationChartLineIcon className="text-[#D4AF37] w-12" />
              <p className="text-[#1A1A2E]">20 جلسه</p>
            </div>
            <div className="flex-col justify-between align-middle m-auto">
              <AcademicCapIcon className="text-[#D4AF37] w-12 flex justify-center m-auto" />
              <p className="ml-1 text-[#1A1A2E]">+1000 دانشجو</p>
            </div>
          </div>
        </div>
        <div className="md:w-[600px] rounded-3xl shadow-lg border-2 border-[#D4AF37]/30">
          <video
            src="https://besharatacademy.com/media/videos/digital.mp4"
            controls
            className="w-full rounded-3xl"
          ></video>
        </div>
      </div>
      <p className="leading-relaxed mb-2">دوره «تحلیلگر بازارهای مالی بین‌الملل» یک برنامه آموزشی جامع و هدفمند است که با رویکردی کاربردی و به‌روز، به آموزش مفاهیم کلیدی و مهارت‌های ضروری برای فعالیت حرفه‌ای در بازارهای جهانی، از جمله فارکس و ارزهای دیجیتال، می‌پردازد. این دوره به‌گونه‌ای طراحی شده که شرکت‌کنندگان را از سطح پایه تا سطح پیشرفته همراهی کند و آن‌ها را برای تحلیل، تصمیم‌گیری و معامله‌گری در بازارهای مالی جهانی آماده سازد.</p>
      <p className="leading-relaxed mb-2">در این دوره، مفاهیم اولیه اقتصاد و سازوکار بازارهای بین‌المللی به زبان ساده توضیح داده می‌شود تا شرکت‌کنندگان، چه آشنایی قبلی داشته باشند و چه به‌تازگی وارد این مسیر شده باشند، بتوانند با درک صحیح از ساختار بازار، قدم‌های ابتدایی را محکم و مطمئن بردارند. سپس وارد مباحث تخصصی‌تر خواهیم شد؛ از شناخت انواع بازارها و نمادها گرفته تا نحوه عملکرد بروکرها و شیوه‌های افتتاح حساب و مدیریت سرمایه.</p>
      <p className="leading-relaxed mb-2">یکی از ویژگی‌های مهم این دوره، پرداختن عمیق و دقیق به انواع تحلیل‌های رایج در بازارهای مالی است. تحلیل تکنیکال، تحلیل فاندامنتال و تحلیل روانشناسی بازار، سه ستون اصلی تصمیم‌گیری در بازارهای مالی هستند که در این دوره به‌صورت کامل آموزش داده می‌شوند. ابزارها و اندیکاتورهای مهم، روش‌های تحلیل نمودار، بررسی اخبار اقتصادی، درک تأثیر رویدادهای جهانی و واکنش‌های قیمتی بازار، همگی به‌صورت عملی و پروژه‌محور بررسی می‌شوند.</p>
      <p className="leading-relaxed mb-2">در کنار تحلیل، آشنایی با سبک‌های مختلف معاملاتی یکی دیگر از بخش‌های مهم این دوره است. شرکت‌کنندگان با روش‌هایی همچون اسکلپ، دی‌تریدر، سوئینگ‌تریدر و پوزیشن‌تریدر آشنا می‌شوند و می‌آموزند که بر اساس تیپ شخصیتی و سبک زندگی خود، مناسب‌ترین استراتژی معاملاتی را انتخاب و اجرا کنند. این بخش کمک می‌کند تا افراد از سردرگمی بین سبک‌های مختلف خارج شوند و مسیر مشخص‌تری برای فعالیت حرفه‌ای خود در بازار انتخاب کنند.</p>
      <p className="leading-relaxed mb-2">محتوای آموزشی این دوره صرفاً محدود به ارزهای دیجیتال نیست، بلکه بخش ویژه‌ای نیز به بازار فارکس اختصاص دارد. بازار تبادل ارزهای خارجی (Forex) یکی از بزرگ‌ترین و پرحجم‌ترین بازارهای مالی در دنیاست که فرصت‌های زیادی را برای سرمایه‌گذاری و معامله‌گری فراهم می‌کند. در این دوره، ساختار فارکس، نحوه معامله جفت‌ارزها، استفاده از تقویم اقتصادی، بررسی نرخ بهره و اخبار مهم جهانی به‌صورت دقیق آموزش داده می‌شود.</p>
      <p className="leading-relaxed mb-2">دوره «تحلیلگر بازارهای مالی بین‌الملل» در قالب ۲۰ جلسه آموزشی برگزار می‌شود که هر جلسه به‌صورت گام‌به‌گام و با هدف درک عمیق‌تر مفاهیم طراحی شده است. جلسات هم شامل مباحث تئوری هستند و هم شامل تمرینات عملی و مثال‌های واقعی از بازار. این ترکیب باعث می‌شود تا مفاهیم نه‌تنها در ذهن مخاطب تثبیت شود، بلکه توانایی اجرای آن‌ها در فضای واقعی بازار نیز شکل بگیرد.</p>
      <p className="leading-relaxed mb-2">یکی از نقاط قوت اصلی این دوره، حضور اساتید مجرب و حرفه‌ای در حوزه بازارهای مالی است. اساتیدی که علاوه‌بر دانش تئوری، سابقه طولانی فعالیت در بازارهای جهانی را دارند و خود نیز به‌صورت فعال معامله‌گر هستند. این اساتید دارای کارت مربی‌گری رسمی و مدارک بین‌المللی در زمینه آموزش بازارهای مالی هستند و با تجربه ارزشمند خود، نکات کلیدی و ناگفته‌های معامله‌گری را به دانشجویان منتقل می‌کنند.</p>
      <p className="leading-relaxed mb-2">فضای آموزشی این دوره به‌گونه‌ای طراحی شده که شرکت‌کنندگان بتوانند در کنار یادگیری، با مدرسین و دیگر دانش‌پذیران تعامل داشته باشند، سؤالات خود را مطرح کنند و پاسخ‌های دقیق و عملی دریافت نمایند. همچنین در طول دوره، پشتیبانی مستمر علمی فراهم شده است تا فرآیند یادگیری، منسجم و مستمر باقی بماند.</p>
      <p className="leading-relaxed mb-2">در پایان دوره، شرکت‌کنندگان توانایی تحلیل و بررسی بازارهای مالی بین‌المللی را پیدا می‌کنند و می‌توانند بر اساس دانش و تجربه‌ای که به دست آورده‌اند، وارد بازار شوند و استراتژی‌های خود را با اطمینان پیاده‌سازی کنند. همچنین امکان دریافت گواهی‌نامه معتبر پایان دوره برای شرکت‌کنندگان فراهم است تا بتوانند از آن در مسیر شغلی و حرفه‌ای خود استفاده نمایند.</p>
      <p className="leading-relaxed mb-2">اگر به‌دنبال یادگیری حرفه‌ای، اصولی و علمی بازارهای مالی بین‌المللی هستید، این دوره می‌تواند نقطه آغاز مسیر شما باشد. چه علاقه‌مند به بازار فارکس باشید و چه به دنیای رمزارزها جذب شده باشید، این دوره مسیر یادگیری‌تان را هموار می‌کند و شما را برای ورود جدی و حرفه‌ای به این حوزه مهیّا می‌سازد.</p>
      <a
        href="../assets/file/جزوه ارزدیجیتال.pdf"
        className="w-full mt-6"
        download
      >
        <button className="bg-[#D4AF37] hover:bg-[#B8960F] text-white font-bold text-base w-full py-3 my-10 rounded-lg transition-all shadow-md hover:shadow-lg">
          جزوه ارز دیجیتال
        </button>
      </a>
      <h1 className="font-bold text-center text-3xl text-[#D4AF37]">ابزارهای مورد نیاز یک تریدر</h1>
     <div className="flex justify-center items-center gap-6 py-12 flex-wrap">
      <a
        href="/assets/tools/TradingBoard_MT5_V242 (1).ex5"
        className="bg-white rounded-xl p-4 shadow hover:scale-105 transition text-center w-32 border-2 border-[#E8E8F0] hover:border-[#D4AF37]"
        download
      >
        <Image
          src="/assets/trading.jpg"
          alt="tradingBoard"
          width={64}
          height={64}
          className="w-16 h-16 mx-auto"
        />
        <p className="mt-2 font-bold text-[#000080]">TradingBoard</p>
      </a>

      <a
        href="/assets/tools/Glory Money Management (1) (1).ex5"
        className="bg-white rounded-xl p-4 shadow hover:scale-105 transition text-center w-32 border-2 border-[#E8E8F0] hover:border-[#D4AF37]"
        download
      >
        <Image
          src="/assets/trading.jpg"
          alt="glory"
          width={64}
          height={64}
          className="w-16 h-16 mx-auto"
        />
        <p className="mt-2 font-bold text-[#000080]">Glory</p>
      </a>

      <a
        href="/assets/tools/candletime.ex5"
        className="bg-white rounded-xl p-4 shadow hover:scale-105 transition text-center w-32 border-2 border-[#E8E8F0] hover:border-[#D4AF37]"
        download
      >
        <Image
          src="/assets/trading.jpg"
          alt="candleTime"
          width={64}
          height={64}
          className="w-16 h-16 mx-auto"
        />
        <p className="mt-2 font-bold text-[#000080]">Candle Time</p>
      </a>
    </div>

      <div className="md:px-8 px-auto m-2">
        <div className="flex align-middle">
          <Image
            src="/assets/maghalatIcon.jpg"
            alt="speaker"
            width={112}
            height={112}
            className="w-28 h-auto"
          />
          <h2 className="text-[#000080] font-extrabold text-3xl md:text-4xl">
            مقـــــالات
          </h2>
        </div>
        <div id="custom-animation" value="Web">
          <div>
            <div className="mt-14">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center font-fa">
                <div
                  className="flex flex-col justify-between rounded-3xl p-2 w-full max-w-[280px] shadow-lg hover:scale-105 transition-all vertical-movement bg-white border border-[#E8E8F0]"
                  key=""
                >
                  <div>
                    <Image
                      src="/assets/maghalat/maghale9arz.jpeg"
                      alt="coursePic"
                      width={280}
                      height={160}
                      className="w-full h-[160px] object-cover overflow-hidden mb-4 mx-auto shadow-xl rounded-3xl"
                    />
                    <h1 className="font-bold mb-4 text-lg text-[#000080] line-clamp-2 h-[56px]">
                      تاریخچه پیدایش بازار فارکس: از مبادلات ابتدایی تا بازار جهانی ارز
                    </h1>
                    <div className="flex justify-between align-middle p-2">
                      <p className="mb-2 font-fa text-[#1A1A2E]">نویسنده : موسوی</p>
                      <div className="flex text-[#1A1A2E]">
                        <p className="mt-1">00:08:00</p>
                        <ClockIcon className="text-[#D4AF37] w-8 m-0 mr-1" />
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-2">
                    <Link href="cryptocurrency/cryptoEssayNine" className="w-full">
                      <button className="font-fa text-base rounded-full w-full bg-[#D4AF37] text-white hover:bg-[#B8960F] transition-all shadow-md hover:shadow-lg p-2">
                        بخوانیم!!
                      </button>
                    </Link>
                  </div>
                </div>

                <div
                  className="flex flex-col justify-between rounded-3xl p-2 w-full max-w-[280px] shadow-lg hover:scale-105 transition-all vertical-movement bg-white border border-[#E8E8F0]"
                  key=""
                >
                  <div>
                    <Image
                      src="/assets/maghalat/maghale8arz.jpg"
                      alt="coursePic"
                      width={280}
                      height={160}
                      className="w-full h-[160px] object-cover overflow-hidden mb-4 mx-auto shadow-xl rounded-3xl"
                    />
                    <h1 className="font-bold mb-4 text-lg text-[#000080] line-clamp-2 h-[56px]">
                      اهمیت حفظ امنیت در دنیای ارزهای دیجیتال
                    </h1>
                    <div className="flex justify-between align-middle p-2">
                      <p className="mb-2 font-fa text-[#1A1A2E]">نویسنده : موسوی</p>
                      <div className="flex text-[#1A1A2E]">
                        <p className="mt-1">00:08:00</p>
                        <ClockIcon className="text-[#D4AF37] w-8 m-0 mr-1" />
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-2">
                    <Link href="cryptocurrency/cryptoEssayEight" className="w-full">
                      <button className="font-fa text-base rounded-full w-full bg-[#D4AF37] text-white hover:bg-[#B8960F] transition-all shadow-md hover:shadow-lg p-2">
                        بخوانیم!!
                      </button>
                    </Link>
                  </div>
                </div>

                <div
                  className="flex flex-col justify-between rounded-3xl p-2 w-full max-w-[280px] shadow-lg hover:scale-105 transition-all vertical-movement bg-white border border-[#E8E8F0]"
                  key=""
                >
                  <div>
                    <Image
                      src="/assets/maghalat/maghale6arz.jpg"
                      alt="coursePic"
                      width={280}
                      height={160}
                      className="w-full h-[160px] object-cover overflow-hidden mb-4 mx-auto shadow-xl rounded-3xl"
                    />
                    <h1 className="font-bold mb-4 text-lg text-[#000080] line-clamp-2 h-[56px]">
                      نقش روانشناسی در معاملات فارکس و ترید
                    </h1>
                    <div className="flex justify-between align-middle p-2">
                      <p className="mb-2 font-fa text-[#1A1A2E]">نویسنده : موسوی</p>
                      <div className="flex text-[#1A1A2E]">
                        <p className="mt-1">00:08:00</p>
                        <ClockIcon className="text-[#D4AF37] w-8 m-0 mr-1" />
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-2">
                    <Link href="cryptocurrency/cryptoEssaySix" className="w-full">
                      <button className="font-fa text-base rounded-full w-full bg-[#D4AF37] text-white hover:bg-[#B8960F] transition-all shadow-md hover:shadow-lg p-2">
                        بخوانیم!!
                      </button>
                    </Link>
                  </div>
                </div>

                <div
                  className="flex flex-col justify-between rounded-3xl p-2 w-full max-w-[280px] shadow-lg hover:scale-105 transition-all vertical-movement bg-white border border-[#E8E8F0]"
                  key=""
                >
                  <div>
                    <Image
                      src="/assets/maghalat/maghale7arz.jpg"
                      alt="coursePic"
                      width={280}
                      height={160}
                      className="w-full h-[160px] object-cover overflow-hidden mb-4 mx-auto shadow-xl rounded-3xl"
                    />
                    <h1 className="font-bold mb-4 text-lg text-[#000080] line-clamp-2 h-[56px]">
                      اهمیت مدیریت ریسک و سرمایه در بازار فارکس
                    </h1>
                    <div className="flex justify-between align-middle p-2">
                      <p className="mb-2 font-fa text-[#1A1A2E]">نویسنده : موسوی</p>
                      <div className="flex text-[#1A1A2E]">
                        <p className="mt-1">00:08:00</p>
                        <ClockIcon className="text-[#D4AF37] w-8 m-0 mr-1" />
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-2">
                    <Link href="cryptocurrency/cryptoEssaySeven" className="w-full">
                      <button className="font-fa text-base rounded-full w-full bg-[#D4AF37] text-white hover:bg-[#B8960F] transition-all shadow-md hover:shadow-lg p-2">
                        بخوانیم!!
                      </button>
                    </Link>
                  </div>
                </div>

                <div
                  className="flex flex-col justify-between rounded-3xl p-2 w-full max-w-[280px] shadow-lg hover:scale-105 transition-all vertical-movement bg-white border border-[#E8E8F0]"
                  key=""
                >
                  <div>
                    <Image
                      src="/assets/maghalat/انتخاب استراتژی معاملاتی.jpg"
                      alt="coursePic"
                      width={280}
                      height={160}
                      className="w-full h-[160px] object-cover overflow-hidden mb-4 mx-auto shadow-xl rounded-3xl"
                    />
                    <h1 className="font-bold mb-4 text-lg text-[#000080] line-clamp-2 h-[56px]">
                      استراتژی‌ معاملاتی
                    </h1>
                    <div className="flex justify-between align-middle p-2">
                      <p className="mb-2 font-fa text-[#1A1A2E]">نویسنده : درخشان</p>
                      <div className="flex text-[#1A1A2E]">
                        <p className="mt-1">00:08:00</p>
                        <ClockIcon className="text-[#D4AF37] w-8 m-0 mr-1" />
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-2">
                    <Link href="cryptocurrency/cryptoEssayOne" className="w-full">
                      <button className="font-fa text-base rounded-full w-full bg-[#D4AF37] text-white hover:bg-[#B8960F] transition-all shadow-md hover:shadow-lg p-2">
                        بخوانیم!!
                      </button>
                    </Link>
                  </div>
                </div>

                <div
                  className="flex flex-col justify-between rounded-3xl p-2 w-full max-w-[280px] shadow-lg hover:scale-105 transition-all vertical-movement bg-white border border-[#E8E8F0]"
                  key=""
                >
                  <div>
                    <Image
                      src="/assets/maghalat/maghale2arz.jpg"
                      alt="coursePic"
                      width={280}
                      height={160}
                      className="w-full h-[160px] object-cover overflow-hidden mb-4 mx-auto shadow-xl rounded-3xl"
                    />
                    <h1 className="font-bold mb-4 text-lg text-[#000080] line-clamp-2 h-[56px]">
                      خرید نهنگ ها
                    </h1>
                    <div className="flex justify-between align-middle p-2">
                      <p className="mb-2 font-fa text-[#1A1A2E]">نویسنده : درخشان</p>
                      <div className="flex text-[#1A1A2E]">
                        <p className="mt-1">00:08:00</p>
                        <ClockIcon className="text-[#D4AF37] w-8 m-0 mr-1" />
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-2">
                    <Link href="cryptocurrency/cryptoEssayTwo" className="w-full">
                      <button className="font-fa text-base rounded-full w-full bg-[#D4AF37] text-white hover:bg-[#B8960F] transition-all shadow-md hover:shadow-lg p-2">
                        بخوانیم!!
                      </button>
                    </Link>
                  </div>
                </div>

                <div
                  className="flex flex-col justify-between rounded-3xl p-2 w-full max-w-[280px] shadow-lg hover:scale-105 transition-all vertical-movement bg-white border border-[#E8E8F0]"
                  key=""
                >
                  <div>
                    <Image
                      src="/assets/maghalat/maghale3arz.webp"
                      alt="coursePic"
                      width={280}
                      height={160}
                      className="w-full h-[160px] object-cover overflow-hidden mb-4 mx-auto shadow-xl rounded-3xl"
                    />
                    <h1 className="font-bold mb-4 text-lg text-[#000080] line-clamp-2 h-[56px]">
                      تأثیر جنگ‌ها بر بازارهای مالی و اقتصادی
                    </h1>
                    <div className="flex justify-between align-middle p-2">
                      <p className="mb-2 font-fa text-[#1A1A2E]">نویسنده : موسوی</p>
                      <div className="flex text-[#1A1A2E]">
                        <p className="mt-1">00:08:00</p>
                        <ClockIcon className="text-[#D4AF37] w-8 m-0 mr-1" />
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-2">
                    <Link href="cryptocurrency/cryptoEssayThree" className="w-full">
                      <button className="font-fa text-base rounded-full w-full bg-[#D4AF37] text-white hover:bg-[#B8960F] transition-all shadow-md hover:shadow-lg p-2">
                        بخوانیم!!
                      </button>
                    </Link>
                  </div>
                </div>

                <div
                  className="flex flex-col justify-between rounded-3xl p-2 w-full max-w-[280px] shadow-lg hover:scale-105 transition-all vertical-movement bg-white border border-[#E8E8F0]"
                  key=""
                >
                  <div>
                    <Image
                      src="/assets/maghalat/maghale4arz.jpg"
                      alt="coursePic"
                      width={280}
                      height={160}
                      className="w-full h-[160px] object-cover overflow-hidden mb-4 mx-auto shadow-xl rounded-3xl"
                    />
                    <h1 className="font-bold mb-4 text-lg text-[#000080] line-clamp-2 h-[56px]">
                      بلاکچین چیست و انواع آن کدامند؟
                    </h1>
                    <div className="flex justify-between align-middle p-2">
                      <p className="mb-2 font-fa text-[#1A1A2E]">نویسنده : موسوی</p>
                      <div className="flex text-[#1A1A2E]">
                        <p className="mt-1">00:08:00</p>
                        <ClockIcon className="text-[#D4AF37] w-8 m-0 mr-1" />
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-2">
                    <Link href="cryptocurrency/cryptoEssayFour" className="w-full">
                      <button className="font-fa text-base rounded-full w-full bg-[#D4AF37] text-white hover:bg-[#B8960F] transition-all shadow-md hover:shadow-lg p-2">
                        بخوانیم!!
                      </button>
                    </Link>
                  </div>
                </div>

                <div
                  className="flex flex-col justify-between rounded-3xl p-2 w-full max-w-[280px] shadow-lg hover:scale-105 transition-all vertical-movement bg-white border border-[#E8E8F0]"
                  key=""
                >
                  <div>
                    <Image
                      src="/assets/maghalat/maghale5arz.jpeg"
                      alt="coursePic"
                      width={280}
                      height={160}
                      className="w-full h-[160px] object-cover overflow-hidden mb-4 mx-auto shadow-xl rounded-3xl"
                    />
                    <h1 className="font-bold mb-4 text-lg text-[#000080] line-clamp-2 h-[56px]">
                      صندوق سرمایه‌گذاری
                    </h1>
                    <div className="flex justify-between align-middle p-2">
                      <p className="mb-2 font-fa text-[#1A1A2E]">نویسنده : درخشان</p>
                      <div className="flex text-[#1A1A2E]">
                        <p className="mt-1">00:08:00</p>
                        <ClockIcon className="text-[#D4AF37] w-8 m-0 mr-1" />
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-2">
                    <Link href="cryptocurrency/cryptoEssayFive" className="w-full">
                      <button className="font-fa text-base rounded-full w-full bg-[#D4AF37] text-white hover:bg-[#B8960F] transition-all shadow-md hover:shadow-lg p-2">
                        بخوانیم!!
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroDigitalCurrency;