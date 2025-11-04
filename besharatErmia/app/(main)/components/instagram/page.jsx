"use client";

import Image from "next/image";
import Link from "next/link";

const images = [
   {
    url: "https://www.instagram.com/reel/DQeBPxRjQtK/?igsh=dXhpYXU4djlmZWxj",
    src: "/assets/insta/Besharat234.jpg",
    alt: "Instagram Post 18",
  },
   {
    url: "https://www.instagram.com/reel/DPeer2VDcFL/?igsh=MXRxY2dza3pkamNvZQ==",
    src: "/assets/insta/IMG_20251006_194119_473.jpg",
    alt: "Instagram Post 17",
  },
   {
    url: "https://www.instagram.com/reel/DPbad7WDcpN/?igsh=MXNtZWkyZmNnMjJvdQ==",
    src: "/assets/insta/Besharat2۲۳۱.jpg",
    alt: "Instagram Post 16",
  },
  {
    url: "https://www.instagram.com/reel/DPJs5XajRdG/?igsh=OWVkaDl3NTAyd3dt",
    src: "/assets/insta/Besharat2286.jpg",
    alt: "Instagram Post 15",
  },
  {
    url: "https://www.instagram.com/reel/DPCIeF_jTaO/?igsh=ajRwazgwZHFnNTBn",
    src: "/assets/insta/Besharat۴۵۳.jpg",
    alt: "Instagram Post 14",
  },
  {
    url: "https://www.instagram.com/reel/DOtYxj1DRmX/?igsh=cXZvNXV6ejVtN3Ay",
    src: "/assets/insta/Besha3434rat.jpg",
    alt: "Instagram Post 13",
  },
  {
    url: "https://www.instagram.com/reel/DO6M5eSjWZI/?igsh=cTU1MHJ5M3NzNnpj",
    src: "/assets/insta/Besharat288.jpg",
    alt: "Instagram Post 12",
  },
  {
    url: "https://www.instagram.com/reel/DNJDTNxo-dt/?igsh=MW53cDE0bHRxam4xcA==",
    src: "/assets/insta/Besharat2۱۸۴۱.jpg",
    alt: "Instagram Post 11",
  },
  {
    url: "https://www.instagram.com/reel/DMvERtBodI3/?igsh=Ym9obzBtOHRyZmhl",
    src: "/assets/insta/Besha12rat.jpg",
    alt: "Instagram Post 1",
  },
  {
    url: "https://www.instagram.com/reel/DM-rIY4IzX-/?igsh=MWFsMjV0eHI5MDV5dg==",
    src: "/assets/insta/Besharat2۱۸.jpg",
    alt: "Instagram Post 2",
  },
  {
    url: "https://www.instagram.com/reel/DKHy6Y5u0Sk/?igsh=MTNhY3MyeXV0aXBucg==",
    src: "/assets/insta/Besharat.png",
    alt: "Instagram Post 3",
  },
  {
    url: "https://www.instagram.com/reel/DMdSz3qIMvT/?igsh=MWhpZTAwY2p4OW4y",
    src: "/assets/insta/Besharat2۲۲۱.jpg",
    alt: "Instagram Post 4",
  },
  {
    url: "https://www.instagram.com/reel/DMtAQOHo-pl/?igsh=MXR2N3BhaXBydjYzOQ==",
    src: "/assets/insta/Besh23arat.jpg",
    alt: "Instagram Post 5",
  },
  {
    url: "https://www.instagram.com/reel/DMqEPqWIizL/?igsh=MWdodGloaHlicmxvMg==",
    src: "/assets/insta/Beshar6at.jpg",
    alt: "Instagram Post 6",
  },
  {
    url: "https://www.instagram.com/reel/DM5kKpbI5Z0/?igsh=dzJ2eG54anQzczZj",
    src: "/assets/insta/Besh13arat.jpg",
    alt: "Instagram Post 7",
  },
  {
    url: "https://www.instagram.com/reel/DM3HGvJoWMh/?igsh=MW0yZTYyaHo0NXNzeA==",
    src: "/assets/insta/Besharat2۱۸صص.jpg",
    alt: "Instagram Post 8",
  },
  {
    url: "https://www.instagram.com/reel/DMVhHOHI_Pg/?igsh=dXVjdzZvOHdhOWp5",
    src: "/assets/insta/Besharat2۲۴.jpg",
    alt: "Instagram Post 9",
  },
  {
    url: "https://www.instagram.com/reel/DMajfSDolox/?igsh=MThiZWVrNmloOXVtbg==",
    src: "/assets/insta/Besharat2۳۳۳۳۲.jpg",
    alt: "Instagram Post 10",
  },
  
];

export default function InstagramGallery() {
  return (
    <div className="w-full px-4 py-6">
      <div className="text-center mb-6 text-3xl font-semibold text-[#ffd700]">
        اینستاگرام ما را دنبال کنید
      </div>

      <div className="overflow-x-auto">
        <div className="flex gap-4 w-max">
          {images.map((item, index) => (
            <Link
              href={item.url}
              target="_blank"
              key={index}
              className="shrink-0 transition-transform duration-300 ease-in-out"
            >
              <div className="relative w-[120px] h-[200px] rounded-xl overflow-hidden shadow-md">
                <img
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
