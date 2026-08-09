import {
  ClockIcon,
  PresentationChartLineIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
const IntroOffice = () => {
  return (
    <div className="text-white p-2">
      <div className="p-4 md:flex md:justify-around md:align-middle text-white container mb-12">
        <div className="flex-col justify-center p-2 w-full">
          <h1 className="font-bold text-3xl mb-12 flex justify-center">
            Office
          </h1>
          <div className="flex justify-around w-full">
            <div className="flex-col justify-between align-middle m-auto">
              <ClockIcon className="text-[#ffd700] w-12" />
              <p>40 ساعت</p>
            </div>
            <div className="flex-col justify-between align-middle m-auto">
              <PresentationChartLineIcon className="text-[#ffd700] w-12" />
              <p>20 جلسه</p>
            </div>
            <div className="flex-col justify-between align-middle m-auto">
              <AcademicCapIcon className="text-[#ffd700] w-12 flex justify-center m-auto" />
              <p className="ml-1">+1000 دانشجو</p>
            </div>
          </div>
        </div>
        <div className="md:w-[600px] rounded-3xl">
          <video
            src="https://besharatacademy.com/media/videos/office.mp4"
            controls
            className="w-full rounded-3xl"
          ></video>
        </div>
      </div>
      <p>
        مهارت office شامل ۲۰ جلسه ۲ ساعته هست و دارای سرفصل‌های ورد، اکسل، اکسس
        و پاورپوینت می‌باشد. حتماً تا حالا برایتان پیش آمده که برای انجام بعضی
        امور کارها و پروژه‌های خود به برنامه‌ها و نرم‌افزارهایی احتیاج پیدا کنید
        که برای شما بتوانند کارهایی مثل تایپ، طراحی اسلاید، برنامه‌ریزی، جدول
        کشی انجام دهد، در این جور مواقع استفاده از برنامه‌های مجموعه مایکروسافت
        آفیس می‌تواند بهترین و کاربردی‌ترین انتخاب برای انجام پروژه های شما
        عزیزان باشد.
      </p>
      <p>
        در ادامه کاربرد بعضی از برنامه‌های مجموعه آفیس را معرفی می‌کنیم. از
        برنامه پاورپوینت در طراحی اسلایدهای گوناگون شامل متن، تصویر، فیلم، جدول،
        نمودار، صدا و ... استفاده می‌کنند و قابلیت تهیه و ساخت ارائه‌های متنی و
        بصری را دارد. از برنامه اکسس برای ساختن و تشکیل پایگاه داده‌های رابطه‌ای
        استفاده می‌شود به طور کلی اکسس دارای ساختار یک بانک اطلاعاتیست که دارای
        ساختار داده مشخص و معینی هستند و اطلاعات در جدول‌هایی ذخیره می‌شوند که
        ساخته شده از فیلدهایی با ساختار داده مشخص شده و تعیین شده است.
      </p>
      <p>از برنامه اکسل در جمع آوری اطلاعات، پردازش اطلاعات و مرتب سازی اطلاعات استفاده می‌شود. مزیت اصلی و مهم‌تر برنامه اکسل قابلیت طبقه‌بندی، تغییر شکل و تغییر فرمت و تهیه گزارش‌های گوناگون و مختلف از اطلاعاتی است که در برگه‌های گوناگون ذخیره می‌شود. با استفاده از اکسل می‌توان تمامی امور و کارهای حسابداری و حسابرسی را انجام داد.</p>
      <p>نرم‌افزار ورد بهترین و کاربردی‌ترین نرم‌افزار واژه پرداز می‌باشد. از برنامه ورد برای تایپ کلمات، جدول، نمودار، فرمول و ... استفاده می‌شود. شما می‌توانید در محیط این برنامه متن‌ها را یادداشت کنید و سایز و اندازه و یا رنگ آنها را تغییر دهید، ویرایش کنید، جابجا کنید، حذف کنید و علاوه بر آن می‌توانید نمودارها، جداول، تصاویر و فرمول نیز به متن خود اضافه کنید.</p>
    </div>
  );
};

export default IntroOffice;
