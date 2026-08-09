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

const clickHandler = () => {};

const links = [
  {
    name: "دوره های آموزشی",
    href: "courses",
    logo: <BookOpenIcon className="w-6 h-6 text-[#ffd700]" />,
  },
  {
    name: "درباره ما",
    href: "aboutUS",
    logo: <QuestionMarkCircleIcon className="w-6 h-6 text-[#ffd700]" />,
  },
  {
    name: "ارتباط با ما",
    href: "contact",
    logo: <LinkIcon className="w-6 h-6 text-[#ffd700]" />,
  },
   {
    name: "تاجر شو",
    href: "/TajershooPage",
    logo: <CurrencyDollarIcon className="w-6 h-6 text-[#ffd700]" />,
  },
  {
    name: "رزومه اساتید",
    href: "/resume",
    logo: <UserGroupIcon className="w-6 h-6 text-[#ffd700]" />,
  },
  // {
  //   name: "ثبت سفارش",
  //   href: "ordering",
  //   logo: <ArrowDownOnSquareIcon className="w-6 h-6 text-[#ffd700]" />,
  // },
];

export default function Footer() {
  return (
    <div className="mt-10">
      <div className="bg-[#020621] rounded-tl-2xl rounded-tr-2xl h-auto hidden sm:flex sm:flex-row">
        <div className=" block md:flex md:justify-around md:align-middl container mx-auto pt-6 pb-6">
          <div className="flex-col justify-around align-middle">
            <div className="flex flex-col lg:flex-row justify-center items-center">
              <div className="mr-3">
                <img
                  src="/assets/brand_logo.png"
                  alt="brand-logo"
                  className="w-32 h-24"
                />
              </div>
              <div className="flex-col justify-around align-middle mr-4">
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3 text-center md:text-start">
                  آموزشگاه بشــــــــارت
                </h1>
                <h1 className="text-lg text-center md:text-start text-[#ffd700]">
                  کامپیوتر | حسابداری | نقشه کشی | ارز دیجیتال
                </h1>
              </div>
            </div>
            <div className="md:max-w-lg w-auto p-3 md:w-full mt-5">
              <p className="text-base text-center md:text-start mb-4 md:mb-2 text-white">
               آموزشگاه بین‌المللی بشارت، از سال ۱۳۷۹ به مدیریت و بنیان‌گذاری ساناز فراهانی، در کشور عزیزمان ایران، به‌عنوان مرجع تخصصی مهارت‌آموزی فعالیت می‌کند. این مجموعه با گذر از حوزه‌های بنیادین فناوری اطلاعات ، IT ، حسابداری ، نقشه‌کشی و با بهره‌گیری از متدولوژی‌های نوین آموزشی، اکنون بر حوزه‌های استراتژیک هوش مصنوعی AI ، بازارهای مالی بین المللی (FOREX، کریپتو، بورس) و مدیریت ارشد کسب و کار(DBA وMBA  )تمرکز دارد. هدف ما، توسعه سرمایه انسانیِ توانمند، هم‌ترازسازی مهارت‌ها با استانداردهای جهانی و ارتقای قابلیت رقابت‌پذیری برای حضور اثربخش در عرصه‌های جهانی است.
              </p>
              <div className="flex justify-around mt-4">
                <div className="inline-flex justify-center align-center rounded-full text-[#ffd700] hover:bg-gray-200 p-2 text-center hover:scale-[150%] transform transition duration-200">
                  <a href="https://www.instagram.com/behsratacademy">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      role="img"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 hover:text-red-600 "
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path>
                    </svg>
                  </a>
                </div>
                <div className="inline-flex justify-center align-center rounded-full text-[#ffd700] hover:bg-gray-200 p-2 text-center hover:scale-[150%] transform transition duration-200">
                  <a href="https://wa.me/989302758881?text=test">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0,0,256,256"
                      className="w-8 h-8"
                    >
                      <g
                        fill="none"
                        fillRule="none"
                        stroke="none"
                        strokeWidth="1"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="10"
                        strokeDasharray=""
                        strokeDashoffset="0"
                        fontFamily="none"
                        fontWeight="none"
                        fontSize="none"
                        textAnchor="none"
                      >
                        <g transform="scale(5.33333,5.33333)">
                          <path
                            d="M4.868,43.303l2.694,-9.835c-1.662,-2.878 -2.536,-6.144 -2.535,-9.489c0.005,-10.465 8.521,-18.979 18.987,-18.979c5.079,0.002 9.845,1.979 13.43,5.566c3.584,3.588 5.558,8.356 5.556,13.428c-0.004,10.465 -8.522,18.98 -18.986,18.98c-0.001,0 0,0 0,0h-0.008c-3.177,-0.001 -6.3,-0.798 -9.073,-2.311z"
                            fill="#020621"
                            fillRule="nonzero"
                          ></path>
                          <path
                            d="M4.868,43.803c-0.132,0 -0.26,-0.052 -0.355,-0.148c-0.125,-0.127 -0.174,-0.312 -0.127,-0.483l2.639,-9.636c-1.636,-2.906 -2.499,-6.206 -2.497,-9.556c0.004,-10.742 8.745,-19.48 19.486,-19.48c5.21,0.002 10.105,2.031 13.784,5.713c3.679,3.683 5.704,8.577 5.702,13.781c-0.004,10.741 -8.746,19.48 -19.486,19.48c-3.189,-0.001 -6.344,-0.788 -9.144,-2.277l-9.875,2.589c-0.042,0.012 -0.084,0.017 -0.127,0.017z"
                            fill="#020621"
                            fillRule="nonzero"
                          ></path>
                          <path
                            d="M24.014,5c5.079,0.002 9.845,1.979 13.43,5.566c3.584,3.588 5.558,8.356 5.556,13.428c-0.004,10.465 -8.522,18.98 -18.986,18.98h-0.008c-3.177,-0.001 -6.3,-0.798 -9.073,-2.311l-10.065,2.64l2.694,-9.835c-1.662,-2.878 -2.536,-6.144 -2.535,-9.489c0.005,-10.465 8.521,-18.979 18.987,-18.979M24.014,42.974v0v0M24.014,42.974v0v0M24.014,4v0c-11.016,0 -19.982,8.962 -19.987,19.979c-0.001,3.367 0.849,6.685 2.461,9.622l-2.585,9.439c-0.094,0.345 0.002,0.713 0.254,0.967c0.19,0.192 0.447,0.297 0.711,0.297c0.085,0 0.17,-0.011 0.254,-0.033l9.687,-2.54c2.828,1.468 5.998,2.243 9.197,2.244c11.024,0 19.99,-8.963 19.995,-19.98c0.002,-5.339 -2.075,-10.359 -5.848,-14.135c-3.775,-3.777 -8.796,-5.858 -14.139,-5.86z"
                            fill="#ffd700"
                            fillRule="nonzero"
                          ></path>
                          <path
                            d="M35.176,12.832c-2.98,-2.982 -6.941,-4.625 -11.157,-4.626c-8.704,0 -15.783,7.076 -15.787,15.774c-0.001,2.981 0.833,5.883 2.413,8.396l0.376,0.597l-1.595,5.821l5.973,-1.566l0.577,0.342c2.422,1.438 5.2,2.198 8.032,2.199h0.006c8.698,0 15.777,-7.077 15.78,-15.776c0.001,-4.215 -1.638,-8.179 -4.618,-11.161z"
                            fill="#ffd700"
                            fillRule="nonzero"
                          ></path>
                          <path
                            d="M19.268,16.045c-0.355,-0.79 -0.729,-0.806 -1.068,-0.82c-0.277,-0.012 -0.593,-0.011 -0.909,-0.011c-0.316,0 -0.83,0.119 -1.265,0.594c-0.435,0.475 -1.661,1.622 -1.661,3.956c0,2.334 1.7,4.59 1.937,4.906c0.237,0.316 3.282,5.259 8.104,7.161c4.007,1.58 4.823,1.266 5.693,1.187c0.87,-0.079 2.807,-1.147 3.202,-2.255c0.395,-1.108 0.395,-2.057 0.277,-2.255c-0.119,-0.198 -0.435,-0.316 -0.909,-0.554c-0.474,-0.238 -2.807,-1.385 -3.242,-1.543c-0.435,-0.158 -0.751,-0.237 -1.068,0.238c-0.316,0.474 -1.225,1.543 -1.502,1.859c-0.277,0.317 -0.554,0.357 -1.028,0.119c-0.474,-0.238 -2.002,-0.738 -3.815,-2.354c-1.41,-1.257 -2.362,-2.81 -2.639,-3.285c-0.277,-0.474 -0.03,-0.731 0.208,-0.968c0.213,-0.213 0.474,-0.554 0.712,-0.831c0.237,-0.277 0.316,-0.475 0.474,-0.791c0.158,-0.317 0.079,-0.594 -0.04,-0.831c-0.117,-0.238 -1.039,-2.584 -1.461,-3.522z"
                            fill="#020621"
                            fillRule="evenodd"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </a>
                </div>
                <div className="inline-flex justify-center align-center rounded-full text-[#ffd700] hover:bg-gray-200 p-2 text-center hover:scale-[150%] transform transition duration-200">
                  <a href="https://t.me/besharatacademy">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      role="img"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 hover:text-blue-600"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"></path>
                    </svg>
                  </a>
                </div>
                <div className="inline-flex justify-center align-center rounded-full text-[#ffd700] hover:bg-gray-200 p-2 text-center hover:scale-[150%] transform transition duration-200">
                  <a href="https://www.aparat.com/besharatacademy">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0,0,256,256"
                    >
                      <g
                        fill="#ffd700"
                        fillRule="nonzero"
                        stroke="none"
                        strokeWidth="1"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="10"
                        strokeDasharray=""
                        strokeDashoffset="0"
                        fontFamily="none"
                        fontWeight="none"
                        fontSize="none"
                        textAnchor="none"
                      >
                        <g transform="scale(5.33333,5.33333)">
                          <path d="M21.881,6.136l-4.315,-0.974c-3.52,-0.795 -7.017,1.414 -7.812,4.934l-0.983,4.351c2.832,-4.497 7.586,-7.659 13.11,-8.311zM6.136,26.119l-0.974,4.315c-0.795,3.52 1.414,7.017 4.934,7.812l4.351,0.983c-4.497,-2.833 -7.659,-7.586 -8.311,-13.11zM37.904,9.754l-4.351,-0.983c4.497,2.832 7.659,7.586 8.311,13.109l0.974,-4.315c0.795,-3.518 -1.414,-7.016 -4.934,-7.811zM26.119,41.864l4.315,0.974c3.52,0.795 7.017,-1.414 7.812,-4.934l0.983,-4.351c-2.832,4.497 -7.586,7.659 -13.11,8.311z"></path>
                          <path d="M24,8c-8.837,0 -16,7.163 -16,16c0,8.837 7.163,16 16,16c8.837,0 16,-7.163 16,-16c0,-8.837 -7.163,-16 -16,-16zM20,13c2.209,0 4,1.791 4,4c0,2.209 -1.791,4 -4,4c-2.209,0 -4,-1.791 -4,-4c0,-2.209 1.791,-4 4,-4zM17,32c-2.209,0 -4,-1.791 -4,-4c0,-2.209 1.791,-4 4,-4c2.209,0 4,1.791 4,4c0,2.209 -1.791,4 -4,4zM22,24c0,-1.105 0.895,-2 2,-2c1.105,0 2,0.895 2,2c0,1.105 -0.895,2 -2,2c-1.105,0 -2,-0.895 -2,-2zM28,35c-2.209,0 -4,-1.791 -4,-4c0,-2.209 1.791,-4 4,-4c2.209,0 4,1.791 4,4c0,2.209 -1.791,4 -4,4zM31,24c-2.209,0 -4,-1.791 -4,-4c0,-2.209 1.791,-4 4,-4c2.209,0 4,1.791 4,4c0,2.209 -1.791,4 -4,4z"></path>
                        </g>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full py-4">
              <div className="flex flex-col gap-4">
                <h1 className="text-center font-bold text-white border-b-2 border-white text-2xl pb-4">
                  بخش های سایت
                </h1>

                {links
                  ? links.map((link, i) => (
                      <a
                        key={i}
                        href={link.href}
                        className="flex gap-x-2 justify-center md:justify-start rounded-xl pr-3 md:p-1 hover:text-indigo-600 cursor-pointer"
                      >
                        {link.logo}
                        <h1 className="text-lg text-[#ffd700]">{link.name}</h1>
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
        <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600 overflow-hidden">
          <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
            <button
              data-tooltip-target="tooltip-home"
              type="button"
              className="hover:bg-gray-200 inline-flex flex-col items-center justify-center px-5 rounded-l-full dark:hover:bg-gray-800 group"
            >
              <a href="./courses">
                <BookOpenIcon className="w-8 h-8" />
              </a>
            </button>
            <div
              id="tooltip-home"
              role="tooltip"
              className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            ></div>
            <button
              data-tooltip-target="tooltip-wallet"
              type="button"
              className="hover:bg-gray-200 inline-flex flex-col items-center justify-center px-5 dark:hover:bg-gray-800 group"
            >
              <a href="./aboutUs">
                <QuestionMarkCircleIcon className="w-8 h-8" />
              </a>
            </button>
            <div
              id="tooltip-wallet"
              role="tooltip"
              className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            ></div>
            <div className="flex items-center justify-center">
              <button
                data-tooltip-target="tooltip-new"
                type="button"
                onClick={clickHandler}
                className="inline-flex items-center justify-center w-10 h-10 font-medium bg-[#020621] rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
              >
                <a href="#top">
                  <ChevronDoubleUpIcon className="w-7 h-7 text-[#ffd700]" />
                </a>
              </button>
            </div>
            <div
              id="tooltip-new"
              role="tooltip"
              className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            ></div>
            <button
              data-tooltip-target="tooltip-settings"
              type="button"
              className="hover:bg-gray-200 inline-flex flex-col items-center justify-center px-5 dark:hover:bg-gray-800 group"
            >
              <a href="contact">
                <ArrowDownOnSquareIcon className="w-8 h-8" />
              </a>
            </button>
            <div
              id="tooltip-settings"
              role="tooltip"
              className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            ></div>
            <button
              data-tooltip-target="tooltip-profile"
              type="button"
              className="hover:bg-gray-200 inline-flex flex-col items-center justify-center px-5 rounded-r-full dark:hover:bg-gray-800 group"
            >
              <a href="order">
                <LinkIcon className="w-8 h-8" />
              </a>
            </button>
            <div
              id="tooltip-profile"
              role="tooltip"
              className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
