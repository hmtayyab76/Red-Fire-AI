import TcontactUs from '../../components/ContactUs/TContactUs'
import ContactForm from '../../components/ContactUs/ContactForm'
export const metadata = {
    title: "Contact Us - Red Fire AI Pvt. Ltd.",
};
function Contact_us() {
    return (
        <div>
            <TcontactUs />
            <ContactForm />
        </div>
    )
}

export default Contact_us