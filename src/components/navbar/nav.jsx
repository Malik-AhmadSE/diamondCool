import React from 'react';
import { Flex, Button, Image, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons'; // Import hamburger icon
import { useNavigate } from 'react-router';
import Learn from '../Common/learn/Learn.jsx';

const baseStyle = {
  width: '50%',
  height: 70,
};

const Nav = () => {
  const [value, setValue] = React.useState('horizontal');
  const [btn, setbtn] = React.useState("primary");
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false); 
  const [drawerVisible, setDrawerVisible] = React.useState(false); // State for drawer

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  // Mobile menu toggle handler
  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <>
      <Flex gap="middle" vertical className="w-full overflow-hidden">
        <Flex vertical={value === 'vertical'} className="md:fixed md:w-full md:top-0 md:left-0 z-40 bg-white hidden md:flex">
          <div style={{ ...baseStyle }} className="flex items-center pl-10">
            <Image
              src="https://res.cloudinary.com/dvf9mmcww/image/upload/v1725982988/MainImages/kntrbdys2pgk0cxzazfq.png"
              className="md:!w-[200px]"
              preview={false}
              onClick={() => { navigate('/'); }}
            />
          </div>
          <div style={{ ...baseStyle }}>
            <Flex vertical={value === 'vertical'} className="h-full flex items-center justify-between pl-20 pr-10">
              <Button type="text" size={10} onClick={() => { navigate('/about'); }} className="font-semibold text-black">
                About Us
              </Button>
              <Button type="text" size={10} onClick={() => { navigate('/product'); }} className="font-semibold text-black">
                Products
              </Button>
              <Button type="text" size={10} onClick={() => { navigate('/contact'); }} className="font-semibold text-black">
                Contact
              </Button>
              <Button type={btn} onMouseEnter={() => setbtn('Default')} className="pt-3 pb-3 pl-4 pr-4 text-white bg-black hover:bg-transparent hover:border hover:border-green-700 hover:text-green-700" onClick={showModal}>
                Learn More
              </Button>
              <Learn open={open} handleCancel={handleCancel} />
            </Flex>
          </div>
        </Flex>
      </Flex>

      {/* Mobile Navbar */}
      <Flex className="w-full md:hidden fixed top-0 left-0 z-40 bg-white p-4 justify-between items-center">
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
        <Button type="text" onClick={() => { navigate('/about'); closeDrawer(); }} className="w-full text-left mb-5">
          About Us
        </Button>
        <Button type="text" onClick={() => { navigate('/product'); closeDrawer(); }} className="w-full text-left mb-5">
          Products
        </Button>
        <Button type="text" onClick={() => { navigate('/contact'); closeDrawer(); }} className="w-full text-left mb-5">
          Contact
        </Button>
        <Button type={btn} onMouseEnter={() => setbtn('Default')} className=" w-full text-white bg-black hover:bg-transparent mb-5 hover:border hover:border-green-700 hover:text-green-700" onClick={showModal}>
          Learn More
        </Button>
        <Learn open={open} handleCancel={handleCancel} />
      </Drawer>
    </>
  );
};

export default Nav;
