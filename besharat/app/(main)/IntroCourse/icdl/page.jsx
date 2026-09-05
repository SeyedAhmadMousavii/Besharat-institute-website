import {
  ClockIcon,
  PresentationChartLineIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

const IntroIcdl = () => {
  return (
   <div className="text-[#1A1A2E] p-6 bg-white">
        <div className="p-4 md:flex md:justify-around md:align-middle container mb-12">
          <div className="flex-col justify-center p-2 w-full">
          <h1 className="text-3xl font-bold text-center mb-12 text-[#000080]">
            دوره آموزش ICDL
          </h1>

          <div className="flex justify-around w-full">

            <div className="flex flex-col items-center">
              <ClockIcon className="w-12 text-[#D4AF37]" />
              <p className="mt-2 text-[#1A1A2E]">60 ساعت آموزش</p>
            </div>

            <div className="flex flex-col items-center">
              <PresentationChartLineIcon className="w-12 text-[#D4AF37]" />
              <p className="mt-2 text-[#1A1A2E]">30 جلسه</p>
            </div>

            <div className="flex flex-col items-center">
              <AcademicCapIcon className="w-12 text-[#D4AF37]" />
              <p className="mt-2 text-[#1A1A2E]">+1000 دانشجو</p>
            </div>

          </div>
        </div>

        <div className="md:w-[600px] rounded-3xl mt-8 md:mt-0 shadow-lg border-2 border-[#D4AF37]/30">
          <video
            src="https://besharatacademy.com/media/videos/icdl.mp4"
            controls
            className="w-full rounded-3xl"
          />
        </div>

      </div>

     <div className="mt-12 space-y-8 leading-9 text-justify px-2 md:px-4">

        <h2 className="text-2xl font-bold text-[#D4AF37]">
          دوره آموزش ICDL چیست؟
        </h2>

        <p className="leading-relaxed">
          دوره آموزش ICDL یکی از جامع‌ترین و کاربردی‌ترین دوره‌های آموزش مهارت‌های
          کامپیوتری است که برای تمامی افراد، از دانش‌آموزان و دانشجویان گرفته تا
          کارمندان، صاحبان کسب‌وکار و علاقه‌مندان به دنیای فناوری اطلاعات طراحی
          شده است. این دوره مطابق با استانداردهای بین‌المللی برگزار می‌شود و
          تمامی مهارت‌های پایه و ضروری کار با رایانه را به صورت کاملاً عملی و
          پروژه‌محور آموزش می‌دهد.
        </p>

        <p className="leading-relaxed">
          امروزه تقریباً تمام مشاغل به نوعی با کامپیوتر و نرم‌افزارهای اداری
          سروکار دارند. به همین دلیل یادگیری مهارت‌های ICDL دیگر یک مزیت محسوب
          نمی‌شود، بلکه یک نیاز اساسی برای ورود به بازار کار، ادامه تحصیل و حتی
          انجام امور روزمره است. این دوره به شما کمک می‌کند تا بتوانید با اعتماد
          به نفس از کامپیوتر، اینترنت و نرم‌افزارهای کاربردی استفاده کنید.
        </p>

        <h2 className="text-2xl font-bold text-[#D4AF37]">
          در این دوره چه چیزهایی یاد می‌گیرید؟
        </h2>

        <p className="leading-relaxed">
          در طول این دوره، تمامی مباحث مورد نیاز برای استفاده حرفه‌ای از کامپیوتر
          آموزش داده می‌شود. آموزش‌ها به صورت مرحله به مرحله بوده و همراه با
          تمرین‌های عملی انجام می‌شود تا هنرجو پس از پایان دوره بتواند به راحتی
          وارد محیط کار شود.
        </p>

        <ul className="list-disc pr-6 space-y-2 text-[#1A1A2E]">
          <li>آشنایی با مبانی فناوری اطلاعات (IT)</li>
          <li>آموزش کامل سیستم عامل Windows</li>
          <li>آموزش حرفه‌ای Microsoft Word</li>
          <li>آموزش کامل Microsoft Excel</li>
          <li>آموزش Microsoft Access</li>
          <li>آموزش Microsoft PowerPoint</li>
          <li>آشنایی با اینترنت، ایمیل و خدمات آنلاین</li>
        </ul>

        <h2 className="text-2xl font-bold text-[#D4AF37]">
          نحوه برگزاری کلاس‌ها
        </h2>

        <p className="leading-relaxed">
          کلاس‌های آموزش ICDL در آموزشگاه بشارت با توجه به نیاز هنرجویان در سه
          شیوه مختلف برگزار می‌شوند تا هر فرد بتواند مناسب‌ترین روش آموزش را
          انتخاب کند.
        </p>

        <div className="overflow-x-auto">

          <table className="w-full border border-[#E8E8F0] text-center">

            <thead className="bg-[#D4AF37] text-white">

              <tr>
                <th className="border border-[#E8E8F0] p-3">نوع کلاس</th>
                <th className="border border-[#E8E8F0] p-3">تعداد جلسات</th>
                <th className="border border-[#E8E8F0] p-3">مدت هر جلسه</th>
              </tr>

            </thead>

           <tbody className="text-[#1A1A2E]">
  <tr>
    <td className="border border-[#E8E8F0] p-4">گروهی (عادی)</td>
    <td className="border border-[#E8E8F0] p-4">30 جلسه</td>
    <td className="border border-[#E8E8F0] p-4">2 ساعت</td>
  </tr>

  <tr>
    <td className="border border-[#E8E8F0] p-4">گروهی (فشرده)</td>
    <td className="border border-[#E8E8F0] p-4">15 جلسه</td>
    <td className="border border-[#E8E8F0] p-4">3 ساعت</td>
  </tr>

  <tr>
    <td className="border border-[#E8E8F0] p-4">نیمه خصوصی</td>
    <td className="border border-[#E8E8F0] p-4">12 جلسه</td>
    <td className="border border-[#E8E8F0] p-4">3 ساعت</td>
  </tr>

  <tr>
    <td className="border border-[#E8E8F0] p-4">خصوصی</td>
    <td className="border border-[#E8E8F0] p-4">12 جلسه</td>
    <td className="border border-[#E8E8F0] p-4">3 ساعت</td>
  </tr>
</tbody>

          </table>

        </div>

        <p className="leading-relaxed">
          کلاس‌های گروهی با تعداد مناسب هنرجویان برگزار می‌شوند و علاوه بر کیفیت
          آموزشی بالا، هزینه مقرون‌به‌صرفه‌تری دارند. کلاس‌های نیمه خصوصی و
          خصوصی نیز برای افرادی مناسب هستند که قصد دارند در مدت زمان کوتاه‌تر،
          با تمرکز بیشتر و برنامه آموزشی اختصاصی مهارت‌های ICDL را فرا بگیرند.
        </p>

        <h2 className="text-2xl font-bold text-[#D4AF37]">
          مزایای یادگیری ICDL
        </h2>

        <p className="leading-relaxed">
          یادگیری ICDL علاوه بر افزایش مهارت‌های کامپیوتری، باعث افزایش سرعت
          انجام کارها، کاهش خطاهای کاری و افزایش اعتماد به نفس در استفاده از
          رایانه می‌شود. همچنین داشتن این مهارت‌ها شانس استخدام در شرکت‌ها،
          سازمان‌ها، بانک‌ها، مؤسسات خصوصی و ادارات دولتی را افزایش می‌دهد.
        </p>

        <p className="leading-relaxed">
          مدرک ICDL یکی از معتبرترین مدارک مهارت‌های کامپیوتر در جهان است که در
          بیش از 100 کشور اعتبار دارد و در بسیاری از سازمان‌ها به عنوان یکی از
          شرایط استخدام یا ارتقاء شغلی شناخته می‌شود. علاوه بر این، یادگیری ICDL
          مسیر ورود شما به حوزه‌هایی مانند برنامه‌نویسی، طراحی سایت، حسابداری،
          گرافیک، تولید محتوا و سایر شاخه‌های فناوری اطلاعات را هموار می‌کند.
        </p>

        <h2 className="text-2xl font-bold text-[#D4AF37]">
          این دوره مناسب چه افرادی است؟
        </h2>

        <ul className="list-disc pr-6 space-y-2 text-[#1A1A2E]">
          <li>دانش‌آموزان</li>
          <li>دانشجویان</li>
          <li>کارمندان و کارجویان</li>
          <li>صاحبان کسب‌وکار</li>
          <li>افرادی که قصد مهاجرت دارند.</li>
          <li>علاقه‌مندان به ورود به حوزه فناوری اطلاعات (IT)</li>
          <li>تمام افرادی که می‌خواهند کار با کامپیوتر را از پایه و به صورت اصولی یاد بگیرند.</li>
        </ul>

        <h2 className="text-2xl font-bold text-[#D4AF37]">
          چرا آموزشگاه بشارت؟
        </h2>

        <p className="leading-relaxed">
          آموزشگاه بشارت با سابقه چندین سال آموزش مهارت‌های کامپیوتری، تاکنون
          بیش از هزار هنرجو را وارد بازار کار کرده است. تمامی کلاس‌ها توسط مدرس
          باتجربه برگزار شده و آموزش‌ها کاملاً عملی، پروژه‌محور و مطابق با نیاز
          بازار کار ارائه می‌شوند. هدف ما تنها ارائه مدرک نیست؛ بلکه تلاش
          می‌کنیم هر هنرجو پس از پایان دوره بتواند به صورت حرفه‌ای از مهارت‌های
          خود در محیط کار و زندگی استفاده کند.
        </p>

      </div>

    </div>
  );
};

export default IntroIcdl;