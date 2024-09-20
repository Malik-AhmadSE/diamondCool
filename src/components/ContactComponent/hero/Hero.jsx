import React from 'react';

function Hero() {
    return (
        <div className='mt-36 w-full md:h-[450px] h-32 flex flex-col justify-center items-center bg-ContactHeroImage bg-cover bg-center'>
            <h1 className='text-white font-bold text-[30px] md:text-[55px]'>Get in Touch</h1>
            <p className='text-[15px] md:text-[30px] text-white tracking-wider text-center'>We're here to assist you with any questions or concerns you may have.</p>
        </div>
    );
}

export default Hero;
