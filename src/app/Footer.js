import { library } from "@fortawesome/fontawesome-svg-core";
import footer from "../../public/assets/icons/Footer.png";
import Image from "next/image";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhoneVolume,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
library.add(
  faFacebook,
  faInstagram,
  faLinkedin,
  faEnvelope,
  faPhoneVolume,
  faMapMarkerAlt
);
function Footer() {
  return (
    <>
      <div className=" bg-[#252628] text-white w-full">
        <div className=" grid lg:grid-cols-5 md:grid-cols-2  justify-center gap-3 py-10 px-5">
          <div className=" pt-3 pl-5 max-lg:p-5 flex flex-col items-center">
            <Link href={"/"}>
              <Image src={footer} alt="Image" width={200} height={60} />
            </Link>
            <p className=" mt-8 text-base text-center">
              RedFireAi is not just a worldwide recognized IT firm, but also a
              family of skilled specialists that provide unique solutions to
              global brands, companies, mid-size organizations, and even
              startups with top-notch innovative solutions.
            </p>
            <div className=" w-full flex items-center justify-center mt-8">
              <a href="https://www.facebook.com/redfireaitech" target="_blank">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className=" p-3 mx-1 cursor-pointer hover:opacity-60 rounded-full text-3xl bg-[#3b5998]"
                />
              </a>
              <a href="https://www.instagram.com/redfireai/" target="_blank">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className=" p-3 mx-1 cursor-pointer hover:opacity-60 rounded-full text-3xl bg-[#ff6459]"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/red-fire-ai-pvt-ltd/mycompany/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className=" p-3 mx-1 cursor-pointer hover:opacity-60 rounded-full text-3xl bg-[#0077b5]"
                />
              </a>
            </div>
          </div>
          <div className=" pt-3 pl-5 max-lg:p-5">
            <h1 className=" text-xl font-extrabold">Company</h1>
            <ul className=" text-[#676767] footer-links ml-1">
              <li>
                <Link href={"about-us"}>About Us</Link>
              </li>
              <li>We Work With</li>
              <li>
                <Link href={"services"}>Services</Link>
              </li>
              <li>Sitemap</li>
              <li>
                <Link href={"contact-us"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className=" pt-3 pl-5 max-lg:p-5">
            <h1 className=" text-xl font-extrabold">Our Services</h1>
            <ul className=" text-[#676767] footer-links ml-1">
              <li>Android App Development </li>
              <li>AngularJS Development</li>
              <li>Augmented Reality</li>
              <li>AWS Development</li>
              <li>BigCommerce</li>
              <li>Quality Assurance Services</li>
              <li>IoT Development</li>
              <li>Cross-platform Apps</li>
              <li>.Net Development</li>
              <li>Software Development </li>
              <li>DynamoDB Development</li>
              <li>Firebase Development</li>
              <li>Google Cloud </li>
              <li>iOS App Development</li>
              <li>Java Development</li>
              <li>Joomla Development</li>
              <li>Laravel Development</li>
              <li>Magento Development</li>
            </ul>
          </div>
          <div className=" pt-3 pl-5 max-lg:p-5">
            <ul className=" text-[#676767] footer-links ml-1 mt-9">
              <li>MongoDB Development </li>
              <li>MySQL App Development</li>
              <li>NodeJS Development</li>
              <li>OpenCart Development</li>
              <li>Oracle Development</li>
              <li>OsCommerce</li>
              <li>PHP Development</li>
              <li>PWA Development</li>
              <li>Python Development</li>
              <li>React Native</li>
              <li>ReactJS Development</li>
              <li>Redis Development</li>
              <li>AI & ML Development</li>
              <li>Shopify Development</li>
              <li>VueJS Development</li>
              <li>WooCommerce</li>
              <li>WordPress Development</li>
              <li>React JS Develpment</li>
            </ul>
          </div>
          <div className=" pt-3 pl-5 max-lg:p-5">
            <h1 className=" text-xl font-extrabold">Hire Developer Team</h1>
            <ul className=" text-[#676767] footer-links ml-1">
              <li>ReactJS Developers</li>
              <li>NodeJS Web Developers</li>
              <li>VueJS Developers</li>
              <li>AngularJS Developers</li>
              <li>PHP Developers</li>
              <li>Magento Developers</li>
              <li>WordPress Developers</li>
              <li>Android App Developers</li>
              <li>iOS App Developers</li>
              <li>Flutter App Developers</li>
              <li>React Native App Developers</li>
              <li>Python Developers</li>
              <li>Java Developers</li>
              <li>ASP.NET Developers</li>
              <li>HTML5 Developers</li>
              <li>Shopify Developers</li>
              <li>AI & ML Developers</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" bg-[#252628] shadow-lg shadow-slate-200 text-white">
        <div className=" grid lg:grid-cols-3 md:grid-cols-3   max-w-[1140px] mr-auto ml-auto ">
          <div className=" flex items-center px-5 py-4 bg-black">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{
                background: "rgba(255,255,255,0.05)",
                padding: "12px 15px",
                borderRadius: "999px",
                fontSize: "25px",
              }}
              color="white"
            />
            <div className=" pl-3">
              <a
                href="mailto:info@redfireai.com"
                className=" text-base max-sm:text-sm"
              >
                info@redfireai.com
              </a>
              <p className=" opacity-60 max-sm:text-sm">Drop Us a Line</p>
            </div>
          </div>
          <div className=" flex items-center px-5 py-4 bg-[#d83030]">
            <FontAwesomeIcon
              icon={faPhoneVolume}
              style={{
                background: "rgba(255,255,255,0.05)",
                padding: "12px 15px",
                borderRadius: "999px",
                fontSize: "25px",
              }}
              color="white"
            />
            <div className=" pl-3">
              <span className=" font-semibold text-base ">
                <a href="tel:+923266116118" className="max-sm:text-sm">
                  +92 (326) 6116118
                </a>
              </span>
              <p className=" opacity-60 max-sm:text-sm">Call Us Now</p>
            </div>
          </div>
          <div className=" flex items-center px-5 py-4 bg-black">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              style={{
                background: "rgba(255,255,255,0.05)",
                padding: "12px 15px",
                borderRadius: "999px",
                fontSize: "25px",
              }}
              color="white"
            />
            <div className=" pl-3">
              <h1 className=" font-semibold text-base max-sm:text-sm ">
                Jeff Heights, Lahore, Pakistan
              </h1>
              <p className=" opacity-60 max-sm:text-sm">Get Direction</p>
            </div>
          </div>
        </div>
        <div className=" w-full py-5">
          <h1 className=" opacity-60 text-center text-base max-sm:text-xs">
            Copyright 2022 Red Fire AI All rights reserved.
          </h1>
        </div>
      </div>
    </>
  );
}

export default Footer;
