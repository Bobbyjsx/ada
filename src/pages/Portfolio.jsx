/* eslint-disable react/prop-types */
import React from "react";
import Header from "../components/Header";
// import ada from "../assets/adaBw.png";
import nxtp from "../assets/nxtPink.jpeg";
import nxty from "../assets/nxtYellow.png";
import soko from "../assets/soko.jpeg";
import gdg from "../assets/gdf.jpeg";
import gxi1 from "../assets/gxi1.jpeg";
import Portfoliocards from "../components/Portfoliocards";
import Upcoming from "../components/Upcoming";
// import bw from '../../src/assets/adaBw.png'

function Portfolio() {
  return (
    <div className="bg-gray-200 pb-96">
      <Header />
      <div className="py-14 pdd px-14   gap-11 flex flex-col">
        <h1 className="text-yellow-600 font-sans font-bold text-4xl my-7">PORTFOLIO</h1>

        <div className="flex flex-row flex-wrap sm:w-full items-center justify-evenly gap-y-16">
          <Portfoliocards
            img={nxtp}
            details="First session Speaker at AfricaNXT 2023, the largest gathering of innovators from across Africa and the diaspora"
            link="https://africanxt.sched.com/event/1FbRO/cryptonite-what-is-killing-crypto-adoption-in-africa"
          />
          <Portfoliocards
            img={nxty}
            details="Second session Speaker at AfricaNXT 2023, the largest gathering of innovators from across Africa and the diaspora "
            link="https://africanxt.sched.com/event/1FlsC/web3-women-and-the-future-of-africa"
          />
          <Portfoliocards
            img={soko}
            details="Co-founder, SokoSQ Network, a community for Business Owners and Digital Marketers in Africa "
            link="https://www.instagram.com/sokosqnetwork/"
          />
          <Portfoliocards
            img={gdg}
            details="Mentor at the Google Developer Lagos Growth Marketing Mentorship, Cohort 1 in partnership with GrowthXSplendid"
            link="https://twitter.com/gdglagos/status/1597852020467122179?s=46&t=Y9L4GMZIyUpQcbLJA8zYyg"
          />
          <Portfoliocards
            img={gxi1}
            details="Mentored 30+ ladies on Growth Marketing in the GrowthXSplendid 1.0"
            link="https://medium.com/@marymichael054/digital-marketing-internship-class-with-growthxsplendid-f46a5b13efd7"
          />
          {}
        </div>
        {Upcoming.length >= 1 ? (
          <div id="Upcoming" className="w-full ">
            <h1 className="text-yellow-600 font-sans font-bold text-4xl my-7 underline ">
              Upcoming Events.
            </h1>
            <div className="flex flex-row flex-wrap items-center justify-evenly  w-full gap-y-16">
              {Upcoming.map((item) => {
                return (
                  <div key={item.id} className="flex flex-row items-center justify-center ">
                    <div className="flex flex-col font-sans  gap-1 ">
                      <img
                        src="src/assets/adaBw.png"
                        alt="Event"
                        className="border-yellow-600 border-2 mb-2 w-72 h-72 bg-white rounded-md shadow-2xl hover:scale-110  duration-500 ease-in-out"
                        key={item.id}
                      />
                      <p className="font-semi-bold text-lg font-serif flex text-center flex-wrap w-72 mt-3 border-b-2 border-yellow-600 border-dashed mb-3">
                        {item.description}
                      </p>
                      <p className="font-semi-bold text-lg w-72 flex justify-center">
                        {" "}
                        <span className="font-bold text-lg mr-1">Date:</span>
                        {item.date}
                      </p>
                      <p className="font-semi-bold text-lg  w-72 flex justify-center">
                        {" "}
                        <span className="font-bold text-lg mr-1">Venue: </span> {item.venue}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Portfolio;
