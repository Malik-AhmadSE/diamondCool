import { Button, Image } from 'antd';
import React from 'react';
import Buttons from '../../buttons/Buttons';

function Hero() {
    return (
        <div className='w-full pt-24 md:pt-44 z-1 flex gap-3 flex-wrap md:flex-nowrap'>
            <div className='pl-10 w-full md:w-[600px]'>
                <h1 className='font-bold text-[45px]'>Find the Perfect Spare Parts for Your Appliances</h1>
            </div>
            <div className='w-full md:w-[45%] pl-10 flex flex-col justify-center'>
                <p className='pt-5 tracking-wider'>Welcome to Diamond Cool, your trusted partner for high-quality spare parts for refrigerators, air conditioners, and washing machines. We are dedicated to providing reliable, durable, and affordable solutions for all your home appliance needs.</p>
                <div className='pt-10'>
                    <Buttons />
                </div>
            </div>
        </div>
    );
}

export default Hero;
