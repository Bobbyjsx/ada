/* eslint-disable react/prop-types */
import React from "react";
import Header from "../components/Header";
import ada from "../ASSETS/adaBw.png";
import Portfoliocards from "../components/Portfoliocards";

function Portfolio() {
  return (
    <div className="bg-gray-200 ">
      <Header />
      <div className="py-14 pdd px-14   gap-11 flex flex-col">
        <h1 className="text-yellow-600 font-sans font-bold text-4xl my-7">PORTFOLIO</h1>

        <div className="flex flex-row flex-wrap sm:w-[72%] mx-auto gap-y-4">
          <Portfoliocards
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
          />
          <Portfoliocards
            img={ada}
            details="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod "
            link="www.google.com"
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
