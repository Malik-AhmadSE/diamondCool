import React from 'react';
import Navbar from '../../components/navbar/nav';
import Hero from '../../components/AboutComponents/hero/Hero.jsx';
import ImageComponent from '../../components/AboutComponents/image/Image.jsx';
import Footer from '../../components/footer/Footer';
import CeoRating from '../../components/ContactComponent/ceorating/CeoRating.jsx';
import Reliable from '../../components/AboutComponents/reliable/Reliable.jsx';
import Expertise from '../../components/AboutComponents/expertise/Expertise.jsx';
import Serviceab from '../../components/AboutComponents/aboutservice/Serviceab.jsx';
function About() {

  return (
    <>
      <Navbar />
      <Hero />
      <ImageComponent />
      <Reliable />
      <Expertise />
      <div className=' relative top-[300px] pt-10 pb-10'>
       <Serviceab />
      </div>
      <div className='relative top-[220px]'>
        <CeoRating />
      </div>
      <div className='relative -top-[220px]'><Footer /></div>
      
    </>
  )
}

export default About;
