import { Image } from 'antd';
import React from 'react'
import ExpertisePic from '../../../assets/images/Expertise.jpg'
import Email from '../../../assets/images/icons/email.png';
import Call from '../../../assets/images/icons/call.png';
import Locate from '../../../assets/images/icons/locate.png';

function ContactInfo() {
    return (
        <>
        <div className='w-full mt-36 pl-10'>
        <h6 className='font-semibold mb-2'>Reach Us</h6>
        <h1 className='w-[550px] font-bold text-[45px]'>Get in Touch</h1>
        <p className='w-[550px] pt-5 tracking-wider'>We’re here to assist you with any inquiries.</p>
        </div>
        <div className='w-full mt-4 z-1 flex gap-3 flex-wrap'>
            <div className='pl-10 pt-10 flex flex-col gap-10 w-[45%]'>
                <Image src={Email} preview={false} className='!w-[25px]'/>
                <h3 className='text-[20px] font-bold -mt-5'>Email</h3>
                <p className='-mt-4'>Contact us anytime for support.</p>
                <p className='italic underline -mt-4'>diamondcooluae@gmail.com</p>
                <Image src={Call} preview={false} className='!w-[25px]'/>
                <h3 className='text-[20px] font-bold -mt-5'>Phone</h3>
                <p className='-mt-4'>Call us for immediate assistance.</p>
                <p className='italic underline -mt-4'>+971558531096</p>
                <Image src={Locate} preview={false} className='!w-[25px]'/>
                <h3 className='text-[20px] font-bold -mt-5'>Office</h3>
                <p className='-mt-4'>P.O.Box # 379672, shop # 18, Fish Round About, Deira Dubai-U.A.E</p>
            </div>
            <div className='w-[50%] pl-10 flex justify-center'>
                <Image src={ExpertisePic} preview={false} className='w-auto' />
            </div>
        </div>
        </>
    )
}

export default ContactInfo;