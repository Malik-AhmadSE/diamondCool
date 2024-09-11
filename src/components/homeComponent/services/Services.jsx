import React, { useEffect, useState } from 'react';
import Buttons from '../../buttons/Buttons';
import { Image } from 'antd';
import ServiceLoader from '../../Common/skeleton/Service.jsx';

function Services() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {loading ? (
        <ServiceLoader />
      ) : (
        <div className='w-full mt-56 flex flex-col md:flex-row gap-3 pb-10'>

          {/* Left Section */}
          <div className='w-full md:w-[41%] pl-5 md:pl-10'>
            <h6 className='font-semibold mb-2'>Reliable</h6>
            <h1 className='font-bold text-[45px]'>Why Choose Our Services?</h1>
            <p className='pt-5 tracking-wider'>
              We offer top-quality spare parts for air conditioning and refrigeration systems you can trust. With our expertise and commitment to customer satisfaction, we are the best choice for all your cooling and refrigeration needs.
            </p>
            <div className='pt-10'>
              <Buttons />
            </div>
          </div>

          {/* Right Section with Cards */}
          <div className='w-full md:w-[59%] h-auto md:h-[550px] pl-5 md:bg-ServiceImage md:bg-cover flex flex-wrap gap-5'>
            <div className='w-full md:w-[45%]'>
              <Image preview={false} width={50} src={'https://res.cloudinary.com/dvf9mmcww/image/upload/v1725984308/icons/ls6sg8eoahfhcuxuyuim.png'} />
              <h4 className='font-bold text-[25px] pt-4 tracking-wide'>Experienced Professionals</h4>
              <p className='text-[12px] tracking-wider pt-5'>
                Benefit from our in-depth knowledge and experience in providing high-quality spare parts for air conditioning and refrigeration systems.
              </p>
            </div>
            <div className='w-full md:w-[45%]'>
              <Image preview={false} width={50} src={'https://res.cloudinary.com/dvf9mmcww/image/upload/v1725984307/icons/llq2qsojxmbcqeav8cv6.png'} />
              <h4 className='font-bold text-[25px] pt-4 tracking-wide'>Prompt Availability</h4>
              <p className='text-[12px] tracking-wider pt-5'>
                Count on our efficient service to quickly provide the spare parts you need, minimizing downtime and keeping your systems running smoothly.
              </p>
            </div>
            <div className='w-full md:w-[45%]'>
              <Image preview={false} width={50} src={'https://res.cloudinary.com/dvf9mmcww/image/upload/v1725984309/icons/eplczypbqok5ghrpqhkp.png'} />
              <h4 className='font-bold text-[25px] pt-4 tracking-wide'>Tailored Spare Parts Solutions</h4>
              <p className='text-[12px] tracking-wider pt-5'>
                Receive spare parts that match your specific needs and ensure optimal performance for your cooling and refrigeration systems.
              </p>
            </div>
            <div className='w-full md:w-[45%]'>
              <Image preview={false} width={50} src={'https://res.cloudinary.com/dvf9mmcww/image/upload/v1725984309/icons/yemitb99so8dk6ddjdev.png'} />
              <h4 className='font-bold text-[25px] pt-4 tracking-wide'>Top-Quality Components</h4>
              <p className='text-[12px] tracking-wider pt-5'>
                Trust in the superior quality of our spare parts, designed to deliver reliable and long-lasting performance for your air conditioning and refrigeration systems.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Services;
