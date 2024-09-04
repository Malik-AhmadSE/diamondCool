
import React from 'react';
import { Flex, Button } from 'antd';
const baseStyle = {
  width: '50%',
  height: 70,
};
const App = () => {
  const [value, setValue] = React.useState('horizontal');
  const [btn, setbtn] = React.useState("primary");
  return (
    <Flex gap="middle" vertical>
      <Flex vertical={value === 'vertical'} className='w-full fixed top-0 left-0 z-40 bg-white '>
        <div style={{ ...baseStyle }} className='flex items-center pl-10 text-[30px]'>
          Logo
        </div>
        <div style={{ ...baseStyle }}>
          <Flex vertical={value === 'vertical'} className='h-full flex items-center justify-between pl-20 pr-10' >
            <Button type="text" ghost={false} size={10}  className='font-semibold text-black'>
              Contact
            </Button>
            <Button type="text" size={10} className='font-semibold text-black'>
              About Us
            </Button>
            <Button type="text" size={10} className='font-semibold text-black'>
              Products
            </Button>
            <Button type={btn} onMouseEnter={() => setbtn('Default')} className='pt-3 pb-3 pl-4 pr-4 text-white bg-black hover:bg-transparent hover:border hover:border-green-700 hover:text-green-700'>Learn More</Button>
          </Flex>
        </div>
      </Flex>
    </Flex>
  );
};
export default App;