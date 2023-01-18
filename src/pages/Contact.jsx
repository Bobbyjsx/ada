import React from "react";
import Header from "../components/Header";
import ada from "../assets/adaColored.png";

function Home() {
  const twitter = "https://twitter.com/Ardarh1";
  const cv = "https://docs.google.com/document/d/1jEO99f2Pf_v4_P-82XSZ04boOeLbgQTkHAk1Zf6IMHs/edit";
  const me = "Ezeala Adaugo .G";
  const mail = "adaugo15@gmail.com";
  const email = "mailto:adaugo15@gmail.com";
  return (
    <div className="h-screen  w-full bg-gray-200 overflow-hidden">
      <Header />
      <div className="flex flex-col w-3/4 sm:w-10/12 my-auto mx-auto  sm:gap-10 gap-5 mt-5%">
        <img
          src={ada}
          alt=""
          className="w-36 rounded-full shadow-2xl sm:block  hidden "
          loading="lazy"
        />
        <h1 className="text-yellow-600 font-bold  text-1xl sm:text-4xl  ">Contact Details</h1>
        <div className="flex flex-col sm:flex-row flex-wrap w-full lg:gap-11 gap-7 sm:gap-10">
          <div className="flex flex-col">
            <p className="font-normal text-1xl">Full Name</p>
            <h2 className="font-semibold  text-1xl sm:text-4xl ">{me}</h2>
          </div>
          <div className="flex flex-col">
            <p className="font-normal text-1xl">Address</p>
            <h2 className="font-semibold  text-1xl sm:text-4xl ">Lagos,Nigeria</h2>
          </div>
          <div className="flex flex-col">
            <p className="font-normal text-1xl">Email</p>
            <a className="font-semibold  text-1xl sm:text-4xl " href={email}>
              {mail}
            </a>
          </div>
          <div className="flex flex-col">
            <p className="font-normal text-1xl">Phone</p>
            <h2 className="font-semibold  text-1xl sm:text-4xl ">(+234)8162378017</h2>
          </div>
          <div className="flex flex-col">
            <p className="font-normal text-1xl">Twitter</p>
            <a
              className="font-semibold text-1xl sm:text-4xl text-indigo-800 sm:hover:text-indigo-900"
              title="My twitter"
              href={twitter}>
              Ezeala Adaugo
            </a>
          </div>
          <div className="flex flex-col">
            <p className="font-normal text-1xl">Languages</p>
            <h2 className="font-semibold  text-1xl sm:text-4xl ">English</h2>
          </div>
        </div>
        <a
          className="border-2 bg-yellow-300 font-sans font-semibold p-3 rounded-md w-48 shadow-xl hover:shadow-inner"
          href={cv}
          target="_blank"
          rel="noreferrer">
          Click here to view CV
        </a>
      </div>

      <div className="relative inset-0 bg-orange-200 -top-300 left-3/4 opacity-30 rounded-t-full rounded-b-full w-96 h-96  z-0" />
    </div>
  );
}

export default Home;
