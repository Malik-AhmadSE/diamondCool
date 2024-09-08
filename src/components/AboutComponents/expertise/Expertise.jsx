import { Image } from 'antd';
import React from 'react'
import ExpertisePic from '../../../assets/images/airproducts/air16.png'
function Expertise() {
    return (
        <div className='w-full relative top-[550px] z-1 flex gap-3 items-center flex-wrap'>
            <div className='pl-10'>
                <h1 className='w-[550px] font-bold text-[45px]'>Expertise that Keeps Your Machines in Optimal Condition</h1>
                <p className='w-[550px] pt-5 tracking-wider'>With years of experience in the appliance industry, Diamond Cool understands what it takes to keep your machines running smoothly. Our expertise ensures that you receive top-quality spare parts and expert advice for optimal performance.</p>
            </div>
            <div className='w-[50%] pl-10 flex justify-center'>
                <Image src={ExpertisePic} preview={false} className='w-auto' />
            </div>
        </div>
    )
}

export default Expertise;