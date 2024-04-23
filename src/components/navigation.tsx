import * as React from "react";
import { useState } from "react";
import logo from "../assets/logo.png";

const Navigation = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  const handleLinkClick = () => {
    setIsNavbarOpen(false);
  };

  const pdfPath =
    "https://docs.google.com/document/d/12bbdvrhqOOigYMyawyt522LCqM8lmUzG5MehkuxENME/edit?usp=sharing";
  const handleOpen = () => {
    window.open(pdfPath, "_blank");
  };

  return (
    <div>
      <nav className="bg-white w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 shadow fixed">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 md:p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-12" alt="" />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-blue-500 font-bold outline outline-blue-400 hover:bg-blue-400 hover:text-white focus:ring-4 rounded-lg text-sm px-4 py-2 text-center"
              onClick={handleOpen}
            >
              Resume
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded={isNavbarOpen ? "true" : "false"}
              onClick={handleNavbarToggle}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`${
              isNavbarOpen ? "flex" : "hidden"
            } items-center justify-between w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-bold border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  onClick={handleLinkClick}
                  className="block py-2 px-3 relative after:block after:h-[4px] after:bg-blue-300 after:scale-x-0 after:hover:scale-x-100 after:duration-300 after:origin-left"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={handleLinkClick}
                  className="block py-2 px-3 relative after:block after:h-[4px] after:bg-blue-300 after:scale-x-0 after:hover:scale-x-100 after:duration-300 after:origin-left"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={handleLinkClick}
                  className="block py-2 px-3 relative after:block after:h-[4px] after:bg-blue-300 after:scale-x-0 after:hover:scale-x-100 after:duration-300 after:origin-left"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="block py-2 px-3 relative after:block after:h-[4px] after:bg-blue-300 after:scale-x-0 after:hover:scale-x-100 after:duration-300 after:origin-left"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
