/* eslint-disable react/prop-types */
import React from "react";
// import ada from "../assets/adaBw.png";
import ad1 from "../assets/ad1.jpg";
import ad2 from "../assets/ad2.jpg";
import soko from "../assets/soko.jpg";
import gdg from "../assets/gdf.jpg";
import gxi1 from "../assets/gxi1.jpg";
import Portfoliocards from "../components/Portfoliocards";
import Upcoming from "../components/Upcoming";
import faguwa from "../assets/faguwa.jpg";
// import MyModal from "../components/EventPopup";

function Portfolio() {
  return (
    <div className="bg-gray-200 pb-96">
      <h1 className="text-yellow-600 font-sans font-bold text-4xl mb-7 pt-7 pl-11">PORTFOLIO</h1>
      <div className="py-14 pdd px-14 gap-11 flex flex-col  justify-center items-center align-middle min-h-screen max-h-full ">
        <div className="flex flex-row flex-wrap sm:w-[100%] 2xl:w-[60%] 2xl:gap-16 items-center justify-evenly gap-y-16 border-b-2 border-gray-200">
          <Portfoliocards
            img={ad1}
            details="First session Speaker at AfricaNXT 2023, the largest gathering of innovators from across Africa and the diaspora"
            link="https://africanxt.sched.com/event/1FbRO/cryptonite-what-is-killing-crypto-adoption-in-africa"
          />
          <Portfoliocards
            img={ad2}
            details="Second session Speaker at AfricaNXT 2023, the largest gathering of innovators from across Africa and the diaspora "
            link="https://www.youtube.com/watch?v=V07fpMRgvWw"
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
            <div className="flex flex-row flex-wrap items-start justify-evenly w-full gap-y-16">
              {Upcoming.map((item) => {
                return (
                  <div key={item.id} className="flex flex-row items-start justify-start">
                    <div className="flex flex-col gap-4 ">
                      <img
                        src={faguwa}
                        alt="Event banner"
                        className="w-72 h-72 rounded-md shadow-2xl border-2 border-yellow-600 bg-white hover:scale-110 duration-500 ease-in-out"
                        key={item.id}
                      />
                      <div className="w-72 px-2 ">
                        <h2 className="text-lg font-bold text-gray-900">{item.title}</h2>
                        <p className="text-base font-medium text-gray-500 mt-2">
                          {item.description}
                        </p>
                      </div>
                      <div className="w-72 px-2">
                        <h3 className="text-lg font-semibold text-gray-900">Date:</h3>
                        <p className="text-base font-medium text-gray-500">{item.date}</p>
                      </div>
                      <div className="w-72 px-2">
                        <h3 className="text-lg font-semibold text-gray-900">Venue:</h3>
                        <p className="text-base font-medium text-gray-500 capitalize">
                          {item.venue}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
        {/* <MyModal /> */}
      </div>
    </div>
  );
}

export default Portfolio;
