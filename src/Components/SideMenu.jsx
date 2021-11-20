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
            className="absolute flex flex-col bottom-[-200px] h-[200px] w-[200px] right-5 outline-none rounded-lg justify-between py-2 dark:bg-[#ffce45] bg-red-500 "
          >
            <Link to="/">
              <Menu.Item as="li" className="h-[48px] w-full text-xl">
                {({ active }) => (
                  <h1
                    className={`${
                      active
                        ? "dark:bg-[#ffc832] bg-red-400"
                        : "dark:text-black text-white"
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
                      active
                        ? "dark:bg-[#ffc832] bg-red-400"
                        : "dark:text-black text-white"
                    }  w-full h-full flex items-center px-4 transition-all duration-300`}
                  >
                    Works
                  </h1>
                )}
              </Menu.Item>
            </Link>
            <Menu.Item
              as="li"
              href="#"
              className="w-full text-xl h-[48px] flex items-center"
            >
              {({ active }) => (
                <a
                  href="https://github.com/hadi21k/portfolio"
                  className={`flex transition-all duration-300 px-4 w-full h-full items-center space-x-1 ${
                    active
                      ? "dark:bg-[#ffc832] bg-red-400"
                      : "dark:text-black text-white"
                  }`}
                >
                  <AiFillGithub className="w-[20px] h-[20px] " />
                  <h1>Source</h1>
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default SideMenu;
