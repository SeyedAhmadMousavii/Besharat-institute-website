export default function portfolioPage() {
  const data = [
    {
      label: "Web",
      value: "Web",
      options: [
        {
          id: 1,
          img: "assets/portfolioPic/IMG_5793.PNG",
          title: "تصویر برداری",
          href: "https://masomehrezaie021-spec.github.io/tasvir-bardari/",
        },
        
        {
          id: 2,
          img: "assets/portfolioPic/michaelnest-icon.png",
          title: "michaelnest",
          href: "https://jalalvandmichael.github.io/final-project/",
        },
        {
          id: 3,
          img: "assets/portfolioPic/photo_6012682691322514679_y.jpg",
          title: "امیر اسپرت",
          href: "https://amiralishykhy6-hub.github.io/amirsport-bah-bah-/",
        },
        {
          id: 4,
          img: "assets/portfolioPic/IMG_1839.jpeg",
          title: "Clash Of Clans",
          href: "https://hoseinashrafirad.github.io/Clash-Companion/",
        },
        {
          id: 5,
          img: "assets/portfolioPic/photo_6030427718073126343_y.jpg",
          title: "Clash Of Clans",
          href: "https://yaserrahnama666-cpu.github.io/Hamyar-Amoozegar-Mikhak/",
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
                      <img src={img} alt="questions" className="rounded-2xl w-full h-16" />
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
