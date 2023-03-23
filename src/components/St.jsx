import React, { useState } from "react";
import classNames from "classnames";
import ada from "../assets/adaColored.webp";
import Skills from "./Skills";
import Tools from "./Tools";

function Portfolio() {
  const [isSkillsActive, setIsSkillsActive] = useState(true);
  const [isToolsActive, setisToolsActive] = useState(false);
  const [skillsText, setSkillsText] = useState(true);
  const [toolsText, setToolsText] = useState(false);
  const handleSkillsSwitch = () => {
    setIsSkillsActive(true);
    setisToolsActive(false);
    setSkillsText(true);
    setToolsText(false);
  };
  const handleToolsSwitch = () => {
    setisToolsActive(true);
    setIsSkillsActive(false);
    setSkillsText(false);
    setToolsText(true);
  };
  return (
    <div className=" bg-gray-100 pt-14 overflow-hidden h-auto sm:h-[130vh]">
      <div className="flex flex-col gap-12 mx-auto sm:w-657 mb-28 sm:mb-0 relative">
        <div className="flex flex-row shrink-0 gap-x-4">
          <img src={ada} alt="me" className="w-16 shadow-2xl rounded-b-full " loading="lazy" />
          <div className="my-auto">
            <h5 className="font-bold text-xl">Adaugo God&apos;sgift</h5>
            <p className="font-thin text-xs font-sans text-gray-600">
              Growth and Performance Marketing Expert
            </p>
          </div>
        </div>
        <div className="flex flex-row sm:gap-12 gap-3 w-full px-3  sm:w-800">
          <h1
            className={classNames({
              "sm:text-3xl text-xl text-yellow-600 font-bold flex p-0 bg-none cursor-pointer animate-pulse":
                skillsText,
              "sm:text-2xl text-lg text-gray-500 p-0 rounded-md font-semibold flex cursor-pointer sm:hover:font-bold":
                !skillsText,
            })}
            onClick={handleSkillsSwitch}
            aria-hidden="true">
            My Skills
          </h1>
          <h1
            className={classNames({
              "sm:text-3xl text-xl text-yellow-600 font-bold flex p-0 bg-none cursor-pointer animate-pulse":
                toolsText,
              "sm:text-2xl text-lg text-gray-500 p-0 rounded-md font-semibold flex cursor-pointer sm:hover:font-bold":
                !toolsText,
            })}
            onClick={handleToolsSwitch}
            aria-hidden="true">
            Tools & platforms proficiency
          </h1>
        </div>
        <div
          className={classNames({
            " sm:w-700 w-full  ": isSkillsActive,
            "  hidden": !isSkillsActive,
          })}>
          <Skills />
        </div>
        <div
          id="tools and proficiency"
          className={classNames({
            "sm:w-700 w-full  ": isToolsActive,
            " hidden": !isToolsActive,
          })}>
          <Tools />
        </div>
        <div className="relative inset-0 bg-orange-200 -top-400 left-540 opacity-30 rounded-t-full rounded-b-full w-96 h-96  z-0 hidden sm:block animate-bounce" />
      </div>
    </div>
  );
}

export default Portfolio;
