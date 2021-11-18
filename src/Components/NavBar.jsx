import { ChipIcon } from "@heroicons/react/solid";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import SideMenu from "./SideMenu";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "../features/reducer";
const NavBar = () => {
  const [bg, setBg] = useState("navbarBg");
  const divRef = useRef();
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.data.darkMode);
  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 65) {
        setBg("bg-transparent");
      } else {
        setBg("navbarBg");
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });
  return (
    <div
      ref={divRef}
      className={`h-[65px] teko fixed w-full left-0 top-0 backdrop-filter backdrop-blur-sm bg-opacity-70 ${bg}`}
    >
      <div className="container relative z-10 flex items-center justify-between w-full h-full mx-auto">
        <Link to="/">
          <div className="flex items-center px-2 space-x-1 font-semibold text-white cursor-pointer logo group">
            <ChipIcon className="w-6 h-6 text-white transition-all transform rotate-[-45deg] group-hover:rotate-0 duration-300" />
            <h1 className="text-2xl">Hadi</h1>
          </div>
        </Link>
        <ul className="items-center flex-1 hidden px-16 space-x-4 text-lg text-white lists sm:flex">
          <Link to="/">
            <li className="transition-all duration-300 cursor-pointer hover:text-red-500">
              About
            </li>
          </Link>
          <Link to="/works">
            <li className="transition-all duration-300 cursor-pointer hover:text-red-500 ">
              Works
            </li>
          </Link>
          <li className="transition-all duration-300 cursor-pointer hover:text-red-500">
            <a
              className="flex items-center space-x-1"
              href="https://www.github.com/hadi21k"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub className="w-[16px] h-[16px] " />
              <h1>Source</h1>
            </a>
          </li>
        </ul>
        <div className="flex items-center px-2 space-x-2 btns">
          <div className="mode">
            {darkMode ? (
              <div
                onClick={() => dispatch(setDarkMode())}
                className="w-[40px] cursor-pointer h-[40px] grid place-items-center hover:bg-yellow-300 transition-all duration-500 rounded-lg btnBg"
              >
                <MoonIcon className="w-[20px] h-[20px] text-black" />
              </div>
            ) : (
              <div
                onClick={() => dispatch(setDarkMode())}
                className="w-[40px] h-[40px] grid cursor-pointer place-items-center rounded-lg btnBg"
              >
                <SunIcon className="w-[20px] h-[20px] text-black" />
              </div>
            )}
          </div>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
