"use client";

import { HomeIcon } from "@heroicons/react/24/solid";
import { motion as m, AnimatePresence } from "framer-motion";
import {
  MagnifyingGlassIcon,
  PlayCircleIcon,
  CheckIcon,
  FireIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const Header = () => {
  const [searchInput, setSearchInput] = useState(null);
  const [searchOn, setSearchOn] = useState(false);

  const ref = useRef(null);

  const handleHideDropdown = (event) => {
    if (event.key === "Escape") {
      setSearchOn(false);
    }
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setSearchOn(false);
    }
  };

  const iconDiv =
    "flex font-bold flex-col items-center justify-center opacity-70 hover:opacity-100";

  const ulVariants = {
    open: {
      display: "block",
      visibility: "visible",
      transition: { type: "spring", duration: 0.3 },
    },
    closed: {
      display: "none",
      transition: { type: "spring", duration: 0.3 },
    },
  };

  const submitHandle = (e) => {
    e.preventDefault();
    router.push(`/?search=${searchInput}`);
    console.log("PIPI");
  };

  useEffect(() => {
    document.addEventListener("keydown", handleHideDropdown, true);
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("keydown", handleHideDropdown, true);
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return (
    <header className="flex gap-16 flex-col lg:flex-row justify-between items-center px-9 py-5 h-auto bg-gradient-to-l from-cyan-200 to-blue-500">
      <h1 className="text-4xl">Michał Miłek</h1>
      <div className="flex gap-10 flex-grow justify-evenly items-center max-w-7xl flex-wrap">
        <Link href="/">
          <div
            className={`${iconDiv} text-black group relative hover:text-black cursor-pointer transition-all `}>
            <HomeIcon className="h-8 w-8 text-black group-hover:animate-bounce" />
            <p className="font-bold transition-all duration-300 absolute top-[100%] text-transparent left-[50%] translate-x-[-50%] group-hover:text-black">
              HOME
            </p>
          </div>
        </Link>

        <div
          className={`${iconDiv} text-transparent relative group hover:text-black cursor-pointer transition-all `}>
          <FireIcon className="h-8 w-8 text-black group-hover:animate-bounce" />
          <p className="font-bold transition-all duration-300 absolute top-[100%] text-transparent left-[50%] translate-x-[-50%] group-hover:text-black">
            HOT
          </p>
        </div>

        <div
          className={`${iconDiv} text-transparent relative group hover:text-black cursor-pointer transition-all `}>
          <CheckIcon className="h-8 w-8 text-black group-hover:animate-bounce" />
          <p className="font-bold transition-all duration-300 absolute top-[100%] text-transparent left-[50%] translate-x-[-50%] group-hover:text-black">
            VERIFIED
          </p>
        </div>

        <div
          className={`${iconDiv} text-transparent relative group hover:text-black cursor-pointer transition-all `}>
          <PlayCircleIcon className="h-8 w-8 text-black group-hover:animate-bounce" />
          <p className="font-bold transition-all duration-300 absolute top-[100%] text-transparent left-[50%] translate-x-[-50%] group-hover:text-black">
            {" "}
            PLAYLIST
          </p>
        </div>

        <div
          ref={ref}
          onClick={() =>
            setSearchOn(true)
          } /* onBlur={()=>setSearchOn(false)} */
          className={`${iconDiv} text-transparent z-50 relative group hover:text-black cursor-pointer transition-all `}>
          <MagnifyingGlassIcon className="h-8 w-8 text-black group-hover:animate-bounce" />
          <p className="font-bold transition-all duration-300 absolute top-[100%] text-transparent left-[50%] translate-x-[-50%] group-hover:text-black">
            SEARCH
          </p>
          {searchOn && (
            <form
              onSubmit={(e) => submitHandle(e)}
              className="z-[100] text-black opacity-100 absolute right-0 top-[200%] lg:top-[200%] lg:left-[100%]">
              <div className="relative min-h-[30px] min-w-[250px]">
                <input
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="outline-none px-4 w-[100%] cursor-text h-[100%] absolute"
                  type="text"
                  placeholder="Search for a movie..."
                />
                <button
                  type="submit"
                  className="absolute z-[150] transition-all active:scale-50 text-black h-8 w-8 top-[0%] right-0">
                  <ChevronDoubleRightIcon className="h-8 w-8" />
                </button>
              </div>
            </form>
          )}
        </div>

        <div
          className={`${iconDiv} text-transparent relative group hover:text-black cursor-pointer transition-all `}>
          <UserIcon className="h-8 w-8 text-black group-hover:animate-bounce" />
          <p className="font-bold transition-all duration-300 absolute top-[100%] text-transparent left-[50%] translate-x-[-50%] group-hover:text-black">
            ACCOUNT
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
