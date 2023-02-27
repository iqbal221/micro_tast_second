import React from "react";
import Address from "./Address";
import Contact from "./Contact";

const Footer = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-10 px-28 py-20 bg-zinc-800 text-zinc-600">
      <div>
        <Contact></Contact>
      </div>

      <div>
        <Address></Address>
      </div>
    </div>
  );
};

export default Footer;
