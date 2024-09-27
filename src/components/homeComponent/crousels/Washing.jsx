import React from 'react';
import { Carousel } from 'antd';

// URLs or paths to your images
const imageUrls = [
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1727241205/4_lscau2.jpg',
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1727241204/2_ifw9dm.jpg',
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1727241203/1_hfpznw.jpg',
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1727241204/3_koyawg.jpg'
];

function Washing() {
  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Washing Machine Spare Parts</h2>
      <Carousel autoplay speed={200} className="w-full">
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

export default Washing;
