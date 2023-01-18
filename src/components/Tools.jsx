import React from "react";
import suite from "../assets/gSuite.png";
import analytics from "../assets/analytics.png";
import firebase from "../assets/firebase.png";
import manager from "../assets/manager.png";
import gAds from "../assets/gAds.png";
import fAds from "../assets/fAds.png";
import crm from "../assets/crm.png";
import zoho from "../assets/zoho.png";
import hubspot from "../assets/hubspot.png";
import clever from "../assets/clever.png";
import twitter from "../assets/twitter.png";
import eplat from "../assets/ePlat.png";

function tools() {
  return (
    <div className="sm:gap-12  gap-5 flex flex-row flex-wrap flex-shrink w-83% sm:w-auto ">
      <div className="sm:w-128 sm:h-32 h-24  bg-white rounded-lg flex flex-col gap-1 sm:gap-2 justify-center items-center py-1 shadow-lg">
        <h1 className="flex flex-col text-center font-bold leading-14 sm:text-sm text-xs sm:w-24 flex-wrap w-14">
          Google Suite
        </h1>
        <img loading="lazy" src={suite} alt="" className="w-14 sm:w-20" />
        <div className="flex flex-row gap-1 sm:gap-2 px-2">
          <div className="bg-yellow-400 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-yellow-400 rounded-full w-10px h-10px text-transparent"> .</div>{" "}
          <div className="bg-yellow-300 rounded-full w-10px h-10px text-transparent"> .</div>{" "}
          <div className="bg-yellow-200 rounded-full w-10px h-10px text-transparent"> .</div>{" "}
          <div className="bg-gray-200 rounded-full w-10px h-10px text-transparent"> .</div>
        </div>
      </div>
      <div className=" sm:h-32  sm:w-32 h-24 bg-white rounded-lg flex flex-col gap-1 sm:gap-2 justify-center items-center py-1 shadow-lg">
        <h1 className="flex flex-col text-center font-bold leading-14 sm:text-sm text-xs sm:w-24 flex-wrap w-14 ">
          Google Analytics
        </h1>
        <img loading="lazy" src={analytics} alt="" className="sm:w-6 w-7 " />
        <div className="flex flex-row gap-1 sm:gap-2 px-2">
          <div className="bg-yellow-400 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-yellow-400 rounded-full w-10px h-10px text-transparent"> .</div>{" "}
          <div className="bg-yellow-300 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-yellow-200 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-gray-200 rounded-full w-10px h-10px text-transparent"> .</div>
        </div>
      </div>
      <div className="sm:w-32 sm:h-32  h-24 bg-white rounded-lg flex flex-col gap-1 sm:gap-2 justify-center items-center py-1 shadow-lg">
        <h1 className="flex flex-col text-center font-bold leading-14 sm:text-sm text-xs sm:w-24 flex-wrap w-14">
          Firebase
        </h1>
        <img loading="lazy" src={firebase} alt="" className="sm:w-9 w-7" />
        <div className="flex flex-row gap-1 sm:gap-2 px-2">
          <div className="bg-yellow-400 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-yellow-400 rounded-full w-10px h-10px text-transparent"> .</div>{" "}
          <div className="bg-yellow-300 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-gray-200 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-gray-200 rounded-full w-10px h-10px text-transparent"> .</div>
        </div>
      </div>
      <div className="sm:w-32 sm:h-32  h-24 bg-white rounded-lg flex flex-col gap-1 sm:gap-2 justify-center items-center py-1 shadow-lg">
        <h1 className="flex flex-col text-center font-bold leading-14 sm:text-sm text-xs sm:w-24 flex-wrap w-14">
          Google Tag Manager
        </h1>
        <img loading="lazy" src={manager} alt="" className="sm:w-9 w-5" />
        <div className="flex flex-row gap-1 sm:gap-2 px-2">
          <div className="bg-yellow-400 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-yellow-400 rounded-full w-10px h-10px text-transparent"> .</div>{" "}
          <div className="rounded-full w-10px h-10px text-transparent flex flex-row">
            <div className="bg-yellow-200 rounded-l-full w-1/2 h-10px text-transparent ">.</div>
            <div className="bg-gray-200 rounded-r-full w-1/2 h-10px text-transparent ">.</div>
          </div>
          <div className="bg-gray-200 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-gray-200 rounded-full w-10px h-10px text-transparent"> .</div>
        </div>
      </div>
      <div className="sm:w-32 sm:h-32  h-24 bg-white rounded-lg flex flex-col gap-1 sm:gap-2 justify-center items-center py-1 shadow-lg">
        <h1 className="flex flex-col text-center font-bold leading-14 sm:text-sm text-xs sm:w-24 flex-wrap w-14">
          Google ADs
        </h1>
        <img loading="lazy" src={gAds} alt="" className="sm:w-9 w-7" />
        <div className="flex flex-row gap-1 sm:gap-2 px-2">
          <div className="bg-yellow-400 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-yellow-400 rounded-full w-10px h-10px text-transparent"> .</div>{" "}
          <div className="bg-yellow-300 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-yellow-300 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="rounded-full w-10px h-10px text-transparent flex flex-row">
            <div className="bg-yellow-200 rounded-l-full w-1/2 h-10px text-transparent ">.</div>
            <div className="bg-gray-200 rounded-r-full w-1/2 h-10px text-transparent ">.</div>
          </div>
        </div>
      </div>
      <div className="sm:w-32 sm:h-32  h-24 bg-white rounded-lg flex flex-col gap-1 sm:gap-2 justify-center items-center py-1 shadow-lg">
        <h1 className="flex flex-col text-center font-bold leading-14 sm:text-sm text-xs sm:w-24 flex-wrap w-14">
          Facebook ADs
        </h1>
        <img loading="lazy" src={fAds} alt="" className="sm:w-9 w-7" />
        <div className="flex flex-row gap-1 sm:gap-2 px-2">
          <div className="bg-yellow-400 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-yellow-400 rounded-full w-10px h-10px text-transparent"> .</div>{" "}
          <div className="bg-yellow-300 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-yellow-300 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="rounded-full w-10px h-10px text-transparent flex flex-row">
            <div className="bg-yellow-200 rounded-l-full w-1/2 h-10px text-transparent ">.</div>
            <div className="bg-gray-200 rounded-r-full w-1/2 h-10px text-transparent ">.</div>
          </div>
        </div>
      </div>
      <div className="sm:w-32 sm:h-32  h-24 bg-white rounded-lg flex flex-col gap-1 sm:gap-2 justify-center items-center py-1 shadow-lg">
        <h1 className="flex flex-col text-center font-bold leading-14 sm:text-sm text-xs sm:w-24 flex-wrap w-14">
          CRM Tools
        </h1>
        <img loading="lazy" src={crm} alt="" className="sm:w-9 w-7" />
        <div className="flex flex-row gap-1 sm:gap-2 px-2">
          <div className="bg-yellow-400 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-yellow-400 rounded-full w-10px h-10px text-transparent"> .</div>{" "}
          <div className="bg-yellow-300 rounded-full w-10px h-10px text-transparent"> .</div>{" "}
          <div className="rounded-full w-10px h-10px text-transparent flex flex-row">
            <div className="bg-yellow-200 rounded-l-full w-1/2 h-10px text-transparent ">.</div>
            <div className="bg-gray-200 rounded-r-full w-1/2 h-10px text-transparent ">.</div>
          </div>
          <div className="bg-gray-200 rounded-full w-10px h-10px text-transparent"> .</div>
        </div>
      </div>
      <div className="sm:w-32 sm:h-32  h-24 bg-white rounded-lg flex flex-col gap-1 sm:gap-2 justify-center items-center py-1 shadow-lg">
        <h1 className="flex flex-col text-center font-bold leading-14 sm:text-sm text-xs sm:w-24 flex-wrap w-14">
          Zoho CRM
        </h1>
        <img loading="lazy" src={zoho} alt="" className="w-7 sm:w-16 my-1" />
        <div className="flex flex-row gap-1 sm:gap-2 px-2">
          <div className="bg-yellow-400 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-yellow-400 rounded-full w-10px h-10px text-transparent"> .</div>{" "}
          <div className="bg-yellow-300 rounded-full w-10px h-10px text-transparent"> .</div>{" "}
          <div className="bg-gray-200 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-gray-200 rounded-full w-10px h-10px text-transparent"> .</div>
        </div>
      </div>
      <div className="sm:w-32 sm:h-32  h-24 bg-white rounded-lg flex flex-col gap-1 sm:gap-2 justify-center items-center py-1 shadow-lg">
        <h1 className="flex flex-col text-center font-bold leading-14 sm:text-sm text-xs sm:w-24 flex-wrap w-14">
          Hubspot CRM
        </h1>
        <img loading="lazy" src={hubspot} alt="" className="sm:w-9 w-7" />
        <div className="flex flex-row gap-1 sm:gap-2 px-2">
          <div className="bg-yellow-400 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-yellow-400 rounded-full w-10px h-10px text-transparent"> .</div>{" "}
          <div className="bg-yellow-300 rounded-full w-10px h-10px text-transparent"> .</div>{" "}
          <div className="rounded-full w-10px h-10px text-transparent flex flex-row">
            <div className="bg-yellow-200 rounded-l-full w-1/2 h-10px text-transparent ">.</div>
            <div className="bg-gray-200 rounded-r-full w-1/2 h-10px text-transparent ">.</div>
          </div>
          <div className="bg-gray-200 rounded-full w-10px h-10px text-transparent"> .</div>
        </div>
      </div>
      <div className="sm:w-32 sm:h-32  h-24 bg-white rounded-lg flex flex-col gap-1 sm:gap-2 justify-center items-center py-1 shadow-lg">
        <h1 className="flex flex-col text-center font-bold leading-14 sm:text-sm text-xs sm:w-24 flex-wrap w-14">
          Clever Tap
        </h1>
        <img loading="lazy" src={clever} alt="" className="sm:w-9 w-7" />
        <div className="flex flex-row gap-1 sm:gap-2 px-2">
          <div className="bg-yellow-400 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-yellow-400 rounded-full w-10px h-10px text-transparent"> .</div>{" "}
          <div className="bg-yellow-300 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-yellow-200 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-gray-200 rounded-full w-10px h-10px text-transparent"> .</div>
        </div>
      </div>
      <div className="sm:w-32 sm:h-32  h-24 bg-white rounded-lg flex flex-col gap-1 sm:gap-2 justify-center items-center py-1 shadow-lg">
        <h1 className="flex flex-col text-center font-bold leading-14 sm:text-sm text-xs sm:w-24 flex-wrap w-14">
          Twitter
        </h1>
        <img loading="lazy" src={twitter} alt="" className="sm:w-9 w-10" />
        <div className="flex flex-row gap-1 sm:gap-2 px-2">
          <div className="bg-yellow-400 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-yellow-400 rounded-full w-10px h-10px text-transparent"> .</div>{" "}
          <div className="bg-yellow-300 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-yellow-200 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-gray-200 rounded-full w-10px h-10px text-transparent"> .</div>
        </div>
      </div>
      <div className="sm:w-32 sm:h-32  h-24 bg-white rounded-lg flex flex-col gap-1 sm:gap-2 justify-center items-center py-1 shadow-lg">
        <h1 className="flex flex-col text-center font-bold leading-14 sm:text-sm text-xs sm:w-24 flex-wrap w-14">
          Email Marketing Platforms
        </h1>
        <img loading="lazy" src={eplat} alt="" className="sm:w-9 w-5" />
        <div className="flex flex-row gap-1 sm:gap-2 px-2">
          <div className="bg-yellow-400 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-yellow-400 rounded-full w-10px h-10px text-transparent"> .</div>{" "}
          <div className="bg-yellow-300 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-yellow-200 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-gray-200 rounded-full w-10px h-10px text-transparent"> .</div>
        </div>
      </div>
    </div>
  );
}
export default tools;
