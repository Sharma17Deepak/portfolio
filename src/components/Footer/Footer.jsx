import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex flex-col md:flex-row items-center text-center md:text-left justify-around bg-creamcolor dark:bg-[#465697] text-fontcolor font-semibold dark:text-white p-6 md:p-12 gap-6 md:gap-0"
    >
      <div>
        <h1 className="text-3xl md:text-5xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-xl font-normal">
          Feel Free To Reach Out!
        </h3>
      </div>
      <ul className="text-sm md:text-lg flex flex-col gap-3">
        <li className="flex items-center justify-center md:justify-start gap-2">
          <MdOutlineEmail size={20} />
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sharmadeepoo30@gmail.com&su=Hello&body=Hi Deepak,"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline break-all"
          >
            sharmadeepoo30@gmail.com
          </a>
        </li>
        <li className="flex items-center justify-center md:justify-start gap-2">
          <CiLinkedin size={22} />
          <a
            href="https://www.linkedin.com/in/deepak-sharma-19b278242/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline break-all"
          >
            LinkedIn Profile
          </a>
        </li>
        <li className="flex items-center justify-center md:justify-start gap-2">
          <FaGithub size={22} />
          <a
            href="https://github.com/Sharma17Deepak"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline break-all"
          >
            GitHub Profile
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
