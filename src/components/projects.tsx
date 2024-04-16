import * as React from "react";
import Motiv from "../assets/Motiv.png";

const Project = () => {
  return (
    <div
      className="w-full max-w-screen-xl mx-auto p-6 md:py-12 flex h-screen"
      id="#project"
    >
      <div className="">
        <h1 className="mb-10 text-4xl font-extrabold text-gray-900 dark:text-white">
          Projects
        </h1>
        <div className="flex flex-row my-10">
          <div className="basis-1/2 mr-4">
            <h2 className="m-auto text-2xl font-extrabold text-gray-900 dark:text-white">
              Motiv Optimize
            </h2>
            <p className="my-10">
              Motiv Optimize is a web application that offers advanced web
              testing management to help marketing teams optimize user
              impressions and improve web design efficiency.
            </p>
            <div className=" my-10 content-around underline decoration-blue-300 decoration-8 flex flex-row">
              <span className="mr-4">
                <p>Typescript</p>
              </span>
              <span className="mr-4">
                <p>React JS</p>
              </span>
              <span className="mr-4">
                <p>Vercel</p>
              </span>
              <span className="mr-4">
                <p>Material UI</p>
              </span>
              <span className="mr-4">
                <p>AmazonRDS</p>
              </span>
              <span className="mr-4">
                <p>Amazon Lambda</p>
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="basis-1/2 ml-14">
            <img className="h-auto max-w-lg rounded-lg" src={Motiv} />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="basis-1/2 mr-4">
            <h2 className="m-auto text-2xl font-extrabold text-gray-900 dark:text-white">
              Motiv Optimize
            </h2>
            <p className="my-10">
              Motiv Optimize is a web application that offers advanced web
              testing management to help marketing teams optimize user
              impressions and improve web design efficiency.
            </p>
            <div className=" my-10 content-around underline decoration-blue-300 decoration-8 flex flex-row">
              <span className="mr-4">
                <p>Typescript</p>
              </span>
              <span className="mr-4">
                <p>React JS</p>
              </span>
              <span className="mr-4">
                <p>Vercel</p>
              </span>
              <span className="mr-4">
                <p>Material UI</p>
              </span>
              <span className="mr-4">
                <p>AmazonRDS</p>
              </span>
              <span className="mr-4">
                <p>Amazon Lambda</p>
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="basis-1/2 ml-14">
            <img className="h-auto max-w-lg rounded-lg" src={Motiv} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
