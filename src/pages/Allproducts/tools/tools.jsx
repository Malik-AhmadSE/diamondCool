import React, { useState, useEffect } from 'react';
import { Card, Modal } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { ImageImporter } from './ImageImporter/ImageImporter.jsx';

const { Meta } = Card;

const AirComponent = ({ open, handleCancel }) => {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    const data = ImageImporter();
    setImageData(data);
  }, []);

  return (
    <Modal
      title="Tools"
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
          gap: '20px',
          padding: '20px',
        }}
      >
        {imageData.map((card, index) => (
          <Card
            key={index}
            hoverable
            style={{
              width: 'calc(100% / 2 - 20px)', 
              maxWidth: 240, 
              marginBottom: '16px',
            }}
            cover={<img alt={card.title} src={card.image} style={{ width: '100%' }} />}
          >
            <Meta title={card.title} description={card.description} />
          </Card>
        ))}
      </div>
    </Modal>
  );
};

export default AirComponent;
