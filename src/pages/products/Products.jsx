import React from 'react';
import Navbar from '../../components/navbar/nav';
import Hero from '../../components/ProductComponent/hero/Hero.jsx';
import Footer from '../../components/footer/Footer';
import Quality from '../../components/ProductComponent/QualityAppliance/Quality.jsx';
import QualityQoutes from '../../components/ProductComponent/QualityQoutes/QualityQoutes.jsx'
import Divs from '../../components/ProductComponent/ThreeDivs/Divs.jsx';
import DiscoverDiv from '../../components/ProductComponent/discover/Discover.jsx';
import Faq from '../../components/Common/faq/Faq.jsx';
import CeoRating from '../../components/ContactComponent/ceorating/CeoRating.jsx';
import Discover from '../../components/Common/discover/Discover.jsx';
import Services from '../../components/ProductComponent/service/Service.jsx';
import Products from '../../components/ProductComponent/products/Products.jsx';
function Product() {

  return (
    <>
      <Navbar />
      <Hero />
      <Quality />
      <Products />
      <QualityQoutes />
      <div className=' relative top-[400px] pt-10'>
      <Divs />
      </div>
      <div className=' relative top-[300px] pt-10 pb-10'>
       <DiscoverDiv />

        {/* <a href="https://wa.me/+1234567890">Click here to chat on WhatsApp</a> */}
      </div>
      <Services />
      <div className='relative top-[400px]'>
        <Faq />
        <CeoRating />
        <Discover />
      </div>
      <Footer />
    </>
  )
}

export default Product;
