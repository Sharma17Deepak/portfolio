import avatarImg from "../../assets/deepak.jpg";
import Footer from "../Footer/Footer";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-fontcolor dark:text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-7xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-[10px] sm:text-xs md:text-lg mt-8 md:max-w-max tracking-tight leading-tight max-w-xs sm:max-w-sm">
          A passionate Frontend Developer dedicated to create beautiful, responsive, and user-friendly web experiences. I enjoy bringing creative designs to life and ensuring they work seamlessly across devices. My goal is to build interactive, accessible, and performance-driven websites that leave a great impression on users.
        </p>
        <a href="https://drive.google.com/file/d/1nmEmxMl9fMGG4C95tuVYVSeRHb2N5aHf/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
          <button className="mt-3 md:mt-10 text-white py-4 px-6 text-xl md:text-3xl md:py-4 md:px-6 hover:opacity-85 duration-300 hover:scale-110 font-semibold rounded-3xl bg-buttoncolor dark:bg-[#465697]">
            Hire Me
          </button>
        </a>
      </div>
      <div>
        <img
          className="w-56 h-56 md:w-80 md:h-80 rounded-full object-cover shadow-lg border-4 border-black dark:border-indigo-300 transform hover:scale-105 transition duration-300"
          src={avatarImg}
          alt="myimage"
        />
      </div>
    </div>
  );
};

export default Home;
