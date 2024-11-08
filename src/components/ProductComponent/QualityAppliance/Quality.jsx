import React, { useRef } from 'react';
import Buttons from '../../buttons/Buttons';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Quality() {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const contentRef = useRef(null);
    const buttonRef = useRef(null);

    useGSAP(() => {
        gsap.set([titleRef.current, contentRef.current, buttonRef.current], { clearProps: "all" });

        gsap.from(titleRef.current, {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 95%",
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
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.from(buttonRef.current, {
            opacity: 0,
            y: 20,
            duration: 0.8,
            delay: 0.6,
            ease: "back.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });

    return (
        <div ref={containerRef} className='w-full px-8 md:mt-56 mt-32  z-1 flex justify-center items-center'>
            <div className='w-full  flex flex-col md:flex-row gap-2'>
                <div className=''>
                    <h1 ref={titleRef} className='text-[30px] text-justify md:text-left md:text-[45px] font-bold'>
                        Quality Appliances for Every Home
                    </h1>
                </div>
                <div className='w-full md:w-1/2 md:pl-10 flex flex-col justify-center'>
                    <p ref={contentRef} className='pt-5 text-justify md:text-left tracking-wider text-base md:text-lg'>
                        Welcome to our store, where you'll find a wide selection of refrigerators, air conditioners, washing machines, and spare parts. We offer top-quality products at affordable prices, ensuring your home is equipped with the best appliances.
                    </p>
                    <div ref={buttonRef} className='mt-10 pb-10'>
                        <Buttons />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Quality;
