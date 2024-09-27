import React, { useState, useEffect } from 'react';
import { Flex, Button, Input, Image, Drawer, Typography, Divider } from 'antd';
import { MenuOutlined, SearchOutlined, MailFilled,PhoneFilled,FacebookFilled,TwitterSquareFilled,InstagramFilled,LinkedinFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import Learn from '../Common/learn/Learn.jsx';
import Facebook from '../../assets/images/icons/facebook.png';
import Insta from '../../assets/images/icons/insta.png';
import Linkdin from '../../assets/images/icons/linkdin.png';
import Tweeter from '../../assets/images/icons/tweeter.png';

const Nav = () => {
  const [value, setValue] = useState('horizontal');
  const [btn, setBtn] = useState("primary");
  const [open, setOpen] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [searchValue, setSearchValue] = useState('');

  const navigate = useNavigate();

  const handleSearch = () => {
    console.log('Search value:', searchValue);
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setScrollingDown(prevScrollPos < currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <>
      <div className={`!w-screen !h-36 bg-navcolor fixed md:!w-full md:top-0 md:left-0 z-40 hidden md:flex transition-transform duration-300 ${scrollingDown ? '-translate-y-full' : 'translate-y-0'}`}>
        <Flex gap="middle" vertical className="!w-screen overflow-hidden">
          <Flex vertical={value === 'vertical'} className="!w-full flex items-center justify-between mt-3">
            <div className="flex flex-col !w-1/2 items-center justify-center">
              <Typography className='text-xl font-bold italic text-green-700'>
                Diamond Cool Aircondition Spare Parts Trading LLC
              </Typography>
              <Image
                src="https://res.cloudinary.com/dvf9mmcww/image/upload/v1725982988/MainImages/kntrbdys2pgk0cxzazfq.png"
                className="md:!w-[350px]"
                preview={false}
                onClick={() => navigate('/')}
              />
            </div>
            <div className='!w-1/2 flex flex-col items-center justify-center'>
              <div className="relative bottom-2 flex gap-28 items-center">
                <div>
                <div>
                  <MailFilled className="text-yellow-500 mr-1" />
                  <span className='text-yellow-500 italic'>diamondcooluae@gmail.com</span>
                </div>
               <div>
               <PhoneFilled className="text-yellow-500 mr-1  italic" style={{ transform: 'rotate(110deg)' }}/>
               <span className='text-yellow-500 italic'>+97145773638</span>
               </div>
                </div>
                <div className='flex gap-3 items-center'>
                   <FacebookFilled className="text-yellow-500 mr-1  text-[20px] italic" />
                   <InstagramFilled className="text-yellow-500 mr-1  text-[20px] italic" />
                   <LinkedinFilled className="text-yellow-500 mr-1  text-[20px] italic" />
                   <TwitterSquareFilled className="text-yellow-500 mr-1  text-[20px] italic" />
                </div>
              </div>
              <div className="w-[75%] flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg">
                <Input
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search..."
                  className="border-none p-2 pl-4"
                />
                <Button type="primary" icon={<SearchOutlined className='p-2' />} onClick={handleSearch} className="relative right-1" />
              </div>
              <Flex className="!w-full relative top-2 flex items-center justify-center gap-5">
                <Button type="link" className='text-black font-semibold' onClick={() => navigate('/')}>Home</Button>
                <Divider type="vertical" variant="solid" className='border border-black' />
                <Button type="link" className='text-black font-semibold' onClick={() => navigate('/product')}>Products</Button>
                <Divider type="vertical" variant="solid" className='border border-black' />
                <Button type="link" className='text-black font-semibold' onClick={() => navigate('/about')}>About</Button>
                <Divider type="vertical" variant="solid" className='border border-black' />
                <Button type="link" className='text-black font-semibold' onClick={() => navigate('/contact')}>Contact Us</Button>
              </Flex>
            </div>
          </Flex>
        </Flex>
      </div>

      {/* Mobile Navbar */}
      <Flex className={`w-full bg-navcolor md:hidden fixed top-0 left-0 z-40 p-4 justify-between items-center overflow-x-hidden transition-transform duration-300 ${scrollingDown ? '-translate-y-full' : 'translate-y-0'}`}>
        
      <div className="flex flex-col w-full">
              <Typography className='md:text-xl text-[12px] font-bold italic text-green-700'>
                Diamond Cool Aircondition Spare Parts Trading LLC
              </Typography>
        <Image
          src="https://res.cloudinary.com/dvf9mmcww/image/upload/v1725982988/MainImages/kntrbdys2pgk0cxzazfq.png"
          className="!w-[210px]"
          preview={false}
          onClick={() => { navigate('/'); }}
        />
        <div className='w-full flex justify-between'>
        <div className='w-[50%]'>
          <MailFilled className="text-yellow-500 mr-1  text-[12px] italic" />
          <span className='text-yellow-500 text-[12px] italic'>diamondcooluae@gmail.com</span>
          </div>
          <div className='w-[50%]'>
          <PhoneFilled className="text-yellow-500 mr-1  text-[12px] italic" style={{ transform: 'rotate(110deg)' }} />
          <span className='text-yellow-500 text-[12px] italic'>+97145773638</span>
          </div>
        </div>
        </div>
        <MenuOutlined onClick={() => setDrawerVisible(true)} className="text-xl cursor-pointer" />
      </Flex>

      {/* Drawer for mobile menu */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setDrawerVisible(false)}
        visible={drawerVisible}
        className="md:hidden p-5"
      >
        <Flex className='flex-col'>
        <div className="w-[100%] flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg mb-5">
            <Input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search..."
              className="border-none p-2 flex-grow"
            />
            <Button type="primary" icon={<SearchOutlined />} onClick={handleSearch} className=" mr-1" />
          </div>
          <Button type="text" onClick={() => { navigate('/'); setDrawerVisible(false); }} className="w-full text-left mb-5">
            Home
          </Button>
          <Button type="text" onClick={() => { navigate('/about'); setDrawerVisible(false); }} className="w-full text-left mb-5">
            About Us
          </Button>
          <Button type="text" onClick={() => { navigate('/product'); setDrawerVisible(false); }} className="w-full text-left mb-5">
            Products
          </Button>
          <Button type="text" onClick={() => { navigate('/contact'); setDrawerVisible(false); }} className="w-full text-left mb-5">
            Contact
          </Button>
          
          <Button
            type={btn}
            onMouseEnter={() => setBtn('Default')}
            className="w-full text-white bg-black hover:bg-transparent mb-5 hover:border hover:border-green-700 hover:text-green-700"
            onClick={() => setOpen(true)}
          >
            Learn More
          </Button>
        </Flex>
        <Learn open={open} handleCancel={() => setOpen(false)} />
      </Drawer>
    </>
  );
};

export default Nav;
