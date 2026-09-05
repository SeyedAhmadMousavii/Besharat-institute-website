"use client";
import React, { useEffect, useState } from "react";
import {
  BookOpenIcon,
  LinkIcon,
  QuestionMarkCircleIcon,
  ArrowDownOnSquareIcon,
  XMarkIcon,
  Bars3Icon,
  ArrowRightOnRectangleIcon,
  ShoppingCartIcon,
  RocketLaunchIcon,
  AcademicCapIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ClipboardDocumentListIcon
} from "@heroicons/react/24/outline";
import { KeyIcon, UserIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image"; 
import {
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import useAuth from "@/hooks/useAuth";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "دوره های آموزشی",
    href: "/courses",
    logo: <BookOpenIcon className="w-6 h-6 text-[#D4AF37]" />, 
  },
  {
    name: "درباره ما",
    href: "/aboutUs",
    logo: <QuestionMarkCircleIcon className="w-6 h-6 text-[#D4AF37]" />, 
  },
  {
    name: "ارتباط با ما",
    href: "/contact",
    logo: <LinkIcon className="w-6 h-6 text-[#D4AF37]" />, 
  },
  {
    name: "دیپلم",
    href: "/DiplomaPage",
    logo: <AcademicCapIcon className="w-6 h-6 text-[#D4AF37]" />, 
  },
  {
    name: "تاجر شو",
    href: "/TajershooPage",
    logo: <CurrencyDollarIcon className="w-6 h-6 text-[#D4AF37]" />, 
  },
  {
    name: "رزومه اساتید",
    href: "/resume",
    logo: <UserGroupIcon className="w-6 h-6 text-[#D4AF37]" />, 
  },
  {
    name: "نمونه کار کارآموزان",
    href: "/portfolio",
    logo: <ClipboardDocumentListIcon className="w-6 h-6 text-[#D4AF37]" />, 
  },
];

const MobileNav = ({ links, closeMenu }) => {
  return (
    <div className="w-full py-4 lg:hidden" onClick={closeMenu}>
      <div className="flex flex-col items-center gap-4">
        {links
          ? links.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="ml-5 rounded-xl p-1 hover:text-[#000080] cursor-pointer inline-flex hover:underline text-[#D4AF37] transition-colors w-full justify-center"
              >
                {link.logo}
                <span className="mr-1 text-[#000080]">{link.name}</span>
              </Link>
            ))
          : null}
      </div>
    </div>
  );
};

const DesktopNav = ({ links }) => {
  return (
    <nav className="hidden lg:block">
      <div className="flex justify-around">
        {links?.map((link, i) => (
          <Link key={i} href={link.href}>
            <Button
              variant="text"
              className="text-[#000080] font-fa btn-flex text-base transition-colors" 
            >
              {link.logo}
              <span className="mr-1">{link.name}</span>
            </Button>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default function Header() {
  const auth = useAuth();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  const [buttonIdsLength, setButtonIdsLength] = useState(0);

  useEffect(() => {
    const storedArray = localStorage.getItem("buttonIds");
    if (storedArray) {
      try {
        const parsedArray = JSON.parse(storedArray);
        if (Array.isArray(parsedArray)) {
          setButtonIdsLength(parsedArray.length);
        } else {
          setButtonIdsLength(0);
        }
      } catch (error) {
        console.error("Error parsing local storage item:", error);
        setButtonIdsLength(0);
      }
    } else {
      setButtonIdsLength(0);
    }
  }, []);

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "buttonIds") {
        const storedArray = event.newValue;
        if (storedArray) {
          try {
            const parsedArray = JSON.parse(storedArray);
            if (Array.isArray(parsedArray)) {
              setButtonIdsLength(parsedArray.length);
            } else {
              setButtonIdsLength(0);
            }
          } catch (error) {
            console.error("Error parsing local storage item:", error);
            setButtonIdsLength(0);
          }
        } else {
          setButtonIdsLength(0);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // بستن منو هنگام تغییر مسیر
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <header className="sticky top-0 start-0 end-0 px-2 bg-white shadow-md z-50 py-4 border-b border-[#E8E8F0]">
      <div className="flex justify-between items-center align-center max-w-full mx-auto">
        <div className="flex justify-around gap-2">
          <div className="relative"> 
            <IconButton
              variant="outlined"
              size="lg"
              className="btn-flex border-[#D4AF37] hover:border-[#B8960F] bg-[#000080] hover:bg-[#B8960F] transition-all duration-300 group"
            >
              <ShoppingCartIcon className="w-7 h-7 text-[#D4AF37] group-hover:text-[#000080] transition-all duration-300" /> 
            </IconButton>
            <span className="absolute -top-1 -right-1 flex h-5 w-5 z-50">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-300 opacity-75"></span>
              <span className="rounded-full w-5 h-5 text-center bg-red-500 text-white text-sm font-bold">
                {buttonIdsLength}
              </span>
            </span>
          </div>

          {auth.loggedIn ? (
            <Menu>
              <MenuHandler>
                <Button variant="gradient" className="btn-flex bg-gradient-to-r from-[#000080] to-[#1A1A99] text-white hover:shadow-lg transition-all">
                  <UserIcon className="w-6 h-6" />
                </Button>
              </MenuHandler>
              <MenuList dir="ltr" className="font-fa text-base bg-white border-[#E8E8F0]">
                <MenuItem className="font-bold text-center text-[#1A1A2E]">
                  {auth.profile.username}
                </MenuItem>
                <MenuItem className="flex justify-end items-center gap-1 text-[#1A1A2E] hover:text-[#000080] transition-colors">
                  <div>حساب کاربری</div>
                  <UserIcon className="w-6 h-6" />
                </MenuItem>
                <MenuItem className="flex justify-end items-center gap-1 text-red-400 hover:!text-red-500 transition-colors">
                  <div>خروج</div>
                  <KeyIcon className="w-6 h-6" />
                </MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Link href="/auth/login/">
              <Button
                className="font-fa btn-flex text-base rounded-full bg-[#000080] hover:bg-[#B8960F] transition-all duration-300 shadow-md hover:shadow-lg group"
              >
                <ArrowRightOnRectangleIcon className="w-6 h-6 text-[#D4AF37] group-hover:text-[#000080] transition-colors duration-300" /> 
                <span className="text-[#D4AF37] group-hover:text-[#000080] transition-colors duration-300">ورود</span> 
              </Button>
            </Link>
          )}
        </div>

        <div className="hidden md:flex justify-around w-auto">
          <DesktopNav links={links} />
        </div>

        <div className="cursor-pointer flex items-center">
          <Link href="/">
            <div className="hidden lg:block">
              <Image
                src="/assets/brand_logo.png"
                alt="logo"
                width={120}
                height={40}
                priority
                className="w-[150px] h-auto -mt-8"
                quality={85}
              />
            </div>
            <div className="lg:hidden">
              <Image
                src="/assets/brand_purelogo.png"
                alt="logo2"
                width={50}
                height={50}
                priority
                className="w-[50px] h-auto"
                quality={85}
                unoptimized
              />
            </div>
          </Link>
          <div className="lg:hidden ps-4 pt-1">
            <IconButton
              size="lg"
              variant="text"
              className="text-[#000080] hover:text-[#1A1A99] transition-colors"
              onClick={handleMenuClick}
            >
              {isOpen ? (
                <XMarkIcon className="w-10 h-10" />
              ) : (
                <Bars3Icon className="w-10 h-10" />
              )}
            </IconButton>
          </div>
        </div>
      </div>
      {isOpen ? <MobileNav links={links} closeMenu={closeMenu} /> : null}
    </header>
  );
}