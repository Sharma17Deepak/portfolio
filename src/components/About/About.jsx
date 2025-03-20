import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-fontcolor dark:text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-creamcolor dark:bg-black shadow-xl mx-0 md:mx-20 dark:bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80 mr-32" src={AboutImg} alt="About img" />
          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Problem-Solving Mindset
                </h1>
                <p className="text-md md:text-md leading-tight">
                  I love turning complex problems into simple, elegant solutions and constantly learning new technologies to stay updated in the fast-evolving world of web development.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-2xl md:text-2xl font-semibold leading-normal">
                  Continuous Learner
                </h1>
                <p className="text-md md:text-md leading-tight">
                With a strong foundation in HTML, CSS, JavaScript, and React.js, I continuously explore new & emerging technologies like DevOps, AI, to enhance my development skills and efficiency. I strive to stay ahead in the ever-evolving tech landscape.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Team Player
                </h1>
                <p className="text-md md:text-md leading-tight">
                  A collaborative team player who enjoys working on innovative projects and staying updated with industry trends
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;