import { Button, Image } from 'antd';
import React from 'react'
import Buttons from '../../buttons/Buttons';
function Hero() {
    
    return (
        <div className='w-full pt-28 z-1 flex gap-3 flex-wrap'>
            <div className='pl-10'>
                <h1 className='w-[600px] font-bold text-[45px]'>Find the Perfect Spare Parts for Your Appliances</h1>
                
            </div>
            <div className='w-[45%] pl-10 flex flex-col justify-center'>
            <p className='w-[570px] pt-5 tracking-wider'>Welcome to Diamond Cool, your trusted partner for high-quality spare parts for refrigerators, air conditioners, and washing machines. We are dedicated to providing reliable, durable, and affordable solutions for all your home appliance needs.</p>
            <div className='pt-10'>
            <Buttons />
            </div>
        </div>
        </div>
    )
}

export default Hero;