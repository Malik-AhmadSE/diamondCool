import React from 'react';
import { Route,Routes } from 'react-router';
import Home from './pages/home/home.jsx';
import Contact from './pages/contact/Contact.jsx';
import Construct from './pages/underConstruction/Construct.jsx';
function App() {

  return (
    <div className='w-full h-full'>
      {/* <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/contact' element={ <Contact />}/>
    </Routes> */}
    <Construct />
   
    </div>
  )
}

export default App
