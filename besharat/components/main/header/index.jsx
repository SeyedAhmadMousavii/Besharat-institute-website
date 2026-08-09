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
import {
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import useAuth from "@/hooks/useAuth";

const links = [
  {
    name: "دوره های آموزشی",
    href: "/courses",
    logo: <BookOpenIcon className="w-6 h-6 text-[#ffd700]" />,
  },
  {
    name: "درباره ما",
    href: "/aboutUs",
    logo: <QuestionMarkCircleIcon className="w-6 h-6 text-[#ffd700]" />,
  },
  {
    name: "ارتباط با ما",
    href: "/contact",
    logo: <LinkIcon className="w-6 h-6 text-[#ffd700]" />,
  },
  {
    name: "دیپلم",
    href: "/DiplomaPage",
    logo: <AcademicCapIcon className="w-6 h-6 text-[#ffd700]" />,
  },
  {
    name: "تاجر شو",
    href: "/TajershooPage",
    logo: <CurrencyDollarIcon className="w-6 h-6 text-[#ffd700]" />,
  },
  {
    name: "رزومه اساتید",
    href: "/resume",
    logo: <UserGroupIcon className="w-6 h-6" />,
  },
  {
    name: "نمونه کار کارآموزان",
    href: "/portfolio",
    logo: <ClipboardDocumentListIcon className="w-6 h-6 text-[#ffd700]" />,
  },
  // {
  //   name: "ثبت سفارش",
  //   href: "/order",
  //   logo: <ArrowDownOnSquareIcon className="w-6 h-6 text-[#ffd700]" />,
  // },

];

const MobileNav = ({ links }) => {
  return (
    <div className="w-full py-4 lg:hidden">
      <div className="flex flex-col items-center gap-4">
        {links
          ? links.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="ml-5 rounded-xl p-1 hover:text-[#6b36cc] cursor-pointer inline-flex hover:underline text-[#ffd700]"
              >
                {link.logo}
                <span className="mr-1 text-[#ffd700]">{link.name}</span>
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
              color="indigo"
              className="text-[#ffd700] font-fa btn-flex text-base"
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
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };
  const [buttonIdsLength, setButtonIdsLength] = useState(0);

  // Load the length of buttonIds from local storage when the component mounts
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

  // Monitor changes to local storage
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

  // Function to clear local storage and reset state
  const clearLocalStorage = () => {
    localStorage.removeItem("buttonIds");
    setButtonIdsLength(0);
  };

  return (
    <header className="sticky top-0 start-0 end-0 px-2 bg-[#020621] shadow-md bg-base-100 z-50 py-4">
      <div className="flex justify-between items-center align-center max-w-full mx-auto">
        <div className={`flex justify-around gap-2 ${isOpen ? "block" : ""}`}>
         

          <IconButton
            variant="outlined"
            size="lg"
            className="btn-flex bg-[#ffd700] border-[#ffd700] relative"
          >
            <ShoppingCartIcon className="w-7 h-7 text-blue-900" />
           
          </IconButton>
          <span className="absolute top-1 right-1 flex h-5 w-5 z-50">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-300 opacity-75"></span>
            <span className="rounded-full w-5 h-5 text-center -pb-2 bg-red-500 text-white">{buttonIdsLength}</span>
          </span>

          {auth.loggedIn ? (
            <Menu>
              <MenuHandler>
                <Button variant="gradient" color="indigo" className="btn-flex">
                  <UserIcon className="w-6 h-6" />
                </Button>
              </MenuHandler>
              <MenuList dir="ltr" className="font-fa text-base">
                <MenuItem className="font-bold text-center">
                  {" "}
                  {auth.profile.username}{" "}
                </MenuItem>
                <MenuItem className="flex justify-end items-center gap-1">
                  <div>حساب کاربری</div>
                  <UserIcon className="w-6 h-6" />
                </MenuItem>
                <MenuItem className="flex justify-end items-center gap-1 text-red-400 hover:!text-red-500">
                  <div>خروج</div>
                  <KeyIcon className="w-6 h-6" />
                </MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Link href="/auth/login/">
              <Button
                className="font-fa btn-flex text-base rounded-full bg-[#ffd700]" disabled
              >
                <ArrowRightOnRectangleIcon className="w-6 h-6 text-blue-900" />
                <span className="text-blue-900">ورود</span>
              </Button>
            </Link>
          )}
        </div>

        <div
          className={`md:flex justify-around ${
            isOpen ? "flex" : "hidden"
          } w-auto`}
        >
          <DesktopNav links={links} />
        </div>

        <div className="cursor-pointer flex items-center">
          <Link href="/">
            <img
              src="/assets/brand_logo.png"
              className="hidden lg:block w-[120px] -m-3"
              alt="logo"
            />
            <img
              src="/assets/brand_purelogo.png"
              className="lg:hidden w-[50px]"
              alt="logo2"
            />
          </Link>
          <div className="lg:hidden ps-4 pt-1">
            <IconButton
              size="lg"
              variant="text"
              className="text-[#ffd700]"
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
      {isOpen ? <MobileNav links={links} /> : null}
    </header>
  );
}
