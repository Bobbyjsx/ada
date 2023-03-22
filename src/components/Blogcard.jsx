/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React from "react";

function Blogcard(props) {
  return (
    <a
      href={props.link}
      className="flex sm:flex-row flex-col justify-center items-center gap-4 mx-auto sm:p-0 hover:scale-105 duration-300 py-4 ">
      <img
        loading="lazy"
        src={props.img}
        alt="me"
        className="sm:w-96 my-auto border-2 border-white bg-white rounded-md shadow-2xl duration-200 hidden sm:block"
      />
      <img
        loading="lazy"
        src={props.img}
        alt="me"
        className=" w-full my-auto border-2 border-white bg-white rounded-md shadow-2xl duration-200 sm:hidden block"
      />
      <div className="sm:w-auto w-full ">
        <h1 className="sm:w-96  text-yellow-700 font-bold text-left flex sm:text-xl text-lg sm:block uppercase">
          {props.title}
        </h1>
        <p className="sm:w-80  text-left flex flex-col sm:flex-row sm:text-lg text-sm sm:block">
          {props.details}{" "}
          <span>
            {" "}
            <a className="text-blue-500 hover:text-blue-600 my-auto block" href={props.link}>
              Read More...
            </a>
          </span>
        </p>
        {/* <div className=" flex-col hidden w-3/4 ">
          <p className="sm:w-3/4 w-[50%] text-center mx-auto  text-sm">{props.details}</p>
          <a
            className="text-blue-500 hover:text-blue-600 my-auto border-b-2 border-gray-100 pb-3"
            href={props.link}>
            See More...
          </a>
        </div> */}
      </div>
    </a>
  );
}

export default Blogcard;
