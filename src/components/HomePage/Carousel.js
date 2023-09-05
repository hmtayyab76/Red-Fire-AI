"use client";
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../public/assets/images/banner-3-min.webp";
import img2 from "../../../public/assets/images/banner-5-min.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-reveal";
import Link from "next/link";
const Carousel = () => {
  const [slider, setSlider] = useState(null);
  const sliderRef = useRef(null);

  const data = [
    {
      image: img1,
      title: "Make Your Dreams Comes True",
      subtitle: "Grow with Red Fire AI",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis maxime, reprehenderit ratione adipisci totam, earum explicabo quaerat accusantium repudiandae cumque nisi nulla! Autem laborum est porro at aliquam nostrum provident?",
      button: "About Us",
      locate: "/about-us",
    },
    {
      image: img2,
      title: "Let Us Know What You're Looking",
      subtitle: "for , We 'll Build it For you",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis maxime, reprehenderit ratione adipisci totam, earum explicabo quaerat accusantium repudiandae cumque nisi nulla! Autem laborum est porro at aliquam nostrum provident?",
      button: "Our Services",

      locate: "/services",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const handleSliderRef = (slider) => {
    setSlider(slider);
  };

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className=" w-full overflow-x-hidden ">
      <Fade>
        <Slider ref={(slider) => (sliderRef.current = slider)} {...settings}>
          {data.map((item, index) => (
            <div key={index}>
              <div
                className="relative bg-no-repeat bg-cover bg-center object-contain"
                style={{ backgroundImage: `url(${item.image.src})` }}
              >
                <div className="mr-auto ml-auto py-48 pl-28 max-lg:px-20 max-lg:py-28 max-md:py-20 max-md:px-10 max-sm:py-10 ">
                  <Fade top>
                    <h1 className="text-[#cf2e2e] font-bold text-5xl max-sm:text-xl">
                      {item.title}
                    </h1>
                  </Fade>
                  <Fade bottom>
                    <h1
                      className={`text-[#ca5b5b] font-semibold text-4xl max-sm:text-lg mt-3 ${
                        index == 1 ? "text-[#f35858]" : ""
                      }`}
                    >
                      {item.subtitle}
                    </h1>
                    <p
                      className={` ${
                        index == 1 ? "text-white" : ""
                      } w-1/2 font-medium text-lg my-4 max-lg:w-full max-md:text-base max-sm:text-xs`}
                    >
                      {item.description}
                    </p>
                  </Fade>
                  <Fade bottom>
                    <div className=" z-50">
                      <Link href={item.locate}>
                        <div className="w-fit bg-black hover:bg-[#d83030] hover:text-white transition text-white text-lg font-[500] px-5 py-2 max-sm:px-3 max-sm:py-1 max-sm:text-sm cursor-pointer">
                          {item.button}
                        </div>
                      </Link>
                    </div>
                  </Fade>
                </div>

                <button
                  className="bg-black absolute top-[50%] opacity-60 hover:opacity-100 flex justify-center items-center left-10 max-lg:left-5 text-white w-[35px] h-[35px]  rounded-full focus:outline-none"
                  onClick={goToPrevSlide}
                >
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    style={{ fontSize: "20px" }}
                  />
                </button>
                <button
                  className="bg-black absolute top-[50%] opacity-60 hover:opacity-100 flex justify-center items-center right-10 max-lg:right-5 text-white w-[35px] h-[35px]  rounded-full focus:outline-none"
                  onClick={goToNextSlide}
                >
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{ fontSize: "20px" }}
                  />
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </Fade>
    </div>
  );
};

export default Carousel;
