export default function LibraryPage() {
  const data = [
    {
      label: "Web",
      value: "Web",
      options: [
        {
          id: 1,
          img: "assets/libraryPics/icdl1.jpg",
          title: "مبانی",
          href: "assets/file/مبانی نهایی.pdf",
        },
        
        {
          id: 2,
          img: "assets/libraryPics/microsoft office.png",
          title: "Windows",
          href: "assets/file/ویندوزز.pdf",
        },
        {
          id: 3,
          img: "assets/libraryPics/microsoft office word .png",
          title: "Word",
          href: "assets/file/وورد نهایی.pdf",
        },
        {
          id: 4,
          img: "assets/libraryPics/microsoft office Excel.png",
          title: "Excel",
          href: "assets/file/اکسل نهایی.pdf",
        },
        {
          id: 5,
          img: "assets/libraryPics/microsoft access.png",
          title: "Access",
          href: "assets/file/اکسز کاملل.pdf",
        },
        {
          id: 6,
          img: "assets/libraryPics/microsoft powerpoint.png",
          title: "Powerpoint",
          href: "assets/file/پاورر.pdf",
        },
        {
          id: 7,
          img: "assets/libraryPics/microsoft internet .png",
          title: "Internet",
          href: "assets/file/اینترنت کامل.pdf",
        },
        {
          id: 8,
          img: "assets/libraryPics/icdl2.jpg",
          title: "عملی ICDL",
          href: "assets/file/icdlA.pdf",
        },
        {
          id: 9,
          img: "assets/libraryPics/photoshop-100.png",
          title: "کتبی فتوشاپ",
          href: "assets/file/photoshopt.pdf",
        },
        {
          id: 10,
          img: "assets/libraryPics/photoshop-100.png",
          title: "عملی فتوشاپ",
          href: "assets/file/photoshopa.pdf",
        },
        {
          id: 11,
          img: "assets/libraryPics/web.jpg",
          title: "طراحی وب",
          href: "assets/file/web.pdf",
        },
        {
          id: 7,
          img: "assets/libraryPics/crypto-100.png",
          title: "ارز دیجیتال",
          href: "assets/file/سوالات ارز نسخه 2.pdf",
        },
        {
          id: 8,
          img: "assets/libraryPics/calculator-100.png",
          title: "کتبی حسابداری",
          href: "assets/file/حسابداری عمومی مقدماتی.pdf",
        },
        {
          id: 9,
          img: "assets/libraryPics/mba-100.png",
          title: "MBA",
          href: "assets/file/mba.pdf",
        },
      ]
    },
  ];
  return (
    <div>
      <div id="custom-animation" value="Web">
        <div>
          {data.map(({ value, options }) => (
            <div key={value} value={value} className="mt-14">
              <div className="container mx-auto flex flex-wrap justify-center items-center w-9/12 gap-8 pt-8 pb-16 md:py-16">
                {options
                  ? options.map(({ id, img, title, href }) =>
                  <a href={href} download key={id}>
                    <div className="flex-col justify-between align-middle bg-white rounded-2xl w-28 h-28 p-2 hover:shadow-lg hover:scale-105 hover:shadow-gray-300/50 cursor-pointer transition-all" key={id}>
                    <div className="rounded-2xl w-16 mx-auto mb-3">
                      <img src={img} alt="questions" className="rounded-2xl w-full" />
                    </div>
                    <h2 className="font-bold flex justify-center m-auto text-xs">{title}</h2>
                    
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
  );
}
