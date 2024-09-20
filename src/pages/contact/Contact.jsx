import React from 'react';
import Navbar from '../../components/navbar/nav';
import Hero from '../../components/ContactComponent/hero/Hero.jsx';
import Footer from '../../components/footer/Footer';
import ContactInfo from '../../components/ContactComponent/contactinfo/ContactInfo.jsx';
import Form from '../../components/ContactComponent/contactinfo/Form.jsx';
import ContactDiv from '../../components/ContactComponent/contactinfo/ContactDiv.jsx';
import Location from '../../components/ContactComponent/location/Location.jsx';
import Faq from '../../components/Common/faq/Faq.jsx';
import CeoRating from '../../components/ContactComponent/ceorating/CeoRating.jsx';
import Discover from '../../components/Common/discover/Discover.jsx';
function Contact() {

  return (
    <>
      <Navbar />
      <Hero />
      <ContactInfo />
      <Form />
      <div className='mt-36 pt-10'>
      <ContactDiv />
      </div>
      <div className='mt-36'>
        <Location />
      </div>
      <div className='mt-40'>
        <Faq />
        <CeoRating />
        <Discover />
      </div>
      <Footer />
    </>
  )
}

export default Contact;
