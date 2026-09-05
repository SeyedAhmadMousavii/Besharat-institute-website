import {
    ClockIcon,
    PresentationChartLineIcon,
    AcademicCapIcon,
  } from "@heroicons/react/24/solid";
  
  const IntroGoldsmithing = () => {
    return (
      <div className="p-6 bg-white text-[#1A1A2E]">
        <div className="p-4 md:flex md:justify-around md:align-middle container mb-12">
          <div className="flex-col justify-center p-2 w-full">
            <h1 className="font-bold text-3xl mb-12 flex justify-center text-[#000080]">
            طلاسازی
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
              src="https://besharatacademy.com/media/videos/goldsmithing.mp4"
              controls
              className="w-full rounded-3xl"
            ></video>
          </div>
        </div>
        <p className="leading-relaxed mb-2">آموزشگاه بشارت دوره جامع و تخصصی طلاسازی را از پایه تا سطوح پیشرفته ارائه می‌دهد. صنعت طلا و جواهرسازی همواره یکی از حرفه‌های باارزش و پرطرفدار در طول تاریخ بوده است، و این فنون به‌عنوان مهارت‌های ظریف و پر اهمیت شناخته می‌شوند. </p>
        <p className="leading-relaxed mb-2">در این دوره، هنرجویان با مبانی و تکنیک‌های پیشرفته جواهرسازی و زرگری آشنا خواهند شد. از جمله ابزارها و تجهیزات آموزشی می‌توان به ابزار پولیش، ابزار فرز، چرخ نورد و سایر دستگاه‌های حرفه‌ای مرتبط اشاره کرد. </p>
        <p className="leading-relaxed mb-2">هدف این دوره، آموزش عملی ساخت طلا و جواهر تحت نظر اساتید مجرب و باتجربه است. در پایان دوره، شرکت‌کنندگان موفق به دریافت مدرک بین‌المللی معتبر از موسسه آموزشی بین‌المللی ترید ترین خواهند شد. </p>
        <p className="leading-relaxed mb-2">با اتمام این دوره آموزشی، شما قادر خواهید بود ایده‌های طراحی خود را به واقعیت تبدیل کرده و جواهرات با کیفیت و خلاقانه‌ای تولید کنید. از آنجایی که پیش‌نیاز این دوره تنها ذوق، استعدادیابی و علاقه شماست، بنابراین با تکیه بر انگیزه و هنر خود و استفاده از محتوای علمی و عملی جامع ما، می‌توانید وارد بازار داغ طلا و جواهرات شوید و در این عرصه به موفقیت‌های چشمگیری دست یابید.
        </p>
        <p className="leading-relaxed">با ما همراه شوید و اولین قدم را به سوی آینده‌ای پرفروغ در دنیای طلا و جواهر بردارید!</p>
      </div>
    );
  };
  
  export default IntroGoldsmithing;