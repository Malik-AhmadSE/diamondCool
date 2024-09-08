import React from 'react';
import { Route,Routes } from 'react-router';
import Home from './pages/home/home.jsx';
import Contact from './pages/contact/Contact.jsx';
import Products from './pages/products/Products.jsx';
import Construct from './pages/underConstruction/Construct.jsx';
import About from './pages/about/About.jsx';
import {WhatsAppOutlined} from "@ant-design/icons"
import { FloatButton } from 'antd';

const floatButton = {
  backgroundColor: 'green !important',                   
};
function App() {

  return (
    <div className='w-full h-full'>
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/contact' element={ <Contact />}/>
        <Route path='/product' element={<Products/>} />
        <Route path='/about' element={<About/>} />
    </Routes>
    <a href="https://wa.me/+971558531096"><FloatButton  className='w-14 h-14 bg-green-700 border border-green-700' icon={<WhatsAppOutlined  className='text-black font-bold hover:text-white text-[20px]' />}/></a>
    
    {/* <Construct /> */}
   
    </div>
  )
}

export default App
