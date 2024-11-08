import { Image } from 'antd';
import React, { useRef } from 'react';
import ExpertisePic from '../../../assets/images/airproducts/air16.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Expertise() {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const contentRef = useRef(null);
    const imageRef = useRef(null);

    useGSAP(() => {
        gsap.set([titleRef.current, contentRef.current, imageRef.current], { clearProps: "all" });

        gsap.from(titleRef.current, {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.from(contentRef.current, {
            opacity: 0,
            y: 40,
            duration: 1,
            delay: 0.3,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.from(imageRef.current, {
            opacity: 0,
            x: 50,
            duration: 1,
            delay: 0.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });
    });

    return (
        <div ref={containerRef} className='w-full md:px-8 md:mt-48 mt-20 z-1 flex justify-center items-center'>
            <div className='w-full flex flex-wrap md:flex-nowrap gap-8 md:gap-12 px-4 md:px-0'>
                <div className='w-full md:w-1/2 space-y-6'>
                    <h1 
                        ref={titleRef}
                        className='font-bold text-[32px] md:text-[45px] leading-tight text-center md:text-left'
                    >
                        Expertise that Keeps Your Machines in Optimal Condition
                    </h1>
                    <p 
                        ref={contentRef}
                        className='text-base md:text-lg tracking-wider text-justify md:text-left text-gray-700 text-center md:text-left'
                    >
                        With years of experience in the appliance industry, Diamond Cool understands what it takes to keep your machines running smoothly. Our expertise ensures that you receive top-quality spare parts and expert advice for optimal performance.
                    </p>
                </div>
                <div className='w-full md:w-1/2 flex justify-center items-center md:justify-end'>
                    <div ref={imageRef} className='w-full max-w-[500px]'>
                        <Image 
                            src={ExpertisePic} 
                            preview={false} 
                            className='w-full h-auto object-cover rounded-lg shadow-lg' 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;
