/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React from "react";

function Blogcard(props) {
  return (
    <a
      href={props.link}
      className="flex flex-row justify-center items-center gap-4 mx-auto sm:p-0 sm:hover:shadow-2xl py-4 ">
      <img
        loading="lazy"
        src={props.img}
        alt="me"
        className="sm:w-44 sm:hover:w-48 w-36 hover:w-40 duration-500 my-auto border-2 border-white bg-white rounded-md shadow-2xl"
      />
      <div>
        <p className="sm:w-80 sm:text-center text-left flex flex-col sm:flex-row sm:text-lg text-sm sm:block">
          {props.details}{" "}
          <span>
            {" "}
            <a className="text-blue-500 hover:text-blue-600 my-auto block" href={props.link}>
              Read More...
            </a>
          </span>
        </p>
        <div className="sm:flex flex-col hidden w-3/4 ">
          <p className="sm:w-3/4 w-[90%] text-center mx-auto my-auto text-sm">{props.details}</p>
          <a
            className="text-blue-500 hover:text-blue-600 my-auto border-b-2 border-gray-100 pb-3"
            href={props.link}>
            See More...
          </a>
        </div>
      </div>
    </a>
  );
}

export default Blogcard;
