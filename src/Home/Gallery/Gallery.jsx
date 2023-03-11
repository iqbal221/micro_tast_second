import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-1 cursor-pointer">
      <div className=" relative ">
        <img
          className="w-full h-96 hover:opacity-75 transition duration-200"
          src="https://camphighland.com/wp-content/uploads/2022/09/DSC05645.jpg"
          alt=""
        />
        <h2 className="absolute top-48 lg:left-52 left-24   text-white lg:text-4xl text-3xl font-bold">
          Summer Camps
        </h2>
      </div>

      <div className=" relative">
        <img
          className="w-full h-96 hover:opacity-75 transition duration-200"
          src="https://camphighland.com/wp-content/uploads/2018/06/IMG_2924-1.jpg"
          alt=""
        />
        <h2 className="absolute top-48 lg:left-52 left-24   text-white lg:text-4xl text-3xl font-bold">
          Family Retreats
        </h2>
      </div>
      <div className=" relative">
        <img
          className="w-full h-96 hover:opacity-75 transition duration-200"
          src="https://camphighland.com/wp-content/uploads/2018/08/IMG_5982.jpg"
          alt=""
        />
        <h2 className="absolute top-48 lg:left-52 left-24   text-white lg:text-4xl text-3xl font-bold">
          Group Retreats
        </h2>
      </div>
      <div className="relative">
        <img
          className="w-full h-96 hover:opacity-75 transition duration-200"
          src="https://camphighland.com/wp-content/uploads/2018/08/IMG_6392-1.jpg"
          alt=""
        />
        <h2 className="absolute top-48 lg:left-52 left-24   text-white lg:text-4xl text-3xl font-bold">
          Corporate Events
        </h2>
      </div>
    </div>
  );
};

export default Gallery;
