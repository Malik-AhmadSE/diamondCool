import { Image } from 'antd';
import React from 'react';

function ImageComponent() {
    return (
        <div className='w-full h-[650px] md:mt-72 sm:-mt-0  -mt-20 flex justify-center items-center'>
            <Image 
                src='https://res.cloudinary.com/dvf9mmcww/image/upload/v1727838055/Group_9_io5y0j.png' 
                preview={false} 
                className='h-full w-full object-cover'
            />
        </div>
    );
}

export default ImageComponent;
