import Image from "next/image";
import img1 from "../../../public/assets/images/home3-process1-3.jpg";
import img2 from "../../../public/assets/images/home3-process2-3.jpg";
import img3 from "../../../public/assets/images/home3-process3-3.jpg";
import img4 from "../../../public/assets/images/home3-process4-3.jpg";

const DataWeOffer = [
  {
    id: 1,
    image: img1,
    heading: "Staff/Resource Augmentation",
    bg: "#d83030",
    discription:
      "Our opinion is that the skills on your team should correspond to the assignments. To assist businesses in locating the ideal talent for their project, we developed a workforce augmentation model.",
  },
  {
    id: 2,
    image: img2,
    bg: "#f3a712",
    heading: "Product Development",
    discription:
      "We’re Red Fire Ai, a group of IT professionals. And we’re here to assist you in starting from scratch with your product. From conception to implementation",
  },
  {
    id: 3,
    image: img3,
    bg: "#52bf85",

    heading: "Dedicated Development Team",
    discription:
      "Our web development team is Highly skilled and committed to providing clients with excellent web development services to our domestic and international clients.",
  },
  {
    id: 4,
    image: img4,
    heading: "Execution to Handover",
    bg: "#235789",
    discription:
      "Red Fire AI uses its team of highly qualified developers to carry out your work. We verify that the finished product meets our clients’ expectations before final handover.",
  },
];

function WorkFlow() {
  return (
    <div className=" bg-[#FFF3F3]  px-4 py-20 max-lg:py-10 flex content-center flex-col items-center justify-center">
      <div className="ml-auto mr-auto max-w-[1140px] flex flex-col justify-center items-center">
        <div className=" w-full">
          <div className=" flex justify-center items-center  mb-4">
            <h1 className=" text-[#d83030] text-lg font-semibold text-center ">
              Our Project Work Flow
            </h1>
            <span className="line ml-4"></span>
          </div>
          <p className=" text-5xl  max-lg:text-4xl  max-md::text-3xl max-sm:text-xl text-center mb-4 text-[#032e42] font-bold w-3/4 m-auto max-lg:w-full">
            Our Engagement Model
          </p>
          <p className=" text-center w-full px-10 max-lg:px-2">
            Red Fire AI has the solution to every IT related problem of yours.
            Red Fire Ai has been tackling the most challenging IT issues in the
            world. We pledge to devote specific resources to your projects, and
            our experienced developers will provide top-notch support. We
            utilize our expertise for your benefits and provide you and your
            business the finest{" "}
            <span className=" font-semibold"> web development</span> , software
            development, mobile application development,
            <span className=" font-semibold">AI and ML services </span> ,
            digital marketing and QA services.
          </p>
        </div>
        <div className=" bg-white my-10">
          <div className=" grid lg:grid-cols-4 gap-5 md:grid-cols-3 sm:grid-cols-2 justify-center h-auto py-6 ">
            {DataWeOffer.map((data, index) => (
              <>
                <div
                  className=" flex flex-col jus max-sm:flex-col w-full items-center p-10 max-lg:p-5 max-lg:py-0 "
                  key={index}
                >
                  <div
                    className={`${
                      data.id == 2
                        ? "shadow-xl w-[233px] h-[233px]"
                        : "w-[182px] "
                    }  mr-4 max-sm:mb-5 relative border-dashed mb-5  rounded-full p-[6px] border-[#e6e6e6] border-[3px]`}
                  >
                    <span className="">
                      <Image
                        src={data.image}
                        alt="Image"
                        className=" rounded-full"
                        width={233}
                        height={223}
                      />
                      <span
                        className={` text-white w-[44px] h-[44px] absolute -right-2 top-4 text-center pt-[12px] text-[14px] font-bold  rounded-full }`}
                        style={{ background: data.bg }}
                      >
                        {"0"}
                        {data.id}
                      </span>
                    </span>
                  </div>
                  <div>
                    <h1 className=" text-xl font-bold mt-0 text-center mb-2">
                      {data.heading}
                    </h1>
                    <p className=" text-[15px] mb-4 text-black text-center">
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

export default WorkFlow;
