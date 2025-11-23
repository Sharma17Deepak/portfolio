import React from "react";
import ProjectCard from "./ProjectCard";
import ttt from "../../assets/ttt.png";
import rps from "../../assets/rps.png";
import pastry from "../../assets/pastry.png";
import cricket from "../../assets/cricket.png";
import financely from "../../assets/Financely-SS.png";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-fontcolor dark:text-white font-bold flex flex-wrap items-center justify-center text-center">
        Projects
      </h1>
      <div className="py-12 px-8 flex flex-wrap gap-10 items-center justify-center">
        <ProjectCard
          image={financely}
          title="Financely - Finance Tracker"
          main="A finance tracker built using React and Firebase, featuring secure authentication, real-time Firestore updates, interactive analytics charts, and data export/download capabilities for streamlined financial tracking."
          demo="https://finance-tracker-jj45ew50e-sharma17deepaks-projects.vercel.app/"
          sc="https://github.com/Sharma17Deepak/Finance-Tracker"
        />
        <ProjectCard
          image={cricket}
          title="CricXpert"
          main="A live cricket score web app that provides real-time match updates, dynamic search, multi-page navigation, and Dark Mode for an enhanced user experience."
          demo="https://cricxpert.netlify.app/"
          sc="https://github.com/Sharma17Deepak/CricXpert"
        />
        <ProjectCard
          image={pastry}
          title="Pastry World"
          main="Pastry world is a responsive bakery web app using HTML, CSS, and JavaScript with dynamic landing page, category-based menu filtering, and table reservation form for seamless user interaction."
          demo="https://pastry-world.vercel.app/"
          sc="https://github.com/Sharma17Deepak/Pastry-World"
        />
        <ProjectCard
          image={ttt}
          title="Tic tac toe"
          main="Developed a responsive Tic Tac Toe game using HTML5, CSS3, and JavaScript with interactive gameplay, real-time win/draw detection, and reset button."
          demo="https://sharma17deepak.github.io/Tic-Tac-Toe-/"
          sc="https://github.com/Sharma17Deepak/Tic-Tac-Toe-"
        />
        <ProjectCard
          image={rps}
          title="Rock Paper Scissor"
          main="Developed a responsive Rock Paper Scissor game using HTML, CSS, and JavaScript with interactive gameplay, real-time score tracking, and an intuitive UI/UX design."
          demo="https://sharma17deepak.github.io/Rock-Paper-Scissor/"
          sc="https://github.com/Sharma17Deepak/Rock-Paper-Scissor"
        />
      </div>
    </div>
  );
};

export default Projects;
