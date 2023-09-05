import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMap,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

function ContactForm() {
  return (
    <div>
      <div className="max-w-[1140px] mr-auto ml-auto py-20 px-5">
        <div className=" grid lg:grid-cols-3 justify-center gap-5">
          <div className="col-span-2 b-shadow-get bg-white p-12 max-sm:p-4 rounded-2xl">
            <div className=" flex justify-center items-center  mb-4">
              <span className="line mr-4"></span>
              <h1 className=" text-[#d83030] text-lg font-semibold text-center ">
                Write Message
              </h1>
              <span className="line ml-4"></span>
            </div>
            <p className=" text-5xl  max-lg:text-4xl  max-md::text-3xl max-sm:text-xl text-center mb-4 text-[#032e42] font-bold w-3/4 m-auto max-lg:w-full">
              Get in Touch
            </p>
            <form>
              <div className=" text-[#363636]  w-full mt-5 max-md:flex-col">
                <div className=" grid gap-5 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className="bg-[#F4F4F4] border-none placeholder-[#A3A3A3] placeholder:font-bold outline-[#B3B3B3] rounded-lg my-2 px-5 py-4"
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email ID"
                    className="bg-[#F4F4F4] border-none placeholder-[#A3A3A3] placeholder:font-bold outline-[#B3B3B3] rounded-lg my-2 px-5 py-4"
                  />
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone No."
                    className="bg-[#F4F4F4] border-none  placeholder-[#A3A3A3] placeholder:font-bold outline-[#B3B3B3] rounded-lg my-2 px-5 py-4"
                  />
                  <input
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    className="bg-[#F4F4F4] border-none placeholder-[#A3A3A3] placeholder:font-bold outline-[#B3B3B3] rounded-lg my-2 px-5 py-4"
                  />
                  <textarea
                    name="message"
                    placeholder="Message"
                    className="bg-[#F4F4F4] lg:col-span-2 md:col-span-2 border-none placeholder-[#A3A3A3] placeholder:font-bold outline-[#B3B3B3] rounded-2xl p-5 h-40 w-full"
                  />
                  <button
                    type="submit"
                    className=" rounded-sm lg:col-span-2 md:col-span-2 w-fit mt-4 py-3 px-4  font-semibold  bg-[#d83030] text-white hover:bg-[#252628]  "
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className=" col-span-1 w-full  b-shadow-get bg-white rounded-2xl">
            <div className="text-2xl w-full py-4 px-3 text-center bg-[#D83030] rounded-t-2xl font-semibold text-white">
              Contact Info
            </div>
            <div>
              <div className="flex items-center border-b-2 p-6 ">
                <div className="  shadow-icon-contact p-4 rounded-full  justify-center flex items-center ">
                  <FontAwesomeIcon
                    icon={faMap}
                    color="#F31212"
                    className=" text-xl max-md:text-3xl overflow-hidden"
                  />
                </div>
                <div className=" ml-4">
                  <p className=" font-bold text-[15px]">Our Location​</p>
                  <p className=" text-[15px] mt-2 ">
                    Office # 514, Floor A1, Jeff Heights, Lahore, Pakistan
                  </p>
                </div>
              </div>
              <a href="tel:+923266116118">
                <div className="flex items-center border-b-2 p-6 ">
                  <div className="  shadow-icon-contact p-4 rounded-full  justify-center flex items-center ">
                    <FontAwesomeIcon
                      icon={faPhoneVolume}
                      color="#F31212"
                      className=" text-xl max-md:text-3xl overflow-hidden"
                    />
                  </div>
                  <div className=" ml-4 hover:text-red-600">
                    <p className=" font-bold text-[15px]">Phone Number​</p>
                    <p className=" text-[15px] mt-2 ">+92 (326) 6116118</p>
                  </div>
                </div>
              </a>
              <a href="mailto:info@redfireai.com">
                <div className="flex items-center border-b-2 p-6 ">
                  <div className="  shadow-icon-contact p-4 rounded-full  justify-center flex items-center ">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      color="#F31212"
                      className=" text-xl max-md:text-3xl overflow-hidden"
                    />
                  </div>
                  <div className=" ml-4 hover:text-red-600">
                    <p className=" font-bold text-[15px]">Email Address</p>
                    <p className=" text-[15px] mt-2 ">info@redfireai.com</p>
                  </div>
                </div>
              </a>
              <div className=" w-full flex items-center justify-center text-white my-10">
                <a
                  href="https://www.facebook.com/redfireaitech"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className=" p-[10px] mx-1 cursor-pointer hover:opacity-60 rounded-full text-2xl bg-[#3b5998]"
                  />
                </a>
                <a href="https://www.instagram.com/redfireai/" target="_blank">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className=" p-[10px] mx-1 cursor-pointer hover:opacity-60 rounded-full text-2xl bg-[#ff6459]"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/red-fire-ai-pvt-ltd/mycompany/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className=" p-[10px] mx-1 cursor-pointer hover:opacity-60 rounded-full text-2xl bg-[#0077b5]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
