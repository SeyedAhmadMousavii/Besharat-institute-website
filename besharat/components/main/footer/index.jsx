"use client";

import {
  BookOpenIcon,
  LinkIcon,
  QuestionMarkCircleIcon,
  ArrowDownOnSquareIcon,
  ChevronDoubleUpIcon,
  UserGroupIcon,
  CurrencyDollarIcon
} from "@heroicons/react/24/outline";
import Image from "next/image";

const clickHandler = () => {};

const links = [
  {
    name: "دوره های آموزشی",
    href: "courses",
    logo: <BookOpenIcon className="w-6 h-6 text-[#D4AF37]" />, 
  },
  {
    name: "درباره ما",
    href: "aboutUS",
    logo: <QuestionMarkCircleIcon className="w-6 h-6 text-[#D4AF37]" />, 
  },
  {
    name: "ارتباط با ما",
    href: "contact",
    logo: <LinkIcon className="w-6 h-6 text-[#D4AF37]" />, 
  },
   {
    name: "تاجر شو",
    href: "/TajershooPage",
    logo: <CurrencyDollarIcon className="w-6 h-6 text-[#D4AF37]" />, 
  },
  {
    name: "رزومه اساتید",
    href: "/resume",
    logo: <UserGroupIcon className="w-6 h-6 text-[#D4AF37]" />, 
  },
];

export default function Footer() {
  return (
    <div className="mt-10">
    
      <div className="bg-white rounded-tl-2xl rounded-tr-2xl h-auto hidden sm:flex sm:flex-row border-t-4 border-[#D4AF37] shadow-lg"> 
        <div className="block md:flex md:justify-around md:align-middle container mx-auto pt-6 pb-6">
          <div className="flex-col justify-around align-middle">
            <div className="flex flex-col lg:flex-row justify-center items-center">
              <div className="mr-3">
             
                <Image
                  src="/assets/brand_logo.png"
                  alt="brand-logo"
                  width={128}
                  height={96}
                  className="w-[150px] h-auto object-contain"
                  quality={85}
                />
              </div>
              <div className="flex-col justify-around align-middle mr-4 mt-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-[#000080] text-center md:text-start"> {/* ✅ سرمه‌ای */}
                  آموزشگاه بشــــــــارت
                </h1>
                <h1 className="text-lg text-center md:text-start text-[#D4AF37]"> {/* ✅ طلایی */}
                  کامپیوتر | حسابداری | نقشه کشی | ارز دیجیتال
                </h1>
              </div>
            </div>
            <div className="md:max-w-lg w-auto p-3 md:w-full mt-5">
              <p className="text-base text-center md:text-start mb-4 md:mb-2 text-[#1A1A2E] leading-relaxed"> {/* ✅ متن تیره */}
               آموزشگاه بین‌المللی بشارت، از سال ۱۳۷۹ به مدیریت و بنیان‌گذاری ساناز فراهانی، در کشور عزیزمان ایران، به‌عنوان مرجع تخصصی مهارت‌آموزی فعالیت می‌کند. این مجموعه با گذر از حوزه‌های بنیادین فناوری اطلاعات ، IT ، حسابداری ، نقشه‌کشی و با بهره‌گیری از متدولوژی‌های نوین آموزشی، اکنون بر حوزه‌های استراتژیک هوش مصنوعی AI ، بازارهای مالی بین المللی (FOREX، کریپتو، بورس) و مدیریت ارشد کسب و کار(DBA وMBA  )تمرکز دارد. هدف ما، توسعه سرمایه انسانیِ توانمند، هم‌ترازسازی مهارت‌ها با استانداردهای جهانی و ارتقای قابلیت رقابت‌پذیری برای حضور اثربخش در عرصه‌های جهانی است.
              </p>
   <div className="flex justify-around mt-4">
  <div className="inline-flex justify-center align-center rounded-full text-[#D4AF37] hover:bg-[#F8F9FA] p-2 text-center hover:scale-[150%] transform transition duration-200">
    <a href="https://www.instagram.com/behsratacademy" aria-label="اینستاگرام">
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        role="img"
        viewBox="0 0 24 24"
        className="w-7 h-7 hover:text-[#E1306C]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path>
      </svg>
    </a>
  </div>
  <div className="inline-flex justify-center align-center rounded-full text-[#D4AF37] hover:bg-[#F8F9FA] p-2 text-center hover:scale-[150%] transform transition duration-200">
    <a href="https://wa.me/989302758881?text=test" aria-label="واتساپ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-7 h-7 hover:text-[#25D366]"
        fill="currentColor"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  </div>
  <div className="inline-flex justify-center align-center rounded-full text-[#D4AF37] hover:bg-[#F8F9FA] p-2 text-center hover:scale-[150%] transform transition duration-200">
    <a href="https://t.me/besharatacademy" aria-label="تلگرام">
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        role="img"
        viewBox="0 0 24 24"
        className="w-7 h-7 hover:text-[#26A5E4]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"></path>
      </svg>
    </a>
  </div>
  <div className="inline-flex justify-center align-center rounded-full text-[#D4AF37] hover:bg-[#F8F9FA] p-2 text-center hover:scale-[150%] transform transition duration-200">
    <a href="https://www.aparat.com/besharatacademy" aria-label="آپارات">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-7 h-7 hover:text-[#E50010]"
        fill="currentColor"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
      </svg>
    </a>
  </div>
</div>
            </div>
          </div>
          <div>
            <div className="w-full py-4">
              <div className="flex flex-col gap-4">
                <h1 className="text-center font-bold text-[#000080] border-b-2 border-[#D4AF37] text-2xl pb-4"> {/* ✅ سرمه‌ای با حاشیه طلایی */}
                  بخش های سایت
                </h1>

                {links
                  ? links.map((link, i) => (
                      <a
                        key={i}
                        href={link.href}
                        className="flex gap-x-2 justify-center md:justify-start rounded-xl pr-3 md:p-1 hover:text-[#000080] cursor-pointer transition-colors" // ✅ سرمه‌ای برای hover
                      >
                        {link.logo}
                        <h1 className="text-lg text-[#1A1A2E] hover:text-[#000080] transition-colors">{link.name}</h1> 
                      </a>
                    ))
                  : null}
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>

     
      <div className="block sm:hidden">
        <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-[#D4AF37] rounded-full bottom-4 left-1/2 shadow-lg overflow-hidden"> {/* ✅ حاشیه طلایی */}
          <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
            <button
              data-tooltip-target="tooltip-home"
              type="button"
              className="hover:bg-[#F8F9FA] inline-flex flex-col items-center justify-center px-5 rounded-l-full transition-colors"
            >
              <a href="./courses" className="text-[#1A1A2E] hover:text-[#D4AF37] transition-colors">
                <BookOpenIcon className="w-8 h-8" />
              </a>
            </button>
            <div
              id="tooltip-home"
              role="tooltip"
              className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
            ></div>
            <button
              data-tooltip-target="tooltip-wallet"
              type="button"
              className="hover:bg-[#F8F9FA] inline-flex flex-col items-center justify-center px-5 transition-colors"
            >
              <a href="./aboutUs" className="text-[#1A1A2E] hover:text-[#D4AF37] transition-colors">
                <QuestionMarkCircleIcon className="w-8 h-8" />
              </a>
            </button>
            <div
              id="tooltip-wallet"
              role="tooltip"
              className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
            ></div>
            <div className="flex items-center justify-center">
              <button
                data-tooltip-target="tooltip-new"
                type="button"
                onClick={clickHandler}
                className="inline-flex items-center justify-center w-10 h-10 font-medium bg-[#000080] rounded-full hover:bg-[#B8960F] group focus:ring-4 focus:ring-[#D4AF37]/50 focus:outline-none transition-colors shadow-md" 
              >
                <a href="#top">
                  <ChevronDoubleUpIcon className="w-7 h-7 text-[#D4AF37]" /> 
                </a>
              </button>
            </div>
            <div
              id="tooltip-new"
              role="tooltip"
              className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
            ></div>
            <button
              data-tooltip-target="tooltip-settings"
              type="button"
              className="hover:bg-[#F8F9FA] inline-flex flex-col items-center justify-center px-5 transition-colors"
            >
              <a href="contact" className="text-[#1A1A2E] hover:text-[#D4AF37] transition-colors">
                <ArrowDownOnSquareIcon className="w-8 h-8" />
              </a>
            </button>
            <div
              id="tooltip-settings"
              role="tooltip"
              className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
            ></div>
            <button
              data-tooltip-target="tooltip-profile"
              type="button"
              className="hover:bg-[#F8F9FA] inline-flex flex-col items-center justify-center px-5 rounded-r-full transition-colors"
            >
              <a href="resume" className="text-[#1A1A2E] hover:text-[#D4AF37] transition-colors">
                <UserGroupIcon className="w-8 h-8" />
              </a>
            </button>
            <div
              id="tooltip-profile"
              role="tooltip"
              className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}