import React from 'react';

function Location() {
    return (
        <div className='w-full md:px-8 px-4 flex justify-center'>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3608.0472128046813!2d55.31261827538411!3d25.268997177664815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE2JzA4LjQiTiA1NcKwMTgnNTQuNyJF!5e0!3m2!1sen!2s!4v1725797649336!5m2!1sen!2s" 
                className='w-full h-[250px] md:h-[500px] lg:h-[650px]' 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}

export default Location;
