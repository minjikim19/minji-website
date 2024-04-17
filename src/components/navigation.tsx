import * as React from "react";
import logo from "../assets/logo.png";

const pdfPath =
  "https://docs.google.com/document/d/1ZywC6ce0v6CUcWWuoz-ONKjE7J3K7rrV/edit?usp=sharing&ouid=109689802663310353174&rtpof=true&sd=true";
const handleOpen = () => {
  window.open(pdfPath, "_blank");
};

const Navigation = () => {
  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 shadow">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/#"
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
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-bold border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 relative after:block after:h-[4px] after:bg-blue-300 after:scale-x-0 after:hover:scale-x-100 after:duration-300 after:origin-left"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="block py-2 px-3 relative after:block after:h-[4px] after:bg-blue-300 after:scale-x-0 after:hover:scale-x-100 after:duration-300 after:origin-left"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/#projects"
                  className="block py-2 px-3 relative after:block after:h-[4px] after:bg-blue-300 after:scale-x-0 after:hover:scale-x-100 after:duration-300 after:origin-left"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
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
