import React from 'react';
import { Button, Card, Typography } from 'antd';
import Buttons from '../../buttons/Buttons';
import Air3 from '../../../assets/images/airproducts/air15.png';

function Discover() {
  return (
    <div className='w-full mt-56 flex justify-center item-center mb-[150px]'>
       <Card 
        hoverable 
        className='w-[90%] md:w-[80%] h-auto !overflow-hidden !p-0' 
      >
        <div className='flex flex-col md:flex-row justify-between'>
          <div className='flex flex-col justify-center p-5 md:p-10'>
            <h1 className='font-bold text-[32px] md:text-[45px]'>
              Discover Our Amazing Product Range
            </h1>
            <p className='pt-5 tracking-wider pb-10 text-[14px] md:text-[16px]'>
              Explore our wide selection of high-quality refrigerators, air conditioners, washing machines, and more.
            </p>
            <Buttons />
          </div>
          <img
            alt="Product"
            src={Air3}
            className='!w-[80%] md:!w-[320px] self-center'
          />
        </div>
      </Card>
    </div>
  );
}

export default Discover;
