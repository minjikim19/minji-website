import * as React from "react";
import experience from "../assets/experience.png";
import team from "../assets/team.png";
import computer from "../assets/computer.png";

const About = () => {
  return (
    <div
      className="w-full max-w-screen-xl mx-auto p-6 md:py-12 flex"
      id="about"
    >
      <div className="">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          I am...
        </h1>
        <div className="pt-10 flex flex-row items-center">
          <img className="h-32 rounded-lg " src={experience} />
          <p className="pl-4 text-lg font-normal text-gray-800 lg:text-xl">
            I am a talented software engineer with 15 months of internship
            experience at SurveyMonkey, Teck Resources, and TransAlta. I
            graduated with a Bachelor of Science in Software Engineering from
            the University of Calgary.
          </p>
        </div>
        <div className="pt-10 flex flex-row items-center">
          <img className="h-32 w-auto rounded-lg" src={computer} />
          <p className="pl-4 text-lg font-normal text-gray-800 lg:text-xl">
            During the internship, I contributed to various software development
            projects, including migrating Typescript code from Javascript at
            SurveyMonkey. I developed a script that automates ETL processes for
            water treatment, which improved processing time in half for Teck
            Resources. At TransAlta, I built a company-wide PowerApps
            applications.
            <br />
            Beyond these, my team, Motive Optimize, achieved 2nd place at the
            2023 University of Calgary Engineering Fair.
          </p>
        </div>
        <div className="pt-10 flex flex-row items-center">
          <img className="h-32 w-auto rounded-lg" src={team} />
          <p className="pl-4 text-lg font-normal text-gray-800 lg:text-xl">
            I possess a strong leadership skills, demonstrated by serving as a
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
