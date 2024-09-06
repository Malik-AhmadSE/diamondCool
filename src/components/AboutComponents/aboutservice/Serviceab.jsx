import React from 'react'
import { Image } from 'antd'
import Quality from '../../../assets/images/icons/quality.png';
import Expert from '../../../assets/images/icons/experte.png';
import Set from '../../../assets/images/icons/set.png';

function Serviceab() {
    return (
        <>
        <div className='w-full relative top-72 z-1 flex gap-3 flex-wrap'>
            <div className='pl-10'>
                <h1 className='w-[600px] font-bold text-[45px]'>Discover Our Additional Services for Installation and Maintenance</h1>
            </div>
            <div className='w-[45%] pl-10 flex flex-col justify-center'>
                <p className='w-[570px] pt-5 tracking-wider'>In addition to our wide range of products, we also offer professional installation and maintenance services. Our team of experts will ensure that your new appliance is installed correctly and is running smoothly. We also provide regular maintenance to keep your appliances in top condition and extend their lifespan.</p>
            </div>
        </div>
        <div className='relative top-[350px] w-full flex gap-3 pb-10 pl-10'>
       <div className='w-[100%] h-[550px] pl-5 flex gap-10 flex-wrap'>
        <div>
            <Image preview={false} width={50} src={Quality} />
            <h4 className='font-bold text-[25px] pt-4 tracking-wide text-wrap w-[320px]'>Quality Parts for Reliable Appliance Performance</h4>
            <p className='w-[340px] text-[12px] tracking-wider pt-5'>At Diamond Cool, we offer a wide range of spare parts for refrigerators, air conditioners, and washing machines. Our selection includes parts for all leading brands and models, ensuring that you can find exactly what you need to keep your appliances running smoothly.</p>
        </div>
        <div>
            <Image preview={false} width={30} src={Expert} />
            <h4 className='font-bold text-[25px] pt-4 tracking-wide w-[400px]'>Expert Advice and Personalized Recommendations</h4>
            <p className='w-[340px] text-[12px] tracking-wider pt-5'>Our team of experts is always available to provide you with the advice and recommendations you need to make the right choice for your appliance. We understand that every situation is unique, and we're here to help you find the best solution.</p>
        </div>
        <div>
            <Image preview={false} width={30} src={Set} />
            <h4 className='w-[340px] font-bold text-[25px] pt-4 tracking-wide'>Keep Your Appliances Running Efficiently for Years to Come</h4>
            <p className='w-[340px] text-[12px] tracking-wider pt-5'>If your appliance is experiencing issues, our skilled technicians can diagnose and repair the problem efficiently, getting your appliance back to working order.</p>
           
        </div>
       </div>

    </div>
        
        </>
    )
}

export default Serviceab