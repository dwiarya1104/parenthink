import React from "react";
import logo from "../assets/logo.jpg";
import unj from "../assets/unj.png";

export const Navbar = () => {
  const navlists = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Articles", href: "#articles" },
    { name: "Multimedia Content", href: "#multimedia-content" },
    {
      name: "Alat Interaktif",
      href: "https://hogo.co.id/calculator/",
      target: "_blank",
      special: true,
    },
  ];
  return (
    <div className="fixed navbar bg-base-100 shadow-sm z-50">
      <div className="navbar-start w-full">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navlists.map((navlist, index) => (
              <li key={index}>
                <a
                  href={navlist.href}
                  className={`${
                    navlist.special
                      ? "bg-[#c18d5c] text-white hover:bg-[#c18d5c]"
                      : ""
                  }`}
                  target={navlist?.target ?? ""}
                >
                  {navlist.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex md:justify-start justify-between w-full items-center">
          <div className="md:flex hidden items-center gap-3">
            <img
              src={unj}
              alt="Logo"
              className="w-10 h-10 rounded-full md:block hidden"
            />
            <img
              src={logo}
              alt="Logo"
              className="w-10 h-10 rounded-full md:block hidden border border-[#c18d5c]"
            />
          </div>
          <a className="ml-2 font-bold text-xl">Parenthink</a>
          <div className="md:hidden flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-10 h-10 rounded-full border border-[#c18d5c]" />
            <img src={unj} alt="Logo" className="w-10 h-10 rounded-full" />
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navlists.map((navlist, index) => (
            <li key={index}>
              <a
                href={navlist.href}
                className={`${
                  navlist.special
                    ? "bg-[#c18d5c] text-white hover:bg-[#c18d5c]"
                    : ""
                }`}
                target={navlist?.target ?? ""}
              >
                {navlist.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
