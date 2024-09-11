import React, { useEffect, useState } from 'react';
import ReliableLoader from '../../Common/skeleton/Reliable';

function Reliable() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {loading ? (
        <ReliableLoader />
      ) : (
        <div className="w-full mt-32 flex flex-col justify-center items-center text-center px-5">
          <h6 className="font-semibold mb-2 text-[16px] md:text-[18px]">Reliable</h6>
          <h1 className="w-full md:w-[750px] font-bold text-[30px] md:text-[45px]">
            Expert Air Conditioning, Refrigeration & Home Appliance Spare Parts Solutions
          </h1>
          <p className="w-full md:w-[920px] pt-5 tracking-wide text-[14px] md:text-[16px]">
            We supply top-quality spare parts for air conditioning, refrigeration, and home appliances to meet all your repair and maintenance needs. Our dedicated team ensures you receive reliable components that guarantee your comfort and satisfaction.
          </p>
        </div>
      )}
    </>
  );
}

export default Reliable;
