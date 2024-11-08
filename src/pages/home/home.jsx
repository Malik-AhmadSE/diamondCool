import React from 'react';
import Navbar from '../../components/navbar/nav';
import Hero from '../../components/homeComponent/hero/Hero';
import Expertise from '../../components/homeComponent/expertise/Expertise';
import Reliable from '../../components/homeComponent/reliable/Reliable';
import Cards from '../../components/homeComponent/cards/Cards';
import Services from '../../components/homeComponent/services/Services';
import Quotes from '../../components/homeComponent/quotes/Quotes';
import Customer from '../../components/homeComponent/customer/Customer';
import Quality from '../../components/homeComponent/quality/Quality';
import Footer from '../../components/footer/Footer.jsx';
import Brands from '../../components/homeComponent/brands/brands.jsx';
import Refrigrator from '../../components/homeComponent/crousels/Refrigrator.jsx';
import AirCond from '../../components/homeComponent/crousels/Aircond.jsx';
import Washing from '../../components/homeComponent/crousels/Washing.jsx';
import Kitchen from '../../components/homeComponent/crousels/kitchen.jsx';
import Tool from '../../components/homeComponent/crousels/tools.jsx';
import Form from '../../components/homeComponent/contact/Form.jsx';
function Home() {

  return (
    <div className="!w-full !p-0 !m-0 " >
      <Navbar />
      <Hero /> 
      <Brands />
      <div className='flex flex-col gap-10'>
        <AirCond />
        <Refrigrator />
        <Washing /> 
        <Kitchen />
        <Tool />
      </div>
     <div >
     <Form />
     </div>
     {/* <Cards /> */}
      {/* <Expertise/>
      <Reliable />
      
      <Services />
      <Quotes />
      <Customer />
      <Quality /> */}
      <Footer />
      </div>
  )
}

export default Home;
