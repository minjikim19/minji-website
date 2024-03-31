import * as React from "react";

const Main = () => {
  const img = require("../assets/Minji.jpg");
  return (
    <div className="w-full max-w-screen-xl mx-auto p-6 md:py-12 flex h-screen">
      <div className="m-auto">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          Hi!{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            달디달고달디달고 달디단 김민쥐
          </span>
          <br />
          Full-stack Engineer.
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"></p>
      </div>
      <div>
        <img className="h-auto max-w-lg rounded-lg" src={String(img)} />
      </div>
    </div>
  );
};

export default Main;
