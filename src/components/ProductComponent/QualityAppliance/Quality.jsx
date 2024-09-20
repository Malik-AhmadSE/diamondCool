import React from 'react'; 
import Buttons from '../../buttons/Buttons'; 

function Quality() { 
    return ( 
        <div className='w-full md:mt-48 -mt-72 z-1 flex flex-col md:flex-row gap-3'> {/* Change flex direction based on screen size */}
            <div className='pl-10'>
                <h1 className='text-4xl md:text-[45px] font-bold'> {/* Responsive font size */}
                    Quality Appliances for Every Home
                </h1>
            </div> 
            <div className='w-full md:w-1/2 pl-10 flex flex-col justify-center'> {/* Full width on small screens */}
                <p className='pt-5 tracking-wider text-base md:text-lg'> {/* Responsive text size */}
                    Welcome to our store, where you'll find a wide selection of refrigerators, air conditioners, washing machines, and spare parts. We offer top-quality products at affordable prices, ensuring your home is equipped with the best appliances.
                </p> 
                <div className='mt-10 pb-10'>
                    <Buttons /> 
                </div> 
            </div> 
        </div> 
    ); 
} 

export default Quality;
