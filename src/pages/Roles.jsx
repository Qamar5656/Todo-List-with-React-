import React from "react";
import { Link } from "react-router-dom";

const Roles = () => {
  return (
    <>
      <div className=" bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white shadow-lg p-8 border rounded-md w-full max-w-md">
          <h1 className="font-bold text-2xl mb-6 text-center">Login</h1>
          <div className="flex flex-col gap-2">
            <Link
              to="/login"
              className="border font-semibold rounded-lg bg-purple-600 hover:bg-purple-500 px-3 py-1 cursor-pointer text-white"
            >
              Admin
            </Link>
            <Link
              to="/login"
              className="border font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 px-3 py-1 cursor-pointer text-white"
            >
              User
            </Link>
            <Link
              to="/login"
              className="border font-semibold rounded-lg bg-orange-400 hover:bg-orange-300 text-black px-3 py-1 cursor-pointer"
            >
              Guest
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roles;
