"use client";

import Link from "next/link";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className="z-100 flex-between w-full pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <p className="logo_text">Pretty Queen</p>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden sm:flex relative">
        <div className="flex-center gap-3 md:gap-5">
          <Link href="/products">Products</Link>
          <Link href="/services">Services</Link>
          <Link href="/api/auth">
            <button className="yellow_btn">User</button>
          </Link>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="flex sm:hidden relative">
        <button onClick={() => setToggleDropdown((prevState) => !prevState)}>
          <IoMenu size={25} />
        </button>
        {toggleDropdown && (
          <div className="dropdown flex">
            <button
              onClick={() => setToggleDropdown((prevState) => !prevState)}
            >
              <IoClose size={25} />
            </button>
            <Link href="/products">Products</Link>
            <Link href="/services">Services</Link>
            <Link href="/api/auth">
              <button className="yellow_btn">User</button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
