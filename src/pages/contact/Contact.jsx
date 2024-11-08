import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../../components/navbar/nav';
import Hero from '../../components/ContactComponent/hero/Hero.jsx';
import Footer from '../../components/footer/Footer';
import ContactInfo from '../../components/ContactComponent/contactinfo/ContactInfo.jsx';
import ContactDiv from '../../components/ContactComponent/contactinfo/ContactDiv.jsx';
import Location from '../../components/ContactComponent/location/Location.jsx';
import Faq from '../../components/Common/faq/Faq.jsx';
import CeoRating from '../../components/ContactComponent/ceorating/CeoRating.jsx';
import Discover from '../../components/Common/discover/Discover.jsx';

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const containerRef = useRef(null);

  // useGSAP(() => {
  //   const sections = containerRef.current.children;
    
  //   Array.from(sections).forEach((section, index) => {
  //     if (section.tagName !== 'NAV' && section.tagName !== 'FOOTER') {
  //       gsap.from(section, {
  //         opacity: 0,
  //         y: 50,
  //         duration: 1.2,
  //         ease: "power3.out",
  //         scrollTrigger: {
  //           trigger: section,
  //           start: "top 80%",
  //           end: "bottom 20%",
  //           toggleActions: "play none none reverse",
  //           scrub: 1
  //         },
  //         delay: index * 0.2
  //       });
  //     }
  //   });
  // }, []);

  return (
    <div ref={containerRef}>
      <Navbar />
      <Hero />
      <ContactInfo />
      <div className='md:mt-36 mt-20 pt-10'>
        <ContactDiv />
      </div>
      <div className='mt-36'>
        <Location />
      </div>
      <div className='md:mt-40 mt-56'>
        <Faq />
        <CeoRating />
        <Discover />
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
