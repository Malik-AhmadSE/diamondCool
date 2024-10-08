import { Avatar, Rate, Typography } from 'antd';
import React from 'react';
import Icon from '../../../../public/logofooter.jpg';
function CeoRating() {
    return (
        <div className=' flex flex-col justify-center items-center text-center'>
            <h6 className='font-semibold mb-2'><Rate defaultValue={5} /></h6>
            <h1 className='w-full md:w-[900px] font-bold md:text-[45px] text-[25px]'>At Diamond Cool, we deliver high-quality spare parts for refrigerators and washing machines, ensuring your appliances run smoothly and reliably.</h1>
            <div className='w-full md:w-[50%] mt-5 flex flex-row gap-5 items-center justify-center'>
                <div className='flex gap-6 items-center justify-center'>
                    <Avatar size={50} src={Icon} alt="avatar" />
                    <div className='flex flex-col gap-1 justify-start items-start'>
                        <Typography className='font-bold text-[12px]'>Diamond Cool</Typography>
                        <Typography className='font-medium text-[10px]'>Owner</Typography>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CeoRating;
