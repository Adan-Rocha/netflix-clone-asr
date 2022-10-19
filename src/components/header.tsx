import Image from "next/image";
import NextflixLogo_img from "../public/assets/Netflix_logo.svg";
import KidsIcon_img from "../public/assets/Kids_Icon.png";
import { SearchIcon, BellIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { logOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-[#141414]"} h-20`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          src={NextflixLogo_img}
          alt="Netflix"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink cursor-default font-semibold text-white hover:text-white">
            Home
          </li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="sm hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <span></span>
        {/* <Link href="/account"> */}
        <Image
          onClick={logOut}
          src={KidsIcon_img}
          alt=""
          className="cursor-pointer rounded"
        />
        {/* lg:max-w-2xl lg:text-2xl</Link> */}
      </div>
    </header>
  );
}

export default Header;
