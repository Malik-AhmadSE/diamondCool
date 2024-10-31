import React, { useEffect, useState, useRef } from 'react';
import { Card } from 'antd';
import Buttons from '../../buttons/Buttons';
import CardsLoader from '../../Common/skeleton/Cards.jsx';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Cards = () => {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const cardsContainerRef = useRef(null);
  const buttonContainerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useGSAP(() => {
    if (!loading) {
      // Reset any existing animations
      gsap.set([cardsContainerRef.current.children, buttonContainerRef.current], { clearProps: "all" });

      // Animate cards
      gsap.from(cardsContainerRef.current.children, {
        opacity: 0,
        y: isMobile ? 30 : 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Animate button
      gsap.from(buttonContainerRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: buttonContainerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      });
    }
  }, [loading, isMobile]);

  return (
    <>
      {loading ? (
        <CardsLoader />
      ) : (
        <>
          <div ref={cardsContainerRef} className='w-full flex flex-wrap gap-8 justify-center mt-48 px-5 md:gap-16'>
            <Card
              hoverable
              bordered={false}
              style={{
                width: 300,
                height: 400,
              }}
              cover={
                <img
                  alt="cards"
                  src={
                    'https://res.cloudinary.com/dvf9mmcww/image/upload/v1725982999/MainImages/p76nsaveb5bjgcyl0rms.png'
                  }
                />
              }
            >
              <h1 className='font-bold text-[20px] pt-4 text-center'>
                Air Conditioning Spare Parts & Services
              </h1>
              <p className='text-center text-[12px] '>
                We offer a wide range of air conditioning spare parts to support
                installation, repair, and maintenance, ensuring your space stays
                cool and comfortable.
              </p>
            </Card>

            <Card
              hoverable
              bordered={false}
              style={{
                width: 300,
                height: 400,
              }}
              cover={
                <img
                  alt="cards"
                  src={
                    'https://res.cloudinary.com/dvf9mmcww/image/upload/v1725982992/MainImages/m3lmu6hnzrrgwv8qdan7.png'
                  }
                />
              }
            >
              <h1 className='font-bold text-[20px] pt-4 text-center'>
                Refrigeration Spare Parts & Services
              </h1>
              <p className='text-center text-[12px]'>
                We provide high-quality spare parts for the installation, repair,
                and maintenance of commercial and residential refrigeration
                systems.
              </p>
            </Card>

            <Card
              hoverable
              bordered={false}
              style={{
                width: 300,
                height: 400,
              }}
              cover={
                <img
                  alt="cards"
                  src={
                    'https://res.cloudinary.com/dvf9mmcww/image/upload/v1725982996/MainImages/bufx4hqujo0txey9iapw.png'
                  }
                />
              }
            >
              <h1 className='font-bold text-[20px] pt-4 text-center'>
                Home Appliance Services
              </h1>
              <p className='text-center text-[12px] '>
                From refrigerators to air conditioners, we specialize in providing
                high-quality spare parts to ensure your appliances function
                optimally.
              </p>
            </Card>
          </div>
          <div ref={buttonContainerRef} className='w-full mt-24 flex justify-center items-center'>
            <Buttons />
          </div>
        </>
      )}
    </>
  );
};

export default Cards;
