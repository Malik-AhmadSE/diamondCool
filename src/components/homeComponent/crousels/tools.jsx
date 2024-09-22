import React from 'react';
import { Carousel } from 'antd';

// URLs or paths to your images
const imageUrls = [
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726937674/21_agzk8k.jpg',
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726937673/20_bp9job.jpg',
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726937673/19_hpz6cz.jpg',
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726937672/18_zuirfn.jpg'
];

function Tool() {
  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Tools</h2>
      <Carousel autoplay speed={300} className="w-full">
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

export default Tool;
