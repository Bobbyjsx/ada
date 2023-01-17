import React, { useState } from "react";
import classNames from "classnames";
import ada from "../ASSETS/adaColored.png";
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
    <div className=" bg-gray-100 pt-14 overflow-hidden">
      <div className="flex flex-col gap-12 mx-auto w-657 mb-11  relative">
        <div className="flex flex-row shrink-0 gap-x-4">
          <img src={ada} alt="me" className="w-16 shadow-2xl rounded-b-full " loading="lazy" />
          <div className="my-auto">
            <h5 className="font-bold text-xl">Adaugo God&apos;sgift</h5>
            <p className="font-thin text-xs font-sans text-gray-600">
              Growth and Performance Marketing Expert
            </p>
          </div>
        </div>
        <div className="flex flex-row sm:gap-16 gap-3 w-430  sm:w-800">
          <h1
            className={classNames({
              "sm:text-3xl text-1xl text-yellow-600 font-bold flex rounded-full animate-bounce shadow-inner p-4 bg-none cursor-pointer":
                skillsText,
              "sm:text-2xl text-xl text-gray-500 p-2 rounded-md font-semibold flex cursor-pointer hover:font-bold":
                !skillsText,
            })}
            onClick={handleSkillsSwitch}
            aria-hidden="true">
            My Skills
          </h1>
          <h1
            className={classNames({
              "sm:text-3xl text-1xl text-yellow-600 font-bold flex rounded-full animate-bounce shadow-inner p-4 bg-none cursor-pointer":
                toolsText,
              "sm:text-2xl text-xl text-gray-500 p-2 rounded-md font-semibold flex cursor-pointer hover:font-bold":
                !toolsText,
            })}
            onClick={handleToolsSwitch}
            aria-hidden="true">
            Tools & platforms proficiency
          </h1>
        </div>
        <div
          className={classNames({
            " sm:w-700 w-420 mx-4  gap-12 flex flex-row flex-nowrap sm:flex-wrap relative z-20":
              isSkillsActive,
            "  hidden": !isSkillsActive,
          })}>
          <Skills />
        </div>
        <div
          id="tools and proficiency"
          className={classNames({
            "sm:w-700 w-400 mx-5 gap-12 flex flex-row flex-nowrap sm:flex-wrap relative z-20":
              isToolsActive,
            " hidden": !isToolsActive,
          })}>
          <Tools />
        </div>
        <div className="relative inset-0 bg-orange-200 -top-400 left-540 opacity-30 rounded-t-full rounded-b-full w-96 h-96  z-0 hidden sm:block" />
      </div>
    </div>
  );
}

export default Portfolio;
