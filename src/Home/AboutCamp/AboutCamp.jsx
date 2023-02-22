import React from "react";

const AboutCamp = () => {
  return (
    <div className="my-20 text-center">
      <h2 className="text-4xl mb-10  font-semibold text-zinc-500 tracking-widest">
        BUILDING LEADERS. <br /> STRENGTHENING FAMILIES. <br />{" "}
        <span className="text-teal-400">ENGAGING</span>{" "}
        <span className="text-red-400">THE HEART</span>
      </h2>
      <p className="text-gray-500 text-sm mb-14">
        Camp Highland crafts impactful experiences that develop leaders and
        engage the heart <br /> through summer camps, family retreats, group
        retreats and corporate events.
      </p>
      <button className=" px-6 py-2 text-sm border hover:border-orange-500 hover:border border-zinc-600 bg-transparent font-bold tracking-wide hover:text-white text-zinc-600 uppercase transition-colors duration-300 transform  hover:bg-orange-500  rounded-3xl">
        About camp highland
      </button>
    </div>
  );
};

export default AboutCamp;
