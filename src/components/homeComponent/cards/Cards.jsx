import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import Buttons from '../../buttons/Buttons';
import CardsLoader from '../../Common/skeleton/Cards.jsx';

const Cards = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {loading ? (
        <CardsLoader />
      ) : (
        <>
          <div className=' w-full flex flex-wrap gap-8 justify-center mt-48 px-5 md:gap-16'>
            <Card
              hoverable
              bordered={false}
              style={{
                width: 300,
                height: 400,
              }}
              cover={
                <img
                  alt="cards"
                  src={
                    'https://res.cloudinary.com/dvf9mmcww/image/upload/v1725982999/MainImages/p76nsaveb5bjgcyl0rms.png'
                  }
                />
              }
            >
              <h1 className='font-bold text-[20px] pt-4 text-center'>
                Air Conditioning Spare Parts & Services
              </h1>
              <p className='text-center text-[12px] '>
                We offer a wide range of air conditioning spare parts to support
                installation, repair, and maintenance, ensuring your space stays
                cool and comfortable.
              </p>
            </Card>

            <Card
              hoverable
              bordered={false}
              style={{
                width: 300,
                height: 400,
              }}
              cover={
                <img
                  alt="cards"
                  src={
                    'https://res.cloudinary.com/dvf9mmcww/image/upload/v1725982992/MainImages/m3lmu6hnzrrgwv8qdan7.png'
                  }
                />
              }
            >
              <h1 className='font-bold text-[20px] pt-4 text-center'>
                Refrigeration Spare Parts & Services
              </h1>
              <p className='text-center text-[12px]'>
                We provide high-quality spare parts for the installation, repair,
                and maintenance of commercial and residential refrigeration
                systems.
              </p>
            </Card>

            <Card
              hoverable
              bordered={false}
              style={{
                width: 300,
                height: 400,
              }}
              cover={
                <img
                  alt="cards"
                  src={
                    'https://res.cloudinary.com/dvf9mmcww/image/upload/v1725982996/MainImages/bufx4hqujo0txey9iapw.png'
                  }
                />
              }
            >
              <h1 className='font-bold text-[20px] pt-4 text-center'>
                Home Appliance Services
              </h1>
              <p className='text-center text-[12px] '>
                From refrigerators to air conditioners, we specialize in providing
                high-quality spare parts to ensure your appliances function
                optimally.
              </p>
            </Card>
          </div>
          <div className=' w-full mt-24 flex justify-center items-center'>
            <Buttons />
          </div>
        </>
      )}
    </>
  );
};

export default Cards;
