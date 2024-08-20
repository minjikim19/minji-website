import React, { useEffect } from "react";
import "flowbite/dist/flowbite.min.css";
import "flowbite";
import Motiv from "../assets/Motiv.png";
import Trivia from "../assets/Trivia.png";
import Youryyc from "../assets/Youryyc.png";
import Yyclogo from "../assets/yyclogo.png";
import Motivlogo from "../assets/motivlogo.png";
import Trivialogo from "../assets/trivialogo.png";
import Ecologo from "../assets/ecopickerlogo.png";
import TTlogo from "../assets/TTlogo.png";
import EcoPicker1 from "../assets/EP1.png";
import EcoPicker2 from "../assets/EP2.png";
import EcoPicker3 from "../assets/EP3.png";
import EcoPicker4 from "../assets/EP4.png";
import EcoPicker5 from "../assets/EP5.png";
import TT from "../assets/TT.png";

const Project = () => {
  useEffect(() => {
    const updateButtonStyles = () => {
      const buttons = document.querySelectorAll(".custom-carousel-btn");
      buttons.forEach((button) => {
        const isActive = button.getAttribute("aria-current") === "true";
        button.classList.toggle("bg-blue-100", isActive);
        button.classList.toggle("bg-blue-300", !isActive);
      });
    };

    // Initial style update
    updateButtonStyles();

    // Set a timeout to handle delayed style application
    const timer = setInterval(updateButtonStyles, 500);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  return (
    <div className="w-full max-w-screen-xl mx-auto p-6 md:py-12" id="projects">
      <div className="">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
          Projects
        </h1>
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
                <img className="h-7 w-7 rounded-lg" src={Ecologo} />
                <h2 className="pl-2 text-2xl text-gray-700">Eco Picker</h2>
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
            className=""
            aria-labelledby="accordion-flush-heading-1"
          >
            <div className="py-5 border-b border-gray-200 dark:border-gray-700 flex flex-col items-center md:flex-row">
              <div className="basis-1/2 mr-4 ml-4">
                <p className="my-10 text-lg">
                  Eco Picker is a Flutter app that turns cleaning up your
                  surroundings into a fun game. Users earn points for collecting
                  different types of trash, with higher scores awarded for more
                  harmful waste.
                  <br />
                  <br />I designed the UX/UI and implemented the overall
                  front-end components of the application.
                </p>
                <div className="flex flex-wrap mb-4">
                  <span className="relative">
                    <span className="mr-4 relative bg-half-highlight hover:bg-blue-200 transition-all duration-300">
                      Flutter
                    </span>
                  </span>
                  <span className="relative">
                    <span className="mr-4 relative bg-half-highlight hover:bg-blue-200 transition-all duration-300">
                      Dart
                    </span>
                  </span>
                  <span className="relative">
                    <span className="mr-4 relative bg-half-highlight hover:bg-blue-200 transition-all duration-300">
                      Android Studio
                    </span>
                  </span>
                  <span className="relative">
                    <span className="mr-4 relative bg-half-highlight hover:bg-blue-200 transition-all duration-300">
                      Kotlin
                    </span>
                  </span>
                  <span className="relative">
                    <span className="mr-4 relative bg-half-highlight hover:bg-blue-200 transition-all duration-300">
                      Spring Boot
                    </span>
                  </span>
                </div>
                <div>
                  <a
                    href="https://github.com/Eco-Picker/eco-picker"
                    target="_blank"
                    aria-label="Eco Picker"
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
                <div
                  id="default-carousel"
                  className="relative w-full"
                  data-carousel="slide"
                >
                  <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    <div
                      className="hidden duration-700 ease-in-out"
                      data-carousel-item
                    >
                      <img
                        src={EcoPicker4}
                        className="absolute block w-4/5 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="..."
                      />
                    </div>
                    <div
                      className="hidden duration-700 ease-in-out"
                      data-carousel-item
                    >
                      <img
                        src={EcoPicker1}
                        className="absolute block w-4/5 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="..."
                      />
                    </div>
                    <div
                      className="hidden duration-700 ease-in-out"
                      data-carousel-item
                    >
                      <img
                        src={EcoPicker2}
                        className="absolute block w-4/5 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="..."
                      />
                    </div>
                    <div
                      className="hidden duration-700 ease-in-out"
                      data-carousel-item
                    >
                      <img
                        src={EcoPicker3}
                        className="absolute block w-4/5 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="..."
                      />
                    </div>
                    <div
                      className="hidden duration-700 ease-in-out"
                      data-carousel-item
                    >
                      <img
                        src={EcoPicker5}
                        className="absolute block w-4/5 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button
                      type="button"
                      className="w-3 h-3 rounded-full custom-carousel-btn"
                      aria-current="true"
                      aria-label="Slide 1"
                      data-carousel-slide-to="0"
                    ></button>
                    <button
                      type="button"
                      className="w-3 h-3 rounded-full custom-carousel-btn"
                      aria-current="false"
                      aria-label="Slide 2"
                      data-carousel-slide-to="1"
                    ></button>
                    <button
                      type="button"
                      className="w-3 h-3 rounded-full custom-carousel-btn"
                      aria-current="false"
                      aria-label="Slide 3"
                      data-carousel-slide-to="2"
                    ></button>
                    <button
                      type="button"
                      className="w-3 h-3 rounded-full custom-carousel-btn"
                      aria-current="false"
                      aria-label="Slide 4"
                      data-carousel-slide-to="3"
                    ></button>
                    <button
                      type="button"
                      className="w-3 h-3 rounded-full custom-carousel-btn"
                      aria-current="false"
                      aria-label="Slide 5"
                      data-carousel-slide-to="4"
                    ></button>
                  </div>
                  <button
                    type="button"
                    className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-prev
                  >
                    <span className="inline-flex items-center justify-center w-10 h-10">
                      <svg
                        className="w-4 h-4 text-blue-200 dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 1 1 5l4 4"
                        />
                      </svg>
                      <span className="sr-only">Previous</span>
                    </span>
                  </button>
                  <button
                    type="button"
                    className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-next
                  >
                    <span className="inline-flex items-center justify-center w-10 h-10">
                      <svg
                        className="w-4 h-4 text-blue-200 dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 9 4-4-4-4"
                        />
                      </svg>
                      <span className="sr-only">Next</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <h2 id="accordion-flush-heading-2">
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3"
              data-accordion-target="#accordion-flush-body-2"
              aria-expanded="true"
              aria-controls="accordion-flush-body-2"
            >
              <div className="pl-2 flex flex-row">
                <img className="h-7 w-7 rounded-lg" src={TTlogo} />
                <h2 className="pl-2 text-2xl text-gray-700">
                  Toronto Tech Jobs
                </h2>
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
            className=""
            aria-labelledby="accordion-flush-heading-2"
          >
            <div className="py-5 border-b border-gray-200 dark:border-gray-700 flex flex-col items-center md:flex-row">
              <div className="basis-1/2 mr-4 ml-4">
                <p className="my-10 text-lg">
                  TorontoTechJobs is a job board application focused on
                  tech-related jobs within the Greater Toronto Area (GTA) and
                  remote positions.
                  <br />
                  <br />I implemented the back-end functionality and applied CSS
                  components to the front-end design.
                </p>
                <div className="flex flex-wrap mb-4">
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
                      Bootstrap
                    </span>
                  </span>
                  <span className="w-full"></span>
                  <span className="relative">
                    <span className="mr-4 relative bg-half-highlight hover:bg-blue-200 transition-all duration-300">
                      Mongo DB
                    </span>
                  </span>
                  <span className="relative">
                    <span className="mr-4 relative bg-half-highlight hover:bg-blue-200 transition-all duration-300">
                      Node.js
                    </span>
                  </span>
                  <span className="relative">
                    <span className="mr-4 relative bg-half-highlight hover:bg-blue-200 transition-all duration-300">
                      Express.js
                    </span>
                  </span>
                  <span className="relative">
                    <span className="mr-4 relative bg-half-highlight hover:bg-blue-200 transition-all duration-300">
                      JWT
                    </span>
                  </span>
                </div>
                <div>
                  <a
                    href="http://torontotechjob.com/"
                    target="_blank"
                    aria-label="Toronto Tech Jobs"
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
                  href="http://torontotechjob.com/"
                  target="_blank"
                  aria-label="Toronto Tech Jobs"
                  className=""
                >
                  <img
                    className="h-auto w-11/12 m:w-6/7 rounded-lg justify-self-center hover:shadow-2xl hover:scale-105 duration-300 transition-all"
                    src={TT}
                  />
                </a>
              </div>
            </div>
          </div>
          <h2 id="accordion-flush-heading-3">
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3"
              data-accordion-target="#accordion-flush-body-3"
              aria-expanded="true"
              aria-controls="accordion-flush-body-3"
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
            id="accordion-flush-body-3"
            className=""
            aria-labelledby="accordion-flush-heading-3"
          >
            <div className="py-5 border-b border-gray-200 dark:border-gray-700 flex flex-col items-center md:flex-row">
              <div className="basis-1/2 mr-4 ml-4">
                <p className="my-10 text-lg">
                  Motiv Optimize is a web application that offers advanced web
                  testing management to help marketing teams optimize user
                  impressions and improve web design efficiency.
                  <br />
                  <br />I led the UX/UI design and front-end implementation,
                  with a focus on the dashboard page featuring data
                  visualization for over 100 entities.
                </p>
                <div className="flex flex-wrap mb-4">
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
                  <span className="w-full"></span>
                  <span className="relative">
                    <span className="mr-4 relative bg-half-highlight hover:bg-blue-200 transition-all duration-300">
                      Vercel
                    </span>
                  </span>
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
                    className="h-auto w-11/12 m:w-6/7 rounded-lg justify-self-center hover:shadow-2xl hover:scale-105 duration-300 transition-all"
                    src={Motiv}
                  />
                </a>
              </div>
            </div>
          </div>
          <h2 id="accordion-flush-heading-4">
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
              data-accordion-target="#accordion-flush-body-4"
              aria-expanded="true"
              aria-controls="accordion-flush-body-4"
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
            id="accordion-flush-body-4"
            className="hidden"
            aria-labelledby="accordion-flush-heading-4"
          >
            <div className="py-5 border-b border-gray-200 dark:border-gray-700 flex flex-col items-center md:flex-row">
              <div className="basis-1/2 mr-4 ml-4">
                <p className="my-10 text-lg">
                  Endless Trivia is a fully online trivia game that allows you
                  to play with friends and family without being in close contact
                  with them.
                  <br />
                  <br />I wireframed the UI/UX and implemented functionalities
                  for both the main lobby and game room.
                </p>
                <div className="flex flex-wrap mb-4">
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
                  <span className="w-full"></span>
                  <span className="relative">
                    <span className="mr-4 relative bg-half-highlight hover:bg-blue-200 transition-all duration-300">
                      Node JS
                    </span>
                  </span>
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
              <div className="basis-1/2 flex justify-center md:ml-14">
                <img
                  className="h-auto w-full object-fill md:w-6/7 rounded-lg justify-self-center hover:shadow-2xl hover:scale-105 duration-300 transition-all"
                  src={Trivia}
                />
              </div>
            </div>
          </div>
          <h2 id="accordion-flush-heading-5">
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
              data-accordion-target="#accordion-flush-body-5"
              aria-expanded="true"
              aria-controls="accordion-flush-body-5"
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
            id="accordion-flush-body-5"
            className="hidden"
            aria-labelledby="accordion-flush-heading-5"
          >
            <div className="py-5 border-b border-gray-200 dark:border-gray-700 flex flex-col items-center md:flex-row">
              <div className="basis-1/2 mr-4 ml-4">
                <p className="my-10 text-lg">
                  YourYYC tourist information kiosk is designed to help users
                  make the most of their trip by providing information about
                  local events, attractions, and restaurants, as well as helping
                  them save their selected spots to their personal device to
                  plan their trip.
                </p>
                <div className="my-2 mb-7 flex flex-wrap">
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
                    className="h-auto w-11/12 m:w-6/7 rounded-lg justify-self-center hover:shadow-2xl hover:scale-105 duration-300 transition-all"
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
