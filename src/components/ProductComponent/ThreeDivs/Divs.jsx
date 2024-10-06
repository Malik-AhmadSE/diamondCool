import React from 'react';
import { Button, Card, Flex, Typography } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import Air1 from '../../../assets/images/airproducts/air20.png';
import Air2 from '../../../assets/images/airproducts/air16.png';
import Air3 from '../../../assets/images/airproducts/air9.png';

const Divs = () => (
 <div className='w-full flex items-center justify-center'>
   <div className='flex flex-wrap md:flex-nowrap  !justify-center gap-10 !items-center p-10'>
    <Card
    hoverable
    styles={{
      body: {
        padding: 0,
        
      },
    }}
   className='md:!w-[660px] w-[100%] md:h-[400px] h-full'
  >
    <Flex className='h-full items-center flex flex-wrap md:flex-nowrap'>
      
      <Flex
        vertical
        style={{
          padding: 12,
        }}
      
      >
        <h6 className='font-semibold mb-2'>Reliable</h6>
        <h4 className='font-bold text-[30px] pt-2'>Shop by Category</h4>
        <p className=' pt-5 tracking-wider'>Explore our selection of top-quality appliances.</p>
      <div className='pt-5 -ml-1'>
      <Button type='text' icon={<RightOutlined />} iconPosition='end' className='font-semibold text-black '>View</Button>
      </div>
      </Flex>
      <img
        alt="avatar"
        src={Air1}
        className='md:w-[320px] w-full ml-15 rounded-b-md md:rounded-b-none md:rounded-e-md'
      />
    </Flex>
  </Card>
  <Card
    hoverable
    className='md:w-[250px] w-full'
    styles={{
      body: {
        padding:0,
        overflow: 'hidden',
      },
    }}
  >
    <Flex
        vertical
        style={{
          padding: 2,
        }}
          className='!pl-2'
      >
        <h6 className='font-semibold mb-1'>Affordability</h6>
        <h4 className='font-bold text-[25px] pt-1'>Great Deals Here</h4>
        <p className=' pt-1 tracking-wider'>Find the best prices on high-quality appliances.</p>
        <div className='pt-2 -ml-1'>
      <Button type='text' icon={<RightOutlined />} iconPosition='end' className='font-semibold text-black '>Shop</Button>
      </div>
      </Flex>

    <div style={{ marginTop: '4px' }}>
      <img 
        alt="Image001" 
        src={Air3}
        style={{ width: '100%',height:'240px' }}/>
    </div>
  </Card>
  <Card
    hoverable
    className='md:w-[250px] w-full'
    styles={{
      body: {
        padding:0,
        overflow: 'hidden',
      },
    }}
  >
    <Flex
        vertical
        style={{
          padding: 5,
        }}
        className='!pl-2'>
        <h6 className='font-semibold mb-1'>Convenience</h6>
        <h4 className='font-bold text-[25px] pt-1'>Online Shopping</h4>
        <p className=' pt-1 tracking-wider'>Browse and purchase appliances from the comfort of your home.</p>
        <div className='pt-2 -ml-1'>
      <Button type='text' icon={<RightOutlined />} iconPosition='end' className='font-semibold text-black '>Buy</Button>
      </div>
      </Flex>
    {/* Image after content */}
    <div style={{ marginTop: '4px' }}>
      <img 
        alt="example" 
       src={Air2}
        style={{ width: '100%',height:'240px' }}
      />
    </div>
  </Card>
  </div>
 </div>
);
export default Divs;