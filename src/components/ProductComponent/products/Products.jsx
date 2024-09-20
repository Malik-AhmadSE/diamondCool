import React from 'react';
import { Card, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import Ref from '../../../pages/Allproducts/ref/Ref.jsx';
import Was from '../../../pages/Allproducts/was/Was.jsx';
import Kichen from '../../../pages/Allproducts/kichen/Kitchen.jsx';
import AirComponent from '../../../pages/Allproducts/air/Air.jsx';
import Tool from '../../../pages/Allproducts/tools/tools.jsx';


const cardDataair = [
  { id: 1, title: "Product 1", description: "www.instagram.com", imgSrc: 'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648834/airproducts/xpi22g0y33iu6binkmck.jpg' },
  { id: 2, title: "Product 2", description: "www.instagram.com", imgSrc: 'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648833/airproducts/tsepi9tchku0ypliagdw.jpg' },
  { id: 3, title: "Product 3", description: "www.instagram.com", imgSrc: 'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648835/airproducts/k0eb6hhmizqj8c5wadvo.jpg' },
  { id: 4, title: "Product 4", description: "www.instagram.com", imgSrc: 'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648835/airproducts/vkvq0briuwjirygmzzn8.jpg' },
];
const cardDataref = [
    { id: 1, title: "Product 1", description: "www.instagram.com", imgSrc: 'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726649139/Refrigerator/oypzkqlfyygjbgvlg0jp.jpg' },
    { id: 2, title: "Product 2", description: "www.instagram.com", imgSrc: 'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726649138/Refrigerator/svj1dljtknp60pz7tn9t.jpg' },
    { id: 3, title: "Product 3", description: "www.instagram.com", imgSrc: 'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726649137/Refrigerator/tr7tnl6jlcfvrkg7cxpv.jpg' },
    { id: 4, title: "Product 4", description: "www.instagram.com", imgSrc: 'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726649139/Refrigerator/mcmwcxy4wsmj3x5eza0b.jpg' },
  ];
const cardDatawash = [
      { id: 1, title: "Product 1", description: "www.instagram.com", imgSrc: 'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650153/Washinmachines/qilfrksft7ro2oy316pj.jpg' },
      { id: 2, title: "Product 2", description: "www.instagram.com", imgSrc: 'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650154/Washinmachines/pgmwtuowklhccrqsxdxl.jpg' },
      { id: 3, title: "Product 3", description: "www.instagram.com", imgSrc: 'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650155/Washinmachines/d4ixxnnmoosshyttv3wo.jpg' },
      { id: 4, title: "Product 4", description: "www.instagram.com", imgSrc: 'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650155/Washinmachines/yfv3cpuranjbq2gpg7wq.jpg' },
    ];  
const cardDatakic = [
      { id: 1, title: "Product 1", description: "www.instagram.com", imgSrc: 'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726652083/kitchen/hh8hfxorbadf6suuvyaz.jpg' },
      { id: 2, title: "Product 2", description: "www.instagram.com", imgSrc: 'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726652082/kitchen/gedyxyaqmileftt9kr1j.jpg' },
      { id: 3, title: "Product 3", description: "www.instagram.com", imgSrc: 'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726652082/kitchen/xcgs7hespz8noygjkir1.jpg' },
      { id: 4, title: "Product 4", description: "www.instagram.com", imgSrc: 'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726652081/kitchen/cfat5sxdqprhyyrlv6e0.jpg' },
    ];
const cardDatatool = [
        { id: 1, title: "Product 1", description: "www.instagram.com", imgSrc: 'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726676561/tools/nyhb5f93wrhqydzhjonl.jpg' },
        { id: 2, title: "Product 2", description: "www.instagram.com", imgSrc: 'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726676562/tools/mquveca7wemf90kgfll5.jpg' },
        { id: 3, title: "Product 3", description: "www.instagram.com", imgSrc: 'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726676563/tools/an7b04hutdtim4dfiwto.jpg' },
        { id: 4, title: "Product 4", description: "www.instagram.com", imgSrc: 'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726676562/tools/atynyeqasuef9auauxl4.jpg' },
      ];


const { Meta } = Card;

function Products() {
  const [openAir, setOpenAir] = React.useState(false);
  const [openRef, setOpenRef] = React.useState(false);
  const [openWas, setOpenWas] = React.useState(false);
  const [openki, setOpenki] = React.useState(false);
  const [opentool,setOpentool]=React.useState(false);

  const showAirModal = () => setOpenAir(true);
  const handleAirCancel = () => setOpenAir(false);
  const showRefModal = () => setOpenRef(true);
  const handleRefCancel = () => setOpenRef(false);
  const showWasModal = () => setOpenWas(true);
  const handleWasCancel = () => setOpenWas(false);
  const showKiModal = () => setOpenki(true);
  const handleKiCancel = () => setOpenki(false);
const showtoolModal = () => setOpentool(true);
  const handleToolCancel = () => setOpentool(false);

  return (
    <div className='flex flex-col gap-5 mt-10 pt-10 pl-10'>
      <div>
        <h6 className='font-semibold mb-2'>Categories</h6>
        <h1 className='md:w-[550px] font-bold text-[45px]'>Products</h1>
        <p className='md:w-[550px] pt-5 tracking-wider'>
          We offer High Quality Spare Parts for air Conditioners, Refrigerators, and washing machines.
        </p>
      </div>

      {/* Air Conditioners Section */}
      <div>
        <div className='flex justify-between items-center md:pr-10 pt-5'>
          <h1 className='md:w-[550px] font-bold text-[25px] md:text-[45px]'>Air Conditioners</h1>
          <Button type='link' iconPosition='end' icon={<RightOutlined />} className='font-semibold text-black -ml-4' onClick={showAirModal}>View More</Button>
          <AirComponent open={openAir} handleCancel={handleAirCancel} />
        </div>
        <div className='grid gap-10 pt-10 md:grid-cols-4 grid-cols-2'>
          {cardDataair.map((card) => (
            <Card
              key={card.id}
              hoverable
              className='w-full max-w-[240px]' // Full width on mobile, limit width on larger screens
              cover={<img alt={card.title} src={card.imgSrc} />}
            >
              <Meta title={<span className='text-sm md:text-base'>{card.title}</span>} description={<span className='text-xs md:text-sm'>{card.description}</span>} />
            </Card>
          ))}
        </div>
      </div>

      {/* Refrigerators Section */}
      <div className='flex justify-between items-center md:pr-10'>
        <h1 className='md:w-[550px] font-bold text-[25px] md:text-[45px]'>Refrigerators</h1>
        <Button type='link' iconPosition='end' icon={<RightOutlined />} className='font-semibold text-black -ml-4' onClick={showRefModal}>View More</Button>
        <Ref open={openRef} handleCancel={handleRefCancel} />
      </div>
      <div className='grid gap-10 pt-10 md:grid-cols-4 grid-cols-2'>
        {cardDataref.map((card) => (
          <Card
            key={card.id}
            hoverable
            className='w-full max-w-[240px]' // Full width on mobile, limit width on larger screens
            cover={<img alt={card.title} src={card.imgSrc} />}
          >
            <Meta title={<span className='text-sm md:text-base'>{card.title}</span>} description={<span className='text-xs md:text-sm'>{card.description}</span>} />
          </Card>
        ))}
      </div>

      {/* Washing Machines Section */}
      <div className='flex justify-between items-center md:pr-10'>
        <h1 className='md:w-[550px] font-bold text-[25px] md:text-[45px]'>Washing Machines</h1>
        <Button type='link' iconPosition='end' icon={<RightOutlined />} className='font-semibold text-black -ml-4' onClick={showWasModal}>View More</Button>
        <Was open={openWas} handleCancel={handleWasCancel} />
      </div>
      <div className='grid gap-10 pt-10 md:grid-cols-4 grid-cols-2'>
        {cardDatawash.map((card) => (
          <Card
            key={card.id}
            hoverable
            className='w-full max-w-[240px]' // Full width on mobile, limit width on larger screens
            cover={<img alt={card.title} src={card.imgSrc} />}
          >
            <Meta title={<span className='text-sm md:text-base'>{card.title}</span>} description={<span className='text-xs md:text-sm'>{card.description}</span>} />
          </Card>
        ))}
      </div>

      {/* Kitchen Section */}
      <div className='flex justify-between items-center md:pr-10'>
        <h1 className='md:w-[550px] font-bold text-[25px] md:text-[45px]'>Kitchen</h1>
        <Button type='link' iconPosition='end' icon={<RightOutlined />} className='font-semibold text-black -ml-4' onClick={showKiModal}>View More</Button>
        <Kichen open={openki} handleCancel={handleKiCancel} />
      </div>
      <div className='grid gap-10 pt-10 md:grid-cols-4 grid-cols-2'>
        {cardDatakic.map((card) => (
          <Card
            key={card.id}
            hoverable
            className='w-full max-w-[240px]' // Full width on mobile, limit width on larger screens
            cover={<img alt={card.title} src={card.imgSrc} />}
          >
            <Meta title={<span className='text-sm md:text-base'>{card.title}</span>} description={<span className='text-xs md:text-sm'>{card.description}</span>} />
          </Card>
        ))}
      </div>

      {/* Tool Section */}
      <div className='flex justify-between items-center md:pr-10'>
        <h1 className='md:w-[550px] font-bold text-[25px] md:text-[45px]'>Tools</h1>
        <Button type='link' iconPosition='end' icon={<RightOutlined />} className='font-semibold text-black -ml-4' onClick={showtoolModal}>View More</Button>
        <Tool open={opentool} handleCancel={handleToolCancel} />
      </div>
      <div className='grid gap-10 pt-10 md:grid-cols-4 grid-cols-2'>
        {cardDatatool.map((card) => (
          <Card
            key={card.id}
            hoverable
            className='w-full max-w-[240px]' // Full width on mobile, limit width on larger screens
            cover={<img alt={card.title} src={card.imgSrc} />}
          >
            <Meta title={<span className='text-sm md:text-base'>{card.title}</span>} description={<span className='text-xs md:text-sm'>{card.description}</span>} />
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Products;
