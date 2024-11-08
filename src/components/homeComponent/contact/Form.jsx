import React, { useRef } from 'react';
import {
    Checkbox,
    Form,
    Typography,
    Input,
    Radio,
    Select,
    Button,
} from 'antd';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const { Option } = Select;

function ContactInfo() {
    const [btn, setbtn] = React.useState("primary");
    const formRef = useRef(null);
    const titleRef = useRef(null);
    const contentRef = useRef(null);

    useGSAP(() => {
        // Reset any existing animations
        gsap.set([titleRef.current, contentRef.current], { clearProps: "all" });

        // Title section animation
        gsap.from(titleRef.current, {
            opacity: 0,
            y: -50,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: formRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        // Form content animation with stagger effect
        gsap.from(contentRef.current.children, {
            opacity: 0,
            y: 30,
            stagger: 0.2,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: formRef.current,
                start: "top 60%",
                toggleActions: "play none none reverse"
            }
        });
    });

    return (
        <div className='w-full px-8 md:px-0 flex justify-center items-center md:mt-28 mt-16' ref={formRef}>
            <div>
            <div className='w-full flex flex-col justify-center items-center' ref={titleRef}>
                <h6 className='font-semibold mb-2'>Get in Touch</h6>
                <h1 className='font-bold md:text-[45px] text-[25px]'>Contact Us</h1>
                <p className='pt-5 tracking-wider'>We'd love to hear from you!</p>
            </div>
            <div className='w-full mt-16 z-1 flex justify-center items-center gap-3 flex-wrap' ref={contentRef}>
                <Form
                    name="layout-multiple-horizontal"
                    layout="vertical"
                    className='w-full max-w-[800px] flex flex-col justify-center items-center'
                >
                    <div className='flex flex-col md:flex-row md:gap-10 gap-3 w-full'>
                        <div className='flex flex-col gap-3 w-full md:w-1/2'>
                            <Typography className='font-semibold'>First Name  <span className='text-red-500'>*</span></Typography>
                            <Form.Item>
                                <Input className='!p-2' />
                            </Form.Item>
                        </div>
                        <div className='flex flex-col gap-3 w-full md:w-1/2'>
                            <Typography className='font-semibold'>Last Name <span className='text-red-500'>*</span></Typography>
                            <Form.Item>
                                <Input className='!p-2' />
                            </Form.Item>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-10 w-full'>
                        <div className='flex flex-col gap-3 w-full md:w-1/2'>
                            <Typography className='font-semibold'>Email  <span className='text-red-500'>*</span></Typography>
                            <Form.Item>
                                <Input className='!p-2' />
                            </Form.Item>
                        </div>
                        <div className='flex flex-col gap-3 w-full md:w-1/2'>
                            <Typography className='font-semibold'>Phone Number  <span className='text-red-500'>*</span></Typography>
                            <Form.Item>
                                <Input className='!p-2' />
                            </Form.Item>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 w-full'>
                        <Typography className='font-semibold'>Choose a Topic  <span className='text-red-500'>*</span></Typography>
                        <Form.Item>
                            <Select placeholder="Select a topic ..." className='!h-10'>
                                <Option value="technical issue">Technical Issue</Option>
                                <Option value="buy product">Buy Products</Option>
                                <Option value="other">Other</Option>
                            </Select>
                        </Form.Item>
                    </div>
                    <div className='flex flex-col gap-3 w-full'>
                        <Typography className='font-semibold pb-5'>Which best describes you?</Typography>
                        <Form.Item>
                            <Radio.Group className='flex flex-wrap justify-between'>
                                {["Customer Inquiry", "Product Support", "General Question", "Feedback", "Other Inquiry", "Other"].map(value => (
                                    <div className='w-[48%] flex items-center pb-2' key={value}>
                                        <Radio value={value}>{value}</Radio>
                                    </div>
                                ))}
                            </Radio.Group>
                        </Form.Item>
                    </div>
                    <div className='flex flex-col gap-3 w-full'>
                        <Typography className='font-semibold'>Message</Typography>
                        <Form.Item className='!w-full'>
                            <textarea rows={5} placeholder='Enter your message ....' className='!w-full border border-gray-300 rounded-md p-2' />
                        </Form.Item>
                    </div>
                    <div className='flex items-center mb-4'>
                        <Form.Item>
                            <Checkbox /> I agree to the Terms *
                        </Form.Item>
                    </div>
                    <Button type={btn} onMouseEnter={() => setbtn('primary')} className='bg-transparent mt-8 pt-4 pb-4 pl-5 pr-5 font-semibold text-green-700 border hover:bg-black hover:border hover:border-black border-green-700 hover:text-white'>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
        </div>
    );
}

export default ContactInfo;
