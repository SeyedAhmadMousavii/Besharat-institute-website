import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function StudyAbroadCard() {
  return (
    <>
      <Head>
        <title>Study Abroad & Student Admission | Besharat Academy</title>
        <meta name="description" content="Professional student admission services to UK, Germany, China, India, Turkey, Iraq, Pakistan, Uzbekistan, Oman & Afghanistan | Study consultancy, visa, residency & company registration" />
        <meta name="keywords" content="study abroad, student admission, UK study, Germany study, China study, India study, Turkey study, study consultancy, residency, Besharat Academy" />
      </Head>
      <div className="rounded-2xl shadow-xl overflow-hidden mx-4 my-8 bg-white border border-[#E8E8F0]">
        <div className="flex flex-col-reverse md:flex-row justify-around">
          <div className="md:flex w-96 items-center justify-center rounded-l-2xl">
            <Image 
              src="/assets/InternationalPart.png" 
              alt="Study Abroad & Student Admission" 
              width={384}
              height={300}
              className="object-contain"
            />
          </div>
          <div className="flex-1 p-6 md:p-8 text-[#1A1A2E] text-left">
            
            <h3 className="text-2xl md:text-4xl font-bold mb-2 text-[#D4AF37] text-left">
              Study Abroad & Student Admission
            </h3>
            <p className="leading-relaxed text-left">From consultation to admission and residency at top universities worldwide</p>
              <p className="leading-relaxed mt-2 text-left">Besharat International Academy, with a specialized team well-versed in educational, immigration, and legal processes, offers professional student admission services for applicants interested in studying in the United Kingdom, Germany, China, India, Turkey, Iraq, Pakistan, Uzbekistan, Oman, and Afghanistan</p>
              <p className="leading-relaxed mt-2 text-left">Our services include expert consultation on country and field selection, document review, official translation, admission acquisition, visa follow-up, cost guidance, and post-arrival support. We also provide consultation and services for residency and company registration in various countries</p>
            <Link
              href="/internationalPart"
              className="w-full text-center inline-block bg-[#000080] hover:bg-[#B8960F] text-[#D4AF37] hover:text-[#000080] font-bold px-6 py-2.5 rounded-lg transition shadow-md hover:shadow-lg mt-6"
            >
              Learn More ←
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}