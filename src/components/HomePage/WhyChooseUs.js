import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrophy,
  faBuilding,
  faProjectDiagram,
  faPersonBooth,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faTrophy, faBuilding, faProjectDiagram, faPersonBooth);

const DataProject = [
  {
    image: faPersonBooth,
    prjcount: "120+",
    wprj: "Happy Customers",
  },
  {
    image: faTrophy,
    prjcount: "10+",
    wprj: "Winning Awards",
  },
  {
    image: faBuilding,
    prjcount: "30+",
    wprj: "Industries Served",
  },
  {
    image: faProjectDiagram,
    prjcount: "500+",
    wprj: "Completed Projects",
  },
];

function WhyChooseUs() {
  return (
    <div className=" bg-[#FFF3F3]  px-5 py-20 max-lg:py-10  flex content-center flex-col items-center justify-center">
      <div className="ml-auto mr-auto max-w-[1140px] flex flex-col justify-center items-center">
        <div className=" w-full">
          <div className=" flex justify-center items-center  mb-4">
            <h1 className=" text-[#d83030] text-lg font-semibold text-center ">
              Why Choose Us
            </h1>
            <span className="line ml-4"></span>
          </div>
          <p className=" text-4xl  max-lg:text-4xl  max-md::text-3xl max-sm:text-2xl text-center mb-4 text-[#032e42] font-bold w-[40%] m-auto max-lg:w-full">
            We are more than just a place to work
          </p>
          <p className=" text-center max-lg:w-full m-auto px-10 max-lg:px-2 w-[60%]">
            Because we focus on results. For us, it’s all about what adds value
            for you and your business. Above all, we want our words to work for
            you.
          </p>
        </div>
        <div className="  my-10">
          <div className=" grid lg:grid-cols-4 gap-10 md:grid-cols-2 sm:grid-cols-2 justify-center h-auto py-6 ">
            {DataProject.map((data, index) => (
              <>
                <div className=" flex m-4" key={index}>
                  <div>
                    <FontAwesomeIcon
                      icon={data.image}
                      color="#d83030"
                      style={{ fontSize: "55px" }}
                    />
                  </div>
                  <div className=" ml-4">
                    <h1 className=" text-5xl max-lg:text-4xl mb-4 font-extrabold text-[#c15353] ">
                      {data.prjcount}
                    </h1>
                    <p className=" text-[17px] font-bold text-[#7e838b]">
                      {data.wprj}
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

export default WhyChooseUs;
