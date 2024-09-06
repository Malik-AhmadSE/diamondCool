import React from 'react';
import { Button, Card, Flex, Typography } from 'antd';
import { RightOutlined } from '@ant-design/icons';
const imgStyle = {
  display: 'block',
  width: 273,
};
const Divs = () => (
  <div className='flex  justify-center gap-10 items-center p-10'>
    <Card
    hoverable
    styles={{
      body: {
        padding: 0,
        
      },
    }}
   className='!w-[660px] h-[400px]'
  >
    <Flex className='h-full items-center'>
      
      <Flex
        vertical
        style={{
          padding: 12,
        }}
      >
        <h6 className='font-semibold mb-2'>Reliable</h6>
        <h4 className='font-bold text-[25px] pt-2'>Shop by Category</h4>
        <p className=' pt-5 tracking-wider'>Explore our selection of top-quality appliances.</p>
      <div className='pt-5 -ml-1'>
      <Button type='text' icon={<RightOutlined />} iconPosition='end' className='font-semibold text-black '>View</Button>
      </div>
      </Flex>
      <img
        alt="avatar"
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        className='w-[406px] ml-15 rounded-e-md'
      />
    </Flex>
  </Card>
  <Card
    hoverable
    style={{
      width: 250,
    }}
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
          className='!pl-2'
      >
        <h6 className='font-semibold mb-1'>Affordability</h6>
        <h4 className='font-bold text-[25px] pt-1'>Great Deals Here</h4>
        <p className=' pt-1 tracking-wider'>Find the best prices on high-quality appliances.</p>
        <div className='pt-2 -ml-1'>
      <Button type='text' icon={<RightOutlined />} iconPosition='end' className='font-semibold text-black '>Shop</Button>
      </div>
      </Flex>
    {/* Image after content */}
    <div style={{ marginTop: '5px' }}>
      <img 
        alt="example" 
       src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        style={{ width: '100%' }}
      />
    </div>
  </Card>
  <Card
    hoverable
    style={{
      width: 250,
    }}
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
    <div style={{ marginTop: '5px' }}>
      <img 
        alt="example" 
       src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        style={{ width: '100%' }}
      />
    </div>
  </Card>
  </div>
);
export default Divs;