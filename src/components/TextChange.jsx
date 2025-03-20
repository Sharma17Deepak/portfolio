import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = [
    "Hi, I'm Deepak Sharma",
    "Welcome to my portfolio",
    "Let's build something amazing!",
  ];
  
  const [currenText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    const typingSpeed = isForward ? 100 : 50; 
    const pauseTime = isForward ? 1000 : 300; 

    const timeout = setTimeout(() => {
      setCurrentText(texts[index].substring(0, endValue));

      if (isForward) {
        if (endValue < texts[index].length) {
          setEndValue((prev) => prev + 1);
        } else {
          setIsForward(false);
          setTimeout(() => setEndValue((prev) => prev - 1), pauseTime);
        }
      } else {
        if (endValue > 0) {
          setEndValue((prev) => prev - 1);
        } else {
          setIsForward(true);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [endValue, isForward, index]);

  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <div className="text-4xl font-semibold text-fontcolor dark:text-white">
      {currenText}
      <span className={`inline-block w-1 h-5 transition-all ${isBlinking ? "opacity-100" : "opacity-0"}`}></span>
    </div>
  );
};

export default TextChange;
