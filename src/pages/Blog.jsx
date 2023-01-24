/* eslint-disable react/prop-types */
import React from "react";
import Header from "../components/Header";
// import ada from "../assets/adaBw.png";
import gA4 from "../assets/gA4.jpeg";
import gA42 from "../assets/gA42.jpeg";
import w3 from "../assets/w3.jpeg";
import Blogcard from "../components/Blogcard";

function Blog() {
  return (
    <div className="bg-gray-200 ">
      <Header />
      <div className="py-14  px-6  gap-5 flex flex-col">
        <h1 className="text-yellow-600 font-sans font-bold text-4xl my-7">Blog</h1>

        <div className="flex flex-row flex-wrap sm:w-full mx-auto gap-y-3 sm:gap-y-20">
          <Blogcard
            img={gA4}
            title="Getting Started with Google Analytics 4"
            details="GA4 is considered the next generation of google analytics, It was built on the “App + Web platform released in 2019... "
            link="https://www.linkedin.com/pulse/getting-started-google-analytics-4-review-ezeala-ada-ezeala-ada/"
          />
          <Blogcard
            img={gA42}
            title="Using Google Analytics 4 - Review by Ezeala Adaugo"
            details="Google Analytics is the place to be if you truly want to monitor the performance of your buisness online...
            "
            link="https://www.linkedin.com/pulse/using-google-analytics-review-cxl-institute-pt-2-ezeala-ada/"
          />
          <Blogcard
            img={w3}
            title="INTRODUCTION TO WEB3 MARKETING"
            details="With the aid of emerging trends and technological advancements, web3 marketing strategies will in no time transform how we view the Internet..."
            link="https://www.linkedin.com/pulse/introduction-web3-marketing-ezeala-adaugo"
          />
          {/* <Blogcard
            img={ada}
            details="
                      magna aliquam erat
                      volutpat. Ut wisi enim ad minim
                      vfacilisis at verosi.
                      Lorem ipsum dolor sit amet, cons
                      ectetuer adipiscing elit, sed diam
                      nonummy nibh euismod tincidunt ut
 "
            link="www.google.com"
          />
          <Blogcard
            img={ada}
            details="
                      magna aliquam erat
                      volutpat. Ut wisi enim ad minim
                      vfacilisis at verosi.
                      Lorem ipsum dolor sit amet, cons
                      ectetuer adipiscing elit, sed diam
                      nonummy nibh euismod tincidunt ut
 "
            link="www.google.com"
          />
          <Blogcard
            img={ada}
            details="
                      magna aliquam erat
                      volutpat. Ut wisi enim ad minim
                      vfacilisis at verosi.
                      Lorem ipsum dolor sit amet, cons
                      ectetuer adipiscing elit, sed diam
                      nonummy nibh euismod tincidunt ut
 "
            link="www.google.com"
          />
          <Blogcard
            img={ada}
            details="
                      magna aliquam erat
                      volutpat. Ut wisi enim ad minim
                      vfacilisis at verosi.
                      Lorem ipsum dolor sit amet, cons
                      ectetuer adipiscing elit, sed diam
                      nonummy nibh euismod tincidunt ut
 "
            link="www.google.com"
          />
          <Blogcard
            img={ada}
            details="
                      magna aliquam erat
                      volutpat. Ut wisi enim ad minim
                      vfacilisis at verosi.
                      Lorem ipsum dolor sit amet, cons
                      ectetuer adipiscing elit, sed diam
                      nonummy nibh euismod tincidunt ut
 "
            link="www.google.com"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Blog;
