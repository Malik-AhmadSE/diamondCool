import React from 'react';
import { Flex, Typography, Image, Carousel } from 'antd'; 
import { Tooltip } from 'antd';
import {AmazonSquareFilled} from '@ant-design/icons';
const imageUrls = [
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1728187682/1_htil0p.png',
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1728187683/2_p1o8t4.png',
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1728187683/3_a8bxhw.png',
  
];
function Brands() {
  return (
    <div className="!w-screen flex-col items-center justify-center mb-7">
      
      <Typography.Title className='text-[45px] font-bold text-center pt-10'>
        Brands
      </Typography.Title>
      <Flex className='w-full flex bg-logo bg-cover justify-center items-center md:gap-40 gap-10 '>
      <Tooltip title="Buy from noon" ><a href='https://www.noon.com/seller/p-149548/?offer_code=ze536cca4ff792a1163e9z-1&sku=ZE536CCA4FF792A1163E9Z'></a></Tooltip>
        <Tooltip title="Buy from Amazon" ><a href='https://www.amazon.ae/s?me=A1RG19Q6S3VY4C&marketplaceID=A2VIGQ35RCS4UG'> <AmazonSquareFilled  className='text-[150px] text-col'/></a></Tooltip>
      </Flex>
      <Carousel autoplay speed={200} className="w-full" >
        {imageUrls.map((url, index) => (
          <div key={index} className="md:h-56 flex items-center justify-center">
            <img
              src={url}
              alt={`Image ${index + 1}`}
              className="md:w-[95%] w-[90%] md:h-full h-[100px] object-contain"
              style={{ display: 'block' }}
            />
          </div>
        ))}
      </Carousel>
      <div className="overflow-hidden">
      <div className="whitespace-nowrap animate-marquee md:text-xl text-[12px] font-bold italic text-green-700" >
        <span className="mx-4">Diamond Cool Aircondition Spare Parts Trading LLC</span>
        <span className="mx-4">Diamond Cool Aircondition Spare Parts Trading LLC</span>
        <span className="mx-4">Diamond Cool Aircondition Spare Parts Trading LLC</span>
        <span className="mx-4">Diamond Cool Aircondition Spare Parts Trading LLC</span>
      </div>
    </div>
    </div>
  );
}

export default Brands;



// 
// 
// 