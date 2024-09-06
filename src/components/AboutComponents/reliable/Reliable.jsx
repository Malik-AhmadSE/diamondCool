import { Image } from 'antd';
import React from 'react'
import ExpertisePic from '../../../assets/images/Expertise.jpg'
import Buttons from '../../buttons/Buttons';
function Reliable() {
    
    return (
        <div className='w-full relative top-[450px] z-1 flex gap-3 flex-wrap'>
            <div className='pl-10'>
                <h6 className='font-semibold mb-2'>Reliable</h6>
                <h1 className='w-[550px] font-bold text-[45px]'>Quality Spare Parts for Long-Lasting Performance</h1>
                <p className='w-[550px] pt-5 tracking-wider'>At Diamond Cool, we offer top-tier spare parts that ensure long-lasting performance and durability. Our extensive product range guarantees that you’ll find exactly what you need.</p>

                <div className='flex gap-5 flex-wrap mt-10'>
                    <div>
                        <h3 className=' font-bold pb-4'>
                        Premium Quality
                        </h3>
                        <p className='w-[280px] text-justify text-[15px]'>
                        Choose from our wide selection of spare parts for all leading brands and models.
                        </p>
                    </div>
                    <div>
                        <h3 className=' font-bold pb-4'>
                        Expert Advice
                        </h3>
                        <p className='w-[250px] text-justify text-[15px]'>Our team is always ready to assist with expert advice and personalized recommendations.</p>
                    </div>
                </div>
                <div className='mt-10 pb-5'>
                   <Buttons />
                </div>
            </div>
            <div className='w-[50%] pl-10 flex justify-center'>
                <Image src={ExpertisePic} preview={false} className='w-auto' />
            </div>
        </div>
    )
}

export default Reliable;