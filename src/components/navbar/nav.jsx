
import React from 'react';
import { Flex, Button } from 'antd';
import { useNavigate } from 'react-router';
import Learn from '../Common/learn/Learn.jsx';
const baseStyle = {
  width: '50%',
  height: 70,
};

const App = () => {
  const [value, setValue] = React.useState('horizontal');
  const [btn, setbtn] = React.useState("primary");
  const navigate=useNavigate();
  const [open, setOpen] = React.useState(false); 

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <Flex gap="middle" vertical>

      <Flex vertical={value === 'vertical'} className='w-full fixed top-0 left-0 z-40 bg-white '>
        <div style={{ ...baseStyle }} className='flex items-center pl-10 text-[30px]' onClick={()=>{navigate('/')}}>
          Logo
        </div>
        <div style={{ ...baseStyle }}>
          <Flex vertical={value === 'vertical'} className='h-full flex items-center justify-between pl-20 pr-10' >
            <Button type="text" ghost={false} size={10} onClick={()=>{navigate('/contact')}}  className='font-semibold text-black'>
              Contact
            </Button>
            <Button type="text" size={10} onClick={()=>{navigate('/about')}} className='font-semibold text-black'>
              About Us
            </Button>
            <Button type="text" size={10} onClick={()=>{navigate('/product')}} className='font-semibold text-black'>
              Products
            </Button>
            <Button type={btn} onMouseEnter={() => setbtn('Default')} className='pt-3 pb-3 pl-4 pr-4 text-white bg-black hover:bg-transparent hover:border hover:border-green-700 hover:text-green-700' onClick={showModal}>Learn More</Button>
            <Learn open={open} handleCancel={handleCancel} />
          </Flex>
        </div>
      </Flex>
    </Flex>
  );
};
export default App;