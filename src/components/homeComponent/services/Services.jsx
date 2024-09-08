import React,{useEffect,useState} from 'react'
import Buttons from '../../buttons/Buttons'
import { Image } from 'antd'
import Experts from '../../../assets/images/icons/experts.png';
import Clock from '../../../assets/images/icons/clock.png';
import Tailored from '../../../assets/images/icons/tailored.png';
import Top from '../../../assets/images/icons/top.png';
import ServiceLoader from '../../Common/skeleton/Service.jsx';
function Services() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 10000);
    }, []);
  return (
    <>
    {loading ? (<ServiceLoader />):
    (<div className='relative top-[600px] w-full flex gap-3 pb-10'>
       <div className='w-[41%] pl-10'>
       <h6 className='font-semibold mb-2'>Reliable</h6>
        <h1 className='font-bold text-[45px]'>Why Choose Our Services?</h1>
        <p className='pt-5 tracking-wider'>We offer top-quality spare parts for air conditioning and refrigeration systems you can trust. With our expertise and commitment to customer satisfaction, we are the best choice for all your cooling and refrigeration needs.</p>
        <div className='pt-10'>
            <Buttons />
        </div>
       </div>
       <div className='w-[59%] h-[550px] pl-5 bg-ServiceImage  bg-cover flex gap-5 flex-wrap'>
        <div>
            <Image preview={false} width={50} src={Experts} />
            <h4 className='font-bold text-[25px] pt-4 tracking-wide'>Experienced Professionals</h4>
            <p className='w-[340px] text-[12px] tracking-wider pt-5'>Benefit from our in-depth knowledge and experience in providing high-quality spare parts for air conditioning and refrigeration systems.</p>
        </div>
        <div>
            <Image preview={false} width={50} src={Clock} />
            <h4 className='font-bold text-[25px] pt-4 tracking-wide'>Prompt Availability</h4>
            <p className='w-[340px] text-[12px] tracking-wider pt-5'>Count on our efficient service to quickly provide the spare parts you need, minimizing downtime and keeping your systems running smoothly.</p>
        </div>
        <div>
            <Image preview={false} width={50} src={Tailored} />
            <h4 className='w-[250px] font-bold text-[25px] pt-4 tracking-wide'>Tailored Spare Parts Solutions</h4>
            <p className='w-[340px] text-[12px] tracking-wider pt-5'>Receive spare parts that match your specific needs and ensure optimal performance for your cooling and refrigeration systems.</p>
        </div>
        <div>
            <Image preview={false} width={50} src={Top} />
            <h4 className='font-bold  text-[25px] pt-4 tracking-wide'>Top-Quality Components</h4>
            <p className='w-[340px] text-[12px] tracking-wider pt-5'>Trust in the superior quality of our spare parts, designed to deliver reliable and long-lasting performance for your air conditioning and refrigeration systems.</p>
        </div>
       </div>

    </div>
)}
    </>
  )
}

export default Services;