import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaJava, FaNode, FaGithub, FaGitSquare } from "react-icons/fa";
import { SiMongodb, SiExpress, SiFirebase, } from "react-icons/si";
const Skills = () => {
    return (
        <div id="Skills" className="p-10 md:p-24">
            <h1 className="text-2xl md:text-4xl text-neutral-900 dark:text-white font-bold flex flex-wrap items-center justify-center text-center">
                Skills
            </h1>
            <div className="flex flex-wrap items-center justify-around">
                <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">

                    <div className="flex flex-col items-center">
                        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transform hover:scale-105 transition duration-300">
                            <FaJava color="#F7DF1E" size={50} />
                        </span>
                        <span className=" text-fontcolor font-bold dark:text-white text-sm mt-2">Java</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transform hover:scale-105 transition duration-300">
                            <FaHtml5 color="#E34F26" size={50} />
                        </span>
                        <span className="text-fontcolor font-bold dark:text-white text-sm mt-2">HTML5</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transform hover:scale-105 transition duration-300">
                            <FaCss3 color="#1572B6" size={50} />
                        </span>
                        <span className="text-fontcolor font-bold dark:text-white text-sm mt-2">CSS3</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transform hover:scale-105 transition duration-300">
                            <FaReact color="#61DAFB" size={50} />
                        </span>
                        <span className="text-fontcolor font-bold dark:text-white text-sm mt-2">React.js</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transform hover:scale-105 transition duration-300">
                            <FaJs color="#F7DF1E" size={50} />
                        </span>
                        <span className="text-fontcolor font-bold dark:text-white text-sm mt-2">JavaScript</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transform hover:scale-105 transition duration-300">
                            <FaNode color="#83CD29" size={50} />
                        </span>
                        <span className="text-fontcolor font-bold dark:text-white text-sm mt-2">Node.js</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transform hover:scale-105 transition duration-300">
                            <SiExpress color="#FFFFFF" size={50} />
                        </span>
                        <span className="text-fontcolor font-bold dark:text-white text-sm mt-2">Express.js</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transform hover:scale-105 transition duration-300">
                            <FaGitSquare color="#F05032" size={50} />
                        </span>
                        <span className="text-fontcolor font-bold dark:text-white text-sm mt-2">Git</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transform hover:scale-105 transition duration-300">
                            <FaGithub color="#FFFFFF" size={50} />
                        </span>
                        <span className="text-fontcolor font-bold dark:text-white text-sm mt-2">GitHub</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transform hover:scale-105 transition duration-300">
                            <SiMongodb color="#47A248" size={50} />
                        </span>
                        <span className="text-fontcolor font-bold dark:text-white text-sm mt-2">MongoDB</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transform hover:scale-105 transition duration-300">
                            <SiFirebase color="#FFCA28" size={50} />
                        </span>
                        <span className="text-fontcolor font-bold dark:text-white text-sm mt-2">Firebase</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transform hover:scale-105 transition duration-300">
                            <FaFigma color="#F24E1E" size={50} />
                        </span>
                        <span className="text-fontcolor font-bold dark:text-white text-sm mt-2">Figma</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Skills;