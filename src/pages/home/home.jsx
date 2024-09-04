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
import Footer from '../../components/footer/Footer';
function Home() {

  return (
    <>
      <Navbar />
      <Hero />
      <Expertise/>
      <Reliable />
      <Cards />
      <Services />
      <Quotes />
      <Customer />
      <Quality />
      <Footer />
    </>
  )
}

export default Home;
