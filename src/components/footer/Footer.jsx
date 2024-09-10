import { Image } from 'antd'
import React from 'react'
import Facebook from '../../assets/images/icons/facebook.png';
import Insta from '../../assets/images/icons/insta.png';
import Linkdin from '../../assets/images/icons/linkdin.png';
import Tweeter from '../../assets/images/icons/tweeter.png';
import Logo from '../../assets/images/logofooter.jpg';
function Footer() {
    return (
        <div className='w-full flex flex-col relative top-[1100px]'>
            <div className='w-full flex flex-row gap-10'>
                <div className='w-[75%] pl-10'>
                <Image src={"https://res.cloudinary.com/dvf9mmcww/image/upload/v1725982984/MainImages/r4zxfbe2beagef7lakmb.jpg"} className='!w-[150px]' preview={false} onClick={()=>{navigate('/')}} />
                    <address className=' pt-10'>
                        <h6 className='font-medium'>Address:</h6>
                        <p>P.O.Box # 379672, shop # 18, Fish Round About, Deira Dubai-U.A.E</p>
                    </address>
                    <address className=' pt-10'>
                        <h6 className='font-medium'>Contact:</h6>
                        <p>+97145773638</p>
                        <p>diamondcooluae@gmail.com</p>
                    </address>
                    <div className='flex flex-row gap-3 items-center pt-10 tracking-widest'>
                        <Image width={30} src={Facebook} />
                        <Image width={30} src={Insta} />
                        <Image width={20} src={Linkdin} />
                        <Image width={20} src={Tweeter} />
                    </div>
                </div>
                <div className='w-[30%] flex flex-row gap-10'>
                       <div className='flex flex-col gap-3'>
                       <a href="#">Home</a>
                        <a href="#">About Us</a>
                        <a href="#">Contact</a>
                        <a href="#">Products</a>
                       </div>
                       <div className='flex flex-col gap-3'>
                       <a href="#">Washing Machine</a>
                        <a href="#">Refrigerators</a>
                        <a href="#">Air Conditionars</a>
                       </div>
                </div>
            </div>
            <hr className='border border-black mt-5' />
            <div className='pb-10 pt-3 pl-10 w-full flex gap-2'>
                <h6 className='w-[60%]'>© 2024 Diamond Cool. All rights reserved.</h6>
                <div className='w-[40%] flex gap-10 justify-center items-center underline'>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Cookies Settings</a>
                </div>
            </div>
        </div>
    )
}

export default Footer