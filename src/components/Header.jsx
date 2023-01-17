import React, { useState } from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames";
import logo from "../ASSETS/logo.png";

function Header() {
  const [mobileClass, setMobileClass] = useState(false);
  const [isIconOpen, setisIconOpen] = useState(true);
  const [closeIcon, setCloseIcon] = useState(false);
  const handleClick = () => {
    setMobileClass(true);
    setisIconOpen(false);
    setCloseIcon(true);
  };
  const closeMenu = () => {
    setMobileClass(false);
    setisIconOpen(true);
    setCloseIcon(false);
  };

  return (
    <div className=" text-white">
      <nav className="bg-slate-300 border-b-2 border-yellow-400 w-full">
        <div className="mx-auto  px-2 sm:px-6 lg:px-8 max-w-7xl ">
          <div className="relative flex h-16 items-center justify-between flex-row-reverse">
            <div className="inset-y-0 left-0  flex items-center  sm:hidden">
              <button
                type="button"
                onClick={handleClick}
                className={classNames({
                  "inline-flex items-center justify-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white block":
                    isIconOpen,
                  "inline-flex items-center justify-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white hidden":
                    !isIconOpen,
                })}>
                <svg
                  className="block h-9 w-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="goldenrod"
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
              <button
                onClick={closeMenu}
                type="button"
                className={classNames({
                  "inline-flex items-center justify-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white":
                    closeIcon,
                  "inline-flex items-center justify-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white hidden":
                    !closeIcon,
                })}>
                <svg
                  className=" h-9 w-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="goldenrod"
                  aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 justify-start  sm:items-stretch ">
              <div className="flex flex-shrink-0 items-center">
                <Link to="/" title="Home" className="">
                  <img src={logo} alt="logo" className="w-32" loading="lazy" />
                </Link>
              </div>
              <div id="center" className="hidden sm:ml-6 sm:block my-auto flex flex-1 justify-end">
                <div className="flex space-x-4 justify-end">
                  <Link
                    className="text-gray-900  focus:bg-gray-900 focus:text-white bg-gray-100  hover:bg-gray-700 hover:text-white block text-center font-medium transition duration-300 ease-in-out h-10 w-24 py-2 rounded-full my-auto "
                    to="/Portfolio"
                    aria-current="page">
                    Portfolio
                  </Link>
                  <Link
                    className="text-gray-900  focus:bg-gray-900 focus:text-white bg-gray-100  hover:bg-gray-700 hover:text-white block text-center font-medium transition duration-300 ease-in-out h-10 w-24 py-2 rounded-full my-auto "
                    to="/About">
                    About
                  </Link>
                  <Link
                    className="text-gray-900  focus:bg-gray-900 focus:text-white bg-gray-100  hover:bg-gray-700 hover:text-white block text-center font-medium transition duration-300 ease-in-out h-10 w-24 py-2 rounded-full my-auto "
                    to="/Blog">
                    Blog
                  </Link>
                  <Link
                    className="text-gray-900  focus:bg-gray-900 focus:text-white bg-gray-100  hover:bg-gray-700 hover:text-white block text-center font-medium transition duration-300 ease-in-out h-10 w-24 py-2 rounded-full my-auto "
                    to="/Contact">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div
          className={classNames({ "sm:hidden": mobileClass, "sm:hidden hidden": !mobileClass })}
          id="mobile-menu">
          <div className="space-y-1 pl-2 pr-6 pt-2 pb-3 ease-in-out duration-300 delay-1000">
            <Link
              className="text-gray-900 focus:bg-gray-900 focus:text-white hover:bg-gray-700 hover:text-white block px-3 py-2 text-lg font-semibold bg-slate-200 rounded-md"
              to="/Portfolio"
              aria-current="page">
              Portfolio
            </Link>
            <Link
              className="text-gray-900 focus:bg-gray-900 focus:text-white hover:bg-gray-700 hover:text-white block px-3 py-2 text-lg font-semibold  rounded-md  bg-slate-200 "
              to="/About">
              About
            </Link>
            <Link
              className="text-gray-900 focus:bg-gray-900 focus:text-white hover:bg-gray-700 hover:text-white block px-3 py-2 text-lg font-semibold  bg-slate-200 rounded-md"
              to="/Blog">
              Blog
            </Link>
            <Link
              className="text-gray-900 focus:bg-gray-900 focus:text-white hover:bg-gray-700 hover:text-white block px-3 py-2 text-lg font-semibold  rounded-md  bg-slate-200"
              to="/Contact">
              Contact
            </Link>
          </div>
        </div>
      </nav>
      {/* close */}
      {/* Header.propTypes = {
          ariaHidden= PropTypes.bool,
          setAttribute= PropTypes.func,
        }; */}
    </div>
  );
}

export default Header;
