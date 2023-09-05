"use client";
import {
  faArrowAltCircleRight,
  faArrowRight,
  faCalendarTimes,
  faLocationArrow,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const JobData = [
  {
    position: "Project Manager",
    stack: "Full Stack",
    time: "Full Time",
    location: "Lahore",
    Details: "",
  },
  {
    position: "UI UX Designer",
    stack: "Graphic Designer",
    time: "Full Time",
    location: "Lahore",
    Details: "",
  },
  {
    position: "Senior Graphic Designer",
    stack: "Graphic Designer",
    time: "Full Time",
    location: "Lahore",
    Details: "",
  },
  {
    position: "ReactJS Developer",
    stack: "Front End",
    time: "Full Time",
    location: "Lahore",
    Details: "",
  },
  {
    position: "PHP Developer",
    stack: "Full Stack",
    time: "Hybrid",
    location: "Lahore",
    Details: "",
  },
  {
    position: "iOS App Developers",
    stack: "Full Stack",
    time: "Full Time",
    location: "Lahore",
    Details: "",
  },
  {
    position: "ASP.NET Developers",
    stack: "Full Stack",
    time: "Hybrid",
    location: "Lahore",
    Details: "",
  },
  {
    position: "Senior Angular Developer",
    stack: "Front End",
    time: "Part Time",
    location: "Lahore",
    Details: "",
  },
  {
    position: "Java Developer",
    stack: "Back End",
    time: "Hybrid",
    location: "Lahore",
    Details: "",
  },
  {
    position: "React Native App Developer",
    stack: "Full Stack",
    time: "Part Time",
    location: "Lahore",
    Details: "",
  },
];

function Jobs() {
  const [selectedJobCategory, setSelectedJobCategory] =
    useState("All Job Category");
  const [selectedJobType, setSelectedJobType] = useState("All Job Types");
  const [selectedJobLocation, setSelectedJobLocation] =
    useState("All Job Location");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredJobs = JobData.filter(
    (job) =>
      (selectedJobCategory === "All Job Category" ||
        job.stack === selectedJobCategory) &&
      (selectedJobType === "All Job Types" || job.time === selectedJobType) &&
      (selectedJobLocation === "All Job Location" ||
        job.location === selectedJobLocation) &&
      (searchQuery === "" ||
        job.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.stack.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="max-w-[1140px] mr-auto ml-auto py-20 max-lg:py-10">
      <div className=" mx-5 flex">
        <div className=" relative border-[1px] w-fit border-[#B3B3B3] hover:border-[#000] rounded-lg px-3 ">
          <input
            name="subject"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            className="placeholder-[#A3A3A3] outline-none  py-3"
          />
          <label>
            <FontAwesomeIcon icon={faSearch} color="#B3B3B3" />
          </label>
        </div>

        <select
          value={selectedJobCategory}
          onChange={(e) => setSelectedJobCategory(e.target.value)}
          className="flex items-center mx-5 border-[#B3B3B3] border-[1px] text-sm rounded-lg p-3 bg-white outline-none focus:border-[#2a2626]"
        >
          <option value="All Job Category">All Job Category</option>
          <option value="Full Stack">Full Stack</option>
          <option value="Front End">Front End</option>
          <option value="Back End">Back End</option>
          <option value="Graphic Designer">Graphic Designer</option>
        </select>
        <select
          value={selectedJobType}
          onChange={(e) => setSelectedJobType(e.target.value)}
          className="flex items-center mr-5 border-[#B3B3B3] border-[1px] text-sm rounded-lg p-3 bg-white outline-none focus:border-[#2a2626]"
        >
          <option value="All Job Types">All Job Types</option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Hybrid">Hybrid</option>
        </select>
        <select
          value={selectedJobLocation}
          onChange={(e) => setSelectedJobLocation(e.target.value)}
          className="flex items-center mr-5 border-[#B3B3B3] border-[1px] text-sm rounded-lg p-3 bg-white outline-none  focus:border-[#2a2626]"
        >
          <option value="All Job Location">All Job Location</option>
          <option value="Lahore">Lahore</option>
          <option value="Pakistan">Pakistan</option>
        </select>
      </div>

      <div className=" grid mx-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-10 my-10 ">
        {filteredJobs.map((data, index) => (
          <div key={index}>
            <div className=" border p-8 cursor-pointer career-shadow">
              <h1 className=" font-bold text-base">{data.position}</h1>
              <div className=" mt-5 text-sm font-normal">
                <div className=" flex items-center my-2">
                  <FontAwesomeIcon icon={faArrowAltCircleRight} />
                  <p className=" ml-2">{data.stack}</p>
                </div>
                <div className=" flex items-center my-2">
                  <FontAwesomeIcon icon={faCalendarTimes} />
                  <p className=" ml-2">{data.time}</p>
                </div>
                <div className=" flex items-center my-2">
                  <FontAwesomeIcon icon={faLocationArrow} />
                  <p className=" ml-2">{data.location}</p>
                </div>
                <div className=" flex items-center mt-4 md">
                  <p className=" mr-2">More Details</p>
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;
