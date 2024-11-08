import { Image } from 'antd';
import React from 'react';
import Email from '../../../assets/images/icons/email.png';
import Call from '../../../assets/images/icons/call.png';
import Locate from '../../../assets/images/icons/locate.png';

function ContactInfo() {
    return (
       <div className='w-full md:px-8 px-4 flex justify-center items-center'>
        <div>
        <div className='w-full flex flex-col md:flex-row gap-10'>
                <div className='w-full md:w-[60%] z-1 flex flex-col gap-2'>
                    <h6 className='font-semibold mb-2'>Reach Us</h6>
                    <h1 className='w-full md:w-[550px] font-bold md:text-[45px] text-[25px]'>Contact us</h1>
                    <p className='w-full md:w-[550px] pt-5 tracking-wider'>
                        We're committed to providing you with the support you need. Please don't hesitate to reach out with any questions or concerns.
                    </p>
                </div>
                <div className='w-full md:w-[40%] md:pt-0 pt-5 flex justify-center items-center'>
                    <div className='flex flex-col gap-10 w-full max-w-[400px]'>
                        <div className='flex gap-3 items-center'>
                            <Image src={Email} preview={false} className='!w-[20px]' />
                            <h3 className='text-[15px] font-bold'>Email</h3>
                        </div>
                        <p className='italic underline'>diamondcooluae@gmail.com</p>
                        <div className='flex gap-3 items-center'>
                            <Image src={Call} preview={false} className='!w-[20px]' />
                            <h3 className='text-[15px] font-bold'>Phone</h3>
                        </div>
                        <p className='italic underline'>+97145773638</p>
                        <div className='flex gap-3 items-center'>
                            <Image src={Locate} preview={false} className='!w-[20px]' />
                            <h3 className='text-[15px] font-bold'>Office</h3>
                        </div>
                        <p>P.O.Box # 379672, shop # 18, Fish Round About, Deira Dubai-U.A.E</p>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
}

export default ContactInfo;
