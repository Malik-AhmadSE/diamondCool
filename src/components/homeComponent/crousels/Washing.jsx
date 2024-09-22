import React from 'react';
import { Carousel } from 'antd';

// URLs or paths to your images
const imageUrls = [
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726937586/4_jlar5i.jpg',
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726937586/3_s34kmf.jpg',
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726937585/1_hcznij.jpg',
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726937585/2_kvow5u.jpg'
];

function Washing() {
  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Washing Machine Spare Parts</h2>
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

export default Washing;
