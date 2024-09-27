import { Button, Image } from 'antd';
import React from 'react';
import Buttons from '../../buttons/Buttons';

function Hero() {
    return (
        <div className='w-full pt-24 md:pt-44 flex justify-center items-center'>
           <div className='w-[90%] z-1 flex gap-3 flex-wrap md:flex-nowrap'>
           <div className=' w-full md:w-[600px]'>
                <h1 className='font-bold md:text-[45px] text-[30px]'>Find the Perfect Spare Parts for Your Appliances</h1>
            </div>
            <div className='w-full md:w-[45%] md:pl-10 flex flex-col justify-center'>
                <p className='pt-5 tracking-wider'>Welcome to Diamond Cool, your trusted partner for high-quality spare parts for refrigerators, air conditioners, and washing machines. We are dedicated to providing reliable, durable, and affordable solutions for all your home appliance needs.</p>
                <div className='pt-10'>
                    <Buttons />
                </div>
            </div>
           </div>
        </div>
    );
}

export default Hero;
