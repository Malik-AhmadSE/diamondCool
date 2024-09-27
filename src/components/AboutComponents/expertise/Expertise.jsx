import { Image } from 'antd';
import React from 'react';
import ExpertisePic from '../../../assets/images/airproducts/air16.png';

function Expertise() {
    return (
        <div className='w-full md:mt-36 mt-12 z-1 flex justify-center items-center '>
            <div className='w-[90%] flex-wrap md:flex-nowrap flex gap-3'>
            <div className='w-full md:w-auto'>
                <h1 className='md:w-[550px] font-bold md:text-[45px] text-[30px]'>Expertise that Keeps Your Machines in Optimal Condition</h1>
                <p className='md:w-[550px] pt-5 tracking-wider'>With years of experience in the appliance industry, Diamond Cool understands what it takes to keep your machines running smoothly. Our expertise ensures that you receive top-quality spare parts and expert advice for optimal performance.</p>
            </div>
            <div className='w-full md:w-[50%] md:pl-10 flex justify-center'>
                <Image src={ExpertisePic} preview={false} className='w-auto max-w-full h-auto' />
            </div>
            </div>
        </div>
    );
}

export default Expertise;
