import React from "react";
import Header from "../components/Header";
import "../styles/App.css";
import bg from "../Image/bg.png";

function Home() {
  const cv = "https://docs.google.com/document/d/1jEO99f2Pf_v4_P-82XSZ04boOeLbgQTkHAk1Zf6IMHs/edit";
  const web3 =
    "https://www.thisdaylive.com/index.php/2022/07/23/web3ladies-launches-a-work-tool-assistance-program-for-her-community-members/";
  const linkedin =
    "https://www.linkedin.com/in/ezeala-adaugo-11406a179?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BycC%2FCgwYTe2PlACi36lLcw%3D%3D";
  const twitter = "https://twitter.com/Ardarh1";
  const me = "Ezeala Adaugo.";
  const mail = "adaugo15@gmail.com";
  const email = "mailto:adaugo15@gmail.com";
  return (
    <div className="">
      <Header />
      <div>
        <h1 className="border-2 border-yellow-400 border-l-0 rounded-tr-full w-36 h-9 pt-1 mt-11  text-slate-800 pl-2 text-xl font-bold motion-safe:animate-bounce">
          This Is Me
        </h1>
        <div
          className="w-full flex sm:flex-row flex-col"
          style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "repeat" }}>
          <section className="flex flex-row w-full sm:w-1/2 gap-4 p-10">
            <div className="px-8">
              <text className="flex flex-col pb-4">
                {" "}
                <h1 className="font-semibold pb-1">First Name: </h1> <p className="ml-1">Adaugo.</p>
              </text>
              <text className="flex flex-col pb-4">
                <h1 className="font-semibold pb-1">Last Name: </h1> <p className="ml-1">Ezeala.</p>
              </text>
              <text className="flex flex-col pb-4">
                <h1 className="font-semibold pb-1">location: </h1>{" "}
                <p className="ml-1">Nigeria, Lagos.</p>
              </text>
              <text className="flex flex-col pb-4">
                <h1 className="font-semibold pb-1">Languages: </h1> <p className="ml-1">English.</p>
              </text>
            </div>
            <div>
              <text className="flex flex-col pb-4">
                <h1 className="font-semibold pb-1">Phone: </h1>{" "}
                <p className="ml-1">(+234)8162378017</p>
              </text>
              <text className="flex flex-col pb-4">
                {" "}
                <h1 className="font-semibold pb-1">Email: </h1>{" "}
                <a href={email} className="ml-1 font-mono underline" rel="noreferrer">
                  {mail}
                </a>
              </text>
              <text className="flex flex-col pb-4">
                <h1 className="font-semibold pb-1">Linkedin: </h1>{" "}
                <a
                  href={linkedin}
                  target="_blank"
                  className="ml-1 font-mono underline"
                  rel="noreferrer">
                  {me}
                </a>
              </text>
              <text className="flex flex-col pb-4">
                <h1 className="font-semibold pb-1">Twitter: </h1>
                <a
                  href={twitter}
                  target="_blank"
                  className="ml-1 font-mono underline"
                  rel="noreferrer">
                  {me}
                </a>
              </text>
            </div>
          </section>
          <a
            download={cv}
            href={cv}
            target="blanck"
            className="font-bold bg-yellow-400 rounded-3xl m-auto sm:m-0  sm:rounded-r-none sm:rounded-l-full h-12 pt-[9px] relative left-1 my-auto px-2 w-40">
            <p className="hover:animate-bounce m-auto w-24">View my CV</p>
          </a>
          <article className="flex sm:align-middle rounded flex-col sm:text-center text-right py-8 sm:justify-center text-slate-900 w-[99%] border-r-0 bg-gray-100 sm:w-1/2 border-4 border-yellow-400 rounded-l-full sm:p-10 sm:m-0  mt-20">
            <p className="m-auto w-[66.3%] mb-4">
              If you are looking for a marketing professional who enjoys driving growth and scaling
              products for brands then
              <br /> - This is me.
            </p>
            <p className="m-auto w-[66.3%] mb-4">
              Hi, my name is Ada, an expert in growth and performance
              <span className="bg-yellow-400 text-black font-semibold rounded-full px-2">
                {" "}
                Marketing
              </span>{" "}
              with an exceptional interest for web3 brands.
            </p>
            <p className="m-auto w-[66.3%] mb-4">
              I have a broad spectrum on user acquisition and growth, community building, marketing
              PR/Comms, analyzing data and{" "}
              <span className=" text-black bg-yellow-400 font-semibold rounded-full px-2">
                {" "}
                Managing
              </span>{" "}
              marketing campaigns
            </p>{" "}
            <p className="m-auto w-[66.3%] mb-4">
              I currently{" "}
              <span className=" text-black bg-yellow-400 font-semibold rounded-full px-2">
                Lead
              </span>{" "}
              growth at{" "}
              <a href={web3} className="dash">
                Web3ladies
              </a>{" "}
              and{" "}
              <a href="https://irokotv.com/" className="dash">
                IROKOtv
              </a>
            </p>
          </article>
        </div>
        <section className=" w-[70%] m-auto justify-center">
          {" "}
          <div className="flex flex-row m-auto w-72 pt-20">
            {" "}
            <h1 className="border-bl-rounded  w-64 flex text-center border-b-4 text-4xl font-semibold border-yellow-300 flex-col mb-3">
              My Skills
            </h1>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="gold"
              className="bi bi-briefcase w-16 relative bottom-[5px] right-1 animate-pulse"
              viewBox="0 0 16 16">
              <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
            </svg>
          </div>
          <div className="flex gap-2 flex-wrap wrap justify-center mb-6 border-b-2 border-zinc-300 ">
            <span className="text-2xl p-2 text-center">GROWTH HACKING</span>
            <span className="text-2xl p-2 bg-gray-400 font-semibold text-black rounded   ">
              BRAND COMMUNICATIONS
            </span>
            <span className="text-2xl p-2">PR & COMMUNICATIONS</span>
            <span className="text-2xl p-2 bg-gray-400 font-semibold text-black rounded ">
              DATA TRAFFICKING AND ANALYSIS
            </span>
            <span className="text-2xl p-2">COMMUNITY BUILDING</span>
            <span className="text-2xl bg-gray-400 font-semibold text-black rounded p-2">
              USER RETENTION
            </span>
            <span className="text-2xl p-2">MARKETING AUTOMATION</span>
            <span className="text-2xl  bg-gray-400 font-semibold text-black rounded p-2">
              PPC STRATEGY AND EXECUTION
            </span>
            <span className="text-2xl p-2">CONTENT DEVELOPMENT</span>
            <span className="text-2xl p-2 bg-gray-400 font-semibold text-black rounded">WEB3</span>
            <span className="text-2xl p-2">COPY WRITING</span>
            <span className="text-2xl  bg-gray-400 font-semibold text-black rounded p-2 mb-20">
              E-COMMERCE
            </span>
          </div>
          <div className="flex flex-row m-auto w-72 ">
            <h1 className="border-bl-rounded w-64 flex text-center border-b-4 text-4xl font-semibold border-yellow-300 flex-col mb-3 mt-6">
              Platforms proficiency
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="gold"
              className="bi bi-bar-chart-line w-16 relative top-[23px] right-1 animate-pulse"
              viewBox="0 0 16 16">
              <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z" />
            </svg>
          </div>
          <div className="flex gap-2 flex-wrap wrap justify-center mb-6 border-b-2 border-zinc-300">
            <span className="text-2xl p-2 uppercase ">Google suites</span>
            <span className="text-2xl p-2">GOOGLE ANALYTICS</span>
            <span className="text-2xl p-2 bg-gray-400 font-semibold text-black rounded ">
              FIREBASE
            </span>
            <span className="text-2xl p-2">GOOGLE TAG MANAGER</span>
            <span className="text-2xl bg-gray-400 font-semibold text-black rounded p-2">
              GOOGLE ADS
            </span>
            <span className="text-2xl p-2">FACEBOOK ADS</span>
            <span className="text-2xl p-2 bg-gray-400 font-semibold text-black rounded">
              CRM TOOLS
            </span>
            <span className="text-2xl p-2">ZOHO CRM</span>
            <span className="text-2xl p-2 bg-gray-400 font-semibold text-black rounded">
              HUBSPOT CRM
            </span>
            <span className="text-2xl p-2">CLEVER TAP</span>
            <span className="text-2xl p-2 bg-gray-400 font-semibold text-black rounded mb-20">
              TWITTER
            </span>
            <span className="text-2xl p-2">EMAIL MARKETING PLATFORMS</span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
