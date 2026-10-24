import {
  ClockIcon,
  PresentationChartLineIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

const IntroAI = () => {
  return (
    <div className="text-[#1A1A2E] p-6 bg-white">
      <div className="p-4 md:flex md:justify-around md:align-middle container mb-12">
        <div className="flex-col justify-center p-2 w-full">
          <h1 className="font-bold text-3xl mb-12 flex justify-center text-[#000080]">
            دوره هوش مصنوعی با پایتون
          </h1>
          <div className="flex justify-around w-full">
            <div className="flex-col justify-between align-middle m-auto">
              <ClockIcon className="text-[#D4AF37] w-12" />
              <p className="text-[#1A1A2E]">۴۰ ساعت</p>
            </div>
            <div className="flex-col justify-between align-middle m-auto">
              <PresentationChartLineIcon className="text-[#D4AF37] w-12" />
              <p className="text-[#1A1A2E]">۲۰ جلسه</p>
            </div>
            <div className="flex-col justify-between align-middle m-auto">
              <AcademicCapIcon className="text-[#D4AF37] w-12 flex justify-center m-auto" />
              <p className="ml-1 text-[#1A1A2E]">+۱۰۰۰ دانشجو</p>
            </div>
          </div>
        </div>
        <div className="md:w-[600px] rounded-3xl shadow-lg border-2 border-[#D4AF37]/30">
          <video
            src="https://besharatacademy.com/media/videos/AI.mp4"
            controls
            className="w-full rounded-3xl"
          ></video>
        </div>
      </div>

      <p className="leading-relaxed mb-4">
        هوش مصنوعی، فناوری‌ای است که صنایع مختلف را در دهه گذشته متحول کرده و امروز به یکی از پرتقاضاترین حوزه‌های تخصصی بازار کار تبدیل شده است. دوره هوش مصنوعی با پایتون در آموزشگاه بین‌المللی بشارت، برای افرادی طراحی شده که می‌خواهند از مبانی تا پیاده‌سازی پروژه‌های واقعی یادگیری ماشین را به‌صورت اصولی و کاربردی فرا بگیرند. در این دوره، پایتون به‌عنوان زبان اصلی حوزه هوش مصنوعی، از پایه آموزش داده می‌شود و در ادامه، مفاهیم و الگوریتم‌های کلیدی یادگیری ماشین و یادگیری عمیق در قالب پروژه‌های عملی تمرین می‌شوند.
      </p>

      <h2 className="text-2xl font-bold mb-4 mt-8 text-[#000080] border-r-4 border-[#D4AF37] pr-3">
        چرا یادگیری هوش مصنوعی با پایتون؟
      </h2>
      <p className="leading-relaxed mb-4">
        پایتون، زبان برنامه‌نویسی پیشرو در حوزه هوش مصنوعی و علم داده است. سادگی در یادگیری، کتابخانه‌های قدرتمند و اکوسیستم گسترده آن باعث شده که شرکت‌های بزرگ فناوری و تیم‌های پژوهشی، پایتون را به‌عنوان ابزار اصلی توسعه مدل‌های هوش مصنوعی انتخاب کنند. آشنایی با این زبان در کنار مفاهیم یادگیری ماشین، فرصت‌های شغلی گسترده‌ای در حوزه‌هایی مانند تحلیل داده، بینایی ماشین، پردازش زبان طبیعی و توسعه سیستم‌های هوشمند فراهم می‌کند.
      </p>
      <p className="leading-relaxed mb-4">
        این دوره به‌گونه‌ای طراحی شده که برای افراد مبتدی با پیش‌زمینه برنامه‌نویسی و نیز افرادی که تجربه مقدماتی در حوزه داده دارند، قابل بهره‌برداری باشد. تمرکز دوره بر پیاده‌سازی عملی است؛ به این معنا که هر مفهوم پس از آموزش، در قالب تمرین و پروژه در محیط واقعی کدنویسی اجرا می‌شود.
      </p>

      <h2 className="text-2xl font-bold mb-4 mt-8 text-[#000080] border-r-4 border-[#D4AF37] pr-3">
        سرفصل‌های دوره هوش مصنوعی با پایتون
      </h2>

      <h3 className="text-xl font-bold mb-2 mt-6 text-[#000080]">
        ۱. مقدمات و آماده‌سازی محیط توسعه
      </h3>
      <p className="leading-relaxed mb-4">
        نصب و پیکربندی پایتون و ابزارهای توسعه، آشنایی با محیط‌های کاری مخصوص علم داده مانند Jupyter Notebook و Google Colab، مدیریت پکیج‌ها و آشنایی با ساختار پروژه‌های هوش مصنوعی.
      </p>

      <h3 className="text-xl font-bold mb-2 mt-6 text-[#000080]">
        ۲. مبانی زبان پایتون برای علم داده
      </h3>
      <p className="leading-relaxed mb-4">
        مرور ساختارهای پایه پایتون با تمرکز بر کاربرد در علم داده: انواع داده، ساختارهای کنترلی، توابع، ماژول‌ها، کار با فایل و مدیریت خطا. در این بخش، مهارت‌های برنامه‌نویسی مورد نیاز برای تحلیل داده تثبیت می‌شود.
      </p>

      <h3 className="text-xl font-bold mb-2 mt-6 text-[#000080]">
        ۳. کتابخانه‌های کلیدی علم داده
      </h3>
      <p className="leading-relaxed mb-4">
        آشنایی تخصصی با NumPy برای محاسبات عددی و کار با آرایه‌ها، Pandas برای پردازش و تحلیل داده‌های جدولی، و Matplotlib و Seaborn برای مصورسازی داده‌ها. این کتابخانه‌ها ستون فقرات هر پروژه یادگیری ماشین هستند.
      </p>

      <h3 className="text-xl font-bold mb-2 mt-6 text-[#000080]">
        ۴. مبانی ریاضیات و آمار برای هوش مصنوعی
      </h3>
      <p className="leading-relaxed mb-4">
        مرور مفاهیم ضروری جبر خطی، حساب دیفرانسیل و آمار توصیفی و استنباطی با تمرکز بر کاربرد در الگوریتم‌های یادگیری ماشین؛ به‌گونه‌ای که نیاز به پیش‌زمینه ریاضی سنگین نداشته باشید.
      </p>

      <h3 className="text-xl font-bold mb-2 mt-6 text-[#000080]">
        ۵. مقدمه‌ای بر یادگیری ماشین
      </h3>
      <p className="leading-relaxed mb-4">
        آشنایی با مفهوم یادگیری ماشین، تفاوت یادگیری نظارت‌شده و نظارت‌نشده، تفکیک داده به مجموعه‌های آموزش و آزمون، معیارهای ارزیابی مدل و مفاهیم بیش‌برازش و کم‌برازش.
      </p>

      <h3 className="text-xl font-bold mb-2 mt-6 text-[#000080]">
        ۶. الگوریتم‌های یادگیری نظارت‌شده
      </h3>
      <p className="leading-relaxed mb-4">
        پیاده‌سازی الگوریتم‌های طبقه‌بندی و رگرسیون با Scikit-learn؛ شامل رگرسیون خطی و لجستیک، درخت تصمیم، جنگل تصادفی، ماشین بردار پشتیبان و K-نزدیک‌ترین همسایه، همراه با ارزیابی عملکرد هر مدل.
      </p>

      <h3 className="text-xl font-bold mb-2 mt-6 text-[#000080]">
        ۷. الگوریتم‌های یادگیری نظارت‌نشده
      </h3>
      <p className="leading-relaxed mb-4">
        آشنایی با روش‌های خوشه‌بندی مانند K-Means و خوشه‌بندی سلسله‌مراتبی، و تکنیک‌های کاهش ابعاد مانند PCA برای تحلیل داده‌های بدون برچسب.
      </p>

      <h3 className="text-xl font-bold mb-2 mt-6 text-[#000080]">
        ۸. مقدمه‌ای بر یادگیری عمیق و شبکه‌های عصبی
      </h3>
      <p className="leading-relaxed mb-4">
        آشنایی با ساختار شبکه‌های عصبی مصنوعی، توابع فعال‌سازی، الگوریتم پس‌انتشار خطا و معرفی کتابخانه‌های TensorFlow و PyTorch برای پیاده‌سازی مدل‌های یادگیری عمیق.
      </p>

      <h3 className="text-xl font-bold mb-2 mt-6 text-[#000080]">
        ۹. پردازش زبان طبیعی (NLP) و بینایی ماشین
      </h3>
      <p className="leading-relaxed mb-4">
        مروری بر کاربردهای هوش مصنوعی در تحلیل متن و تصویر؛ شامل پیش‌پردازش متن، استخراج ویژگی و معرفی شبکه‌های عصبی پیچشی (CNN) و بازگشتی (RNN).
      </p>

      <h3 className="text-xl font-bold mb-2 mt-6 text-[#000080]">
        ۱۰. پروژه پایانی و پیاده‌سازی عملی
      </h3>
      <p className="leading-relaxed mb-4">
        طراحی و پیاده‌سازی یک پروژه کامل هوش مصنوعی از ابتدا تا انتها؛ شامل تعریف مسئله، آماده‌سازی داده، انتخاب و آموزش مدل، ارزیابی و ارائه نتایج. این پروژه به‌عنوان نمونه‌کار حرفه‌ای هنرجو در بازار کار قابل استفاده است.
      </p>

      <h2 className="text-2xl font-bold mb-4 mt-8 text-[#000080] border-r-4 border-[#D4AF37] pr-3">
        پیش‌نیازهای دوره
      </h2>
      <p className="leading-relaxed mb-4">
        آشنایی مقدماتی با کامپیوتر و منطق برنامه‌نویسی، و همچنین مهارت‌های پایه ICDL برای شرکت در این دوره کافی است. تمام مفاهیم برنامه‌نویسی پایتون و مباحث تخصصی هوش مصنوعی از پایه در دوره آموزش داده می‌شود.
      </p>

      <h2 className="text-2xl font-bold mb-4 mt-8 text-[#000080] border-r-4 border-[#D4AF37] pr-3">
        مخاطبان دوره
      </h2>
      <ul className="list-disc mr-8 mb-4 text-[#D4AF37] font-medium space-y-2">
        <li><span className="text-[#1A1A2E]">دانشجویان و فارغ‌التحصیلان رشته‌های کامپیوتر، مهندسی و علوم داده</span></li>
        <li><span className="text-[#1A1A2E]">برنامه‌نویسانی که قصد ورود به حوزه هوش مصنوعی و یادگیری ماشین دارند</span></li>
        <li><span className="text-[#1A1A2E]">تحلیلگران داده که می‌خواهند مهارت‌های خود را به سطح مدل‌سازی ارتقا دهند</span></li>
        <li><span className="text-[#1A1A2E]">متخصصان سایر حوزه‌ها که به‌دنبال کاربرد هوش مصنوعی در صنعت خود هستند</span></li>
        <li><span className="text-[#1A1A2E]">علاقه‌مندان به ورود به بازار کار تخصصی هوش مصنوعی</span></li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 mt-8 text-[#000080] border-r-4 border-[#D4AF37] pr-3">
        دستاوردهای دوره
      </h2>
      <ul className="list-disc mr-8 mb-4 text-[#D4AF37] font-medium space-y-2">
        <li><span className="text-[#1A1A2E]">تسلط بر زبان برنامه‌نویسی پایتون در سطح کاربردی و تخصصی</span></li>
        <li><span className="text-[#1A1A2E]">توانایی کار حرفه‌ای با کتابخانه‌های NumPy، Pandas و Scikit-learn</span></li>
        <li><span className="text-[#1A1A2E]">پیاده‌سازی الگوریتم‌های یادگیری ماشین بر روی داده‌های واقعی</span></li>
        <li><span className="text-[#1A1A2E]">آشنایی عملی با شبکه‌های عصبی و مبانی یادگیری عمیق</span></li>
        <li><span className="text-[#1A1A2E]">توانایی طراحی و اجرای یک پروژه کامل هوش مصنوعی</span></li>
        <li><span className="text-[#1A1A2E]">آمادگی برای ورود به فرصت‌های شغلی حوزه هوش مصنوعی و علم داده</span></li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 mt-8 text-[#000080] border-r-4 border-[#D4AF37] pr-3">
        ساختار و مدت برگزاری دوره
      </h2>
      <p className="leading-relaxed mb-4">
        این دوره در قالب ۲۰ جلسه و مجموعاً ۴۰ ساعت آموزشی برگزار می‌شود. هر جلسه شامل بخش تئوری و بخش عملی کدنویسی است تا هنرجو مفاهیم را به‌صورت هم‌زمان در محیط کدنویسی تمرین کند. پس از پایان دوره، هنرجویان موفق گواهی پایان دوره معتبر از آموزشگاه بین‌المللی بشارت دریافت می‌کنند.
      </p>

      <h2 className="text-2xl font-bold mb-4 mt-8 text-[#000080] border-r-4 border-[#D4AF37] pr-3">
        چرا آموزشگاه بین‌المللی بشارت؟
      </h2>
      <p className="leading-relaxed mb-4">
        آموزشگاه بین‌المللی بشارت با بیش از ۲۶ سال سابقه فعالیت آموزشی و بهره‌مندی از مجوزهای رسمی سازمان فنی و حرفه‌ای، وزارت آموزش‌وپرورش و وزارت تعاون، کار و رفاه اجتماعی، دوره‌های تخصصی هوش مصنوعی را با تمرکز بر مهارت‌های کاربردی و نیاز واقعی بازار کار برگزار می‌کند. اساتید دوره از متخصصان فعال در پروژه‌های صنعتی هستند و محتوای آموزشی مطابق آخرین استانداردهای جهانی به‌روزرسانی می‌شود.
      </p>

      <p className="leading-relaxed mb-8 font-bold text-[#000080]">
        برای مشاوره و ثبت‌نام در دوره هوش مصنوعی با پایتون، با کارشناسان آموزشگاه بین‌المللی بشارت در تماس باشید.
      </p>
    </div>
  );
};

export default IntroAI;