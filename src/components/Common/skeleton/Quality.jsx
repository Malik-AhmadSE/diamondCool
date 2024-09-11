import React from 'react';
import { Skeleton } from 'antd';

const QualityLoader = () => {
  return (
    <div className='!w-full mt-60 z-1 flex gap-3 flex-wrap'>
        <div className='!w-[50%] !h-full pl-10 flex justify-center'>
        <Skeleton.Image className='!w-full !h-[500px]'/>
      </div>
      <div className='!pl-10 flex flex-col'>
        <Skeleton.Input active style={{ width: 120, marginBottom: 10 }} size="small" /> {/* Skeleton for "Expertise" */}
        <Skeleton.Input active style={{ width: 550, height: 50, marginBottom: 20 }} /> {/* Skeleton for Main Title */}
        <Skeleton.Input active style={{ width: 350, height: 40, marginBottom: 20 }} /> {/* Skeleton for Subheading */}

        <Skeleton active paragraph={{ rows: 5, width: 550 }} /> {/* Skeleton for Description Paragraph */}

        <div className='mt-10 pb-5'>
          <Skeleton.Button active shape="round" size="large" style={{ width: 120, marginRight: 20 }} /> {/* Button 1 Skeleton */}
          <Skeleton.Button active shape="round" size="large" style={{ width: 120 }} /> {/* Button 2 Skeleton */}
        </div>
      </div>

      {/* Right Side Image Skeleton */}
      
    </div>
  );
};

export default QualityLoader;
