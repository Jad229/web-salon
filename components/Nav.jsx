"use client";

import { adminNavOptions, navOptions } from "@utils";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [isAdminView, setIsAdminView] = useState(false);
  const [isAuthUser, setIsAuthUser] = useState(false);
  const { data: session, status } = useSession();
  useEffect(() => {
    if (status === "authenticated") {
      setIsAuthUser(true);
    }

    if (session?.user?.role === "admin") {
      setIsAdminView(true);
    }
  }, [session]);
  function NavItems() {
    return (
      <div className="flex-between w-full md:flex md:w-auto" id="nav-items">
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
          {isAdminView
            ? adminNavOptions.map((item) => (
                <Link key={item.id} href={item.path}>
                  <li className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0">
                    {item.label}
                  </li>
                </Link>
              ))
            : navOptions.map((item) => (
                <Link key={item.id} href={item.path}>
                  <li
                    className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0"
                    key={item.id}
                  >
                    {item.label}
                  </li>
                </Link>
              ))}
        </ul>
      </div>
    );
  }

  return (
    <nav className="sticky top-0 bg-neutral-900 flex-between z-50 backdrop-filter backdrop-blur-lg bg-opacity-10 w-screen py-3 px-5 md:px-24 ">
      <Link href="/" className="flex flex-center gap-2">
        <p className="logo_text lg:hidden">Pretty Queen</p>
      </Link>
      {/* Desktop Nav */}
      <div className="hidden lg:flex justify-between items-center w-full relative">
        <Link href="/" className="flex gap-2 flex-center">
          <p className="logo_text">Pretty Queen</p>
        </Link>
        <div className="flex-center gap-5">
          <NavItems />
        </div>
        <div className="flex-center gap-3 md:gap-5">
          {!isAdminView && isAuthUser ? (
            <div className="flex-center gap-5">
              <Link href="/api/auth">
                <button className="yellow_btn">Account</button>
              </Link>
              <Link href="/cart">
                <button className="outline_btn">Cart</button>
              </Link>
            </div>
          ) : null}
          {isAdminView ? (
            isAdminView ? (
              <button className="outline_btn">Client View</button>
            ) : (
              <button className="outline_btn">Admin View</button>
            )
          ) : null}
          {isAuthUser ? (
            <Link href="/login">
              <button onClick={() => signOut()} className="outline_btn">
                Logout
              </button>
            </Link>
          ) : (
            <Link href="login">
              <button className="outline_btn">Login</button>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="flex lg:hidden">
        <button onClick={() => setToggleDropdown((prevState) => !prevState)}>
          <IoMenu size={25} />
        </button>
        {toggleDropdown && (
          <div className="dropdown flex-start flex-col space-y-6">
            <button
              className="self-end"
              onClick={() => setToggleDropdown((prevState) => !prevState)}
            >
              <IoClose size={25} />
            </button>
            <Link href="/products">Products</Link>
            <Link href="/services">Services</Link>
            {isAuthUser ? (
              <div className="flex-start gap-5">
                <Link href="/api/auth">
                  <button className="yellow_btn">Account</button>
                </Link>
                <Link href="/cart">
                  <button className="outline_btn">Cart</button>
                </Link>
                <Link href="/login">
                  <button onClick={() => signOut()} className="outline_btn">
                    Logout
                  </button>
                </Link>
              </div>
            ) : (
              <div className="flex-start gap-5">
                <Link href="login">
                  <button className="outline_btn">Login</button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
