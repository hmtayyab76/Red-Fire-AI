import Image from "next/image";
import React from "react";
import img1 from "../../../public/assets/images/icon-blue-stats-3.png";
import img2 from "../../../public/assets/images/icon-blue-cloud-computing-3.png";
import img3 from "../../../public/assets/images/icon-blue-devices-3.png";
import img4 from "../../../public/assets/images/icon-blue-artist-3.png";
import home from "../../../public/assets/images/home2-pic-circle-3.jpg";

const DataProject = [
  {
    icon: img1,
    prjcount: "1200",
    wprj: "WEBSITES",
  },
  {
    icon: img2,
    prjcount: "120+",
    wprj: "SOFTWARE & QA",
  },
  {
    icon: img3,
    prjcount: "40+",
    wprj: "MOBILE APPS",
  },
  {
    icon: img4,
    prjcount: "20+",
    wprj: "PROJECT MANAGEMENT",
  },
];

function OurProjects() {
  return (
    <div className=" w-full cshadow">
      <div className=" max-w-[1140px] mr-auto ml-auto py-20 max-lg:py-10">
        <div className=" grid lg:grid-cols-2 md:grid-cols-1   gap-5 border-dashed border p-10 max-lg:p-5">
          <div>
            <div>
              <h1 className=" text-[45px] font-bold">Our Projects</h1>
              <p className=" text-base">
                Development of websites, software, mobile applications, QA, AI
                and ML development, projects and social media management are
                among our proficiency
              </p>
            </div>
            <div className=" mt-10 grid lg:grid-cols-2 md:grid-cols-2 items-center justify-center">
              {DataProject.map((data, index) => (
                <>
                  <div className=" flex m-4 items-center" key={index}>
                    <div>
                      <Image src={data.icon} width={51} height={51} alt="" />
                    </div>
                    <div className=" ml-4">
                      <h1 className=" text-4xl font-bold ">{data.prjcount}</h1>
                      <p className=" text-[14px] font-semibold">{data.wprj}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div>
            <Image src={home} alt="Image" className=" rounded-full m-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProjects;
