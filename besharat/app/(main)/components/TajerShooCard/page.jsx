import Link from 'next/link';

export default function TajershooCard() {
  return (
    <div className="rounded-2xl shadow-xl overflow-hidden mx-4 my-8">
      <div className="flex flex-col-reverse md:flex-row justify-around">
        <div className="flex-1 p-6 md:p-8 mt-10 text-white">
          
          <h3 className="text-2xl md:text-4xl font-bold mb-2 text-[#ffd700]">
            تاجر شو
          </h3>
          <p>از بازارهای داخلی تا تجارت حرفه‌ای بین‌الملل</p>
            <p>در دنیای امروز، تجارت بین‌الملل یکی از مهم‌ترین ابزارهای توسعه کسب‌وکار و دستیابی به بازارهای جهانی محسوب می‌شود. مؤسسه بین‌المللی بشارت با بهره‌گیری از اساتید مجرب، محتوای آموزشی کاربردی و رویکردی مبتنی بر استانداردهای روز دنیا، دوره تخصصی «تجارت بین‌الملل و استراتژی‌های صادرات و واردات» را برگزار می‌نماید</p>
            <p>این دوره با هدف توانمندسازی فعالان اقتصادی، کارآفرینان و علاقه‌مندان به حوزه بازرگانی طراحی شده و مهارت‌های کلیدی از جمله تحلیل بازارهای هدف، مدیریت فرآیندهای صادرات و واردات، مذاکرات تجاری، توسعه بازار و تدوین استراتژی‌های بین‌المللی را پوشش می‌دهد.
فرصت‌ها در بازارهای جهانی منتظر تصمیم‌های حرفه‌ای هستند؛ امروز برای ساختن آینده تجاری خود اقدام کنید.
</p>
          <Link
            href="/TajershooPage"
            className="inline-block bg-[#ffd700] hover:bg-yellow-600 text-blue-900 font-bold px-6 py-2.5 rounded-lg transition shadow-md mt-6"
          >
            مشاهده کامل ←
          </Link>
        </div>
        <div className="md:flex w-96 items-center justify-center rounded-l-2xl">
          <img src="./assets/تاجرشو.png" alt="تاجر شو" />
        </div>
      </div>
    </div>
  );
}