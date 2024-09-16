import React from 'react';
import { Carousel } from 'antd';

// URLs or paths to your images
const imageUrls = [
  'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
  'https://plus.unsplash.com/premium_photo-1672116453187-3aa64afe04ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
  'https://media.istockphoto.com/id/1961324209/photo/a-concept-where-various-creative-thoughts-are-formed-within-a-light-bulb-3d-rendering.webp?a=1&b=1&s=612x612&w=0&k=20&c=aIsQVOCPJlvUQk18ZRXbfa-PVFzdJm69KYHDnth-2hg=',
  'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'
];

function Refirgrator() {
  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Refirgrator Spare Parts</h2>
      <Carousel autoplay speed={300} className="w-full">
        {imageUrls.map((url, index) => (
          <div key={index} className="w-full h-96 flex items-center justify-center">
            <img
              src={url}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
              style={{ display: 'block' }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Refirgrator;
