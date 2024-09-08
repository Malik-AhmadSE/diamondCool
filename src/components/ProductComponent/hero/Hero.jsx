import React from 'react'
import { Button} from 'antd';
function Hero() {
    const [btn, setbtn] = React.useState("primary");
    const [btn1, setbtn1] = React.useState("Default");
  return (
    <div className='w-full relative top-24 z-0  h-[850px] bg-cover bg-ProductImage flex flex-col justify-center items-center'>
  </div>
  )
}

export default Hero;