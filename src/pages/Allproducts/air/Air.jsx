import React, { useState, useEffect } from 'react';
import { Card, Modal, Skeleton } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { ImageImporter } from './ImageImporter/ImageImporter.jsx'; // Import the ImageImporter component
const { Meta } = Card;

const AirComponent = ({ open, handleCancel }) => {
  const [imageData, setImageData] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Simulate an API call or image loading
    setTimeout(() => {
      const data = ImageImporter();
      setImageData(data);
      setLoading(false); // Set loading to false after data is fetched
    }, 2000); // Simulate a delay for loading
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
