import React,{useState,useEffect} from 'react';
import { Image } from 'antd';
import Quotes1 from "../../../assets/images/qoutes1.png";
import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import QuotesLoader from '../../Common/skeleton/Quotes.jsx';
function Quotes() {
  const [btn, setbtn] = React.useState("primary");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 10000);
  }, []);
  return (
    <>
    {
      loading ? (<QuotesLoader/>):(<div className='relative top-[800px] w-full flex justify-center items-center pb-10'>
        <div className='w-[95%] h-[420px] bg-black relative'>
          <div className='absolute w-[70%] h-full top-0 left-0 z-10 bg-QoutesImage bg-cover pt-16 pl-10'>
          <h1 className='w-[550px] font-bold text-[45px] text-white'>Get a Free Quote Today</h1>
          <p className='w-[670px] pt-10 tracking-wider text-white pb-10'>Looking for reliable air conditioning services? Contact us today to get a free quote or learn more about our offerings.</p>
          <div className='pt-10 pb-5 flex gap-10'>
            <Button type={btn} onMouseEnter={() => setbtn('primary')} className='bg-transparent pt-4 pb-4 pl-5 pr-5 font-semibold text-green-700 border hover:!bg-black hover:border hover:border-black border-green-700 hover:text-white'>Learn More</Button>
            <Button type='text' icon={<RightOutlined />} iconPosition='end' className='font-semibold text-white hover:!text-green-700'>Contact Us</Button>
        </div>
          
          </div>
          <Image src={Quotes1} width={350} className='relative bottom-36 left-[800px]'/>
        </div>
      </div>)
    }
    </>
  )
}

export default Quotes;