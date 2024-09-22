import React from 'react';
import { Carousel } from 'antd';

// URLs or paths to your images
const imageUrls = [
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726937539/9_ipuhge.jpg',
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726937539/8_xwjlpp.jpg',
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726937538/7_hnm4s3.jpg',
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726937538/6_w4jytr.jpg'
  
];

function AirCond() {
  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Air Conditioners Spare Parts</h2>
      <Carousel autoplay speed={300} className="w-full">
        {imageUrls.map((url, index) => (
          <div key={index} className="w-full md:h-96 flex items-center justify-center">
            <img
              src={url}
              alt={`Image ${index + 1}`}
              className="w-full md:h-full h-[100px] "
              style={{ display: 'block' }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default AirCond;
