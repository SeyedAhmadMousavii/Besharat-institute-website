"use client";
import { Button } from "@material-tailwind/react";
const AdminPAge = () => {
  return (
    <div>
      <div className="card flex flex-col-reverse md:flex-row justify-between p-4 text-white w-[60%] m-auto mb-28">
        <div className="mt-8">
          <h1 className="text-[#ffd700] text-3xl font-bold text-center md:text-right -mt-8">
             امید فرامرزی
          </h1>
            <p>کارشناس تولید محتوا | متخصص بازاریابی دیجیتال و تبلیغات</p>
            <p>از سال ۱۴۰۰ فعالیت تخصصی خود را در حوزه تولید محتوای تبلیغاتی و صنعتی آغاز کرده است. او با همکاری با برندهای مطرح کشور، توانسته محتوایی متمایز و اثرگذار خلق کند که بازخوردهای گسترده و بازدیدهای میلیونی به همراه داشته است. مهارت‌های او شامل کارگردانی و فیلم‌برداری تبلیغاتی، تدوین حرفه‌ای، نگارش سناریوی تبلیغاتی و برندینگ، طراحی کمپین‌های دیجیتال، مدیریت و هدایت تیم‌های تولید محتوا، آموزش نیروهای تازه‌کار و رهبری پروژه‌های تبلیغاتی در مقیاس بزرگ است. در کارنامه حرفه‌ای او تولید بیش از ۱۰۰ محتوای ویدیویی با بازدید میلیونی، طراحی و مدیریت ۲۰ کمپین تبلیغاتی موفق و همکاری مداوم با برندهای سرشناس کشور دیده می‌شود. هدف او گسترش فعالیت‌های حرفه‌ای در سطح بین‌المللی و طراحی کمپین‌هایی است که ضمن تثبیت برندها در ذهن مخاطبان، مسیر رشد آن‌ها را سرعت بخشند.</p>
            
           <a href="./assets/file/MyResume-22[www.cvbuilder.me]689.pdf" download>
            <Button className="font-fa text-base mt-6 rounded-full w-full bg-[#ffd700] text-blue-900">
                رزومه
            </Button>
          </a>
        </div>
        <div className="image w-[300px] text-center md:w-[1500px] -mr-6 md:m-0  m-auto flex flex-row">
          <img
            src="./assets/partner/Faramarzi.jpg"
            alt="partner"
            className="w-full rounded-2xl m-5"
          />
        </div>
      </div>
      <div className="card flex flex-col-reverse md:flex-row justify-between p-4 text-white w-[60%] m-auto mb-28">
        <div className="mt-8">
          <h1 className="text-[#ffd700] text-3xl font-bold text-center md:text-right -mt-8">
             علیرضا نیکومقام
          </h1>
             <p>کارشناس تولید محتوا | متخصص بازاریابی دیجیتال و تبلیغات</p>
          <p>از سال ۱۴۰۰ به‌صورت تخصصی در حوزه تولید محتوای صنعتی و تبلیغاتی فعالیت می‌کند. او با همکاری با برندهای مطرح کشور و تولید محتوای اثرگذار، موفق به کسب میلیون‌ها بازدید و کمک به رشد کسب‌وکارهای متعدد شده است. مهارت‌های او شامل فیلم‌برداری حرفه‌ای، تدوین و پس‌تولید، سناریونویسی تبلیغاتی و صنعتی، طراحی و مدیریت کمپین‌های تبلیغاتی، مدیریت تیم‌های تولید محتوا، آموزش و مربی‌گری کارآموزان و رهبری پروژه‌های خلاقانه است. در کارنامه حرفه‌ای‌اش بیش از ۱۰۰ محتوای ویدیویی با بازدید میلیونی، مدیریت بیش از ۲۰ کمپین تبلیغاتی موفق و همکاری گسترده با برندهای صنعتی و تجاری دیده می‌شود. هدف اصلی او توسعه و ارتقای صنعت تولید محتوای تبلیغاتی در سطح بین‌المللی و خلق کمپین‌ها و محتوایی است که علاوه بر درگیر کردن مخاطب، موجب رشد واقعی برندها و ماندگاری در ذهن آنها شود.</p>
          
          <a href="./assets/file/MyResume-754[www.cvbuilder.me]143.pdf" download>
            <Button className="font-fa text-base mt-6 rounded-full w-full bg-[#ffd700] text-blue-900">
                رزومه
            </Button>
          </a>
        </div>
        <div className="image w-[300px] text-center md:w-[1500px] -mr-6 md:m-0  m-auto flex flex-row">
          <img
            src="./assets/partner/Nikoo.jpg"
            alt="partner"
            className="w-full rounded-2xl m-5"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminPAge;
