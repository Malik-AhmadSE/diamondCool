import React, { useState, useEffect } from 'react';
import { Card, Modal, Skeleton } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { ImageImporter } from './ImageImporter/ImageImporter.jsx'; // Ensure ImageImporter works correctly
const { Meta } = Card;

const AirComponent = ({ open, handleCancel }) => {
  const [imageData, setImageData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an async data fetch with a delay to mimic loading behavior
    const fetchData = async () => {
      setLoading(true); // Start loading

      // Simulate a delay (e.g., 1.5 seconds) using setTimeout
      setTimeout(() => {
        try {
          const data = ImageImporter(); // Assume this is a synchronous function
          console.log('Fetched data:', data);
          setImageData(data);
          setLoading(false); // Stop loading after data is fetched
        } catch (error) {
          console.error('Error loading images or data:', error);
          setLoading(false); // Stop loading even if there's an error
        }
      }, 10000); 
    };

    fetchData();
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
              <Skeleton.Image className='!w-[100%] pb-5' />
              <Skeleton active title={true} className='pb-2'/>
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
