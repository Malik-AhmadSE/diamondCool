// AirComponent.js
import React, { useState, useEffect } from 'react';
import { Card, Modal } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { ImageImporter } from './ImageImporter/ImageImporter.jsx'; // Import the ImageImporter component

const { Meta } = Card;

const AirComponent = ({ open, handleCancel }) => {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    // Fetch combined image and product details data
    const data = ImageImporter();
    setImageData(data);
  }, []);

  return (
    <Modal
      title="Air Conditioners Spare Parts"
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
        {imageData.map((card, index) => (
          <Card
            key={index}
            hoverable
            style={{
              width: 240,
              marginBottom: '16px',
            }}
            cover={<img alt={card.title} src={card.src} style={{ width: '100%' }} />}
          >
            <Meta title={card.title} description={card.description} />
          </Card>
        ))}
      </div>
    </Modal>
  );
};

export default AirComponent;
