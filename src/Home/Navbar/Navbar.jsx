import React from "react";

const MenuBar = () => {
  return (
    <div className="navbar bg-gray-800 lg:px-10 px-2">
      <div className="navbar-start ">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-white lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-800 rounded-box w-52"
          >
            <li>
              <a
                className="my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-orange-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                href="#"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-orange-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                href="#"
              >
                Packages
              </a>
            </li>

            <li>
              <a
                className="my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-orange-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                href="#"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                className="my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-orange-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                href="#"
              >
                Activities
              </a>
            </li>
            <li>
              <button className="w-32 px-4 py-2 mb-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform border-2 border-orange-500 hover:bg-orange-500 rounded-3xl ">
                Book Now
              </button>
            </li>

            <li>
              <a
                className="my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-orange-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                href="#"
              >
                Summer Camps
              </a>
            </li>
            <li>
              <a
                className="my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-orange-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                href="#"
              >
                Family Retreats
              </a>
            </li>
            <li>
              <a
                className="my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-orange-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                href="#"
              >
                Group Retreats
              </a>
            </li>

            <li>
              <a
                className="my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-orange-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                href="#"
              >
                Corporate Events
              </a>
            </li>

            <li>
              <a
                className="my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-orange-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                href="#"
              >
                Celebration
              </a>
            </li>

            <li>
              <button className="w-32 px-6 py-2 mb-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform border-2 border-orange-500 hover:bg-orange-500 rounded-3xl">
                Contact
              </button>
            </li>
          </ul>
        </div>
        <div className="lg:ml-0 ml-4">
          <img
            className="lg:w-28 w-14 lg:h-20 h-10  border-red-500"
            src="https://camphighland.com/wp-content/uploads/2018/04/logo.png"
            alt=""
          />
        </div>
      </div>
      <div className=" hidden lg:block ">
        <ul className="flex justify-end items-center px-1 w-[900px] h-[55px]">
          <li>
            <a
              className="my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-orange-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-orange-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              Packages
            </a>
          </li>

          <li>
            <a
              className="my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-orange-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              className="my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-orange-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              Activities
            </a>
          </li>
          <li>
            <button className="w-32 px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform border-2 border-orange-500 hover:bg-orange-500 rounded-3xl ">
              Book Now
            </button>
          </li>
        </ul>

        <ul className="flex px-1 w-[900px] h-[55px] justify-end items-center ">
          <li>
            <a
              className="my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-orange-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              Summer Camps
            </a>
          </li>
          <li>
            <a
              className="my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-orange-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              Family Retreats
            </a>
          </li>
          <li>
            <a
              className="my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-orange-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              Group Retreats
            </a>
          </li>

          <li>
            <a
              className="my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-orange-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              Corporate Events
            </a>
          </li>

          <li>
            <a
              className="my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-orange-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              Celebration
            </a>
          </li>

          <li>
            <button className="w-32 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform border-2 border-orange-500 hover:bg-orange-500 rounded-3xl">
              Contact
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuBar;
