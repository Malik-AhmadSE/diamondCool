import React, { useRef } from 'react';
import { Image } from 'antd';
import Quality from '../../../assets/images/icons/quality.png';
import Expert from '../../../assets/images/icons/experte.png';
import Set from '../../../assets/images/icons/set.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Serviceab() {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const cardsRef = useRef(null);

    useGSAP(() => {
        gsap.set([titleRef.current, descriptionRef.current, cardsRef.current], { clearProps: "all" });

        gsap.from(titleRef.current, {
            opacity: 0,
            y: 30,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.from(descriptionRef.current, {
            opacity: 0,
            y: 40,
            duration: 1.2,
            delay: 0.3,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.from(cardsRef.current.children, {
            opacity: 0,
            y: 50,
            stagger: 0.25,
            duration: 1,
            delay: 0.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: cardsRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse"
            }
        });
    });

    return (
        <div ref={containerRef} className='flex w-full justify-center items-center flex-wrap sm:pb-0'>
            <div className='w-[90%]'>
                <div className='flex flex-col md:flex-row gap-10 md:gap-16'>
                    <div ref={titleRef} className='w-full md:w-[45%]'>
                        <h1 className='font-bold text-3xl md:text-[42px] lg:text-[48px] leading-tight text-gray-900'>
                            Discover Our Premium Services for Installation & Maintenance
                        </h1>
                    </div>
                    <div ref={descriptionRef} className='w-full md:w-[55%] flex items-center'>
                        <p className='text-base md:text-lg lg:text-xl tracking-wide text-gray-700 leading-relaxed'>
                            Beyond our comprehensive product range, we deliver exceptional installation and maintenance services. Our certified team ensures precise appliance installation and optimal performance through regular maintenance, maximizing both efficiency and longevity.
                        </p>
                    </div>
                </div>

                <div ref={cardsRef} className='mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12'>
                    <div className='flex flex-col items-center text-center'>
                        <div className='bg-blue-50 p-4 rounded-full'>
                            <Image preview={false} width={45} src={Quality} alt="Quality Icon" />
                        </div>
                        <h4 className='font-bold text-2xl md:text-[26px] tracking-wide text-gray-900 mt-6 mb-4'>
                            Premium Quality Parts
                        </h4>
                        <p className='tracking-wide text-gray-600 leading-relaxed'>
                            We stock an extensive selection of premium spare parts for all major appliance brands. Our quality-assured components ensure optimal performance and extended appliance lifespan.
                        </p>
                    </div>

                    <div className='flex flex-col items-center text-center'>
                        <div className='bg-blue-50 p-4 rounded-full'>
                            <Image preview={false} width={35} src={Expert} alt="Expert Icon" />
                        </div>
                        <h4 className='font-bold text-2xl md:text-[26px] tracking-wide text-gray-900 mt-6 mb-4'>
                            Expert Consultation
                        </h4>
                        <p className='tracking-wide text-gray-600 leading-relaxed'>
                            Our seasoned professionals provide tailored recommendations and expert guidance, ensuring you receive the most effective solutions for your specific appliance needs.
                        </p>
                    </div>

                    <div className='flex flex-col items-center text-center'>
                        <div className='bg-blue-50 p-4 rounded-full'>
                            <Image preview={false} width={35} src={Set} alt="Set Icon" />
                        </div>
                        <h4 className='font-bold text-2xl md:text-[26px] tracking-wide text-gray-900 mt-6 mb-4'>
                            Professional Maintenance
                        </h4>
                        <p className='tracking-wide text-gray-600 leading-relaxed'>
                            Our skilled technicians deliver swift, efficient diagnostics and repairs, minimizing downtime and ensuring your appliances maintain peak performance levels.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Serviceab;
