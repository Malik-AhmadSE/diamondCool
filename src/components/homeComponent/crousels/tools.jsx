import React from 'react';
import { Carousel } from 'antd';

// URLs or paths to your images
const imageUrls = [
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1727241097/19_v8a8iu.jpg',
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1727241087/20_gxp6l9.jpg',
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1727241083/18_bjeube.jpg',
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1727241079/17_qfkp2a.jpg'
];

function Tool() {
  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Tools</h2>
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

export default Tool;
