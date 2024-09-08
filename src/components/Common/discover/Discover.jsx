import React from 'react'
import { Button, Card, Flex, Typography } from 'antd';
import Buttons from '../../buttons/Buttons';
import Air3 from '../../../assets/images/airproducts/air15.png';
function Discover() {
  return (
    <div className='w-full relative top-[450px] flex justify-center item-center mb-[150px]'>
       <Card hoverable className=' w-[80%] h-[450px] !overflow-hidden !p-0'>
    <Flex justify="space-between">
    <Flex
        vertical
        style={{
          padding: 10,
        }}
        className=' justify-center '
      >
        <h1 className='w-[500px] font-bold text-[45px]'>
        Discover Our Amazing Product Range
        </h1>
        <p className='w-[500px] pt-5 tracking-wider pb-10'>Explore our wide selection of high-quality refrigerators, air conditioners, washing machines, and more.</p>
        <Buttons />
      </Flex>
      <img
        alt="avatar"
        src={Air3}
        className='!w-[320px] flex justify-center items-center'
      />
      
    </Flex>
  </Card>

    </div>
  )
}
export default Discover;