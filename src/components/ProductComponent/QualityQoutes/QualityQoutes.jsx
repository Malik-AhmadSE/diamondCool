import React from 'react';

function QualityQoutes() {
  return (
    <div className='w-full flex justify-center items-center'>
    <div className='md:mt-52 mt-32 flex flex-col justify-center items-center text-center'>
        <h6 className='font-semibold mb-2 text-lg md:text-base'>Quality</h6>
        <h1 className='w-full max-w-[750px] font-bold text-[25px] text-2xl md:text-[45px]'> {/* Responsive heading */}
          Find Your Perfect Appliance
        </h1>
        <p className='w-full max-w-[920px] pt-5 tracking-wider text-sm md:text-base'> {/* Responsive paragraph */}
          Discover a wide range of refrigerators, air conditioners, washing machines, and spare parts.
        </p>
    </div>
</div>
  );
}

export default QualityQoutes;
