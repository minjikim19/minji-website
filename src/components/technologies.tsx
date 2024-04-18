import * as React from "react";
import Javascript from "../assets/javascript.svg";

const Technologies = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto p-6 md:py-12">
      <h1 className="pb-14 text-3xl font-extrabold text-gray-900 md:text-4xl">
        Details
      </h1>
      <div className="pb-14 flex justify-center">
        <div className="flex flex-wrap gap-x-10 gap-y-10 justify-center">
          <div className="flex items-center justify-center outline rounded-lg w-36 h-10">
            <img className="w-6" src={Javascript} />
            <p className="text-lg ml-2">Javascript</p>
          </div>
          {/* javascript
typescript
react.js
next.js
html
css
docker
graphql
python
java
c++
shell
SQL
d3.js
chart.js */}
          <div className="flex items-center justify-center outline rounded-lg w-36 h-10">
            <img className="w-6" src={Javascript} />
            <p className="text-lg ml-2">Javascript</p>
          </div>
          <div className="flex items-center justify-center outline rounded-lg w-36 h-10">
            <img className="w-6" src={Javascript} />
            <p className="text-lg ml-2">Javascript</p>
          </div>
          <div className="flex items-center justify-center outline rounded-lg w-36 h-10">
            <img className="w-6" src={Javascript} />
            <p className="text-lg ml-2">Javascript</p>
          </div>
          <div className="flex items-center justify-center outline rounded-lg w-36 h-10">
            <img className="w-6" src={Javascript} />
            <p className="text-lg ml-2">Javascript</p>
          </div>
          <div className="flex items-center justify-center outline rounded-lg w-36 h-10">
            <img className="w-6" src={Javascript} />
            <p className="text-lg ml-2">Javascript</p>
          </div>
          <div className="flex items-center justify-center outline rounded-lg w-36 h-10">
            <img className="w-6" src={Javascript} />
            <p className="text-lg ml-2">Javascript</p>
          </div>
          <div className="flex items-center justify-center outline rounded-lg w-36 h-10">
            <img className="w-6" src={Javascript} />
            <p className="text-lg ml-2">Javascript</p>
          </div>
          <div className="flex items-center justify-center outline rounded-lg w-36 h-10">
            <img className="w-6" src={Javascript} />
            <p className="text-lg ml-2">Javascript</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
