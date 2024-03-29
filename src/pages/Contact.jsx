import React from "react";
import ada from "../assets/adaColored.webp";

function Home() {
  const twitter = "https://twitter.com/Ardarh1";
  const cv =
    "https://docs.google.com/document/d/1InuGvDgz8y-ZzerzLWxRvVI-BaqWtv19WpxN_-gppt4/edit?usp=sharing";
  const me = "Ezeala Adaugo .G";
  const mail = "adaugo15@gmail.com";
  const email = "mailto:adaugo15@gmail.com";
  return (
    <div className="min-h-[700px] h-screen w-full bg-gray-200 overflow-hidden">
      <div className="flex flex-col w-3/4 sm:w-10/12 my-auto mx-auto  sm:gap-10 gap-5 mt-5 home-container ">
        <img
          src={ada}
          alt=""
          className="w-36 rounded-full shadow-2xl sm:block  hidden box "
          loading="lazy"
        />
        <h1 className="text-yellow-600 font-bold  text-1xl sm:text-4xl  ">Contact Details</h1>
        <div className="flex flex-col sm:flex-row flex-wrap w-full lg:gap-11 gap-7 sm:gap-10">
          <div className="flex flex-col home-container-left">
            <p className="font-normal text-1xl">Full Name</p>
            <h2 className="font-semibold  text-1xl sm:text-4xl ">{me}</h2>
          </div>
          <div className="flex flex-col home-container-top">
            <p className="font-normal text-1xl">Address</p>
            <address className="font-semibold  text-1xl sm:text-4xl ">Lagos,Nigeria</address>
          </div>
          <div className="flex flex-col home-container-left">
            <p className="font-normal text-1xl">Email</p>
            <a className="font-semibold  text-1xl sm:text-4xl " href={email}>
              {mail}
            </a>
          </div>
          <div className="flex flex-col home-container-left">
            <p className="font-normal text-1xl">Phone</p>
            <h2 className="font-semibold  text-1xl sm:text-4xl ">(+234)8162378017</h2>
          </div>
          <div className="flex flex-col home-container">
            <p className="font-normal text-1xl">Twitter</p>
            <a
              className="font-semibold text-1xl sm:text-4xl text-indigo-800 sm:hover:text-indigo-900 underline sm:hover:no-underline"
              title="My twitter"
              target="_blank"
              href={twitter}
              rel="noreferrer">
              Ezeala Adaugo
            </a>
          </div>
          <div className="flex flex-col home-container-left">
            <p className="font-normal text-1xl">Languages</p>
            <h2 className="font-semibold  text-1xl sm:text-4xl ">English</h2>
          </div>
        </div>
        <a
          className="border-2 bg-yellow-300 font-sans font-semibold p-3 rounded-md w-48 hover:shadow-md shadow-inner hover:scale-110 ease-in duration-200"
          href={cv}
          target="_blank"
          rel="noreferrer">
          Click here to view CV
        </a>
      </div>

      <div className="relative inset-0 bg-orange-200 -top-300 left-3/4 opacity-30 rounded-t-full rounded-b-full w-96 h-96  z-0 animate-bounce" />
    </div>
  );
}

export default Home;
