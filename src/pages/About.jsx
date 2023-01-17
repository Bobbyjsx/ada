import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../styles/App.css";
import ada from "../ASSETS/adaBw.png";
import years from "../ASSETS/years.png";
import industry from "../ASSETS/industry.png";
import mentored from "../ASSETS/mentored.png";
import budget from "../ASSETS/budget.png";
import phone from "../ASSETS/phone.png";
import St from "../components/St";

function Home() {
  // const cv = "https://docs.google.com/document/d/1jEO99f2Pf_v4_P-82XSZ04boOeLbgQTkHAk1Zf6IMHs/edit";
  // const twitter = "https://twitter.com/Ardarh1";

  return (
    <div className=" ">
      <Header />
      <div className="my-auto flex flex-col  sm:flex-row gap-0 sm:gap-8 mt-10 overflow-hidden">
        <div className=" flex-shrink-0 mx-auto sm:mx-0 relative">
          <img
            src={ada}
            alt="me"
            className="w-80 my-auto z-10 relative top-12 left-11 rounded-full "
          />
          <div className="relative inset-0 bg-orange-200 -top-80 left-28 opacity-30 rounded-t-full rounded-b-full w-80 h-80 shadow-xl z-0" />
        </div>
        <div className="flex flex-col sm:px-0 px-20  sm:w-1/4 shrink-0 mx-auto sm:mx-0 sm:-mt-0 -mt-72">
          <h1 className="text-4xl font-sans font-bold text-yellow-700">About Me</h1>
          <p className="text-sm font-sans mt-3">
            If you are looking for a marketing professional who enjoys driving growth and scaling
            products for brands then - This is me.
          </p>
          <p className="text-sm font-sans mt-5">
            Hi, my name is Ada, an expert in growth and performance marketing, with a broad spectrum
            of experience in developing growth processes, user acquisition strategies, A/B testing,
            analyzing data, and executing marketing campaigns
          </p>
          <h3 className="text-md font-sans font-semibold text-yellow-600 mt-3">FUNFACT</h3>
          <p className="text-sm font-sans mt-2">I love networking, content creation and movies</p>
          <div className="mx-auto mt-8 flex sm:flex-row flex-col gap-5 ">
            <Link
              to="/"
              className="py-2 px-10  text-gray-700 font-normal hover:bg-yellow-400 bg-yellow-300 text-center ">
              Home
            </Link>
            <button
              type="button"
              className="py-2 sm:w-40 sm:px-0 px-7 border-2   border-yellow-300 hover:bg-slate-100 hover:border-yellow-500 ml-4">
              Personal Data
            </button>
          </div>
          <h1 className="text-3xl font-sans font-semibold text-yellow-700 mt-11 underline block sm:hidden">
            Overview
          </h1>
        </div>
        <div className="flex flex-col shrink-0 mx-auto gap-5 sm:mx-0 mt-11 sm:mt-0">
          <img src={years} alt="" className="w-32 " />
          <img src={industry} alt="" className="w-64 " />
          <img src={mentored} alt="" className="w-32 " />
          <img src={budget} alt="" className="w-56 " />
        </div>
        <div className="mx-auto sm:mx-0">
          <img
            src={phone}
            alt=""
            className="w-[101000000px] relative bottom-80 right-80 overflow-x-hidden hidden"
          />
        </div>
      </div>
      <St />
    </div>
  );
}

export default Home;
