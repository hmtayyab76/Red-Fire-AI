import Link from 'next/link'
import React from 'react'
import AboutRewards from "../../components/AboutPage/AboutRewards"
import ServicesAndExperience from '../../components/AboutPage/ServicesAndExperience'
import CompanyTeam from '../../components/AboutPage/CompanyTeam'
import TAbout from '../../components/AboutPage/TAbout'
export const metadata = {
    title: "About Us - Red Fire AI Pvt. Ltd.",
};

function About_us() {
    return (
        <div className=' w-full'>
            <TAbout />
            <div className='px-5 py-20 max-lg:py-10'>
                <div className='max-w-[1140px] mr-auto ml-auto'>
                    <AboutRewards />
                    <ServicesAndExperience />
                </div>
            </div>
            <CompanyTeam />
        </div>
    )
}

export default About_us