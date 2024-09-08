import React, { useEffect, useState } from 'react'
import { Card } from 'antd';
import cards1 from '../../../assets/images/cards1.png'
import cards2 from '../../../assets/images/cards2.png'
import cards3 from '../../../assets/images/cards3.png'
import Buttons from '../../buttons/Buttons';
import CardsLoader from '../../Common/skeleton/Cards.jsx';
const Cards = () => {
   const [loading, setLoading] = useState(true);
   useEffect(() => {
      setTimeout(() => {
         setLoading(false);
      }, 10000);
   }, []);
   return (
      <>
         {
            loading ? (<CardsLoader />) : (
        <> <div className='relative top-[430px] w-full flex gap-16 justify-center mt-10'>
      <Card
      hoverable
       bordered={false}
      style={{
         width: 350,
         height:400,
      }}
      cover={<img alt="cards" src={cards1} />}>
     <h1 className='font-bold text-[25px] pt-4 text-center'>
        Air Conditioning Spare Parts & Services
     </h1>
     <p className='text-center text-[12px]'>We offer a wide range of air conditioning spare parts to support installation, repair, and maintenance, ensuring your space stays cool and comfortable.</p>
  </Card>
  <Card
    hoverable
    bordered={false}
    style={{
      width: 350,
      height:400,
    }}
    cover={<img alt="cards" src={cards2} />}
  >
     <h1 className='font-bold text-[25px] pt-4 text-center'>
     Refrigeration Spare Parts & Services
     </h1>
     <p className='text-center text-[12px]'>We provide high-quality spare parts for the installation, repair, and maintenance of commercial and residential refrigeration systems</p>
  </Card>
  <Card
    hoverable
    bordered={false}
    style={{
      width: 350,
      height:400,
    }}
    cover={<img alt="cards" src={cards3} />}
  >
     <h1 className='font-bold text-[25px] pt-4 text-center'>
     Home Appliance Services
     </h1>
     <p className='text-center text-[12px]'>From refrigerators to air conditioners, we specialize in providing high-quality spare parts to ensure your appliances function optimally.</p>
  </Card>
 </div>
 <div className='relative top-[500px] w-full flex justify-center items-center'>
    <Buttons />
 </div></>)}
      </>
   )
};
export default Cards;