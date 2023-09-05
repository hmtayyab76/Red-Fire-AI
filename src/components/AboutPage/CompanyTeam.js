import Image from "next/image";
import React from "react";
import CEO from "../../../public/assets/images/WhatsApp-Image-2022-11-25-at-4.46.33-PM-removebg-preview.jpg";
function CompanyTeam() {
  return (
    <div>
      <div className="px-5">
        <div className="max-w-[1140px] mr-auto ml-auto">
          <div className=" grid lg:grid-cols-3 gap-10 mt-20 max-lg:mt-10 ">
            <div className=" text-[#676767]">
              <div className=" my-8 max-lg:my-8 col-span-1">
                <div className=" flex items-center  mb-4">
                  <h1 className=" text-[#d83030] text-lg font-semibold ">
                    Message From CEO
                  </h1>
                  <span className="line ml-4"></span>
                </div>
                <p className=" text-4xl  max-lg:text-3xl  max-md::text-2xl max-sm:text-xl mb-3 text-[#032e42] font-bold m-auto max-lg:w-full">
                  To Our Customers
                </p>
              </div>

              <p>
                Loyalty is an incredible asset – and increasing customer loyalty
                should be a prime focus for every business. One of our most
                important company assets is our reputation for ethical behavior,
                honesty and fair dealing.
              </p>
              <p className=" text-lg font-semibold text-center m-5 text-[#d83030] ">
                <span className=" text-4xl">{'"'}</span> Nothing is Impossible,
                the word itself says I{"'"}m possible{" "}
                <span className=" text-4xl">{'"'}</span>
              </p>
              <p className=" my-3 font-bold text-lg ">Muhammad Usman</p>
              <p className=" font-semibold text-base">
                Chairman and Chief Executive Officer
              </p>
              <p className=" font-semibold text-sm">Red Fire AI</p>
            </div>
            <div className=" w-full flex justify-center px-2 col-span-2 ">
              <Image
                src={CEO}
                alt=""
                className=" max-w-full w-[600px] h-[500px] "
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-about-us-2 my-12 px-5">
        <div className="py-10">
          <div className="max-w-[1140px] mr-auto ml-auto">
            <div className=" grid lg:grid-cols-2  items-center">
              <div className=" my-8 max-lg:my-8 col-span-1">
                <div className=" flex items-center  mb-4">
                  <h1 className=" text-[#d83030] text-xl font-semibold ">
                    Our Team Members
                  </h1>
                  <span className="line ml-4"></span>
                </div>
                <p className=" text-4xl  max-lg:text-3xl  max-md::text-2xl max-sm:text-xl mb-3 text-[#032e42] font-bold m-auto max-lg:w-full">
                  Our Creative Team
                </p>
              </div>
              <div>
                <p className=" text-lg">
                  Our Creative team work closely with cross-disciplinary teams
                  in marketing operations, data and technology to connect
                  ambitious business targets with innovative digital creative
                  strategies, concepts and quality visuals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1140px] mr-auto ml-auto  mb-20 px-5">
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 justify-center gap-10 items-center">
          <div className=" bg-white w-fit shadow-2xl">
            <Image src={CEO} alt="Image" />
            <div className=" py-2 px-5">
              <p className=" font-bold mt-3">Numan Rasheed</p>
              <p className=" font-semibold text-[#676767] text-[13px]">
                Co Founder
              </p>
            </div>
          </div>
          <div className=" bg-white w-fit shadow-2xl">
            <Image src={CEO} alt="Image" />
            <div className=" py-2 px-5">
              <p className=" font-bold mt-3">Hafiz Muhammad Tayyab</p>
              <p className=" font-semibold text-[#676767] text-[13px]">
                Co Founder
              </p>
            </div>
          </div>
          <div className=" bg-white w-fit shadow-2xl">
            <Image src={CEO} alt="Image" />
            <div className=" py-2 px-5">
              <p className=" font-bold mt-3">Shafiq Ahmad</p>
              <p className=" font-semibold text-[#676767] text-[13px]">
                Co Founder
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyTeam;
