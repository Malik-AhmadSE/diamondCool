import React from 'react';
import { Flex, Typography, Image, Carousel } from 'antd';
import { Tooltip } from 'antd';
import { AmazonSquareFilled } from '@ant-design/icons';
import Pic from '../../../assets/noon.svg';
const imageUrls = [
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1728187682/1_htil0p.png',
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1728187683/2_p1o8t4.png',
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1728187683/3_a8bxhw.png',

];
function Brands() {
  return (
    <div className="md:!w-full flex-col items-center justify-center mb-7">
      <div className='flex justify-center items-center'>
  <Flex className='md:!w-[97.5%] !w-[93%] h-full flex bg-logo bg-cover justify-center items-center gap-10'>
    <div className="flex !h-full justify-start !items-center relative top-2 mb-4 w-full">
      <span className=" text-sm md:text-[45px] text-white px-4 ">Visit our online stores</span>
    </div>
    
    <div className="flex flex-row items-center gap-10">
      <Tooltip title="Buy from noon">
        <a href='https://www.noon.com/seller/p-149548/?offer_code=ze536cca4ff792a1163e9z-1&sku=ZE536CCA4FF792A1163E9Z'>
          <Image alt='img' src={Pic} preview={false} className='md:!w-[250px] mt-1 !w-[150px]' />
        </a>
      </Tooltip>
      
      <Tooltip title="Buy from Amazon">
        <a href='https://www.amazon.ae/s?me=A1RG19Q6S3VY4C&marketplaceID=A2VIGQ35RCS4UG'>
          <AmazonSquareFilled className='md:text-[70px] text-[20px] mr-4 text-col' />
        </a>
      </Tooltip>
    </div>
  </Flex>
</div>


      <Typography.Title className='text-[45px] font-bold text-center pt-10'>
        Brands
      </Typography.Title>

      <Carousel autoplay speed={200} className="w-screen" >
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