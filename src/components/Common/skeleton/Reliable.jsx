import React from 'react';
import { Skeleton } from 'antd';

const ReliableLoader = () => {
  return (
    <div className='relative top-96 flex flex-col !justify-center !items-center !text-center'>
      <Skeleton.Input active style={{ width: 120, marginBottom: 10 }} size="small" /> {/* Skeleton for "Reliable" */}
      <Skeleton.Input active style={{ width: 750, height: 50, marginBottom: 20 }} /> {/* Skeleton for Main Title */}
      <div className='!w-[920px] !pt-5'>
        <div className='!text-center'>
          <Skeleton active paragraph={{ rows: 3 }} />
        </div>
      </div>
    </div>
  );
};

export default ReliableLoader;
