import Image from 'next/image';
import Head from 'next/head';

const ProfessorsSection = () => {

  const professorsData = [
    {
      id: 1,
      name: "ساناز فراهانی",
      title: "مدیریت مجموعه",
      bio: "کارآفرین برتر در غرب استان تهران با بیش از 26 سال سابقه درخشان در حوزه کامپیوتر، هوش مصنوعی، MBA و ارز دیجیتال",
      image: "/assets/partner/ساناز-فراهانی.jpg",
      resume: "/assets/file/ساناز-فراهانی.pdf"
    },
    {
      id: 2,
      name: "ایلیا درخشان",
      title: "مدرس مجموعه",
      bio: "مدرس و تحلیلگر بازارهای مالی بین الملل، فعال در حوزه ارز دیجیتال و ترید، همراه با تدریس دوره جامع MBA ویژه مدیران و کارآفرینان",
      image: "/assets/partner/ایلیا-درخشان.jpg",
      resume: "/assets/file/ایلیا-درخشان.pdf"
    },
    {
      id: 3,
      name: "سیداحمد موسوی",
      title: "مدرس مجموعه",
      bio: "مدرس و تحلیلگر بازارهای مالی بین الملل و همچنین مدرس دوره های ICDL، طراحی سایت، برنامه نویسی، فتوشاپ، همراه با تدریس دوره جامع MBA ویژه مدیران و کارآفرینان",
      image: "/assets/partner/سیداحمد-موسوی.jpg",
      resume: "/assets/file/سیداحمد-موسوی.pdf"
    },
  ];

  
  const ProfessorCard = ({ professor }) => {
    return (
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#E8E8F0] transition-all duration-300 hover:shadow-xl hover:border-[#D4AF37] max-w-sm mx-auto h-full flex flex-col">
       
        <div className="relative h-48 bg-gradient-to-br from-[#D4AF37] to-[#000080] overflow-hidden flex-shrink-0">
        
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#D4AF37] rounded-full opacity-20"></div>
          <div className="absolute -bottom-12 -left-8 w-40 h-40 bg-[#000080] rounded-full opacity-30"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rotate-45 opacity-10"></div>
          
          <div className="absolute bottom-0 right-0 w-40 h-40">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-[#D4AF37] transform rotate-12 rounded-xl opacity-20"></div>
              <div className="absolute inset-0 bg-[#D4AF37] transform -rotate-6 rounded-xl opacity-30"></div>
              
              <div className="absolute inset-2 overflow-hidden rounded-lg bg-[#F8F9FA]">
                <Image
                  src={professor.image}
                  alt={professor.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-4 right-[170px] text-right">
            <p className="text-white/90 text-xl font-bold">{professor.title}</p>
          </div>
        </div>
        
       
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-bold leading-tight mb-2 text-[#000080]">{professor.name}</h3>
          <p className="text-[#1A1A2E] text-right leading-relaxed mb-2 flex-grow text-sm">
            {professor.bio}
          </p>
          
          {professor.resume && (
            <div className="text-right mt-auto">
              <a 
                href={professor.resume} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-[#000080] text-[#ffd700] rounded-lg hover:bg-[#D4AF37] hover:text-[#000080] transition-colors duration-300 text-sm font-medium transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                دانلود رزومه
              </a>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>اساتید و مربیان مجرب | آموزشگاه بشارت</title>
        <meta name="description" content="آشنایی با اساتید مجرب آموزشگاه بشارت: ساناز فراهانی (مدیر مجموعه و مدرس)، ایلیا درخشان (مدرس و تحلیلگر بازارهای مالی)، سیداحمد موسوی (مدرس ICDL، طراحی سایت و ارز دیجیتال)" />
        <meta name="keywords" content="اساتید بشارت, ساناز فراهانی, ایلیا درخشان, سیداحمد موسوی, مدرسان, مربیان, رزومه اساتید, اساتید مجرب" />
      </Head>
      <div dir="rtl" className="min-h-screen py-6 rounded-2xl my-3 bg-[#F8F9FA]">
        <div className="container mx-auto px-2">
        
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-[#000080] mb-4">اساتید و مربیان</h1>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-3 rounded-full"></div>
            <p className="text-lg text-[#1A1A2E] max-w-4xl mx-auto leading-relaxed mt-4">
              با اساتید مجرب و متخصص ما آشنا شوید. هر کدام با سال‌ها تجربه در زمینه‌های تخصصی خود آماده راهنمایی و آموزش هستند.
            </p>
          </div>
          
       
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {professorsData.map((professor) => (
              <ProfessorCard key={professor.id} professor={professor} />
            ))}
          </div>
        
          <div className="text-center my-16">
            <p className="text-[#000080]">
              برای اطلاعات بیشتر با ما در ارتباط باشید
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfessorsSection;