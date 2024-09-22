import React from 'react';
import { Carousel } from 'antd';
import Pic from '../../../assets/images/pic.jpg';
// URLs or paths to your images
const imageUrls = [
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726937571/15_o2gyqv.jpg',
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726937571/17_fl1yrf.jpg',
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726937571/16_wuoiqh.jpg',
  'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726937570/14_fpqyr1.jpg'
];

function Refirgrator() {
  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Refirgrator Spare Parts</h2>
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

export default Refirgrator;
