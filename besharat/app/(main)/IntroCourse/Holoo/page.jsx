import {
    ClockIcon,
    PresentationChartLineIcon,
    AcademicCapIcon,
  } from "@heroicons/react/24/solid";
  const IntroCorel = () => {
    return (
      <div className="text-white p-2">
        <div className="p-4 md:flex md:justify-around md:align-middle text-white container mb-12">
          <div className="flex-col justify-center p-2 w-full">
            <h1 className="font-bold text-3xl mb-12 flex justify-center">
              نرم‌افزار هلو
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
              src="https://besharatacademy.com/media/videos/others.mp4"
              controls
              className="w-full rounded-3xl"
            ></video>
          </div>
        </div>
        <p>دوره حسابداری ویژه بازار کار با نرم‌افزار هلو توسط فنی و حرفه‌ای طراحی شده است تا مهارت‌های کاربردی و عملی حسابداری را به علاقه‌مندان آموزش دهد. نرم‌افزار هلو، یکی از پرکاربردترین ابزارهای حسابداری در ایران، به مدیران مالی و حسابداران این امکان را می‌دهد تا فرآیندهای مالی را به شکلی ساده‌تر و کارآمدتر مدیریت کنند.</p>
        <p>شرکت‌کنندگان در این دوره با نصب و راه‌اندازی نرم‌افزار هلو و محیط کاربری آن آشنا می‌شوند. در ادامه، نحوه تعریف اطلاعات پایه مانند شرکت‌ها، حساب‌ها، مشتریان و تأمین‌کنندگان آموزش داده می‌شود. این بخش به کاربران کمک می‌کند تا ساختار اولیه حسابداری خود را در نرم‌افزار ایجاد کنند و آماده اجرای عملیات مالی شوند.</p>
        <p>از دیگر موضوعات این دوره، ثبت اسناد حسابداری روزانه مانند فاکتورها، رسیدها و پرداخت‌هاست. همچنین مدیریت فروش و خرید، از صدور فاکتور فروش تا کنترل موجودی کالا، در کنار حسابداری انبار و ثبت ورود و خروج کالاها از مواردی است که به صورت عملی آموزش داده می‌شود. این مهارت‌ها برای حسابداران و کسب‌وکارها، به ویژه در مدیریت امور مالی روزمره، ضروری است.</p>
        <p>حسابداری حقوق و دستمزد یکی دیگر از مباحث کلیدی این دوره است. در این بخش، محاسبه حقوق کارکنان، تهیه لیست بیمه و مالیات آموزش داده می‌شود. علاوه بر این، شرکت‌کنندگان می‌توانند گزارش‌های تحلیلی و مدیریتی ایجاد کنند که برای تصمیم‌گیری‌های مالی اهمیت بسیاری دارد. نکات و ترفندهای حرفه‌ای برای افزایش بهره‌وری و حل مشکلات رایج نیز به تفصیل مورد بررسی قرار می‌گیرد.</p>
        <p>دوره با تمرکز بر آموزش عملی و کارگاه‌های گروهی، به شرکت‌کنندگان این امکان را می‌دهد که با مسائل واقعی مواجه شده و مهارت‌های خود را تقویت کنند. آزمون‌های دوره‌ای نیز به ارزیابی پیشرفت آن‌ها کمک می‌کند. در پایان، با دریافت گواهینامه معتبر از فنی و حرفه‌ای، شرکت‌کنندگان آماده ورود به بازار کار خواهند بود. برای ثبت‌نام در این دوره، می‌توانید به آموزشگاه بشارت مراجعه کنید.</p>
      </div>
    );
  };
  
  export default IntroCorel;
  