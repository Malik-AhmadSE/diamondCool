import React from 'react';
import { Carousel } from 'antd';

// URLs or paths to your images
const imageUrls = [
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1727240637/5_chiz7o.jpg',
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1727240637/7_uexwvx.jpg',
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1727240636/8_bad5t4.jpg',
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1727240636/6_fegnxr.jpg'
  
];

function AirCond() {
  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Air Conditioners Spare Parts</h2>
      <Carousel autoplay speed={200} className="w-full custom-carousel" arrows={true} >
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
  );
}

export default AirCond;
