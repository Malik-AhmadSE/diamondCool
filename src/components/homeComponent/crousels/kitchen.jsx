import React from 'react';
import { Carousel } from 'antd';

// URLs or paths to your images

const imageUrls = [
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1727240855/11_l0u4jq.jpg',
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1727240854/12_lz5tow.jpg',
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1727240854/10_qosxg6.jpg',
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1727240852/9_ng6jkh.jpg'
];

function Kitchen() {
  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Kitchen Spare Parts</h2>
      <Carousel autoplay speed={200} className="w-full" arrows={true}>
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

export default Kitchen;
