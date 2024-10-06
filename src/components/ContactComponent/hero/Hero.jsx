import React from 'react';
import {Image} from 'antd'
function Hero() {
    return (
        <div className='md:mt-48 mt-10  w-full md:h-[450px] h-32 flex flex-col justify-center items-center'>
            <Image 
                src='https://res.cloudinary.com/dvf9mmcww/image/upload/v1727838142/contact_g5wcrd.jpg' 
                preview={false} 
                className='h-full w-full object-cover'
            />
        </div>
    );
}

export default Hero;
