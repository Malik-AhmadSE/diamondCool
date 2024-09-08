import { Button, Image } from 'antd';
import React,{useEffect,useState} from 'react'
import ExpertisePic from '../../../assets/images/Expertise.jpg'
import Buttons from '../../buttons/Buttons';
import ExpertiseLoader from '../../Common/skeleton/Expertise';
function Expertise() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 10000);
    }, []);
    return (
        <>
        {loading ? (<ExpertiseLoader />):(
        <div className='w-full relative top-64 z-1 flex gap-3 flex-wrap'>
            <div className='pl-10'>
                <h6 className='font-semibold mb-2'>Expertise</h6>
                <h1 className='w-[550px] font-bold text-[45px]'>Trusted Air Conditioning Systems & Refrigeration Solutions</h1>
                <h4 className='font-bold text-[25px] pt-4'>Quality Spare Parts & Compressors</h4>
                <p className='w-[550px] pt-5 tracking-wider'>With years of experience, we specialize in providing top-notch air conditioners, AC and Refrigerators spare parts and compressors.</p>

                <div className='flex gap-5 flex-wrap mt-10'>
                    <div>
                        <h3 className=' font-bold pb-4'>
                            Services
                        </h3>
                        <p className='w-[280px] text-justify text-[15px]'>
                            Air Conditioning, Refrigeration, and Home Appliance Spare Parts. Reliable Solutions for Installation, Maintenance, and Repair
                        </p>
                    </div>
                    <div>
                        <h3 className=' font-bold pb-4'>
                            Quality
                        </h3>
                        <p className='w-[250px] text-justify text-[15px]'>We prioritize delivering high-quality products and exceptional customer service to meet your needs.</p>
                    </div>
                </div>
                <div className='mt-10 pb-5'>
                   <Buttons />
                </div>
            </div>
            <div className='w-[50%] pl-10 flex justify-center'>
                <Image src={ExpertisePic} preview={false} className='w-auto' />
            </div>
        </div>)}
        </>
    )
}

export default Expertise;