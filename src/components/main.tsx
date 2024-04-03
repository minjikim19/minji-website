import * as React from "react";
import Minji from "../assets/Minji.jpg";

const Main = () => {
  const img = require("../assets/Minji.jpg");
  return (
    <div className="w-full max-w-screen-xl mx-auto p-6 md:py-12 flex h-screen">
      <div className="m-auto">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          Hi! I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Minji,
          </span>
          <br />
          Passionate Software Engineer.
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"></p>
      </div>
      <div className="m-auto">
        <img className="h-auto max-w-lg rounded-lg" src={Minji} />
      </div>
    </div>
  );
};

export default Main;
