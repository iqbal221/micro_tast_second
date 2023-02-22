import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header text-center pt-4">
      <button className=" px-6 py-2 text-sm border border-orange-500 hover:border hover:border-zinc-600 hover:bg-transparent font-bold tracking-wide text-white hover:text-zinc-600 uppercase transition-colors duration-300 transform  bg-orange-500  hover:btn-outline rounded-3xl">
        Register for winter camp
      </button>
    </div>
  );
};

export default Header;
