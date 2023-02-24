import React from "react";

const Blog = () => {
  return (
    <div className="flex  px-24 py-14">
      <div className="w-1/3 flex justify-center">
        <div className="mx-auto">
          <img
            className="flex justify-center"
            src="https://camphighland.com/wp-content/uploads/2022/10/1-300x232.jpg"
            alt=""
          />
          <p className="font-semibold w-80 mt-4">
            7th-12th graders can experience Overnight Camp at Winter Camp!!
          </p>
          <button className="mt-5  px-6 py-2 text-sm border border-orange-500 hover:border hover:border-zinc-600 hover:bg-transparent font-bold tracking-wide text-white hover:text-zinc-600 uppercase transition-colors duration-300 transform  bg-orange-500  hover:btn-outline rounded-3xl">
            Learn More
          </button>
        </div>
      </div>
      <div className="w-2/3">
        <h3 className="font-bold text-xl border-b-2 border-orange-500">
          Recent Blog Posts
        </h3>

        <div className="flex mt-3">
          <div className="w-1/2">
            <img
              className="w-80 h-52"
              src="https://camphighland.com/wp-content/uploads/2021/12/2022-jpg.jpg"
              alt=""
            />
            <h4 className="text-lg font-semibold w-80 mt-5">
              Reflections and Expectations: Fighting for the hearts of this
              generation in the year ahead!
            </h4>
            <p className="w-80 text-xs mt-5 text-gray-400">
              Are we losing the battle? Do you remember winning? Games, athletic
              events, achieving personal goals, and the big win your team has
              been working towards
            </p>
          </div>

          <div className="w-1/2">
            <img
              className="w-80 h-52"
              src="https://camphighland.com/wp-content/uploads/2021/11/November-2021-Newsletter.jpg"
              alt=""
            />
            <h4 className="text-lg font-semibold w-80 mt-5">
              Add a little Camp Highland to your Thanksgiving gathering! Here’s
              how:
            </h4>
            <p className="w-80 text-xs mt-5 text-gray-400">
              What do Summer Camp and Thanksgiving have in common? Traditions!
              We have many meaningful, time-honored traditions at Camp Highland.
              Here are a few that you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
