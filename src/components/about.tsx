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
            experience at{" "}
            <strong>SurveyMonkey, Teck Resources, and TransAlta</strong>. I
            graduated with a Bachelor of Science in Software Engineering from
            the University of Calgary.
          </p>
        </div>
        <div className="pt-10 flex flex-col items-center md:flex-row">
          <img className="h-[6rem] rounded-lg md:h-[8rem]" src={computer} />
          <p className="pl-4 text-md font-normal text-gray-800 md:text-lg lg:text-xl">
            During the internship, I contributed to various software development
            projects, including migrating <strong>Typescript</strong> code from
            Javascript at SurveyMonkey. <br />I developed a script that
            automates <strong>ETL processes</strong> for water treatment, which
            improved processing time in half for Teck Resources. <br />
            At TransAlta, I built a company-wide <strong>PowerApps</strong>{" "}
            applications.
            <br />
            Beyond these, my team, Motive Optimize, achieved 2nd place at the
            2023 University of Calgary Engineering Fair.
          </p>
        </div>
        <div className="pt-10 flex flex-col items-center md:flex-row">
          <img className="h-[6rem] rounded-lg md:h-[8rem]" src={team} />
          <p className="pl-4 text-md font-normal text-gray-800 md:text-lg lg:text-xl">
            I have:
            <br /> - Led the Calgary Korean School's volunteering group for{" "}
            <strong>6 years</strong>.
            <br /> - Served as the HR leader for DWNN, a Calgary Korean
            volunteering group, for <strong>5 years</strong>.
            <br /> - Served as the General Affairs Director of the Calgary
            Korean Association for <strong>2 years</strong>.
            <br /> - Been actively contributing to the community as a board
            member of the Calgary Korean War Commemorative Committee for{" "}
            <strong>4 years</strong>. I played a crucial role in the
            installation of the Korean War Gapyeong Battle Victory Monument in
            the City of Airdrie.
          </p>
        </div>
        <div className="pt-10 flex flex-col items-center">
          <p className="pl-4 text-md font-normal text-gray-800 md:text-lg lg:text-xl">
            This video is about how I came to Canada, started a new life, and my
            experiences with volunteering!
          </p>
          <span className="w-full"></span>
          <div className="border-16 border-blue-200 w-4/6 aspect-w-16 aspect-h-7">
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
