import Image from "next/image";
import Head from "next/head";

export default function portfolioPage() {
  const data = [
    {
      label: "Web",
      value: "Web",
      options: [
        {
          id: 1,
          img: "/assets/portfolioPic/IMG_5793.PNG",
          title: "تصویر برداری",
          href: "https://masomehrezaie021-spec.github.io/tasvir-bardari/",
        },
        
        {
          id: 2,
          img: "/assets/portfolioPic/michaelnest-icon.png",
          title: "michaelnest",
          href: "https://jalalvandmichael.github.io/final-project/",
        },
        {
          id: 3,
          img: "/assets/portfolioPic/photo_6012682691322514679_y.jpg",
          title: "امیر اسپرت",
          href: "https://amiralishykhy6-hub.github.io/amirsport-bah-bah-/",
        },
        {
          id: 4,
          img: "/assets/portfolioPic/IMG_1839.jpeg",
          title: "Clash Of Clans",
          href: "https://hoseinashrafirad.github.io/Clash-Companion/",
        },
        {
          id: 5,
          img: "/assets/portfolioPic/photo_6030427718073126343_y.jpg",
          title: "همیار آموزگار میخک",
          href: "https://yaserrahnama666-cpu.github.io/Hamyar-Amoozegar-Mikhak/",
        },
      ]
    },
  ];
  return (
    <>
      <Head>
        <title>نمونه کارهای کارآموزان | آموزشگاه بشارت</title>
        <meta name="description" content="مشاهده نمونه پروژه‌های انجام شده توسط کارآموزان آموزشگاه بشارت در حوزه طراحی سایت، برنامه‌نویسی و گرافیک" />
        <meta name="keywords" content="نمونه کار, پروژه کارآموزان, طراحی سایت, برنامه نویسی, گرافیک, بشارت, نمونه کارهای آموزشی" />
      </Head>
      <div className="min-h-screen py-8 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-[#000080]">نمونه کارهای کارآموزان</h1>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-3 rounded-full"></div>
          </div>
        </div>
        <div id="custom-animation" value="Web">
          <div>
            {data.map(({ value, options }) => (
              <div key={value} value={value} className="mt-6">
                <div className="container mx-auto flex flex-wrap justify-center items-center gap-6 pt-4 pb-16 px-4">
                  {options
                    ? options.map(({ id, img, title, href }) =>
                    <a href={href} target="_blank" rel="noopener noreferrer" key={id}>
                      <div className="flex flex-col items-center bg-white rounded-2xl w-32 p-3 hover:shadow-xl hover:scale-105 hover:shadow-[#D4AF37]/30 cursor-pointer transition-all border-2 border-[#E8E8F0] hover:border-[#D4AF37] shadow-md" key={id}>
                        <div className="rounded-xl w-20 h-20 mb-2 relative bg-[#F8F9FA] p-1 border border-[#D4AF37]/20 overflow-hidden">
                          <Image src={img} alt={title} width={80} height={80} className="rounded-xl w-full h-full object-cover" />
                        </div>
                        <h2 className="font-bold text-xs text-[#000080] text-center hover:text-[#D4AF37] transition-colors">{title}</h2>
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