import Image from "next/image";
import Head from "next/head";

export default function LibraryPage() {
  const data = [
    {
      label: "Web",
      value: "Web",
      options: [
        {
          id: 1,
          img: "/assets/libraryPics/icdl1.jpg",
          title: "مبانی",
          href: "/assets/file/مبانی نهایی.pdf",
        },
        {
          id: 2,
          img: "/assets/libraryPics/microsoft-office.png",
          title: "Windows",
          href: "/assets/file/ویندوزز.pdf",
        },
        {
          id: 3,
          img: "/assets/libraryPics/microsoft-office-word.png",
          title: "Word",
          href: "/assets/file/وورد نهایی.pdf",
        },
        {
          id: 4,
          img: "/assets/libraryPics/microsoft-office-excel.png",
          title: "Excel",
          href: "/assets/file/اکسل نهایی.pdf",
        },
        {
          id: 5,
          img: "/assets/libraryPics/microsoft-access.png",
          title: "Access",
          href: "/assets/file/اکسز کاملل.pdf",
        },
        {
          id: 6,
          img: "/assets/libraryPics/microsoft-powerpoint.png",
          title: "Powerpoint",
          href: "/assets/file/پاورر.pdf",
        },
        {
          id: 7,
          img: "/assets/libraryPics/microsoft-internet.png",
          title: "Internet",
          href: "/assets/file/اینترنت کامل.pdf",
        },
        {
          id: 8,
          img: "/assets/libraryPics/icdl2.jpg",
          title: "عملی ICDL",
          href: "/assets/file/icdlA.pdf",
        },
        {
          id: 9,
          img: "/assets/libraryPics/photoshop-100.png",
          title: "کتبی فتوشاپ",
          href: "/assets/file/photoshopt.pdf",
        },
        {
          id: 10,
          img: "/assets/libraryPics/photoshop-100.png",
          title: "عملی فتوشاپ",
          href: "/assets/file/photoshopa.pdf",
        },
        {
          id: 11,
          img: "/assets/libraryPics/web.jpg",
          title: "طراحی وب",
          href: "/assets/file/web.pdf",
        },
        {
          id: 12,
          img: "/assets/libraryPics/web2.webp",
          title: "طراحی وب تشریحی",
          href: "/assets/file/webt.pdf",
        },
        {
          id: 13,
          img: "/assets/libraryPics/crypto-100.png",
          title: "ارز دیجیتال",
          href: "/assets/file/سوالات ارز نسخه 2.pdf",
        },
        {
          id: 14,
          img: "/assets/libraryPics/calculator-100.png",
          title: "کتبی حسابداری",
          href: "/assets/file/حسابداری عمومی مقدماتی.pdf",
        },
        {
          id: 15,
          img: "/assets/libraryPics/tax.png",
          title: "حسابداری و مالیاتی",
          href: "/assets/file/نمونه سوالات حسابداری و مالیاتی.pdf",
        },
        {
          id: 16,
          img: "/assets/libraryPics/accounting2.jpg",
          title: "حقوق و دستمزد",
          href: "/assets/file/نمونه سوالات حسابداری حقوق و دستمزد.pdf",
        },
        {
          id: 17,
          img: "/assets/libraryPics/accounting3.png",
          title: "کمک حسابدار",
          href: "/assets/file/نمونه سوالات کمک حسابدار.pdf",
        },
        {
          id: 18,
          img: "/assets/libraryPics/mba-100.png",
          title: "MBA",
          href: "/assets/file/mba.pdf",
        },
        {
          id: 19,
          img: "/assets/libraryPics/pedagogy.png",
          title: "پداگوژی",
          href: "/assets/file/نمونه سوالات پداگوژی.pdf",
        },
        {
          id: 20,
          img: "/assets/libraryPics/corel.webp",
          title: "کارور corel draw",
          href: "/assets/file/کارور corel draw.pdf",
        },
        {
          id: 21,
          img: "/assets/libraryPics/examiner.png",
          title: "آزمونگری",
          href: "/assets/file/نمونه سوالات آزمونگری.pdf",
        },
        {
          id: 22,
          img: "/assets/libraryPics/accounting3.jpg",
          title: "حسابداری",
          href: "/assets/file/نمونه سوالات حسابداری.pdf",
        },
        {
          id: 23,
          img: "/assets/libraryPics/python.webp",
          title: "پایتون",
          href: "/assets/file/نمونه سوالات برنامه نویس پایتون.pdf",
        },
      ]
    },
  ];
  
  return (
    <>
      <Head>
        <title>کتابخانه نمونه سوالات فنی و حرفه‌ای | آموزشگاه بشارت</title>
        <meta name="description" content="دانلود رایگان نمونه سوالات کتبی و عملی سازمان فنی و حرفه‌ای شامل ICDL، حسابداری، ارز دیجیتال، طراحی وب، فتوشاپ و MBA" />
        <meta name="keywords" content="نمونه سوال فنی و حرفه ای, سوالات ICDL, سوالات حسابداری, سوالات ارز دیجیتال, کتابخانه سوالات, دانلود سوال, بشارت" />
      </Head>
      <div className="min-h-screen py-8 bg-[#F8F9FA]">
        <div id="custom-animation" value="Web">
          <div>
            {data.map(({ value, options }) => (
              <div key={value} value={value} className="mt-14">
                <div className="container mx-auto flex flex-wrap justify-center items-center w-9/12 gap-8 pt-8 pb-16 md:py-16">
                  {options
                    ? options.map(({ id, img, title, href }) =>
                    <a href={href} download key={id}>
                      <div className="flex-col justify-between align-middle bg-white rounded-2xl w-28 h-28 p-2 hover:shadow-xl hover:scale-105 hover:shadow-[#D4AF37]/40 cursor-pointer transition-all border-2 border-[#E8E8F0] hover:border-[#D4AF37] shadow-md" key={id}>
                        <div className="rounded-2xl w-16 h-16 mx-auto mb-3 relative bg-gradient-to-br from-[#F8F9FA] to-[#F4E4A0]/20 p-2 border-2 border-[#D4AF37]/20">
                          <Image src={img} alt={title} width={64} height={64} unoptimized className="rounded-2xl w-full h-full object-contain" />
                        </div>
                        <h2 className="font-bold flex justify-center m-auto text-xs text-[#000080] text-center hover:text-[#D4AF37] transition-colors">{title}</h2>
                      </div>
                    </a>
                  )
                    : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}