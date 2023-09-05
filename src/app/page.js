import React from "react";
import Carousel from "../components/HomePage/Carousel";
import OurPremiumServices from "../components/HomePage/OurPremiumServices";
import AboutCompany from "../components/HomePage/AboutCompany";
import WorkFlow from "../components/HomePage/WorkFlow";
import OurProjects from "../components/HomePage/OurProjects";
import WhyChooseUs from "../components/HomePage/WhyChooseUs";

function HomePage() {
  return (
    <div>
      <Carousel />
      <OurPremiumServices />
      <AboutCompany />
      <WorkFlow />
      <OurProjects />
      <WhyChooseUs />
    </div>
  );
}

export default HomePage;
