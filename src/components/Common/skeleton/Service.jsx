import React from 'react';
import { Skeleton, Row, Col } from 'antd';
import { Skeleton as SkeletonComponent } from 'antd';

const ServicesLoader = () => {
  return (
    <div className='relative top-[600px] w-full flex gap-3 pb-10'>
      <div className='!w-[41%] !pl-10'>
      <Skeleton.Input active style={{ width: 120, marginBottom: 10 }} size="small" /> {/* Skeleton for "Reliable" */}
      <Skeleton.Input active style={{ width: 450, height: 50, marginBottom: 20 }} /> {/* Skeleton for Main Title */}
        <Skeleton active title={false} paragraph={{ rows: 8 }} style={{ margin: '10px 0' }} />
        <Skeleton.Button active style={{ width: 100, height: 40, marginTop: 20 }} />
      </div>
      <div className='!w-[59%] !h-[550px] pl-5 bg-ServiceImage bg-cover flex gap-5 flex-wrap'>
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className='flex flex-col items-center'>
            <Skeleton.Image style={{ width: 50, height: 50 }} />
            <Skeleton active title={false} paragraph={{ rows: 1 }} style={{ margin: '10px 0' }} />
            <Skeleton.Button active style={{ width: 300, height: 20, marginTop: 10 }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesLoader;
