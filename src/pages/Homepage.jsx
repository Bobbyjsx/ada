import React from "react";
import { Link } from "react-router-dom";
import "../styles/dist/output.css";
import adaCoporate from "../assets/ada_coporate.jpg";
// import cop from "../assets/copilot.webp";
// import met from "../assets/meeting.svg";
import wave from "../assets/waving_hand.0e986e5dd04c9ed389f1.webp";
import blah from "../assets/blah.svg";

function Home() {
  return (
    <div className="bg-gradient-to-tr h-full overflow-x-clip min-h-[800px]  sm:h-screen from-[#0e1024] to-slate-800 backdrop-filter backdrop-blur-8 text-black  flex flex-col justify-center items-center align-middle m-auto w-full ">
      <div
        className="absolute bottom-0 w-1/2 sm:flex items-center justify-center  hidden grayscale  "
        id="styles">
        <img src={blah} alt="" className="absolute bottom-0 w-full grayscale opacity-50" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <div
        className="flex sm:flex-row  bg-transparent flex-wrap flex-col sm:gap-0 gap-y-6  home-container z-10 "
        loading="eager">
        <div className="sm:w-1/2 w-full flex flex-col items-center justify-center  rounded-full  m-auto mx-auto box home-container-leftb">
          <img
            src={adaCoporate}
            alt="me"
            className="sm:w-460 w-72  bg-gradient-to-bl from-slate-700 to-gray-700 rounded-full shadow-2xl flex shrink-1 grow-0 m-auto justify-center items-center"
            loading="eager"
          />
        </div>

        <section className=" m-auto flex  flex-col text-center gap-5  sm:gap-4   lg:w-2/4 ">
          <h1 className="text-6xl sm:text-6xl benilla font-normal text-yellow-400 tracking-widest flex flex-col text-center ">
            Hello
          </h1>
          <p className="text-2xl font-sans  font-thin sm:text-gray-300 text-slate-600 relative bottom-7 left-12">
            You can call me
          </p>
          <img
            src={wave}
            alt=""
            className="absolute top-20 right-10 opacity-40 animate-pulse w-[5%]"
          />
          <h2 className="sm:text-6xl text-4xl flex-1 flex-col text-center font-sans flex shrink font-normal  text-slate-400 tracking-widest -mt-3">
            ADAUGO GOD&apos;SGIFT
          </h2>
          <p className="text-white text-lg flex flex-col text-center relative bottom-5">
            Passionate about Growth and Performance Marketing
          </p>
          <div className="mx-auto flex sm:flex-row flex-col gap-5 text-white">
            <Link
              to="/About"
              className="w-60 h-14 p-2 font-normal text-black text-center flex flex-col rounded-lg  shadow-inner bg-yellow-400  justify-center text-md">
              ABOUT ME
            </Link>
            <Link
              to="/contact"
              className="w-60 h-14 p-2 border-2 text-center border-slate-500 rounded-lg flex flex-col justify-center text-md shadow-lg">
              PERSONAL DATA
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
