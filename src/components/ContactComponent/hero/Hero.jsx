import React from 'react';
import {Image} from 'antd'
function Hero() {
    return (
        <div className='w-full flex items-center justify-center'>
            <div className='md:mt-48 mt-32 w-[97.5%] max-w-[1440px] md:h-[450px] h-32'>
                <Image 
                    src='https://res.cloudinary.com/dvf9mmcww/image/upload/v1727838142/contact_g5wcrd.jpg' 
                    preview={false} 
                    className='h-full w-full object-cover'
                />
            </div>
        </div>
    );
}

export default Hero;
