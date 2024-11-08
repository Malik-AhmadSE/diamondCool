import { Image } from 'antd';
import React from 'react';

function ImageComponent() {
    return (
        <div className='w-full md:px-8 px-4 h-[150px] md:mt-36 mt-12'>
            <Image 
                src='https://res.cloudinary.com/dvf9mmcww/image/upload/v1727838142/contact_g5wcrd.jpg' 
                preview={false} 
                className='h-full w-full object-cover'
            />
        </div>
    );
}

export default ImageComponent;
