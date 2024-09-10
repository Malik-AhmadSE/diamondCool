import React,{useState,useEffect} from 'react'
import Buttons from '../../buttons/Buttons';
import { Image } from 'antd';
import QualityLoader from '../../Common/skeleton/Quality.jsx';
function Quality() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 4000);
    }, []);
  return (
    <>
    {
      loading ? (<QualityLoader/>):(
         <div className='w-full relative top-[950px] z-1 flex gap-3 flex-wrap'>
             <div className='w-[50%] pl-10 flex justify-center'>
                <Image src={'https://res.cloudinary.com/dvf9mmcww/image/upload/v1725982999/MainImages/lidrg44ffwswcp2ewgjn.png'} preview={false} className='w-auto' />
            </div>
            <div className='pl-10 flex flex-col justify-center items-center'>
                <div>
                <h6 className='font-semibold mb-2'>Quality</h6>
                <h1 className='w-[550px] font-bold text-[45px]'>Experience the Best in Air Conditioning Services</h1>
                <p className='w-[550px] pt-5 tracking-wider'>Our company is dedicated to providing top-quality air conditioning services that are efficient and reliable. With a focus on customer satisfaction, we strive to exceed expectations in every project we undertake.</p>
                <div className='mt-10 pb-5'>
                   <Buttons />
                </div>
                </div>
            </div>
           
        </div>)}
        </>
  )
}

export default Quality