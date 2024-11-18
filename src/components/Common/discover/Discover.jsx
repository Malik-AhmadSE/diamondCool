import React, { useRef } from 'react';
import { Button, Card, Typography } from 'antd';
import Buttons from '../../buttons/Buttons';
import Air3 from '../../../assets/images/airproducts/air15.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Discover() {
  const cardRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    gsap.from(cardRef.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none reverse"
      }
    });

    gsap.from(textRef.current, {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 75%",
        end: "top 45%",
        toggleActions: "play none none reverse"
      }
    });

    gsap.from(imageRef.current, {
      opacity: 0,
      x: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 75%",
        end: "top 45%",
        toggleActions: "play none none reverse"
      }
    });
  }, []);

  return (
    <div className='w-full md:px-8  px-4 mt-56 flex justify-center item-center mb-[150px]'>
       <Card 
        ref={cardRef}
        hoverable 
        className='w-full  h-auto !overflow-hidden !p-0' 
      >
        <div className='flex flex-col md:flex-row justify-between'>
          <div ref={textRef} className='flex flex-col justify-center p-5 md:p-10'>
            <h1 className='font-bold text-[32px] md:text-[45px]'>
              Discover Our Amazing Product Range
            </h1>
            <p className='pt-5 tracking-wider pb-10 text-[14px] md:text-[16px]'>
              Explore our wide selection of high-quality Air Conditioners, Refrigerators, Washing Machines and more.
            </p>
            <Buttons />
          </div>
          <img
            ref={imageRef}
            alt="Product"
            src={Air3}
            className='!w-[80%] md:!w-[320px] self-center'
          />
        </div>
      </Card>
    </div>
  );
}

export default Discover;
