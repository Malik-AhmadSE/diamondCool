import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function QualityQoutes() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    gsap.from(subtitleRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    gsap.from(titleRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.2,
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
      delay: 0.4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  });

  return (
    <div ref={containerRef} className='w-full md:px-8 px-4 flex justify-center items-center'>
      <div className='md:mt-40 mt-20 flex flex-col justify-center items-center text-center'>
        <h6 ref={subtitleRef} className='font-semibold mb-2 text-lg md:text-base'>Quality</h6>
        <h1 ref={titleRef} className='w-full max-w-[750px] font-bold text-[25px] text-2xl md:text-[45px]'>
          Find Your Perfect Appliance
        </h1>
        <p ref={contentRef} className='w-full max-w-[920px] pt-5 tracking-wider text-sm md:text-base'>
          Discover a wide range of refrigerators, air conditioners, washing machines, and spare parts.
        </p>
      </div>
    </div>
  );
}

export default QualityQoutes;
