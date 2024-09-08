import React from 'react'
import { Button} from 'antd';
function Hero() {
    const [btn, setbtn] = React.useState("primary");
    const [btn1, setbtn1] = React.useState("Default");
  return (
    <div className='w-full relative top-24 z-0  h-[600px] bg-cover bg-heroImage flex flex-col justify-center items-center'>
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
  </div>
  )
}

export default Hero;