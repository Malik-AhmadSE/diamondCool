import { Image } from 'antd';
import React from 'react';
import ExpertisePic from '../../../assets/images/Expertise.jpg';
import Email from '../../../assets/images/icons/email.png';
import Call from '../../../assets/images/icons/call.png';
import Locate from '../../../assets/images/icons/locate.png';

function ContactInfo() {
    return (
        <div className='w-full px-8 flex justify-center items-center md:mt-72 mt-20'>
            <div className='w-full'>
                <div>
                    <h6 className='font-semibold mb-2 text-lg md:text-base'>Reach Us</h6>
                    <h1 className='font-bold text-[25px] md:text-[45px]'>Get in Touch</h1>
                    <p className='pt-3 md:pt-5 tracking-wider text-sm md:text-base'>We're here to assist you with any inquiries.</p>
                </div>
                <div className='w-full mt-8 md:mt-10 flex flex-col md:flex-row gap-8 md:gap-10'>
                    <div className='flex flex-col gap-8 md:gap-10 w-full md:w-[45%]'>
                        <div className='flex items-start gap-3'>
                            <Image src={Email} preview={false} className='!w-[22px] md:!w-[25px]' />
                            <div>
                                <h3 className='text-[18px] md:text-[20px] font-bold mb-1'>Email</h3>
                                <p className='text-sm md:text-base mb-1'>Contact us anytime for support.</p>
                                <a href="mailto:diamondcooluae@gmail.com" className='italic underline text-sm md:text-base text-blue-600'>
                                    diamondcooluae@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className='flex items-start gap-3'>
                            <Image src={Call} preview={false} className='!w-[22px] md:!w-[25px]' />
                            <div>
                                <h3 className='text-[18px] md:text-[20px] font-bold mb-1'>Phone</h3>
                                <p className='text-sm md:text-base mb-1'>Call us for immediate assistance.</p>
                                <a href="tel:+971558531096" className='italic underline text-sm md:text-base text-blue-600'>
                                    +971 55 853 1096
                                </a>
                            </div>
                        </div>
                        <div className='flex items-start gap-3'>
                            <Image src={Locate} preview={false} className='!w-[22px] md:!w-[25px]' />
                            <div>
                                <h3 className='text-[18px] md:text-[20px] font-bold mb-1'>Office</h3>
                                <p className='text-sm md:text-base'>
                                    P.O.Box # 379672, shop # 18,<br />
                                    Fish Round About, Deira<br />
                                    Dubai-U.A.E
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-[50%] flex justify-center items-center'>
                        <Image 
                            src={ExpertisePic} 
                            preview={false} 
                            className='w-full md:w-auto object-cover rounded-lg shadow-lg'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;
