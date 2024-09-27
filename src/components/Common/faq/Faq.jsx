import { Button } from 'antd'
import React from 'react'

function Faq() {
    const [btn, setbtn] = React.useState("primary");
  return (
    <div className='flex justify-center items-center'>
      <div className='w-[95%] flex flex-col'>
        <div className='w-full flex flex-col gap-10'>
        <h1 className='md:w-[550px] font-bold text-[30px] md:text-[45px]'>FAQ's</h1>
        <p className='md:w-[620px] pt-5 tracking-wider'>Find answers to common questions about our products and services right here.</p>
        </div>
        <div className='pt-10 w-full flex gap-16 flex-wrap'>
        <div className='w-full md:w-[45%] flex gap-5 flex-wrap'>
            <div>
             <h5 className='md:w-[550px] font-bold text-[20px]'>What products do you offer?</h5>
             <p className=' pt-5 tracking-wider text-justify'>We offer a wide range of home appliances including refrigerators, air conditioners, and washing machines. Additionally, we provide spare parts for all our products. Our goal is to ensure you find exactly what you need for your home.</p>
            </div>
            <div>
             <h5 className='md:w-[550px] font-bold text-[20px]'>What is your warranty?</h5>
             <p className=' pt-5 tracking-wider text-justify'>We provide a standard warranty on all our products, typically ranging from one to two years. This warranty covers manufacturing defects and issues arising from normal use. Please refer to your product manual for specific details.</p>
            </div>
            <div>
             <h5 className='md:w-[550px] font-bold text-[20px]'>Where are you located?</h5>
             <p className=' pt-5 tracking-wider text-justify'>Our main office is located in the heart of the city. We also have multiple service centers for your convenience. Visit our website for the exact addresses and directions.</p>
            </div>
        </div>
        <div className='w-full md:w-[45%] flex gap-5 flex-wrap'>
            <div>
             <h5 className='md:w-[550px] font-bold text-[20px]'>How can I contact you?</h5>
             <p className=' pt-5 tracking-wider text-justify'>You can reach us through our contact form on the website. Alternatively, you can call our customer service hotline. We're here to assist you with any inquiries.</p>
            </div>
            <div>
             <h5 className='md:w-[550px] font-bold text-[20px]'>Do you offer repairs?</h5>
             <p className=' pt-5 tracking-wider text-justify'>Yes, we offer repair services for all the appliances we sell. Our skilled technicians are trained to handle various issues efficiently. Contact us to schedule a repair appointment.</p>
            </div>
        </div>
        </div>
        <div className='mt-10 flex flex-col gap-2'>
        <h1 className='md:w-[550px] font-bold text-[45px]'>Still have questions?</h1>
        <p className='md:w-[620px] pt-5 tracking-wider'>We're here to help you with any inquiries.</p>
        </div> 
        <Button type={btn} onMouseEnter={() => setbtn('primary')} className='bg-transparent w-24 pt-4 pb-4 pl-5 pr-5 mt-5 font-semibold text-green-700 border hover:!bg-black hover:border hover:border-black border-green-700 hover:text-white'>Contact</Button>
    </div>
    </div>
  )
}

export default Faq