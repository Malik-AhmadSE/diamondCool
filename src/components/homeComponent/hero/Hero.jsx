import React, { useState, useEffect } from 'react';
import { Button, Image, Skeleton } from 'antd';
import Pic from '../../../assets/landing.jpg'
function Hero() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="!w-full px-4 md:px-8 flex justify-center">
      <div className="!w-full">
        {loading ? (
          <Skeleton.Image className='!w-full  mt-8 md:mt-24 z-0 !h-[250px] md:!h-[650px] bg-cover flex flex-col justify-center items-center mb-28' />
        ) : (
          <Image 
            src={Pic} 
            preview={false} 
            className='!w-screen mt-32 md:mt-44 z-0 h-[250px] md:h-[600px] flex flex-col justify-center items-center' 
            style={{ objectFit: 'cover' }}
          />
        )}
      </div>
    </div>
  );
}

export default Hero;





























{/* <div className=' w-[50%]'>
            <h1 className=' text-[45px] text-center font-bold'>Providing Reliable Air Conditioning Solutions for You</h1>
        </div>
        <div className=' mt-5 w-[68%] text-[20px] text-center'>
        <h3>Stay cool and comfortable with our top-notch air conditioning, refrigeration, and home appliance services.</h3>
        </div>
        <div className='m-5 flex gap-4'>
        <Button type={btn} onMouseEnter={() => setbtn('Default')} className='pt-4 pb-4 pl-5 pr-5 font-semibold text-white bg-black hover:bg-transparent hover:border hover:border-green-700 hover:text-green-700'>Learn More</Button>
        <Button type={btn1} onMouseEnter={() => setbtn('primary')}  className='bg-transparent pt-4 pb-4 pl-5 pr-5 font-semibold text-green-700 border hover:bg-black hover:border hover:border-black border-green-700 hover:text-white'>Contact Us</Button>
        </div> */}