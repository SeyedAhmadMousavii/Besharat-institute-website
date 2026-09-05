import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: 'ارتباط با ما | راه‌های تماس آموزشگاه بشارت',
  description: 'راه‌های ارتباطی با آموزشگاه بشارت: تماس تلفنی، اینستاگرام، تلگرام، واتساپ، روبیکا، ایتا و آپارات | پاسخگویی همه روزه',
  keywords: 'تماس با بشارت, ارتباط با ما, اینستاگرام بشارت, تلگرام بشارت, شماره تماس, آدرس آموزشگاه',
}

const contactWays = [
    { image: "/assets/contact/instagram.png", title: "اینستاگرام", href: "https://www.instagram.com/behsratacademy" },
    { image: "/assets/contact/rubika.png", title: "روبیکا", href: "https://rubika.ir/besharatacademy", },
    { image: "/assets/contact/telegram.png", title: "کانال تلگرام", href: "https://t.me/besharatacademy" },
    { image: "/assets/contact/eita.png", title: "ایتا", href: "https://eitaa.com/besharatacademy" },
    { image: "/assets/contact/aparat.png", title: "آپارت", href: "https://www.aparat.com/besharatacademy" },
    { image: "/assets/contact/whatsApp.png", title: "واتساپ", href: "https://wa.me/989302758881?text=test" },
    { image: "/assets/contact/location.png", title: "لوکیشن", href: "https://maps.app.goo.gl/SVtrJJGKzgGnJU3e7" },
    { image: "/assets/contact/call.png", title: "تماس", href: "tel:09302758881" },
];

export default function ContactPage() {
    return (
        <>
            <div className="container mx-auto flex flex-wrap justify-center items-center w-9/12 gap-8 pt-8 pb-28 md:py-28">
                {contactWays.map((contactWay, it) => (
                    <Link className="w-[200px]" href={contactWay.href ?? ""} key={it}>
                        <div className="z-30 block w-full relative movement-animation">
                            <div className="absolute top-0 bottom-0 start-0 end-0">
                                <div className="-z-10 w-full h-full bg-gradient-to-r from-[#D4AF37]/30 via-[#F4E4A0]/20 to-[#000080]/20 rounded-full blur-2xl opacity-70"></div>
                            </div>

                            <div className="z-20 bg-white text-center flex flex-col justify-around align-middle p-2 mt-5 hover:shadow-lg hover:scale-105 hover:shadow-[#D4AF37]/30 hover:rotate-3 transform transition duration-300 rounded-xl border-2 border-[#D4AF37]">
                                <div className="w-[100px] h-[100px] m-auto p-1 flex justify-center items-end">
                                    <Image src={contactWay.image} alt="contactWayImage" width={100} height={100} unoptimized className="w-full h-auto" />
                                </div>
                                <p className="text-[#000080] font-bold text-center mt-4">{contactWay.title}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}