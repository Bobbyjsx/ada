import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../styles/App.css";
import ada from "../assets/adaBw.png";
import St from "../components/St";

function Home() {
  return (
    <div className=" ">
      <Header />
      <div className="flex flex-col  sm:flex-row gap-0 sm:gap-8 mt-10 overflow-hidden">
        <div className=" flex-shrink-0 mx-auto sm:mx-0 relative">
          <img
            loading="lazy"
            src={ada}
            alt="me"
            className="w-80 my-auto z-10 relative sm:top-12 sm:left-11 rounded-full "
          />
          <div className="relative inset-0 bg-orange-200 -top-80 left-28 opacity-30 rounded-t-full rounded-b-full w-80 h-80 shadow-xl z-0" />
        </div>
        <div className="flex flex-col sm:px-0 px-10  sm:w-1/4 shrink-0 mx-auto sm:mx-0 sm:-mt-0 -mt-72 text-sm sm:text-lg">
          <h1 className="text-4xl font-sans font-bold text-yellow-700">About Me</h1>
          <p className="font-sans mt-3">
            If you are looking for a marketing professional who enjoys driving growth and scaling
            products for brands then - This is me.
          </p>
          <p className="font-sans mt-5">
            Hi, my name is Ada, an expert in growth and performance marketing, with a broad spectrum
            of experience in developing growth processes, user acquisition strategies, A/B testing,
            analyzing data, and executing marketing campaigns
          </p>
          <h3 className="text-md font-sans font-semibold text-yellow-600 mt-3">FUNFACT</h3>
          <p className="font-sans mt-2">I love networking, content creation and movies</p>
          <div className="mx-auto mt-8 flex sm:flex-row flex-col gap-5 ">
            <Link
              to="/"
              className="py-2 px-10  text-gray-700 font-normal hover:bg-yellow-400 bg-yellow-300 text-center ">
              Home
            </Link>
            <Link
              to="/contact"
              type="button"
              className=" py-2 text-center flex flex-col sm:w-40 sm:px-0 px-7 border-2 border-yellow-300 sm:hover:bg-slate-100 sm:hover:border-yellow-500 ">
              Contact Details
            </Link>
          </div>
          <h1 className="text-3xl font-sans font-semibold text-yellow-700 mt-11 block sm:hidden">
            Overview
          </h1>
        </div>
        <div className="flex flex-col shrink-0 mx-auto gap-5 sm:mx-0 mt-11 sm:mt-0">
          <div className="flex flex-col">
            <h1 className="font-bold text-7xl">4+</h1>
            <p className="text-3xl font-light flex flex-wrap w-10px">years of experience</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-7xl">8+</h1>
            <p className="text-3xl font-light flex flex-wrap w-10px">Industries</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-7xl">3</h1>
            <p className="text-3xl font-light flex flex-wrap w-10px">Mentored</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-4xl">
              <span className="text-8xl text-yellow-500">$</span>100,000+
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
