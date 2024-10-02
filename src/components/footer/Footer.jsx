import { Image } from 'antd';
import React from 'react';
import Facebook from '../../assets/images/icons/facebook.png';
import Insta from '../../assets/images/icons/insta.png';
import Linkdin from '../../assets/images/icons/linkdin.png';
import Tweeter from '../../assets/images/icons/tweeter.png';
import Logo from '../../assets/images/logofooter.jpg';

function Footer() {
  return (
    <div className='w-full flex flex-col mt-32 px-5 md:px-10 !overflow-x-hidden'>
      <div className='w-full flex flex-col md:flex-row gap-10'>
        <div className='w-full md:w-[75%] flex flex-col  md:pl-10'>
          <Image src={Logo} className='!w-[150px] mx-auto md:mx-0' preview={false} onClick={() => { /* navigate('/') */ }} />
          <div className='mt-5 md:mt-0'>
            <address className='pt-5 md:pt-10'>
              <h6 className='font-medium'>Address:</h6>
              <p>P.O.Box # 379672, shop # 18, Fish Round About, Deira Dubai-U.A.E</p>
            </address>
            <address className='pt-5 md:pt-10'>
              <h6 className='font-medium'>Contact:</h6>
              <p>Tel: +97145773638</p>
              <p>Mail:diamondcooluae@gmail.com</p>
            </address>
            <div className='flex flex-row gap-3 items-center pt-5 md:pt-10'>
              <Image width={30} src={Facebook} preview={false}/>
              <Image width={30} src={Insta} preview={false} />
              <Image width={20} src={Linkdin} preview={false} />
              <Image width={20} src={Tweeter} preview={false} />
            </div>
          </div>
        </div>
        <div className='w-full md:w-[30%] flex flex-col md:flex-row gap-5 md:gap-10'>
          <div className='flex flex-col gap-3 text-center md:text-left'>
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
            <a href="/product">Products</a>
          </div>
          <div className='flex flex-col gap-3 text-center md:text-left'>
            <a href="/product">Washing Machine</a>
            <a href="/product">Refrigerators</a>
            <a href="/product">Air Conditioners</a>
          </div>
        </div>
      </div>
      <hr className='border border-black mt-5' />
      <div className='pb-10 pt-3 w-full flex flex-col md:flex-row gap-2 md:gap-10 justify-between items-center'>
        <h6 className='w-full md:w-[60%] text-center md:text-left'>© 2024 Diamond Cool. All rights reserved.</h6>
        <div className='w-full md:w-[40%] flex flex-col md:flex-row gap-3 md:gap-10 justify-center items-center underline text-center'>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies Settings</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
