import React from 'react'
import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import Learn from '../Common/learn/Learn.jsx';
function Buttons() {
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
    <div className='pb-5 flex gap-10'>
        <Button type={btn} onMouseEnter={() => setbtn('primary')} className='bg-transparent pt-4 pb-4 pl-5 pr-5 font-semibold text-green-700 border hover:!bg-black hover:border hover:border-black border-green-700 hover:text-white' onClick={showModal}>Learn More</Button>
        <Button type='text' icon={<RightOutlined />} iconPosition='end' className='font-semibold text-black' onClick={()=>navigate('/contact')}>Contact Us</Button>
        <Learn open={open} handleCancel={handleCancel} />
    </div>
  )
}

export default Buttons;