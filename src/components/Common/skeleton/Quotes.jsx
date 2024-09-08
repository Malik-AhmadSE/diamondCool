import React from 'react';
import { Skeleton } from 'antd';

const QuotesLoader = () => {
  return (
    <div className='relative top-[800px] !w-full flex !justify-center !items-center !pb-10'>
      <div className='!w-[90%]'>
      <Skeleton.Image  className='!w-[100%] !h-[500px]' />
      </div>
    </div>
  );
};

export default QuotesLoader;
