import React from 'react';
import { Card, Modal, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const { Meta } = Card;

const cardData = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  title: `Product ${index + 1}`,
  description: "www.instagram.com",
  imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
}));

const WasComponent = ({ open, handleCancel }) => (
  <Modal
    title="Washing Machines Spare Parts"
    open={open}
    onCancel={handleCancel}
    footer={null} 
    closeIcon={<CloseOutlined />}
    className='!w-full !h-full' 
  >
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '40px',
        padding: '20px',
      }}
    >
      {cardData.map((card) => (
        <Card
          key={card.id}
          hoverable
          style={{
            width: 240,
            marginBottom: '16px', // Add margin to avoid overlapping in smaller screens
          }}
          cover={<img alt={card.title} src={card.imgSrc} />}
        >
          <Meta title={card.title} description={card.description} />
        </Card>
      ))}
    </div>
  </Modal>
);

export default WasComponent;
