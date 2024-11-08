import { Button, Image } from 'antd';
import React, { useRef } from 'react';
import Buttons from '../../buttons/Buttons';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Hero() {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const contentRef = useRef(null);
    const buttonRef = useRef(null);

    useGSAP(() => {
        // Reset any existing animations
        gsap.set([titleRef.current, contentRef.current, buttonRef.current], { clearProps: "all" });

        // Title animation
        gsap.from(titleRef.current, {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power3.out",
        });

        // Content animation
        gsap.from(contentRef.current, {
            opacity: 0,
            y: 30,
            duration: 1,
            delay: 0.3,
            ease: "power2.out",
        });

        // Button animation
        gsap.from(buttonRef.current, {
            opacity: 0,
            y: 20,
            duration: 0.8,
            delay: 0.6,
            ease: "back.out",
        });
    });

    return (
        <div ref={containerRef} className='w-full md:px-8 px-4 mt-32 md:mt-44 flex justify-center items-center'>
           <div className='w-full z-1 flex gap-6 flex-wrap md:flex-nowrap'>
                <div className='w-full md:w-[600px]' ref={titleRef}>
                    <h1 className='font-bold text-justify text-[32px] md:text-[45px] leading-tight text-center md:text-left'>
                        Find the Perfect Spare Parts for Your Appliances
                    </h1>
                </div>
                <div className='w-full md:w-[45%] md:pl-10 flex flex-col justify-center items-center md:items-start'>
                    <p ref={contentRef} className='pt-5 tracking-wider text-justify text-center text-base md:text-lg'>
                        Welcome to Diamond Cool, your trusted partner for high-quality spare parts for refrigerators, air conditioners, and washing machines. We are dedicated to providing reliable, durable, and affordable solutions for all your home appliance needs.
                    </p>
                    <div ref={buttonRef} className='pt-8 md:pt-10 w-full flex justify-center md:justify-start'>
                        <Buttons />
                    </div>
                </div>
           </div>
        </div>
    );
}

export default Hero;
