import React, { useEffect, useState } from 'react';
import { Card, Rate, Avatar } from 'antd';
import CustomerLoader from '../../Common/skeleton/Customer.jsx';

function Customer() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {loading ? (
        <CustomerLoader />
      ) : (
        <div className="w-full px-5 md:px-10 mt-48">
          <h1 className="text-[30px] md:text-[45px] font-bold">Customer Testimonials</h1>
          <p className="text-[14px] md:text-[16px] mt-2">Hear What Our Satisfied Customers Have to Say</p>
          <div className="relative w-full flex flex-col md:flex-row gap-10 md:gap-16 justify-center mt-10 items-center">
            <Card
              hoverable
              bordered={false}
              style={{ width: '100%', maxWidth: '350px', height: 'auto' }}
              className="mb-10 md:mb-0"
            >
              <Rate allowHalf defaultValue={4.5} />
              <p className="text-justify italic text-[14px] md:text-[15px] mt-5">
                I was able to find the exact spare part I needed for my air conditioner here. The quality is excellent, and my AC is working like new again. The customer service team was very helpful in guiding me to the right part.
              </p>
              <Avatar
                size={60}
                src={'https://res.cloudinary.com/dvf9mmcww/image/upload/v1725982984/MainImages/buktc6hpdmioqrabwcuv.jpg'}
                className="mt-5 mx-auto"
              />
              <h4 className="font-semibold text-[14px] md:text-[15px] pt-2 text-center">Sarah M</h4>
              <p className="text-[12px] italic pl-2 text-center">House wife</p>
            </Card>

            <Card
              hoverable
              bordered={false}
              style={{ width: '100%', maxWidth: '350px', height: 'auto' }}
              className="mb-10 md:mb-0"
            >
              <Rate allowHalf defaultValue={4} />
              <p className="text-justify italic text-[14px] md:text-[15px] mt-5">
                When my washing machine broke down, I was worried about finding the right replacement parts. Luckily, I found this store, and they had everything I needed. The parts arrived quickly and were easy to install. My machine is back up and running smoothly!
              </p>
              <Avatar
                size={60}
                src={'https://res.cloudinary.com/dvf9mmcww/image/upload/v1725982996/MainImages/edp9xe8g3hmdfxeidbef.jpg'}
                className="mt-5 mx-auto"
              />
              <h4 className="font-semibold text-[14px] md:text-[15px] pt-2 text-center">David K</h4>
              <p className="text-[12px] italic pl-2 text-center">Bank Cashier</p>
            </Card>

            <Card
              hoverable
              bordered={false}
              style={{ width: '100%', maxWidth: '350px', height: 'auto' }}
            >
              <Rate allowHalf defaultValue={4.5} />
              <p className="text-justify italic text-[14px] md:text-[15px] mt-5">
                I had been struggling with my refrigerator for weeks until I found this service. They provided me with high-quality spare parts and even guided me through the installation process. My fridge is now cooling perfectly again. Highly recommended!
              </p>
              <Avatar
                size={60}
                src={'https://res.cloudinary.com/dvf9mmcww/image/upload/v1725982985/MainImages/myycb6eyinifmrejwoqi.jpg'}
                className="mt-5 mx-auto"
              />
              <h4 className="font-semibold text-[14px] md:text-[15px] pt-2 text-center">Maria</h4>
              <p className="text-[12px] italic pl-2 text-center">Graphic Designer</p>
            </Card>
          </div>
        </div>
      )}
    </>
  );
}

export default Customer;
