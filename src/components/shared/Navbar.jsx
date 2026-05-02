import Image from "next/image";
import Link from "next/link";
import React from "react";
import avatar from "@/assets/user.png";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className=" mt-6 flex justify-between items-center container mx-auto">
      <div></div>
      <ul className=" flex gap-2 text-gray-400 md:ml-30">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about-us"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/career"}>Career</NavLink>
        </li>
      </ul>
      <div className="flex gap-2 justify-center items-center">
        <Image src={avatar} alt="User Avatar" width={60} height={60} />
        <button className="btn bg-black text-white">
          <Link href={"/login"}>Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
