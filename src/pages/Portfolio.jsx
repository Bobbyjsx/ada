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

function Portfolio() {
  return (
    <div className="bg-gray-200 ">
      <Header />
      <div className="py-14 pdd px-14   gap-11 flex flex-col">
        <h1 className="text-yellow-600 font-sans font-bold text-4xl my-7">PORTFOLIO</h1>

        <div className="flex flex-row flex-wrap sm:w-full items-center justify-center gap-y-16">
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
          {/* <Portfoliocards
            img={ada}
            details="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod "
            link="www.google.com"
          />
          <Portfoliocards
            img={ada}
            details="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod "
            link="www.google.com"
          />
          <Portfoliocards
            img={ada}
            details="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod "
            link="www.google.com"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
