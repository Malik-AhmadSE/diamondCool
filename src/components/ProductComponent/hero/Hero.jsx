import { Image } from 'antd';
import React from 'react';

function ImageComponent() {
    return (
        <div className='w-full h-[650px] md:mt-36 mt-28 px-10'>
            <Image 
                src='https://res.cloudinary.com/dvf9mmcww/image/upload/v1725983019/MainImages/ddulcxa3c3o3pq9qdyov.png' 
                preview={false} 
                className='h-full w-full object-cover'
            />
        </div>
    );
}

export default ImageComponent;
