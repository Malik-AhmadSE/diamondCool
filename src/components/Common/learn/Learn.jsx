import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import {CloseOutlined} from '@ant-design/icons'

const AboutUsModal = ({ open, handleCancel }) => {
    return (
        <>
            <Modal
                title=""
                open={open}
                onCancel={handleCancel}
                footer={null}
                closeIcon={<CloseOutlined />}
                className='!w-3/4 !h-full'
            >
        <div>
          <h2 className='font-semibold text-[25px] pb-5 mt-10'>About Diamond Cool</h2>
          <p className='pb-8'>
            Welcome to <strong>Diamond Cool</strong>, your trusted source for high-quality spare parts for 
            <strong> refrigerators</strong>, <strong>air conditioners</strong>, and <strong>washing machines</strong>. 
            We are dedicated to providing reliable, durable, and affordable solutions to keep your home appliances 
            functioning at their best.
          </p>
 
          <h3 className='font-semibold text-[25px] pb-5'>Our Expertise</h3>
          <p className='pb-8'>
            At <strong>Diamond Cool</strong>, we specialize in providing spare parts that are built to last. 
            We understand how crucial it is to maintain the performance of your essential appliances. Whether you need 
            parts to keep your refrigerator cooling efficiently, your air conditioner running smoothly, or your washing machine 
            working like new, we’ve got you covered.
          </p>

          <h3 className='font-semibold text-[25px] pb-5'>Premium Quality Spare Parts</h3>
          <p className='pb-8'>
            We pride ourselves on offering only <strong>premium quality spare parts</strong>. Every part we provide 
            meets industry standards and is designed to ensure long-lasting performance and durability. From compressors 
            to filters and other critical components, we ensure that our spare parts are reliable and trustworthy.
          </p>

          <h3 className='font-semibold text-[25px] pb-5'>Why Choose Diamond Cool?</h3>
          <ul className='pb-8'>
            <li><strong>Wide Selection:</strong> We offer a broad range of spare parts for Air Conditioners, Refrigerators 
            and washing machines, compatible with all leading brands.</li>
            <li><strong>Expert Knowledge:</strong> Our team has years of experience in the appliance industry and can provide 
            expert advice on the best parts for your specific needs.</li>
            <li><strong>Customer-Centric Service:</strong> We focus on delivering a personalized experience, ensuring you 
            get the right parts for your appliances.</li>
            <li><strong>Affordable Prices:</strong> At <strong>Diamond Cool</strong>, we believe in providing top-tier 
            products at competitive prices without compromising on quality.</li>
          </ul>

          <h3 className='font-semibold text-[25px] pb-5'>How to Place an Order</h3>
          <p className='pb-8'>
            Placing an order with <strong>Diamond Cool</strong> is easier than ever! Simply use the 
            <strong> WhatsApp feature</strong> on our website to reach out to us directly. Whether you need help choosing 
            the right part or are ready to place your order, we are just a message away. Our team is ready to assist you 
            with prompt and friendly service.
          </p>

          <h3 className='font-semibold text-[25px] pb-5'>Contact Us via WhatsApp</h3>
          <p className='pb-8'>
            You can use the WhatsApp feature on the website to directly connect with us for any queries or to place an order. 
            Our team is always available to guide you in selecting the right spare parts for your needs. We’re here to make 
            sure your appliances continue running smoothly for years to come.
          </p>
        </div>
            </Modal>
        </>
    );
};

export default AboutUsModal;
