/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React from "react";
import "../styles/App.css";

function Portfoliocards(props) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col font-sans gap-y-2 sm:w-[100%] sm:h-[460px] bg-white/30 backdrop-blur-0 pb-4 shadow-2xl">
        <a
          id="cont"
          href={props.link}
          className="w-[310px] h-2/3 overflow-hidden flex align-start items-start justify-start  border-none bg-white mb-3 "
          target="_blank"
          rel="noreferrer">
          <img
            loading="lazy"
            src={props.img}
            alt="card banner"
            className="w-[310px] h-full flex align-start items-start justify-start  my-auto border-none sm:hover:scale-110 duration-500   "
          />
        </a>

        <p className="sm:w-72 text-left my-auto text-gray-600 hidden sm:block sm:px-2 ">
          {props.details}
        </p>
        <a
          className="rounded-full w-9 h-9 ml-2 border-2 border-gray-400 hover:border-yellow-400 hover:animate-ping hover:text-orange-600 duration-300 ease-in-out delay-50 bg-white/30 backdrop-blur-md hidden sm:flex justify-center items-center"
          href={props.link}
          target="_blank"
          rel="noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 ">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
        <div className="flex flex-col sm:hidden w-full gap-5 px-2 ">
          <p className="w-72 m-auto text-lg text-left text-gray-600">{props.details}</p>
          <a
            className="rounded-full w-9 h-9 ml-2 border-2 border-gray-400 flex justify-center items-center hover:animate-ping "
            href={props.link}
            target="_blank"
            rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfoliocards;
