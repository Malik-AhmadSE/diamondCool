import React from 'react'
import { Card } from 'antd';
import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import AirComponent from '../../../pages/Allproducts/air/Air';
import Ref from '../../../pages/Allproducts/ref/Ref';
import Was from '../../../pages/Allproducts/was/Was';
const cardData = [
  { id: 1, title: "Product 1", description: "www.instagram.com", imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" },
  { id: 2, title: "Product 2", description: "www.instagram.com", imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" },
  { id: 3, title: "Product 3", description: "www.instagram.com", imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" },
  { id: 4, title: "Product 4", description: "www.instagram.com", imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" },
];
const { Meta } = Card;
function Products() {
  const [open, setOpen] = React.useState(false); 

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className=' relative flex flex-col gap-5 top-64 pt-10 pl-10'>
       <div>
       <h6 className='font-semibold mb-2'>Catagories</h6>
       <h1 className='w-[550px] font-bold text-[45px]'>Products</h1>
       <p className='w-[550px] pt-5 tracking-wider'>We offers High Quality Spare Parts for air Conditioners, Refrigrator and washing machines.</p>
       </div>
      <div >
      <div className='flex justify-between items-center pr-10'>
      <h1 className='w-[550px] font-bold text-[45px]'>Air Conditioners</h1>
      <Button type='link' icon={<RightOutlined />} iconPosition='end' className='font-semibold text-black -ml-4' onClick={showModal}>View More</Button>
      <AirComponent open={open} handleCancel={handleCancel} />
      </div>
        <div className='flex justify-center pt-10 items-center gap-10 !pl-0'>
        {cardData.map((card) => (
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt={card.title} src={card.imgSrc} />}
        >
          <Meta title={card.title} description={card.description} />
        </Card>
        ))}
        </div>
      </div>

      <div className='flex justify-between items-center pr-10'>
      <h1 className='w-[550px] font-bold text-[45px]'>Refrigrators</h1>
      <Button type='link' icon={<RightOutlined />} iconPosition='end' className='font-semibold text-black -ml-4' onClick={showModal}>View More</Button>
      <Ref open={open} handleCancel={handleCancel} />     
      </div>
        <div className='flex justify-center pt-10 items-center gap-10 !pl-0'>
        {cardData.map((card) => (
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt={card.title} src={card.imgSrc} />}
        >
          <Meta title={card.title} description={card.description} />
        </Card>
        ))}
        </div>

<div className='flex justify-between items-center pr-10'>
<h1 className='w-[550px] font-bold text-[45px]'>Washing Machines</h1>
<Button type='link' icon={<RightOutlined />} iconPosition='end' className='font-semibold text-black -ml-4' onClick={showModal}>View More</Button>
<Was open={open} handleCancel={handleCancel} />  
</div>
  <div className='flex justify-center pt-10 items-center gap-10 !pl-0'>
  {cardData.map((card) => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt={card.title} src={card.imgSrc} />}
  >
    <Meta title={card.title} description={card.description} />
  </Card>
  ))}
  </div>

    </div>
  )
}

export default Products