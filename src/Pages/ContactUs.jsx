import React from 'react'
import BusinessSection from '../components/ContactUS/Overlay/Overlay';
import ContactUsForm from "../components/ContactUS/FormSection/ContactForm";
import OurTeam from '../components/HomeContent/OurTeam';
import OurServices from '../components/HomeContent/OurServices';


const ContactUs = () => {
  return (
    <div>
        <BusinessSection/>
        <OurTeam />
        <OurServices />
        <ContactUsForm />
    </div>
  )
}

export default ContactUs