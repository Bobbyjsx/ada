import React from "react";
import Header from "../components/Header";

function Home() {
  return (
    <div>
      <Header />
      <div>
        <div className="flex flex-row m-auto w-72 gap-11">
          <h1 className="border-bl-rounded w-64 flex text-center border-b-4 text-4xl font-semibold border-yellow-300 flex-col mb-3 mt-6">
            Contact

            
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
        <div>hi</div>
      </div>
    </div>
  );
}

export default Home;
