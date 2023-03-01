import React from "react";
import summerImage from "../../assets/summer.jpg";

const Gallery = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-1 cursor-pointer">
      <div className="relative ">
        <div className=" hover:opacity-75  transition duration-200">
          <img className="w-full h-96  " src={summerImage} alt="" />
        </div>

        <h2 className="absolute top-48 left-52  text-white text-4xl font-bold">
          Summer Camps
        </h2>
      </div>
      <div className="relative ">
        <img
          className="w-full h-96 hover:opacity-75 transition duration-200"
          src="https://camphighland.com/wp-content/uploads/2018/08/IMG_8426.jpg"
          alt=""
        />
        <h2 className="absolute top-48 left-52  text-white text-4xl font-bold">
          Family Retreats
        </h2>
      </div>
      <div className="relative">
        <img
          className="w-full h-96 hover:opacity-75 transition duration-200"
          src="https://camphighland.com/wp-content/uploads/2018/08/IMG_5982.jpg"
          alt=""
        />
        <h2 className="absolute top-48 left-52  text-white text-4xl font-bold">
          Group Retreats
        </h2>
      </div>
      <div className="relative">
        <img
          className="w-full h-96 hover:opacity-75 transition duration-200"
          src="https://camphighland.com/wp-content/uploads/2018/08/IMG_6392-1.jpg"
          alt=""
        />
        <h2 className="absolute top-48 left-52  text-white text-4xl font-bold">
          Corporate Events
        </h2>
      </div>
    </div>
  );
};

export default Gallery;
