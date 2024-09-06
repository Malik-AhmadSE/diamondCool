import React from 'react';
import {
    Checkbox,
    Form,
    Typography,
    Input,
    Radio,
    Select,
    FloatButton,
} from 'antd';
import { Button } from 'antd';

function ContactInfo() {
    const [btn, setbtn] = React.useState("primary");
    return (
        <>
            <div className='w-full flex flex-col justify-center items-center relative top-56 pl-10'>
                <h6 className='font-semibold mb-2'>Get in Touch</h6>
                <h1 className='font-bold text-[45px]'>Contact Us</h1>
                <p className='pt-5 tracking-wider'>We'd love to hear from you!</p>
            </div>
            <div className='w-full relative top-72 z-1 flex justify-center items-center gap-3 flex-wrap'>
                <Form
                    name="layout-multiple-horizontal"
                    layout="horizontal"
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 20,
                    }}
                    className='w-[100%] flex flex-col justify-center items-center '
                >
                    <div className='flex flex-row gap-10'>
                        <div className='flex flex-col gap-3'>
                            <Typography className='font-semibold'>First Name</Typography>
                            <Form.Item>
                                <Input className='!w-[300px] !p-2' />
                            </Form.Item>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <Typography className='font-semibold'>Last Name</Typography>
                            <Form.Item>
                                <Input className='!w-[300px] !p-2' />
                            </Form.Item>
                        </div>
                    </div>
                    <div className='flex flex-row gap-10'>
                        <div className='flex flex-col gap-3'>
                            <Typography className='font-semibold'>Email</Typography>
                            <Form.Item>
                                <Input className='!w-[300px] !p-2' />
                            </Form.Item>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <Typography className='font-semibold'>Phone Number</Typography>
                            <Form.Item>
                                <Input className='!w-[300px] !p-2' />
                            </Form.Item>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <Typography className='font-semibold'>Choose a Topic</Typography>
                        <Form.Item>
                            <Select placeholder="Select a topic ..." className='!h-10 !w-[640px]'>
                                <Option value="technical issue">Technical Issue</Option>
                                <Option value="buy product">Buy Products</Option>
                                <Option value="other">other</Option>
                            </Select>
                        </Form.Item>
                    </div>
                    <div className='w-[100%] flex justify-center items-center'>
                        <div className='flex flex-col gap-3 w-[50%]'>
                            <Typography className='font-semibold pb-5'>Which best describes you?</Typography>
                            <Form.Item>
                                <Radio.Group className='flex flex-wrap justify-between'>
                                    <div className='w-[48%] flex items-center pb-2'>
                                        <Radio value="Customer Inquiry"> Customer Inquiry </Radio>
                                    </div>
                                    <div className='w-[48%] flex items-center pb-2'>
                                        <Radio value="Product Support"> Product Support </Radio>
                                    </div>
                                    <div className='w-[48%] flex items-center pb-2'>
                                        <Radio value="General Question"> General Question </Radio>
                                    </div>
                                    <div className='w-[48%] flex items-center pb-2'>
                                        <Radio value="Feedback"> Feedback </Radio>
                                    </div>
                                    <div className='w-[48%] flex items-center pb-2'>
                                        <Radio value="Other Inquiry"> Other Inquiry </Radio>
                                    </div>
                                    <div className='w-[48%] flex items-center pb-2'>
                                        <Radio value="Other"> Other </Radio>
                                    </div>
                                </Radio.Group>
                            </Form.Item>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 w-[50%]'>
                        <Typography className='font-semibold'>Message</Typography>
                        <Form.Item className='!w-full'>
                            <textarea rows={10} placeholder='Enter your message ....' className='!w-[640px] border border-gray-300 rounded-md p-2'/>
                        </Form.Item>
                    </div>
                    <div className='flex flex-row gap-3'>
                        <Checkbox/>I agree the Terms
                    </div>
                    <Button type={btn} onMouseEnter={() => setbtn('primary')} className='bg-transparent mt-8 pt-4 pb-4 pl-5 pr-5 font-semibold text-green-700 border hover:!bg-black hover:border hover:border-black border-green-700 hover:text-white'>Submit</Button>
                </Form>
            </div>
        </>
    )
}

export default ContactInfo;
