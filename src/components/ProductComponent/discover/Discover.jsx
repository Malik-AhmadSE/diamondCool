import { Button, Image } from 'antd';
import React from 'react';
import ExpertisePic from '../../../assets/images/Expertise.jpg';
import Buttons from '../../buttons/Buttons';

function Quality() {
    return (
       <div className='w-full flex justify-center items-center'>
         <div className='w-[95%] z-1 flex flex-col md:flex-row gap-3 md:p-5'>
            <div className='flex-1'>
                <h1 className='text-[30px] md:text-[45px] font-bold'>
                    Discover Our Additional Services for Installation and Maintenance
                </h1>
            </div>
            <div className='flex-1 md:w-[45%] flex flex-col justify-center'>
                <p className='tracking-wider pt-5 text-base md:w-[570px]'>
                    In addition to our wide range of products, we also offer professional installation and maintenance services. Our team of experts will ensure that your new appliance is installed correctly and is running smoothly. We also provide regular maintenance to keep your appliances in top condition and extend their lifespan.
                </p>
            </div>
        </div>
       </div>
    );
}

export default Quality;
