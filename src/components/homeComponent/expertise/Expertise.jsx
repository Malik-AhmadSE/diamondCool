import { Button, Image } from 'antd';
import React, { useEffect, useState } from 'react';
import ExpertiseLoader from '../../Common/skeleton/Expertise';
import Buttons from '../../buttons/Buttons';

function Expertise() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {loading ? (
        <ExpertiseLoader />
      ) : (
        <div className="w-full mt-36 z-1 flex flex-col md:flex-row gap-3 flex-wrap">
          <div className="px-5 md:pl-10">
            <h6 className="font-semibold mb-2 text-[16px] md:text-[18px]">Expertise</h6>
            <h1 className="w-full md:w-[550px] font-bold text-[30px] md:text-[45px]">
              Trusted Air Conditioning Systems & Refrigeration Solutions
            </h1>
            <h4 className="font-bold text-[20px] md:text-[25px] pt-4">
              Quality Spare Parts & Compressors
            </h4>
            <p className="w-full md:w-[550px] pt-5 tracking-wide text-[14px] md:text-[16px]">
              With years of experience, we specialize in providing top-notch air conditioners, AC and Refrigerators spare parts and compressors.
            </p>

            <div className="flex gap-5 flex-wrap mt-8">
              <div>
                <h3 className="font-bold pb-4 text-[18px]">Services</h3>
                <p className="w-full md:w-[280px] text-justify text-[14px] md:text-[15px]">
                  Air Conditioning, Refrigeration, and Home Appliance Spare Parts. Reliable Solutions for Installation, Maintenance, and Repair
                </p>
              </div>
              <div>
                <h3 className="font-bold pb-4 text-[18px]">Quality</h3>
                <p className="w-full md:w-[250px] text-justify text-[14px] md:text-[15px]">
                  We prioritize delivering high-quality products and exceptional customer service to meet your needs.
                </p>
              </div>
            </div>

            <div className="mt-10 pb-5">
              <Buttons />
            </div>
          </div>

          <div className="w-full md:w-[50%] flex justify-center mt-10 md:mt-0 px-5 md:pl-10">
            <Image
              src="https://res.cloudinary.com/dvf9mmcww/image/upload/v1725969057/MainImages/adtq8ygnbvaag8obum9v.jpg"
              preview={false}
              className="w-full md:w-auto"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Expertise;
