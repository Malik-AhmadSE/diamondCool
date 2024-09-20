import { Image } from 'antd';
import React from 'react';

function ImageComponent() {
    return (
        <div className='w-full h-[650px] md:mt-36 px-10'>
            <Image 
                src='https://res.cloudinary.com/dvf9mmcww/image/upload/v1725969053/MainImages/cugu6t9feamhonq9i7j3.jpg' 
                preview={false} 
                className='h-full w-full object-cover'
            />
        </div>
    );
}

export default ImageComponent;
