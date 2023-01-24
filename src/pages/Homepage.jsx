import React from "react";
import { Link } from "react-router-dom";
import "../styles/dist/output.css";
import Header from "../components/Header";
import bg from "../assets/bgHome.svg";
import adaColored from "../assets/adaColored.png";

function Home() {
  return (
    <div className="bg-gradient-to-tr to-indigo-400 from-orange-500 text-black w-full h-full  overflow-hidden ">
      <Header />
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "290vh",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          // height: "110vh",
        }}
        className=" flex sm:flex-row sm:h-screen flex-col sm:p-0 right-0 top-0 px-3 ml-0 pb-8 overflow-hidden"
        loading="eager">
        <div className="sm:my-auto my-5  sm:mb-auto mb-0 ml-0 flex flex-col items-center sm:ml-24 shadow-2xl rounded-full">
          <img
            src={adaColored}
            alt="me"
            className="sm:w-460 w-72 bg-gradient-to-bl from-slate-700 to-gray-700 rounded-full shadow-xl"
            loading="eager"
          />
        </div>

        <section className=" sm:m-auto my-auto sm:mt-auto mt-5 flex flex-col text-center gap-5  sm:gap-4 relative z-10">
          <h1 className="text-7xl sm:text-9xl font-cursive font-semibold text-yellow-400 tracking-widest">
            Hello
          </h1>
          <p className="text-3xl font-sans font-thin sm:text-gray-300 text-slate-600 relative bottom-9 left-12">
            You can call me
          </p>
          <h2 className="text-6xl font-sans font-normal text-white sm:text-slate-500 tracking-widest -mt-3">
            ADAUGO GOD&apos;SGIFT
          </h2>
          <p className="text-white text-lg flex flex-col text-center relative bottom-5">
            Passionate about Growth and Performance Marketing
          </p>
          <div className="mx-auto flex sm:flex-row flex-col gap-5">
            <Link
              to="/About"
              className="w-60 h-14 p-2 font-normal text-center flex flex-col bg-yellow-400 rounded-sm justify-center text-md">
              ABOUT ME
            </Link>
            <Link
              to="/contact"
              className="w-60 h-14 p-2 border-2 text-center border-white rounded-sm  flex flex-col justify-center text-md shadow-lg">
              PERSONAL DATA
            </Link>
          </div>
        </section>
      </div>
      <div className="relative inset-0 bg-yellow-400 -top-300 left-80% opacity-10 rounded-t-full rounded-b-full w-96 h-96  z-0 hidden sm:block" />
    </div>
  );
}

export default Home;
