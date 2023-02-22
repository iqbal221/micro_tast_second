import React from "react";

const MenuBar = () => {
  return (
    <nav
      x-data="{ isOpen: false }"
      className="relative bg-zinc-800  shadow dark:bg-gray-800"
    >
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <a href="#">
            <img
              className="w-28 h-20 border-red-500"
              src="https://camphighland.com/wp-content/uploads/2018/04/logo.png"
              alt=""
            />
          </a>

          <div className="flex lg:hidden">
            <button
              x-cloak
              onClick="isOpen = !isOpen"
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              <svg
                x-show="!isOpen"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 8h16M4 16h16"
                />
              </svg>

              <svg
                x-show="isOpen"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          x-cloak
          onClick="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']"
          className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center"
        >
          <div className="text-sm font-semibold text-right md:flex-row md:mx-6">
            <div className="mb-7">
              <a
                className="my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-orange-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                href="#"
              >
                About
              </a>
              <a
                className="my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-orange-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                href="#"
              >
                Donate
              </a>
              <a
                className="my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-orange-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                href="#"
              >
                Summer Staff
              </a>
              <a
                className="my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-orange-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                href="#"
              >
                Parent Login
              </a>
              <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform border-2 border-orange-500 hover:bg-orange-500 rounded-3xl ">
                Register
              </button>
            </div>
            <div>
              <a
                className="my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-orange-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                href="#"
              >
                Summer Camps
              </a>
              <a
                className="my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-orange-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                href="#"
              >
                Family Retreats
              </a>
              <a
                className="my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-orange-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                href="#"
              >
                Group Retreats
              </a>
              <a
                className="my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-orange-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                href="#"
              >
                Corporate Events
              </a>
              <a
                className="my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-orange-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                href="#"
              >
                Winter Camp
              </a>
              <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform border-2 border-orange-500 hover:bg-orange-500 rounded-3xl">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;
