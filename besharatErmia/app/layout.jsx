import '@/styles/globals.css';
import '@/styles/font-face.css';
import 'react-toastify/dist/ReactToastify.css';
import Head from "next/head";
import Resident from './resident';

export const metadata = {
  title: 'آموزشگاه بشارت',
  description: 'آموزشگاه کامپیوتر و حسابداری بشارت بزرگترین و برترین برند آموزشی کشور در حوزه فناوری اطلاعات-حسابداری-نقشه کشی-ارزهای دیجیتال و استخراج اتریوم دارنده رتبه برتر غرب استان تهران با بیش از 26 سال سابقه درخشان است.',
  keywords: 'آموزشگاه بشارت، آموزشگاه کامپیوتر بشارت، آموزشگاه ارز دیجیتال بشارت، فنی و حرفه ای، آموزشگاه بشارت شهریار، شهریار، آموزشگاه کامپیوتر حسابداری ارز دیجیتال بشارت، ساناز فراهانی، سازمان فنی و حرفه ای، سیداحمد موسوی زاده، ایلیا درخشان، ICDL، طراحی سایت، ارز دیجیتال، MBA'
};

export default function RootLayout({ children }) {
  

  return (
    <html dir="rtl" lang="en" className="bg-[#020621]">
      <body className="bg-[#020621]">
        <Resident>
          {children}
        </Resident>
      </body>
    </html>
  );
}
