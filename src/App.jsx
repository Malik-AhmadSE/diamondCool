import React from 'react';
import { Route,Routes } from 'react-router';
import Home from './pages/home/home.jsx';
import Contact from './pages/contact/Contact.jsx';
import Products from './pages/products/Products.jsx';
import Air from './pages/Allproducts/air/Air.jsx';
import Ref from './pages/Allproducts/ref/Ref.jsx';
import Was from './pages/Allproducts/was/Was.jsx';
import Construct from './pages/underConstruction/Construct.jsx';
import About from './pages/about/About.jsx';
import {WhatsAppOutlined} from "@ant-design/icons"
import { FloatButton } from 'antd';
function App() {

  return (
    <div className='w-full h-full'>
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/contact' element={ <Contact />}/>
        <Route path='/product' element={<Products/>} />
        <Route path='/about' element={<About/>} />
        {/* <Route path='/AirConditioners' element={<Air/>} />
        <Route path='/Refrigrators' element={<Ref/>} />
        <Route path='/WashingMachines' element={<Was/>} /> */}
    </Routes>
    <FloatButton className='bg-green-600 w-14 h-14' icon={<WhatsAppOutlined  className='text-black font-bold hover:text-white text-[20px]' />}/>
    {/* <Construct /> */}
   
    </div>
  )
}

export default App
