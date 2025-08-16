import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container flex justify-between py-4">
        <div>
          <h2 className="text-2xl font-bold">Navbar</h2>
        </div>
        <div>
          <div className="flex items-center gap-6 text-lg font-semibold ">
            <Link to="/">Home</Link>
            <Link to="/About"> About</Link>
            <Link to="/Services">Services</Link>
            <Link to="/Blog">Blog</Link>
          </div>
        </div>
        <div>
          <button className="border cursor-pointer bg-blue-500 hover:bg-blue-400 p-2 rounded-xl font-semibold text-white ">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
