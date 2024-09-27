import { Image } from 'antd';
import React from 'react';
import ExpertisePic from '../../../assets/images/airproducts/air11.png';
import Buttons from '../../buttons/Buttons';

function Reliable() {
    return (
        <div className='w-full md:mt-[700px] -mt-32 z-1 flex justify-center items-center'>
           <div className='flex flex-col md:flex-row gap-3 w-[90%]'>
           <div className=' w-full md:w-[50%]'>
                <h6 className='font-semibold mb-2'>Reliable</h6>
                <h1 className='text-[30px] md:text-[45px] font-bold'>Quality Spare Parts for Long-Lasting Performance</h1>
                <p className='pt-5 tracking-wider text-base md:w-[550px]'>At Diamond Cool, we offer top-tier spare parts that ensure long-lasting performance and durability. Our extensive product range guarantees that you’ll find exactly what you need.</p>

                <div className='flex flex-col md:flex-row gap-5 flex-wrap mt-10'>
                    <div>
                        <h3 className='font-bold pb-4'>Premium Quality</h3>
                        <p className='w-full md:w-[280px] text-justify text-[15px]'>
                            Choose from our wide selection of spare parts for all leading brands and models.
                        </p>
                    </div>
                    <div>
                        <h3 className='font-bold pb-4'>Expert Advice</h3>
                        <p className='w-full md:w-[250px] text-justify text-[15px]'>
                            Our team is always ready to assist with expert advice and personalized recommendations.
                        </p>
                    </div>
                </div>
                <div className='mt-10 pb-5'>
                    <Buttons />
                </div>
            </div>
            <div className='w-full md:w-[50%] flex justify-center md:pl-10'>
                <Image src={ExpertisePic} preview={false} className='w-auto' />
            </div>
           </div>
        </div>
    );
}

export default Reliable;
