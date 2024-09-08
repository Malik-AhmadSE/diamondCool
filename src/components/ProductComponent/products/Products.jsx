import React from 'react'
import { Card } from 'antd';
import { Button } from 'antd';
import Ref from '../../../pages/Allproducts/ref/Ref.jsx';
import Was from '../../../pages/Allproducts/was/Was.jsx';
import { RightOutlined } from '@ant-design/icons';
import AirComponent from '../../../pages/Allproducts/air/Air.jsx';
import Air1 from '../../../assets/images/airproducts/air1.png';
import Air2 from '../../../assets/images/airproducts/air10.png';
import Air3 from '../../../assets/images/airproducts/air4.png';
import Air4 from '../../../assets/images/airproducts/air7.png';
const cardData = [
  { id: 1, title: "Product 1", description: "www.instagram.com", imgSrc: Air1 },
  { id: 2, title: "Product 2", description: "www.instagram.com", imgSrc: Air2 },
  { id: 3, title: "Product 3", description: "www.instagram.com", imgSrc: Air3 },
  { id: 4, title: "Product 4", description: "www.instagram.com", imgSrc: Air4 },
];
const { Meta } = Card;
function Products() {
  const [openAir, setOpenAir] = React.useState(false);
  const [openRef, setOpenRef] = React.useState(false);
  const [openWas, setOpenWas] = React.useState(false);

  const showAirModal = () => {
    setOpenAir(true);
  };
  const handleAirCancel = () => {
    setOpenAir(false);
  };

  const showRefModal = () => {
    setOpenRef(true);
  };
  const handleRefCancel = () => {
    setOpenRef(false);
  };

  const showWasModal = () => {
    setOpenWas(true);
  };
  const handleWasCancel = () => {
    setOpenWas(false);
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
      <Button type='link' icon={<RightOutlined />} iconPosition='end' className='font-semibold text-black -ml-4' onClick={showAirModal}>View More</Button>
      <AirComponent open={openAir} handleCancel={handleAirCancel} />
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
      <Button type='link' icon={<RightOutlined />} iconPosition='end' className='font-semibold text-black -ml-4' onClick={showRefModal}>View More</Button>
      <Ref open={openRef} handleCancel={handleRefCancel} />     
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
<Button type='link' icon={<RightOutlined />} iconPosition='end' className='font-semibold text-black -ml-4' onClick={showWasModal}>View More</Button>
<Was open={openWas} handleCancel={handleWasCancel} />  
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