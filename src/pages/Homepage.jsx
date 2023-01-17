import React from "react";
import { Link } from "react-router-dom";
import "../styles/dist/output.css";
import Header from "../components/Header";
import bg from "../ASSETS/bgHome.png";
import adaColored from "../ASSETS/adaColored.png";

function Home() {
  return (
    <div className="bg-white text-black w-full overflow-hidden">
      <Header />
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="sm:h-[495px] h-[800px] flex sm:flex-row flex-col sm:p-0 p-6">
        <div className="my-auto sm:mb-auto mb-0 ml-0 flex flex-col items-center sm:ml-24">
          <img src={adaColored} alt="me" className="w-72" />
        </div>

        <section className=" sm:m-auto my-auto sm:mt-auto mt-0 flex flex-col gap-5  sm:gap-8">
          <h1 className="text-6xl font-cursive font-bold text-yellow-500 tracking-widest">Hello</h1>
          <p className="text-lg font-serif sm:text-gray-300 text-slate-600 font-semibold relative bottom-4 left-12">
            You can call me
          </p>
          <h2 className="text-3xl font-sans font-bold text-white sm:text-slate-500 tracking-widest -mt-3">
            ADAUGO GOD&apos;SGIFT
          </h2>
          <p className="text-white text-lg">Passionate about Growth and Performance Marketing</p>
          <div className="mx-auto w-64 flex sm:flex-row flex-col gap-5">
            <Link
              to="/About"
              className="sm:p-3 w-auto p-2 font-semibold text-center flex flex-col bg-yellow-500 rounded-md">
              ABOUT ME
            </Link>
            <Link
              to="/contact"
              className="p-2 w-96 sm:w-auto border-2 text-center border-white ml-4 rounded-md  flex flex-col">
              Personal Data
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
