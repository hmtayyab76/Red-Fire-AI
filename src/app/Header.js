"use client";

import { React, useState, useEffect } from "react";
import logo from "../../public/assets/icons/Logo.png";
import Link from "next/link";
import Image from "next/image";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faEnvelope,
  faPhone,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faFacebook, faInstagram, faLinkedin);

const NavLinks = ({ setLinkOpen }) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState();

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (index) => {
    setActiveLink(index);
    setLinkOpen(false);
  };

  return (
    <div className={`text-[17px] font-bold `}>
      <ul
        className={`flex justify-around HL text-[#676767] items-center max-md:fixed overflow-hidden font-medium left-0 max-md:flex-col max-md:shadow-2xl  max-md:h-[100vh] max-md:top-0 max-md:bg-[white] max-md:w-[270px] z-50  max-md:justify-start max-md:items-start `}
      >
        <li className=" max-md:flex py-3 hidden bg-[#d83030] w-full justify-end">
          <FontAwesomeIcon
            icon={faXmark}
            color="black"
            style={{ fontSize: "17px" }}
            className=" mr-5"
            onClick={() => {
              setLinkOpen(false);
            }}
          />
        </li>
        <li
          className={`m-3 max-md:py-3 max-md:px-5 max-md:m-0 max-md:border-b max-md:w-full border-[#e6e6e6]  ${
            activeLink === 1 ? "text-[#d83030]" : ""
          }`}
        >
          <Link href="/">
            <span onClick={() => handleLinkClick(1)}>Home</span>
          </Link>
        </li>
        <li
          className={`m-3 max-md:py-3 max-md:px-5 max-md:m-0 max-md:border-b max-md:w-full border-[#e6e6e6]  ${
            activeLink === 2 ? "text-[#d83030]" : ""
          }`}
        >
          <Link href="/services">
            <span onClick={() => handleLinkClick(2)}>Services</span>
          </Link>
        </li>
        <li
          className={`m-3 max-md:py-3 max-md:px-5 max-md:m-0 max-md:border-b max-md:w-full border-[#e6e6e6]  ${
            activeLink === 3 ? "text-[#d83030]" : ""
          }`}
        >
          <Link href="/about-us">
            <span onClick={() => handleLinkClick(3)}>About Us</span>
          </Link>
        </li>
        <li
          className={`m-3 max-md:py-3 max-md:px-5 max-md:m-0 max-md:border-b max-md:w-full border-[#e6e6e6]  ${
            activeLink === 4 ? "text-[#d83030]" : ""
          }`}
        >
          <Link href="/career">
            <span onClick={() => handleLinkClick(4)}>Career</span>
          </Link>
        </li>
        <li
          className={`m-3 max-md:py-3 max-md:px-5 max-md:m-0 max-md:border-b max-md:w-full border-[#e6e6e6]  ${
            activeLink === 5 ? "text-[#d83030]" : ""
          }`}
        >
          <Link href="/contact-us">
            <span onClick={() => handleLinkClick(5)}>Contact Us</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [linkisOpen, setLinkOpen] = useState(false);

  const handleOpenNav = () => {
    setLinkOpen(!linkisOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full ">
      <div className=" w-full max-md:hidden">
        <div className=" grid lg:grid-cols-3">
          <div className=" bg-[#d83030] z-50 py-4 relative">
            <div className=" c-transform-1 skew-x-[-26deg] transform z-20 max-lg:hidden  bg-[#d83030] right-[-24px] max-lg:right-0"></div>
            <div className="c-transform-2 bg-[#d83030] transform skew-x-[-26deg] max-lg:skew-x-0 max-lg:relative right-[-15px] max-lg:right-0">
              <ul className=" text-white c-transform-3 skew-x-[26deg] bg-transparent z-50 h-full max-lg:skew-x-0   text-sm flex items-center max-lg:justify-center justify-end   ">
                <li className=" mr-5 font-semibold">
                  <a href="tel:+92-326-6116118" className=" hover:opacity-90">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className=" opacity-60 mr-2 mt-1 "
                    />
                    <span>+92-326-6116118</span>
                  </a>
                </li>
                <li className=" mr-5 font-semibold">
                  <a
                    href="mailto:info@redfireai.com"
                    className="hover:opacity-90"
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className=" opacity-60 mr-2 mt-1 "
                    />
                    <span>info@redfireai.com</span>
                  </a>
                </li>
                <li className=""></li>
              </ul>
            </div>
          </div>
          <div className="py-4 w-full bg-[#252628] max-lg:col-span-1 col-span-2">
            <ul className=" text-[#bbbbbb] flex max-lg:justify-center justify-end mr-20 max-lg:mr-0 items-center">
              <li className=" hover:text-white cursor-pointer">
                <span>
                  <span>Mon – Fri: 9:00am – 7:00pm</span>
                </span>
              </li>
              <span className=" bg-[#bbbbbb] w-[2px] h-4 mx-5"></span>
              <li className=" hover:opacity-100 cursor-pointer opacity-60 mx-2">
                <a
                  href="https://www.facebook.com/redfireaitech"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    color="white"
                    style={{ fontSize: "22px" }}
                  />
                </a>
              </li>
              <li className=" hover:opacity-100 cursor-pointer opacity-60 mx-2">
                <a href="https://www.instagram.com/redfireai/" target="_blank">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    color="white"
                    style={{ fontSize: "22px" }}
                  />
                </a>
              </li>
              <li className=" hover:opacity-100 cursor-pointer opacity-60 mx-2">
                <a
                  href="https://www.linkedin.com/company/red-fire-ai-pvt-ltd/mycompany/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    color="white"
                    style={{ fontSize: "22px" }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`w-full min-h-[65px] px-[10%] py-0 flex items-center flex-wrap justify-between  relative z-10 ${
          hasScrolled ? "bg-white shadow-lg" : "bg-g"
        }`}
      >
        <Link href="/">
          <Image src={logo} width={126} alt="Logo" />
        </Link>
        <div className="max-md:hidden">
          <NavLinks setLinkOpen={setLinkOpen} />
        </div>
        <div
          className={`max-md:flex hidden absolute right-10 font-bold `}
          onClick={handleOpenNav}
        >
          {linkisOpen ? (
            <FontAwesomeIcon
              icon={faXmark}
              color="black"
              style={{ fontSize: "17px" }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              color="black"
              style={{ fontSize: "17px" }}
            />
          )}
        </div>

        <div className={` max-md:flex hidden`}>
          {linkisOpen ? <NavLinks setLinkOpen={setLinkOpen} /> : ""}
        </div>
      </div>
    </div>
  );
}

export default Header;
