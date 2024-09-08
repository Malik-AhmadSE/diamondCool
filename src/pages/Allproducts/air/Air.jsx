import React, { useState, useEffect } from 'react';
import { Card, Modal, Skeleton } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { ImageImporter } from './ImageImporter/ImageImporter.jsx'; // Make sure this is working and returning correct data
const { Meta } = Card;

const AirComponent = ({ open, handleCancel }) => {
  const [imageData, setImageData] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    try {
      const data = ImageImporter();
      console.log('Fetched data:', data); 
      setImageData(data);
      setLoading(false); 
    } catch (error) {
      console.error('Error loading images or data:', error); 
    }
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
        {loading ? (
          // Show skeletons while loading
          Array.from({ length: 10 }).map((_, index) => (
            <Card
              key={index}
              hoverable
              style={{
                width: 240,
                marginBottom: '16px',
              }}
            >
              <Skeleton.Image style={{ width: '100%', height: '150px' }} />
              <Skeleton active paragraph={{ rows: 2 }} />
            </Card>
          ))
        ) : (
          // Show actual content after loading
          imageData.map((card, index) => (
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
          ))
        )}
      </div>
    </Modal>
  );
};

export default AirComponent;
