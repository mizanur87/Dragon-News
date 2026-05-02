"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathName = usePathname();
  const isActve = href === pathName;
  return (
    <Link
      className={`${isActve ? "border-b-2 border-b-red-500" : ""}`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
