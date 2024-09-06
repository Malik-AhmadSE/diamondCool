import { Button, Image } from 'antd';
import React from 'react'
import ExpertisePic from '../../../assets/images/Expertise.jpg'
import Buttons from '../../buttons/Buttons';
function Quality() {
    
    return (
        <div className='w-full relative top-64 z-1 flex gap-3 flex-wrap'>
            <div className='pl-10'>
                <h1 className='w-[550px] font-bold text-[45px]'>Quality Appliances for Every Home</h1>
                
            </div>
            <div className='w-[50%] pl-10 flex flex-col justify-center'>
            <p className='w-[570px] pt-5 tracking-wider'>Welcome to our store, where you'll find a wide selection of refrigerators, air conditioners, washing machines, and spare parts. We offer top-quality products at affordable prices, ensuring your home is equipped with the best appliances.</p>
            <div className='mt-10 pb-10'>
                   <Buttons />
                </div>
            </div>
        </div>
    )
}

export default Quality;