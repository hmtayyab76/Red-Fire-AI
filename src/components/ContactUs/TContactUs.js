"use client";
import Link from "next/link";
import React from "react";
import { Fade } from "react-reveal";
function TcontactUs() {
  return (
    <div>
      <Fade>
        <div className=" h-[500px] max-md:h-[400px] max-sm:h-[300px] bg-no-repeat bg-cover bg-center object-contain w-full bg-contact-us flex justify-center items-center ">
          <div>
            <h1 className=" text-[55px] max-sm:text-3xl text-center text-white font-bold">
              Contact Us
            </h1>
            <div className="text-white justify-center font-semibold flex ">
              <Link href={"/"} className=" hover:text-[#032e42]">
                Home
              </Link>
              <span className=" mx-2">{">"}</span>
              <Link href={"/contact-us"} className=" hover:text-[#032e42]">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default TcontactUs;
