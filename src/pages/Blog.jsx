/* eslint-disable react/prop-types */
import React from "react";
import Header from "../components/Header";
import ada from "../ASSETS/adaBw.png";
import Blogcard from "../components/Blogcard";

function Blog() {
  return (
    <div className="bg-gray-200 ">
      <Header />
      <div className="py-14  px-6  gap-5 flex flex-col">
        <h1 className="text-yellow-600 font-sans font-bold text-4xl my-7">Blog</h1>

        <div className="flex flex-row flex-wrap sm:w-[100%] mx-auto gap-y-7">
          <Blogcard
            img={ada}
            details="consectetuer adipiscing elit, sed diam
nonummy nibh euismod tincidunt ut
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
            details="consectetuer adipiscing elit, sed diam
nonummy nibh euismod tincidunt ut
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
            details="consectetuer adipiscing elit, sed diam
nonummy nibh euismod tincidunt ut
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
            details="consectetuer adipiscing elit, sed diam
nonummy nibh euismod tincidunt ut
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
            details="consectetuer adipiscing elit, sed diam
nonummy nibh euismod tincidunt ut
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
            details="consectetuer adipiscing elit, sed diam
nonummy nibh euismod tincidunt ut
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
            details="consectetuer adipiscing elit, sed diam
nonummy nibh euismod tincidunt ut
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
            details="consectetuer adipiscing elit, sed diam
nonummy nibh euismod tincidunt ut
 magna aliquam erat
volutpat. Ut wisi enim ad minim
vfacilisis at verosi.
Lorem ipsum dolor sit amet, cons
ectetuer adipiscing elit, sed diam
nonummy nibh euismod tincidunt ut
 "
            link="www.google.com"
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
