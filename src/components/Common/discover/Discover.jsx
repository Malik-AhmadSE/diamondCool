import React from 'react'
import { Button, Card, Flex, Typography } from 'antd';
const cardStyle = {
  width: 620,
};
const imgStyle = {
  display: 'block',
  width: 273,
};
function Discover() {
  return (
    <div className='relative top-[450px] flex justify-center item-center mb-[150px]'>

       <Card hoverable className=' w-[80%] h-[450px] !overflow-hidden !p-0'>
    <Flex justify="space-between">
    <Flex
        vertical
        align="flex-end"
        justify="space-between"
        style={{
          padding: 32,
        }}
      >
        <Typography.Title level={3}>
          “antd is an enterprise-class UI design language and React UI library.”
        </Typography.Title>
        <Button type="primary" href="https://ant.design" target="_blank">
          Get Started
        </Button>
      </Flex>
      <img
        alt="avatar"
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        style={imgStyle}
      />
      
    </Flex>
  </Card>

    </div>
  )
}
export default Discover;