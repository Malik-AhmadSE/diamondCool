import { Button, Image } from 'antd';
import React from 'react'
import ExpertisePic from '../../../assets/images/Expertise.jpg'
import Buttons from '../../buttons/Buttons';
function Quality() {
    
    return (
        <div className='w-full relative top-64 z-1 flex gap-3 flex-wrap'>
            <div className='pl-10'>
                <h1 className='w-[600px] font-bold text-[45px]'>Discover Our Additional Services for Installation and Maintenance</h1>
                
            </div>
            <div className='w-[45%] pl-10 flex flex-col justify-center'>
            <p className='w-[570px] pt-5 tracking-wider'>In addition to our wide range of products, we also offer professional installation and maintenance services. Our team of experts will ensure that your new appliance is installed correctly and is running smoothly. We also provide regular maintenance to keep your appliances in top condition and extend their lifespan.</p>
        </div>
        </div>
    )
}

export default Quality;