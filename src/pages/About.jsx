import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";
import ada from "../assets/adaBw.webp";
import St from "../components/St";
import EventPopup from "../components/EventPopup";
import Upcoming from "../components/Upcoming";

function Home() {
  return (
    <div className="home-container-left overflow-x-hidden w-full">
      <div className="flex flex-col sm:flex-row gap-0 w-full overflow-x-hidden sm:gap-12 mt-10 h-full justify-center align-middle">
        {Upcoming.length > 0 && <EventPopup />}
        <div className=" flex-shrink-0 mx-auto sm:mx-0 sm:absolute left-0 -z-10 ">
          <img
            loading="lazy"
            src={ada}
            alt="me"
            className="w-80 my-auto z-10 relative sm:top-12 sm:left-11 rounded-full sm:opacity-50"
          />
          <div className="relative inset-0 bg-orange-200 -top-80 left-28 opacity-40 sm:opacity-20 rounded-t-full rounded-b-full w-80 h-80 shadow-xl z-0" />
        </div>
        <div className="flex flex-col sm:px-0 px-10 sm:w-1/2  shrink-0 mx-auto sm:mx-0 sm:-mt-0 -mt-72 text-sm sm:text-lg  align-middle justify-center">
          <h1 className="text-4xl font-sans font-bold text-yellow-700">About Me</h1>
          <p className="font-sans mt-3">
            If you are looking for a marketing professional who enjoys driving growth and scaling
            products for brands then - This is me.
          </p>
          <p className="font-sans mt-5">
            Expert in growth and performance marketing with experience in developing growth
            processes, user acquisition strategies, A/B testing, data analysis, and executing
            marketing campaigns. Proven track record of driving significant growth and performance
            improvements for startups and large enterprise companies. Strong analytical skills and
            ability to make data-driven decisions. Creative thinker and problem solver with
            excellent communication and leadership skills.
          </p>
          <h3 className="text-md font-sans font-semibold text-yellow-600 mt-3">FUNFACT</h3>
          <p className="font-sans mt-2">
            I love the color yellow. Hobbies are networking, content creation and movies.
          </p>
          <div className="mx-auto mt-8 flex sm:flex-row flex-col gap-5 mb-6">
            <Link
              to="/"
              className="py-2 px-10  text-black font-normal hover:bg-yellow-400 bg-yellow-300 text-center ">
              Home
            </Link>
            <Link
              to="/contact"
              type="button"
              className=" py-2 text-center flex flex-col sm:w-40 sm:px-0 px-7 border-2 border-yellow-300 sm:hover:bg-slate-100 sm:hover:border-yellow-500 ">
              View CV
            </Link>
          </div>
          <h1 className="text-3xl font-sans font-semibold text-yellow-700 mt-11 block sm:hidden">
            Overview
          </h1>
        </div>
        <div className="flex flex-col shrink-0 mx-auto gap-5 sm:mx-0 mt-11 sm:mt-0 box">
          <div className="flex flex-col">
            <h1 className="font-bold text-7xl">3+</h1>
            <p className="text-3xl font-light flex flex-wrap w-10px">years of experience</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-7xl">5+</h1>
            <p className="text-3xl font-light flex flex-wrap w-10px">Industries</p>
          </div>
          <Link to="/Portfolio" className="flex flex-col">
            <h1 className="font-bold text-7xl">3</h1>
            <p className="text-3xl font-light flex flex-wrap w-10px underline sm:hover:no-underline">
              Mentored
            </p>
          </Link>
          <div className="flex flex-col">
            <h1 className="font-bold text-4xl">
              <span className="text-8xl text-yellow-500 animate-bounce ">$</span>50,000+
            </h1>
            <p className="text-3xl font-light flex flex-col flex-wrap w-82 leading-relaxed">
              Monthly <span className="block w-82"> Marketing Budget</span>
            </p>
          </div>
        </div>
      </div>
      <St />
    </div>
  );
}
export default Home;
