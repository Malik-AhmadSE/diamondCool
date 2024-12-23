import React, { useRef } from 'react';
import { Card, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import Ref from '../../../pages/Allproducts/ref/Ref.jsx';
import Was from '../../../pages/Allproducts/was/Was.jsx';
import Kichen from '../../../pages/Allproducts/kichen/Kitchen.jsx';
import AirComponent from '../../../pages/Allproducts/air/Air.jsx';
import Tool from '../../../pages/Allproducts/tools/tools.jsx';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cardDataair = [
  { id: 1, title: "Axial fans of different sizes blowers", description: "", imgSrc: 'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648834/airproducts/xpi22g0y33iu6binkmck.jpg' },
  { id: 2, title: "Fan blades", description: "", imgSrc: 'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648833/airproducts/tsepi9tchku0ypliagdw.jpg' },
  { id: 3, title: "R-22 Maxref 13.6kg", description: "", imgSrc: 'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648835/airproducts/k0eb6hhmizqj8c5wadvo.jpg' },
  { id: 4, title: "Air conditioning stands", description: "", imgSrc: 'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648835/airproducts/vkvq0briuwjirygmzzn8.jpg' },
];
const cardDataref = [
    { id: 1, title: "Condenser", description: "", imgSrc: 'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726649139/Refrigerator/oypzkqlfyygjbgvlg0jp.jpg' },
    { id: 2, title: "Small fan for refrigerant", description: "", imgSrc: 'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726649138/Refrigerator/svj1dljtknp60pz7tn9t.jpg' },
    { id: 3, title: "Condenser motor", description: "", imgSrc: 'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726649137/Refrigerator/tr7tnl6jlcfvrkg7cxpv.jpg' },
    { id: 4, title: "Door Handle", description: "", imgSrc: 'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726649139/Refrigerator/mcmwcxy4wsmj3x5eza0b.jpg' },
  ];
const cardDatawash = [
      { id: 1, title: "Heater for washing machine ", description: "", imgSrc: 'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650153/Washinmachines/qilfrksft7ro2oy316pj.jpg' },
      { id: 2, title: "Samsung LG Daewoo Haier", description: "", imgSrc: 'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650154/Washinmachines/pgmwtuowklhccrqsxdxl.jpg' },
      { id: 3, title: "Solenoid Valve 1,2, 3 ", description: "", imgSrc: 'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650155/Washinmachines/d4ixxnnmoosshyttv3wo.jpg' },
      { id: 4, title: "Door switch for Samsung LG Daewoo ", description: "", imgSrc: 'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650155/Washinmachines/yfv3cpuranjbq2gpg7wq.jpg' },
    ];  
const cardDatakic = [
      { id: 1, title: "Thermostat 30-120°C", description: "", imgSrc: 'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726652083/kitchen/hh8hfxorbadf6suuvyaz.jpg' },
      { id: 2, title: "Oven Door Hinges", description: "", imgSrc: 'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726652082/kitchen/gedyxyaqmileftt9kr1j.jpg' },
      { id: 3, title: "Ice Maker Timer", description: "", imgSrc: 'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726652082/kitchen/xcgs7hespz8noygjkir1.jpg' },
      { id: 4, title: "Heaters Big", description: "", imgSrc: 'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726652081/kitchen/cfat5sxdqprhyyrlv6e0.jpg' },
    ];
const cardDatatool = [
        { id: 1, title: "Stands", description: "", imgSrc: 'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726676561/tools/nyhb5f93wrhqydzhjonl.jpg' },
        { id: 2, title: "Flaring Accessories", description: "", imgSrc: 'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726676562/tools/mquveca7wemf90kgfll5.jpg' },
        { id: 3, title: "Tool Box", description: "", imgSrc: 'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726676563/tools/an7b04hutdtim4dfiwto.jpg' },
        { id: 4, title: "Big Flaring Tool Box", description: "", imgSrc: 'https://res.cloudinary.com/dvf9mmcww/image/upload/v1726676562/tools/atynyeqasuef9auauxl4.jpg' },
      ];


const { Meta } = Card;

function Products() {
  const containerRef = useRef(null);
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

  useGSAP(() => {
    const sections = containerRef.current.children;
    Array.from(sections).forEach((section, index) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        delay: index * 0.2
      });
    });
  }, []);

  return (
    <div className='w-full md:px-8 px-4 flex items-center justify-center'>
      <div ref={containerRef} className='w-[95%] max-w-[1440px] flex flex-col md:gap-5 pt-10'>
        <div>
          <h6 className='font-semibold mb-2'>Categories</h6>
          <h1 className='md:w-[550px] font-bold md:text-[45px] text-[30px]'>Products</h1>
          <p className='md:w-[550px] pt-5 tracking-wider'>
            We offer High Quality Spare Parts for air Condition, Refrigerators, and washing machines.
          </p>
        </div>

        {/* Air Conditioners Section */}
        <div>
          <div className='flex justify-between items-center md:pr-10 pt-5'>
            <h1 className='md:w-[550px] font-bold text-[30px] md:text-[45px]'>Air Condition Spare Parts</h1>
            <Button type='link' iconPosition='end' icon={<RightOutlined />} className='font-semibold text-black -ml-4' onClick={showAirModal}>View More</Button>
            <AirComponent open={openAir} handleCancel={handleAirCancel} />
          </div>
          <div className='grid gap-10 pt-10 md:grid-cols-4 grid-cols-2'>
            {cardDataair.map((card) => (
              <Card
                key={card.id}
                hoverable
                className='w-full max-w-[240px]'
                cover={<img alt={card.title} src={card.imgSrc} />}
              >
                <Meta title={<span className='text-sm md:text-base'>{card.title}</span>} description={<span className='text-xs md:text-sm'>{card.description}</span>} />
              </Card>
            ))}
          </div>
        </div>

        {/* Refrigerators Section */}
        <div className='flex justify-between items-center pt-10 md:pr-10'>
          <h1 className='md:w-[550px] font-bold text-[30px] md:text-[45px]'>Refrigerators Spare Parts</h1>
          <Button type='link' iconPosition='end' icon={<RightOutlined />} className='font-semibold text-black -ml-4' onClick={showRefModal}>View More</Button>
          <Ref open={openRef} handleCancel={handleRefCancel} />
        </div>
        <div className='grid gap-10 pt-10 md:grid-cols-4 grid-cols-2'>
          {cardDataref.map((card) => (
            <Card
              key={card.id}
              hoverable
              className='w-full max-w-[240px]'
              cover={<img alt={card.title} src={card.imgSrc} />}
            >
              <Meta title={<span className='text-sm md:text-base'>{card.title}</span>} description={<span className='text-xs md:text-sm'>{card.description}</span>} />
            </Card>
          ))}
        </div>

        {/* Washing Machines Section */}
        <div className='flex justify-between items-center pt-10 md:pr-10'>
          <h1 className='md:w-[550px] font-bold text-[25px] md:text-[45px]'>Washing Machines Spare Parts</h1>
          <Button type='link' iconPosition='end' icon={<RightOutlined />} className='font-semibold text-black -ml-4' onClick={showWasModal}>View More</Button>
          <Was open={openWas} handleCancel={handleWasCancel} />
        </div>
        <div className='grid gap-10 pt-10 md:grid-cols-4 grid-cols-2'>
          {cardDatawash.map((card) => (
            <Card
              key={card.id}
              hoverable
              className='w-full max-w-[240px]'
              cover={<img alt={card.title} src={card.imgSrc} />}
            >
              <Meta title={<span className='text-sm md:text-base'>{card.title}</span>} description={<span className='text-xs md:text-sm'>{card.description}</span>} />
            </Card>
          ))}
        </div>

        {/* Kitchen Section */}
        <div className='flex justify-between items-center pt-10 md:pr-10'>
          <h1 className='md:w-[550px] font-bold text-[25px] md:text-[45px]'>Kitchen Spare Parts</h1>
          <Button type='link' iconPosition='end' icon={<RightOutlined />} className='font-semibold text-black -ml-4' onClick={showKiModal}>View More</Button>
          <Kichen open={openki} handleCancel={handleKiCancel} />
        </div>
        <div className='grid gap-10 pt-10 md:grid-cols-4 grid-cols-2'>
          {cardDatakic.map((card) => (
            <Card
              key={card.id}
              hoverable
              className='w-full max-w-[240px]'
              cover={<img alt={card.title} src={card.imgSrc} />}
            >
              <Meta title={<span className='text-sm md:text-base'>{card.title}</span>} description={<span className='text-xs md:text-sm'>{card.description}</span>} />
            </Card>
          ))}
        </div>

        {/* Tool Section */}
        <div className='flex justify-between items-center pt-10 md:pr-10'>
          <h1 className='md:w-[550px] font-bold text-[25px] md:text-[45px]'>Tools</h1>
          <Button type='link' iconPosition='end' icon={<RightOutlined />} className='font-semibold text-black -ml-4' onClick={showtoolModal}>View More</Button>
          <Tool open={opentool} handleCancel={handleToolCancel} />
        </div>
        <div className='grid gap-10 pt-10 md:grid-cols-4 grid-cols-2'>
          {cardDatatool.map((card) => (
            <Card
              key={card.id}
              hoverable
              className='w-full max-w-[240px]'
              cover={<img alt={card.title} src={card.imgSrc} />}
            >
              <Meta title={<span className='text-sm md:text-base'>{card.title}</span>} description={<span className='text-xs md:text-sm'>{card.description}</span>} />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
