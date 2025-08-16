import React from "react";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <>
      <div className="text-red-400 flex items-center justify-center flex-col font-bold min-h-screen">
        <p>Page 404 </p>
        <div> Unauthorized Page </div>
        <Link to="/login" className="text-black cursor-pointer">
          {" "}
          Back to Login Page{" "}
        </Link>
      </div>
    </>
  );
};

export default Unauthorized;
