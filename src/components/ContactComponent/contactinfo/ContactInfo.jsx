import { Image } from 'antd';
import React from 'react';
import ExpertisePic from '../../../assets/images/Expertise.jpg';
import Email from '../../../assets/images/icons/email.png';
import Call from '../../../assets/images/icons/call.png';
import Locate from '../../../assets/images/icons/locate.png';

function ContactInfo() {
    return (
        <>
            <div className='w-full mt-36 pl-10'>
                <h6 className='font-semibold mb-2'>Reach Us</h6>
                <h1 className='w-full md:w-[550px] font-bold text-[45px]'>Get in Touch</h1>
                <p className='w-full md:w-[550px] pt-5 tracking-wider'>We’re here to assist you with any inquiries.</p>
            </div>
            <div className='w-full mt-4 z-1 flex flex-col md:flex-row gap-3'>
                <div className='pl-10 pt-10 flex flex-col gap-10 w-full md:w-[45%]'>
                    <div className='flex items-start'>
                        <Image src={Email} preview={false} className='!w-[25px] mr-2' />
                        <div>
                            <h3 className='text-[20px] font-bold'>Email</h3>
                            <p>Contact us anytime for support.</p>
                            <p className='italic underline'>diamondcooluae@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex items-start'>
                        <Image src={Call} preview={false} className='!w-[25px] mr-2' />
                        <div>
                            <h3 className='text-[20px] font-bold'>Phone</h3>
                            <p>Call us for immediate assistance.</p>
                            <p className='italic underline'>+971558531096</p>
                        </div>
                    </div>
                    <div className='flex items-start'>
                        <Image src={Locate} preview={false} className='!w-[25px] mr-2' />
                        <div>
                            <h3 className='text-[20px] font-bold'>Office</h3>
                            <p>P.O.Box # 379672, shop # 18, Fish Round About, Deira Dubai-U.A.E</p>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-[50%] pl-10 flex justify-center'>
                    <Image src={ExpertisePic} preview={false} className='w-auto' />
                </div>
            </div>
        </>
    );
}

export default ContactInfo;
