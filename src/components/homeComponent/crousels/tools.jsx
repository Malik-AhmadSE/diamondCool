import React, { useRef, useEffect, useState } from 'react';
import { Carousel } from 'antd';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// URLs or paths to your images
const imageUrls = [
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1727241097/19_v8a8iu.jpg',
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1727241087/20_gxp6l9.jpg',
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1727241083/18_bjeube.jpg',
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1727241079/17_qfkp2a.jpg'
];

function Tool() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const carouselRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useGSAP(() => {
    // Reset any existing animations
    gsap.set([titleRef.current, carouselRef.current], { clearProps: "all" });

    // Title animation
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    // Carousel animation
    gsap.from(carouselRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  });

  return (
    <div ref={containerRef} className="w-full md:px-8 px-4 text-center">
      <h2 ref={titleRef} className="md:text-4xl text-sm font-bold mb-4 uppercase">Tools</h2>
      <div ref={carouselRef}>
        <Carousel autoplay speed={200} className="w-full custom-carousel" arrows={true}>
          {imageUrls.map((url, index) => (
            <div key={index} className="w-full md:h-96 flex items-center justify-center">
              <img
                src={url}
                alt={`Image ${index + 1}`}
                className="w-full md:h-full h-[100px]"
                style={{ display: 'block' }}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Tool;
