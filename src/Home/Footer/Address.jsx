import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const Address = () => {
  return (
    <div>
      <div>
        <h3 className="text-lg font-semibold border-b-2 inline-block border-zinc-700 pb-1 hover:border-orange-500 hover:text-orange-500 transition duration-300 cursor-pointer mb-6 mt-2">
          Directions to Overnight Camp >>>{" "}
        </h3>
      </div>
      <h3 className="text-lg font-semibold border-b-2 inline-block border-zinc-700 pb-1 hover:border-orange-500 hover:text-orange-500 transition duration-300 cursor-pointer mb-20">
        Directions to Day Camp >>>
      </h3>
      <h3 className="text-xl font-semibold mb-6"> Mailing Address</h3>
      <p>1200 Camp Highland Road</p> <p>Ellijay GA 30540</p> <p>678.393.0300</p>
      <div className="flex mt-10 mb-6">
        <FaFacebookF className="border-2 border-zinc-700 text-zinc-600 bg-transparent hover:bg-orange-500 hover:text-white hover:border-orange-500 transition duration-300 h-8 w-8 p-1 rounded-sm font-semibold cursor-pointer" />
        <FiInstagram className="border-2 border-zinc-700 text-zinc-600 bg-transparent hover:bg-orange-500 hover:text-white hover:border-orange-500 transition duration-300 h-8 w-8 p-1 rounded-sm font-semibold cursor-pointer mx-5" />
        <FaLinkedinIn className="border-2 border-zinc-700 text-zinc-600 bg-transparent hover:bg-orange-500 hover:text-white hover:border-orange-500 transition duration-300 h-8 w-8 p-1 rounded-sm font-semibold cursor-pointer" />
      </div>
      <div>
        <button className="lg:mb-0 mb-6 border-2 border-zinc-700 bg-transparent hover:bg-orange-500 hover:text-white hover:border-orange-500 transition duration-300 uppercase rounded-3xl px-8 py-2 mr-4 text-sm font-semibold tracking-widest">
          Newsletter
        </button>
        <button className="border-2 border-zinc-700 bg-transparent hover:bg-orange-500 hover:text-white hover:border-orange-500 transition duration-300 uppercase rounded-3xl px-8 py-2 mr-4 text-sm font-semibold tracking-widest">
          Photos
        </button>
        <button className="border-2 border-zinc-700 bg-transparent hover:bg-orange-500 hover:text-white hover:border-orange-500 transition duration-300 uppercase rounded-3xl px-8 py-2 text-sm font-semibold tracking-widest">
          Blog
        </button>
      </div>
    </div>
  );
};

export default Address;
