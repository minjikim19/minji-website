import * as React from "react";
import experience from "../assets/experience.png";
import team from "../assets/team.png";
import computer from "../assets/computer.png";

const About = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto p-6 md:py-12" id="about">
      <div className="m-auto">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
          I am...
        </h1>
        <div className="pt-10 flex flex-col items-center md:flex-row">
          <img className="h-[6rem] rounded-lg md:h-[8rem]" src={experience} />
          <p className="pl-4 text-md font-normal text-gray-800 md:text-lg lg:text-xl">
            I am a talented software engineer with 15 months of internship
            experience at SurveyMonkey, Teck Resources, and TransAlta. I
            graduated with a Bachelor of Science in Software Engineering from
            the University of Calgary.
          </p>
        </div>
        <div className="pt-10 flex flex-col items-center md:flex-row">
          <img className="h-[6rem] rounded-lg md:h-[8rem]" src={computer} />
          <p className="pl-4 text-md font-normal text-gray-800 md:text-lg lg:text-xl">
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
        <div className="pt-10 flex flex-col items-center md:flex-row">
          <img className="h-[6rem] rounded-lg md:h-[8rem]" src={team} />
          <p className="pl-4 text-md font-normal text-gray-800 md:text-lg lg:text-xl">
            I possess a strong leadership skills, demonstrated by serving as a
            leader of the Calgary Korean School's volunteering group, where I
            managed projects and HR. Additionally, I actively contribute to the
            community as a board member of the Calgary Korean War Commemorative
            Committee. I played a critical role in the installation of the
            Korean War Gapyeong Battle Victory Monument in the City of Airdrie.
          </p>
        </div>
        <div className="pt-10 flex justify-center ">
          <div className="border-16 border-blue-200 w-5/6 aspect-w-16 aspect-h-7">
            <iframe
              src="https://www.youtube.com/embed/X7FQ1OdH144"
              title="고등학생 때 나 홀로 캐나다에 온 이유 | 캘거리대학교 4학년, 봉사 활동만 네 가지"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
