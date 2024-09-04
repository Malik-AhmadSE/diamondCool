import React from 'react'

export default function Construct() {
  return (
    <div className='!w-screen md:w-full !h-screen flex flex-col justify-center items-center'>
    <h1 className='md:text-[45px] text-[25px] font-bold'>Under Construction</h1>
    <iframe src="https://lottie.host/embed/201d002f-c660-4543-915a-a43376bcbbde/RBLkZ9vG8t.json" className=' md:size-80 size-32'></iframe>
    <p className='text-wrap text-[15px] md:text-[20px]'> Our website is currently under construction to bring you an improved experience.</p>
    <h1 className=' font-semibold italic pt-10'>Please check back soon!</h1>
    <p className='md:text-[45px] text-[30px] tracking-widest'>🚧🚧🚧</p>

    </div>
  )
}
