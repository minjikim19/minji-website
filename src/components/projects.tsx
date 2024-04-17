import * as React from "react";
import "flowbite/dist/flowbite.min.css";
import "flowbite";
import Motiv from "../assets/Motiv.png";
import Trivia from "../assets/Trivia.png";
import Youryyc from "../assets/Youryyc.png";
import Yyclogo from "../assets/yyclogo.png";
import Motivlogo from "../assets/motivlogo.png";
import Trivialogo from "../assets/trivialogo.png";

const Project = () => {

  return (
    <div className="w-full max-w-screen-xl mx-auto p-6 md:py-12" id="projects">
      <div className="">
        <h1 className="text-4xl font-extrabold text-gray-900">Projects</h1>
        <div
          className="pt-10"
          id="accordion-flush"
          data-accordion="collapse"
          data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          data-inactive-classes="text-gray-500 dark:text-gray-400"
        >
          <h2 id="accordion-flush-heading-1">
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3"
              data-accordion-target="#accordion-flush-body-1"
              aria-expanded="true"
              aria-controls="accordion-flush-body-1"
            >
              <div className="pl-2 flex flex-row">
                <img className="h-7 w-7 rounded-lg" src={Motivlogo} />
                <h2 className="pl-2 text-2xl text-gray-700">Motiv Optimize</h2>
              </div>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-1"
            className="hidden"
            aria-labelledby="accordion-flush-heading-1"
          >
            <div className="py-5 border-b border-gray-200 dark:border-gray-700 flex flex-row items-center">
              <div className="basis-1/2 mr-4 ml-4">
                <p className="my-10">
                  Motiv Optimize is a web application that offers advanced web
                  testing management to help marketing teams optimize user
                  impressions and improve web design efficiency.
                </p>
                <div className="flex flex-row">
                  <span className="relative">
                    <span className="mr-4 relative bg-half-highlight hover:bg-blue-200 transition-all duration-300">
                      Typescript
                    </span>
                  </span>
                  <span className="relative">
                    <span className="mr-4 relative bg-half-highlight hover:bg-blue-200 transition-all duration-300">
                      React JS
                    </span>
                  </span>
                  <span className="relative">
                    <span className="mr-4 relative bg-half-highlight hover:bg-blue-200 transition-all duration-300">
                      Material UI
                    </span>
                  </span>
                  <span className="relative">
                    <span className="mr-4 relative bg-half-highlight hover:bg-blue-200 transition-all duration-300">
                      Vercel
                    </span>
                  </span>
                </div>
                <div className="my-2 mb-7 flex flex-row">
                  <span className="relative">
                    <span className="mr-4 relative bg-half-highlight hover:bg-blue-200 transition-all duration-300">
                      Amazon RDS
                    </span>
                  </span>
                  <span className="relative">
                    <span className="mr-4 relative bg-half-highlight hover:bg-blue-200 transition-all duration-300">
                      Amazon Lambda
                    </span>
                  </span>
                </div>
                <div>
                  <a
                    href="https://motiv-optimize.vercel.app/"
                    target="_blank"
                    aria-label="Motiv"
                    className=""
                  >
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="basis-1/2 ml-14 grid">
                <a
                  href="https://motiv-optimize.vercel.app/"
                  target="_blank"
                  aria-label="Motiv"
                  className=""
                >
                  <img
                    className="h-auto w-11/12 m:w-6/7 rounded-lg justify-self-center hover:shadow-2xl hover:h-full transition-all duration-300"
                    src={Motiv}
                  />
                </a>
              </div>
            </div>
          </div>
          <h2 id="accordion-flush-heading-2">
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
              data-accordion-target="#accordion-flush-body-2"
              aria-expanded="false"
              aria-controls="accordion-flush-body-2"
            >
              <div className="pl-2 flex flex-row">
                <img className="h-7 w-7 rounded-lg" src={Trivialogo} />
                <h2 className="pl-2 text-2xl text-gray-700">Endless Trivia</h2>
              </div>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-2"
            className="hidden"
            aria-labelledby="accordion-flush-heading-2"
          >
            <div className="py-5 border-b border-gray-200 dark:border-gray-700 flex flex-row items-center">
              <div className="basis-1/2 mr-4 ml-4">
                <p className="my-10">
                  Endless Trivia is a fully online trivia game that allows you
                  to play with friends and family without being in close contact
                  with them.
                </p>
                <div className="flex flex-row">
                  <span className="relative">
                    <span className="mr-4 relative bg-half-highlight hover:bg-blue-200 transition-all duration-300">
                      Javascript
                    </span>
                  </span>
                  <span className="relative">
                    <span className="mr-4 relative bg-half-highlight hover:bg-blue-200 transition-all duration-300">
                      React JS
                    </span>
                  </span>
                  <span className="relative">
                    <span className="mr-4 relative bg-half-highlight hover:bg-blue-200 transition-all duration-300">
                      Redux
                    </span>
                  </span>
                  <span className="relative">
                    <span className="mr-4 relative bg-half-highlight hover:bg-blue-200 transition-all duration-300">
                      Node JS
                    </span>
                  </span>
                </div>
                <div className="my-2 mb-7 flex flex-row">
                  <span className="relative">
                    <span className="mr-4 relative bg-half-highlight hover:bg-blue-200 transition-all duration-300">
                      Firebase
                    </span>
                  </span>
                  <span className="relative">
                    <span className="mr-4 relative bg-half-highlight hover:bg-blue-200 transition-all duration-300">
                      Express
                    </span>
                  </span>
                  <span className="relative">
                    <span className="mr-4 relative bg-half-highlight hover:bg-blue-200 transition-all duration-300">
                      Socket.io
                    </span>
                  </span>
                </div>
              </div>
              <div className="basis-1/2 ml-14">
                <img
                  className="h-auto w-11/12 object-fill m:w-6/7 rounded-lg justify-self-center hover:shadow-2xl transition-all duration-300"
                  src={Trivia}
                />
              </div>
            </div>
          </div>
          <h2 id="accordion-flush-heading-3">
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
              data-accordion-target="#accordion-flush-body-3"
              aria-expanded="false"
              aria-controls="accordion-flush-body-3"
            >
              <div className="pl-2 flex flex-row">
                <img className="h-7 w-7 rounded-lg" src={Yyclogo} />
                <h2 className="pl-2 text-2xl text-gray-700">Your YYC</h2>
              </div>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-3"
            className="hidden"
            aria-labelledby="accordion-flush-heading-3"
          >
            <div className="py-5 border-b border-gray-200 dark:border-gray-700 flex flex-row items-center">
              <div className="basis-1/2 mr-4 ml-4">
                <p className="my-10">
                  YourYYC tourist information kiosk is designed to help users
                  make the most of their trip by providing information about
                  local events, attractions, and restaurants, as well as helping
                  them save their selected spots to their personal device to
                  plan their trip.{" "}
                </p>
                <div className="my-2 mb-7 flex flex-row">
                  <span className="relative">
                    <span className="mr-4 relative bg-half-highlight hover:bg-blue-200 transition-all duration-300">
                      C#
                    </span>
                    <span className="mr-4 relative bg-half-highlight hover:bg-blue-200 transition-all duration-300">
                      Figma
                    </span>
                  </span>
                </div>
                <div>
                  <a
                    href="https://github.com/sebcontreras/YourYYC"
                    target="_blank"
                    aria-label="Motiv"
                    className=""
                  >
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="basis-1/2 ml-14 grid">
                <a
                  href="https://github.com/sebcontreras/YourYYC"
                  target="_blank"
                  aria-label="Motiv"
                  className=""
                >
                  <img
                    className="h-auto w-11/12 m:w-6/7 rounded-lg justify-self-center hover:shadow-2xl hover:h-full transition-all duration-300"
                    src={Youryyc}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
