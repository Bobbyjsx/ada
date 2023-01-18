import React from "react";
import hack from "../assets/growthHack.png";
import data from "../assets/data.png";
import community from "../assets/community.png";
import automation from "../assets/automation.png";
import ppc from "../assets/ppc.png";
import content from "../assets/content.png";
import copy from "../assets/copy.png";
import visualize from "../assets/visualize.png";
import com from "../assets/e-com.png";
import eplat from "../assets/ePlat.png";

export default function skills() {
  return (
    <div className="gap-5 sm:gap-12 mx-auto flex flex-row !flex-wrap w-87% sm:w-auto overflow-scroll">
      <div className="sm:w-128 sm:h-32 h-24 bg-white rounded-lg flex flex-col gap-1 sm:gap-2 justify-center items-center py-1 ">
        <h1 className="flex flex-col text-center font-bold leading-[14px] sm:text-sm text-xs sm:w-24 flex-wrap  w-89">
          Growth Hacking
        </h1>
        <img loading="lazy" src={hack} alt="" className="w-7 sm:w-7" />
        <div className="flex flex-row gap-1 sm:gap-2 px-2">
          <div className="bg-yellow-400 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-yellow-400 rounded-full w-10px h-10px text-transparent"> .</div>{" "}
          <div className="bg-yellow-300 rounded-full w-10px h-10px text-transparent"> .</div>{" "}
          <div className="bg-yellow-200 rounded-full w-10px h-10px text-transparent"> .</div>{" "}
          <div className="bg-gray-200 rounded-full w-10px h-10px text-transparent"> .</div>
        </div>
      </div>
      <div className=" sm:h-32  sm:w-32 h-24 bg-white rounded-lg flex flex-col gap-1 sm:gap-2 justify-center items-center py-1 shadow-lg">
        <h1 className="flex flex-col text-center font-bold leading-[14px] sm:text-sm text-xs sm:w-24 flex-wrap w-[89px] ">
          Brand Communication
        </h1>
        <img loading="lazy" src={com} alt="" className="sm:w-6 w-7 " />
        <div className="flex flex-row gap-1 sm:gap-2 px-2">
          <div className="bg-yellow-400 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-yellow-400 rounded-full w-10px h-10px text-transparent"> .</div>{" "}
          <div className="bg-yellow-300 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-yellow-200 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-gray-200 rounded-full w-10px h-10px text-transparent"> .</div>
        </div>
      </div>
      <div className="sm:w-32 sm:h-32  h-24 bg-white rounded-lg flex flex-col gap-1 sm:gap-2 justify-center items-center py-1 shadow-lg">
        <h1 className="flex flex-col text-center font-bold leading-[14px] sm:text-sm text-xs sm:w-24 flex-wrap  w-[89px]">
          Email Marketing
        </h1>
        <img loading="lazy" src={eplat} alt="" className="sm:w-9 w-7" />
        <div className="flex flex-row gap-1 sm:gap-2 px-2">
          <div className="bg-yellow-400 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-yellow-400 rounded-full w-10px h-10px text-transparent"> .</div>{" "}
          <div className="bg-yellow-300 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-gray-200 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-gray-200 rounded-full w-10px h-10px text-transparent"> .</div>
        </div>
      </div>
      <div className="sm:w-32 sm:h-32  h-24 bg-white rounded-lg flex flex-col gap-1 sm:gap-2 justify-center items-center py-1 shadow-lg">
        <h1 className="flex flex-col text-center font-bold leading-[14px] sm:text-sm text-xs sm:w-24 flex-wrap  w-[89px]">
          Data Tracking & Analysis
        </h1>
        <img loading="lazy" src={data} alt="" className="sm:w-9 w-5" />
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
        <h1 className="flex flex-col text-center font-bold leading-[14px] sm:text-sm text-xs sm:w-24 flex-wrap  w-[89px]">
          Community Building
        </h1>
        <img loading="lazy" src={community} alt="" className="sm:w-9 w-7" />
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
        <h1 className="flex flex-col text-center font-bold leading-[14px] sm:text-sm text-xs sm:w-24 flex-wrap  w-[89px]">
          User Retention
        </h1>
        <img loading="lazy" src={automation} alt="" className="sm:w-9 w-7" />
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
        <h1 className="flex flex-col text-center font-bold leading-[14px] sm:text-sm text-xs sm:w-24 flex-wrap  w-[89px]">
          Marketing Automation
        </h1>
        <img loading="lazy" src={automation} alt="" className="sm:w-9 w-7" />
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
        <h1 className="flex flex-col text-center font-bold leading-[14px] sm:text-sm text-xs sm:w-24 flex-wrap  w-[89px]">
          PPC Strategy And Execution
        </h1>
        <img loading="lazy" src={ppc} alt="" className="w-3 sm:w-4 my-1" />
        <div className="flex flex-row gap-1 sm:gap-2 px-2">
          <div className="bg-yellow-400 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-yellow-400 rounded-full w-10px h-10px text-transparent"> .</div>{" "}
          <div className="bg-yellow-300 rounded-full w-10px h-10px text-transparent"> .</div>{" "}
          <div className="bg-gray-200 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-gray-200 rounded-full w-10px h-10px text-transparent"> .</div>
        </div>
      </div>
      <div className="sm:w-32 sm:h-32  h-24 bg-white rounded-lg flex flex-col gap-1 sm:gap-2 justify-center items-center py-1 shadow-lg">
        <h1 className="flex flex-col text-center font-bold leading-[14px] sm:text-sm text-xs sm:w-24 flex-wrap  w-[89px]">
          Content Development
        </h1>
        <img loading="lazy" src={content} alt="" className="sm:w-9 w-7" />
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
        <h1 className="flex flex-col text-center font-bold leading-[14px] sm:text-sm text-xs sm:w-24 flex-wrap  w-[89px]">
          Copy Writing
        </h1>
        <img loading="lazy" src={copy} alt="" className="sm:w-9 w-7" />
        <div className="flex flex-row gap-1 sm:gap-2 px-2">
          <div className="bg-yellow-400 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-yellow-400 rounded-full w-10px h-10px text-transparent"> .</div>{" "}
          <div className="bg-yellow-300 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-yellow-200 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-gray-200 rounded-full w-10px h-10px text-transparent"> .</div>
        </div>
      </div>
      <div className="sm:w-32 sm:h-32  h-24 bg-white rounded-lg flex flex-col gap-1 sm:gap-2 justify-center items-center py-1 shadow-lg">
        <h1 className="flex flex-col text-center font-bold leading-[14px] sm:text-sm text-xs sm:w-24 flex-wrap  w-[89px]">
          Data Visualization
        </h1>
        <img loading="lazy" src={visualize} alt="" className="sm:w-9 w-7" />
        <div className="flex flex-row gap-1 sm:gap-2 px-2">
          <div className="bg-yellow-400 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-yellow-400 rounded-full w-10px h-10px text-transparent"> .</div>{" "}
          <div className="bg-yellow-300 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-yellow-200 rounded-full w-10px h-10px text-transparent"> .</div>
          <div className="bg-gray-200 rounded-full w-10px h-10px text-transparent"> .</div>
        </div>
      </div>
      <div className="sm:w-32 sm:h-32  h-24 bg-white rounded-lg flex flex-col gap-1 sm:gap-2 justify-center items-center py-1 shadow-lg">
        <h1 className="flex flex-col text-center font-bold leading-[14px] sm:text-sm text-xs sm:w-24 flex-wrap  w-[89px]">
          E-Commerce
        </h1>
        <img loading="lazy" src={com} alt="" className="sm:w-9 w-9" />
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
