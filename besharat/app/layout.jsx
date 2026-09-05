import '@/styles/globals.css';
import '@/styles/font-face.css';
import 'react-toastify/dist/ReactToastify.css';
import Resident from './resident';

export const metadata = {
  metadataBase: new URL('https://besharatacademy.com'),
  title: {
    default: 'آموزشگاه بشارت | آموزش کامپیوتر، نقشه کشی، حسابداری و ارز دیجیتال',
    template: '%s | آموزشگاه بشارت'
  },
  description: 'آموزشگاه بین المللی بشارت در غرب تهران، بیش از 20 سال سابقه در آموزش کامپیوتر، ICDL، حسابداری، ارز دیجیتال و نقشه کشی. مدرک فنی و حرفه ای معتبر، اساتید مجرب، تضمین بازگشت وجه. مشاوره رایگان بگیرید.',
  keywords: 'آموزشگاه بشارت, ساناز فراهانی, ایلیا درخشان, سیداحمد موسوی, آموزش کامپیوتر, آموزش حسابداری, آموزش ارز دیجیتال, آموزش نقشه کشی, MBA, ICDL, فنی و حرفه ای, شهریار',
  authors: [{ name: 'آموزشگاه بشارت - ساناز فراهانی' }],
  openGraph: {
    title: {
      default: 'آموزشگاه بشارت | مرجع تخصصی آموزش',
      template: '%s | آموزشگاه بشارت'
    },
    description: 'مدیریت: ساناز فراهانی | اساتید: ایلیا درخشان، سیداحمد موسوی | بیش از دو دهه تجربه در آموزش مهارت‌های فنی و حرفه‌ای',
    url: 'https://besharatacademy.com',
    siteName: 'آموزشگاه بشارت',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'آموزشگاه بشارت | مرجع تخصصی آموزش',
    description: 'مدیریت: ساناز فراهانی | اساتید: ایلیا درخشان، سیداحمد موسوی',
  },
};

export default function RootLayout({ children }) {
  return (
    <html 
      dir="rtl" 
      lang="fa"
      className="bg-white"
      suppressHydrationWarning  
    >
      <body 
        className="bg-white text-[#1A1A2E]"
        suppressHydrationWarning  
      >
        <Resident>
          {children}
        </Resident>
      </body>
    </html>
  );
}