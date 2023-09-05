import TService from '../../components/Services/TService'
import OurServices from '../../components/Services/OurServices'
export const metadata = {
    title: "Services - Red Fire AI Pvt. Ltd.",
};

function Services() {
    return (
        <div className=' w-full'>
            <TService />
            <OurServices />
        </div>
    )
}

export default Services