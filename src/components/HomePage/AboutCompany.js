import Image from "next/image";
import React from "react";
import about_image from "../../../public/assets/images/Body-Image.png";
import Link from "next/link";
function AboutCompany() {
  return (
    <div className=" px-5 py-20 max-lg:py-10">
      <div className="max-w-[1140px] mr-auto ml-auto">
        <div className=" grid lg:grid-cols-2 justify-center items-center wf">
          <div className=" w-full flex justify-center px-2 ">
            <Image src={about_image} alt="" width={707} height={616} />
          </div>
          <div>
            <div className=" mb-8 max-lg:my-8">
              <div className=" flex justify-center items-center  mb-4">
                <h1 className=" text-[#d83030] text-lg font-semibold text-center ">
                  About Our Company
                </h1>
                <span className="line ml-4"></span>
              </div>
              <p className=" text-5xl  max-lg:text-4xl  max-md::text-3xl max-sm:text-xl text-center mb-3 text-[#032e42] font-bold m-auto max-lg:w-full">
                Grow and Fulfill Your Dream With Red Fire Ai
              </p>
            </div>
            <div>
              <p>
                Red Fire Ai provides a wide range of goods and services to help
                businesses increase the efficiency and effectiveness of their
                operations. We are the ideal option if you’re looking for
                cost-effective, business ready solutions to support the
                operation of your business. We promise to go beyond our quest
                for the benefit and satisfaction of our customers all across
                USA, UAE and Pakistan. We offer digital solutions to your
                problems and are efficient in our work and skills.
              </p>
              <p className=" text-3xl  max-lg:text-2xl mt-10 mb-8 max-md::text-xl max-sm:text-xl text-[#032e42] font-bold m-auto max-lg:w-full">
                What we Stand out?
              </p>
              <p>
                We’ll put your company on the map. We have the resources,
                mastery, and experience to support your success in the cutthroat
                market of today. Our software development skills are among the
                top in the industry and we are experts at offering their
                customers high-quality services. In addition to database
                management and social media management, we also offer web
                development, software development, mobile application
                development, and mobile web design. Red Fire Ai offers
                everything you need that can help you automate your business. We
                strive for success. Red Fire AI is becoming a leading IT company
                and is looking forward to more success ahead.
              </p>
            </div>
            <Link href={"/about-us"}>
              <div className="about-btn w-fit px-5 py-2 mt-8 cursor-pointer hover:bg-[#d83030] max-lg:m-auto max-lg:mt-5 hover:text-white">
                <span className="">More About Us</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCompany;
