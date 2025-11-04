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
            Corel
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
            src="https://besharatacademy.com/media/videos/corel.mp4"
            controls
            className="w-full rounded-3xl"
          ></video>
        </div>
      </div>
      <p>
        دوره Corel یک دوره آموزشی 12 جلسه‌ای است که هر جلسه آن 2 ساعت به طول
        می‌انجامد. این دوره به منظور آموزش تخصصی نرم‌افزار CorelDRAW طراحی شده
        است و مناسب افرادی است که قصد دارند مهارت‌های خود را در زمینه طراحی
        گرافیکی و وکتور به سطح پیشرفته‌ای ارتقا دهند. CorelDRAW یکی از
        قدرتمندترین ابزارهای طراحی گرافیک و وکتور است که در صنایع مختلفی مانند
        چاپ، تبلیغات، طراحی لوگو و بسته‌بندی کاربرد دارد.
      </p>
      <p>در بخش ابتدایی این دوره، دانشجویان با محیط کاربری CorelDRAW و ابزارهای پایه‌ای آن آشنا می‌شوند. آن‌ها می‌آموزند که چگونه از ابزارهای ترسیم وکتور، انتخاب و تغییر اندازه اشکال، و ابزارهای متن برای ایجاد طرح‌های ابتدایی استفاده کنند. همچنین، مباحث مربوط به مدیریت رنگ‌ها و پالت‌های رنگی نیز در این بخش مورد بررسی قرار می‌گیرد تا دانشجویان بتوانند طرح‌های خود را با دقت و کیفیت بالا ایجاد کنند.</p>
      <p>بخش دوم دوره به مباحث پیشرفته‌تر CorelDRAW می‌پردازد. در این بخش، دانشجویان با تکنیک‌های پیشرفته‌تر طراحی وکتور، ایجاد و استفاده از افکت‌های ویژه، و ابزارهای پیشرفته‌تر برای مدیریت و ویرایش تصاویر آشنا می‌شوند. همچنین، مفاهیمی نظیر لایه‌بندی، ماسک‌گذاری و ایجاد الگوهای پیچیده‌تر نیز تدریس می‌شود. این مباحث به دانشجویان کمک می‌کند تا طرح‌های گرافیکی پیچیده‌تر و حرفه‌ای‌تری ایجاد کنند.</p>
      <p>در نهایت، دانشجویان با پروژه‌های عملی و کاربردی به دانش خود عمق بیشتری می‌بخشند. این پروژه‌ها شامل طراحی لوگو، پوستر، بروشور و بسته‌بندی محصولات است که به دانشجویان کمک می‌کند تا مهارت‌های خود را در دنیای واقعی به کار بگیرند. دوره تکمیلی Corel به دانشجویان این امکان را می‌دهد تا با تسلط بر ابزارها و تکنیک‌های پیشرفته، آماده ورود به بازار کار حرفه‌ای شوند و در زمینه‌های مختلف طراحی گرافیک به فعالیت بپردازند.</p>
      
    </div>
  );
};

export default IntroCorel;
