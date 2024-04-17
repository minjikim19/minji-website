import * as React from "react";
import experience from "../assets/experience.png";
import team from "../assets/team.png";
import computer from "../assets/computer.png";

const About = () => {
  return (
    <div
      className="w-full max-w-screen-xl mx-auto p-6 md:py-12 flex"
      id="#about"
    >
      <div className="">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          I am...
        </h1>
        <div className="pt-10 flex flex-row items-center">
          <img className="h-32 w-auto rounded-lg" src={experience} />
          <p className="pl-4 text-lg font-normal text-gray-800 lg:text-xl">
            A talented software engineer with 15 months of internship experience
            at SurveyMonkey, Transalta, and Teck Resources. I graduated with a
            Bachelor of Science in Software Engineering from the University of
            Calgary in May 2023.
          </p>
        </div>
        <div className="pt-10 flex flex-row items-center">
          <img className="h-32 w-auto rounded-lg" src={computer} />
          <p className="pl-4 text-lg font-normal text-gray-800 lg:text-xl">
            
          </p>
        </div>
        <div className="pt-10 flex flex-row items-center">
          <img className="h-32 w-auto rounded-lg" src={team} />
          <p className="pl-4 text-lg font-normal text-gray-800 lg:text-xl">
            A leader with strong leadership skills, demonstrated by serving as a
            leader of the Calgary Korean School's volunteering group, where I
            managed projects and HR. Additionally, I actively contribute to the
            community as a board member of the Calgary Korean War Commemorative
            Committee. I played a critical role in the installation of the
            Korean War Gapyeong Battle Victory Monument in the City of Airdrie.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
