import React, { useState, useEffect } from 'react';
import Buttons from '../../buttons/Buttons';
import { Image } from 'antd';
import QualityLoader from '../../Common/skeleton/Quality.jsx';

function Quality() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {loading ? (
        <QualityLoader />
      ) : (
        <div className="w-full mt-60 z-1 px-5 md:px-10 flex flex-col md:flex-row gap-10 md:gap-16 items-center !overflow-x-hidden">
          <div className="flex justify-center w-full md:w-[50%]">
            <Image
              src={'https://res.cloudinary.com/dvf9mmcww/image/upload/v1725982999/MainImages/lidrg44ffwswcp2ewgjn.png'}
              preview={false}
              className="w-full max-w-[500px] h-auto"
            />
          </div>
          <div className="flex flex-col justify-center md:justify-start items-center w-full md:w-[50%] text-center md:text-left">
            <h6 className="font-semibold mb-2">Quality</h6>
            <h1 className="font-bold text-[30px] md:text-[45px]">
              Experience the Best in Air Conditioning Services
            </h1>
            <p className="pt-5 tracking-wider text-[14px] md:text-[16px]">
              Our company is dedicated to providing top-quality air conditioning services that are efficient and reliable. With a focus on customer satisfaction, we strive to exceed expectations in every project we undertake.
            </p>
            <div className="mt-10 pb-5">
              <Buttons />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Quality;
