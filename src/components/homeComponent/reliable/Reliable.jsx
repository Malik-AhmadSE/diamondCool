import React,{useEffect,useState} from 'react'
import ReliableLoader from '../../Common/skeleton/Reliable';
function Reliable() {
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 10000);
    }, []);
  return (
    <>
        {loading ? (<ReliableLoader />):(
    <div className='relative top-96 flex flex-col justify-center items-center text-center'>
        <h6 className='font-semibold mb-2'>Reliable</h6>
        <h1 className='w-[750px] font-bold text-[45px]'>Expert Air Conditioning, Refrigeration & Home Appliance Spare Parts Solutions</h1>
        <p className='w-[920px] pt-5 tracking-wider'>We supply top-quality spare parts for air conditioning, refrigeration, and home appliances to meet all your repair and maintenance needs. Our dedicated team ensures you receive reliable components that guarantee your comfort and satisfaction.</p>
    </div>)}
    </>
  )
}

export default Reliable;