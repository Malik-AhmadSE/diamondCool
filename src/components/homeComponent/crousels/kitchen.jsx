import React from 'react';
import { Carousel } from 'antd';

// URLs or paths to your images
const imageUrls = [
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726937650/13_gqrwdc.jpg',
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726937650/12_sr3dke.jpg',
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726937649/11_ohwna4.jpg',
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726937649/10_rjanoh.jpg'
];

function Kitchen() {
  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Kitchen Spare Parts</h2>
      <Carousel autoplay speed={300} className="w-full">
        {imageUrls.map((url, index) => (
          <div key={index} className="w-full md:h-96 flex items-center justify-center">
            <img
              src={url}
              alt={`Image ${index + 1}`}
              className="w-full md:h-full h-[200px]"
              style={{ display: 'block' }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Kitchen;
