/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React from "react";

function Portfoliocards(props) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-evenly  font-serif items-center gap-y-2  sm:w-[90%]  mx-auto sm:px-6 ">
        <div className="w-72 h-72  my-auto border-none bg-white rounded-md shadow-2xl box-border sm:hover:scale-110 duration-500 mb-3 ">
          <img
            loading="lazy"
            src={props.img}
            alt="me"
            className="w-72 h-72  my-auto border-none bg-white rounded-md shadow-2xl box-border "
          />
        </div>

        <p className="sm:w-72 text-center my-auto hidden sm:block ">{props.details}</p>
        <a
          className="text-blue-500 hover:text-blue-600 my-auto hidden sm:block sm:hover:underline"
          href={props.link}
          target="_blank"
          rel="noreferrer">
          See More...
        </a>
        <div className="flex flex-col sm:hidden w-full ">
          <p className="w-72 text-center mx-auto my-auto text-lg">{props.details}</p>
          <a
            className="text-blue-500 hover:text-blue-600 my-auto border-b-2 border-gray-100 pb-3 sm:hover:underline"
            href={props.link}
            target="_blank"
            rel="noreferrer">
            See More...
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfoliocards;
