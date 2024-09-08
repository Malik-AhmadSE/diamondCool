import React,{useEffect,useState} from 'react'
import { Card, Rate } from 'antd';
import { Avatar } from 'antd';
import Sarah from '../../../assets/images/sarah.jpeg';
import David from '../../../assets/images/david.jpeg';
import Maria from '../../../assets/images/maria.jpeg';
import CustomerLoader from '../../Common/skeleton/Customer.jsx';
function Customer() {
  
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 10000);
  }, []);
  return (
    <>
    {
        loading ? (<CustomerLoader/>):(
    <div className='relative top-[850px] pl-10'>
      <h1 className='w-[550px] font-bold text-[45px]'>Customer Testimonials</h1>
      <p>Hear What Our Satisfied Customers Have to Say</p>
      <div className='relative w-full flex gap-16 justify-center mt-10'>
        <Card
          hoverable
          bordered={false}
          style={{
            width: 350,
            height: 400,
          }}
        >
          <Rate allowHalf defaultValue={4.5} />
          <p className='text-justify italic text-[15px] mt-10'> I was able to find the exact spare part I needed for my air conditioner here. The quality is excellent, and my AC is working like new again. The customer service team was very helpful in guiding me to the right part.</p>
          <Avatar size={60} src={<img src={Sarah} alt="avatar" />} className='mt-16' />
          <h4 className='font-semibold text-[15px] pt-4'>Sarah M </h4>
          <p className='text-[12px] italic pl-4'>House wife</p>
        </Card>
        <Card
          hoverable
          bordered={false}
          style={{
            width: 350,
            height: 400,
          }}
        >
          <Rate allowHalf defaultValue={4} />
          <p className='text-justify italic text-[15px] mt-10'>When my washing machine broke down, I was worried about finding the right replacement parts. Luckily, I found this store, and they had everything I needed. The parts arrived quickly and were easy to install. My machine is back up and running smoothly!</p>
          <Avatar size={60} src={<img src={David} alt="avatar" />} className='mt-10' />
          <h4 className='font-semibold text-[15px] pt-4'>David K </h4>
          <p className='text-[12px] italic pl-4'>Bank Cashier</p>
        </Card>
        <Card
          hoverable
          bordered={false}
          style={{
            width: 350,
            height: 400,
          }}
        >
          <Rate allowHalf defaultValue={4.5} />
          <p className='text-justify italic text-[15px] mt-10'>I had been struggling with my refrigerator for weeks until I found this service. They provided me with high-quality spare parts and even guided me through the installation process. My fridge is now cooling perfectly again. Highly recommended!</p>
          <Avatar size={60} src={<img src={Maria} alt="avatar" />} className='mt-10' />
          <h4 className='font-semibold text-[15px] pt-4'>Maria</h4>
          <p className='text-[12px] italic pl-4'>Graphic Designer</p>
        </Card>
      </div>
    </div>
     )}
        </>
  )
}

export default Customer;