import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSideBar = () => {
  return (
    <div>
      <h2 className="text-center text-black font-bold text-md">Login With</h2>
      <div className="flex flex-col gap-2 mt-3">
        <button className="btn bg-blue-500 text-white">
          <FaGoogle /> Login WIth Google
        </button>
        <button className="btn bg-black text-white">
          <FaGithub />
          Login WIth GitHub
        </button>
      </div>
    </div>
  );
};

export default RightSideBar;
