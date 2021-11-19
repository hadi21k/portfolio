import { Menu, Transition } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
const SideMenu = () => {
  return (
    <>
      <Menu as="div">
        <Menu.Button className="w-[40px] h-[40px] outline-none cursor-pointer transition-all duration-300 border sm:hidden rounded-lg border-[#111e27] dark:border-white grid place-items-center">
          <MenuIcon className="w-[24px] lightTextMode dark:text-white h-[24px]" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            as="ul"
            className="absolute flex flex-col bottom-[-200px] h-[200px] w-[200px] right-5 outline-none rounded-lg justify-between py-3 btnBg "
          >
            <Link to="/">
              <Menu.Item as="li" className="h-[48px] w-full text-xl">
                {({ active }) => (
                  <h1
                    className={`${
                      active ? "bg-[#ffc832]" : "text-black"
                    } w-full h-full flex items-center px-4 transition-all duration-300`}
                  >
                    About
                  </h1>
                )}
              </Menu.Item>
            </Link>
            <Link to="/works">
              <Menu.Item
                as="li"
                className="h-[48px] w-full text-xl flex items-center"
              >
                {({ active }) => (
                  <h1
                    className={`${
                      active ? "bg-[#ffc832]" : "text-black"
                    }  w-full h-full flex items-center px-4 transition-all duration-300`}
                  >
                    Works
                  </h1>
                )}
              </Menu.Item>
            </Link>
            <a
              href="https://github.com/hadi21k/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Menu.Item
                as="li"
                href="#"
                className="w-full text-xl h-[48px] flex items-center"
              >
                {({ active }) => (
                  <div
                    href="#"
                    className={`flex transition-all duration-300 px-4 w-full h-full items-center space-x-1 ${
                      active ? "bg-[#ffc832]" : "text-black"
                    }`}
                  >
                    <AiFillGithub className="w-[20px] h-[20px] " />
                    <h1>Source</h1>
                  </div>
                )}
              </Menu.Item>
            </a>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default SideMenu;
