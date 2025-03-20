import { useEffect, useState } from "react";
import sun from "../../assets/Sun.svg";
import moon from "../../assets/Moon.svg";

export default function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <div className="mt-[-5px] ml-[10px]">
            <input
                type="checkbox"
                id="darkmode-toggle"
                className="hidden"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
            />
            <label
                htmlFor="darkmode-toggle"
                className={`relative block w-[65px] h-[30px] cursor-pointer rounded-full transition duration-300 shadow-inner 
                ${darkMode ? "bg-gray-800" : "bg-gray-300"}`}
            >
                <span
                    className={`absolute top-[3px] w-[25px] h-[25px] rounded-full transition duration-300 shadow-md 
                    ${darkMode ? "left-[37px] bg-gray-600" : "left-[3px] bg-gradient-to-b from-yellow-400 to-yellow-700"}`}
                ></span>
                <img src={sun} className="absolute w-[20px] top-[5px] left-[5px] transition duration-300" alt="sun" />
                <img src={moon} className="absolute w-[20px] top-[5px] left-[40px] transition duration-300" alt="moon" />
            </label>
        </div>
    );
}
