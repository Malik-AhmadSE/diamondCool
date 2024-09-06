import { Image } from 'antd';
import React from 'react'
import HeroImage from '../../../assets/images/HeroImage.jpg';
function Location() {
    return (
        <div className='w-full h-[650px] relative top-48 pl-10 pr-10' styles={{border:0}} allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            <Image src={HeroImage} preview={false} />
        </div>
    )
}

export default Location;