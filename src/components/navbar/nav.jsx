import React, { useState, useEffect } from 'react';
import { Flex, Button, Input, Image, Drawer, Typography, Divider } from 'antd';
import { MenuOutlined, SearchOutlined, MailFilled, PhoneFilled, FacebookOutlined, FacebookFilled, TwitterSquareFilled, InstagramFilled, LinkedinFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import Learn from '../Common/learn/Learn.jsx';


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
      <div className={`!w-full !h-36  fixed md:!w-full md:top-0 md:left-0 z-40 hidden md:flex justify-center transition-transform duration-300 ${scrollingDown ? '-translate-y-full' : 'translate-y-0'}`}>
        <Flex gap="middle" vertical className="!w-[95%] overflow-hidden bg-Nav bg-cover">
          <Flex vertical={value === 'vertical'} className="!w-[95%] flex items-center justify-between mt-3">
            <div className="flex flex-col !w-1/2 items-center justify-center">
              {/* <Typography className='text-xl font-bold italic text-green-700'>
                Diamond Cool Aircondition Spare Parts Trading LLC
              </Typography> */}
              <Image
                src="https://res.cloudinary.com/dvf9mmcww/image/upload/v1725982988/MainImages/kntrbdys2pgk0cxzazfq.png"
                className="md:!w-[450px]"
                preview={false}
                onClick={() => navigate('/')}
              />
            </div>
            <div className='!w-1/2 flex flex-col items-center justify-center'>
              <div className="relative bottom-2 flex gap-28 items-center">
                <div>
                  <div>
                    <MailFilled className="text-green-700 mr-1" />
                    <span className='text-white italic'>diamondcooluae@gmail.com</span>
                  </div>
                  <div>
                    <PhoneFilled className="text-green-700 mr-1  italic" style={{ transform: 'rotate(110deg)' }} />
                    <span className='text-white italic'>+971558531096</span>
                  </div>
                </div>
                <div className='flex gap-3 items-center'>
                  <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a class="text-blue-500">
                      <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a class="ml-3 text-blue-500">
                      <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a class="ml-3 text-blue-500">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </a>
                    <a class="ml-3 text-blue-500">
                      <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                      </svg>
                    </a>
                  </span>
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
      <div className='w-full flex items-center justify-center'>
        <Flex className={`!w-[98%] bg-Nav md:hidden self-center z-40 p-4  justify-between items-center overflow-x-hidden transition-transform duration-300 ${scrollingDown ? '-translate-y-full' : 'translate-y-0'}`}>

          <div className="flex flex-col w-[98%]">
            {/* <Typography className='md:text-xl text-[12px] font-bold italic text-green-700'>
                  Diamond Cool Aircondition Spare Parts Trading LLC
                </Typography> */}
            <div className='w-full flex justify-between gap-6 pr-2'>
              <div className='flex gap-1 '>
                <MailFilled className="text-green-700 text-[12px] italic" />
                <span className=' text-[12px] italic'>diamondcooluae@gmail.com</span>
              </div>
              <div className='flex gap-1'>
                <PhoneFilled className="text-green-600 mr-1 text-[12px] italic" style={{ transform: 'rotate(110deg)' }} />
                <span className=' text-[12px] italic'>+971558531096</span>
              </div>
            </div>
            <Image
              src="https://res.cloudinary.com/dvf9mmcww/image/upload/v1725982988/MainImages/kntrbdys2pgk0cxzazfq.png"
              className="!w-[250px] -ml-5"
              preview={false}
              onClick={() => { navigate('/'); }}
            />

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
      </div>
    </>
  );
};

export default Nav;
