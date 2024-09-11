import React,{useState,useEffect} from 'react';
import { Image } from 'antd';
import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import QuotesLoader from '../../Common/skeleton/Quotes.jsx';
function Quotes() {
  const [btn, setbtn] = React.useState("primary");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 4000);
  }, []);
  return (
    <>
    {
      loading ? (<QuotesLoader/>):(<div className='w-full md:mt-80 mt-60 flex justify-center items-center pb-10'>
        <div className='w-[95%] h-[180px] md:h-[420px] bg-black relative'>
          <div className='absolute w-[70%] h-full top-0 left-0 z-10 bg-QoutesImage bg-cover pt-5 md:pt-16 md:pl-10 pl-5'>
          <h1 className='w-[550px] font-bold md:text-[45px] text-white'>Get a Free Quote Today</h1>
          <p className='md:w-[670px] text-[12px] md:text-[20px] md:pt-10 pt-4 tracking-wider text-white md:pb-10 pb-2'>Looking for reliable air conditioning services? Contact us today to get a free quote or learn more about our offerings.</p>
          <div className='md:pt-10 md:pb-5 flex gap-10'>
            <Button type={btn} onMouseEnter={() => setbtn('primary')} className='bg-transparent pt-4 pb-4 pl-5 pr-5 font-semibold text-green-700 border hover:!bg-black hover:border hover:border-black border-green-700 hover:text-white'>Learn More</Button>
            <Button type='text' icon={<RightOutlined />} iconPosition='end' className='font-semibold text-white hover:!text-green-700'>Contact Us</Button>
        </div>
          
          </div>
          <Image src={'https://res.cloudinary.com/dvf9mmcww/image/upload/v1725982992/MainImages/by21peffcc7km0x402xd.png'} className='!w-[100px] md:!w-[350px] relative md:bottom-36 md:left-[800px] hidden md:block left-[340px]'/>
        </div>
      </div>)
    }
    </>
  )
}

export default Quotes;