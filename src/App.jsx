import React from 'react';
import { Route,Routes } from 'react-router';
import Home from './pages/home/home.jsx';
import Contact from './pages/contact/Contact.jsx';
import Products from './pages/products/Products.jsx';
import Construct from './pages/underConstruction/Construct.jsx';
import Expert from './assets/images/logofooter.jpg';
import About from './pages/about/About.jsx';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

export const MessageComponent = () => {
  return (
    <div>
      Hi,<br />
      Do you want to buy something?<br />
      You can send me a message here.<br />
      Thanks!
    </div>
  );
};


function App() {

  return (
    // <div className='pl-5 pr-5'>
    //   <Routes>
    //     <Route path='/' element={ <Home />}/>
    //     <Route path='/contact' element={ <Contact />}/>
    //     <Route path='/product' element={<Products/>} />
    //     <Route path='/about' element={<About/>} />
    // </Routes>
    // <FloatingWhatsApp phoneNumber='+971558531096' chatboxHeight={'350px'} darkMode={true} accountName='Helper' avatar={Expert} statusMessage="Online" chatMessage={   <>
    //       Hi,
    //       Do you want to buy something?<br />
    //       You can send me a message here.<br />
    //       Thanks!
    //     </>} />
   <Construct /> 
   
    </div>
  )
}

export default App
