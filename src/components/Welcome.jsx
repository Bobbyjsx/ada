import React, { useEffect, useState } from "react";
import anime from "animejs";

function WelcomeMessage() {
  const [hideMsg, setHideMsg] = useState(true);
  let timeoutId;
  useEffect(() => {
    timeoutId = setTimeout(() => setHideMsg(false), 12000);
    return () => clearTimeout(timeoutId);
  }, []);
  useEffect(() => {
    anime
      .timeline({
        loop: true,
      })
      .add({
        targets: ".welcome-message, #text",
        translateY: [-600, 0], // Changed translateY to be more smooth
        scale: [1, 1], // Changed scale to be more proportional
        opacity: [0, 1],
        delay: anime.stagger(100), // Changed anime.stagger to a fixed delay
        duration: 1500,
        easing: "easeOutExpo",
        loop: true,
      })
      .add({
        targets: ".welcome-message, #text",
        duration: 2000, // add 5 seconds of duration for pause
      })
      .add({
        targets: ".welcome-message, #text",
        translateX: [0, -1000],
        scale: [1, 1],
        opacity: [1, 0],
        delay: anime.stagger(100), // Changed anime.stagger to a fixed delay
        duration: 2000,
        easing: "easeOutExpo",
        loop: true,
      })
      .add({
        targets: ".welcome-message, #text",
        translateX: [-1000, 0], // Changed translateX to be more smooth
        scale: [1, 1],
        opacity: [0, 1],
        delay: anime.stagger(100), // Changed anime.stagger to a fixed delay
        duration: 2000,
        easing: "easeOutExpo",
        loop: true,
      });
  }, []);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loadingAnimation = anime({
      targets: progress,
      value: 100,
      easing: "linear",
      duration: 5000,
      update() {
        setProgress(Math.round(loadingAnimation.progress));
      },
    });
  }, []);

  return hideMsg ? (
    <div className=" welcome-message  flex flex-col h-screen w-screen  font-serif text-4xl sm:text-7xl font-semibold justify-center  pl-11 pb-4 sm:pb-0 bg-white gap-y-11 text-gray-800">
      <p id="text" className="relative font-bold ">
        Hello, and welcome to my portfolio,
      </p>

      <p id="text" className="relative  font-extra-bold font-serif ">
        I&apos;m
        <span className="font-mono  text-orange-400"> Adaugo Ezeala</span>
      </p>
      <div className="flex items-center justify-center w-3/4 sm:w-1/2 h-1/6">
        <div className="w-96 h-8 bg-gray-300 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-l to-indigo-700 from-orange-500 h-full rounded-full opacity-50"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="ml-4 text-center text-xl">{progress}%</div>
      </div>
    </div>
  ) : null;
}

export default WelcomeMessage;
