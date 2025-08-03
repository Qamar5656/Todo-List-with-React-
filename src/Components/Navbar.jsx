import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex">
        <div>
          <h2 className="text-2xl font-bold">Navbar</h2>
        </div>
        <div>
          <div className="flex">
            <Link to="/">Home</Link>
            <Link to="/About"> About</Link>
            <Link to="/Services">Services</Link>
            <Link to="/Blog">Blog</Link>
          </div>
        </div>
        <div>
          <button>Contact Us</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
