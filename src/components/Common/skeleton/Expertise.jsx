import React from 'react';
import { Skeleton } from 'antd';

const ExpertiseLoader = () => {
  return (
    <div className='!w-full mt-36 z-1 flex gap-3 flex-wrap'>
      <div className='!pl-10 flex flex-col'>
        <Skeleton.Input active style={{ width: 120, marginBottom: 10 }} size="small" /> {/* Skeleton for "Expertise" */}
        <Skeleton.Input active style={{ width: 550, height: 50, marginBottom: 20 }} /> {/* Skeleton for Main Title */}
        <Skeleton.Input active style={{ width: 350, height: 40, marginBottom: 20 }} /> {/* Skeleton for Subheading */}
        
        {/* Paragraph Skeleton */}
        <Skeleton active paragraph={{ rows: 2, width: 550 }} /> {/* Skeleton for Description Paragraph */}

        {/* Services & Quality Skeleton */}
        <div className='flex gap-5 flex-wrap mt-10'>
          <div>
            <Skeleton.Input active style={{ width: 50, marginBottom: 10 }} size="small" /> {/* Skeleton for "Services" */}
            <Skeleton active paragraph={{ rows: 2, width: 280 }} />
          </div>
          <div>
            <Skeleton.Input active style={{ width: 80, marginBottom: 10 }} size="small" /> {/* Skeleton for "Quality" */}
            <Skeleton active paragraph={{ rows: 2, width: 250 }} /> {/* Skeleton for Quality Description */}
          </div>
        </div>

        {/* Button Skeleton */}
        <div className='mt-10 pb-5'>
          <Skeleton.Button active shape="round" size="large" style={{ width: 120, marginRight: 20 }} /> {/* Button 1 Skeleton */}
          <Skeleton.Button active shape="round" size="large" style={{ width: 120 }} /> {/* Button 2 Skeleton */}
        </div>
      </div>

      {/* Right Side Image Skeleton */}
      <div className='!w-[50%] !h-full pl-10 flex justify-center'>
        <Skeleton.Image className='!w-full !h-[500px]'/>
      </div>
    </div>
  );
};

export default ExpertiseLoader;
