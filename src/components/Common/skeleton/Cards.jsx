import React from 'react';
import { Card, Skeleton } from 'antd';

const CardsLoader = () => (

  <>
    <div className='relative top-[430px] !w-full flex gap-16 justify-center !mt-10'>
      {[...Array(3)].map((_, index) => (
        <Card
          key={index}
          hoverable
          bordered={false}
          style={{
            width: 350,
            height: 400,
          }}
        >
          <Skeleton.Image className='!w-full !h-[250px]' />
          <div className='pt-4'>
            <Skeleton.Input active style={{ width: 150, height: 25 }} />
            <Skeleton style={{marginTop: 10 }} paragraph={{rows:1}}/>
          </div>
        </Card>
      ))}
    </div>
    <div className='relative top-[500px] !w-full flex justify-center gap-10 items-center'>
      <Skeleton.Button active style={{ width: 100, height: 40 }} />
      <Skeleton.Button active style={{ width: 100, height: 40 }} />
    </div>
  </>
);

export default CardsLoader;
