import React from "react";
import Address from "./Address";
import Contact from "./Contact";

const Footer = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-10 lg:px-28 px-8 py-20 bg-zinc-800 text-zinc-600">
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
