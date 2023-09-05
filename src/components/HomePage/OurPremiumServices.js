import Image from "next/image";
import React from "react";
import img1 from "../../../public/assets/images/work-tools.png";
import img2 from "../../../public/assets/images/clipboard.png";
import img3 from "../../../public/assets/images/chat.png";

const DataWeOffer = [
  {
    image: img1,
    heading: "Website Design And Development",
    discription:
      "Red Fire AI serves you with the finest web developers who’d help you and your company in each step of web development and design with proficiency. Red Fire AK maintenance services can help you if you want to make sure that your website is always completely secure. For a small monthly fee, we maintain your website’s accuracy, backup, and security.",
  },
  {
    image: img2,
    heading: "Mobile App Development",
    discription:
      "Our android and iOS app developers create excellent small screen applications that can uplift your business. Here at Red fire Ai you can engage the finest application developers for your iOS, android or cross platform application development. Red Fire AI is a top mobile app development company in USA, UAE and Pakistan.",
  },
  {
    image: img3,
    heading: "Software testing Consulting",
    discription:
      "To create software products free of bugs and up to quality standards, software QA testing and advice are required. Red Fire AI offers efficient QA services to our national and international clients. We are testing every software and resolve the issues in software. Consult with us and resolve your issues of software.",
  },
];

function OurPremiumServices() {
  return (
    <div className=" bg-[#FFF3F3] px-5 py-20 max-lg:py-10 flex content-center flex-col items-center justify-center">
      <div className="ml-auto mr-auto max-w-[1140px] flex flex-col justify-center items-center">
        <div className=" w-full">
          <div className=" flex justify-center items-center  mb-4">
            <h1 className=" text-[#d83030] text-lg font-semibold text-center ">
              Our Premium Services
            </h1>
            <span className="line ml-4"></span>
          </div>
          <p className=" text-5xl  max-lg:text-4xl  max-md::text-3xl max-sm:text-xl text-center mb-4 text-[#032e42] font-bold w-3/4 m-auto max-lg:w-full">
            Let Us Know What You’re Looking for, We’ll Build it for{" "}
          </p>
          <p className=" text-center w-full px-5 max-lg:px-2">
            The world is rapidly becoming a digital place and in order to get
            along with this fast evolving world of technology you also need to
            digitalize. With the help of Red Fire Ai, you can automate your
            business processes instantly. With us, you can find a customized
            solution for your company. Small and medium-sized businesses can
            automate their operations with Red Fire Ai skilled team. We provide
            a wide range of goods and services to help businesses enhance the
            effectiveness and efficiency of their operations. Take a look at our
            premium services that we offer all around{" "}
            <span className=" font-semibold">USA, UAE and Pakistan. </span>
          </p>
        </div>
        <div className=" bg-white my-10">
          <div className=" grid lg:grid-cols-3 gap-5 md:grid-cols-2 sm:grid-cols-1 justify-center h-auto py-6 ">
            {DataWeOffer.map((data, index) => (
              <>
                <div
                  className=" flex max-sm:flex-col w-full justify-center max-sm:items-center p-6 max-lg:p-5 max-lg:py-0 "
                  key={index}
                >
                  <div className=" w-[84px] h-[84px] mr-4 infobox-icon-holder max-sm:mb-5">
                    <span>
                      <Image src={data.image} alt="Image" className=" w-full" />
                    </span>
                  </div>
                  <div>
                    <h1 className=" text-xl font-bold mt-0 mb-2">
                      {data.heading}
                    </h1>
                    <p className=" text-[15px] mb-4 to-black">
                      {data.discription}
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurPremiumServices;
