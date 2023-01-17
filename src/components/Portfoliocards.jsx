/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React from "react";

function Portfoliocards(props) {
  return (
    <div className="flex flex-col gap-11">
      <div className="flex flex-col justify-center items-center sm:gap-0  sm:w-72 mx-auto swm:p-0 px-6 ">
        <img
          src={props.img}
          alt="me"
          className="w-3/4 hover:w-[80%] duration-500 my-auto border-2 border-white bg-white rounded-md shadow-2xl"
        />
        <p className="sm:w-[75%]  text-center my-auto hidden sm:block ">{props.details}</p>
        <a className="text-blue-500 hover:text-blue-600 my-auto hidden sm:block" href={props.link}>
          See More...
        </a>
        <div className="flex flex-col sm:hidden w-3/4 ">
          <p className="sm:w-3/4 w-[90%] text-center mx-auto my-auto text-sm">{props.details}</p>
          <a
            className="text-blue-500 hover:text-blue-600 my-auto border-b-2 border-gray-100 pb-3"
            href={props.link}>
            See More...
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfoliocards;
