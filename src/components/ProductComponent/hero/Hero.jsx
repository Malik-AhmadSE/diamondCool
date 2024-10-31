import { Image } from 'antd';
import React from 'react';

function ImageComponent() {
    return (
        <div className='w-full flex justify-center items-center'>
            <div className='w-[98.2%]  max-w-[1210px] h-[650px] md:mt-52 sm:-mt-0 mt-32'>
                <Image 
                    src='https://res.cloudinary.com/dvf9mmcww/image/upload/v1727838055/Group_9_io5y0j.png' 
                    preview={false} 
                    className='h-full w-full object-cover'
                />
            </div>
        </div>
    );
}

export default ImageComponent;
