import React from 'react'
import { Image } from 'antd'
import Experts from '../../../assets/images/icons/exp.png';
import Setting from '../../../assets/images/icons/setting.png';
import Tailored from '../../../assets/images/icons/tailored.png';
import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
function Services() {
  return (
    <div className='mt-16 w-full flex gap-3 pl-10'>
       <div className='w-[100%] h-[550px] pl-5 flex gap-10 flex-wrap'>
        <div>
            <Image preview={false} width={50} src={Experts} />
            <h4 className='font-bold text-[25px] pt-4 tracking-wide'>Professional Installation</h4>
            <p className='w-[340px] text-[12px] tracking-wider pt-5'>Our skilled technicians will handle the installation of your new appliance, ensuring it is set up properly and ready to use.</p>
            <Button type='link' icon={<RightOutlined />} iconPosition='end' className='font-semibold text-black -ml-4'>Learn More</Button>
        </div>
        <div>
            <Image preview={false} width={50} src={Setting} />
            <h4 className='font-bold text-[25px] pt-4 tracking-wide'>Reliable Maintenance</h4>
            <p className='w-[340px] text-[12px] tracking-wider pt-5'>Regular maintenance is essential to keep your appliances in optimal condition. Our team will provide thorough inspections and necessary repairs to ensure their longevity.</p>
            <Button type='link' icon={<RightOutlined />} iconPosition='end' className='font-semibold text-black -ml-4'>Learn More</Button>
        </div>
        <div>
            <Image preview={false} width={50} src={Tailored} />
            <h4 className='w-[340px] font-bold text-[25px] pt-4 tracking-wide'>Expert Appliance Repairs</h4>
            <p className='w-[340px] text-[12px] tracking-wider pt-5'>If your appliance is experiencing issues, our skilled technicians can diagnose and repair the problem efficiently, getting your appliance back to working order.</p>
            <Button type='link' icon={<RightOutlined />} iconPosition='end' className='font-semibold text-black -ml-4'>Learn More</Button>
        </div>
       </div>

    </div>
  )
}

export default Services;