import React from "react";
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
      <div className="shrink sm:w-32 sm:h-32  h-24 bg-white rounded-lg flex flex-col gap-1 sm:gap-2 justify-center items-center py-1 shadow-lg">
        <h1 className="flex flex-col text-center font-bold leading-[14px] sm:text-sm text-xs sm:w-24 flex-wrap  w-[89px]">
          Web3 Marketing Tools
        </h1>
        {/* <img loading="lazy" src={w3} alt="" className="sm:w-9 w-7" /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="28"
          fill="#FFD13E"
          className="bi bi-globe"
          viewBox="0 0 16 16">
          <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
        </svg>
        <div className="shrink flex flex-row gap-1 sm:gap-2 px-2">
          <div className="shrink bg-yellow-400 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="shrink bg-yellow-400 rounded-full w-10px h-10px text-transparent">
            {" "}
            .
          </div>{" "}
          <div className="shrink bg-yellow-300 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="shrink bg-yellow-200 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="shrink bg-gray-200 rounded-full w-10px h-10px text-transparent"> .</div>
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
