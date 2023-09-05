import Image from "next/image";
import React from "react";
import i1 from "../../../public/assets/images/icon-pay-per-click-3.png";
import i2 from "../../../public/assets/images/icon-artist2-3.png";
import i3 from "../../../public/assets/images/icon-process2-3.png";
import i4 from "../../../public/assets/images/icon-stats-3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function ServicesAndExperience() {
  return (
    <div>
      <div className=" mb-8 max-lg:my-8">
        <div className=" flex items-center  mb-4">
          <h1 className=" text-[#d83030] text-lg font-semibold ">
            Services and Experience
          </h1>
          <span className="line ml-4"></span>
        </div>
        <p className=" text-4xl  max-lg:text-3xl  max-md::text-2xl max-sm:text-xl mb-3 text-[#032e42] font-bold m-auto max-lg:w-full">
          Why Choose Us
        </p>
      </div>
      <div className=" grid w-full h-full lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1  gap-0">
        <div className=" w-full">
          <div className=" bg-[#d83030] w-full text-white pt-[50px] px-[40px] pb-[30px]">
            <div className=" icon-pre p-2 mb-2 rounded-full w-fit ">
              <Image
                src={i1}
                alt="Image"
                width={74}
                height={74}
                className=" bg-transparent"
              />
            </div>
            <h1 className=" font-semibold text-[22px] mb-4">
              Website Designing
            </h1>
            <p>
              Every business needs to be online. Stand out from the competition
              and make your brand look its best with stunning web page design.
            </p>
          </div>
          <div className=" bg-[#f3a712] w-full text-white pt-[50px] px-[40px] pb-[30px]">
            <div className=" icon-pre p-2 mb-2 rounded-full w-fit ">
              <Image
                src={i2}
                alt="Image"
                width={74}
                height={74}
                className=" bg-transparent"
              />
            </div>
            <h1 className=" font-semibold text-[22px] mb-4">Web Development</h1>
            <p>
              Web development services help create all types of web-based
              software and ensure a great experience for the web. you will get
              effective web page designs.
            </p>
          </div>
        </div>
        <div className=" bg-[#202020] text-white p-5">
          <div className=" text-center border-dashed border-[1px]  h-full p-10 max-lg:p-0 max-lg:border-none max-md:border-dashed max-md:p-5">
            <h1 className=" text-4xl font-bold  mb-5">25+ Years Experience</h1>
            <p className=" text-[#bbbbbb] text-[15px] leading-7">
              RedFireAi is not just a worldwide recognized IT firm, but also a
              family of skilled specialists that provide unique solutions
            </p>
            <div className=" border-[#d83030] hover:bg-[#d83030] transition-colors border-[2px] mx-auto my-10 rounded-xl cursor-pointer w-fit px-5 py-2 ">
              Get Free Qoute
            </div>
            <div className=" mx-auto">
              <div className=" flex items-center my-5">
                <FontAwesomeIcon
                  icon={faCheck}
                  color="#d83030"
                  className=" font-extrabold text-xl"
                />
                <p className=" ml-3 text-[#bbbbbb]">Creative development</p>
              </div>
              <div className=" flex items-center my-5">
                <FontAwesomeIcon
                  icon={faCheck}
                  color="#d83030"
                  className=" font-extrabold text-xl"
                />
                <p className=" ml-3 text-[#bbbbbb]">Competitor research</p>
              </div>
              <div className=" flex items-center my-5">
                <FontAwesomeIcon
                  icon={faCheck}
                  color="#d83030"
                  className=" font-extrabold text-xl"
                />
                <p className=" ml-3 text-[#bbbbbb]">World-class web design</p>
              </div>
              <div className=" flex items-center my-5">
                <FontAwesomeIcon
                  icon={faCheck}
                  color="#d83030"
                  className=" font-extrabold text-xl"
                />
                <p className=" ml-3 text-[#bbbbbb]">Optimize operations</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full h-full">
          <div className=" bg-[#f3a712] h-auto w-full text-white pt-[50px] px-[40px] pb-[30px]">
            <div className=" icon-pre p-2 mb-2 rounded-full w-fit ">
              <Image
                src={i3}
                alt="Image"
                width={74}
                height={74}
                className=" bg-transparent"
              />
            </div>
            <h1 className=" font-semibold text-[22px] mb-4">
              Digital Marketing
            </h1>
            <p>
              Pakistan’s leading social media marketing company. We’ll help you
              drive more traffic, boost conversions, and increase sales for your
              Small Business
            </p>
          </div>
          <div className=" bg-[#d83030] w-full h-auto text-white pt-[50px] px-[40px] pb-[30px]">
            <div className=" icon-pre p-2 mb-2 rounded-full w-fit ">
              <Image
                src={i4}
                alt="Image"
                width={74}
                height={74}
                className=" bg-transparent"
              />
            </div>
            <h1 className=" font-semibold text-[22px] mb-4">
              Stock Photography
            </h1>
            <p>
              Envato Elements. Envato Elements is an unlimited subscription
              service catering to the digital needs of agencies, and marketers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesAndExperience;
