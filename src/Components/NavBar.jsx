import chipIcon from "../Assets/icons8-chip-60 (1).webp";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";
import { AiFillGithub } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import SideMenu from "./SideMenu";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "../features/reducer";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [bg, setBg] = useState("dark:navbarBg bg-white");
  const divRef = useRef();
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.data.darkMode);
  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 65) {
        setBg("bg-transparent");
      } else {
        setBg("dark:navbarBg bg-white");
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
      className={`h-[65px] fixed w-full left-0 top-0 backdrop-filter backdrop-blur-lg z-30 bg-opacity-60 ${bg}`}
    >
      <div className="container relative z-10 flex items-center justify-between w-full h-full mx-auto sm:px-16">
        <Link to="/">
          <div className="flex items-center px-2 space-x-2 font-semibold cursor-pointer lightTextMode dark:text-white logo group">
            <img
              src={chipIcon}
              className="w-5 h-5 transition-all transform rotate-[-45deg] group-hover:rotate-0 duration-300"
            />
            <h1 className="text-xl font-semibold">Hadi</h1>
          </div>
        </Link>
        <ul className="items-center flex-1 hidden px-16 space-x-4 text-lg lightTextMode dark:text-white lists sm:flex">
          <Link to="/">
            <li className="transition-all font-bold text-sm duration-300 cursor-pointer dark:hover:text-[#ffce45] hover:text-red-500">
              About
            </li>
          </Link>
          <Link to="/works">
            <li className="transition-all font-bold text-sm duration-300 cursor-pointer hover:text-red-500 dark:hover:text-[#ffce45]">
              Works
            </li>
          </Link>
          <li className="transition-all font-bold text-sm duration-300 cursor-pointer hover:text-red-500 dark:hover:text-[#ffce45]">
            <a
              className="flex items-center space-x-1"
              href="https://github.com/hadi21k/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub className="w-[16px] h-[16px] " />
              <h1>Source</h1>
            </a>
          </li>
        </ul>
        <div className="flex items-center px-2 space-x-2 btns">
          <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
              key={darkMode}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="mode"
            >
              {localStorage.getItem("darkMode") === "true" ? (
                <div
                  onClick={() => {
                    dispatch(setDarkMode());
                    localStorage.setItem("darkMode", "false");
                  }}
                  className="w-[40px] h-[40px] grid cursor-pointer place-items-center rounded-lg btnBg"
                >
                  <SunIcon className="w-[20px] h-[20px]" />
                </div>
              ) : (
                <div
                  onClick={() => {
                    dispatch(setDarkMode());
                    localStorage.setItem("darkMode", "true");
                  }}
                  className="w-[40px] cursor-pointer h-[40px] grid place-items-center bg-purple-800 text-white transition-all duration-500 rounded-lg"
                >
                  <MoonIcon className="w-[20px] h-[20px]" />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
