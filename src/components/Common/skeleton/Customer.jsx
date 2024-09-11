import React from 'react';
import { Card, Skeleton, Avatar, Rate } from 'antd';

const CustomerLoader = () => {
    
  return (
    
    <div className='mt-48 !pl-10'>
      <h1 className='!w-[550px] font-bold text-[45px] pb-4'>
        <Skeleton.Input active style={{ width: '100%' }} />
      </h1>
      <p>
        <Skeleton active style={{ width: '60%' }} paragraph={{ rows: 1 }}/>
      </p>
      <div className='relative w-full flex gap-16 justify-center mt-10'>
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
            <Skeleton active paragraph={{ rows: 4 }} />
            <Skeleton.Avatar active size={60} style={{ marginTop: '1rem' }}/><br></br>
            <Skeleton.Input active style={{ width: 120, marginTop: '1rem' }} />
            <Skeleton active paragraph={{rows:0}}  className='pt-5'/>
          </Card>
        ))}
      </div>
    </div>
       
  );
};

export default CustomerLoader;
