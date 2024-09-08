import { Button, Image } from 'antd';
import React from 'react'
import Email from '../../../assets/images/icons/email.png';
import Call from '../../../assets/images/icons/call.png';
import Locate from '../../../assets/images/icons/locate.png';

function ContactInfo() {
    
    return (
        <>
        <div className='w-full flex gap-2 relative top-36'>
        <div className='w-[60%]  z-1 flex flex-col pl-10 gap-2 flex-wrap'>
        <h6 className='font-semibold mb-2'>Reach Us</h6>
        <h1 className='w-[550px] font-bold text-[45px]'>Contact us</h1>
        <p className='w-[550px] pt-5 tracking-wider'>We're committed to providing you with the support you need. Please don't hesitate to reach out with any questions or concerns</p>
        </div>
        <div className='w-[40%] pl-10 flex justify-center items-center'>
            <div className='pl-10  flex flex-col gap-10 w-[45%]'>
                <div className='flex gap-3 items-center'>
                <Image src={Email} preview={false} className='!w-[20px]'/>
                <h3 className='text-[15px] font-bold'>Email</h3>
                </div>
                <p className='italic underline -mt-4'>diamondcooluae@gmail.com</p>
                <div className='flex gap-3 items-center'>
                <Image src={Call} preview={false} className='!w-[20px]'/>
                <h3 className='text-[15px] font-bold'>Phone</h3>
                </div>
                <p className='italic underline -mt-4'>+97145773638</p>
                <div className='flex gap-3 items-center'>
                <Image src={Locate} preview={false} className='!w-[20px]'/>
                <h3 className='text-[15px] font-bold'>Office</h3>
                </div>
                <p className='-mt-4'>P.O.Box # 379672, shop # 18, Fish Round About, Deira Dubai-U.A.E</p>
            </div>
            </div>
        </div>
        </>
    )
}

export default ContactInfo;