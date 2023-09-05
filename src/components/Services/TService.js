"use client";
import Link from "next/link";
import { Fade } from "react-reveal";

function TService() {
  return (
    <Fade>
      <div className=" h-[500px] max-md:h-[400px] max-sm:h-[300px] bg-no-repeat bg-cover bg-center object-contain w-full bg-service-banner flex justify-center items-center ">
        <div>
          <h1 className=" text-[55px] max-sm:text-3xl text-center text-white font-bold">
            Services
          </h1>
          <div className="text-white justify-center font-semibold flex ">
            <Link href={"/"} className=" hover:text-[#d83030]">
              Home
            </Link>
            <span className=" mx-2">{">"}</span>
            <Link href={"/services"} className=" hover:text-[#d83030]">
              Services
            </Link>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default TService;
