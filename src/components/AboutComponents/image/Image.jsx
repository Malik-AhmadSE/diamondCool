import { Image } from 'antd';
import React from 'react';

function ImageComponent() {
    return (
        <div className='w-full h-[150px] md:mt-36 '>
            <Image 
                src='https://res.cloudinary.com/dvf9mmcww/image/upload/v1727241513/poster_hljucd.jpg' 
                preview={false} 
                className='h-full w-full object-cover'
            />
        </div>
    );
}

export default ImageComponent;
