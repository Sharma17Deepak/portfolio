import React from "react";

const ProjectCard = ({ title, main, image, demo, sc }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <img className="p-4 rounded-md" src={image} alt="screenshot" />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        <a href={demo} target="_blank"
          rel="noopener noreferrer" >
          <button className="md:mt-10 text-fontcolor font-bold dark:text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 dark:font-semibold rounded-3xl bg-creamcolor dark:bg-[#465697]">
            Demo
          </button></a>
        <a href={sc} target="_blank"
          rel="noopener noreferrer" >
          <button className="md:mt-10 text-fontcolor font-bold dark:text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 dark:font-semibold rounded-3xl bg-creamcolor dark:bg-[#465697]">
            Source Code
          </button></a>
      </div>
    </div>
  );
};

export default ProjectCard;