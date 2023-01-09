import React, { useState } from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames";

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
      <nav className="sm:bg-white bg-slate-900 border-b-2 border-yellow-400">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden motion-safe:animate-ping">
              <button
                type="button"
                onClick={handleClick}
                className={classNames({
                  "inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white block":
                    isIconOpen,
                  "inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white hidden":
                    !isIconOpen,
                })}>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
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
                  "inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white":
                    closeIcon,
                  "inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white hidden":
                    !closeIcon,
                })}>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link
                  to="/"
                  title="Home"
                  className="font-bold text-4xl text-yellow-300 flex text-center ">
                  <span className="font-bold text-4xl text-gray-500  flex text-center">ARD</span>
                  ARH
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link
                    className="text-gray-900 focus:bg-gray-900  focus:text-white bg-yellow-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300  ease-in-out"
                    to="/Portfolio"
                    aria-current="page">
                    Portfolio
                  </Link>
                  <Link
                    className="text-gray-900  focus:bg-gray-900 focus:text-white bg-yellow-400  hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
                    to="/About">
                    About
                  </Link>
                  <Link
                    className="text-gray-900 focus:bg-gray-900 focus:text-white hover:bg-gray-700  bg-yellow-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-730 ease-in-out"
                    to="/Blog">
                    Blog
                  </Link>
                  <Link
                    className="text-gray-900  focus:bg-gray-900 focus:text-white hover:bg-gray-700  bg-yellow-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
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
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link
              className="text-gray-300 focus:bg-gray-900 focus:text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              to="/Portfolio"
              aria-current="page">
              Portfolio
            </Link>
            <Link
              className="text-gray-  focus:bg-gray-900 focus:text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              to="/About">
              About
            </Link>
            <Link
              className="text-gray- focus:bg-gray-900 focus:text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              to="/Blog">
              Blog
            </Link>
            <Link
              className="text-gray-  focus:bg-gray-900 focus:text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
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
