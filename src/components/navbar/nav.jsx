import React, { useState, useEffect } from 'react';
import { Flex, Button, Input, Image, Drawer, Typography, Divider } from 'antd';
import { MenuOutlined } from '@ant-design/icons'; // Import hamburger icon
import { useNavigate } from 'react-router';
import Learn from '../Common/learn/Learn.jsx';

const baseStyle = {
  height: '70px',
};

const Nav = () => {
  const [value, setValue] = useState('horizontal');
  const [btn, setbtn] = useState("primary");
  const [open, setOpen] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false); // State for drawer
  const [scrollingDown, setScrollingDown] = useState(false); // State to track scroll direction
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset); // Previous scroll position

  const navigate = useNavigate();

  const handleCancel = () => {
    setOpen(false);
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const showModal = () => {
    setOpen(true);
  };

  // Handle scroll events
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setScrollingDown(prevScrollPos < currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Clean up scroll event listener
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      {/* Desktop Navbar */}
      <div className={`!w-screen flex-col !h-36 fixed md:!w-full md:top-0 md:left-0 z-40 bg-white hidden md:flex transition-transform duration-300 ${scrollingDown ? '-translate-y-full' : 'translate-y-0'}`}>
        <Flex gap="middle" vertical className="!w-screen overflow-hidden">
          <Flex vertical={value === 'vertical'} className="w-full pr-5 flex items-center justify-between mt-3">
            <div className="flex items-center pl-10">
              <Typography className='text-xl font-bold italic text-green-700'>
                Diamond Cool
              </Typography>
            </div>
            <div>
              <Flex vertical={value === 'vertical'} className="h-full flex items-center justify-center">
                <Typography className='text-lg italic'>
                  <span className='font-bold'>Email :</span> diamondcooluae@gmail.com
                </Typography>
              </Flex>
            </div>
            <div >
              <Flex vertical={value === 'vertical'} className="h-full flex items-center justify-center">
                <Typography className='text-lg italic'>
                  <span className='font-bold'>Whatsapp :</span> +971558531096
                </Typography>
              </Flex>
            </div>
          </Flex>
        </Flex>
        <Flex vertical={value === 'vertical'}>
          <div style={baseStyle} className="!w-full flex items-center justify-center pt-5 pb-8">
            <div className='flex items-center justify-center relative left-20 top-3'>
              <Image
                src="https://res.cloudinary.com/dvf9mmcww/image/upload/v1725982988/MainImages/kntrbdys2pgk0cxzazfq.png"
                className="md:!w-[350px]"
                preview={false}
                onClick={() => navigate('/')}
              />
              <div className="relative left-56">
                <Input.Search
                  placeholder="Search..."
                  onSearch={value => console.log(value)} // Handle search input
                  enterButton
                  className="w-full md:!w-[300px]"
                  style={{ width: '250px' }} // Adjust width if needed
                />
              </div>
            </div>
          </div>
        </Flex>
        <Flex className="!w-full flex items-center justify-center gap-6">
          <Button type="text" onClick={() => navigate('/')}>Home</Button>
          <Divider type="vertical" variant="solid" className='border border-black' />
          <Button type="text" onClick={() => navigate('/product')}>Products</Button>
          <Divider type="vertical" variant="solid" className='border border-black' />
          <Button type="text" onClick={() => navigate('/about')}>About</Button>
          <Divider type="vertical" variant="solid" className='border border-black' />
          <Button type="text" onClick={() => navigate('/new-arrival')}>New Arrival</Button>
          <Divider type="vertical" variant="solid" className='border border-black' />
          <Button type="text" onClick={() => navigate('/contact')}>Contact Us</Button>
        </Flex>
      </div>

      {/* Mobile Navbar */}
      <Flex className="w-full md:hidden fixed top-0 left-0 z-40 bg-white p-4 justify-between items-center overflow-x-hidden">
        <Image
          src="https://res.cloudinary.com/dvf9mmcww/image/upload/v1725982988/MainImages/kntrbdys2pgk0cxzazfq.png"
          className="!w-[120px]"
          preview={false}
          onClick={() => { navigate('/'); }}
        />
        <MenuOutlined onClick={showDrawer} className="text-xl cursor-pointer" />
      </Flex>

      {/* Drawer for mobile menu */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        visible={drawerVisible}
        className="md:hidden p-5"
      >
        <Button type="text" onClick={() => { navigate('/'); closeDrawer(); }} className="w-full text-left mb-5">
          Home
        </Button>
        <Button type="text" onClick={() => { navigate('/about'); closeDrawer(); }} className="w-full text-left mb-5">
          About Us
        </Button>
        <Button type="text" onClick={() => { navigate('/product'); closeDrawer(); }} className="w-full text-left mb-5">
          Products
        </Button>
        <Button type="text" onClick={() => { navigate('/contact'); closeDrawer(); }} className="w-full text-left mb-5">
          Contact
        </Button>
        <Button type={btn} onMouseEnter={() => setbtn('Default')} className="w-full text-white bg-black hover:bg-transparent mb-5 hover:border hover:border-green-700 hover:text-green-700" onClick={showModal}>
          Learn More
        </Button>
        <Learn open={open} handleCancel={handleCancel} />
      </Drawer>
    </>
  );
};

export default Nav;








// <Flex vertical={value === 'vertical'} className="fixed md:w-full md:top-0 md:left-0 z-40 bg-white hidden md:flex">
//           <div style={{ ...baseStyle }} className="flex items-center pl-10">
//             <Image
//               src="https://res.cloudinary.com/dvf9mmcww/image/upload/v1725982988/MainImages/kntrbdys2pgk0cxzazfq.png"
//               className="md:!w-[200px]"
//               preview={false}
//               onClick={() => { navigate('/'); }}
//             />
//           </div>
//           <div style={{ ...baseStyle }}>
//             <Flex vertical={value === 'vertical'} className="h-full flex items-center justify-between pl-20 pr-10">
//               <Button type="text" size={10} onClick={() => { navigate('/about'); }} className="font-semibold text-black">
//                 About Us
//               </Button>
//               <Button type="text" size={10} onClick={() => { navigate('/product'); }} className="font-semibold text-black">
//                 Products
//               </Button>
//               <Button type="text" size={10} onClick={() => { navigate('/contact'); }} className="font-semibold text-black">
//                 Contact
//               </Button>
//               <Button type={btn} onMouseEnter={() => setbtn('Default')} className="pt-3 pb-3 pl-4 pr-4 text-white bg-black hover:bg-transparent hover:border hover:border-green-700 hover:text-green-700" onClick={showModal}>
//                 Learn More
//               </Button>
//               <Learn open={open} handleCancel={handleCancel} />
//             </Flex>
//           </div>
//         </Flex>