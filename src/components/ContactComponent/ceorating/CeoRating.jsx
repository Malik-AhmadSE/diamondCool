import { Avatar, Rate, Typography } from 'antd';
import React, { useRef, useEffect, useState } from 'react';
import Icon from '../../../../public/logofooter.jpg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function CeoRating() {
    const ratingRef = useRef(null);
    const headingRef = useRef(null);
    const profileRef = useRef(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useGSAP(() => {
        // Rating animation
        gsap.from(ratingRef.current, {
            opacity: 0,
            y: isMobile ? 20 : 30,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ratingRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });

        // Heading animation
        gsap.from(headingRef.current, {
            opacity: 0,
            y: isMobile ? 30 : 50,
            duration: 1.2,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: headingRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });

        // Profile section animation
        gsap.from(profileRef.current, {
            opacity: 0,
            y: isMobile ? 20 : 40,
            duration: 1,
            delay: 0.4,
            ease: "power3.out",
            scrollTrigger: {
                trigger: profileRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });
    }, [isMobile]);

    return (
        <div className='w-full md:px-8 px-4 flex flex-col justify-center items-center text-center'>
            <h6 ref={ratingRef} className='font-semibold mb-2'>
                <Rate defaultValue={5} />
            </h6>
            <h1 ref={headingRef} className='w-full md:w-[900px] font-bold md:text-[45px] text-[25px]'>
                We Diamond Cool deliver high-quality spare parts  Air conditions, Refrigerators, Washing Machines and Tools ensuring your appliances run smoothly and reliably.
            </h1>
            <div ref={profileRef} className='w-full md:w-[50%] mt-5 flex flex-row gap-5 items-center justify-center'>
                <div className='flex gap-6 items-center justify-center'>
                    <Avatar size={50} src={Icon} alt="avatar" />
                    <div className='flex flex-col gap-1 justify-start items-start'>
                        <Typography className='font-bold text-[12px]'>Diamond Cool</Typography>
                        <Typography className='font-medium text-[10px]'>Owner</Typography>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CeoRating;
