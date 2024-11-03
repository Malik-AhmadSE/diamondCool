import React, { useEffect, useRef } from 'react';
import { Flex, Typography, Image, Carousel } from 'antd';
import { Tooltip } from 'antd';
import { AmazonOutlined } from '@ant-design/icons';
import Pic from '../../../assets/noon.svg';
import Amazon from '../../../assets/logos/amazon-ar21.svg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const imageUrls = [
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1728187682/1_htil0p.png',
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1728187683/2_p1o8t4.png',
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1728187683/3_a8bxhw.png',
];

function Brands() {
  const headerRef = useRef(null);
  const storesRef = useRef(null);
  const carouselRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    
    // Header animation
    gsap.fromTo(headerRef.current, 
      {
        opacity: 0,
        y: isMobile ? 20 : 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          once: true
        }
      }
    );

    // Store logos animation
    const storeElements = storesRef.current.children;
    Array.from(storeElements).forEach((store, index) => {
      gsap.fromTo(store,
        {
          opacity: 0,
          x: isMobile ? -30 : -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: store,
            start: "top 85%",
            once: true
          }
        }
      );
    });

    // Carousel animation
    gsap.fromTo(carouselRef.current,
      {
        opacity: 0,
        scale: 0.9,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: carouselRef.current,
          start: "top 85%",
          once: true
        }
      }
    );

    // Marquee animation
    gsap.fromTo(marqueeRef.current,
      {
        opacity: 0,
        y: isMobile ? 15 : 25,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: marqueeRef.current,
          start: "top 90%",
          once: true
        }
      }
    );

  }, []);

  return (
    <div className="md:!w-full flex-col -mt-2 py-4 items-center justify-center mb-7">
      <div className='flex justify-center items-center'>
        <Flex className='md:!w-[96%] !w-screen h-full flex bg-logo bg-cover justify-center items-center gap-10'>
          <div ref={headerRef} className="flex !h-full justify-start !items-center relative top-2 mb-4 w-full">
            <span className="text-sm md:text-[45px] text-white px-10">Visit Our Online Stores</span>
          </div>
          
          <div ref={storesRef} className="flex flex-row items-center justify-center gap-8 w-full relative overflow-hidden">
            <div className="absolute inset-0 bg-cover animate-pulse"></div>
            <Tooltip title="Buy from noon" className="flex items-center justify-center relative z-10">
              <a href='https://www.noon.com/seller/p-149548/?offer_code=ze536cca4ff792a1163e9z-1&sku=ZE536CCA4FF792A1163E9Z' 
                 className="flex items-center justify-center hover:scale-105 transition-all duration-300 hover:brightness-110">
                <Image 
                  alt='Noon Store' 
                  src={Pic} 
                  preview={false} 
                  className='md:!w-[150px] !w-[120px] hover:opacity-90 transition-all duration-300' 
                />
              </a>
            </Tooltip>
            
            <Tooltip title="Buy from Amazon" className="flex items-center justify-center relative z-10">
              <a href='https://www.amazon.ae/s?me=A1RG19Q6S3VY4C&marketplaceID=A2VIGQ35RCS4UG' 
                 className="flex items-center justify-center hover:scale-105 transition-all duration-300 hover:brightness-110">
                <Image 
                  src={Amazon} 
                  alt="Amazon Store" 
                  preview={false}
                  className='md:!w-[150px] !w-[120px] hover:opacity-90 transition-all duration-300'
                />
              </a>
            </Tooltip>
          </div>
        </Flex>
      </div>

      <div ref={carouselRef}>
        <Carousel autoplay speed={200} className="w-screen md:!w-screen md:px-[24px] -mt-3">
          {imageUrls.map((url, index) => (
            <div key={index} className="w-full md:h-56 flex items-center justify-center">
              <img
                src={url}
                alt={`Image ${index + 1}`}
                className="!w-[96%] md:!w-[96.7%] md:h-full h-[100px] object-contain"
                style={{ display: 'block' }}
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className='w-full md:!px-6 -mt-2'>
        <div className="overflow-hidden">
          <div ref={marqueeRef} className="whitespace-nowrap animate-marquee text-xl font-bold italic text-green-700">
            <span className="mx-2">Diamond Cool Aircondition Spare Parts Trading LLC</span>
            <span className="mx-2">Diamond Cool Aircondition Spare Parts Trading LLC</span>
            <span className="mx-2">Diamond Cool Aircondition Spare Parts Trading LLC</span>
            <span className="mx-2">Diamond Cool Aircondition Spare Parts Trading LLC</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;