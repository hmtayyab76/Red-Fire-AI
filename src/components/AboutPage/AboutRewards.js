import Image from "next/image";
import React from "react";
import about_image from "../../../public/assets/images/about-welcome-3.png";
import about_image_1 from "../../../public/assets/images/team-computer.jpg";
import about_image_2 from "../../../public/assets/images/Image-B-1.png";
import about_image_3 from "../../../public/assets/images/Image-C.png";
import about_image_4 from "../../../public/assets/images/Image-1-1536x1025.jpg";

import Link from "next/link";
function AboutRewards() {
  return (
    <>
      <div className=" grid lg:grid-cols-2 gap-10">
        <div>
          <div className=" mb-8 max-lg:my-8">
            <div className=" flex items-center  mb-4">
              <h1 className=" text-[#d83030] text-lg font-semibold ">
                Award-Winning Software Development Company
              </h1>
              <span className="line ml-4"></span>
            </div>
            <p className=" text-4xl  max-lg:text-3xl  max-md::text-2xl max-sm:text-xl mx-2 text-[#032e42] font-bold m-auto max-lg:w-full">
              Our People, Vision, and Values are our Greatest Asset.
            </p>
          </div>
          <div>
            <p>
              <span className=" font-bold">RedFireAi</span> is not just a
              worldwide recognized IT firm, but also a family of skilled
              specialists that provide unique solutions to global brands,
              companies, mid-size organizations, and even startups with
              top-notch innovative solutions.
            </p>
            <p className=" text-2xl  max-lg:text-xl mt-10 mb-3 max-md::text-xl max-sm:text-lg text-[#032e42] font-bold m-auto max-lg:w-full">
              Who We Are ?
            </p>
            <p>
              We want to be recognized as the IT industry’s most dependable,
              creative, and user-friendly software service provider. Surpass the
              expectations of the client by offering superior Web solutions that
              turn data into knowledge and help them solve problems, going
              beyond software
            </p>
            <p className=" text-2xl  max-lg:text-xl mt-10 mb-3 max-md::text-xl max-sm:text-lg text-[#032e42] font-bold m-auto max-lg:w-full">
              What We Do
            </p>
            <p>
              With the help of cutting-edge technologies like Internet of Things
              (IoT), AR-VR, AI-ML, voice skills and voice assistance DevOps and
              Cloud computing we have become a top IT company in the{" "}
              <span className=" font-bold">USA, UAE and Pakistan</span> for
              delivering a variety of industry-led mobility solutions in the web
              and{" "}
              <span className=" font-bold">
                mobile application development.
              </span>
            </p>
            <p className=" my-5">
              Our certified tech experts and R&D team give us a sense of
              empowerment. Engagement with our team ensures that clients will
              experience significant cost savings and quicker project deliver
            </p>
            <p className=" my-5">
              Our certified tech experts and R&D team give us a sense of
              empowerment. Engagement with our team ensures that clients will
              experience significant cost savings and quicker project delivery.
            </p>
          </div>
        </div>
        <div className=" w-full px-2 ">
          <Image
            src={about_image}
            alt=""
            className=" mx-auto max-w-full h-auto"
          />
        </div>
      </div>
      <div className=" grid lg:grid-cols-2 gap-10 mt-20 max-lg:mt-10">
        <div className=" w-full flex justify-center px-2 ">
          <Image
            src={about_image_1}
            alt=""
            className=" max-w-full w-[820px] h-auto"
          />
        </div>
        <div>
          <div className=" mb-8 max-lg:my-8">
            <div className=" flex items-center  mb-4">
              <h1 className=" text-[#d83030] text-lg font-semibold ">
                Award-Winning Software Development Company
              </h1>
              <span className="line ml-4"></span>
            </div>
            <p className=" text-4xl  max-lg:text-3xl  max-md::text-2xl max-sm:text-xl mb-3 text-[#032e42] font-bold m-auto max-lg:w-full">
              Belief of Every REDFIREAI
            </p>
          </div>
          <div>
            <p>
              The importance of our clients’ businesses and customers is
              paramount to Red Fire AI. Being a market leader in web and mobile
              app development, our definition extends beyond our immediate
              clients. Our goal is to bring customers peace of mind, so we begin
              with their ideas and move forward from there. Our devoted team
              develops a solution that addresses the key problems to advance
              your company by considering YOUR end customers points of view.
            </p>
          </div>
        </div>
      </div>
      <div className=" grid lg:grid-cols-2 gap-10 mt-20 max-lg:mt-10">
        <div>
          <div className=" mb-8 max-lg:my-8">
            <div className=" flex items-center  mb-4">
              <h1 className=" text-[#d83030] text-lg font-semibold ">
                Award-Winning Software Development Company
              </h1>
              <span className="line ml-4"></span>
            </div>
            <p className=" text-4xl  max-lg:text-3xl  max-md::text-2xl max-sm:text-xl mb-3 text-[#032e42] font-bold m-auto max-lg:w-full">
              Effective Collaboration
            </p>
          </div>
          <div>
            <p>
              We firmly believe that communication is the foundation of success.
              Our team is proactive and pays close attention to what our clients
              have to say and what they want. this strategy has a significant
              impact on our client business. It is clear that we maintain
              connectivity with platforms and media that enable effectiveness,
              accuracy and transparency, when our development team collaborates
              with customers who are located miles away in USA and UAE.
            </p>
          </div>
        </div>
        <div className=" w-full flex justify-center px-2 ">
          <Image
            src={about_image_2}
            alt=""
            className=" max-w-full w-[820px] h-auto"
          />
        </div>
      </div>
      <div className=" grid lg:grid-cols-2 gap-10 mt-20 max-lg:mt-10">
        <div className=" w-full flex justify-center px-2 ">
          <Image
            src={about_image_3}
            alt=""
            className=" max-w-full w-[820px] h-auto"
          />
        </div>
        <div>
          <div className=" mb-8 max-lg:my-8">
            <div className=" flex items-center  mb-4">
              <h1 className=" text-[#d83030] text-lg font-semibold ">
                Award-Winning Software Development Company
              </h1>
              <span className="line ml-4"></span>
            </div>
            <p className=" text-4xl  max-lg:text-3xl  max-md::text-2xl max-sm:text-xl mb-3 text-[#032e42] font-bold m-auto max-lg:w-full">
              Quality Delivered in Time
            </p>
          </div>
          <div>
            <p>
              We have a broad internal framework with top-notch infrastructure
              and ten years of experience in the international IT software
              development sector, so we can always deliver the highest quality
              solutions. We have a habit of repeating successes and avoiding
              errors over time. It’s not just about extolling the virtues of
              quality. We specify it and deliver it on schedule
            </p>
          </div>
        </div>
      </div>
      <div className=" grid lg:grid-cols-2 gap-10 mt-20 max-lg:mt-10">
        <div>
          <div className=" mb-8 max-lg:my-8">
            <div className=" flex items-center  mb-4">
              <h1 className=" text-[#d83030] text-lg font-semibold ">
                Our Core Values
              </h1>
              <span className="line ml-4"></span>
            </div>
            <p className=" text-4xl  max-lg:text-3xl  max-md::text-2xl max-sm:text-xl mb-3 text-[#032e42] font-bold m-auto max-lg:w-full">
              Deliver dependable and high-quality software development services
            </p>
          </div>
          <div>
            <p>
              Maximum client satisfaction is ingrained in our very being.
              Clients are partners to us, in our opinion, Our customers are the
              reason for the success we have experienced over the years. Because
              of this, customer satisfaction is extremely important to our
              company. We are always open to working together because we firmly
              believe that doing so will help us to refine our insights for the
              best possible implementation of our offerings. The positive
              feedback from our customers give us an urge to strive for
              betterment and improvement.
            </p>
          </div>
        </div>
        <div className=" w-full flex justify-center px-2 ">
          <Image
            src={about_image_4}
            alt=""
            className=" max-w-full w-[820px] h-auto"
          />
        </div>
      </div>
      <div className=" mt-20 max-lg:my-5">
        <div className=" my-10">
          <p className=" text-3xl mb-8 max-lg:my-8  max-lg:text-2xl  max-md::text-2xl max-sm:text-xl  text-[#032e42] font-bold m-auto max-lg:w-full">
            Focused on results
          </p>
          <p>
            Our vision and how it was carried out are fundamental to our
            success. We uphold the same values throughout the hiring process and
            distribution of quality services. People who are passionate about
            their work are hired by us. People who are sincere about wanting to
            work with us and who are aware of how crucial meeting customer
            expectations is to producing high-quality results.
          </p>
        </div>
        <div className=" my-10">
          <p className=" text-3xl mb-8 max-lg:my-8  max-lg:text-2xl  max-md::text-2xl max-sm:text-xl  text-[#032e42] font-bold m-auto max-lg:w-full">
            Probity is everything for us
          </p>
          <p className=" mb-5">
            Integrity is central to our system and permeates everything we do.
          </p>
          <p>
            <span className=" font-bold">Red Fire AI</span> views it as
            upholding the law and occasionally going above and beyond. We make
            sure that upholding our commitments to honesty and fairness in our
            daily business must be a fundamental component of our company. We
            only believe in working together as a team, and our faith is”
            Integrity is the basis for success. It is the rule that is
            infallible”
          </p>
        </div>
        <div className=" my-10">
          <p className=" text-3xl mb-8 max-lg:my-8  max-lg:text-2xl  max-md::text-2xl max-sm:text-xl  text-[#032e42] font-bold m-auto max-lg:w-full">
            Focused on results
          </p>
          <p>
            <span className=" font-bold">Red Fire AI</span> is a family because
            Our people are dear to us.{" "}
            <span className=" font-bold">Red Fire AI</span> is more than just
            its commitments, widespread acclaim, or endorsements. In the IT
            sector, and more specifically in the areas of software and web
            development, we respect and value diversity in culture, ideas, and
            individuals. Nothing makes you feel better than being motivated by
            your mentors’ success stories. Yes,{" "}
            <span className=" font-bold">Red Fire AI</span> has compassion for
            its workers, who are among its most valuable assets. Here, not
            robots, but people, work!
          </p>
          <p className=" mt-5">
            we’ve come a long way and experienced a lot of change. We created
            things, made a ton of new friends, learned so much and expanded as a
            group. It was a rocky ride, looking back. Our definition of success
            has changed significantly over the years, but the beautiful
            destination is worth the struggle of the journey—and what a journey
            it turned out to be. Making a difference in a few lives is a noble
            endeavor, but what we really want to be remembered for is assisting
            others in achieving their goals and success
          </p>
        </div>
        <div className=" my-10">
          <div className=" mb-8 max-lg:my-8">
            <div className=" flex items-center  mb-4">
              <h1 className=" text-[#d83030] text-lg font-semibold ">
                Our Core Values
              </h1>
              <span className="line ml-4"></span>
            </div>
            <p className=" text-4xl  max-lg:text-3xl  max-md::text-2xl max-sm:text-xl mb-3 text-[#032e42] font-bold m-auto max-lg:w-full">
              Provide trustworthy and high-quality software development
              services.
            </p>
          </div>
          <div>
            <p>
              Maximum client satisfaction is ingrained in our very being. Client
              satisfaction is ingrained in our very being. We view our customers
              as partners in business. Our customers have contributed to the
              success we have experienced over the years. The customer’s
              satisfaction is crucial in our ecosystem for this reason. We are
              always open to working together because we firmly believe that
              doing so will help us to refine our insights and deliver our
              services to the highest standard possible.
            </p>
          </div>
        </div>
        <div className=" my-10">
          <div className=" mb-8 max-lg:my-8">
            <div className=" flex items-center  mb-4">
              <h1 className=" text-[#d83030] text-lg font-semibold ">
                Why we’re here?
              </h1>
              <span className="line ml-4"></span>
            </div>
            <p className=" text-4xl  max-lg:text-3xl  max-md::text-2xl max-sm:text-xl mb-3 text-[#032e42] font-bold m-auto max-lg:w-full">
              What do we want to be remembered for?
            </p>
          </div>
          <p>
            We came such a long way and so much has happened in the past two
            decades. We built things, met so many people, created life long
            friendships, learned so much and grew as a whole. Looking back, it
            was a bumpy ride. Sometimes the days and months seemed endless and
            hopeless too. But the beautiful destination is worth the struggle of
            the journey! And what a journey it turned out to be!
          </p>
          <p className=" mt-5">
            Our definition of success changed a long time ago. Making a
            difference in a few lives is a worthy goal, but helping people to
            achieve the things they want to achieve is really what we want to be
            remembered for.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutRewards;
