import React from "react";

const Contact = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-6">Contact</h3>
      <h3 className="font-bold mb-2">I'm Contacting With Regards To:</h3>
      <select className="select select-bordered w-full mb-4 bg-zinc-700 text-zinc-500 text-lg">
        <option selected>Summer Camps</option>
        <option>Family Retreats</option>
        <option>Group Retreats</option>
        <option>Corporate Events</option>
      </select>
      <h3 className="mb-2 font-bold">Name</h3>
      <div className="grid lg:grid-cols-2 mb-4 gap-x-4 gap-y-10 text-zinc-700">
        <input
          type="text"
          placeholder="First"
          className="input input-bordered w-full max-w-xs rounded-3xl  text-lg ps-3 bg-zinc-700 text-zinc-700"
        />
        <input
          type="text"
          placeholder="Last"
          className="input input-bordered w-full max-w-xs rounded-3xl text-lg ps-3 bg-zinc-700 "
        />
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered w-full max-w-xs rounded-3xl text-lg ps-3 bg-zinc-700 "
        />
        <input
          type="text"
          placeholder="Phone"
          className="input input-bordered w-full max-w-xs rounded-3xl text-lg ps-3 bg-zinc-700 "
        />
      </div>
      <h3 className="font-bold mb-2">
        Your Message for us regarding Summer Camps
      </h3>
      <textarea className="textarea textarea-bordered h-36 w-full bg-zinc-700 text-zinc-500"></textarea>
      <div className="flex justify-end mt-6">
        <button className="border border-zinc-700 bg-transparent hover:bg-orange-500 hover:text-white transition duration-300 uppercase rounded-3xl px-8 py-2 font-semibold tracking-widest">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
