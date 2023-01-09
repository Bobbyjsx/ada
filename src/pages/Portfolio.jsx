import React from "react";
import Header from "../components/Header";
import growthx from "../Image/ada.png";

function Portfolio() {
  return (
    <div>
      <Header />
      <div className="p-6">
        <div className="flex flex-row m-auto w-72 gap-11">
          <h1 className="border-bl-rounded w-64 flex text-center border-b-4 text-4xl font-semibold border-yellow-300 flex-col mb-3 mt-6">
            Portfolio
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="silver"
            className="bi bi-person-vcard"
            viewBox="0 0 16 16">
            <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z" />
            <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z" />
          </svg>
        </div>
        <p className="w-[80%] flex-col flex text-center  m-auto py-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at leo a arcu tristique
          facilisis. Nullam eleifend, nisi in consectetur hendrerit, neque risus imperdiet nunc, ut
          interdum urna tellus a quam. Aliquam id mollis est, at ornare justo. Integer euismod
          volutpat magna, eu viverra nulla vehicula id. Aliquam lacinia dui dui, in mollis libero
          porta a. Maecenas non tellus eu est dictum lobortis.
        </p>
        <div className="flex flex-col sm:flex-row">
          <div>
            <div className="p-8 px-11 border-2 border-slate-300 sm:w-[80%] h-[18%] rounded-md w-[90%] mb-5 shadow-2xl">
              <h1 className="font-bold text-6xl">4+</h1>
              <p className="capitalize font-semibold text-2xl">years in the field.</p>
            </div>
            <div className="p-8 px-11 border-2 border-slate-300 sm:w-[80%] h-[18%] rounded-md w-[90%] mb-5 shadow-2xl">
              <h1 className="font-bold text-6xl">8+</h1>
              <p className="capitalize font-semibold text-2xl">industries</p>
            </div>
            <div className="p-8 px-11 border-2 border-slate-300 sm:w-[80%] h-[18%] rounded-md w-[90%] mb-5 shadow-2xl">
              <h1 className="font-bold text-6xl">$100,000+</h1>
              <p className="capitalize font-semibold text-2xl">Monthly marketing budget</p>
            </div>
            <div className="p-8 px-11 border-2 border-slate-300 sm:w-[80%] h-[18%] rounded-md w-[90%] mb-5 shadow-2xl">
              <h1 className="font-bold text-6xl">4</h1>
              <p className="capitalize font-semibold text-2xl">
                Mentored{" "}
                <a
                  href="https://twitter.com/Ardarh1/status/1597946941723115520?s=20&t=TwHbFMXzFdEUsoVXb7uFnA"
                  className="text-blue-600">
                  (Including Google Dev Groups)
                </a>
              </p>
            </div>
            <div className="p-8 px-11 border-2 border-slate-300 sm:w-[80%] h-[18%] rounded-md w-[90%] mb-5 shadow-2xl">
              <h1 className="font-bold text-6xl">2</h1>
              <p className="capitalize font-semibold text-2xl">
                Personal Communities Built;{" "}
                <a href="https://twitter.com/Web3Marverse" className="text-blue-600">
                  Web3Marverse
                </a>
                ,
                <a href="https://mobile.twitter.com/SokoSQNetwork" className="text-blue-600">
                  {" "}
                  SokoSQNetwork
                </a>
              </p>
            </div>
          </div>
          <div className="h-[70%] w-[90%] sm:w-[50%] overflow-hidden rounded-l-full border-r-0 border-4  border-yellow-500">
            <img src={growthx} alt="call card" className=" w-[90%] ml-9 " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
