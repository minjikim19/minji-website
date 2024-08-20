import * as React from "react";
import Javascript from "../assets/javascript.svg";
import Typescript from "../assets/Typescript.svg";
import ReactLogo from "../assets/React.svg";
import Next from "../assets/nextjs.svg";
import D3 from "../assets/d3.svg";
import Chart from "../assets/chartjs.svg";
import Flutter from "../assets/Flutter.svg";
import Docker from "../assets/docker.svg";
import GraphQL from "../assets/GraphQL.svg";
import Python from "../assets/Python.svg";
import Java from "../assets/java.svg";
import Cpp from "../assets/c++.svg";

const Technologies = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto p-6 md:py-12">
      <h1 className="pb-14 text-3xl font-extrabold text-gray-900 md:text-4xl">
        Details
      </h1>
      <div className="pb-14 flex justify-center">
        <div className="flex flex-wrap gap-x-10 gap-y-10 justify-center">
          <div className="flex items-center justify-center outline outline-blue-200 rounded-lg w-36 h-10">
            <img className="w-6" src={Javascript} />
            <p className="text-lg ml-2">Javascript</p>
          </div>
          <div className="flex items-center justify-center outline outline-blue-200 rounded-lg w-36 h-10">
            <img className="w-6" src={Typescript} />
            <p className="text-lg ml-2">Typescript</p>
          </div>
          <div className="flex items-center justify-center outline outline-blue-200 rounded-lg w-36 h-10">
            <img className="w-6" src={ReactLogo} />
            <p className="text-lg ml-2">React.js</p>
          </div>
          <div className="flex items-center justify-center outline outline-blue-200 rounded-lg w-36 h-10">
            <img className="w-6" src={Next} />
            <p className="text-lg ml-2">Next.js</p>
          </div>
          <div className="flex items-center justify-center outline outline-blue-200 rounded-lg w-36 h-10">
            <img className="w-6" src={D3} />
            <p className="text-lg ml-2">D3.js</p>
          </div>
          <div className="flex items-center justify-center outline outline-blue-200 rounded-lg w-36 h-10">
            <img className="w-6" src={Chart} />
            <p className="text-lg ml-2">Chart.js</p>
          </div>
          <div className="flex items-center justify-center outline outline-blue-200 rounded-lg w-36 h-10">
            <img className="w-6" src={Flutter} />
            <p className="text-lg ml-2">Flutter</p>
          </div>
          <div className="flex items-center justify-center outline outline-blue-200 rounded-lg w-36 h-10">
            <img className="w-6" src={Docker} />
            <p className="text-lg ml-2">Docker</p>
          </div>
          <div className="flex items-center justify-center outline outline-blue-200 rounded-lg w-36 h-10">
            <img className="w-6" src={GraphQL} />
            <p className="text-lg ml-2">GraphQL</p>
          </div>
          <div className="flex items-center justify-center outline outline-blue-200 rounded-lg w-36 h-10">
            <img className="w-6" src={Python} />
            <p className="text-lg ml-2">Python</p>
          </div>
          <div className="flex items-center justify-center outline outline-blue-200 rounded-lg w-36 h-10">
            <img className="w-6" src={Java} />
            <p className="text-lg ml-2">Java</p>
          </div>
          <div className="flex items-center justify-center outline outline-blue-200 rounded-lg w-36 h-10">
            <img className="w-6" src={Cpp} />
            <p className="text-lg ml-2">C++</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
