import { Image } from 'antd';
import React, { useRef } from 'react';
import ExpertisePic from '../../../assets/images/airproducts/air20.png';
import Buttons from '../../buttons/Buttons';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Reliable() {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const contentRef = useRef(null);
    const imageRef = useRef(null);
    const cardsRef = useRef(null);

    useGSAP(() => {
        // Reset any existing animations
        gsap.set([titleRef.current, contentRef.current, imageRef.current, cardsRef.current], { clearProps: "all" });

        // Title section animation
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

        // Content animation
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

        // Cards animation with stagger
        gsap.from(cardsRef.current.children, {
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 0.8,
            delay: 0.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });

        // Image animation
        gsap.from(imageRef.current, {
            opacity: 0,
            x: 50,
            duration: 1,
            delay: 0.7,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });
    });

    return (
        <div ref={containerRef} className='w-full md:px-8 md:mt-[400px] mt-8 z-1 flex justify-center items-center'>
           <div className='flex flex-col md:flex-row gap-6 md:gap-3 px-4 md:px-0 w-full md:w-[95%] max-w-[1440px]'>
           <div className='w-full md:w-[50%] space-y-6'>
                <div ref={titleRef} className='space-y-3'>
                    <h6 className='font-semibold text-sm md:mb-2 text-blue-600 uppercase tracking-wider'>Reliable</h6>
                    <h1 className='text-[32px] leading-[1.2] md:text-[45px] font-bold'>Quality Spare Parts for Long-Lasting Performance</h1>
                </div>
                
                <div ref={contentRef} className='space-y-3'>
                    <p className='text-base md:w-[550px] text-gray-600 leading-relaxed'>
                        At Diamond Cool, we offer top-tier spare parts that ensure long-lasting performance and durability. Our extensive product range guarantees that you'll find exactly what you need.
                    </p>
                </div>

                <div ref={cardsRef} className='grid grid-cols-1 gap-6 md:flex md:flex-row md:gap-5 md:flex-wrap mt-4 md:mt-10'>
                    <div className='bg-white shadow-sm rounded-xl p-6 border border-gray-100 w-full md:w-[280px] md:bg-transparent md:p-0 md:border-none md:shadow-none'>
                        <h3 className='font-bold mb-3 md:pb-4 text-xl text-gray-800'>Premium Quality</h3>
                        <p className='text-gray-600 text-[15px] leading-relaxed'>
                            Choose from our wide selection of spare parts for all leading brands and models.
                        </p>
                    </div>
                    <div className='bg-white shadow-sm rounded-xl p-6 border border-gray-100 w-full md:w-[280px] md:bg-transparent md:p-0 md:border-none md:shadow-none'>
                        <h3 className='font-bold mb-3 md:pb-4 text-xl text-gray-800'>Expert Advice</h3>
                        <p className='text-gray-600 text-[15px] leading-relaxed'>
                            Our team is always ready to assist with expert advice and personalized recommendations.
                        </p>
                    </div>
                </div>
                <div className='mt-8 md:mt-10'>
                    <Buttons />
                </div>
            </div>
            <div ref={imageRef} className='w-full md:w-[50%] flex justify-center items-center md:pl-10 mt-12 md:mt-0'>
                <Image 
                    src={ExpertisePic} 
                    preview={false} 
                    className='w-[85%] md:w-auto object-contain rounded-lg shadow-lg md:shadow-none'
                />
            </div>
           </div>
        </div>
    );
}

export default Reliable;
